const fs = require('fs');

const getData = () => (
  new Promise((resolve, reject) => {
    fs.readFile(require.resolve('../database/database.json'), (err, fileContent) => {
      if (!err) {
        resolve(JSON.parse(fileContent));
      } else {
        reject(err);
      }
    });
  })
);

const updateDb = posts => (
  new Promise((resolve, reject) => {
    fs.writeFile('./src/database/database.json', JSON.stringify(posts), (err) => {
      if (!err) {
        resolve();
      } else {
        console.log(err);
        reject(err);
      }
    });
  })
);

module.exports = {
  getData,
  updateDb
};
