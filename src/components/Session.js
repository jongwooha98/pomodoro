// import { useState } from 'react';

function Session(props) {
  const { state, changeSessionLength } = props;

  return (
    <>
      <div id="session-label">
        <h2>Session Length</h2>
      </div>
      <div>
        <button id="session-decrement" onClick={changeSessionLength}>
          -
        </button>
        <div id="session-length">{state.sessionLength / 60}</div>
        <button id="session-increment" onClick={changeSessionLength}>
          +
        </button>
      </div>
    </>
  );
}

export default Session;
