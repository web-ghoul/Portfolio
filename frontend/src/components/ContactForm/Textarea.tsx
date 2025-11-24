import { TextareaHTMLAttributes } from "react";

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = (props: TextareaProps) => {
    return (
        <div className="grid justify-stretch items-center gap-2">
            <textarea {...props} className="border border-primary_border p-3 rounded-none outline-none" ></textarea>
        </div>
    )
}

export default Textarea
