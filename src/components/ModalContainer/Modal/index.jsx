import React, { useState, useMemo } from 'react';

import { Container, CloseButton, NewModalButton } from './styles';
import { useModal } from '../../../context/modal';

const data = { 
  type: 'success', 
  title: 'Modal', 
  description: 'Descrição do modal...'
};

const Modal = ({message, style, index }) => {
  const { removeModal, addModal } = useModal();
  const [ modalClosed, setModalClosed ] = useState(false);

  const onAnimationEndHandler = useMemo(() => {
    if(modalClosed){
      return () => removeModal(message.id);
    }
  }, [modalClosed, removeModal, message.id])

  return (
    <Container
      type={message.type}
      hasDescription={Number(!!message.description)}
      style={style}
      onAnimationEnd={onAnimationEndHandler}
      close={modalClosed}
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
        onClick={() => setModalClosed(true)} 
        type="CloseButton"
      >
        Fechar
      </CloseButton>
    </Container>
  );
};

export default Modal;
