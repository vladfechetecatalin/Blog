import {
  deleteItem, editItem, addItem
} from './api';
import {
  req, postsAfterDelete, postsAfterAdd, postsAfterUpdate
} from './posts.mock';

test('delete a post entry by id', () => {
  expect(deleteItem(req, '2')).toEqual({
    posts: postsAfterDelete
  });
});

test('edit a post entry by id', () => {
  expect(editItem(req, '2', { header: "test foo", body: 'more foo bar update' })).toEqual({
      posts: postsAfterUpdate
  });
});

test('add new post', () => {
  const newPost = { header: 'Foo bar bazzzz', body: 'even more foo bar baz' };
  expect(addItem(req, newPost)).toHaveLength(4);
});
