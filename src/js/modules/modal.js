import { enableScroll, disableScroll } from './scrollSwitcher';

function openModal(modalSelector, titleSelector, message) {
	const modal = document.querySelector(modalSelector),
		modalTitle = modal.querySelector(titleSelector);
	modalTitle.textContent = message;
	modal.classList.add(`${modalSelector}--active`);
	disableScroll();
}

function closeModal(modalSelector) {
	const modal = document.querySelector(modalSelector);
	modal.classList.remove(`${modalSelector}--active`);
	enableScroll();
}

function closeModalListener(modalSelector) {
	const modal = document.querySelector(modalSelector);
	modal.addEventListener("click", (e) => {
		if (e.target === modal || e.target.getAttribute("data-close") == "") {
			closeModal(modalSelector);
		}
	});

	document.addEventListener("keydown", (e) => {
		if (e.code === "Escape" && modal.classList.contains(`${modalSelector}--active`)) {
			closeModal(modalSelector);
		}
	});

}

export { openModal };
export { closeModal };
export { closeModalListener };