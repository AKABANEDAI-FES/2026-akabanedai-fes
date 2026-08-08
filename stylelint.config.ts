import type { Config } from 'stylelint'

export default {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recess-order',
    '@css-modules-kit/stylelint-plugin/recommended',
  ],

  rules: {
    'selector-pseudo-class-no-unknown': [true, { ignorePseudoClasses: ['global', 'local'] }],
    'selector-class-pattern': [
      '^[a-z][a-zA-Z0-9]*$',
      { message: 'Class names must use camelCase' },
    ],
  },
} satisfies Config
