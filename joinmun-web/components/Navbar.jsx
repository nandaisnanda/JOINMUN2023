import Image from "next/image";
import logoJoinmun from "@/public/index/logo-joinmun.svg";
import jogjaSilhouette from "@/public/jogja-silhouette.svg";
import Link from "next/link";
import { HiHome } from "react-icons/hi";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
	const navRef = useRef(null);
	const [prevScrollPos, setPrevScrollPos] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > prevScrollPos && window.scrollY >= 50) {
				navRef.current.classList.add("-translate-y-[100px]");
			} else {
				navRef.current.classList.remove("-translate-y-[100px]");
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
			id="nav"
			className="sticky top-0 z-50 flex w-full items-center justify-between bg-yellow px-10 py-2 transition-all delay-75 duration-300"
		>
			<Image className="h-auto w-24" src={logoJoinmun} alt="logo" />
			<div className="flex space-x-4">
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
						} px-3 py-1 font-headline font-[500] uppercase text-black transition hover:scale-110`}
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
			<Image
				className="absolute right-0 -z-10 h-full w-auto"
				src={jogjaSilhouette}
				alt="logo"
			/>
		</nav>
	);
};
export default Navbar;
