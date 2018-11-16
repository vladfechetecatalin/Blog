const db = require('./database');
const orderBy = require('lodash.orderby');
const slugify = require('../helpers/slugify');

const deleteItem = (req, id) => {
  const postsCopy = req.session.posts.slice(0);
  const index = postsCopy.findIndex(p => p.id == id);
  postsCopy.splice(index, 1);
  return { posts: postsCopy };
};

const editItem = (req, id, newData) => {
  const { posts } = req.session;
  const postsCopy = posts.slice(0);
  const index = posts.findIndex(p => p.id == id);
  const post = posts[index];
  postsCopy[index] = { ...post, ...newData, updated_at: Date.now(), slug: slugify.create(newData.header)};
  return { posts: postsCopy };
};

const addItem = (req, data) => {
  const postsCopy = req.session.posts.slice(0);
  const newArticle = {
    id: slugify.create(data.header + Date.now()),
    slug: slugify.create(data.header),
    ...data,
    created_at: Date.now(),
    updated_at: Date.now()
  };

  postsCopy.push(newArticle);

  return {
    posts: postsCopy
  };
};

const fetchItem = (req, slug) => req.session.posts.find(p => p.slug == slug);

const fetchArticles = (req, res) => {
  const sortedPosts = orderBy(req.session.posts, ['created_at'], ['desc']);
  res.json({ posts: sortedPosts });
};

const searchArticles = (req, res) => {
  var query = 'test';
  const sortedPosts = orderBy(req.session.posts, ['created_at'], ['desc']);
  sortedPosts.filter(function (post) {
    return (post.header.includes() > query || post.body.includes(query));
  });

  res.json({ posts: sortedPosts });
};

const deleteArticle = (req, res) => {
  const resp = deleteItem(req, req.params.id);
  db.updateDb(resp.posts).then(() => {
    res.json(resp);
  }).catch(() => {
    res.status(500);
  });
};

const editArticle = (req, res) => {
  if (!String(req.body.header) || !String(req.body.body)) {
    sendError(req, res, 'edit');
    return;
  }

  const resp = editItem(req, req.params.id, req.body);
  db.updateDb(resp.posts).then(() => {
    res.json(resp);
  }).catch(() => {
    res.status(500);
  });
};

const addArticle = (req, res) => {
  if (!String(req.body.header) || !String(req.body.body)) {
    sendError(req, res, 'edit');
    return;
  }

  const resp = addItem(req, req.body);
  db.updateDb(resp.posts).then(() => {
    res.json(resp);
  }).catch(() => {
    res.status(500);
  });
};

const sendError = (req, res, source) => {
  res.status(500);
  res.send();
};

const fetchArticle = (req, res) => {
  res.json(fetchItem(req, req.params.id))
};

module.exports = {
  deleteItem,
  editItem,
  addItem,
  fetchArticles,
  fetchArticle,
  deleteArticle,
  editArticle,
  addArticle,
};
