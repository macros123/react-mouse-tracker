import React from 'react';
import Cat from './Cat';
import {MouseTrackIF} from '../types/Types';

export default class MouseTracker extends React.Component<{}, MouseTrackIF> {
    constructor(props: object) {
      super(props);
      this.handleMouseMove = this.handleMouseMove.bind(this);
      this.handleClickButton = this.handleClickButton.bind(this);
      this.state = { 
          x: 0, 
          y: 0,
          isImageShow: true
        };
    }
  
    handleMouseMove(event: React.MouseEvent): void {
        this.setState({
            x: event.clientX,
            y: event.clientY
          });
          
    }

    handleClickButton(): void {
        this.setState((oldState) => {
            return {isImageShow: !oldState.isImageShow}
        })
    }
  
    render() {
      const position = {
        x: this.state.x,
        y: this.state.y
      }
      return (
        <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>
          <button onClick={this.handleClickButton}>Активировать лазеры</button>
          <h1>Перемещайте курсор мыши!</h1>
          <p>Текущее положение курсора мыши: ({this.state.x},{this.state.y})</p>
          {this.state.isImageShow && <Cat mouse={position} touch={this.handleClickButton}/>}
          
        </div>
      );
    }
  }