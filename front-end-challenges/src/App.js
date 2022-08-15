import './App.css';
import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Link to="/button-component">Button Component</Link>
      <Link to="/input-component">Input Component</Link>
      <Link to="/windbnb">Windbnb</Link>
      <Link to="/todo-app">Todo App</Link>
      <Link to="/random-quote-generator">Random Quote Generator</Link>
      <Link to="/country-quiz">Country Quiz</Link>
      <Link to="/wheather-app">Weather App</Link>
      <Link to="/github-jobs">GitHub Jobs</Link>
    </div>
  );
}

export default App;
