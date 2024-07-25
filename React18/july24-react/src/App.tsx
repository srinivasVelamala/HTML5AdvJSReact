import React from 'react';
import logo from './logo.svg';
import './App.css';
import Message from './components/Message';
import ListGroup from './components/ListGroup';
import ListGroup1 from './components/ListGroup1';
import { FirstForm } from './components/FirstForm';
import { Form1 } from './components/Form1';
import ArrayofObjects from './components/ArrayofObjects';

function App() {
  return (
    <div >
      <h1>Welcome to React</h1>
      {/* <Message></Message>
      <ListGroup></ListGroup>
      <ListGroup1></ListGroup1>
      <FirstForm></FirstForm> 
      <Form1></Form1>*/}

      <ArrayofObjects></ArrayofObjects>
    </div>
  );
}

export default App;
