import { showWindow } from "./greeting.js";

const nameInput = document.querySelector(
	".form-container__form__full-name-container_input-name"
);
const surnameInput = document.querySelector(
	".form-container__form__full-name-container_input-surname"
);
const emailInput = document.querySelector(".form-container__form_input");
const formBtn = document.querySelector(".form-container__form_btn");

const nameErrorText = document.querySelector(".error-text-name");
const surnameErrorText = document.querySelector(".error-text-surname");
const emailErrorText = document.querySelector(".error-text-email");

const nameRegex = /^[a-zA-Z\-]+$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const isDataValid = (data, regex) => regex.test(data);

const addToLocalStorage = (name, surname, email) =>
	localStorage.setItem(name + " " + surname, email);

const clearForm = (input) => (input.value = "");

const displayError = (dataInput, errorText) => {
	errorText.style.visibility = "visible";
	dataInput.classList.add("error-input");
};

nameInput.addEventListener("change", () => {
	document.querySelector(".error-text-name").style.visibility = "hidden";
	nameInput.classList.remove("error-input");
});
surnameInput.addEventListener("change", () => {
	document.querySelector(".error-text-surname").style.visibility = "hidden";
	surnameInput.classList.remove("error-input");
});
emailInput.addEventListener("change", () => {
	document.querySelector(".error-text-email").style.visibility = "hidden";
	emailInput.classList.remove("error-input");
});

formBtn.addEventListener("click", (event) => {
	event.preventDefault();

	if (
		!isDataValid(nameInput.value, nameRegex) &&
		!isDataValid(surnameInput.value, nameRegex) &&
		!isDataValid(emailInput.value, emailRegex)
	) {
		displayError(nameInput, nameErrorText);
		displayError(surnameInput, surnameErrorText);
		displayError(emailInput, emailErrorText);
	} else {
		addToLocalStorage(nameInput.value, surnameInput.value, emailInput.value);
		showWindow(nameInput.value);
	}

	clearForm(nameInput);
	clearForm(surnameInput);
	clearForm(emailInput);
});
