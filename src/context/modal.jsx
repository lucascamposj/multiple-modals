import React, { createContext, useContext, useCallback, useState } from 'react';
import { v4 as uuid } from 'uuid';
import ModalContainer from '../components/ModalContainer';

const ModalContext = createContext({});

const ModalProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);

  const addModal = useCallback(
    ({ type, title, description }) => {
      const id = uuid();
      const modal = {
        id,
        title,
        type,
        description,
      };

      setMessages((oldMessages) => [...oldMessages, modal]);
    },
    [setMessages],
  );

  const removeModal = useCallback((id) => {
    setMessages((state) => state.filter((message) => message.id !== id));
  }, [setMessages]);

  return (
    <ModalContext.Provider value={{ addModal, removeModal }}>
      {children}
      <ModalContainer messages={messages} />
    </ModalContext.Provider>
  );
};

function useModal() {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error('useModal deve estar dentro de um Modal Provider!');
  }

  return context;
}

export { ModalProvider, useModal };
