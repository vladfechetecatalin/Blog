import React, { Component } from 'react';
import './header.less';

export default class Header extends Component {

  render() {
    return (
      <div className="header">
        <img className="image" src="https://picsum.photos/1920/400?image=1044"></img>
        <div className="bar"></div>
      </div>
    );
  }
}
