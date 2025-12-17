import Image from 'next/image'
import hero from "../../assets/images/hero.png"
import { CometCard } from '../ui/comet-card'

const WebGhoulCard = () => {
    return (
        <CometCard className={`w-fit ml-auto max-mobile:m-auto`}>
            <button
                type="button"
                className="flex w-auto h-full cursor-pointer flex-col items-stretch rounded-xl bg-white dark:bg-gray-900 p-2 border border-gray-200 dark:border-gray-700 dark:shadow-none"
                aria-label="View invite F7RA"
                style={{
                    transformStyle: "preserve-3d",
                    transform: "none",
                    opacity: 1,
                }}
            >
                <div className="relative aspect-3/4 w-full">
                    <Image
                        src={hero}
                        alt={"hero"}
                        className="relative h-[55vh] w-auto max-laptop:m-auto max-mobile:h-[35vh] max-small:h-[30vh]"
                    />
                </div>
                <div className="flex shrink-0 items-center justify-between p-3 font-mono text-foreground max-laptop:p-2.5 max-mobile:p-2 max-small:p-1.5">
                    <h6>webGhoul</h6>
                    <p className="text-gray-500 dark:text-gray-300 opacity-50">#001</p>
                </div>
            </button>
        </CometCard>
    )
}

export default WebGhoulCard
