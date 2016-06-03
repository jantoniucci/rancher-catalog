/**
 * Objeto imagen
 */
var imagen = {
	//Array de imagenes ya cargadas
	cargadas: [],
	//Contorno de la imagen, en principio es de valor fijo
	contorno: 100,
	
	/**
	 * Muestra la imagen ampliada asociada a la imagen sobre la que se hace clic
	 *
	 * @param img La imagen sobre la que se hace clic
	 */
	ampliar: function(img) {
		if ($.fn.colorbox) {
			imagen.ampliarColorbox(img);
		} else {
			imagen.ampliarCapa(img);
		}
	},
	
	/**
	 * Muestra la imagen ampliada asociada a la imagen sobre la que se hace clic utilizando una capa propia
	 *
	 * @param img La imagen sobre la que se hace clic
	 */
	ampliarCapa: function(img) {
		var idImagen = img.id.split("_")[1];
		var altImagen = util.unicodeEscape(img.alt);
		if ($('body #adjunto')){
			$('body #adjunto').remove();
		}
		$('body').append("<div id='adjunto'></div>");
		$('body #adjunto').append("<div id='precarga'></div>");
		$('body #adjunto #precarga').center();
		$.post(contextoPortal + codigoIdioma + "/cargarImagenAdjunta.do",
			{ identificador: idImagen , descripcion: altImagen },
				function(xml){
					$('body #adjunto').css({ position: "absolute", left: "0", top: "0", visibility: "hidden" });
					$('body #adjunto').append(xml);
					if (jQuery.inArray($('#imagenAdjunta').attr("src"), imagen.cargadas) > -1) {
							$('body #precarga').remove();
							$('body #adjunto').width($('#imagenAdjunta').width() + imagen.contorno);
							$('body #adjunto').center();
							$('body #adjunto').css({ visibility: "visible" });
					} else {
						$('#imagenAdjunta').load(function() {
							imagen.cargadas.push($('#imagenAdjunta').attr("src"));
							$('body #precarga').remove();
							$('body #adjunto').width($('#imagenAdjunta').width() + imagen.contorno);
							$('body #a_ampliarImagen').width($('#imagenAdjunta').width());
							$('body #adjunto').center();
							$('body #adjunto').css({ visibility: "visible" });
						});
					}		
					var descripcion = unescape($('body #adjunto p.piefoto').text());
					if (typeof texto.altPopupImagen != 'undefined') {
						descripcion = descripcion.replace(texto.altPopupImagen, "");
					}
					
					$('#imagenAdjunta').attr("alt",descripcion);
					
					//para que no recargue la pagina al cerrar
					$('body #adjunto a').removeAttr("href"); 
					$('body #adjunto a').css({ cursor: "pointer" }); 
					$('body #adjunto p.piefoto').text(descripcion);
					
					$('body #adjunto').click(function() {
						imagen.reducir();
					});
				}
		);
	},
	
	/**
	 * Muestra la imagen ampliada asociada a la imagen sobre la que se hace clic utilizando Colorbox
	 *
	 * @param img La imagen sobre la que se hace clic
	 */
	ampliarColorbox: function(img) {
		var urlImagen = img.src;
		var altImagen = img.alt;
		if (typeof texto.altPopupImagen != 'undefined') {
			altImagen = altImagen.replace(texto.altPopupImagen, "");
		}
		var nombreImagen = urlImagen.substring(urlImagen.lastIndexOf("/") + 1, urlImagen.lastIndexOf("-mini-"));
		var extensionImagen = urlImagen.substring(urlImagen.lastIndexOf("."));
		var urlImagenAmpliada = urlImagen.substring(0, urlImagen.lastIndexOf("/") + 1) + nombreImagen + extensionImagen;
		$.fn.colorbox({
			href: urlImagenAmpliada, 
			title: altImagen, 
			opacity: "0.8",
			width: 'auto', 
			height: 'auto',
			maxWidth: "95%", 
			maxHeight: "95%",
			rel: "editor", 
			current: "{current} / {total}",
			onComplete:function(){
				$.colorbox.resize();
			}
		});
	},
	
	/**
	 * Oculta la capa de la imagen ampliada
	 */
	reducir: function() {
		$('body #adjunto').remove();
	}
};
