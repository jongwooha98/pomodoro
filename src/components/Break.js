// import { useState } from 'react';

function Break(props) {
  const { breakLength, changeBreakLength } = props;

  // function decrementBreakLength() {
  //   setBreakLength(breakLength - 60000);
  // }
  // function incrementBreakLength() {
  //   setBreakLength(breakLength + 60000);
  // }

  // function display() {
  //   return breakLength / 1000 / 60;
  // }

  // function display() {
  //   const minutes = breakLength / 1000 / 60;
  //   const seconds = (breakLength / 1000) % 60;
  //   if (seconds <= 10) {
  //     return minutes + ':' + '0' + seconds;
  //   } else {
  //     return minutes + ':' + seconds;
  //   }
  // }
  return (
    <>
      <div id="break-label">
        <h2>Break Length</h2>
      </div>
      <div>
        <button id="break-decrement" onClick={changeBreakLength}>
          -
        </button>
        <div id="break-length">{breakLength}</div>
        <button id="break-increment" onClick={changeBreakLength}>
          +
        </button>
      </div>
    </>
  );
}

export default Break;
