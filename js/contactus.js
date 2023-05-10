// start nav

const first_nav = document.querySelector(".first_nav");

window.addEventListener("scroll", () => {
	if (window.pageYOffset > -10) {
		first_nav.classList.add("second_navbar");
	} else {
		first_nav.classList.remove("second_navbar");
	}
});
// end nav
// ##############################START owlCarousel###############################
$(".owl-carousel").owlCarousel({
	margin: 30,
	loop: true,
	autoplay: true,
	autoplayTimeout: 1800,
	autoplayHoverPause: true,
	smartSpeed: 3000,
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
