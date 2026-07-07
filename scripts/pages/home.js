/**
 * DOM Scripts for the Home Page.
 */
(() => {
	document.addEventListener('DOMContentLoaded', function () {
		loadSlider();
	});

	/**
	 * Load Slider.
	 *
	 * Displays the brand logo sliding
	 * from right to left.
	 *
	 * @returns {void}
	 */
	const loadSlider = () => {
		const brandSlider = document.getElementById('brand-slider');
		const clienteleSlider = document.getElementById('clientele-slider');
		const heroSlider = document.getElementById('hero-slider');

		if (brandSlider) {
			new Splide('#brand-slider', {
				type: 'loop',
				drag: 'free',
				focus: 'center',
				perPage: 5,
				autoScroll: { speed: 0.25 },
				arrows: false,
				pagination: false,
				breakpoints: {
					991: {
						perPage: 3
					}
				}
			}).mount(window.splide.Extensions);
		}

		if (clienteleSlider) {
			const clientele = new Splide('#clientele-slider', {
				drag: 'free',
				perPage: 4,
				perMove: 1,
				gap: '3rem',
				arrows: false,
				pagination: false,
				type: 'loop',
				autoplay: true,
				interval: 5000,
				breakpoints: {
					786: {
						perPage: 1
					},
					991: {
						perPage: 2
					},
					1366: {
						perPage: 3
					}
				}
			});

			clientele.mount();

			document
				.getElementById('clientele-prev')
				.addEventListener('click', () => clientele.go('<'));

			document
				.getElementById('clientele-next')
				.addEventListener('click', () => clientele.go('>'));
		}

		if (heroSlider) {
			new Splide('#hero-slider', {
				drag: 'free',
				focus: 'center',
				perPage: 1,
				arrows: false,
				pagination: false,
				type: 'loop',
				autoplay: true,
				interval: 10000
			}).mount();
		}
	};
})();
