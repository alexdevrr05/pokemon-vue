module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  moduleNameMapper: {
    '^axios$': require.resolve('axios'),
  },
};
