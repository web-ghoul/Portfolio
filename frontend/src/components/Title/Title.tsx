import Link from "next/link";

const Title = ({ title, subTitle, view, slash, noLine, className }: { title: string; subTitle?: string; view?: string; slash?: boolean; noLine?: boolean; className?: string }) => {
  return (
    <div className={`w-full grid justify-stretch items-center gap-4 grid-cols-[1fr_auto] text-white ${className}`}>
      <div className="grid">
        <div className="grid justify-start items-center gap-4 grid-cols-[auto_1fr]">
          <h2 className='font-semibold w-fit'><span className="text-primary">{slash ? "/" : "#"}</span>{title}</h2>
          {!noLine && <span className="border border-primary w-[50%]"></span>}
        </div>
        {subTitle && <p className="text-gray-400">{subTitle}</p>}
      </div>
      {
        view ? <Link href={view} className="transition-all -translate-x-2 hover:text-red-400 hover:translate-x-0">
          <h6>{"View all ~~>"}</h6>
        </Link> : <></>
      }
    </div>
  )
}

export default Title
