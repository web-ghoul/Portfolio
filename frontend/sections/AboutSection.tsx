import Title from "@/components/Title/Title";
import { Compare } from "@/components/ui/compare";
import { MaskContainer } from "@/components/ui/svg-mask-effect";

const AboutSection = () => {
  return (
    <section className="min-h-screen w-full grid items-center justify-stretch overflow-hidden contain_x contain_y gap-8">
      <Title text={"About Me"} />
      <div className="grid justify-stretch items-center grid-cols-[1fr,auto] gap-6">
        <div className="p-4 border rounded-3xl dark:bg-[#111] bg-[#222] w-fit border-[#222] px-4">
          <Compare
            firstImageClassName="object-cover object-left-center top-[-6.5px]"
            secondImageClassname="object-cover object-left-center"
            className="h-[600px] w-[600px]"
            slideMode="hover"
          />
        </div>
        <MaskContainer
          revealText={
            <p className="text-white text-left text-4xl font-bold">
              The first rule of MRR Club is you do not talk about MRR Club. The
              second rule of MRR Club is you DO NOT talk about MRR Club.
            </p>
          }
        >
          The first rule of <span className="text-primary">MRR Club</span> is
          you do not talk about MRR Club. The second rule of MRR Club is you DO
          NOT talk about <span className="text-primary">MRR Club</span>.
        </MaskContainer>
      </div>
    </section>
  );
};
export default AboutSection;
