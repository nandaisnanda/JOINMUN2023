import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import kipas from "@/public/kipas.svg";
import Image from "next/image";
import { BsChevronLeft } from "react-icons/bs";

import "swiper/css";

const Hero = () => {
	return (
		<section className="relative font-headline">
			<Image
				className="absolute inset-0 m-auto h-auto w-3/5"
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
				<SwiperSlide className="min-h-[80vh] px-28 pt-28">
					<p className="mb-12 text-4xl">GRAND THEME</p>
					<h2 className="mb-2 text-7xl">Ashes of the Old Order</h2>
					<p className="mb-12 text-3xl">
						Emergence of the All-Informed Architects of Modern Politics
					</p>
					<button className="rounded-full bg-yellow px-4 py-1 font-body text-lg text-red">
						more information
					</button>
				</SwiperSlide>
				<SwiperSlide className="min-h-[80vh] px-28 pt-28">
					<p className="mb-12 text-4xl">GRAND THEME</p>
					<h2 className="mb-2 text-7xl">Ashes of the Old Order</h2>
					<p className="mb-12 text-3xl">
						Emergence of the All-Informed Architects of Modern Politics
					</p>
					<button className="rounded-full bg-yellow px-4 py-1 font-body text-lg text-red">
						more information
					</button>
				</SwiperSlide>
				<SwiperSlide className="min-h-[80vh] px-28 pt-28">
					<p className="mb-12 text-4xl">GRAND THEME</p>
					<h2 className="mb-2 text-7xl">Ashes of the Old Order</h2>
					<p className="mb-12 text-3xl">
						Emergence of the All-Informed Architects of Modern Politics
					</p>
					<button className="rounded-full bg-yellow px-4 py-1 font-body text-lg text-red">
						more information
					</button>
				</SwiperSlide>
				<BsChevronLeft className="swiper-button-prev absolute inset-y-0 z-10 my-auto h-10 w-10 cursor-pointer fill-yellow" />
				<BsChevronLeft className="swiper-button-next absolute inset-y-0 right-0 z-10 my-auto h-10 w-10 rotate-180 cursor-pointer fill-yellow" />
				<div className="flex justify-center">
					<div className="swiper-pagination flex gap-2" />
				</div>
			</Swiper>
		</section>
	);
};
export default Hero;
