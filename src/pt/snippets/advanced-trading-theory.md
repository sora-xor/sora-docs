Para Polkaswap significa trocar (negociar) tokens em [Polkaswap](https://polkaswap.io/), Polkaswap é um protocolo AMM DEX de cadeia cruzada sem custódia para troca de tokens, Polkaswap elimina intermediários confiáveis ​​​​e oferece a oportunidade de troca mais rápida negociação, e Polkaswap também combina múltiplas fontes de liquidez sob um algoritmo comum de agregação de liquidez, operando completamente em cadeia, de forma descentralizada e sem confiança.

O design técnico do Polkaswap permite que diferentes fontes de liquidez sejam utilizadas para negociação. No momento, Polkaswap oferece suporte a duas fontes de liquidez:

- Piscina XYK
- Curva de ligação de token (TBC)

Os pools XYK são gerenciados pela comunidade. Qualquer um pode fornecer liquidez a qualquer grupo. Cada grupo tem XOR como ativo base. Por exemplo, existem dois grupos: XOR-VAL, XOR-PSWAP. Se você fizer uma troca VAL-PSWAP, o caminho da troca será o seguinte: de VAL para XOR, de XOR para PSWAP.

O TBC é descrito em detalhes [aqui](../snippets/../tbc). Você pode comprar e vender XOR usando TBC, e os ativos colaterais iniciais são USDT, VAL, PSWAP.

Quando você troca com as configurações padrão, o algoritmo Liquidity Proxy seleciona o pool de liquidez com o melhor preço. No entanto, comprar XOR no TBC é recompensado com PSWAP. A fonte de liquidez pode mudar na configuração do swap, tornando a negociação mais flexível.

A configuração do Exchange e outros tópicos serão abordados na seção Prática.
