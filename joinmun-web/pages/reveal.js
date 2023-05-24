import { motion } from "framer-motion";

const Reveal = () => {
	return (
		<motion.div
			variants={revealVariants}
			initial="hidden"
			animate="visible"
			className="mx-auto mt-10 max-w-fit font-headline"
		>
			<h2 className="mx-auto mb-6 max-w-fit bg-green px-8 py-4 text-center text-7xl">
				DATE REVEAL
			</h2>
			<div className="mb-10 bg-yellow px-44 py-2 text-6xl">
				<p className="text-red">28 Sept - 1 Oct</p>
			</div>
			<div className="grid auto-rows-auto grid-cols-3 gap-6">
				<motion.div
					variants={cardVariants}
					className="h-40 rounded-lg bg-yellow p-4"
				>
					<div className="bg-brown p-3 text-center text-4xl">28 Sept</div>
				</motion.div>
				<motion.div
					variants={cardVariants}
					className="h-40 rounded-lg bg-yellow p-4"
				>
					<div className="bg-brown p-3 text-center text-4xl">29 Sept</div>
				</motion.div>
				<motion.div
					variants={cardVariants}
					className="h-40 rounded-lg bg-yellow p-4"
				>
					<div className="bg-brown p-3 text-center text-4xl">1 Oct</div>
				</motion.div>
			</div>
		</motion.div>
	);
};
export default Reveal;

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
