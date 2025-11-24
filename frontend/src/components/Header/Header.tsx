import Link from "next/link"
import LangSwitch from "../LangSwitch/LangSwitch"
import Logo from "../Logo/Logo"

const Header = () => {
    return (
        <header className={`contain flex justify-between items-center gap-4 bg-background`}>
            <Logo />
            <nav className={`flex justify-center items-center gap-8`}>
                <ul className="[&_li]:first-letter:text-primary text-gray-400 [&_li]:transition-all [&_li]:hover:text-white flex justify-center items-center gap-8">
                    <li>
                        <Link href={"/"}>
                            <span className={`text-primary`}>#</span>
                            home
                        </Link>
                    </li>
                    <li>
                        <Link href={"/works"}>
                            <span className={`text-primary`}>#</span>
                            works
                        </Link>
                    </li>
                    <li>
                        <Link href={"/about"}>
                            <span className={`text-primary`}>#</span>
                            about-me
                        </Link>
                    </li>
                    <li>
                        <Link href={"/contact"}>
                            <span className={`text-primary`}>#</span>
                            contacts
                        </Link>
                    </li>
                </ul>
                <LangSwitch />
            </nav>
        </header>
    )
}

export default Header
