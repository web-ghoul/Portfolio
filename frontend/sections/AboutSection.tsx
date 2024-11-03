import { MaskContainer } from '@/components/ui/svg-mask-effect';

const AboutSection = () => {
  return (
    <section className="h-screen w-full flex items-center justify-center  overflow-hidden">
      <MaskContainer
        revealText={
          <p className="text-white text-center text-4xl font-bold">
            The first rule of MRR Club is you do not talk about MRR Club. The
            second rule of MRR Club is you DO NOT talk about MRR Club.
          </p>
        }
        className="h-[40rem]"
      >
        The first rule of <span className="text-red-500">MRR Club</span> is you
        do not talk about MRR Club. The second rule of MRR Club is you DO NOT
        talk about <span className="text-red-500">MRR Club</span>.
      </MaskContainer>
    </section>
  );
};
export default AboutSection;
