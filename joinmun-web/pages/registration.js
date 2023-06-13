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
				src="https://docs.google.com/forms/d/e/1FAIpQLScFF0zJUSuIiErUlxVlP10Zxlcn4tLuEFEqoDHFNScV4OQs_Q/viewform"
				frameborder="0"
			></iframe>
		</div>
	);
};
export default Registration;
