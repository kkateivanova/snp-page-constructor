if (process.env.NODE_ENV === 'production') {
  module.exports = require('./Root.build');
} else {
  module.exports = require('./Root.dev');
}
