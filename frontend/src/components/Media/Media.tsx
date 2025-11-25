import { ReactNode } from 'react';

const Media = ({ link, children }: { link: string; children: ReactNode }) => {
    return (
        <a href={link} target="_blank" className="transition-all text-gray-400 hover:text-primary hover:scale-95 hover:cursor-pointer flex flex-wrap justify-start items-center gap-3">
            {children}
        </a>
    )
}

export default Media
