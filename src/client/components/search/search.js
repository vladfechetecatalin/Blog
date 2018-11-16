import React, { Component } from 'react';
import './search.less';

class Search extends Component {
  constructor() {
    super();
    this.searchPost = this.searchPost.bind(this);
  }

  searchPost(e) {
    this.props.onSearch(e.target.value);
  }

  render() {
    return (
      <div className="search">
        <input onChange={this.searchPost} type="search" id="blog-search" placeholder="Search title or content" />
      </div>
    );
  }
}

export default Search;
