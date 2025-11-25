import LoadingIcon from "@/src/icons/LoadingIcon";
import Link from "next/link";
import { ReactNode } from "react";

const SecondaryButton = ({ children, loading, className, onClick, link, type }: { children: ReactNode; loading?: boolean; className?: string; onClick?: () => void; link?: string; type?: "button" | "submit" }) => {
    return (
        <button type={type || "button"} className={`border border-gray-400 px-6 py-2 transition-all hover:bg-gray-300 ${loading ? "bg-gray-300" : "hover:scale-97"} hover:cursor-pointer flex justify-center items-center gap-4 ${className}`} disabled={loading} onClick={onClick}>
            {loading ? <>
                <LoadingIcon className="animate-spin w-[19px] h-auto" /> Loading...
            </> : link ? <Link href={link}>{children}</Link> : children}
        </button>
    )
}

export default SecondaryButton
