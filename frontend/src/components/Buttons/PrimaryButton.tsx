import LoadingIcon from "@/src/icons/LoadingIcon";
import Link from "next/link";
import { ReactNode } from "react";

const PrimaryButton = ({ children, loading, className, onClick, link, type }: { children: ReactNode; loading?: boolean; className?: string; onClick?: () => void; link?: string; type?: "button" | "submit" }) => {
    return (
        <button type={type || "button"} className={`border border-primary px-6 py-2 transition-all hover:bg-primary/50 ${loading ? "bg-primary/50" : "hover:scale-97"} hover:cursor-pointer flex justify-center items-center gap-4 ${className} max-desktop:px-5 max-laptop:px-4 max-laptop:py-1.5 max-laptop:gap-3 max-mobile:px-3 max-mobile:py-1`} disabled={loading} onClick={onClick}>
            {loading ? <>
                <LoadingIcon className="animate-spin w-[19px] h-auto max-desktop:w-[18px] max-tablet:w-4 max-small:w-3" /> Loading...
            </> : link ? <Link href={link}>{children}</Link> : children}
        </button>
    )
}

export default PrimaryButton
