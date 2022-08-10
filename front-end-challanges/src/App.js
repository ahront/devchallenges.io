import logo from './logo.svg';
import './App.css';
import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Link to="/input-component">Button Component</Link>
      <Link to="/input-component">Input Component</Link>
    </div>
  );
}

export default App;
