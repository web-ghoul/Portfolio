import QuoteIcon from "@/src/icons/QuoteIcon";
import data from "../../data/quotes.json";

const index = Math.floor(Math.random() * data.length);
const quote = data[index];

const QuoteSection = () => {
    return (
        <section className="contain grid justify-center items-center">
            <div className="border border-primary_border text-white p-6 relative max-desktop:p-5 max-laptop:p-4 max-tablet:p-3 max-mobile:p-2 max-small:p-1.5">
                <h5>{quote.quote}</h5>
                <QuoteIcon className={`absolute left-4 top-[-17.5%] w-9 h-auto text-gray-400 max-laptop:w-8 max-tablet:w-6 max-mobile:w-5 max-small:w-4 max-small:-top-2`} />
            </div>
            <div className="border-x border-b border-primary_border text-white p-3 relative w-fit ml-auto max-laptop:p-2.5 max-tablet:p-2 max-mobile:p-1.5 max-small:p-1">
                <h6>- {quote.writer}</h6>
                <QuoteIcon className={`absolute right-4 top-[-20%] w-9 h-auto text-gray-400 max-laptop:w-8 max-tablet:w-6 max-mobile:w-5 max-small:w-4`} />
            </div>
        </section>
    )
}

export default QuoteSection
