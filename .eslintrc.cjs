module.exports = {
  root: true,
  extends: [
    "@meslzy/eslint-config",
    "@meslzy/eslint-config/typescript",
    "@meslzy/eslint-config/react",
  ],
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
  },
};