function Break(props) {
  const { state, changeBreakLength } = props;

  return (
    <div className="break">
      <div id="break-label" className="break-label">
        <h3>Break Length</h3>
      </div>
      <div className="timer-setting">
        <button
          type="button"
          id="break-decrement"
          className="break-decrement"
          onClick={changeBreakLength}
        >
          <i className="fas fa-arrow-down" />
        </button>
        <div id="break-length" className="break-length">
          {state.breakLength / 60}
        </div>
        <button
          type="button"
          id="break-increment"
          className="break-increment"
          onClick={changeBreakLength}
        >
          <i className="fas fa-arrow-up" />
        </button>
      </div>
    </div>
  );
}

export default Break;
