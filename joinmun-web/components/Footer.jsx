import { FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { MdMail } from "react-icons/md";

const Footer = () => {
	return (
		<footer className="p-6 font-headline">
			<div className="flex justify-between">
				<div>
					<h3 className="mb-4 text-3xl">About</h3>
					<div className="space-y-2">
						<div className="flex items-center space-x-4">
							<FaInstagramSquare className="h-8 w-8" />
							<p>@joinmun.2023</p>
						</div>
						<div className="flex items-center space-x-4">
							<FaLinkedin className="h-8 w-8" />
							<p>Jogja International Model United Nations</p>
						</div>
						<div className="flex items-center space-x-4">
							<MdMail className="h-8 w-8" />
							<p>joinmun2023@gmail.com</p>
						</div>
					</div>
				</div>
				<div className="text-right">
					<h3 className="mb-4 text-3xl">Location</h3>
					<p>
						Bulaksumur, Caturtunggal, <br /> Kec. Depok, Kabupaten Sleman,{" "}
						<br /> Daerah Istimewa Yogyakarta <br /> 55281
					</p>
				</div>
			</div>
		</footer>
	);
};
export default Footer;
