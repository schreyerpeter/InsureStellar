import React, { ReactNode } from 'react';
// ts-expect-error
import styled from 'styled-components';
import logo from '../../logo.svg';

const AppContainer = styled.div`
  background-color: #0c2975;
  color: #fff;
  font-weight: 600;
  font-size: 24px;
  height: 100%;
  overflow: hidden;
`;

const AppHeader = styled.header`
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

function WithPage({ children }: { children: ReactNode }) {
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
      <AppBody>{children}</AppBody>
    </AppContainer>
  );
}

export default WithPage;
