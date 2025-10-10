import Plyr from 'plyr';

const plyrJs = () => {
	const customerVideos = document.querySelectorAll('.plyr');
	if (!customerVideos) return;

	customerVideos.forEach((el) => {
		const vid = new Plyr(el);
	});
};

plyrJs();
