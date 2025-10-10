import gsap from 'gsap';
import { openPopUp } from '../../modules/popUp';
import { projectsSwiper } from '../../modules/swiper';
import { marginFromSide } from '../../modules/variable';

const HomeProject = () => {
	const projectSingleCardGroup = document.querySelectorAll(
		'.projects-con .single-project-card'
	);

	if (!projectSingleCardGroup) return;

	projectSingleCardGroup.forEach((project) => {
		project.addEventListener('click', () => {
			console.log('first');
			openPopUp(project.dataset.postId);
		});
	});

	projectsSwiper.on('slideChange', (swiper) => {
		swiper.realIndex === 0 && swiper.setTranslate(marginFromSide);
	});

	/********************************* */
	const projectOnHover_TL = gsap.timeline({ defaults: { duration: 0.5 } });

	const projectOnHover_Run = () => {
		projectOnHover_TL.from('.project-on-hover', { opacity: 0, y: 60 });
		gsap.utils
			.toArray('.project-on-hover .head .right-col > *')
			.forEach((el) => {
				projectOnHover_TL.from(el, { opacity: 0, y: 30 }, '-=0.3');
			});
		gsap.utils
			.toArray('.project-on-hover .head .left-col > *')
			.forEach((el) => {
				projectOnHover_TL.from(el, { opacity: 0, y: 30 }, '-=0.45');
			});
		projectOnHover_TL.from(
			'.project-on-hover .project-content .img-con',
			{
				y: 15,
				opacity: 0,
			},
			'-=0.35'
		);
		projectOnHover_TL.from(
			'.project-on-hover .primary-btn',
			{ y: 15, opacity: 0 },
			'-=0.45'
		);
		projectOnHover_TL.from('.project-on-hover .gallery', { opacity: 0 });
	};

	document.addEventListener('openPopUp', () => projectOnHover_Run());
};

HomeProject();
