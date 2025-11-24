import Link from "next/link";
import { ReactNode } from "react";

const PrimaryButton = ({ children, className, link }: { children: ReactNode; className?: string; link?: string }) => {
    return (
        <button type={"button"} className={`border border-primary px-6 py-2 transition-all hover:bg-primary/50 hover:cursor-pointer hover:scale-97 ${className}`}>
            {link ? <Link href={link}>{children}</Link> : children}
        </button>
    )
}

export default PrimaryButton
