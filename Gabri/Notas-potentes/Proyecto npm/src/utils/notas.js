const config = require('../config');

function getPath(name) {
  return `./${config.notes.folder}/${name}.${config.notes.ext}`;
}

module.exports = {
  getPath,
};
