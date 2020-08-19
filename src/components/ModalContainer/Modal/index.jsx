import React, { useState } from 'react';

import { Container, CloseButton, NewModalButton } from './styles';
import { useModal } from '../../../context/modal';

const Modal = ({message, style, index }) => {
  const { removeModal, addModal } = useModal();
  const [ modelClosed, setModelClosed ] = useState(false);
 
  const data = { 
    type: 'success', 
    title: 'Modal', 
    description: 'Descrição do modal...'
  }

  return (
    <Container
      type={message.type}
      hasDescription={Number(!!message.description)}
      style={style}
      onAnimationEnd={() => {
        if(modelClosed){
          removeModal(message.id)
        }
      }}
      close={modelClosed}
    >
      <div>
        <h1>{message.title} {index}</h1>
        <strong>Número:{message.id}</strong>
        {message.description && <p>{message.description}</p>}
      </div>
      <NewModalButton onClick={() => addModal(data)} type="button">
        Novo Modal
      </NewModalButton>
      <CloseButton 
        onClick={() => setModelClosed(true)} 
        type="CloseButton"
      >
        Fechar
      </CloseButton>
    </Container>
  );
};

export default Modal;
