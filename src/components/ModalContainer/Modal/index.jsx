import React from 'react';

import { Container } from './styles';
import { useModal } from '../../../context/modal';

const Modal = ({message, style, index }) => {
  const { removeModal } = useModal();

  return (
    <Container
      type={message.type}
      hasDescription={Number(!!message.description)}
      style={style}
    >
      <div>
        <h1>{message.title} {index}</h1>
        <strong>Número:{message.id}</strong>
        {message.description && <p>{message.description}</p>}
      </div>
      <button onClick={() => removeModal(message.id)} type="button">
        Fechar
      </button>
    </Container>
  );
};

export default Modal;
