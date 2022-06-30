import React from 'react'
import './App.css';
import {Route,Routes} from 'react-router-dom';
import {Home} from './components/Home/Home'
import {Form} from './components/Form/Form'
import {Landingpage} from './components/Landingpage/Landingpage'
import { Error404 } from './components/404/404';


function App() {
  return (
    <div className="bg">

      <Routes>
        <Route exact path="/" element= {<Landingpage/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/form" element= {<Form/>}/>
        <Route path="*" element= {<Error404/>}/>
      </Routes>
    </div>
  );
}

export default App;
