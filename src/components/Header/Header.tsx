"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Logo from "../Logo/Logo"
import { ModeToggle } from "../mode-toggle"

const Header = () => {
    const pathname = usePathname()

    return (
        <header className={`contain flex justify-between items-center gap-4 bg-background`}>
            <Logo />
            <nav className={`flex justify-center items-center gap-8 max-laptop:gap-7 max-tablet:gap-6 max-mobile:gap-5 max-small:gap-4 max-mobile:hidden`}>
                <ul className={`[&_li]:first-letter:text-primary text-gray-500 dark:text-gray-400 [&_li]:transition-all [&_li]:hover:text-foreground flex justify-center items-center gap-8 max-laptop:gap-7 max-tablet:gap-6 max-mobile:gap-5 max-small:gap-4`}>
                    <li className={pathname === `${process.env.NEXT_PUBLIC_HOME_ROUTE}` ? "text-foreground" : ""}>
                        <Link href={`${process.env.NEXT_PUBLIC_HOME_ROUTE}`}>
                            <span className={`text-primary`}>#</span>
                            home
                        </Link>
                    </li>
                    <li className={pathname === `${process.env.NEXT_PUBLIC_WORKS_ROUTE}` ? "text-foreground" : ""}>
                        <Link href={`${process.env.NEXT_PUBLIC_WORKS_ROUTE}`}>
                            <span className={`text-primary`}>#</span>
                            works
                        </Link>
                    </li>
                    <li className={pathname === `${process.env.NEXT_PUBLIC_ABOUT_ROUTE}` ? "text-foreground" : ""}>
                        <Link href={`${process.env.NEXT_PUBLIC_ABOUT_ROUTE}`}>
                            <span className={`text-primary`}>#</span>
                            about-me
                        </Link>
                    </li>
                    <li className={pathname === `${process.env.NEXT_PUBLIC_CONTACT_ROUTE}` ? "text-foreground" : ""}>
                        <Link href={`${process.env.NEXT_PUBLIC_CONTACT_ROUTE}`}>
                            <span className={`text-primary`}>#</span>
                            contacts
                        </Link>
                    </li>
                </ul>
                <ModeToggle />
            </nav>
        </header>
    )
}

export default Header
