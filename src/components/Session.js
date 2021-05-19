function Session(props) {
  const { state, changeSessionLength } = props;

  return (
    <div className="session">
      <div id="session-label">
        <h2>Session Length</h2>
      </div>
      <div className="timer-setting">
        <button id="session-decrement" onClick={changeSessionLength}>
          <i class="fas fa-arrow-down"></i>
        </button>
        <div id="session-length">{state.sessionLength / 60}</div>
        <button id="session-increment" onClick={changeSessionLength}>
          <i class="fas fa-arrow-up"></i>
        </button>
      </div>
    </div>
  );
}

export default Session;
