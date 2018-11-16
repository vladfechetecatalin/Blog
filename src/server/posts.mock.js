const posts = [
  { id: '1', title: 'Foo', body: 'some foo bar' },
  { id: '2', title: 'Foo bar', body: 'more foo bar' },
  { id: '3', title: 'Foo bar baz', body: 'more foo bar baz' }
];

const req = {
  session: {
    posts,
  }
};

const postsAfterDelete = [
  { id: '1', title: 'Foo', body: 'some foo bar' },
  { id: '3', title: 'Foo bar baz', body: 'more foo bar baz' }
];

const postsAfterAdd = [
  { id: '1', title: 'Foo', body: 'some foo bar' },
  { id: '2', title: 'Foo bar', body: 'more foo bar' },
  { id: '3', title: 'Foo bar baz', body: 'more foo bar baz' },
  { id: '4', title: 'Foo bar bazzzz', body: 'even more foo bar baz' },
];
const postUpdate = { id: '2', title: 'Foo bar', body: 'more foo bar update' };
const postsAfterUpdate = [
  { id: '1', title: 'Foo', body: 'some foo bar' },
  { id: '2', title: 'Foo bar', body: 'more foo bar update' },
  { id: '3', title: 'Foo bar baz', body: 'more foo bar baz' }
];

module.exports = {
  req,
  postsAfterAdd,
  postsAfterDelete,
  postsAfterUpdate,
  postUpdate,
};
