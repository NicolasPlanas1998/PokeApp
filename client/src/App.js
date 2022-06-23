import React from 'react'
import './App.css';
import {Route} from 'react-router-dom';
import { Cards } from './components/Landingpage/Cards';
import {Home} from './components/Landingpage/Home'
import {Header} from './components/Header/Header'

function App() {
  return (
    <div className="bg">
      <Header/>
      <Route path="/home" component={Home} />
      {/* <Route path="/home/:name" element={<Cards/>} /> */}
    </div>
  );
}

export default App;
