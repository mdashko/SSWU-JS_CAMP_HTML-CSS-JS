const imgSwiper = document.querySelector(".Swiper");
const prevBtn = document.querySelector(
	".testimonials__btns-container_left-btn"
);
const nextBtn = document.querySelector(
	".testimonials__btns-container_right-btn"
);

var swiper = new Swiper(imgSwiper, {
	slidesPerView: 1,
	spaceBetween: 50,
	//centeredSlides: true,
	roundLengths: true,
	loop: true,
	navigation: {
		nextEl: nextBtn,
		prevEl: prevBtn,
	},
	breakpoints: {
		760: {
			slidesPerView: "auto",
			spaceBetween: 110,
		},
	},
});
