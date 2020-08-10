import React, { useState } from 'react';
import { Cat } from './Cat';

export const MouseTracker = () => {

  const [x, changeX] = useState(0);
  const [y, changeY] = useState(0);
  const [isImageShow, changeImageShow] = useState(false);

  function handleMouseMove(event: React.MouseEvent): void {
    changeX(event.clientX);
    changeY(event.clientY);
  }

  function handleClickButton(): void {
    changeImageShow(!isImageShow)
  }

  const position = {
    x: x,
    y: y
  };

  return (
    <div className='container' style={{ height: '100vh' }} onMouseMove={handleMouseMove}>
      <button onClick={handleClickButton}>Активировать лазеры</button>
      <h1>Перемещайте курсор мыши!</h1>
      <p>Текущее положение курсора мыши: ({x},{y})</p>
      {isImageShow && <Cat mouse={position} touch={handleClickButton} />}

    </div>
  );

}