import type { Config } from 'stylelint'

export default {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recess-order',
    '@css-modules-kit/stylelint-plugin/recommended',
  ],
  plugins: ['stylelint-declaration-strict-value', 'stylelint-value-no-unknown-custom-properties'],

  rules: {
    'selector-pseudo-class-no-unknown': [true, { ignorePseudoClasses: ['global', 'local'] }],
    'selector-class-pattern': [
      '^[a-z][a-zA-Z0-9]*$',
      { message: 'Class names must use camelCase' },
    ],
    'csstools/value-no-unknown-custom-properties': [
      true,
      { importFrom: ['src/styles/global.css'] },
    ],
  },

  overrides: [
    {
      files: ['**/*.module.css'],
      rules: {
        'color-no-hex': true,
        'color-named': 'never',
        'scale-unlimited/declaration-strict-value': [
          ['/color$/', 'fill', 'stroke'],
          {
            ignoreValues: ['currentcolor', 'transparent', 'none', 'auto', 'inherit'],
            expandShorthand: true,
            disableFix: true,
          },
        ],
      },
    },
  ],
} satisfies Config
