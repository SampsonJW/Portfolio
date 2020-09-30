import React from 'react';
import './App.css';
import Nav from './components/navbar/Nav';
import Layout from './components/layout/Layout';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Nav />
        <Layout />
      </header>
    </div>
  );
}

export default App;
