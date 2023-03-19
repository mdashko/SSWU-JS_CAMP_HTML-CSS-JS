import monthes from "../json/monthes.json" assert { type: "json" };

const greetingWindow = document.getElementById("greetingWindow");
const userName = document.querySelector(".window-container_greeting_username");
const userDate = document.querySelector(".window-container_text_date");

const monthesNames = monthes[0];

export const getCurrentDate = () => {
	const date = new Date();
	return `${
		monthesNames[date.getMonth()]
	} ${date.getDate()}, ${date.getFullYear()}`;
};

export const showWindow = (username) => {
	userName.innerHTML = username;
	userDate.innerHTML = getCurrentDate();
	greetingWindow.style.visibility = "visible";

	setTimeout(() => {
		greetingWindow.style.visibility = "hidden";
	}, 5000);
};
