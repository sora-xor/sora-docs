// eslint-disable-next-line no-undef
module.exports = {
    printWidth: 120,
    tabWidth: 2,
    useTabs: false,
    semi: false,
    singleQuote: true,
    quoteProps: 'as-needed',
    jsxSingleQuote: false,
    trailingComma: 'all',
    bracketSpacing: true,
    arrowParens: 'always',
    rangeStart: 0,
    rangeEnd: Infinity,
    requirePragma: false,
    insertPragma: false,
    proseWrap: 'preserve',
    htmlWhitespaceSensitivity: 'css',
    vueIndentScriptAndStyle: false,
    endOfLine: 'lf',
    embeddedLanguageFormatting: 'auto',
  
    overrides: [
      {
        files: ['./src/**/*.md'],
        options: {
          printWidth: 75,
          proseWrap: 'always',
        },
      },
    ],
  }