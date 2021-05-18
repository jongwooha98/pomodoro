function Timer(props) {
  const { state, handlePause, handleReset } = props;

  function timerDisplay() {
    let minute = Math.floor(state.timeLeft / 60);
    let second = state.timeLeft % 60;

    let computedSecond = String(second).length === 1 ? `0${second}` : second;
    let computedMinute = String(minute).length === 1 ? `0${minute}` : minute;
    console.log('rendering timerDisplay');

    return computedMinute + ':' + computedSecond;
  }
  return (
    <>
      <div id="timer-label">
        <h2>{state.isBreak ? 'Break' : 'Session'}</h2>
      </div>
      <div id="time-left">{timerDisplay()}</div>
      <span>{state.timeLeft}</span>
      <div>
        <button id="start_stop" onClick={handlePause}>
          {state.isActive ? 'Stop' : 'Start'}
        </button>
        <button id="reset" onClick={handleReset}>
          Reset
        </button>
      </div>
    </>
  );
}

export default Timer;
