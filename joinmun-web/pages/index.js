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
			<div className="bg-cover bg-center bg-opacity-10" style={{ backgroundImage: 'url("/index/megamendung (1).png")' }}>
			<h1 className=" mt-10 text-center font-headline text-6xl">Council and Topic</h1>
			<h1 className="text-center font-headline text-6xl -mb-32">Reveal</h1>
			<button className=" absolute bg-yellow hover:bg-sub-yellow text-red font-headline py-2 px-4 rounded-full right-[340px] my-[345px]">
				<h1>Single Delegate</h1>
				<h1>Advanced Council</h1>
			</button>
			<button className="absolute bg-yellow hover:bg-sub-yellow text-red font-headline py-2 px-4 rounded-full left-[340px] my-[345px]">
				<h1>Double Delegates</h1>
				<h1>Advanced Council</h1>
			</button>
			<div className="flex justify-center">
			<Image
			src="/index/jogja silhouette .png"
			width={800}
			height={800}
			/> 
			</div> 
			</div>
			<div className=" bg-cover bg-center bg-opacity-10 " style={{ backgroundImage: 'url("/index/megamendung (1).png")' }}>
				<h1 className="font-headline mt-20 text-6xl text-center">Exhibition (coming soon)</h1>
			</div >
			<div className="bg-cover bg-center bg-opacity-10 " style={{ backgroundImage: 'url("/index/megamendung (1).png")' }}>
				<h1 className="font-headline mt-20 text-6xl text-center">Gallery</h1>
			</div>
		</>
	);
}
