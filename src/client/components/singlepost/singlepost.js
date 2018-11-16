import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { fetchArticle, deleteArticle, resetDeleteArticle } from '../../actions';
import Post from '../post/post';
import './singlePost.less';

class SinglePost extends Component {
  constructor(props) {
    super(props);
    this.deletePost = this.deletePost.bind(this);
  }

  componentWillMount() {
    const id = this.props.match.params.slug;
    this.props.fetchArticle(id);
  }

  componentWillUnmount() {
    this.props.resetDeleteArticle();
  }

  deletePost() {
    this.props.deleteArticle(this.props.post.id);
  }

  render() {
    const { post } = this.props;
    if (this.props.deleteSuccess) {
      return (<Redirect push to="/" />);
    }
    return (
      <div className="single-post grid">
        <Post data={ post } singleView>
          <span onClick={ this.deletePost } className="action delete">Delete</span>
        </Post>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    post: state.singleArticle,
    deleteSuccess: state.deleteSuccess,
  };
}

const mapDispatchToProps = dispatch => ({
  fetchArticle: id => dispatch(fetchArticle(id)),
  deleteArticle: id => dispatch(deleteArticle(id)),
  resetDeleteArticle: () => dispatch(resetDeleteArticle()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SinglePost);
