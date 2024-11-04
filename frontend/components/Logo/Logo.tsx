const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={`rounded-full w-[50px] h-[50px] ${className}`}>
      <img
        alt={'logo'}
        className="w-full h-full rounded-full"
        src={'/images/logo.png'}
      />
    </div>
  );
};

export default Logo;
