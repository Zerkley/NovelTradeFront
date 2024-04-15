import logo from "../../logo.svg";
import "./App.css";
import UseGlobalStore from "../../store/store";
import { Link } from "react-router-dom";



function App() {
  const variables = UseGlobalStore((state) => state.variables);
  const funciones = UseGlobalStore((state) => state.functions);
  return <div className="App"></div>;
}

export default App;
