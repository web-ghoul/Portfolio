import ChevronDownIcon from "@/src/icons/ChevronDownIcon"
import Link from "next/link"

const LangSwitch = () => {
    return (
        <div className="relative group">
            <button type={"button"} className={`text-gray-500 dark:text-gray-400 flex justify-center items-center gap-3 transition-all duration-500 group-hover:text-foreground hover:cursor-pointer group`}>
                <p className="font-medium!">AR</p>
                <ChevronDownIcon className={`transition-all duration-500  group-hover:rotate-180`} />
            </button>

            <div className="py-1 grid justify-center items-center absolute opacity-0 z-[-1] transition-all duration-500 group-hover:z-10 group-hover:opacity-100 grid-rows-2 w-full">
                <Link href={"/ar"} className={`hover:text-primary transition-all h-full w-full p-2`}>
                    <p>AR</p>
                </Link>
                <Link href={"/en"} className={`hover:text-primary transition-all h-full w-full p-2`}>
                    <p>En</p>
                </Link>
            </div>

            <div className="h-0 w-full border border-primary_border absolute z-[-1] transition-all duration-300 group-hover:h-[88px] group-hover:z-9"></div>
        </div>
    )
}

export default LangSwitch
