import React, {Component} from'react';
import './App.css';
import Photos from './components/Images'
import Contact from './components/Contact'





const App = () =>{
  
  
  
    return (
      <div className="container-fluid">
        <Contact/>
        
        <Photos/>
        <br></br><br></br>
        <hr className="hrr" align="center" size="4" width="100%" color="black"></hr>
        <footer className="row">
        <div className="col-10">
        <strong>Email:</strong>
          <p>chahinxht@gmail.com</p>
        </div>
        <div className="col-2">
        <strong>Phone-Number:</strong>
          <p>+21650501765</p>
        </div>
        </footer>
              
      </div>
    );

  
  
}

export default App;
