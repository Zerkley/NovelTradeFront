import logo from "../../logo.svg";
import "./App.css";
import UseGlobalStore from "../../store/store";
import { Link } from "react-router-dom";


import Landing from '../landing/Landing';

function App() {
  const variables = UseGlobalStore((state) => state.variables)
  const funciones = UseGlobalStore((state) => state.functions)
  return (
    <div className="App">
      <header className="App-header">
       <Landing />
      </header>
    </div>
  );
}

export default App;
