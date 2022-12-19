const slide = document.querySelectorAll(".slide");

slide.forEach((el) => {
	el.addEventListener("click", () => {
		slide.forEach((el) => el.classList.remove("active"));
		el.classList.add("active");
	});
});
