'use client';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { cn } from '../../lib/utils';

export const MaskContainer = ({
  children,
  revealText,
  size = 10,
  revealSize = 600,
  className,
}: {
  children?: string | React.ReactNode;
  revealText?: string | React.ReactNode;
  size?: number;
  revealSize?: number;
  className?: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState<any>({ x: null, y: null });
  const containerRef = useRef<any>(null);
  const updateMousePosition = (e: any) => {
    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  useEffect(() => {
    containerRef.current.addEventListener('mousemove', updateMousePosition);
    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener(
          'mousemove',
          updateMousePosition,
        );
      }
    };
  }, []);
  let maskSize = isHovered ? revealSize : size;

  return (
    <motion.div
      ref={containerRef}
      className={cn('h-screen relative', className)}
      animate={{
        backgroundColor: isHovered ? '#000' : 'var(--black)',
      }}
    >
      <motion.div
        className="w-full h-full flex items-center justify-center text-6xl absolute bg-black bg-grid-[rgba(255,255,255,0.2)] text-white [mask-image:url(/mask.svg)] [mask-size:40px] [mask-repeat:no-repeat]"
        animate={{
          maskPosition: `${mousePosition.x - maskSize / 2}px ${
            mousePosition.y - maskSize / 2
          }px`,
          maskSize: `${maskSize}px`,
        }}
        transition={{
          duration: 0,
        }}
      >
        <div
          style={{ backgroundImage: `url("/images/webGhoul.jpg")` }}
          className={`w-full bg-cover bg-center bg-no-repeat h-full absolute z-[-1]`}
        />
        <div className="absolute inset-0 bg-black h-full w-full z-0 opacity-50" />
        <div
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
          className="text-center text-white text-4xl font-bold relative z-20"
        >
          {children}
        </div>
      </motion.div>
      <div className="w-full h-full flex items-center justify-center text-white px-20">
        {revealText}
      </div>
    </motion.div>
  );
};
