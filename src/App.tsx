import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="app-header">
        <div>
          <img src={logo} className="app-logo" alt="logo" />
        </div>
        <div>
          InsureStellar{' '}
          <span role="img" aria-label="🚀">
            🚀
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
