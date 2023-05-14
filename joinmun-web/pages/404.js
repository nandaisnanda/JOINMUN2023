const NotFound = () => {
	return (
		<div className="absolute top-0 flex h-screen w-full items-center justify-center">
			<div className="text-center">
				<h2 className="font-headline text-5xl text-yellow">Page Not Found</h2>
				<hr className="my-10" />
				<p>The page you are looking for does not exist (Error: 404)</p>
			</div>
		</div>
	);
};
export default NotFound;
