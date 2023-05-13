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

const Navbar = dynamic(() => import("@/components/Navbar"), { ssr: false });

export default function App({ Component, pageProps }) {
	return (
		<main
			className={`${josefinSans.variable} ${safiraMarch.variable} font-body min-h-screen bg-red text-yellow`}
		>
			<Navbar />
			<Component {...pageProps} />
		</main>
	);
}
