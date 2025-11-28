import Image from "next/image"
import Link from "next/link"
import logo from "../../assets/images/logo.png"

const Logo = () => {
    return (
        <Link href={"/"} className='flex justify-center items-center gap-2 group'>
            <Image src={logo} className="rounded-full w-[50px] h-[50px] max-laptop:-[45px] max-laptop:h-[45px] max-mobile:w-10 max-mobile:h-10" alt={"logo"} />
            <h6>webGhoul<span className={`transition-all group-hover:text-primary`}>.</span></h6>
        </Link>
    )
}

export default Logo
