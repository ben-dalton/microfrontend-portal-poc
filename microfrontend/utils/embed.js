const fs = require('fs');

let entries = {};

const getContainers = function() {
  fs.readdirSync('../client/src/Exports/')
    .filter(f => f.match(/.*\.js$/))
    .forEach(f => {
      entries[
        f.replace('.js', '').toLowerCase()
      ] = `../client/src/Exports/${f}`;
      return f;
    });
  return entries;
};

exports.default = getContainers();
