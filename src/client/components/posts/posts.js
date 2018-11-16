import React from 'react';
import { Link } from 'react-router-dom';

import Post from '../post/post';
import './posts.less';

const Posts = props => (
  <div className="posts grid">
    { props.posts && props.posts.map(post => (<Post key={post.id} data={post} preview />)) }
    <Link to="/new" className="new">Create new blog post</Link>
  </div>
);

export default Posts;
