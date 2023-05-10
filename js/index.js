// ##############################START owlCarousel###############################
$(".owl-carousel").owlCarousel({
	margin: 30,
	loop: true,
	autoplay: true,
	autoplayTimeout: 3000,
	autoplayHoverPause: true,
	smartSpeed: 2000,
	responsiveClass: true,
	responsive: {
		0: {
			items: 1,
		},
		600: {
			items: 2,
		},
		1000: {
			items: 4,
		},
		1200: {
			items: 5,
		},
	},
});
// ############################## END owlCarousel###############################
//############################ navar when scroll ##################################
const first_nav = document.querySelector(".first_nav");

window.addEventListener("scroll", () => {
	if (window.pageYOffset > 625) {
		first_nav.classList.add("second_navbar");
	} else {
		first_nav.classList.remove("second_navbar");
	}
});
const dropmenu = document.querySelector(".dropdownn");

window.addEventListener("scroll", () => {
	if (window.pageYOffset > 625) {
		dropmenu.classList.add("scnd-dropdown");
	} else {
		dropmenu.classList.remove("scnd-dropdown");
	}
});
//############################ navar when scroll ##################################
