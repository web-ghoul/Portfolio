import QuoteIcon from "@/src/icons/QuoteIcon";
import data from "../../data/quotes.json";

const index = Math.floor(Math.random() * data.length);
const quote = data[index];

const QuoteSection = () => {
    return (
        <section className="contain grid justify-center items-center">
            <div className="border border-primary_border text-white p-6 relative">
                <h3>{quote.quote}</h3>
                <QuoteIcon className={`absolute left-4 top-[-17.5%] w-9 h-auto text-gray-400`} />
            </div>
            <div className="border-x border-b border-primary_border text-white p-4 relative w-fit ml-auto">
                <h3>- {quote.writer}</h3>
                <QuoteIcon className={`absolute right-4 top-[-17.5%] w-9 h-auto text-gray-400`} />
            </div>
        </section>
    )
}

export default QuoteSection
