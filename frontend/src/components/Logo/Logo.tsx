import Image from "next/image"
import Link from "next/link"
import logo from "../../assets/images/logo.png"

const Logo = () => {
    return (
        <Link href={"/"} className='flex justify-center items-center gap-2 group'>
            <Image src={logo} className="rounded-full" width={50} height={50} alt={"logo"} />
            <h6>webGhoul<span className={`transition-all group-hover:text-primary`}>.</span></h6>
        </Link>
    )
}

export default Logo
