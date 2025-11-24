import { ReactNode } from 'react'

const FactCard = ({ children }: { children?: ReactNode }) => {
    return (
        <article className='p-3 border border-primary_border text-gray-400 [&_span]:text-white'>
            {children}
        </article>
    )
}

export default FactCard
