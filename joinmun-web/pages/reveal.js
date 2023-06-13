import { motion } from "framer-motion";
import Head from "next/head";

const Reveal = () => {
	return (
		<section
			className="min-h-screen"
			style={{ backgroundImage: "url('./cloud-background.png')" }}
		>
			<Head>
				<title>Reveal | JOINMUN 2023</title>
			</Head>
			<motion.div
				variants={revealVariants}
				initial="hidden"
				animate="visible"
				className="container mx-auto max-w-fit px-4 pt-10 font-headline sm:px-8"
			>
				<h2 className="mx-auto mb-3 max-w-fit bg-green px-4 py-2 text-center text-3xl sm:mb-6 sm:px-8 sm:py-4 sm:text-6xl lg:text-7xl">
					DATE REVEAL
				</h2>
				<div className="mb-6 bg-yellow px-[15vw] py-2 text-center text-2xl sm:mb-10 sm:text-5xl md:px-44 lg:text-6xl">
					<p className="text-red">28 Sept - 1 Oct</p>
				</div>
				<div className="grid auto-rows-auto grid-cols-1 gap-6 md:grid-cols-3">
					<motion.div
						variants={cardVariants}
						className="h-40 rounded-lg bg-yellow p-3 sm:p-4"
					>
						<div className="bg-brown p-1 text-center text-2xl sm:p-3 sm:text-3xl lg:text-4xl">
							28 Sept
						</div>
					</motion.div>
					<motion.div
						variants={cardVariants}
						className="h-40 rounded-lg bg-yellow p-3 sm:p-4"
					>
						<div className="bg-brown p-1 text-center text-2xl sm:p-3 sm:text-3xl lg:text-4xl">
							29 Sept
						</div>
					</motion.div>
					<motion.div
						variants={cardVariants}
						className="h-40 rounded-lg bg-yellow p-3 sm:p-4"
					>
						<div className="bg-brown p-1 text-center text-2xl sm:p-3 sm:text-3xl lg:text-4xl">
							1 Oct
						</div>
					</motion.div>
				</div>
			</motion.div>
		</section>
	);
};
export default Reveal;

export async function getServerSideProps({ res }) {
	res.writeHead(302, {
		Location: "/404",
	});
	res.end();
}

const revealVariants = {
	hidden: {
		opacity: 0,
		scale: 0.5,
	},
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			duration: 1,
			ease: "easeOut",
			when: "beforeChildren",
			staggerChildren: 0.3,
		},
	},
};

const cardVariants = {
	hidden: {
		opacity: 0,
		y: 40,
	},
	visible: {
		opacity: 1,
		y: 0,
	},
};
