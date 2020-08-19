import React from 'react';

import { ModalProvider } from './modal';

const AppProvider = ({ children }) => (
    <ModalProvider>{children}</ModalProvider>
);

export default AppProvider;
