import React from 'react';

import { Container,BackgroundContainer } from './styles';
import Modal from './Modal';

const ModalContainer = ({ messages }) => {

  return (
    <BackgroundContainer>
      <Container>
      {messages.map((item, index) => {
        return(
          <Modal key={item.id} message={item} index={index}/>
        );
      })}
      </Container>
    </BackgroundContainer>
  );
};

export default ModalContainer;
