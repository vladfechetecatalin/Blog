import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { createArticle, resetCreateArticle } from '../../actions';

import EditorForm from '../editorform/editorform';

class Editor extends Component {
  constructor(props) {
    super(props);
    this.onSave = this.onSave.bind(this);
  }

  componentWillUnmount() {
    this.props.resetCreate();
  }

  onSave(data) {
    this.props.createArticle(data);
  }

  render() {
    if (this.props.createSuccess) {
      return (<Redirect push to="/" />);
    }
    return (
      <div className="editor">
        <div className="editor-space column">
          <EditorForm onSaveHandler={this.onSave} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    createSuccess: state.createSuccess,
  };
}

const mapDispatchToProps = dispatch => ({
  createArticle: (data, id) => dispatch(createArticle(data, id)),
  resetCreate: () => dispatch(resetCreateArticle()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Editor);
