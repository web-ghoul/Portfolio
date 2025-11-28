const ChevronDownIcon = ({ className }: { className?: string }) => {
    return (
        <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <line x1="0.707107" y1="0.707108" x2="5.70711" y2="5.70711" stroke="currentColor" strokeWidth="2" />
            <line x1="4.29289" y1="5.70711" x2="9.29289" y2="0.707108" stroke="currentColor" strokeWidth="2" />
        </svg>
    )
}

export default ChevronDownIcon
