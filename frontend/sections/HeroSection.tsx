"use client";
import CVButton from "@/components/Buttons/CVButton";
import Logo from "@/components/Logo/Logo";
import Overlay from "@/components/Overlay/Overlay";
import Title from "@/components/Title/Title";
import ShuffleGrid from "@/components/ui/generateSquares";
import { AppContext } from "@/contexts/AppContext";
import { useContext } from "react";
import { MdCloudDownload } from "react-icons/md";

const HeroSection = () => {
  const { setOpenModal } = useContext(AppContext);

  return (
    <section className="h-screen w-full grid items-center gap-4 bg-black bg-grid-[rgba(255,255,255,0.5)] relative justify-stretch contain_x">
      <ShuffleGrid>
        <Overlay className={`z-[1]`} />
        <div
          className={`flex flex-col w-[50%] m-auto text-center justify-center items-center gap-6 z-[2]`}
        >
          <div className="px-2 py-1 flex justify-center items-center gap-2 !rounded-md glassy w-fit">
            <Logo className={`!w-[25px] !h-[25px]`} />
            <span className="text-xs md:text-sm text-white pfont-medium">
              Welcome
            </span>
          </div>
          <Title text={"webGhoul"} />
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam nobis
            in error repellat voluptatibus ad. dolor sit amet consectetur,
            adipisicing elit. Nam nobis in error repellat voluptatibus ad. dolor
            sit amet consectetur, adipisicing elit. Nam nobis in error repellat
            voluptatibus ad.
          </p>
          <div className="flex flex-row justify-center items-center gap-4">
            <button
              className="bg-primary w-fit text-white font-medium py-2 px-4 rounded transition-all hover:bg-primary active:scale-95"
              onClick={() => setOpenModal(true)}
            >
              Estimate a Project
            </button>
            <CVButton>
              <span className="translate-x-0 group-hover/modal-btn:translate-x-40 flex items-center justify-center inset-0 transition duration-500 text-white z-20">
                My Resume
              </span>
              <span className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
                <MdCloudDownload  className={`text-white text-[20px]`}/>
              </span>
            </CVButton>
          </div>
        </div>
      </ShuffleGrid>
    </section>
  );
};

export default HeroSection;
