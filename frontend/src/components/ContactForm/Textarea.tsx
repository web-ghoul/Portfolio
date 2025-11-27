import { TextareaHTMLAttributes } from "react";

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = (props: TextareaProps) => {
    return (
        <div className="grid justify-stretch items-center gap-2">
            <textarea {...props} className="border border-primary_border p-3 rounded-none outline-none max-laptop:p-2.5 max-mobile:p-2 max-small:p-1.5" ></textarea>
        </div>
    )
}

export default Textarea
