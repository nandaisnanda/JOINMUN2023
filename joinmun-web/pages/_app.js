import "@/styles/globals.css";
import localFont from "next/font/local";

const josefinSans = localFont({
	src: "./../public/fonts/josefin-sans/JosefinSans-VariableFont_wght.ttf",
	variable: "--font-josefin-sans",
});
const safiraMarch = localFont({
	src: "./../public/fonts/safira-march/Safira March.otf",
	variable: "--font-safira-march",
});

export default function App({ Component, pageProps }) {
	return (
		<main className={`${josefinSans.variable} ${safiraMarch.variable}`}>
			<Component {...pageProps} />
		</main>
	);
}
