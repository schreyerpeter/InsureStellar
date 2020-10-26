import React from 'react';

import Form from '../../containers/form';
import { Subtitle, HomeContainer, Title } from './styled';

const Home = () => {
  return (
    <HomeContainer>
      <Title>Get in touch</Title>
      <Subtitle>
        Interested in protecting your rocket against the dangers of space
        travel, like pesky asteroids? Drop us a message...
      </Subtitle>
      <Form />
    </HomeContainer>
  );
};

export default Home;
