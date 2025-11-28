"use client"
import FolderIcon from "@/src/icons/FolderIcon"
import HomeIcon from "@/src/icons/HomeIcon"
import LogoIcon from "@/src/icons/LogoIcon"
import PhoneIcon from "@/src/icons/PhoneIcon"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ReactNode } from "react"

const MenuBar = () => {
    const pathname = usePathname()
    return (
        <nav className='hidden max-mobile:grid grid-cols-4 justify-stretch items-center gap-2 sticky py-3 bg-background border-t border-primary_border z-1000 -bottom-1 contain'>
            <MenuItem link={`${process.env.NEXT_PUBLIC_HOME_ROUTE}`} title={"Home"} >
                <HomeIcon className={`h-auto m-auto ${pathname === `${process.env.NEXT_PUBLIC_HOME_ROUTE}` ? "text-white w-5.5 max-small:w-5 font-medium" : "text-gray-400 w-5 max-small:w-4.5"}`} />
            </MenuItem>
            <MenuItem link={`${process.env.NEXT_PUBLIC_WORKS_ROUTE}`} title={"Works"} >
                <FolderIcon className={`h-auto m-auto ${pathname === `${process.env.NEXT_PUBLIC_WORKS_ROUTE}` ? "text-white w-5.5 max-small:w-5 font-medium" : "text-gray-400 w-5 max-small:w-4.5"}`} />
            </MenuItem>
            <MenuItem link={`${process.env.NEXT_PUBLIC_ABOUT_ROUTE}`} title={"About"} >
                <LogoIcon theme={pathname === `${process.env.NEXT_PUBLIC_ABOUT_ROUTE}` ? "light" : "dark"} className={`h-auto m-auto ${pathname === `${process.env.NEXT_PUBLIC_ABOUT_ROUTE}` ? "text-white w-5.5 max-small:w-5 font-medium" : "text-gray-400 w-5 max-small:w-4.5"}`} />
            </MenuItem>
            <MenuItem link={`${process.env.NEXT_PUBLIC_CONTACT_ROUTE}`} title={"Contact"} >
                <PhoneIcon className={`h-auto m-auto ${pathname === `${process.env.NEXT_PUBLIC_CONTACT_ROUTE}` ? "text-white w-5.5 max-small:w-5 font-medium" : "text-gray-400 w-5 max-small:w-4.5"}`} />
            </MenuItem>
        </nav>
    )
}

const MenuItem = ({ link, title, children }: { link: string; title: string; children: ReactNode }) => {
    const pathname = usePathname()
    return (
        <Link href={link} className="grid justify-center items-end gap-1 max-small:gap-0.5">
            {children}
            <p className={pathname === link ? "font-medium!" : ""}>{title}</p>
        </Link>
    )
}

export default MenuBar
