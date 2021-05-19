function Session(props) {
  const { state, changeSessionLength } = props;
  let sessionLength = state.sessionLength / 60;
  return (
    <div className="session">
      <div id="session-label" className="session-label">
        <h3>Session Length</h3>
      </div>
      <div className="timer-setting">
        <button
          id="session-decrement"
          className="session-decrement"
          onClick={changeSessionLength}
        >
          <i class="fas fa-arrow-down"></i>
        </button>
        <div id="session-length" className="session-length">
          {sessionLength}
        </div>
        <button
          id="session-increment"
          className="session-increment"
          onClick={changeSessionLength}
        >
          <i class="fas fa-arrow-up"></i>
        </button>
      </div>
    </div>
  );
}

export default Session;
