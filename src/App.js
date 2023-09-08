
import './App.css';

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import LoadingBar from 'react-top-loading-bar'
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
 
} from "react-router-dom";

const App =()=> {
  const pageSize = 12
  const apikey = process.env.REACT_APP_NEWS_API_KEY

const [progress , setProgress]= useState(0)

  

  
    return (
      <div>
          
            
            
            <Router>
              <Navbar/>
              <LoadingBar
                color='#f11946'
                progress={progress}
              />
            
            <Routes>
              <Route exact path='/home' element={<News key ="general" apikey={apikey} setProgress={setProgress} pageSize={pageSize} country = {"in"} category = {"general"}/>}></Route>
              <Route exact path='/business' element={<News key ="business" apikey={apikey} setProgress={setProgress} pageSize={pageSize} country = {"in"} category = {"business"}/>}></Route>
              <Route exact path='/entertainment' element={<News key ="entertainment" apikey={apikey} setProgress={setProgress} pageSize={pageSize} country = {"in"} category = {"entertainment"}/>}></Route>
              <Route exact path='/health' element={<News key ="health" apikey={apikey} setProgress={setProgress} pageSize={pageSize} country = {"in"} category = {"health"}/>}></Route>
              <Route exact path='/science' element={<News key ="science" apikey={apikey} setProgress={setProgress} pageSize={pageSize} country = {"in"} category = {"science"}/>}></Route>
              <Route exact path='/sports' element={<News key ="sports" apikey={apikey} setProgress={setProgress} pageSize={pageSize} country = {"in"} category = {"sports"}/>}></Route>
              <Route exact path='/technology' element={<News key ="technology" apikey={apikey} setProgress={setProgress} pageSize={pageSize} country = {"in"} category = {"technology"}/>}></Route>
             
              
            </Routes>
          </Router>
      </div>
    )
 
}

export default App;
