import logo from '../../logo.svg';
import './App.css';
import UseGlobalStore from '../../store/store';
import { Link } from 'react-router-dom';

function App() {
  const variables = UseGlobalStore((state) => state.variables)
  const funciones = UseGlobalStore((state) => state.functions)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{variables.test}</p>
        <Link to="/">Contact</Link>
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

export default App;
