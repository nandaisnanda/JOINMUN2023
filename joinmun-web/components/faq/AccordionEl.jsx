import { useState } from "react";

const AccordionEl = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="shadow-md">
			<h2
				onClick={() => setIsOpen((io) => !io)}
				id="accordionTrigger"
				className="relative cursor-pointer bg-yellow p-4 text-2xl font-[600] text-gray-950 transition hover:scale-[1.02]"
			>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit.
				<svg
					className={`absolute right-4 top-1/2 h-8 w-8 ${
						isOpen && "rotate-180"
					} -translate-y-1/2 transition duration-300`}
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth="1.5"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M19.5 8.25l-7.5 7.5-7.5-7.5"
					/>
				</svg>
			</h2>
			<div
				className={`grid ${
					isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
				} transition-all duration-300`}
			>
				<div className="overflow-hidden bg-sub-yellow text-gray-950">
					<p className="px-4 py-6">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
						animi officiis necessitatibus fugiat porro rem iure, vitae in dolor
						voluptatibus. Quibusdam alias, explicabo soluta architecto veritatis
						tenetur distinctio beatae sed.
					</p>
				</div>
			</div>
		</div>
	);
};
export default AccordionEl;