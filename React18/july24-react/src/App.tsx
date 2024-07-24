import React from 'react';
import logo from './logo.svg';
import './App.css';
import Message from './components/Message';
import ListGroup from './components/ListGroup';
import ListGroup1 from './components/ListGroup1';

function App() {
  return (
    <div >
      <h1>Welcome to React</h1>
      <Message></Message>
      <ListGroup></ListGroup>
      <ListGroup1></ListGroup1>
    </div>
  );
}

export default App;
