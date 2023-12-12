const expressLoader = require('./express');

function init(app, config) {
  expressLoader(app);
}

module.exports = {
  init,
};
