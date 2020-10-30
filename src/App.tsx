import React from 'react';
// ts-expect-error
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import WithPage from './components/with-page';
import Home from './components/home';
import Overview from './containers/overview';
import background from './bg.svg';
import './App.css';

const AppHero = styled.img`
  max-width: 100%;
  position: absolute;
  right: -350px;
  top: -100px;
  left: auto;
  bottom: auto;
  z-index: -1;
  pointer-events: none;

  @media (max-width: 992px) {
    display: none;
  }
`;

function App() {
  return (
    <Router>
      <WithPage>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/overview">
            <Overview />
          </Route>
        </Switch>
        <AppHero src={background} className="app-background" alt="background" />
      </WithPage>
    </Router>
  );
}

export default App;
