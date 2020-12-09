const WOW = require('wowjs');

function wow() {
	const animation = new WOW.WOW(
		{
			boxClass: 'wow',
			animateClass: 'animate__animated',
			offset: 0,
			mobile: true,
			live: false
		}
	);
	animation.init();
}

export default wow;