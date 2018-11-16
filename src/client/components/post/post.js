import React from 'react';
import { Link } from 'react-router-dom';

import './post.less';

const Post = (props) => {
  const { preview } = props;
  const { data } = props;
  const { singleView } = props;

  if (preview) {
    data.body = data.body.substring(0, 400).concat('...');
  }

  return (
    <div className="post">
      { !props.editing && 
        <div className="actions">
          { props.children }
          { singleView &&
            <Link to={`/edit/${data.slug}`} className="action edit">Edit</Link>
          }
        </div>
      }

      <Link to={`/post/${data.slug}`}>
        <div className="header">
          <div className="title">{ data.header }</div>
        </div>

        { data.image && 
          <div className="photo">
            <img src={data.image} />
          </div>
        }

        <div className="body">
          <p>{ data.body }</p>
          { preview && <div className="overlay" /> }
        </div>

        { preview && <div className="read-more">Read more</div>}
      </Link>
    </div>
  );
};

export default Post;
