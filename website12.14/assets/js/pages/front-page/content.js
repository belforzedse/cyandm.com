import { activateFirstEl, activateOnly } from '../../modules/classHandler';
import { getRandomInt } from '../../modules/random';
import { customerSwiperThumbs, customerSwiper } from '../../modules/swiper';
import { setCssVariable } from '../../modules/variable';

let customerThumbsHeight, customerConHeight;

const ContentHome = () => {
	//Customer Swiper Home Page Vars
	const customerThumbsEl = document.querySelector('.customer-thumbs');
	const customerCon = document.querySelector('.customer-con');
	const customerVideos = document.querySelectorAll('.feature-video video');

	customerSwiperThumbs.on('progress', () => {
		customerThumbsHeight = customerThumbsEl.clientHeight;
		customerConHeight = customerCon.clientHeight;
		setCssVariable(customerThumbsHeight, 'customerThumbsHeight', customerCon);
		setCssVariable(customerConHeight, 'customerConHeight', customerCon);
	});

	customerSwiper.on('slideChange', () => {
		customerVideos.forEach((vid) => {
			vid.pause();
		});
	});

	const SingleServiceCardGroup = document.querySelectorAll(
		'.single-service-card'
	);
	SingleServiceCardGroup.forEach((singleServiceCard) => {
		singleServiceCard.addEventListener('mousemove', (e) => {
			setCssVariable(e.layerY, 'Top', singleServiceCard);
			setCssVariable(e.layerX, 'Left', singleServiceCard);
		});
	});

	const profileGroup = document.querySelectorAll('.team-con .profile');
	//activateFirstEl(profileGroup);
	profileGroup.forEach((profile, key) => {
		profile.addEventListener('click', () => {
			activateOnly(profile, profileGroup);
		});
	});
};

ContentHome();

export { customerThumbsHeight };
