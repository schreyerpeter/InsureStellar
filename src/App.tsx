import React from 'react';
// ts-expect-error
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import WithPage from './components/with-page';
import Form from './containers/form';
import background from './bg.svg';
import './App.css';

const AppHero = styled.img`
  max-width: 100%;
  position: absolute;
  right: -350px;
  top: -100px;
  left: auto;
  bottom: auto;
  z-index: 0;

  @media (max-width: 992px) {
    display: none;
  }
`;

function App() {
  return (
    <Router>
      <WithPage>
        <Switch>
          <Route path="/overview">
            <div>Overview</div>
          </Route>
          <Route path="/">
            <>
              <h2>Get in touch</h2>
              <Form />
            </>
          </Route>
        </Switch>
        <AppHero src={background} className="app-background" alt="background" />
      </WithPage>
    </Router>
  );
}

export default App;
