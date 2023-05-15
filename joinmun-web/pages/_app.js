import Footer from "@/components/Footer";
import "@/styles/globals.css";
import dynamic from "next/dynamic";
import localFont from "next/font/local";

const josefinSans = localFont({
	src: "./../public/fonts/josefin-sans/JosefinSans-VariableFont_wght.ttf",
	variable: "--font-josefin-sans",
});
const safiraMarch = localFont({
	src: "./../public/fonts/safira-march/Safira March.otf",
	variable: "--font-safira-march",
});
const philosopher = localFont({
	src: "./../public/fonts/philosopher/Philosopher-Regular.ttf",
	variable: "--font-philosopher",
});

const Navbar = dynamic(() => import("@/components/Navbar"), { ssr: false });

export default function App({ Component, pageProps }) {
	return (
		<main
			className={`${josefinSans.variable} ${safiraMarch.variable} ${philosopher.variable} bg-red font-body text-yellow`}
		>
			<div className="mb-20 min-h-[150vh]">
				<Navbar />
				<Component {...pageProps} />
			</div>
			<Footer />
		</main>
	);
}
