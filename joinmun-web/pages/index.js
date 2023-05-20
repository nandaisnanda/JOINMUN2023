import Head from "next/head";

export default function Home() {
	return (
		<>
			<Head>
				<title>JOINMUN 2023</title>
			</Head>
			<div className=""></div>
		<h1 className="absolute font-headline left-20 bottom-80 text-5xl"> 
				GRAND THEME:
			</h1>
			<h2 className="absolute left-20 bottom-56 text-7xl">
			Ashes of the Old Order 
			</h2>
			<h3 className="absolute font-headline left-20 bottom-44 text-3xl">
			Emergence of the All-Informed
			Architects of Modern Politics	
			</h3>
			<div class="absolute opacity-30 left-40">
				<Image
				src="/index/logo-joinmun.svg"
				height={800}
				width={850}
				></Image>
			</div>
			<div >
			<button class="bg-yellow px-5 py-2 text-xl tracking-wide text-red rounded-full">
				more information
			</button>
			</div>
		</>
	);
}
