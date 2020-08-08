import React from 'react';
import logo from '../sources/cat.png';
import {Component} from '../types/Types';


export default class Cat extends React.Component<Component, {}> {
    render() {
      const mouse = this.props.mouse;
      return (
        <img src={logo} style={{ position: 'absolute', left: mouse.x - 120, top: mouse.y - 50 }} />
      );
    }
  }
