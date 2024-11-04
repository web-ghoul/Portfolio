'use client';
import SocialMediaModal from '@/components/Modal/SocialMediaModal';
import Navbar from '@/components/Navbar/Navbar';
import AppProvider from '@/contexts/AppContext';
import { ReactNode } from 'react';

const Main = ({ children }: { children: ReactNode }) => {
  return (
    <AppProvider>
      <main>
        <Navbar />
        {children}
        <SocialMediaModal />
      </main>
    </AppProvider>
  );
};

export default Main;
