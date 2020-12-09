import { enableScroll, disableScroll } from './scrollSwitcher';

export default function burger({ burgerSelector, menuSelector, classAvtiveForBurger, classActiveForMenu }) {
	const button = document.querySelector(burgerSelector),
		menu = document.querySelector(menuSelector);

	button.addEventListener('click', () => {
		if (button.classList.contains(classAvtiveForBurger) && menu.classList.contains(classActiveForMenu)) {
			button.classList.remove(classAvtiveForBurger);
			menu.classList.remove(classActiveForMenu);
			enableScroll();
		} else {
			button.classList.add(classAvtiveForBurger);
			menu.classList.add(classActiveForMenu);
			disableScroll();
		}
	});
}