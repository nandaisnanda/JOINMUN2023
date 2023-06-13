import AccordionEl from "@/components/faq/AccordionEl";
import Head from "next/head";
import { BsFillDiamondFill } from "react-icons/bs";

const FAQ = () => {
	return (
		<div style={{ backgroundImage: "url('./cloud-background.png')" }}>
			<Head>
				<title>FAQ | JOINMUN 2023</title>
			</Head>
			<section className="container mx-auto px-4 pb-28 pt-32 sm:px-12 lg:px-16 lg:pt-20">
				<h2 className="relative mb-10 rounded-full bg-[#7c1717] px-12 py-3 text-center font-headline text-4xl shadow-[inset_0_3px_10px_rgba(0,0,0,0.7)] sm:text-5xl md:text-6xl lg:mb-14 lg:py-4 lg:text-7xl">
					<BsFillDiamondFill className="absolute bottom-0 left-6 top-0 my-auto h-auto w-4 sm:w-6 lg:left-8" />
					<BsFillDiamondFill className="absolute bottom-0 right-6 top-0 my-auto h-auto w-4 sm:w-6 lg:right-8" />
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
		</div>
	);
};
export default FAQ;

export async function getServerSideProps({ res }) {
	res.writeHead(302, {
		Location: "/404",
	});
	res.end();
}
