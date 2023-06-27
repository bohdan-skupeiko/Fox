// Portfolio__main-carousel
$(document).ready(function () {
	$(".portfolio__main-carousel").owlCarousel({
			margin: 24,
			items: 3,
			nav: true,
			navText: ['<img src="./img/arrow-left.svg" alt="arrow-left">',
				'<img src="./img/arrow-right.svg" alt="arrow-right">'],
			responsive: {
				0: {
					items: 1,
					nav: true,
					dots: true,
					dotsEach: 1,
				},
				425: {
					items: 2,
					nav: true,
					dots: true,
					dotsEach: 1,
				},
				768: {
					items: 3,
					nav: true,
					dots: true,
					dotsEach: 3,
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
	navText: ['<img src="./img/arrow-left.svg" alt="arrow-left">',
		'<img src="./img/arrow-right.svg" alt="arrow-right">'],
	animateOut: 'fadeOut',
});
// Testimonial__main-carousel
// FunctionCounter
$(document).ready(function () {
	const carousel2 = $('.testimonial__carousel');
	const counter2 = $('.slide-counter');
	carousel2.owlCarousel({
		// Налаштування для першої каруселі testimonial
	});
	function updateCounter(event, counter) {
		const currentItem = event.item.index + 1;
		const totalItems = event.item.count;
		const formattedCurrentItem = ('0' + currentItem).slice(-2);
		const formattedTotalItems = ('0' + totalItems).slice(-2);

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
