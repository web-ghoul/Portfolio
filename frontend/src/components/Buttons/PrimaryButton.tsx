import { ReactNode } from "react"

const PrimaryButton = ({ children }: { children: ReactNode }) => {
    return (
        <button type={"button"} className={`border border-primary px-6 py-2 transition-all hover:bg-primary/50 hover:cursor-pointer hover:scale-98`}>
            {children}
        </button>
    )
}

export default PrimaryButton
