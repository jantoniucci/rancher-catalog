$(document).ready(function() {
	
	if($('.modulohome #a_destacados').length > 0){
		$('<div class="cover"></div>').insertAfter('#a_destacados .flexslider');
	}
	
	/** se vuelve a llamar cada vez q cambia el tamaño de la ventana **/
	$(window).smartresize(function(){		
		activarCarrusel();
	});
		
});

function activarCarrusel() {
	
	var options = {};
	
	if($("#portal-responsive").length > 0){		
		options = {
			animation: "slide",  
			slideshow: false,
			directionNav: false,
			controlNav: true,
			animationLoop: true,
			reverse: false,
			pauseText: '', 
			playText: '',
			slideshowSpeed: 5000,
			animationSpeed: 2000,
			touch: true,
			video: true
		};		
	}else{
		options = {
			animation: "fade",  
			slideshow: true,
			directionNav: true,
			controlNav: true,
			animationLoop: true,
			reverse: false,
			pauseText: '', 
			playText: '',
			slideshowSpeed: 5000,
			animationSpeed: 2000,
			touch: true,
			video: true
		};
	}
	
	var anchoTotal = (window.innerWidth || document.documentElement.clientWidth ||	document.body.clientWidth);
	var altoTotal = (window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight);
	var ancho = Math.round(anchoTotal * 0.80);
	var alto = Math.round(altoTotal * 0.80);

	$('#a_destacados li.interactivo').each(function(){
		var enlace = $(this).find('a').attr('href');
		if ($("#portal-classic").length > 0) {
			enlace += "&ancho=" + ancho;
			enlace += "&alto=" + alto;
		} else if ($("#portal-responsive").length > 0) {
			enlace += "&ancho=" + anchoTotal + "&alto=" + altoTotal + "&redimensionar=0";
		}
		$(this).hover(function () {
			// Vista clasica: Abre en colorbox
			if ($("#portal-classic").length > 0) {
				$(this).find('img').before('<span class="rollover"><a href="'+enlace+'"></a></span>');
				$(this).find('.rollover a').colorbox({
					opacity:'0.8',
					width: 'auto', 
					height: 'auto',	
					maxWidth: "95%", 
					maxHeight: "95%"
				});
			} else if ($("#portal-responsive").length > 0) {
				// Vista responsive: Abre en ventana nueva a pantalla completa
				$(this).find('img').before('<span class="rollover"><a class="external" target="_blank" href="'+enlace+'"><span class="mensaje"> ' + texto.titleVentanaNueva + '</span></a></span>');
			}
			$('#situacion').css('opacity', '.3');
		},function(){
			$('.rollover').remove();
			$('#situacion').css('opacity', '1');
		});
		
	});
	
	if($.browser.version!="6.0"){
		
		if($(".flex-viewport").length > 0) {
			$('.carrusel .flexslider').css({"opacity": "0"});
			$('.carrusel .flexslider').flexslider("destroy");
			$('.carrusel .flexslider').flexslider(options);
			$('.carrusel .flexslider').css({"opacity": "1"});
		}else{
			$('.carrusel .flexslider').flexslider(options);
		}
		
	}
	
}