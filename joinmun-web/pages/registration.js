// import { useEffect } from "react";

// const Registration = () => {
// 	useEffect(() => {
// 		const iframe = document.querySelector("#google-form-iframe");
// 		const resizeIframe = () => {
// 			iframe.style.height =
// 				iframe.contentWindow.document.body.scrollHeight + "px";
// 		};

// 		iframe.addEventListener("load", resizeIframe);
// 		window.addEventListener("resize", resizeIframe);

// 		return () => {
// 			iframe.removeEventListener("load", resizeIframe);
// 			window.removeEventListener("resize", resizeIframe);
// 		};
// 	}, []);
// 	return (
// 		<div>
// 			<iframe
// 				title="Google Form Embed"
// 				id="google-form-iframe"
// 				className="container mx-auto !overflow-visible md:px-16 lg:px-24"
// 				width="100%"
// 				height="100%"
// 				src="https://docs.google.com/forms/d/e/1FAIpQLScFF0zJUSuIiErUlxVlP10Zxlcn4tLuEFEqoDHFNScV4OQs_Q/viewform"
// 				frameborder="0"
// 				sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
// 			></iframe>
// 		</div>
// 	);
// };
// export default Registration;
