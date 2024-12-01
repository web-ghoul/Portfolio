import { LazyLoadImage } from "react-lazy-load-image-component";

const Logo = ({ size }: { size?: string }) => {
  return (
    <div
      className={`flex justify-center items-center !rounded-full overflow-hidden`}
      style={{ width: `${size || 50}px` }}
    >
      <LazyLoadImage src={"images/logo.png"} />
    </div>
  );
};

export default Logo;
