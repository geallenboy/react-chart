const reactLint = require('@garron/standard/dist/reactLint');

reactLint.rules['react/display-name'] = 'off'
// reactLint.rules = {...reactLint.rules,'react/display-name':'off'}

module.exports = {
  ...reactLint
};
