const NotFound = () => {
	return (
		<div className="absolute top-0 flex h-screen w-full items-center justify-center">
			<div className="mx-4 text-center">
				<h2 className="font-headline text-4xl text-yellow md:text-5xl">
					Page Not Found
				</h2>
				<hr className="mb-6 mt-3 md:mb-8 lg:mt-5" />
				<p className="text-sm md:text-lg">
					The page you are looking for does not exist (Error: 404)
				</p>
			</div>
		</div>
	);
};
export default NotFound;
