import Image from "next/image";
import logoJoinmun from "@/public/index/logo-joinmun.svg";
import Link from "next/link";
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
			className="sticky top-0 z-50 flex w-full items-center justify-between bg-yellow px-10 py-2 transition-all delay-300 duration-300"
		>
			<Image className="h-auto w-24" src={logoJoinmun} alt="logo" />
			<div className="flex space-x-4">
				{["home", "articles", "chairs", "registration", "faq"].map(
					(el, idx) => (
						<Link
							className="rounded-full bg-sub-yellow px-3 py-1 font-headline font-[500] uppercase text-black"
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
