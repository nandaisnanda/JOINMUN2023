import Image from "next/image";
import logoJoinmun from "@/public/index/logo-joinmun.svg";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
	const navRef = useRef(null);
	const [prevScrollPos, setPrevScrollPos] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > prevScrollPos) {
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
			className="fixed flex justify-between transition-all duration-300 items-center top-0 z-50 py-2 px-10 bg-yellow w-full"
		>
			<Image className="w-24 h-auto" src={logoJoinmun} alt="logo" />
			<div className="flex space-x-4">
				{["home", "articles", "chairs", "registration", "faq"].map(
					(el, idx) => (
						<Link
							className="text-black bg-sub-yellow font-headline px-3 py-2 font-[500] text-[0.625rem] uppercase rounded-full"
							href={el !== "home" ? `/${el}` : "/"}
							key={idx}
						>
							{el}
						</Link>
					)
				)}
			</div>
		</nav>
	);
};
export default Navbar;
