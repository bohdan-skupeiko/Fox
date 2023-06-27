// Portfolio__main-carousel
$(document).ready(function () {
	$(".portfolio__main-carousel").owlCarousel({
			margin: 24,
			nav: true,
			items: 3,
			navText: ['<img src="../img/arrow-left.svg" alt="arrow-left">',
				'<img src="../img/arrow-right.svg" alt="arrow-right">'],
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
	navText: ['<img src="../img/arrow-left.svg" alt="arrow-left">',
		'<img src="../img/arrow-right.svg" alt="arrow-right">'],
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
