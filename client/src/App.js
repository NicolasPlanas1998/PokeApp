import React from 'react'
import './App.css';
import {Route} from 'react-router-dom'
import { Cards } from './components/Home/Cards';

function App() {
  return (
    <div className="App">
      <h1>Henry Pokemon</h1>
      <Route path="/cards" component={Cards} />
    </div>
  );
}

export default App;
