const NotFound = () => {
	return (
		<div className="absolute top-0 w-full h-screen flex justify-center items-center">
			<div className="text-center">
				<h2 className="font-headline text-2xl text-yellow">Page Not Found</h2>
				<hr className="my-10" />
				<p>The page you are looking for does not exist (Error: 404)</p>
			</div>
		</div>
	);
};
export default NotFound;
