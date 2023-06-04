import AccordionEl from "@/components/faq/AccordionEl";
import { BsFillDiamondFill } from "react-icons/bs";

const FAQ = () => {
	return (
		<section className="container mx-auto px-8 pt-32 sm:px-12 lg:px-16 lg:pt-20">
			<h2 className="relative mb-10 rounded-full bg-[#7c1717] px-12 py-3 text-center font-headline text-4xl shadow-inner sm:text-5xl md:text-6xl lg:mb-14 lg:py-4 lg:text-7xl">
				<BsFillDiamondFill className="absolute bottom-0 left-8 top-0 my-auto h-auto w-4 sm:w-6" />
				<BsFillDiamondFill className="absolute bottom-0 right-8 top-0 my-auto h-auto w-4 sm:w-6" />
				Frequently Asked Question
			</h2>
			<div className="space-y-4">
				{Array(5)
					.fill("")
					.map((_, idx) => (
						<AccordionEl key={idx} />
					))}
			</div>
		</section>
	);
};
export default FAQ;
