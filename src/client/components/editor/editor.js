import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { fetchArticle, updateArticle, resetEdit } from '../../actions';

import './editor.less';
import Post from '../post/post';
import EditorForm from '../editorform/editorform';

class Editor extends Component {
  constructor(props) {
    super(props);
    this.onSave = this.onSave.bind(this);
  }

  componentWillMount() {
    const id = this.props.match.params.slug;
    this.props.fetchArticle(id);
  }

  componentWillUnmount() {
    this.props.resetEdit();
  }

  onSave(data) {
    console.log(data);
    const id = this.props.match.params.id;
    this.props.updateArticle(data, data.id);
  }

  render() {
    const { post } = this.props;
    if (this.props.editSuccess) {
      return (<Redirect push to="/" />);
    }

    return (
      <div className="editor">
        <div className="editor-space column">
          <EditorForm data={post} onSaveHandler={this.onSave} />
        </div>

        <div className="preview column">
          <Post data={post} editing/>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    post: state.singleArticle,
    editSuccess: state.editSuccess,
  };
}

const mapDispatchToProps = dispatch => ({
  fetchArticle: id => dispatch(fetchArticle(id)),
  updateArticle: (data, id) => dispatch(updateArticle(data, id)),
  resetEdit: () => dispatch(resetEdit()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Editor);
