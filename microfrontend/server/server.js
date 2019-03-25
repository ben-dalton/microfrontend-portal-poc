const fs = require('fs');
const path = require('path');
const cors = require('cors');
const express = require('express');

const PORT = 3001;

const app = express();

app.use(cors());

app.use('/public', express.static(`${__dirname}/public`));

const embedPath = 'public/embed';

function getPathToEmbedAssets(moduleName) {
  const filesPath = {};
  fs.readdirSync(`${__dirname}/${embedPath}`)
    .filter(f => f.split('.')[0] === moduleName)
    .forEach(fileName => {
      if (fileName.indexOf('.css') !== -1) {
        filesPath['css'] = `${embedPath}/${fileName}`;
      }
      if (fileName.indexOf('.js') !== -1) {
        filesPath['js'] = `${embedPath}/${fileName}`;
      }
    });

  return filesPath;
}

const modules = fs
  .readdirSync(`${__dirname}/${embedPath}`)
  .filter(f => f.match(/.*\.js$/))
  .map(f => f.split('.')[0]);

modules.forEach(moduleName => {
  app.get(`/api/embed-assets/${moduleName}`, (req, res) => {
    res.json(getPathToEmbedAssets(moduleName));
  });
});

app.get('*', (req, res) => {
  const template = path.resolve(__dirname, 'public/index.html');
  res.sendFile(template);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
