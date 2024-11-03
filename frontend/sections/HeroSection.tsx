'use client';
import ShuffleGrid from '@/components/ui/generateSquares';

const HeroSection = () => {
  return (
    <section className="h-screen w-full px-16 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-16 h-screenbg-black bg-grid-white/[0.2] relative justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className={`grid justify-stretch items-center gap-4`}>
        <span className="text-xs md:text-sm text-indigo-500 bg-white px-2 py-1 !rounded-md glassy w-fit font-medium">
          Better every day
        </span>
        <h3 className="text-4xl md:text-6xl font-semibold">webGhoul</h3>
        <p className="text-base md:text-lg text-slate-300 my-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam nobis in
          error repellat voluptatibus ad.
        </p>
        <button className="bg-indigo-500 w-fit text-white font-medium py-2 px-4 rounded transition-all hover:bg-indigo-600 active:scale-95">
          Estimate a Project
        </button>
      </div>
      <ShuffleGrid />
    </section>
  );
};

export default HeroSection;
