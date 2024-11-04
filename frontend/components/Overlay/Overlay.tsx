const Overlay = ({ className }: { className?: string }) => {
  return (
    <div
      className={`absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] ${className}`}
    ></div>
  );
};

export default Overlay;
