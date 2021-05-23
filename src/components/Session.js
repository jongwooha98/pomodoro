function Session(props) {
  const { state, changeSessionLength } = props;
  return (
    <div className="session">
      <div id="session-label" className="session-label">
        <h3>Session Length</h3>
      </div>
      <div className="timer-setting">
        <button
          type="button"
          id="session-decrement"
          className="session-decrement"
          onClick={changeSessionLength}
        >
          <i className="fas fa-arrow-down" />
        </button>
        <div id="session-length" className="session-length">
          {state.sessionLength / 60}
        </div>
        <button
          type="button"
          id="session-increment"
          className="session-increment"
          onClick={changeSessionLength}
        >
          <i className="fas fa-arrow-up" />
        </button>
      </div>
    </div>
  );
}

export default Session;
