function Break(props) {
  const { state, changeBreakLength } = props;
  let breakLength = state.breakLength / 60;

  return (
    <div className="break">
      <div id="break-label" className="break-label">
        <h3>Break Length</h3>
      </div>
      <div className="timer-setting">
        <button
          id="break-decrement"
          className="break-decrement"
          onClick={changeBreakLength}
        >
          <i class="fas fa-arrow-down"></i>
        </button>
        <div id="break-length" className="break-length">
          {breakLength}
        </div>
        <button
          id="break-increment"
          className="break-increment"
          onClick={changeBreakLength}
        >
          <i class="fas fa-arrow-up"></i>
        </button>
      </div>
    </div>
  );
}

export default Break;
