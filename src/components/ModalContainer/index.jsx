import React from 'react';

import { Container } from './styles';
import Modal from './Modal';

const ModalContainer = ({ messages }) => {

  return (
    <Container>
      {messages.map((item, index) => {
        return(
          <Modal key={item.id} message={item} index={index}/>
        );
      })}
    </Container>
  );
};

export default ModalContainer;
