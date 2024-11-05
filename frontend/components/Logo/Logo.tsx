import Link from 'next/link';

const Logo = ({ className }: { className?: string }) => {
  return (
    <Link href={'/'} className={`rounded-full w-[50px] h-[50px] ${className}`}>
      <img
        alt={'logo'}
        className="w-full h-full rounded-full"
        src={'/images/logo.png'}
      />
    </Link>
  );
};

export default Logo;
