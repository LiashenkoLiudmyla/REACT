 import React, { Component } from 'react';
 import Form from './components/Form.js';
 import User from './components/User.js';
 import NameForm from './components/NameForm.js'
 import LifeCycle from './components/Lifecycle.js'

import './App.css';




   
function App() {
  return (
    <div className="App"> 
    <User/>
    <Form/>
    <NameForm/>
    <LifeCycle/>
    </div>
  );
}

export default App;







