import logo from './images/mrgreedy.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>List of Daily Word Games</p>
        <a
          className="App-link"
          href="https://www.minutecryptic.com/"
          target="_blank"
        >
          MinuteCryptic
        </a>
        <a
          className="App-link"
          href="https://maptap.gg/"
          target="_blank"
        >
          Maptap
        </a>
      </header>
    </div>
  );
}

export default App;
