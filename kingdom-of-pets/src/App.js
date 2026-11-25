import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

//What should go on a NavBar?
function NavBar() {
  return (
    <nav className='HomeNavBar'>
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </nav>
  );
}

//Board that report the progress that has been done while the player is done.
function SummaryBoard() {
  return (
    <div className='SummaryContainer'>
      <title className='SummaryTitle'>Summary Board</title>
      
    </div>
  );
}

export default App;
