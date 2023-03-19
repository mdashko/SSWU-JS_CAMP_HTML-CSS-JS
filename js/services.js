import data from "../json/data.json" assert { type: "json" };

const interiorDesigns = data.design;
const architecture = data.architecture;
const planning = data.planning;

const designIcon = "./imgs/interior-design-ico.svg";
const architectureIcon = "./imgs/architecture-ico.svg";
const planningIcon = "./imgs/planning-ico.svg";

const designColor = ["#fff", "inherit"];
const architectureColor = ["#caa892", "#fff"];
const planningColor = ["#fff", "inherit"];

const servicesContainer = document.querySelector(".services__container");

const allBtn = document.querySelector(".all-btn");
const designBtn = document.querySelector(".design-btn");
const architectureBtn = document.querySelector(".architecture-btn");
const planningBtn = document.querySelector(".planning-btn");

const removeAllChildNodes = (container) => {
	while (container.firstChild) {
		container.removeChild(container.firstChild);
	}
};

const generateServices = (services, iconLink, serviceColor) => {
	services.forEach((item) => {
		for (let key in item) {
			const newService = document.createElement("div");
			newService.style.backgroundColor = serviceColor[0];
			newService.style.color = serviceColor[1];
			const newImg = document.createElement("img");
			newImg.src = iconLink;
			const newDiv = document.createElement("div");
			const newH3 = document.createElement("h3");
			const newP = document.createElement("p");
			newH3.innerHTML = key;
			newP.innerHTML = item[key];

			newService.classList.add("services__container__item");
			newImg.classList.add("services__container__item_img");
			newDiv.classList.add("services__container__item_descr");

			newService.appendChild(newImg);
			newService.appendChild(newDiv);
			newDiv.appendChild(newH3);
			newDiv.appendChild(newP);

			servicesContainer.appendChild(newService);
		}
	});
};

allBtn.addEventListener("click", () => {
	allBtn.classList.toggle("nonactive-btn");
	allBtn.classList.toggle("active-btn");
	removeAllChildNodes(servicesContainer);
	generateServices(interiorDesigns.slice(-1), designIcon, designColor);
	generateServices(architecture.slice(-1), architectureIcon, architectureColor);
	generateServices(planning.slice(-1), planningIcon, planningColor);
});

window.addEventListener("load", () => {
	generateServices(interiorDesigns.slice(-1), designIcon, designColor);
	generateServices(architecture.slice(-1), architectureIcon, architectureColor);
	generateServices(planning.slice(-1), planningIcon, planningColor);
});

designBtn.addEventListener("click", () => {
	designBtn.classList.toggle("nonactive-btn");
	designBtn.classList.toggle("active-btn");
	removeAllChildNodes(servicesContainer);
	generateServices(interiorDesigns, designIcon, designColor);
});

planningBtn.addEventListener("click", () => {
	planningBtn.classList.toggle("nonactive-btn");
	planningBtn.classList.toggle("active-btn");
	removeAllChildNodes(servicesContainer);
	generateServices(planning, planningIcon, planningColor);
});

architectureBtn.addEventListener("click", () => {
	architectureBtn.classList.toggle("nonactive-btn");
	architectureBtn.classList.toggle("active-btn");
	removeAllChildNodes(servicesContainer);
	generateServices(architecture, architectureIcon, architectureColor);
});
