import React from 'react';
import Form from './components/form';
import logo from './logo.svg';
import background from './bg.svg';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <div>
          InsureStellar{' '}
          <span role="img" aria-label="🚀">
            🚀
          </span>
        </div>
      </div>
      <div className="app-body">
        <h2>Get in touch</h2>
        <Form />
        <img src={background} className="app-background" alt="background" />
      </div>
    </div>
  );
}

export default App;
