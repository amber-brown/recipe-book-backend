module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true
  },
  extends: ["eslint:recommended", "prettier"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
    it: "readonly",
    describe: "readonly",
    expect: "readonly",
    beforeAll: "readonly",
    afterAll: "readonly",
    beforeEach: "readonly",
    afterEach: "readonly"
  },
  parserOptions: {
    ecmaVersion: 2018
  },
  rules: {}
};
