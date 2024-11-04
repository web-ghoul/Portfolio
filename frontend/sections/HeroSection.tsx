'use client';
import Logo from '@/components/Logo/Logo';
import Overlay from '@/components/Overlay/Overlay';
import Title from '@/components/Title/Title';
import ShuffleGrid from '@/components/ui/generateSquares';
import { AppContext } from '@/contexts/AppContext';
import { useContext } from 'react';

const HeroSection = () => {
  const { setOpenModal } = useContext(AppContext);

  return (
    <section className="h-screen w-full grid items-center gap-4 bg-black bg-grid-[rgba(255,255,255,0.5)] relative justify-stretch contain_x">
      <ShuffleGrid>
        <Overlay className={`z-[1]`} />
        <div
          className={`flex flex-col w-[50%] m-auto text-center justify-center items-center gap-4 z-[2]`}
        >
          <div className="px-2 py-1 flex justify-center items-center gap-2 !rounded-md glassy w-fit">
            <Logo className={`!w-[25px] !h-[25px]`} />
            <span className="text-xs md:text-sm text-white pfont-medium">
              webGhoul
            </span>
          </div>
          <Title text={'webGhoul'} />
          <p className="text-base md:text-lg text-slate-300 my-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam nobis
            in error repellat voluptatibus ad. dolor sit amet consectetur,
            adipisicing elit. Nam nobis in error repellat voluptatibus ad. dolor
            sit amet consectetur, adipisicing elit. Nam nobis in error repellat
            voluptatibus ad.
          </p>
          <button
            className="bg-primary w-fit text-white font-medium py-2 px-4 rounded transition-all hover:bg-primary active:scale-95"
            onClick={() => setOpenModal(true)}
          >
            Estimate a Project
          </button>
        </div>
      </ShuffleGrid>
    </section>
  );
};

export default HeroSection;
