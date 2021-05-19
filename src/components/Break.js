function Break(props) {
  const { state, changeBreakLength } = props;

  return (
    <div className="break">
      <div id="break-label">
        <h2>Break Length</h2>
      </div>
      <div className="timer-setting">
        <button id="break-decrement" onClick={changeBreakLength}>
          <i class="fas fa-arrow-down"></i>
        </button>
        <div id="break-length">{state.breakLength / 60}</div>
        <button id="break-increment" onClick={changeBreakLength}>
          <i class="fas fa-arrow-up"></i>
        </button>
      </div>
    </div>
  );
}

export default Break;
