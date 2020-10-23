import React from 'react';
// ts-expect-error
import styled from 'styled-components';
import Form from './components/form';
import logo from './logo.svg';
import background from './bg.svg';
import './App.css';

const AppContainer = styled.div`
  background-color: #0c2975;
  color: #fff;
  font-weight: 600;
  font-size: 24px;
  height: 100%;
  overflow: hidden;
`;

const AppHeader = styled.div`
  margin: auto;
  max-width: 1204px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: white;
  display: flex;
  flex-direction: row;
  min-height: 10vmin;

  img {
    margin-right: 6vmin;
  }
`;

const AppBody = styled.div`
  position: relative;
  z-index: 1;
  margin: auto;
  max-width: 1204px;
  padding: 40px 0;

  h2 {
    margin-left: 16px;
  }
`;

const AppLogo = styled.img`
  min-height: 3vmin;
  pointer-events: none;
  margin-left: 16px;
`;

const AppHero = styled.img`
  max-width: 100%;
  position: absolute;
  right: -350px;
  top: -100px;
  left: auto;
  bottom: auto;
  z-index: 0;

  @media (max-width: 992px) {
    .app-background {
      display: none;
    }
  }
`;

function App() {
  return (
    <AppContainer>
      <AppHeader>
        <AppLogo src={logo} className="app-logo" alt="logo" />
        <div>
          InsureStellar{' '}
          <span role="img" aria-label="🚀">
            🚀
          </span>
        </div>
      </AppHeader>
      <AppBody>
        <h2>Get in touch</h2>
        <Form />
        <AppHero src={background} className="app-background" alt="background" />
      </AppBody>
    </AppContainer>
  );
}

export default App;
