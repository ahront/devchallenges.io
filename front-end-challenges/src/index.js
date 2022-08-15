import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import InputComponent from './Components/InputComponent';
import ButtonComponent from './Components/ButtonComponent';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Windbnb from './Components/Windbnb';
import TodoApp from './Components/TodoApp';
import RandomQuoteGenerator from './Components/RandomQuoteGenerator';
import CountryQuiz from './Components/CountryQuiz';
import WheatherApp from './Components/WheatherApp';
import GitHubJobs from './Components/GitHubJobs';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/button-component" element={<ButtonComponent />} />
      <Route path="/input-component" element={<InputComponent />} />
      <Route path="/windbnb" element={<Windbnb />} />
      <Route path="/todo-app" element={<TodoApp />} />
      <Route path="/random-quote-generator" element={<RandomQuoteGenerator />} />
      <Route path="/country-quiz" element={<CountryQuiz />} />
      <Route path="/wheather-app" element={<WheatherApp />} />
      <Route path="/github-jobs" element={<GitHubJobs />} />
    </Routes>
  </BrowserRouter>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
