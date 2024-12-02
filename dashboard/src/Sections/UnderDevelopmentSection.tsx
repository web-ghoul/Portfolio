import { LazyLoadImage } from 'react-lazy-load-image-component';

const UnderDevelopmentSection = () => {
  return (
    <section className="grid justify-center items-center content-center gap-4">
      <div className="flex justify-center m-auto items-center">
        <LazyLoadImage
          src={'/images/under_development.gif'}
          className="w-[200px]"
        />
      </div>
      <h3 className="text-3xl text-white font-[700] text-center">
        Under Development...
      </h3>
    </section>
  );
};

export default UnderDevelopmentSection;
