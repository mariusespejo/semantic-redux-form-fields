const path = require('path');
module.exports = {
  require: [
    path.join(__dirname, 'node_modules/semantic-ui-css/semantic.min.css')
  ],
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/styleguide/Wrapper')
  }
};