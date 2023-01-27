"use strict";
(function () {
	// Global variables
	var
		userAgent = navigator.userAgent.toLowerCase(),
		initialDate = new Date(),

		$document = $(document),
		$window = $(window),
		$html = $("html"),
		$body = $("body"),

		isDesktop = $html.hasClass("desktop"),
		isIE = userAgent.indexOf("msie") !== -1 ? parseInt(userAgent.split("msie")[1], 10) : userAgent.indexOf("trident") !== -1 ? 11 : userAgent.indexOf("edge") !== -1 ? 12 : false,
		isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
		windowReady = false,
		isNoviBuilder = false,
		livedemo = true,

		plugins = {
			bootstrapTooltip:        $( '[data-toggle="tooltip"]' ),
			customToggle:            $( '[data-custom-toggle]' ),
			counter:                 $( '.counter' ),
			captcha:                 $( '.recaptcha' ),
			campaignMonitor:         $( '.campaign-mailform' ),
			copyrightYear:           $( '.copyright-year' ),
			owl:                     $( '.owl-carousel' ),
			progressLinear:          $( '.progress-linear' ),
			preloader:               $( '.preloader' ),
			rdNavbar:                $( '.rd-navbar' ),
			rdMailForm:              $( '.rd-mailform' ),
			rdInputLabel:            $( '.form-label' ),
			regula:                  $( '[data-constraints]' ),
			search:                  $( '.rd-search' ),
			searchResults:           $( '.rd-search-results' ),
			wow:                     $( '.wow' ),
			parallaxJs:              $(".parallax-scene-js"),
			maps:                    $( '.google-map-container' ),
			customWaypoints:         $('[data-custom-scroll-to]'),
			selectFilter:            $("select")
		};

	/**
	 * @desc Check the element was been scrolled into the view
	 * @param {object} elem - jQuery object
	 * @return {boolean}
	 */
	function isScrolledIntoView ( elem ) {
		if ( isNoviBuilder ) return true;
		return elem.offset().top + elem.outerHeight() >= $window.scrollTop() && elem.offset().top <= $window.scrollTop() + $window.height();
	}

	/**
	 * @desc Calls a function when element has been scrolled into the view
	 * @param {object} element - jQuery object
	 * @param {function} func - init function
	 */
	function lazyInit( element, func ) {
		var scrollHandler = function () {
			if ( ( !element.hasClass( 'lazy-loaded' ) && ( isScrolledIntoView( element ) ) ) ) {
				func.call();
				element.addClass( 'lazy-loaded' );
			}
		};

		scrollHandler();
		$window.on( 'scroll', scrollHandler );
	}

	// Initialize scripts that require a loaded page
	$window.on('load', function () {
		// Page loader & Page transition
		if (plugins.preloader.length && !isNoviBuilder) {
			pageTransition({
				target: document.querySelector( '.page' ),
				delay: 0,
				duration: 500,
				classIn: 'fadeIn',
				classOut: 'fadeOut',
				classActive: 'animated',
				conditions: function (event, link) {
					return link && !/(\#|callto:|tel:|mailto:|:\/\/)/.test(link) && !event.currentTarget.hasAttribute('data-lightgallery');
				},
				onTransitionStart: function ( options ) {
					setTimeout( function () {
						plugins.preloader.removeClass('loaded');
					}, options.duration * .75 );
				},
				onReady: function () {
					plugins.preloader.addClass('loaded');
					windowReady = true;
				}
			});
		}

		

		// Progress bar
		if ( plugins.progressLinear.length ) {
			for ( var i = 0; i < plugins.progressLinear.length; i++) {
				var
					bar = $(plugins.progressLinear[i]),
					initProgress = function() {
						var
							bar = $(this),
							end = parseInt($(this).find('.progress-value').text(), 10);

						if ( !bar.hasClass( "animated-first" ) && isScrolledIntoView( bar ) ) {
							bar.find('.progress-bar-linear').css({width: end + '%'});
							bar.find('.progress-value').countTo({
								refreshInterval: 40,
								from: 0,
								to: end,
								speed: 1000
							});
							bar.addClass('animated-first');
						}
					};

				$.proxy( initProgress, bar )();
				$window.on( "scroll", $.proxy( initProgress, bar ) );
			}
		}


	});

	// Initialize scripts that require a finished document
	$(function () {
		isNoviBuilder = window.xMode;

		/**
		 * @desc Initialize owl carousel plugin
		 * @param {object} carousel - carousel jQuery object
		 */
		function initOwlCarousel ( carousel ) {
			var
				aliaces = [ '-', '-sm-', '-md-', '-lg-', '-xl-', '-xxl-' ],
				values = [ 0, 576, 768, 992, 1200, 1600 ],
				responsive = {};

			for ( var j = 0; j < values.length; j++ ) {
				responsive[ values[ j ] ] = {};
				for ( var k = j; k >= -1; k-- ) {
					if ( !responsive[ values[ j ] ][ 'items' ] && carousel.attr( 'data' + aliaces[ k ] + 'items' ) ) {
						responsive[ values[ j ] ][ 'items' ] = k < 0 ? 1 : parseInt( carousel.attr( 'data' + aliaces[ k ] + 'items' ), 10 );
					}
					if ( !responsive[ values[ j ] ][ 'stagePadding' ] && responsive[ values[ j ] ][ 'stagePadding' ] !== 0 && carousel.attr( 'data' + aliaces[ k ] + 'stage-padding' ) ) {
						responsive[ values[ j ] ][ 'stagePadding' ] = k < 0 ? 0 : parseInt( carousel.attr( 'data' + aliaces[ k ] + 'stage-padding' ), 10 );
					}
					if ( !responsive[ values[ j ] ][ 'margin' ] && responsive[ values[ j ] ][ 'margin' ] !== 0 && carousel.attr( 'data' + aliaces[ k ] + 'margin' ) ) {
						responsive[ values[ j ] ][ 'margin' ] = k < 0 ? 30 : parseInt( carousel.attr( 'data' + aliaces[ k ] + 'margin' ), 10 );
					}
				}
			}

			// Enable custom pagination
			if ( carousel.attr( 'data-dots-custom' ) ) {
				carousel.on( 'initialized.owl.carousel', function ( event ) {
					var
						carousel = $( event.currentTarget ),
						customPag = $( carousel.attr( 'data-dots-custom' ) ),
						active = 0;

					if ( carousel.attr( 'data-active' ) ) {
						active = parseInt( carousel.attr( 'data-active' ), 10 );
					}

					carousel.trigger( 'to.owl.carousel', [ active, 300, true ] );
					customPag.find( '[data-owl-item="' + active + '"]' ).addClass( 'active' );

					customPag.find( '[data-owl-item]' ).on( 'click', function ( event ) {
						event.preventDefault();
						carousel.trigger( 'to.owl.carousel', [ parseInt( this.getAttribute( 'data-owl-item' ), 10 ), 300, true ] );
					} );

					carousel.on( 'translate.owl.carousel', function ( event ) {
						customPag.find( '.active' ).removeClass( 'active' );
						customPag.find( '[data-owl-item="' + event.item.index + '"]' ).addClass( 'active' )
					} );
				} );
			}

			carousel.owlCarousel( {
				autoplay:           isNoviBuilder ? false : carousel.attr( 'data-autoplay' ) !== 'false',
				autoplayTimeout:    carousel.attr( "data-autoplay" ) ? Number( carousel.attr( "data-autoplay" ) ) : 3000,
				autoplayHoverPause: true,
				loop:               isNoviBuilder ? false : carousel.attr( 'data-loop' ) !== 'false',
				items:              1,
				center:             carousel.attr( 'data-center' ) === 'true',
				dotsContainer:      carousel.attr( 'data-pagination-class' ) || false,
				navContainer:       carousel.attr( 'data-navigation-class' ) || false,
				mouseDrag:          isNoviBuilder ? false : carousel.attr( 'data-mouse-drag' ) !== 'false',
				nav:                carousel.attr( 'data-nav' ) === 'true',
				dots:               carousel.attr( 'data-dots' ) === 'true',
				dotsEach:           carousel.attr( 'data-dots-each' ) ? parseInt( carousel.attr( 'data-dots-each' ), 10 ) : false,
				animateIn:          carousel.attr( 'data-animation-in' ) ? carousel.attr( 'data-animation-in' ) : false,
				animateOut:         carousel.attr( 'data-animation-out' ) ? carousel.attr( 'data-animation-out' ) : false,
				responsive:         responsive,
				navText:            carousel.attr( 'data-nav-text' ) ? $.parseJSON( carousel.attr( 'data-nav-text' ) ) : [],
				navClass:           carousel.attr( 'data-nav-class' ) ? $.parseJSON( carousel.attr( 'data-nav-class' ) ) : [ 'owl-prev', 'owl-next' ]
			} );
		}

		
		
		
		

		


		

		// Additional class on html if mac os.
		if (navigator.platform.match(/(Mac)/i)) {
			$html.addClass("mac-os");
		}

		// Adds some loosing functionality to IE browsers (IE Polyfills)
		if (isIE) {
			if (isIE === 12) $html.addClass("ie-edge");
			if (isIE === 11) $html.addClass("ie-11");
			if (isIE < 10) $html.addClass("lt-ie-10");
			if (isIE < 11) $html.addClass("ie-10");
		}

		// Bootstrap Tooltips
		if (plugins.bootstrapTooltip.length) {
			var tooltipPlacement = plugins.bootstrapTooltip.attr('data-placement');
			initBootstrapTooltip(tooltipPlacement);

			$window.on('resize orientationchange', function () {
				initBootstrapTooltip(tooltipPlacement);
			})
		}

		
		// UI To Top
		if (isDesktop && !isNoviBuilder) {
			$().UItoTop({
				easingType: 'easeOutQuad',
				containerClass: 'ui-to-top fa fa-angle-up'
			});
		}

		
		// Owl carousel
		if ( plugins.owl.length ) {
			for ( var i = 0; i < plugins.owl.length; i++ ) {
				var carousel = $( plugins.owl[ i ] );
				plugins.owl[ i ].owl = carousel;
				initOwlCarousel( carousel );
			}
		}

		// WOW
		if ($html.hasClass("wow-animation") && plugins.wow.length && !isNoviBuilder && isDesktop) {
			new WOW().init();
		}

		


		/**
		 * Parallax JS
		 * @description Creates a parallax effect between an array of layers, driving the motion from the gyroscope output of a smartdevice. If no gyroscope is available, the cursor position is used.
		 */
		if (plugins.parallaxJs.length) {
		for (var i = 0; i < plugins.parallaxJs.length; i++) {
			var scene = plugins.parallaxJs[i];
			new Parallax(scene);
		}
	}

		//Custom Waypoints
		if (plugins.customWaypoints.length && !isNoviBuilder) {
			var i;
			for (i = 0; i < plugins.customWaypoints.length; i++) {
				var $this = $(plugins.customWaypoints[i]);

				$this.on('click', function (e) {
					e.preventDefault();

					$("body, html").stop().animate({
						scrollTop: $("#" + $(this).attr('data-custom-scroll-to')).offset().top
					}, 1000, function () {
						$window.trigger("resize");
					});
				});
			}
		}


	
	});
}());
