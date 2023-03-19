const filledProgressBar = document.querySelector(
	".header__progress-bar__filled"
);

function updateProgressBar() {
	filledProgressBar.style.width = `${
		(window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
	}%`;
	requestAnimationFrame(updateProgressBar);
}

updateProgressBar();
