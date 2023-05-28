import Hero from "@/components/index/Hero";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
	return (
		<>
			<Head>
				<title>JOINMUN 2023</title>
			</Head>
			<Hero />
		<h1 className=" mt-20 text-center font-headline text-6xl">Council and Topic</h1>
			<h1 className=" text-center font-headline text-6xl">Reveal</h1>
				<div className="flex justify-center mt-0">
			<img  
			src="/index/jogja silhouette .png"
			width={800}
			height={800}
			/>
			</div>
			</div>
			<div>
				<h1 className="font-headline mt-20 text-6xl text-center">Exhibition</h1>
			</div>
			<div className="font-headline mt-20 text-6xl text-center">
				<h1>Gallery</h1>
			</div>
		</>
	);
}
