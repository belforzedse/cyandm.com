import { getRandomInt } from './random';

const bottomFire = document.querySelector('.home-page-fire');
const uiFire = document.querySelector('.ui-fire');
const seoFire = document.querySelector('.seo-fire');
const marketingFire = document.querySelector('.marketing-fire');

export const makeFire = (config) => {
	const {
		parent,
		count,
		position: { left, top },
		size,
		color: { hue, saturate, lightness },
	} = config;

	if (!parent) return;
	for (let i = 0; i < count; i++) {
		const circle = document.createElement('div');
		circle.classList.add('circle');
		circle.style.setProperty('--left', getRandomInt(0, left) + '%');
		circle.style.setProperty('--top', getRandomInt(0, top) + '%');

		circle.style.setProperty(
			'--width',
			getRandomInt(size.min, size.max) + 'px'
		);

		circle.style.setProperty('--hue', getRandomInt(hue.min, hue.max));
		circle.style.setProperty(
			'--saturate',
			getRandomInt(saturate.min, saturate.max) + '%'
		);
		circle.style.setProperty(
			'--lightness',
			getRandomInt(lightness.min, lightness.max) + '%'
		);
		parent.appendChild(circle);
	}
};

makeFire({
	parent: bottomFire,
	count: 15,
	position: {
		left: 100,
		top: 50,
	},
	size: {
		min: 150,
		max: 450,
	},
	color: {
		hue: {
			min: 180,
			max: 264,
		},
		saturate: {
			min: 65,
			max: 100,
		},
		lightness: {
			min: 31,
			max: 63,
		},
	},
});

makeFire({
	parent: uiFire,
	count: 15,
	position: {
		left: 100,
		top: 50,
	},
	size: {
		min: 150,
		max: 450,
	},
	color: {
		hue: {
			min: 4,
			max: 57,
		},
		saturate: {
			min: 50,
			max: 100,
		},
		lightness: {
			min: 31,
			max: 63,
		},
	},
});

//seo fire red
makeFire({
	parent: seoFire,
	count: 15,
	position: {
		left: 100,
		top: 50,
	},
	size: {
		min: 150,
		max: 450,
	},
	color: {
		hue: {
			min: 350,
			max: 360,
		},
		saturate: {
			min: 64,
			max: 100,
		},
		lightness: {
			min: 16,
			max: 55,
		},
	},
});

//seo fire blue
makeFire({
	parent: seoFire,
	count: 5,
	position: {
		left: 100,
		top: 50,
	},
	size: {
		min: 150,
		max: 450,
	},
	color: {
		hue: {
			min: 236,
			max: 255,
		},
		saturate: {
			min: 64,
			max: 100,
		},
		lightness: {
			min: 31,
			max: 51,
		},
	},
});

makeFire({
	parent: marketingFire,
	count: 15,
	position: {
		left: 100,
		top: 50,
	},
	size: {
		min: 150,
		max: 450,
	},
	color: {
		hue: {
			min: 108,
			max: 155,
		},
		saturate: {
			min: 55,
			max: 100,
		},
		lightness: {
			min: 18,
			max: 63,
		},
	},
});
