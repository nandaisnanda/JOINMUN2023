import Hero from "@/components/index/Hero";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<>
			<Hero />
			<h1 className="-mb-8 mt-28 text-center font-headline text-[9vw] leading-[9vw] sm:text-5xl md:-mb-16 md:mt-40 md:text-6xl lg:-mb-24 lg:text-7xl">
				Council and Topic <br /> Reveal
			</h1>
			<div className="relative">
				<div className="absolute bottom-[25%] flex w-full justify-center space-x-[15vw]">
					<button
						type="button"
						className="rounded-2xl bg-yellow px-4 py-1 font-headline text-[3vw] text-red transition-all hover:scale-105 hover:bg-sub-yellow sm:text-sm md:px-10 md:py-2 md:text-base"
					>
						<Link href="/chairs#sdac">
							<h1 className="font-bold">
								Single Delegate <br /> Advanced Council
							</h1>
						</Link>
					</button>
					<button
						type="button"
						className="rounded-2xl bg-yellow px-4 py-1 font-headline text-[3vw] text-red transition-all hover:scale-105 hover:bg-sub-yellow sm:text-sm md:px-10 md:py-2 md:text-base"
					>
						<Link href="/chairs#ddac">
							<h1 className="font-bold">
								Double Delegates <br /> Advanced Council
							</h1>
						</Link>
					</button>
				</div>
				<div className="flex justify-center">
					<Image
						className="h-auto w-11/12 max-w-3xl sm:w-3/4"
						src="/index/jogja silhouette .png"
						width={2000}
						height={2000}
						alt="jogja silhoutte"
					/>
				</div>
			</div>
			<div
				className=" bg-opacity-10 bg-cover bg-center"
				style={{
					backgroundImage: 'url("/index/Untitled_Artwork-1 11 (1).svg")',
				}}
			>
				<h1 className="mt-20 text-center font-headline text-6xl">
					Exhibition (coming soon)
				</h1>
			</div>
			<div
				className="bg-opacity-10 bg-cover bg-center "
				style={{
					backgroundImage: 'url("/index/Untitled_Artwork-1 11 (1).svg")',
				}}
			>
				<h1 className="mt-20 text-center font-headline text-6xl">Gallery</h1>
			</div>
		</>
	);
}
