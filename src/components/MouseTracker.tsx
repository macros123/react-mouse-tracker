import React from 'react';

type PositinState = {
    x: number,
    y: number
}

export default class MouseTracker extends React.Component<{}, PositinState> {
    constructor(props: object) {
      super(props);
      this.handleMouseMove = this.handleMouseMove.bind(this);
      this.state = { 
          x: 0, 
          y: 0 
        };
    }
  
    handleMouseMove(event: React.MouseEvent): void {
        this.setState({
            x: event.clientX,
            y: event.clientY
          });
          
    }
  
    render() {
      return (
        <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>
          <h1>Перемещайте курсор мыши!</h1>
          <p>Текущее положение курсора мыши: ({this.state.x},{this.state.y})</p>
        </div>
      );
    }
  }