import React from 'react';
import './App.css';
import ListEstados from './components/estados/ListEstados';
import Header from './components/header/Header';

function App() {
  return (
    <div className="App">
      <Header name="fboliveira" />
      <ListEstados />
    </div>
  );
}

export default App;
