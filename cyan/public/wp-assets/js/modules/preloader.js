function preloader() {
	const preloader = document.querySelector(".preloader-div");

	if (!preloader) return;

	window.addEventListener('load', () => {
		// preloader.classList.replace('opacity-100', 'opacity-0');
		preloader.style.opacity = "0";
		//for performance purpose
		setTimeout(() => {
			preloader.remove();
		}, 700);
	});
}

preloader();
