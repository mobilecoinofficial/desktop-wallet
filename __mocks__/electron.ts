// CBB: We're manually adding functions to this electron-js mock object.
// 1) we could likely autogenerate this mock, and
// 2) we may want to explicitly mock the module in specific tests.

module.exports = {
  app: {
    getPath: jest.fn(),
    getVersion: jest.fn(),
  },
  dialog: jest.fn(),
  match: jest.fn(),
  remote: jest.fn(),
  require: jest.fn(),
};
