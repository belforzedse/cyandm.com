import { appendMiniBubble } from '../modules/bubble';

const Header = () => {
	const header = document.querySelector('.desktop-menu');
	if (!header) return;

	const activeMenu = header.querySelector('ul.menu > .current-menu-item');
	const parentMenu = header.querySelector('ul.menu > .current-menu-parent');

	if (!activeMenu) return;
	appendMiniBubble(8, activeMenu);

	if (!parentMenu) return;
	appendMiniBubble(8, parentMenu);
};

Header();
