---
head:
  - - link
    - rel: stylesheet
      href: https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css
---
# XST Platform 
## Internal logic
### Extrinsics
#### Enabling synthetic asset
```mermaid
sequenceDiagram
    actor S as Sudo user
    participant X as XST Platform
    participant O as Oracle Proxy
    participant A as Assets
    participant T as Trading Pair
    
    S->>X: Enable synthetic asset with <br/> specified asset id, reference symbol <br/> and fee ratio
    break Reference symbol is already used by other synthetic
        X-->>S: Symbol already referenced to synthetic
    end
    break Fee ratio not in bounds [0, 1)
        X-->>S: Invalid fee ratio
    end
    X->O: List enabled symbols
    break Specified reference symbol is not present in Oracle proxy
        X-->>S: Symbol does not exist
    end
    X->>A: Ensure asset exist
    break Asset id is not present in Assets
        A-->>S: Asset Id not exists
    end
    X->A: Get asset info
    break Asset precision = 0
        X-->>S: Can't enable indivisible asset
    end

    opt Trading pair (Base synthetic asset, Asset) does not exist
        X->>T: Register trading pair
        X->>T: Enable XST as liquidity source for trading pair
    end
    X->>X: Insert new synthetic asset into EnabledSynthetics
    X->>X: Insert referenced symbol into EnabledSymbols
    X->>X: Deposit event SyntheticAssetEnabled
    X-->>S: Ok
```

#### Registring new synthetic asset
```mermaid
sequenceDiagram
    actor S as Sudo user
    participant X as XST Platform
    participant A as Assets
    S->>X: Register synthetic asset
    X->>X: Generate asset id based on referenced symbol
    X->>A: Register new asset
    break Asset already exists
        A-->>S: Asset Id already exists
    end
    Note over X: Enabling synthetic asset
    X-->>S: Ok
```

#### Setting reference asset
```mermaid
sequenceDiagram
    actor S as Sudo user
    participant X as XST Platform
    participant A as Assets
    S->>X: Set reference asset
    X->>A: Ensure asset exists
    break Asset id is not present in Assets
        A-->>S: Asset Id not exists
    end
        X->A: Get asset info
    break Asset precision = 0
        X-->>S: Indivisible referecne asset
    end
    X->>X: Put asset id into ReferenceAssetId
    X->>X: Deposit event ReferenceAssetChanged
    X-->>S: Ok
```

#### Disabling synthetic asset
```mermaid
sequenceDiagram
    actor S as Sudo user
    participant X as XST Platform

    S->>X: Disable synthetic asset
    break Synthetic asset id is not present in EnabledSynthetics
        X-->>S: Synthetic is not enabled
    end
    X->>X: Remove synthetic asset id from EnabledSymbols
    X->>X: Remove linked reference symbol from EnabledSymbols
    X->>X: Deposit event SyntheticAssetDisabled
    X-->>S: Ok
```

#### Setting synthetic asset fee
```mermaid
sequenceDiagram
    actor S as Sudo user
    participant X as XST Platform

    S->>X: Set synthetic asset fee
    X->>X: Mutate synthetic asset record in EnabledSynthetics
    break Synthetic asset id is not present in EnabledSynthetics
        X-->>S: Synthetic is not enabled
    end
    X->>X: Deposit event SyntheticAssetFeeChanged
    X-->>S: Ok
```

#### Setting synthetic base asset floor price
```mermaid
sequenceDiagram
    actor S as Sudo user
    participant X as XST Platform

    S->>X: Set synthetic base asset floor price
    X->>X: Put floor price in SyntheticBaseAssetFloorPrice
    X->>X: Deposit event SyntheticBaseAssetFloorPriceChanged
    X-->>S: Ok
```

### LiquiditySource trait implementation
#### Quoting synthetic asset
```mermaid
sequenceDiagram
    participant L as Liquidity Proxy
    participant X as XST Platform
    participant O as Oracle Proxy
    L->>X: Quote assets X-Y
    break DEX Id is not Polkaswap (0) or none of the assets is synthetic base asset or target asset is not enabled as synthetic
        X-->>L: Can't exchange 

    end
    Note over X,L: Assuming asset X is synthetic asset <br/> and asset Y is synthetic base asset
    Note over X: Quote amount calculation
    activate X
    X->>O: Get rate of oracle symbol linked to X
    break Oracle symbol is outdated
        O-->>X: Rate expired
        X-->>L: Oracle Quote Error
    end
    O-->>X: Symbol rate
    break An error occurred while calculating the price
        X-->>L: Price Calculation Failed
    end 
    break Limits for slippage has not been met during transaction execution.
        X-->>L: SlippageLimitExceeded
    end 
    deactivate X
    X-->>L: Asset X quote amount
```

#### Exchanging synthetic asset
```mermaid
sequenceDiagram
    participant L as Liquidity Proxy
    participant X as XST Platform
    participant O as Oracle Proxy
    participant A as Assets
    L->>X: Exchange assets X-Y
    break DEX Id is not Polkaswap (0) or none of the assets is synthetic base asset or target asset is not enabled as synthetic
        X-->>L: Can't exchange 

    end
        Note over X,L: Assuming asset X is synthetic asset <br/> and asset Y is synthetic base asset
    Note over X: Swap amount calculation
    activate X
    X->>O: Get rate of oracle symbol linked to X
    break Oracle symbol is outdated
        O-->>X: Rate expired
        X-->>L: Oracle Quote Error
    end
    O-->>X: Symbol rate
    break An error occurred while calculating the price
        X-->>L: Price Calculation Failed
    end 
    break Limits for slippage has not been met during transaction execution.
        X-->>L: SlippageLimitExceeded
    end 
    deactivate X
    X->>A: burn input amount of asset X/Y for caller account
    break something went wrong inside Assets pallet
        A-->>L: <Assets error>
    end
    X->>A: mint output amount of asset Y/X for caller account
    break something went wrong inside Assets pallet
        A-->>L: <Assets error>
    end
    X-->>L: Asset X quote amount
```

## Quote/swap amount calculation process
### Notation
$S_f$ - Fee ratio associated with the selected synthetic asset

$S_o$ - Rate of the oracle symbol associated with the selected synthetic asset

$B_p^b$ - Reference buy price of the base synthetic asset in reference asset units

$B_p^s$ - Reference sell price of the base synthetic asset in reference asset units

$\overline{R_p^b}$ - Reference buy price of the reference asset in XOR units

$\overline{R_p^s}$ - Reference sell price of the reference asset in XOR units

$O$ - output amount

$I$ - input amount

$F_{XOR}$ - fee amount in XOR
<!-- ![](<.gitbook/assets/xst-notation.svg>) -->
### PriceTools price calculation
Before delving into how quote and swap amounts are calculated, it's crucial to understand how the price of a synthetic base asset is calculated in reference units.

The PriceTools pallet stores two distinct average prices for each asset found in the XYK Pool. These averages are recalculated every block in relation to their previous values, ensuring their difference doesn't exceed certain lower and upper ratio bounds. Two values are stored because there are two scenarios: one could **buy** XOR with some asset or **sell** XOR for some asset. The capping lower and upper ratio bounds differ in each scenario, introducing asymmetry. The lower ratio bound in buy cases equals the upper ratio bound in the sell case, and vice versa.

If one is buying the synthetic base asset, its price is calculated as follows:

$B_p^b = \frac{\overline{R_p^b}}{\overline{B_p^s}}$

This equation calculates the price one would get by swapping the reference asset to XOR (i.e., **buying** XOR) and then buying the synthetic base asset with XOR (i.e., **selling** XOR).
The sell price of the synthetic base asset is calculated as follows:

$B_p^s = \frac{\overline{R_p^s}}{\overline{B_p^b}}$

### Synthetic base floor price
If the calculated price of synhtetic base asset exceeds the limit in `SyntheticBaseAssetFloorPrice`, then the price is set to this limit.
### Sell case (Selling synthetic base to some synthetic asset)
#### With desired input
$O = \frac{(I - I\times S_f)\times B_p^s}{S_o}$

Since the fee is calculated in XST and should be paid in XOR, we need to convert it 

$F_{XOR} = \frac{I\times S_f}{\overline{B_p^s}}$
#### With desired output
$I = \frac{O \times S_o}{B_p^s} \times \frac{1}{1 - S_f}$

$F_{XOR} = \left (I - \frac{O \times S_o}{B_p^s} \right ) \times \frac{1}{\overline{B_p^s}}$
### Buy case (Buying synthetic base with some synthetic asset)
#### With desired input
$O = \frac{I \times S_o}{B_p^b} \times (1 - S_f)$

$F_{XOR} = \frac{I \times S_o}{B_p^b} \times S_f \times \frac{1}{\overline{B_p^s}}$
#### With desired output
$O_{w/\ fee} = \frac{O}{1 - S_f}$

$I = \frac{O_{w/\ fee} \times B_p^b}{S_o}$

$F_{XOR} = \frac{O_{w/\ fee} - O}{\overline{B_p^s}}$
