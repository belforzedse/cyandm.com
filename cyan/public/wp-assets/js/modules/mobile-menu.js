import { definePopUp, toggleActivateEl } from '../utils/functions';

const MobileMenu = () => {
		const mobileMenu = document.querySelector('#mobileMenu');

	if (!mobileMenu) return;
	const mobileMenuToggle = document.querySelector('#mobileMenuToggle');
 	const menuItemHasChildren = mobileMenu.querySelectorAll('menu-item-has-children'
	);
	const addGridWrapper = (el) => {
		const hasGrid = el.children.item(1).classList.contains('grid-wrapper');
		if (hasGrid) return;

		const submenu = el.querySelector('ul.sub-menu');
		const div = document.createElement('div');
		div.classList.add('grid-wrapper');

		el.appendChild(div);
		div.appendChild(submenu);
	};

	if (!mobileMenuToggle) return;

	definePopUp(mobileMenu);

	mobileMenuToggle.addEventListener('click', () => {
		toggleActivateEl(mobileMenu);
	});

	if (!menuItemHasChildren) return;

	menuItemHasChildren?.forEach((el) => {
		el.addEventListener('click', (e) => {
			if (e.target != el) return;
			toggleActivateEl(el);
		});
		addGridWrapper(el);
	});
};

MobileMenu();
