"use client";
import { motion } from "framer-motion";
import { ReactNode, useEffect, useRef, useState } from "react";

const squareData = [
  {
    id: 1,
    src: "/images/back1.jpg",
  },
  {
    id: 2,
    src: "/images/back2.jpg",
  },
  {
    id: 3,
    src: "/images/back3.jpg",
  },
  {
    id: 4,
    src: "/images/back4.jpg",
  },
  {
    id: 5,
    src: "/images/back5.jpg",
  },
  {
    id: 6,
    src: "/images/back6.jpg",
  },
  {
    id: 7,
    src: "/images/back7.jpg",
  },
  {
    id: 8,
    src: "/images/back8.jpg",
  },
  {
    id: 9,
    src: "/images/back9.jpg",
  },
  {
    id: 10,
    src: "/images/back10.jpg",
  },
  {
    id: 11,
    src: "/images/back11.jpg",
  },
  {
    id: 12,
    src: "/images/back12.jpg",
  },
  {
    id: 13,
    src: "/images/back13.jpg",
  },
  {
    id: 14,
    src: "/images/back14.jpg",
  },
  {
    id: 15,
    src: "/images/back15.jpg",
  },
  {
    id: 16,
    src: "/images/back16.jpg",
  },
];

const ShuffleGrid = ({ children }: { children: ReactNode }) => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <>
      <div className="grid grid-cols-4 grid-rows-4 h-[75%] w-[75%] gap-2 absolute z-[0] left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
        <div
          className={`bg-[rgba(0,0,0,0.5)] absolute left-0 top-0 w-full h-full z-[100]`}
        />
        {squares.map((sq) => sq)}
      </div>
      {children}
    </>
  );
};

const shuffle = (array: (typeof squareData)[0][]) => {
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
};

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className={"w-full h-full bg-cover bg-no-repeat bg-center"}
      style={{
        backgroundImage: `url(${sq.src})`,
      }}
    />
  ));
};

export default ShuffleGrid;
