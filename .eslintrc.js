module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "node": true,
    "es6": true,
    "jest/globals": true
  },
  "extends": [
    "eslint:recommended",
    "@seedrs/eslint-config-seedrs-base",
    "@seedrs/eslint-config-seedrs-react"
  ],
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "plugins": ["jest"]
};
