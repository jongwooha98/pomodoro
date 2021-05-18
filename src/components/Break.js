// import { useState } from 'react';

function Break(props) {
  const { state, changeBreakLength } = props;

  return (
    <>
      <div id="break-label">
        <h2>Break Length</h2>
      </div>
      <div>
        <button id="break-decrement" onClick={changeBreakLength}>
          -
        </button>
        <div id="break-length">{state.breakLength / 60}</div>
        <button id="break-increment" onClick={changeBreakLength}>
          +
        </button>
      </div>
    </>
  );
}

export default Break;
