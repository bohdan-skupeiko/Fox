// Portfolio__main-carousel
$(document).ready(function () {
	$(".portfolio__main-carousel").owlCarousel({
			margin: 24,
			items: 3,
			nav: true,
			navText: ['<svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
			'<rect width="39.8788" height="40" rx="2" transform="matrix(0 -1 -1 0 40 40.7151)" fill="#FE390C"/>\n' +
			'<path d="M26.6666 20.5478C26.6666 20.2323 26.4315 19.9716 26.1264 19.9303L26.0416 19.9247L15.055 19.9251L19.0241 15.9842C19.2687 15.7414 19.2696 15.3468 19.026 15.103C18.8046 14.8813 18.4574 14.8604 18.2124 15.0409L18.1421 15.1011L13.1005 20.1059C13.0682 20.1379 13.0402 20.1725 13.0165 20.2091C13.0097 20.2201 13.0029 20.2314 12.9964 20.2429C12.9905 20.2527 12.9851 20.2629 12.98 20.2733C12.973 20.2883 12.9661 20.3039 12.9598 20.3197C12.9547 20.332 12.9505 20.3439 12.9466 20.3558C12.942 20.3707 12.9375 20.3866 12.9337 20.4026C12.9308 20.4139 12.9285 20.4247 12.9266 20.4355C12.9238 20.4517 12.9214 20.4684 12.9197 20.4853C12.9183 20.4982 12.9174 20.5109 12.9169 20.5237C12.9168 20.5315 12.9166 20.5396 12.9166 20.5478L12.9169 20.5719C12.9174 20.5841 12.9183 20.5963 12.9195 20.6085L12.9166 20.5478C12.9166 20.5871 12.9203 20.6255 12.9273 20.6628C12.9289 20.6718 12.9308 20.6809 12.933 20.69C12.9374 20.7088 12.9425 20.7268 12.9484 20.7445C12.9513 20.7533 12.9547 20.7627 12.9583 20.7721C12.9656 20.7908 12.9736 20.8087 12.9823 20.8261C12.9864 20.8343 12.9909 20.8429 12.9957 20.8513C13.0035 20.8652 13.0115 20.8783 13.02 20.8912C13.026 20.9002 13.0327 20.9097 13.0396 20.919L13.045 20.9261C13.0619 20.9481 13.0801 20.9689 13.0997 20.9884L13.1004 20.9889L18.1421 25.9946C18.3867 26.2374 18.7824 26.2366 19.026 25.9927C19.2474 25.7711 19.2669 25.4248 19.0848 25.1813L19.0242 25.1115L15.0566 21.1714L26.0416 21.1709C26.3868 21.1709 26.6666 20.8919 26.6666 20.5478Z" fill="white"/>\n' +
			'</svg>',
				'<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
				'<rect y="40" width="40" height="40" rx="2" transform="rotate(-90 0 40)" fill="#FE390C"/>\n' +
				'<path d="M13.3334 19.7714C13.3334 19.455 13.5685 19.1935 13.8736 19.1521L13.9584 19.1464L24.945 19.1469L20.9759 15.1939C20.7313 14.9504 20.7304 14.5547 20.974 14.31C21.1954 14.0877 21.5426 14.0668 21.7876 14.2478L21.8579 14.3081L26.8995 19.3281C26.9318 19.3602 26.9598 19.395 26.9835 19.4317C26.9903 19.4427 26.9971 19.454 27.0036 19.4656C27.0095 19.4754 27.0149 19.4857 27.02 19.4961C27.027 19.5112 27.0339 19.5267 27.0402 19.5427C27.0453 19.5549 27.0495 19.5669 27.0534 19.5789C27.058 19.5938 27.0625 19.6097 27.0663 19.6258C27.0692 19.6371 27.0715 19.6479 27.0734 19.6588C27.0762 19.675 27.0786 19.6917 27.0803 19.7087C27.0817 19.7216 27.0826 19.7344 27.0831 19.7473C27.0832 19.7551 27.0834 19.7632 27.0834 19.7714L27.0831 19.7956C27.0826 19.8078 27.0817 19.8201 27.0805 19.8323L27.0834 19.7714C27.0834 19.8108 27.0797 19.8494 27.0727 19.8868C27.0711 19.8957 27.0692 19.9049 27.067 19.9141C27.0626 19.9329 27.0575 19.951 27.0516 19.9688C27.0487 19.9776 27.0453 19.987 27.0417 19.9964C27.0344 20.0152 27.0264 20.0331 27.0177 20.0506C27.0136 20.0588 27.0091 20.0674 27.0043 20.0759C26.9965 20.0898 26.9885 20.103 26.98 20.1158C26.974 20.1249 26.9673 20.1344 26.9604 20.1437L26.955 20.1509C26.9381 20.1729 26.9199 20.1938 26.9003 20.2133L26.8996 20.2139L21.8579 25.2347C21.6133 25.4783 21.2176 25.4775 20.974 25.2329C20.7526 25.0105 20.7331 24.6633 20.9152 24.419L20.9758 24.349L24.9434 20.3969L13.9584 20.3964C13.6132 20.3964 13.3334 20.1165 13.3334 19.7714Z" fill="white"/>\n' +
				'</svg>'],
			responsive: {
				0: {
					items: 1,
					nav: true
				},
				425: {
					items: 2,
					nav: true,
				},
				768: {
					items: 3,
					nav: true
				}
			}
		}
	);
});
// Testimonial__main-carousel
$('.testimonial__carousel').owlCarousel({
	nav: true,
	items: 1,
	margin: 2,
	mouseDrag: false,
	smartSpeed: 1000,
	dots: true,
	navText: ['<img src="/img/arrow-left.svg" alt="arrow-left">',
		'<img src="/img/arrow-right.svg" alt="arrow-right">'],
	animateOut: 'fadeOut',
});
// Testimonial__main-carousel
// FunctionCounter
$(document).ready(function () {
	var carousel2 = $('.testimonial__carousel');
	var counter2 = $('.slide-counter');
	carousel2.owlCarousel({
		// Налаштування для першої каруселі testimonial
	});
	function updateCounter(event, counter) {
		var currentItem = event.item.index + 1;
		var totalItems = event.item.count;
		var formattedCurrentItem = ('0' + currentItem).slice(-2);
		var formattedTotalItems = ('0' + totalItems).slice(-2);

		counter.html('<span>' + formattedCurrentItem + '</span>/' + formattedTotalItems);
	}
	carousel2.on('changed.owl.carousel', function (event) {
		updateCounter(event, counter2);
	});
	carousel2.on('refreshed.owl.carousel', function (event) {
		updateCounter(event, counter2);
	});
	updateCounter({item: {index: 0, count: carousel2.find('.owl-item').length}}, counter2);
});
// FunctionCounter

(function () {
	if (window.innerWidth < 993) {
		const testimonials = document.querySelectorAll('.testimonial__carousel .testimonial__main')
		testimonials.forEach(item => {
			const name = item.querySelector('.top__content-main')
			item.prepend(name)
		})
	}
})()


// Burger__function
$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('look');
	})
});
// Burger__function
