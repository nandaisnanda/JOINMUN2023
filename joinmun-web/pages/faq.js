import AccordionEl from "@/components/faq/AccordionEl";

const FAQ = () => {
	return (
		<section className="mx-auto max-w-6xl pt-20">
			<h2 className="mb-14 text-center font-headline text-7xl">
				Frequently Asked Question
			</h2>
			<div className="space-y-4">
				{Array(5)
					.fill("")
					.map((_, idx) => (
						<AccordionEl />
					))}
			</div>
		</section>
	);
};
export default FAQ;
