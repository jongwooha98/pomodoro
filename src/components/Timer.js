function Timer(props) {
  const { state, handlePause, handleReset } = props;

  function displayBreakTimeLeft() {
    let minute = Math.floor(state.breakTimeLeft / 60);
    let second = state.breakTimeLeft % 60;

    let computedSecond = String(second).length === 1 ? `0${second}` : second;
    let computedMinute = String(minute).length === 1 ? `0${minute}` : minute;

    return computedMinute + ':' + computedSecond;
  }

  function displaySessionTimeLeft() {
    let minute = Math.floor(state.sessionTimeLeft / 60);
    let second = state.sessionTimeLeft % 60;

    let computedSecond = String(second).length === 1 ? `0${second}` : second;
    let computedMinute = String(minute).length === 1 ? `0${minute}` : minute;

    return computedMinute + ':' + computedSecond;
  }
  return (
    <div className="timer">
      <div id="timer-label" className="timer-label">
        <h2>{state.isBreak ? 'Break' : 'Session'}</h2>
      </div>
      <div id="time-left" className="time-left">
        {state.isBreak ? displayBreakTimeLeft() : displaySessionTimeLeft()}
      </div>
      <button
        id="start_stop"
        className="start_stop"
        type="button"
        onClick={handlePause}
      >
        {state.isActive ? 'PAUSE' : 'START'}
      </button>
      <button
        type="button"
        className="reset btn btn-danger"
        id="reset"
        onClick={handleReset}
      >
        Reset
      </button>
    </div>
  );
}

export default Timer;
