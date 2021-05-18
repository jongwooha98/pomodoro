import { useState } from 'react';
import './App.css';
import Break from './components/Break';
import Session from './components/Session';

function App() {
  const [breakLength, setBreakLength] = useState(5); //in minutes
  function changeBreakLength(event) {
    switch (event.target.id) {
      case 'break-decrement':
        if (breakLength <= 1) {
          setBreakLength(1);
        } else {
          setBreakLength(breakLength - 1);
        }
        break;
      case 'break-increment':
        if (breakLength >= 60) {
          setBreakLength(60);
        } else {
          setBreakLength(breakLength + 1);
        }
        break;
      default:
        break;
    }
  }

  const [sessionLength, setSessionLength] = useState(25); //in minutes

  function changeSessionLength(event) {
    switch (event.target.id) {
      case 'session-decrement':
        if (sessionLength <= 1) {
          setSessionLength(1);
        } else {
          setSessionLength(sessionLength - 1);
        }
        break;
      case 'session-increment':
        if (sessionLength >= 60) {
          setSessionLength(60);
        } else {
          setSessionLength(sessionLength + 1);
        }
        break;
      default:
        break;
    }
  }
  return (
    <>
      <div className="app">
        <h1>Pomodoro Timer</h1>
        <Break
          breakLength={breakLength}
          changeBreakLength={changeBreakLength}
        />
        <Session
          session={sessionLength}
          changeSessionLength={changeSessionLength}
        />
        <div id="timer-label">
          <h2>Session</h2>
        </div>
        <div id="time-left"></div>
        <div>
          <button id="start_stop">start_stop</button>
          <button id="reset">Reset</button>
        </div>
      </div>
    </>
  );
}

export default App;
