import { ReactNode } from 'react'

const FactCard = ({ children }: { children?: ReactNode }) => {
    return (
        <article className='p-3 border border-primary_border text-gray-400 [&_span]:text-white max-laptop:p-2.5 max-mobile:p-2 max-small:p-1.5'>
            {children}
        </article>
    )
}

export default FactCard
