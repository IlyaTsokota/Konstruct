
function scrollUp(upSelector, classActive) {

	const up = document.querySelector(upSelector);
	window.addEventListener("scroll", function () {
		scrollFunction();
	});

	function scrollFunction() {
		if (document.body.scrollTop > 1200 || document.documentElement.scrollTop > 1200) {
			up.classList.add(classActive);
		} else {
			up.classList.remove(classActive);
		}
	}
	scrollFunction();
}

export default scrollUp;
