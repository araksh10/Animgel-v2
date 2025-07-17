const LoadingSpinner = () => {
	return (
		<div className="flex justify-center items-center">
			<div
				className="flex justify-center items-center m-4 w-[12.5rem] h-[7.5rem] rounded-xl bg-sky-900"
				role="status"
				aria-label="Loading"
			>
				<div className="w-16 h-16 ml-4 rounded-full bg-gradient-to-r from-transparent to-sky-300 animate-spin p-[5px]">
					<div className="bg-sky-900 rounded-full w-full h-full"></div>
				</div>
				<p className="mx-4 font-bold italic animate-pulse">Loading . . .</p>
			</div>
		</div>
	);
};

export default LoadingSpinner;
