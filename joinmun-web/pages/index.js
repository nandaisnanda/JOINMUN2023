import AboutUs from "@/components/index/AboutUs";
import Hero from "@/components/index/Hero";
import Remarks from "@/components/index/Remarks";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<>
			<Hero />
			<Remarks />
			<AboutUs />
			<h1
				id="councils"
				className="-mb-8 scroll-mt-12 text-center font-headline text-[9vw] leading-[9vw] sm:text-5xl md:-mb-16 md:mt-40 md:text-6xl lg:-mb-24 lg:text-7xl"
			>
				Council and Topic <br /> Reveal
			</h1>
			<div className="relative mb-28">
				<div className="absolute bottom-[25%] flex w-full justify-center space-x-[15vw]">
					<button
						type="button"
						className="rounded-2xl bg-yellow px-4 py-1 font-headline text-[3vw] text-red transition-all hover:scale-105 hover:bg-sub-yellow sm:text-sm md:px-10 md:py-2 md:text-base"
					>
						<Link href="/councils/sdac">
							<h1 className="font-bold">
								Single Delegate <br /> Council
							</h1>
						</Link>
					</button>
					<button
						type="button"
						className="rounded-2xl bg-yellow px-4 py-1 font-headline text-[3vw] text-red transition-all hover:scale-105 hover:bg-sub-yellow sm:text-sm md:px-10 md:py-2 md:text-base"
					>
						<Link href="/councils/ddac">
							<h1 className="font-bold">
								Double Delegates <br /> Council
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
			<div class="flex justify-center space-x-4"> 
			<div class="w-64 h-50 right-2 bg-yellow p-4">
  				<p class="text-red text-center font-bold">Registration Fees</p>
			</div>
			<div class="w-64 h-50 right-2 bg-yellow p-4">
  				<p class="text-red text-center font-bold">Rp1.500.000/$105 (Non-accomodation package) Rp2.200.000/$160 (Accommodation package)</p>
			</div>
			<div class="w-64 h-50 right-2 bg-yellow p-4">
  				<p class="text-red text-center font-bold">Rp1.600.000/$ (Non-accomodation package)Rp2.500.000/$ (Accommodation package)</p>
			</div>
			<div class="w-64 h-50 right-2 bg-yellow p-4">
  				<p class="text-red text-center font-bold">TBA</p>
			</div>
			</div>
			<div class="flex justify-center space-x-4 space-y-16"> 
			<div class="w-64 h-10 bg-yellow p-4">
  				<p class="text-red text-center font-bold">Timeline</p>
			</div>
			<div class="w-64 h-10  bg-yellow p-4">
  				<p class="text-red text-center font-bold">1st May - 1st June</p>
			</div>
			<div class="w-64 h-10 bg-yellow p-4">
  				<p class="text-red text-center font-bold">10th June - 15th July</p>
			</div>
			<div class="w-64 h-10  bg-yellow p-4">
  				<p class="text-red text-center font-bold">16th July - 30th August</p>
			</div>
			</div>
			{/* <h1 className="mt-20 text-center font-headline text-6xl">
				Exhibition (coming soon)
			</h1>
			<h1 className="mt-20 text-center font-headline text-6xl">Gallery</h1> */}
		</>
	);
}
