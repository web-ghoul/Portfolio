import Title from '@/components/Title/Title';
import { BackgroundBeamsWithCollision } from '@/components/ui/background-beams-with-collision';
import ContactForm from '@/forms/ContactForm/ContactForm';

const ContactSection = () => {
  return (
    <BackgroundBeamsWithCollision
      className={`grid justify-stretch items-center`}
    >
      <Title text={'Contact Me'} />
      <div
        className={`grid justify-stretch items-center grid-cols-2 gap-8 contain_x contain_y`}
      >
        <ContactForm />
        <h2 className="text-6xl relative z-20 font-bold text-center text-black dark:text-white tracking-tight">
          You are honored to be Contact with{' '}
          <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
            <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-primary via-red-500 to-secondary py-4">
              <span>webGhoul.</span>
            </div>
          </div>
        </h2>
      </div>
    </BackgroundBeamsWithCollision>
  );
};

export default ContactSection;
