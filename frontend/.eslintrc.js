module.exports = {
    "env": {
      "browser": true,
      "es2021": true,
      "node": true
    },
    "parser": "@typescript-eslint/parser",
    "extends": [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:react-hooks/recommended",
      "plugin:jsx-a11y/recommended",
      "plugin:@typescript-eslint/recommended"
    ],
    "parserOptions": {
      "ecmaFeatures": {
        "jsx": true
      },
      "ecmaVersion": 2020,
      "sourceType": "module"
    },
    "plugins": [
      "react",
      "react-hooks",
      "jsx-a11y"
    ],
    "rules": {
        "react/react-in-jsx-scope": "off",
        "react/prop-types": "off",

      // Add any custom rules or overrides here
    },
    "settings": {
      "react": {
        "version": "detect"
      }
    }
  }
  
