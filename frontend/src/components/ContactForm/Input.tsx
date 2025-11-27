import { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input = (props: InputProps) => {
    const { id } = props

    return (
        <div className="grid justify-stretch items-center gap-2">
            <label htmlFor={id} className="hidden"></label>
            <input {...props} className="border border-primary_border p-3 rounded-none outline-none focus-visible:bg-transparent max-laptop:p-2.5 max-mobile:p-2 max-small:p-1.5" />
        </div>
    )
}

export default Input
