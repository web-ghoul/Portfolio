'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

let interval: NodeJS.Timeout;

type Card = {
  id: number;
  name: string;
  designation: string;
  content: React.ReactNode;
};

export const CardStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);

  useEffect(() => {
    startFlipping();

    return () => clearInterval(interval);
  }, []);
  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards];
        newArray.unshift(newArray.pop()!);
        return newArray;
      });
    }, 5000);
  };

  return (
    <div className="relative h-60 !w-[300px] md:h-60 md:w-96 m-auto flex justify-center items-start">
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="absolute bg-[#111] h-fit !w-[500px] rounded-3xl p-4 shadow-xl border border-[#222] shadow-black flex flex-col justify-between gap-6"
            style={{
              transformOrigin: 'top center',
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR,
              zIndex: cards.length - index,
            }}
          >
            <div className="font-normal text-neutral-200">{card.content}</div>
            <div>
              <p className="font-medium text-white">{card.name}</p>
              <p className="font-normal text-neutral-200">{card.designation}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
