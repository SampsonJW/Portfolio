import React from 'react';
import './App.css';
import Nav from './components/navbar/Nav';
import Layout from './components/layout/Layout';

function App() {
  return (
    <div className='App'>
      <Nav />
      <header className='App-header'>
        <Layout />
      </header>
    </div>
  );
}

export default App;
