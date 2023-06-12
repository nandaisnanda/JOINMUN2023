import Footer from "@/components/Footer";
import "@/styles/globals.css";
import dynamic from "next/dynamic";
import localFont from "next/font/local";
import Head from "next/head";

import "@/styles/scrollbar-card.css";
import { useRouter } from "next/router";

const josefinSans = localFont({
	src: "./../public/fonts/josefin-sans/JosefinSans-VariableFont_wght.ttf",
	variable: "--font-josefin-sans",
});
const philosopher = localFont({
	src: "./../public/fonts/philosopher/Philosopher-Regular.ttf",
	variable: "--font-philosopher",
});

const Navbar = dynamic(() => import("@/components/Navbar"), { ssr: false });

export default function App({ Component, pageProps }) {
	const router = useRouter();

	return (
		<main
			className={`${josefinSans.variable} ${
				philosopher.variable
			} ${
				router.pathname.includes("/councils") ? "bg-[#dfc897]" : "bg-red"
			} font-body text-yellow`}
		>
			<Head>
				<title>JOINMUN 2023</title>
			</Head>
			<div className="min-h-screen pt-20 lg:pt-0">
				<Navbar />
				<Component {...pageProps} />
			</div>
			<Footer />
		</main>
	);
}
