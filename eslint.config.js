'use strict'

import neostandard from 'neostandard'

export default [
  ...neostandard({
    ts: true
  }),
  {
    rules: {
      '@typescript-eslint/no-unused-vars': 'off'
    },
  }
]
