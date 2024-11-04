'use client';
import { AppContext } from '@/contexts/AppContext';
import { AnimatePresence, motion } from 'framer-motion';
import { ReactNode, useContext } from 'react';

const Modal = ({ children }: { children: ReactNode }) => {
  const { openModal, setOpenModal } = useContext(AppContext);

  return (
    <AnimatePresence>
      {openModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setOpenModal(false)}
          className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer h-screen"
        >
          <motion.div
            initial={{ scale: 0, rotate: '12.5deg' }}
            animate={{ scale: 1, rotate: '0deg' }}
            exit={{ scale: 0, rotate: '0deg' }}
            onClick={e => e.stopPropagation()}
            className="bg-gradient-to-br from-black to-[#111] text-white rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden !h-fit"
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
