'use client';
import { createContext, ReactNode, useState } from 'react';

export const AppContext = createContext<{
  openModal: boolean;
  setOpenModal: (open: boolean) => void;
}>({
  openModal: false,
  setOpenModal: () => {},
});

const AppProvider = ({ children }: { children: ReactNode }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <AppContext.Provider value={{ openModal, setOpenModal }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
