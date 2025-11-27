import { ReactNode } from 'react';

const Media = ({ link, children }: { link: string; children: ReactNode }) => {
    return (
        <a href={link} target="_blank" className="transition-all text-gray-400 hover:text-primary hover:scale-95 hover:cursor-pointer flex flex-wrap justify-start items-center gap-3 max-laptop:gap-2.5 max-mobile:gap-2 max-small:gap-1.5 max-tablet:hover:scale-97">
            {children}
        </a>
    )
}

export default Media
