function AppFooterCopyright() {
	return (
		<div className="font-general-regular flex justify-center items-center text-center">
			<div className="text-lg text-ternary-dark dark:text-ternary-light">
			Made with ❤
				<a
					href="/about"
					target="__blank"
					className="hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500"
				>
		{' '}by @Aayushi
				</a>
				
				
			</div>
		</div>
	);
}

export default AppFooterCopyright;
