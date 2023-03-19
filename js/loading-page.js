const loadingWindow = document.querySelector(".loading");
const body = document.querySelector("body");

body.style.position = "fixed";

window.addEventListener("load", () => {
	loadingWindow.style.visibility = "hidden";
	body.style.position = "";
});
