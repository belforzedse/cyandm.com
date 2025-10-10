export const toggleShow = (el, isAddClass) => {
	['visible', 'pointer-all'].map((cls) => {
		el?.classList.toggle(cls, isAddClass);
	});
};

export const toggleFadeOff = (el, isAddClass) => {
	el?.classList.toggle('fade-off', isAddClass);
};

export const activate = (el) => {
	el?.classList.add('active');
};

export const deactivate = (el) => {
	el?.classList.remove('active');
};

export const activateOnly = (el, node) => {
	node.forEach((element) => {
		deactivate(element);
	});
	activate(el);
};

export const activateFirstEl = (node) => {
	activate(node[0]);
};



