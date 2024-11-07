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
  const [mousePosition, setMousePosition] = useState<{ x: number | null; y: number | null }>({ x: null, y: null });
  const containerRef = useRef<HTMLDivElement | null>(null);
  const updateMousePosition = (e: MouseEvent) => {
    const rect = containerRef.current && containerRef.current.getBoundingClientRect();
    setMousePosition({ x: rect ? (e.clientX - rect.left): 0, y: rect ? (e.clientY - rect.top):0 });
  };

  useEffect(() => {
    if(containerRef.current){
      containerRef.current.addEventListener('mousemove', updateMousePosition);
    }
    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener(
          'mousemove',
          updateMousePosition,
        );
      }
    };
  }, []);
  const maskSize = isHovered ? revealSize : size;

  return (
    <motion.div
      ref={containerRef}
      className={cn('!h-full relative', className)}
      animate={{
        backgroundColor: isHovered ? '#000' : 'var(--black)',
      }}
    >
      <motion.div
        className="w-full h-full flex items-center justify-center text-6xl absolute bg-black bg-grid-[rgba(255,255,255,0.2)] text-white [mask-image:url(/mask.svg)] [mask-size:40px] [mask-repeat:no-repeat]"
        animate={(mousePosition.x && mousePosition.y)?  {
          maskPosition: `${mousePosition.x - maskSize / 2}px ${
            mousePosition.y - maskSize / 2
          }px`,
          maskSize: `${maskSize}px`,
        }:{}}
        transition={{
          duration: 0,
        }}
      >
        <div
          style={{ backgroundImage: `url("/images/office.jpeg")` }}
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
      <div className="w-full h-full flex items-center justify-center text-white">
        {revealText}
      </div>
    </motion.div>
  );
};
