import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import kipas from "@/public/kipas.svg";
import Image from "next/image";
import { BsChevronLeft } from "react-icons/bs";

import "swiper/css";
import Link from "next/link";

const Hero = () => {
	return (
		<section className="relative font-headline">
			<Image
				className="absolute inset-0 m-auto h-auto w-4/5 md:w-3/5"
				src={kipas}
				alt="kipas"
			/>
			<Swiper
				loop
				navigation={{
					prevEl: ".swiper-button-prev",
					nextEl: ".swiper-button-next",
				}}
				pagination={{
					el: ".swiper-pagination",
					clickable: true,
					bulletActiveClass: "bg-yellow",
					renderBullet: (index, className) => {
						return `<div class="${className} !h-4 !w-4 rounded-full border-2 !border-yellow bg-red"></div>`;
					},
				}}
				modules={[Navigation, Pagination]}
			>
				{headlineList.map((headline) => (
					<SwiperSlide className="!flex min-h-[80vh] flex-col justify-center px-12 sm:px-20 md:px-28">
						<p className="mb-4 text-xl uppercase sm:mb-8 sm:text-2xl md:text-3xl lg:text-4xl">
							{headline.tag}
						</p>
						<h2 className="mb-2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
							{headline.headline}
						</h2>
						<p className="mb-6 text-lg sm:mb-12 sm:text-xl md:text-2xl lg:text-3xl">
							{headline.description}
						</p>
						<Link href="/reveal">
							<button className="w-fit rounded-full bg-yellow px-4 py-1 font-body text-red md:text-lg">
								more information
							</button>
						</Link>
					</SwiperSlide>
				))}
				<BsChevronLeft className="swiper-button-prev absolute inset-y-0 z-10 my-auto h-auto w-8 cursor-pointer fill-yellow sm:w-10" />
				<BsChevronLeft className="swiper-button-next absolute inset-y-0 right-0 z-10 my-auto h-auto w-8 rotate-180 cursor-pointer fill-yellow sm:w-10" />
				<div className="flex justify-center">
					<div className="swiper-pagination flex gap-2" />
				</div>
			</Swiper>
		</section>
	);
};
export default Hero;

const headlineList = [
	{
		tag: "Grand Theme",
		headline: "Ashes of the Old Order",
		description: "Emergence of the All-Informed Architects of Modern Politics",
	},
	{
		tag: "Grand Theme",
		headline: "Ashes of the Old Order",
		description: "Emergence of the All-Informed Architects of Modern Politics",
	},
	{
		tag: "Grand Theme",
		headline: "Ashes of the Old Order",
		description: "Emergence of the All-Informed Architects of Modern Politics",
	},
];
