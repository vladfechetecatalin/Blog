const express = require('express');
const bodyParser = require('body-parser');
const db = require('./database');

const app = express();

const api = require('./api');

app.use(express.static('dist'));
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, X-Auth-Token');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  next();
});

app.use((req, res, next) => {
  db.getData().then((posts) => {
    req.session = {};
    req.session.posts = posts;
    next();
  }).catch((e) => {
    console.log(e);
    next();
  });
});

app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));

// get articles
app.get('/api/articles', api.fetchArticles);

// get article
app.get('/api/article/:id', api.fetchArticle);

// // post article
app.post('/api/article', api.addArticle);

// // update article
app.put('/api/article/:id', api.editArticle);

// // delete article
app.delete('/api/article/:id', api.deleteArticle);

app.listen(8080, () => console.log('Listening on port 8080!'));
