var width = window.innerWidth,
	height = window.innerHeight;

autosize(document.querySelectorAll('textarea'));

$(function() {

	$('body').ihavecookies(optionsCookies);

	$('.mask-phone').mask('(00) 00000-0000');

	if( (device.mobile() || device.tablet()) && device.ios() ) {
		var tempCSS = $('a').css('-webkit-tap-highlight-color');
		$('main, .main-inner').css('cursor', 'pointer')
				 .css('-webkit-tap-highlight-color', 'rgba(0, 0, 0, 0)');
		$('a').css('-webkit-tap-highlight-color', tempCSS);
	}
	lazyLoading();

	$(".ripple").on("click", function(event) {
		var _this = $(this),
			offset = $(this).offset(),
			positionX = (event.pageX - offset.left),
			positionY = (event.pageY - offset.top);
		_this.append("<div class='ripple-effect'>");
		_this.find(".ripple-effect").css({
		   left: positionX,
		   top: positionY
		}).animate({
			opacity: 0,
		  }, 1500, function() {
		   $(this).remove();
		});
	});

	$('.open_popup').popup({
		transition: 'all 0.4s',
		color: '#000000',
		opacity: 0.8
	});
	
	$('.main-mnu, .mob-main-mnu-content').liLanding({
		topMargin: 50
	});

	$(".logo").on("click", function() {
		$("html, body").animate({ scrollTop: 0 }, 1000);
		return false;
	});
	
	formingHrefTel();
	headerFixed();
	headerNav();

	carousels();
	accordion();

	inputChange();
	forms();

	contentTable();
	footerReveal();

});

if(detectIE()) {
	var body = document.querySelector("body");
	body.classList.add("overflow-hidden")
	body.innerHTML = '<div class="ie-browser"><div class="ie-browser-tr"><div class="ie-browser-td">Infelizmente, o navegador Internet Explorer que você usa está desatualizado e não pode exibir o site normalmente. <br> Por favor, abra o site em outro navegador</div></div></div>';
}

var containerEl = document.getElementById('projects-container');
if(containerEl !== null) {
	var mixer = mixitup(containerEl, {
		selectors: {
			target: '.project-col'
		},
		animation: {
			duration: 300
		}
	});
}

var optionsCookies = {
	title: 'Cookies',
	message: 'Usamos cookies para entender como você usa nosso site, para personalizar o conteúdo e melhorar sua experiência. Ao continuar a usar o nosso site, você aceita o uso de cookies.',
	delay: 600,
	expires: 30,
	onAccept: function () {
		var myPreferences = $.fn.ihavecookies.cookie();
	},
	moreInfoLabel: '',
	uncheckBoxes: true,
	advancedBtnLabel: '',
}

function isNumber(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
}
function formingHrefTel() {

	var linkAll = $('.formingHrefTel'),
		joinNumbToStringTel = 'tel:';

	$.each(linkAll, function () {
		var _this = $(this),
			linkValue = _this.text(),
			arrayString = linkValue.split("");

		for (var i = 0; i < arrayString.length; i++) {
			var thisNunb = isNumber(arrayString[i]);
			if (thisNunb === true || (arrayString[i] === "+" && i === 0)) {
				joinNumbToStringTel += arrayString[i];
			}
		}

		_this.attr("href", function () {
			return joinNumbToStringTel;
		});
		joinNumbToStringTel = 'tel:'

	});

}

function headerFixed() {

	var header = $(".header"),
		headerFixed = header.find(".header-fixed"),
		headerFixedTop = headerFixed.offset().top;

	header.css("height", "auto");
	headerFixed.removeClass("fixed");

	var headerHeight = header.outerHeight();

	header.css("height", headerHeight);

	$(window).on("load scroll resize", function() {
		var st = $(this).scrollTop();
		if (st >= headerFixedTop) {
			headerFixed.addClass("fixed");
		} else {
			headerFixed.removeClass("fixed");
		}
	});

}

function headerNav() {

	$("body").append('<div class="mf-bg"></div>');

	$(".header-navbar-btn").on("click", function() {
		$(this).parent().toggleClass("open");
	});
	$(document).mouseup(function (e) {
		var container = $(".header-navbar");
		if ($(e.target).closest(".header-navbar").length) return;
		 container.removeClass("open");
		 e.stopPropagation();
	});


	$(".main-mnu-btn").on("click", function() {
		var _body = $("body"),
			offsetTop = $(".header-fixed").offset().top;
		
		$(this).toggleClass("active");

		_body.toggleClass("mob-main-mnu-open").scrollTop(offsetTop);
		
		if(_body.hasClass("mob-main-mnu-open")) {
			$(".mf-bg").addClass("visible");
		} else {
			$(".mf-bg").removeClass("visible");
		}
	});


	$(".mmm-btn").on("click", function() {

		var _this = $(this),
			item = _this.parent(),
			content = item.find(".mob-main-submnu");

		item.toggleClass("open");
		content.slideToggle();

	});

	$(document).mouseup(function (e) {
		if ($(e.target).closest(".mob-main-mnu, .main-mnu-btn").length) return;
		$("body").removeClass("mob-main-mnu-open");
		$(".main-mnu-btn").removeClass("active");
		$(".mf-bg").removeClass("visible");
		e.stopPropagation();
	});

}

function inputChange() {

  var input = $(".form-field-input");

  $(".form-field").each(function() {

    var _this = $(this),
    	val = _this.find(".form-field-input").val();

    if (val === "") {
      _this.removeClass("focus");
    } else {
      _this.addClass("focus");
	}
	
  });

  input
    .on("focus", function() {

      var _this = $(this),
        wrappInput = _this.parent();

	  wrappInput.addClass("focus");
	  
    })
    .on("keyup change", function() {

      var _this = $(this),
        val = _this.val(),
        wrappInput = _this.parent();

      if (val === "" && !_this.is(":focus")) {
        wrappInput.removeClass("focus");
      } else {
        wrappInput.addClass("focus");
	  }
	  
    })
    .on("blur", function() {

      var _this = $(this),
        val = _this.val(),
        wrappInput = _this.parent();

      if(val === "") {
		wrappInput.removeClass("focus"); 
	  }
	});
	
}

function forms() {

	var ajaxurl = "/mail.php";

	$.validator.addMethod("customemail", function (value, element) {
		return /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(value);
	},
		"Este e-mail não é valido."
	);
	
	$(".сallback_popup_form").validate({
      rules: {
        Name: {
		  required: true,
		  minlength: 2
        },
        Phone: {
		  required: true
        }
      },
      messages: {
        Name: {
          required: "O nome é requerido.",
		},
		Phone: {
          required: "O celular é requerido.",
        }
      },
      submitHandler: function(form) {
		var th = $(form),
			popup = th.closest(".popup_style"),
			close = popup.find(".popup_close");
		close.click();

		$.ajax({
			type: "POST",
			url: ajaxurl,
			data: th.serialize()
		}).done(function() {
			customAlert("Enviado com sucesso!", 4000, "success");

			setTimeout(function() {
				th.trigger("reset");
				$(".form-field").removeClass("focus");
			}, 1000);
		});

      }
	});
	

	$(".contact-form").validate({
      rules: {
        Name: {
		  required: true,
		  minlength: 2
        },
        Phone: {
		  required: true
		},
		Email: {
			required: true,
			email: true,
			customemail: true
		},
      },
      messages: {
        Name: {
          required: "O nome é requerido.",
		},
		Phone: {
          required: "O celular é requerido.",
		},
		Email: {
			required: "O email é requerido.",
			email: "O email é requerido.",
			customemail: "Este não é um email válido."
		},
      },
      submitHandler: function(form) {
		var th = $(form);

		$.ajax({
			type: "POST",
			url: ajaxurl,
			data: th.serialize()
		}).done(function() {
			customAlert("Enviado com sucesso!", 4000, "success");

			setTimeout(function() {
				th.trigger("reset");
				$(".form-field").removeClass("focus");
			}, 1000);
		});

      }
	});

}

function carousels() {
	
	var mainSlider = $(".main-banner-slider");
	mainSlider.owlCarousel({
		animateIn: "fadeIn",
		items: 1,
		loop: true,
		margin: 0,
		nav: false,
		navText: [],
		mouseDrag: false,
		autoplay: false,
		dots: true,
		onTranslated: function() {
			lazyLoading();
		}
	});

	var brandsCarusel = $(".brands-carusel");
	brandsCarusel.owlCarousel({
		items: 4,
		loop: true,
		margin: 30,
		nav: false,
		navText: [],
		dots: true,
		responsive : {
			0 : {
				items: 2
			},
			768 : {
				items: 3
			},
			992 : {
				items: 4
			}
		},
		onTranslated: function() {
			lazyLoading();
		}
	});

}

function footerReveal() {

	var footer = $(".footer"),
        content = $(".main-inner"),
        win = $(window);

	win.on('load resize', function() {

		if (footer.outerHeight() <= win.outerHeight() && footer.offset().top >= win.outerHeight()) {

			footer.css({
				'z-index' : -10,
				position : 'fixed',
				bottom : 0
			});
			content.css({
			'margin-bottom' : footer.outerHeight()
			});
		  
		} else {
	
			footer.css({
				'z-index' : 0,
				position : 'relative',
				bottom : 0
			});
			content.css({
			'margin-bottom' : '0'
			});
	
		}

	});
	
}

function lazyLoading() {
	$('.lazy').Lazy({
		effect: 'fadeIn'
	});
}

function customAlert(text, duration, alertInfo) {

	var alerts = $(".alerts"),
		body = $("body");
		alertClass = "",
		alertIco = "info";

	if(!alerts.length) {
		body.append('<div class="alerts"></div>');
	}
	$(".alert").remove();

	if( alertInfo === "success" ) {
		alertClass = "alert-success";
		alertIco = "check";
	} else if ( alertInfo === "danger" ) {
		alertClass = "alert-danger";
		alertIco = "error";
	} else if ( alertInfo === "warning" ) {
		alertClass = "alert-warning";
		alertIco = "warning";
	} else if (alertInfo == "default") {
		alertClass = "alert-default",
		alertIco = "info";
	}

	if ( !$("." + alertClass + "").length ) {

		$(".alerts").append('<div class="alert '+ alertClass +'" data-duration-hide="'+ duration +'"> <div class="alert-close"><i class="i">close</i></div> <div class="alert-ico"> <i class="i md-22">'+ alertIco +'</i> </div> <div class="alert-text">'+ text +'</div> </div>');

		setTimeout(function() {
		$("." + alertClass + "").remove();
		}, duration);

	}

	$(document).on("click", ".alert-close", function() {

		$(this).closest(".alert").remove();

	});

}

function contentTable() {
	var contentTable = $(".content");
	if(contentTable.length) {
		
		$.each(contentTable.find("table"), function() {
			$(this).wrap("<div class='table-responsive-outer'></div>").wrap("<div class='table-responsive'></div>");
		});
		
	}
}

function accordion() {

	$(".accordion-trigger").on("click", function(e) {
    e.preventDefault();

    var _this = $(this),
		item = _this.closest(".accordion-item"),
		container = _this.closest(".accordion"),
		list = _this.closest(".accordion-list"),
		items = container.find(".accordion-item"),
		content = item.find(".accordion-content"),
		otherContents = container.find(".accordion-content"),
		duration = 300;

    if (!item.hasClass("active")) {
		items.removeClass("active");
		item.addClass("active");
		otherContents.stop(true, true).slideUp(duration);
		content.stop(true, true).slideDown(duration);
    } else {
		content.stop(true, true).slideUp(duration);
		item.removeClass("active");
    }
  });

}

function initMap() {
    var geocoder, map,
        mapInfo = $('#map_address'),
        markerUrl = mapInfo.data("marker"),
        address = mapInfo.val();
    function initialize() {
        geocoder = new google.maps.Geocoder();
        var latlng = new google.maps.LatLng(-34.397, 150.644);
        var myOptions = {
            zoom: 15,
            center: latlng,
            mapTypeControl: true,
            mapTypeControlOptions: {
                style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
            },
            styles: [ { "featureType": "water", "elementType": "geometry", "stylers": [ { "color": "#e9e9e9" }, { "lightness": 17 } ] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [ { "color": "#f5f5f5" }, { "lightness": 20 } ] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [ { "color": "#ffffff" }, { "lightness": 17 } ] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [ { "color": "#ffffff" }, { "lightness": 29 }, { "weight": 0.2 } ] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [ { "color": "#ffffff" }, { "lightness": 18 } ] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [ { "color": "#ffffff" }, { "lightness": 16 } ] }, { "featureType": "poi", "elementType": "geometry", "stylers": [ { "color": "#f5f5f5" }, { "lightness": 21 } ] }, { "featureType": "poi.park", "elementType": "geometry", "stylers": [ { "color": "#dedede" }, { "lightness": 21 } ] }, { "elementType": "labels.text.stroke", "stylers": [ { "visibility": "on" }, { "color": "#ffffff" }, { "lightness": 16 } ] }, { "elementType": "labels.text.fill", "stylers": [ { "saturation": 36 }, { "color": "#333333" }, { "lightness": 40 } ] }, { "elementType": "labels.icon", "stylers": [ { "visibility": "off" } ] }, { "featureType": "transit", "elementType": "geometry", "stylers": [ { "color": "#f2f2f2" }, { "lightness": 19 } ] }, { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [ { "color": "#fefefe" }, { "lightness": 20 } ] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [ { "color": "#fefefe" }, { "lightness": 17 }, { "weight": 1.2 } ] } ],
            navigationControl: true,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
        if (geocoder) {
            geocoder.geocode({
                'address': address
            }, function(results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    if (status != google.maps.GeocoderStatus.ZERO_RESULTS) {
                        map.setCenter(results[0].geometry.location);

                        var infowindow = new google.maps.InfoWindow({
                            content: '<b>' + address + '</b>',
                            size: new google.maps.Size(150, 50)
                        });

                        var marker = new google.maps.Marker({
                            position: results[0].geometry.location,
                            map: map,
                            title: address,
                            icon: {
                              url: markerUrl,
                              scaledSize: new google.maps.Size(47, 71)
                            }
                        });
                        google.maps.event.addListener(marker, 'click', function() {
                            infowindow.open(map, marker);
                        });

                    } else {
                        console.log("+++");
                    }
                } else {
                  console.log("Status: " + status);
                    
                }
            });
        }
    }
    google.maps.event.addDomListener(window, 'load', initialize);
}

function detectIE() {
	var ua = window.navigator.userAgent;
  
	var msie = ua.indexOf('MSIE ');
	if (msie > 0) {
	  // IE 10 or older => return version number
	  return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
	}
  
	var trident = ua.indexOf('Trident/');
	if (trident > 0) {
	  // IE 11 => return version number
	  var rv = ua.indexOf('rv:');
	  return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
	}
  
	// other browser
	return false;
}

(function ($) {
	var methods = {
		init: function (options) {
			var p = {
				show: function (linkEl, landingItem) {}, 
				hide: function (linkEl, landingItem) {},
				topMargin: 0,
				speedFactor: 1
			};
			if (options) {
				$.extend(p, options);
			}
			return this.each(function () {
				var el = $(this);
				var elPos = el.offset().top;
				var wHalf = $(window).height()/2
				var scrollId = function(){};
				
				//assign events only links with anchors
				$('a[href^=\\#]',el).on('click',function() {
					var linkItem = $(this);
					if(!linkItem.is('.active')){
						var linkHref = linkItem.attr('href');
						var linkTarget = $(linkHref);
						var linkTargetPos = linkTarget.offset().top;
						var windowPos = $(window).scrollTop();
						var animDuration = linkTargetPos - windowPos
						if(animDuration < 0){
							animDuration = animDuration*-1	
						}
						//scroll the page to the desired block
						if(linkTarget.length){
							$('html, body').stop(true).animate({scrollTop:(linkTargetPos-parseFloat(p.topMargin))},1000,function(){
								$(window).trigger('scroll');
							});
						}
					}
					$("body").removeClass("mob-main-mnu-open");
					$(".main-mnu-btn").removeClass("active");
					$(".mf-bg").removeClass("visible");
					return false;
				})
				//stop the animation by scrolling
				var mousewheelevt=(/Firefox/i.test(navigator.userAgent))? "DOMMouseScroll" : "mousewheel" //FF doesn't recognize mousewheel as of FF3.x
				if (document.attachEvent) //if IE (and Opera depending on user setting)
					document.attachEvent("on"+mousewheelevt, function(e){
						$('html, body').stop(true);		
					});
				else if (document.addEventListener) //WC3 browsers
					document.addEventListener(mousewheelevt, function(e){
						//e.detail //direction
						$('html, body').stop(true);
					}, false)
				//highlight the desired link in the menu by scrolling
				$(window).on('scroll',function(e){
					clearTimeout(scrollId);
					var windowPos = $(window).scrollTop();
					if(windowPos > elPos){
						el.addClass('landingFix');	
					}else{
						el.removeClass('landingFix');	
					}
					scrollId = setTimeout(function(){
						$('.section').each(function(){
							var landingItem = $(this);
							var landingItemHeight = landingItem.height();
							var landingItemTop = landingItem.offset().top - wHalf;
							var linkHref = landingItem.attr('id');
							var linkEl = $('a[href="#'+linkHref+'"]',el);
							var status;

							if(windowPos > landingItemTop && windowPos < (landingItemTop + landingItemHeight)){
								if(!linkEl.parent().is('.active')){
									linkEl.parent().addClass('active');
									if (p.show !== undefined) {
										p.show(linkEl, landingItem);
									}
								}
							}else{
								if(linkEl.parent().is('.active')){
									linkEl.parent().removeClass('active');
									if (p.hide !== undefined) {
										p.hide(linkEl, landingItem);
									}
								}
							}
						});
					},100);
				})
				$(window).trigger('scroll');
			});
		}
	};
	$.fn.liLanding = function (method) {
		if (methods[method]) {
			return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
		} else if (typeof method === 'object' || !method) {
			return methods.init.apply(this, arguments);
		} else {
			$.error('Method ' + method + ' in jQuery.liLanding does not exist');
		}
	};
})(jQuery);