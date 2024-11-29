import Title from "@/components/Title/Title";
import { Compare } from "@/components/ui/compare";
import { MaskContainer } from "@/components/ui/svg-mask-effect";

const AboutSection = () => {
  return (
    <section className="min-h-screen w-full grid items-center justify-stretch overflow-hidden contain_x contain_y gap-8">
      <Title text={"About Me"} />
      <div className="grid justify-stretch items-center grid-cols-[1fr,auto] gap-6">
        <MaskContainer
          revealText={
            <p className="text-white text-left text-2xl font-bold">
              <span className="text-4xl">
                Hello! I am <span className="text-primary">Mahmoud</span>{" "}
                <span className="text-secondary">Salama</span> ,
              </span>{" "}
              a passionate Fullstack Developer with a knack for building
              dynamic, user-friendly web applications.
              <br /> <br />I specialize in cutting-edge technologies like
              React.js, Next.js, Node.js, and Laravel, blending creativity with
              technical expertise to deliver seamless digital experiences.
              <br /> <br />
              Currently in my third year of Computer Science at Ain Shams
              University, I’ve honed my skills in frontend design with tools
              like Material UI, Tailwind CSS, and three.js, and backend
              development using Express.js, MongoDB, and PostgreSQL.
            </p>
          }
        >
          <span className="text-4xl">
            Hello! I am <span className={`text-primary`}>Mahmoud Salama</span>
          </span>
          , a passionate{" "}
          <span className="text-secondary">Fullstack Developer</span> with a
          knack for building dynamic, user-friendly web applications.
          <br /> <br />I specialize in cutting-edge technologies like React.js,
          Next.js, Node.js, and Laravel, blending creativity with technical
          expertise to deliver seamless digital experiences.
          <br /> <br />
          Currently in my third year of
          <span className="text-primary">Computer Science</span> at Ain Shams
          University, I’ve honed my skills in frontend design with tools like
          Material UI, Tailwind CSS, and three.js, and backend development using
          Express.js, MongoDB, and PostgreSQL.
        </MaskContainer>
        <div className="p-4 border rounded-3xl dark:bg-[#111] bg-[#222] w-fit border-[#222] px-4">
          <Compare
            firstImageClassName="object-cover object-left-center top-[-6.5px]"
            secondImageClassname="object-cover object-left-center"
            className="h-[600px] w-[600px]"
            slideMode="hover"
          />
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
