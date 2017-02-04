module.exports = {
  "parser": "babel-eslint",
  "extends": [
    "standard",
    "standard-react"
  ],
  "plugins": [
    "flow-vars",
    "react",
    "react-native"
  ],
  "rules": {
    "react-native/no-unused-styles": 2,
    "flow-vars/define-flow-type": 1,
    "flow-vars/use-flow-type": 1,
    "semi": 0,
    "space-before-function-paren": 0
  }
};
