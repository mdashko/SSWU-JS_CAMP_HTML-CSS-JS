let questionMessageTimer = null;

const resetTimer = () => {
	if (questionMessageTimer) {
		clearTimeout(questionMessageTimer);
	}
};

const askQuestionMessage = () => {
	questionMessageTimer = setTimeout(() => {
		const res = confirm("Ви ще тут?");
		if (!res) {
			window.close();
		}
	}, 10000);
};

window.addEventListener("mousemove", resetTimer);
window.addEventListener("keypress", resetTimer);
window.addEventListener("click", resetTimer);
window.addEventListener("scroll", resetTimer);
