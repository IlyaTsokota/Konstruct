// IE9 - 11
// import 'core-js/stable';
// require('es6-promise/auto');
// require('mdn-polyfills/Node.prototype.append');
// require('mdn-polyfills/Node.prototype.remove');
// require('mdn-polyfills/Element.prototype.matches');
// require('formdata-polyfill');
// import 'unfetch/polyfill';

import isWebP from './modules/webp';
import burger from './modules/burger';
import wow from './modules/wow';

// import sendMail from './modules/email';
// import { closeModalListener } from './modules/modal';
import scrollUp from './modules/scrollUp';
import scrollToAnchor from './modules/scrollToAnchor';
// import { enableScroll, disableScroll } from './modules/scrollSwitcher';

window.addEventListener("load", () => {
	document.body.classList.add('loaded');
	start();
});

function start() {
	history.pushState('', document.title, window.location.pathname);
	isWebP();
	wow();
	burger({
		burgerSelector: '.header__burger',
		menuSelector: '.header__menu',
		classActiveForMenu: 'header__menu--active',
		classAvtiveForBurger: 'header__burger--active'
	});
	scrollToAnchor();
	scrollUp('.up', 'up--active');

}