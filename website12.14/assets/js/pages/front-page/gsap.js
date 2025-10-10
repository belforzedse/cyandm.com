import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const fadeInGroup = document.querySelectorAll('.fade-in');
fadeInGroup.forEach((element) => {
	gsap.from(element, {
		scrollTrigger: element,
		opacity: 0,
		duration: 0.7,
		delay: element.getAttribute('anim-delay'),
	});
});

const fadeInDownGroup = document.querySelectorAll('.fade-in-down');
fadeInDownGroup.forEach((element) => {
	gsap.from(element, {
		scrollTrigger: element,
		opacity: 0,
		y: 10,
		duration: 0.7,
		delay: element.getAttribute('anim-delay'),
	});
});
