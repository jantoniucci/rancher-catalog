/**
 * Centra vertical y horizontalmente el elemento en la ventana
 */
(function($){
	$.fn.center = function(options) {
		var pos = {
				SCROLLBAR_WIDTH : 17,
				sTop : function() {
					return window.pageYOffset || $.boxModel && document.documentElement.scrollTop || document.body.scrollTop;
				},
				wHeight : function() {
					if ( $.browser.opera || ($.browser.safari && parseInt ($.browser.version) > 520) ) { 
						return window.innerHeight - (($(document).height() > window.innerHeight) ? this.SCROLLBAR_WIDTH : 0);
					} else if ( $.browser.safari ) {
						return window.innerHeight;
					} else {
						return $.boxModel && document.documentElement.clientHeight || document.body.clientHeight;
					}
				},
				wWidth : function() {
					if ( $.browser.opera || ($.browser.safari && parseInt ($.browser.version) > 520) ) { 
						return window.innerWidth - (($(document).width() > window.innerWidth) ? this.SCROLLBAR_WIDTH : 0);
					} else if ( $.browser.safari ) {
						return window.innerWidth;
					} else {
						return $.boxModel && document.documentElement.clientWidth || document.body.clientWidth;
					}
				}
		};
		return this.each(function(index) {
			if (index == 0) {
				var $this = $(this);
				var elHeight = $this.height();
				var elWidth = $this.width();
				$this.css({
					position: 'absolute',
					marginTop: '0',
					top: pos.sTop() + (pos.wHeight() / 2) - (elHeight / 2),
					left: (pos.wWidth() / 2) - (elWidth / 2)
				});
			}
		});
	};
})(jQuery);