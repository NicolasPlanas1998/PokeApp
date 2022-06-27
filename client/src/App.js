import React from 'react'
import './App.css';
import {Route,Routes} from 'react-router-dom';
import {Home} from './components/Landingpage/Home'
import {Header} from './components/Header/Header'
import {Form} from './components/Form/Form'

function App() {
  return (
    <div className="bg">
      <Header/>
  
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/form" element= {<Form/>}/>
      </Routes>
    </div>
  );
}

export default App;
