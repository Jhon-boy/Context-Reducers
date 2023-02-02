import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import LoginUseState from './components/LoginUseState';
import LoginReducer from './components/LoginReducer';
import ContextTask from './components/ContextTask';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      {/* <center><h3>MADE  BY JOHN </h3></center> */}
        {/* <Counter></Counter> */}
        {/* <LoginUseState></LoginUseState> */}
        {/* <LoginReducer></LoginReducer> */}
        <ContextTask></ContextTask>
      </header>
    </div>
  );
}

export default App;
