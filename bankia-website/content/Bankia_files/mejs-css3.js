$(document).ready(function() {
	$(".mejs-overlay-loading").css("background", "-webkit-gradient(linear, 0% 0%, 0% 100%, from(rgba(50,50,50,0.9)), to(rgba(0,0,0,0.9)))");
	$(".mejs-overlay-loading").css("background", "-webkit-linear-gradient(top, rgba(50,50,50,0.9), rgba(0,0,0,0.9))");
	$(".mejs-overlay-loading").css("background", "-moz-linear-gradient(top, rgba(50,50,50,0.9), rgba(0,0,0,0.9))");
	$(".mejs-overlay-loading").css("background", "-o-linear-gradient(top, rgba(50,50,50,0.9), rgba(0,0,0,0.9))");
	$(".mejs-overlay-loading").css("background", "-ms-linear-gradient(top, rgba(50,50,50,0.9), rgba(0,0,0,0.9))");
	$(".mejs-overlay-loading").css("background", "linear-gradient(rgba(50,50,50,0.9), rgba(0,0,0,0.9))");

	$(".mejs-container .mejs-controls").css("background", "rgba(0, 0, 0, 0.7)");
	$(".mejs-container .mejs-controls").css("background", "-webkit-gradient(linear, 0% 0%, 0% 100%, from(rgba(50,50,50,0.7)), to(rgba(0,0,0,0.7)))");
	$(".mejs-container .mejs-controls").css("background", "-webkit-linear-gradient(top, rgba(50,50,50,0.7), rgba(0,0,0,0.7))");
	$(".mejs-container .mejs-controls").css("background", "-moz-linear-gradient(top, rgba(50,50,50,0.7), rgba(0,0,0,0.7))");
	$(".mejs-container .mejs-controls").css("background", "-o-linear-gradient(top, rgba(50,50,50,0.7), rgba(0,0,0,0.7))");
	$(".mejs-container .mejs-controls").css("background", "-ms-linear-gradient(top, rgba(50,50,50,0.7), rgba(0,0,0,0.7))");
	$(".mejs-container .mejs-controls").css("background", "linear-gradient(rgba(50,50,50,0.7), rgba(0,0,0,0.7))");

	$(".mejs-container .mejs-controls .mejs-time").css("padding","auto 4px"); 

	$(".mejs-controls .mejs-time-rail span").css("-webkit-border-radius", "2px");
	$(".mejs-controls .mejs-time-rail span").css("-moz-border-radius", "2px");
	$(".mejs-controls .mejs-time-rail span").css("border-radius", "2px");

	$(".mejs-controls .mejs-time-rail .mejs-time-total").css("background", "rgba(50,50,50,0.8)");
	$(".mejs-controls .mejs-time-rail .mejs-time-total").css("background", "-webkit-gradient(linear, 0% 0%, 0% 100%, from(rgba(30,30,30,0.8)), to(rgba(60,60,60,0.8)))");
	$(".mejs-controls .mejs-time-rail .mejs-time-total").css("background", "-webkit-linear-gradient(top, rgba(30,30,30,0.8), rgba(60,60,60,0.8))");
	$(".mejs-controls .mejs-time-rail .mejs-time-total").css("background", "-moz-linear-gradient(top, rgba(30,30,30,0.8), rgba(60,60,60,0.8))");
	$(".mejs-controls .mejs-time-rail .mejs-time-total").css("background", "-o-linear-gradient(top, rgba(30,30,30,0.8), rgba(60,60,60,0.8))");
	$(".mejs-controls .mejs-time-rail .mejs-time-total").css("background", "-ms-linear-gradient(top, rgba(30,30,30,0.8), rgba(60,60,60,0.8))");
	$(".mejs-controls .mejs-time-rail .mejs-time-total").css("background", "linear-gradient(rgba(30,30,30,0.8), rgba(60,60,60,0.8))");
	$(".mejs-controls .mejs-time-rail .mejs-time-total").css("filter", "progid:DXImageTransform.Microsoft.Gradient(GradientType=0, startColorstr=#1E1E1E,endColorstr=#3C3C3C)");

	$(".mejs-controls .mejs-time-rail .mejs-time-loaded").css("background", "rgba(60,170,200,0.8)");
	$(".mejs-controls .mejs-time-rail .mejs-time-loaded").css("background", "-webkit-gradient(linear, 0% 0%, 0% 100%, from(rgba(44,124,145,0.8)), to(rgba(78,183,212,0.8)))");
	$(".mejs-controls .mejs-time-rail .mejs-time-loaded").css("background", "-webkit-linear-gradient(top, rgba(44,124,145,0.8), rgba(78,183,212,0.8))");
	$(".mejs-controls .mejs-time-rail .mejs-time-loaded").css("background", "-moz-linear-gradient(top, rgba(44,124,145,0.8), rgba(78,183,212,0.8))");
	$(".mejs-controls .mejs-time-rail .mejs-time-loaded").css("background", "-o-linear-gradient(top, rgba(44,124,145,0.8), rgba(78,183,212,0.8))");
	$(".mejs-controls .mejs-time-rail .mejs-time-loaded").css("background", "-ms-linear-gradient(top, rgba(44,124,145,0.8), rgba(78,183,212,0.8))");
	$(".mejs-controls .mejs-time-rail .mejs-time-loaded").css("background", "linear-gradient(rgba(44,124,145,0.8), rgba(78,183,212,0.8))");
	$(".mejs-controls .mejs-time-rail .mejs-time-loaded").css("filter", "progid:DXImageTransform.Microsoft.Gradient(GradientType=0, startColorstr=#2C7C91,endColorstr=#4EB7D4)");

	$(".mejs-controls .mejs-time-rail .mejs-time-current").css("background", "rgba(255,255,255,0.8)");
	$(".mejs-controls .mejs-time-rail .mejs-time-current").css("background", "-webkit-gradient(linear, 0% 0%, 0% 100%, from(rgba(255,255,255,0.9)), to(rgba(200,200,200,0.8)))");
	$(".mejs-controls .mejs-time-rail .mejs-time-current").css("background", "-webkit-linear-gradient(top, rgba(255,255,255,0.9), rgba(200,200,200,0.8))");
	$(".mejs-controls .mejs-time-rail .mejs-time-current").css("background", "-moz-linear-gradient(top, rgba(255,255,255,0.9), rgba(200,200,200,0.8))");
	$(".mejs-controls .mejs-time-rail .mejs-time-current").css("background", "-o-linear-gradient(top, rgba(255,255,255,0.9), rgba(200,200,200,0.8))");
	$(".mejs-controls .mejs-time-rail .mejs-time-current").css("background", "-ms-linear-gradient(top, rgba(255,255,255,0.9), rgba(200,200,200,0.8))");
	$(".mejs-controls .mejs-time-rail .mejs-time-current").css("background", "linear-gradient(rgba(255,255,255,0.9), rgba(200,200,200,0.8))");
	$(".mejs-controls .mejs-time-rail .mejs-time-current").css("filter", "progid:DXImageTransform.Microsoft.Gradient(GradientType=0, startColorstr=#FFFFFF,endColorstr=#C8C8C8)");

	$(".mejs-controls .mejs-time-rail .mejs-time-handle").css("-webkit-border-radius", "5px");
	$(".mejs-controls .mejs-time-rail .mejs-time-handle").css("-moz-border-radius", "5px");
	$(".mejs-controls .mejs-time-rail .mejs-time-handle").css("border-radius", "5px");

	$(".mejs-controls .mejs-time-rail .mejs-time-float-corner").css("-webkit-border-radius", "0");
	$(".mejs-controls .mejs-time-rail .mejs-time-float-corner").css("-moz-border-radius", "0");
	$(".mejs-controls .mejs-time-rail .mejs-time-float-corner").css("border-radius", "0");

	$(".mejs-controls .mejs-volume-button .mejs-volume-slider").css("background", "rgba(50, 50, 50, 0.7)");
	$(".mejs-controls .mejs-volume-button .mejs-volume-slider").css("-webkit-border-radius", "0");
	$(".mejs-controls .mejs-volume-button .mejs-volume-slider").css("-moz-border-radius", "0");
	$(".mejs-controls .mejs-volume-button .mejs-volume-slider").css("border-radius", "0");

	if ((!$.browser.msie) || (parseInt($.browser.version, 10) >= 8)) {
		$(".mejs-controls .mejs-volume-button:hover").css("-webkit-border-radius", "0 0 4px 4px");
		$(".mejs-controls .mejs-volume-button:hover").css("-moz-border-radius", "0 0 4px 4px");
		$(".mejs-controls .mejs-volume-button:hover").css("border-radius", "0 0 4px 4px");
	}
	
	$(".mejs-controls .mejs-volume-button .mejs-volume-slider .mejs-volume-total").css("background", "rgba(255, 255, 255, 0.5)");

	$(".mejs-controls .mejs-volume-button .mejs-volume-slider .mejs-volume-current").css("background", "rgba(255, 255, 255, 0.9)");

	$(".mejs-controls .mejs-volume-button .mejs-volume-slider .mejs-volume-handle").css("background", "rgba(255, 255, 255, 0.9)");
	$(".mejs-controls .mejs-volume-button .mejs-volume-slider .mejs-volume-handle").css("-webkit-border-radius", "1px");
	$(".mejs-controls .mejs-volume-button .mejs-volume-slider .mejs-volume-handle").css("-moz-border-radius", "1px");
	$(".mejs-controls .mejs-volume-button .mejs-volume-slider .mejs-volume-handle").css("border-radius", "1px");

	$(".mejs-controls .mejs-captions-button .mejs-captions-selector").css("background", "rgba(50,50,50,0.7)");
	$(".mejs-controls .mejs-captions-button .mejs-captions-selector").css("-webkit-border-radius", "0");
	$(".mejs-controls .mejs-captions-button .mejs-captions-selector").css("-moz-border-radius", "0");
	$(".mejs-controls .mejs-captions-button .mejs-captions-selector").css("border-radius", "0");

	$(".mejs-chapters").css("-xborder-right","solid 1px #fff");

	$(".mejs-chapters .mejs-chapter").css("background","rgba(0, 0, 0, 0.7)");
	$(".mejs-chapters .mejs-chapter").css("background","-webkit-gradient(linear, 0% 0%, 0% 100%, from(rgba(50,50,50,0.7)), to(rgba(0,0,0,0.7)))");
	$(".mejs-chapters .mejs-chapter").css("background","-webkit-linear-gradient(top, rgba(50,50,50,0.7), rgba(0,0,0,0.7))");
	$(".mejs-chapters .mejs-chapter").css("background","-moz-linear-gradient(top, rgba(50,50,50,0.7), rgba(0,0,0,0.7))");
	$(".mejs-chapters .mejs-chapter").css("background","-o-linear-gradient(top, rgba(50,50,50,0.7), rgba(0,0,0,0.7))");
	$(".mejs-chapters .mejs-chapter").css("background","-ms-linear-gradient(top, rgba(50,50,50,0.7), rgba(0,0,0,0.7))");
	$(".mejs-chapters .mejs-chapter").css("background","linear-gradient(rgba(50,50,50,0.7), rgba(0,0,0,0.7));");
	$(".mejs-chapters .mejs-chapter").css("filter","progid:DXImageTransform.Microsoft.Gradient(GradientType=0, startColorstr=#323232,endColorstr=#000000)");

	if ((!$.browser.msie) || (parseInt($.browser.version, 10) >= 8)) {
		$(".mejs-chapters .mejs-chapter .mejs-chapter-block:hover").css("background","rgba(102,102,102, 0.7)");
		$(".mejs-chapters .mejs-chapter .mejs-chapter-block:hover").css("background","-webkit-gradient(linear, 0% 0%, 0% 100%, from(rgba(102,102,102,0.7)), to(rgba(50,50,50,0.6)))");
		$(".mejs-chapters .mejs-chapter .mejs-chapter-block:hover").css("background","-webkit-linear-gradient(top, rgba(102,102,102,0.7), rgba(50,50,50,0.6))");
		$(".mejs-chapters .mejs-chapter .mejs-chapter-block:hover").css("background","-moz-linear-gradient(top, rgba(102,102,102,0.7), rgba(50,50,50,0.6))");
		$(".mejs-chapters .mejs-chapter .mejs-chapter-block:hover").css("background","-o-linear-gradient(top, rgba(102,102,102,0.7), rgba(50,50,50,0.6))");
		$(".mejs-chapters .mejs-chapter .mejs-chapter-block:hover").css("background","-ms-linear-gradient(top, rgba(102,102,102,0.7), rgba(50,50,50,0.6))");
		$(".mejs-chapters .mejs-chapter .mejs-chapter-block:hover").css("background","linear-gradient(rgba(102,102,102,0.7), rgba(50,50,50,0.6))");
		$(".mejs-chapters .mejs-chapter .mejs-chapter-block:hover").css("filter","progid:DXImageTransform.Microsoft.Gradient(GradientType=0, startColorstr=#666666,endColorstr=#323232)");
	}
	
	$(".mejs-chapters .mejs-chapter .mejs-chapter-block .ch-title").css("text-overflow","ellipsis");
	$(".mejs-chapters .mejs-chapter .mejs-chapter-block .ch-timespan").css("text-overflow","ellipsis");

	$(".mejs-captions-text").css("background", "rgba(20, 20, 20, 0.8)");

	$(".mejs-contextmenu").css("border-radius", "4px");

	/* mejs-skins.css*/
	$(".mejs-ted .mejs-controls .mejs-currenttime-container ").css("border-radius", "3px");

	$(".mejs-ted .mejs-controls .mejs-duration-container").css("border-radius", "3px");

	$(".mejs-wmp .mejs-controls .mejs-time-rail .mejs-time-loaded").css("background-color", "rgba(255,255,255,0.3)");

	$(".mejs-wmp .mejs-controls .mejs-volume-button .mejs-volume-slider").css("background", "rgba(102,102,102,0.6)");
});
