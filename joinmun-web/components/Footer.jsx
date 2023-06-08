import Link from "next/link";
import { FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { MdMail } from "react-icons/md";

const Footer = () => {
	return (
		<footer className="bg-sub-red p-6 font-headline">
			<div className="flex flex-col justify-between space-y-12 sm:flex-row sm:space-y-0">
				<div>
					<h3 className="mb-4 text-3xl sm:text-2xl lg:text-3xl">About</h3>
					<div className="space-y-2">
						<div className="flex items-center space-x-4">
							<Link href="https://instagram.com/joinmun.2023">
								<FaInstagramSquare className="h-8 w-8" />
							</Link>
							<p className="text-base sm:text-sm lg:text-base">@joinmun.2023</p>
						</div>
						<div className="flex items-center space-x-4">
							<Link href="https://www.linkedin.com/company/jogjainternationalmodelunitednations/">
								<FaLinkedin className="h-8 w-8" />
							</Link>
							<p className="text-base sm:text-sm lg:text-base">
								Jogja International Model United Nations
							</p>
						</div>
						<div className="flex items-center space-x-4">
							<Link href="mailto:joinmun2023@gmail.com">
								<MdMail className="h-8 w-8" />
							</Link>
							<p className="text-base sm:text-sm lg:text-base">
								joinmun2023@gmail.com
							</p>
						</div>
					</div>
				</div>
				<div className="text-left sm:text-right">
					<h3 className="mb-4 text-3xl sm:text-2xl lg:text-3xl">Address</h3>
					<p className="text-base sm:text-sm lg:text-base">
						Bulaksumur, Caturtunggal, <br /> Kec. Depok, Kabupaten Sleman,{" "}
						<br /> Daerah Istimewa Yogyakarta <br /> 55281
					</p>
				</div>
			</div>
		</footer>
	);
};
export default Footer;
