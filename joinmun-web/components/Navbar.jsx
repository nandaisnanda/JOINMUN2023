import Image from "next/image";
import logoJoinmun from "@/public/index/logo-joinmun.svg";
import jogjaSilhouette from "@/public/jogja-silhouette.svg";
import Link from "next/link";
import { HiHome } from "react-icons/hi";
import { FiMenu } from "react-icons/fi";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
	const navRef = useRef(null);
	const [prevScrollPos, setPrevScrollPos] = useState(0);
	const [show, setShow] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > prevScrollPos && window.scrollY >= 50) {
				navRef.current.classList.add("-translate-y-[400px]");
			} else {
				navRef.current.classList.remove("-translate-y-[400px]");
			}
			setPrevScrollPos(window.scrollY);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [window.scrollY]);

	return (
		<nav
			ref={navRef}
			className="fixed top-0 z-50 w-full transition-all delay-75 duration-[750ms] lg:sticky"
		>
			<div className="relative flex w-full items-center justify-between bg-yellow px-4 py-2 sm:px-6 lg:px-10">
				<Image className="h-auto w-20 md:w-24" src={logoJoinmun} alt="logo" />

				{/* Desktop */}
				<div className="hidden space-x-4 lg:flex">
					<Link
						href="/"
						className="cursor-pointer rounded-full bg-red p-1 transition hover:scale-110"
					>
						<HiHome className="h-6 w-6" />
					</Link>
					{["articles", "chairs", "registration", "faq"].map((el, idx) => (
						<Link
							className={`rounded-full ${
								el === "registration" ? "bg-green text-white" : "bg-sub-yellow"
							} z-10 px-3 py-1 font-headline font-[500] uppercase text-black transition hover:scale-110`}
							href={
								el !== "home"
									? el === "registration"
										? "https://docs.google.com/forms/d/e/1FAIpQLScFF0zJUSuIiErUlxVlP10Zxlcn4tLuEFEqoDHFNScV4OQs_Q/viewform"
										: `/${el}`
									: "/"
							}
							key={idx}
						>
							{el}
						</Link>
					))}
				</div>

				{/* Mobile and Tablet */}
				<FiMenu
					onClick={() => setShow((s) => !s)}
					className="block h-auto w-12 cursor-pointer stroke-red lg:hidden"
				/>
				<Image
					className="absolute right-0 top-0 hidden h-full w-auto lg:block"
					src={jogjaSilhouette}
					alt="logo"
				/>
			</div>
			<div
				className={`relative ${
					show && "!grid-rows-[1fr]"
				} z-50 grid grid-rows-[0fr] transition-all duration-500 lg:hidden`}
			>
				<div className="overflow-hidden">
					{["home", "articles", "chairs", "registration", "faq"].map(
						(el, idx) => (
							<Link
								className={`block ${
									el === "registration" && "text-green"
								} bg-yellow px-4 py-1.5 font-headline text-xl font-[900] uppercase text-red transition hover:bg-sub-yellow sm:px-6 sm:py-1 md:text-2xl`}
								href={
									el !== "home"
										? el === "registration"
											? "https://docs.google.com/forms/d/e/1FAIpQLScFF0zJUSuIiErUlxVlP10Zxlcn4tLuEFEqoDHFNScV4OQs_Q/viewform"
											: `/${el}`
										: "/"
								}
								key={idx}
							>
								{el}
							</Link>
						)
					)}
				</div>
			</div>
		</nav>
	);
};
export default Navbar;
