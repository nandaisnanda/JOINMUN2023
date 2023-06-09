import Image from "next/image";
import logoJoinmun from "@/public/index/logo-joinmun.svg";

const AboutUs = () => {
	return (
		<>
			<section className="mb-20 bg-yellow py-20 text-red">
				<div className="container mx-auto grid grid-cols-1 gap-y-10 rounded-xl px-8 sm:px-12 md:grid-cols-3 md:gap-x-10 lg:px-16">
					<Image
						className="mx-auto h-auto w-4/5 sm:w-3/5 md:h-full md:w-auto"
						src={logoJoinmun}
						alt="logo joinmun"
					/>
					<div className="col-span-2">
						<h2 className="mb-4 font-headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
							About Us
						</h2>
						<p className="text-sm md:text-base lg:text-lg">
							Founded in 2012 and located in the heritage city of Yogyakarta,
							Indonesia, JOINMUN intends to educate delegates and promote global
							peace while giving the opportinity for delegates to enjoy the city
							of Yogyakarta itself, with its mesmerizing and beautiful culture.
							As the first international Model United Nations conference in
							Yogyakarta, JOINMUN aims to immerse delegates in the traditional
							hospitality of Yogyakarta while also preparing its delegates to be
							world leaders of tomorrow.
						</p>
					</div>
				</div>
			</section>
		</>
	);
};
export default AboutUs;
