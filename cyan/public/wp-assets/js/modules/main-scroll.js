const MainScroll = () => {
	document.addEventListener('scroll', (e) => {
		if (window.scrollY > 0) {
			document.body.setAttribute('data-scrolled', 'true');
		} else {
			document.body.setAttribute('data-scrolled', 'false');
		}
	});
};

MainScroll();
