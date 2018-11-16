import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchArticles, filterArticles } from '../../actions';
import Posts from '../posts/posts';
import Search from '../search/search';

class Blog extends Component {
  componentWillMount() {
    this.props.fetchArticles();
  }

  render() {
    const { posts } = this.props;
    const { results } = this.props;
    return (
      <div id="home">
        <Search onSearch={this.props.search} />
        {this.props.searchStr.length && !results.length ? (<p>Hmm... nothing found</p>) : null}
        <Posts posts={this.props.searchStr.length ? results : posts} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
    results: state.results,
    searchStr: state.searchStr,
  };
}

const mapDispatchToProps = dispatch => ({
  fetchArticles: () => dispatch(fetchArticles),
  search: searchStr => dispatch(filterArticles(searchStr)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Blog);
