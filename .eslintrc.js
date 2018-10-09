// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true
  },
  globals: {
    weex: true
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential', 
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    'vue/no-parsing-error':  [2, {
      "x-invalid-end-tag": false
    }],
    "no-mixed-spaces-and-tabs" : ["error", "smart-tabs"],
    'vue/html-indent': ['error', 'tab', {
			'alignAttributesVertically': true,
		}],
    "vue/script-indent": ["error", 'tab', {
      "baseIndent": 0,
      "switchCase": 0,
      "ignores": []
    }],
    "linebreak-style": "off",
    "indent": "off",//缩进风格
    "quote-props": ["error", "as-needed", { "keywords": true, "unnecessary": true, "numbers": false }],
    "consistent-this": ["error", "that"],
    "func-names": "off",
    "no-underscore-dangle": ["error", { "allow": ["_id", "__v"] }],
    "no-restricted-dangle": "off",
    "guard-for-in": "warn",
    "vars-on-top": "warn",
    "no-tabs": "off",
    "class-methods-use-this": "off",
    "no-plusplus": "off",
    "semi": [2, "always", { "omitLastInOneLineBlock": true }],
    "no-unreachable": "error"
  }
}
