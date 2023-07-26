import Head from "next/head";

const Registration = () => {
	return (
		<div>
			<Head>
				<title>Registration | JOINMUN 2023</title>
			</Head>
			<iframe
				title="Google Form Embed"
				id="google-form-iframe"
				height="900"
				className="container mx-auto !overflow-visible md:px-16 lg:px-24"
				src="https://bit.ly/LateWaveRegistration"
				frameborder="0"
			></iframe>
		</div>
	);
};
export default Registration;
