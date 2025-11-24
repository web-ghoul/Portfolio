import Image from "next/image"
import logo from "../../assets/images/logo.png"

const Logo = () => {
    return (
        <div className='flex justify-center items-center gap-2'>
            <Image src={logo} className="rounded-full" width={50} height={50} alt={"logo"} />
            <h6>webGhoul.</h6>
        </div>
    )
}

export default Logo
