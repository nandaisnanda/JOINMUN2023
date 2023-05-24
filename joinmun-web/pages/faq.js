import AccordionEl from "@/components/faq/AccordionEl";
import { BsFillDiamondFill } from "react-icons/bs";

const FAQ = () => {
	return (
		<section className="mx-auto max-w-6xl pt-20">
			<h2 className="relative mb-14 rounded-full bg-[#7c1717] p-4 text-center font-headline text-7xl shadow-inner">
				<BsFillDiamondFill className="absolute bottom-0 left-8 top-0 my-auto h-6 w-6" />
				<BsFillDiamondFill className="absolute bottom-0 right-8 top-0 my-auto h-6 w-6" />
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
