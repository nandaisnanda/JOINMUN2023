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
			<Image 
			src=""
			width={500}
			height={500}
			/>
			<div> 
				<button className="mb-20 mt-20 mr-10 ml-10">
					Single Delegate Advanced Council 
				</button>
				<button className="">
					Double Delegate Advanced Council 
				</button>
			</div>
		</>
	);
}
