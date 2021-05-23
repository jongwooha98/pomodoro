import { useState, useEffect } from 'react';
import './App.scss';

import Break from './components/Break';
import Session from './components/Session';
import Timer from './components/Timer';
import beepSound from './audio/beep-sound.mov';

function App() {
  const beep = document.getElementById('beep');

  const [state, setState] = useState({
    breakLength: 300,
    sessionLength: 1500,
    breakTimeLeft: 300,
    sessionTimeLeft: 1500,
    isActive: false,
    isBreak: false,
  });

  // useEffect(() => {
  //   let intervalId;
  //   if (state.isActive && state.timeLeft > 0) {
  //     intervalId = setInterval(() => {
  //       setState((prevState) => ({
  //         ...state,
  //         timeLeft: prevState.timeLeft - 1,
  //       }));
  //       console.log('useEffect');
  //     }, 1000);
  //   } else if (!state.isBreak && state.timeLeft === 0) {
  //     setState((prevState) => ({
  //       ...state,
  //       isBreak: !prevState.isBreak,
  //       timeLeft: state.breakLength,
  //     }));
  //     beep.play();
  //   } else if (state.isBreak && state.timeLeft === 0) {
  //     setState((prevState) => ({
  //       ...state,
  //       isBreak: !prevState.isBreak,
  //       timeLeft: state.sessionLength,
  //     }));
  //     beep.play();
  //   }
  //   return () => clearInterval(intervalId);
  // }, [state, beep]);

  useEffect(() => {
    // let sessionIntervalId;
    let intervalId;
    switch (state.isBreak) {
      case false:
        if (state.isActive && state.sessionTimeLeft > 0) {
          intervalId = setInterval(() => {
            setState((prevState) => ({
              ...prevState,
              sessionTimeLeft: prevState.sessionTimeLeft - 10,
            }));
            console.log('in session...');
          }, 1000);
        } else if (state.sessionTimeLeft === 0) {
          setState((prevState) => ({
            ...prevState,
            isBreak: !prevState.isBreak,
            sessionTimeLeft: state.sessionLength,
          }));
        }
        break;
      case true:
        if (state.isActive && state.breakTimeLeft > 0) {
          intervalId = setInterval(() => {
            setState((prevState) => ({
              ...prevState,
              breakTimeLeft: prevState.breakTimeLeft - 10,
            }));
            console.log('in break...');
          }, 1000);
        } else if (state.breakTimeLeft === 0) {
          setState((prevState) => ({
            ...prevState,
            isBreak: !prevState.isBreak,
            breakTimeLeft: state.breakLength,
          }));
        }
        break;
      default:
        break;
    }

    return () => clearInterval(intervalId);
  });

  function handleReset() {
    setState({
      breakLength: 300,
      sessionLength: 1500,
      breakTimeLeft: 300,
      sessionTimeLeft: 1500,
      isActive: false,
      isBreak: false,
    });
    beep.pause();
    beep.currentTime = 0;
  }

  function handlePause() {
    setState((prevState) => ({
      ...prevState,
      isActive: !prevState.isActive,
    }));
  }

  function changeBreakLength(event) {
    switch (event.target.id) {
      case 'break-decrement':
        if (state.breakLength <= 60) {
          setState({
            ...state,
            breakLength: 60,
            breakTimeLeft: 60,
          });
          console.log('clicked break dec');
        } else {
          setState((prevState) => ({
            ...prevState,
            breakLength: prevState.breakLength - 60,
            breakTimeLeft: prevState.breakLength - 60,
          }));
        }
        break;
      case 'break-increment':
        if (state.breakLength >= 3600) {
          setState({ ...state, breakLength: 3600, breakTimeLeft: 3600 });
        } else {
          setState((prevState) => ({
            ...prevState,
            breakLength: prevState.breakLength + 60,
            breakTimeLeft: prevState.breakLength + 60,
          }));
        }
        break;
      default:
        break;
    }
  }
  // Combine changeBreakLength fxn and changeSessionLength fxn
  function changeSessionLength(event) {
    switch (event.target.id) {
      case 'session-decrement':
        if (state.sessionLength <= 60) {
          setState({ ...state, sessionLength: 60, sessionTimeLeft: 60 });
        } else {
          setState((prevState) => ({
            ...prevState,
            sessionLength: prevState.sessionLength - 60,
            sessionTimeLeft: prevState.sessionLength - 60,
          }));
        }
        break;
      case 'session-increment':
        if (state.sessionLength >= 3600) {
          setState({ ...state, sessionLength: 3600, sessionTimeLeft: 3600 });
        } else {
          setState((prevState) => ({
            ...prevState,
            sessionLength: prevState.sessionLength + 60,
            sessionTimeLeft: prevState.sessionLength + 60,
          }));
        }
        break;
      default:
        break;
    }
  }

  return (
    <div className="app">
      <div className="title">
        <h1>Pomodoro Timer</h1>
      </div>
      <div className="session_break">
        <Break state={state} changeBreakLength={changeBreakLength} />
        <Session state={state} changeSessionLength={changeSessionLength} />
      </div>
      <Timer
        state={state}
        handlePause={handlePause}
        handleReset={handleReset}
        beep={beep}
      />
      <audio id="beep" preload="auto">
        <source src={beepSound} />
      </audio>
    </div>
  );
}

export default App;
