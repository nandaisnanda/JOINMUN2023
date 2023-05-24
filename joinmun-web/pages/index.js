import Head from "next/head";
import Image from "next/image";
export default function Home() {
	return (
		<>
			<Head>
				<title>JOINMUN 2023</title>
			</Head>
			<div className=""></div>
			<h1 className="absolute bottom-80 left-20 font-headline text-5xl">
				GRAND THEME:
			</h1>
			<h2 className="absolute bottom-56 left-20 text-7xl">
				Ashes of the Old Order
			</h2>
			<h3 className="absolute bottom-44 left-20 font-headline text-3xl">
				Emergence of the All-Informed Architects of Modern Politics
			</h3>
			<div class="absolute left-40 opacity-30">
				<Image src="/index/logo-joinmun.svg" height={800} width={850}></Image>
			</div>
			<div>
				<button class="rounded-full bg-yellow px-5 py-2 text-xl tracking-wide text-red">
					more information
				</button>
			</div>
		</>
	);
}
