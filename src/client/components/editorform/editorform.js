import React, { Component } from 'react';

import './editorform.less';

class EditorForm extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onSave = this.onSave.bind(this);
    this.state = {
      header: '',
      body: '',
      image: '',
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.data) {
      this.setState(nextProps.data);
    }
  }

  onChange(e) {
    const newVal = e.target.value;
    const attribute = e.target.getAttribute('name');

    this.setState({
      [attribute]: newVal,
    });
  }

  onSave(e) {
    e.preventDefault();
    
    if (!this.state.header || !this.state.body) {
      return;
    }

    this.props.onSaveHandler(this.state);
  }

  render() {
    return (
      <form>
          <label>
              Title:
              <input type="text" value={this.state.header} onChange={ this.onChange } name="header" />
          </label>

          <label>
              Content:
              <textarea value={this.state.body} onChange={ this.onChange } name="body" />
          </label>

          <label>
              Image (URL):
              <input type="text" value={this.state.image} onChange={ this.onChange } name="image" />
          </label>
          <button onClick={this.onSave}>Save</button>
      </form>
    );
  }
}
export default EditorForm;
