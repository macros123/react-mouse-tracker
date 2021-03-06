import React from 'react';
import logo from '../sources/кот1.png';
import { Component } from '../types/Types';

const maxHeight = window.innerHeight;
const maxWidth = window.innerWidth;

export const Cat = ({ mouse, touch }: Component) => {
  return (
    <img src={logo} alt='' style={{ position: 'absolute', left: mouse.x > maxWidth - 63 ? maxWidth - 113 : mouse.x - 50, top: mouse.y > maxHeight - 170 ? maxHeight - 170 : mouse.y, height: '170px' }} onClick={touch} />
  );
}
