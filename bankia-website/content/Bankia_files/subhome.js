$(document).ready(function() {
	$('a.abrecolorbox').colorbox({
		rel:'nofollow', 
		opacity:'0.8',
		width: 'auto', 
		height: 'auto',	
		maxWidth: "95%", 
		maxHeight: "95%"
	});
	
	if($("#portal-responsive").length>0) {
		//Interactivos vista responsive: Abren en ventana nueva a pantalla completa
		var anchoTotal = (window.innerWidth || document.documentElement.clientWidth ||	document.body.clientWidth);
		var altoTotal = (window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight);
		$(".interactivoHome").each(function(){
			var enlace =  $(this).attr('href');
			enlace += "&ancho=" + anchoTotal + "&alto=" + altoTotal + "&redimensionar=0";
			$(this).attr('href', enlace);
		});
	}

	if ($("#portal-classic").length > 0) {
		var altoImg = $('.interactivoHome img').height();
		$('.interactivoHome').hover(function () {
			$(this).find('img').before('<span class="rolloverplay"><span></span></span>');
			$('.rolloverplay').height(altoImg);
		},function(){
			$('.rolloverplay').remove();
		});
	}
	window.setTimeout( actualizarAlturaTwitter, 50);
	
});



function actualizarAlturaTwitter() {
	var twitter = $("#a_timelinepressbankia iframe");
	
	if(twitter.length > 0) {

		var group = null;
		if($(".caja4col").length > 0) {
			group = $(".caja4col .item");
		} else if($(".caja3col").length > 0) {
			group = $(".caja3col .item");
		}

		//calcula el mas alto.
		tallest = 0;
		if(group != null) {
			if ($(window).width() > 480) {
				apariencia.equalHeight(group);
			}
			group.each(function() {
				thisHeight = $(this).height();
				if(thisHeight > tallest) {
					tallest = thisHeight;
				}
			});
			$("<style type='text/css'> .twitterHeight{height: " + tallest + "px !important;} </style>").appendTo("head");
		}
		
		twitter.addClass("twitterHeight");
		if(tallest > 0) {
			$("#a_timelinepressbankia").css("height",$(".caja4col .item").css("height"));
		}
	} else {
		window.setTimeout( actualizarAlturaTwitter, 50);
	}
}