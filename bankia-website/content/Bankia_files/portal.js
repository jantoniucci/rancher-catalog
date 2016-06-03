/**
 * Objeto que inicializa todo lo relativo al portal como la carga de utilidades,
 * imagenes adjuntas, enlaces externos, tooltip, etc.
 */
var portal = {

	/**
	 * Inicializa las funcionalidades de apariencia de portal
	 *
	 * @constructor
	 */
	inicializar: function(){
		
		if($("#portal-classic").length>0) {
			portal.cargarUtilidades();
			portal.activarBuscadorGeneral();
			portal.cargarTooltip();
			portal.cargarBookmark();
			portal.ampliarImagenes();
		}
		
		if($("#portal-responsive").length>0) {
			portal.cargarBookmarkResponsive();
			portal.ampliarImagenesResponsive();
		}
		
		portal.detectarNavegador();
		portal.ampliarInteractivos();
		portal.mostrarDatosDocumentos();
		portal.enlacesExternos();
		portal.mostrarOcultarLOPD();
		portal.cargarReproductorMedia();
		portal.cargarEmbed();
		portal.cargarCaptcha();
		portal.cargarOembed();
		portal.activarPaginacionIncremental();
		portal.lanzarErroresForm();
		portal.inicializarAutocomplete();
		
	},

	/**
	 * Verifica que es un dispositivo movil.
	 */
	esMovil: function() {
		  var check = false;
		  (function(a,b){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
		  return check;
	},
	
	/**
	 * Identifica el navegador y la version añadiendo una clase al tag html
	 */
	detectarNavegador: function(){
		var sClass = "";
		var version = $.browser.version.split(".");
		var userAgent = navigator.userAgent;
		
		if ($.browser.mozilla) {sClass = sClass +"mozilla moz";}
		if ($.browser.webkit) {sClass = sClass +"webkit webkit";}
		if ($.browser.msie) {sClass = sClass +"ie ie";}
		if ($.browser.opera) {sClass = sClass +"opera opera";}
		
		if(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(userAgent)) {
			if(userAgent.indexOf("Android") > 0){
				dispositivo = "android";
				 var androidversion = parseFloat(userAgent.slice(userAgent.indexOf("Android")+8));
				 if(androidversion < 4.0) sClass = sClass +"android-old"; 
			}
			if (userAgent.indexOf("webOS") > 0)		sClass = sClass +" webos";
		    if (userAgent.indexOf("iPhone") > 0)		sClass = sClass +" iphone";
		    if (userAgent.indexOf("iPad") > 0)			sClass = sClass +" ipad" ; 
		    if(userAgent.indexOf("iPod") > 0)				sClass = sClass +" ipod" ; 
		    if(userAgent.indexOf("BlackBerry") > 0)	sClass = sClass +" blackberry" ;	
		    sClass = sClass +" istouch ";
		}
		
		if (sClass != "") {
			$("html").addClass(sClass + version[0] );
		}
		
	},

	/**
	 * Carga de las utilidades de servicios generales que solo estan disponibles con Javascript activado
	 */
	cargarUtilidades: function(){
		//Generar enlace para volver a la pagina anterior
		$("#atajo ul li").last().not('#atajoVolver').before('<li id="atajoVolver"><a href="#volver">'+ texto.volver + '</a></li>\n');
		$("#atajoVolver a").click(function() { portal.volver(); return false; });
	},

	/**
	 * Activacion de las validaciones del buscador general 
	 *
	 * @return Devuelve si se puede lanzar el buscador general o no en funcion de los parametros de entrada 
	 */
	activarBuscadorGeneral: function() {
		if ($("#textobusqueda")) {
			this.textoBuscador = $("#textobusqueda").val();
			$("#textobusqueda").focus(function(){
				$(this).val("");
			});
		}
	},
	
	/**
	 * Accion para cargar el plugin de tooltips
	 */	
	cargarTooltip: function() {
		$("a[title][class=tooltip]").each(function(){
			if ($(this).attr("title") != '') {
				$(this).tooltip();
				$(this).removeAttr("title");
			}
		});
		$("img[alt][class=tooltip]").each(function(){
			if ($(this).attr("alt") != '') {
				$(this).tooltip();
				$(this).removeAttr("alt");
			}
		});
	},

	/**
	 * Modifica el class y el alt de la imagenes que tiene imagen adjunta, advirtiendo que la aplicacion se abrira en ventana nueva
	 * Modifica los eventos click y keypress de las imagenes con adjunto
	 */
	ampliarImagenes: function(){
		$("img.adjunto_si").each(function(){
			$(this).bind('click keypress', function (){portal.verImagen(this);});
			$(this).addClass("cursorAdjunto");  
			if (typeof texto.altPopupImagen != 'undefined') {
				if (($(this).attr('alt') != '') && ($(this).attr('alt').indexOf(texto.altPopupImagen) == -1)) {
					$(this).attr('alt', ($(this).attr('alt') + " " + texto.altPopupImagen));
				} else {
					$(this).attr('alt',texto.altPopupImagen);
				}
				$(this).attr("title", $(this).attr('alt'));
			}
		});	
	},

	/**
	 * Modifica el class y el alt de la imagenes que tiene imagen adjunta, advirtiendo que la aplicacion se abrira en ventana nueva
	 * Modifica los eventos click y keypress de las imagenes con adjunto
	 */
	ampliarImagenesResponsive: function(){
		$("img.adjunto_si").each(function(){
			var urlImagen = $(this).attr('src');
			var nombreImagen = urlImagen.substring(urlImagen.lastIndexOf("/") + 1, urlImagen.lastIndexOf("-mini-"));
			var extensionImagen = urlImagen.substring(urlImagen.lastIndexOf("."));
			var urlImagenAmpliada = urlImagen.substring(0, urlImagen.lastIndexOf("/") + 1) + nombreImagen + extensionImagen;
			$(this).wrap("<a class=\"adjunto_si\" href=\"" + urlImagenAmpliada + "\"></a>");

			if (typeof texto.altPopupImagen != 'undefined') {
				if (($(this).attr('alt') != '') && ($(this).attr('alt').indexOf(texto.altPopupImagen) == -1)) {
					$(this).attr('alt', ($(this).attr('alt') + " " + texto.altPopupImagen));
				} else {
					$(this).attr('alt',texto.altPopupImagen);
				}
				$(this).attr("title", $(this).attr('alt'));
			}		
		});		
		
		if($("a.adjunto_si").length > 0) {
			var options = {
				getImageCaption: function(el){
					var captionText;
					if (el.nodeName === "IMG"){
						captionText = el.getAttribute('alt'); 
					}
					var i, j, childEl;
					for (i=0, j=el.childNodes.length; i<j; i++){
						childEl = el.childNodes[i];
						if (el.childNodes[i].nodeName === 'IMG'){
							captionText = childEl.getAttribute('alt'); 
						}
					}
					captionText = captionText.replace(texto.altPopupImagen, "");
					return captionText;
				}
			};
			$("a.adjunto_si").photoSwipe(options);
		}
	},
	
	/**
	 * Abre un lightbox para mostrar el interactivo
	 */
	ampliarInteractivos: function(){
		if ($("#portal-classic").length > 0) {
			$('a.interactivo').colorbox({
				rel:'gal', 
				width: 'auto',  
				height: 'auto', 
				maxWidth: "95%", 
				maxHeight: "95%",
				opacity:'0.8'
			});
		}
	},
	
	/**
	 * Recorre todos los enlaces del documento (etiquetas <a> y <area> incluyendo un target="_blank" si rel="external" (<a>) o class="external" (<area>)
	 */
	enlacesExternos: function(){
		//Etiquetas <a>
		$("a[href][rel$='external'],a[class*='external'], .caja-cliente a.externo").each(function(){
			$(this).attr("target", "_blank");
			if (!$(this).hasClass("tooltip")) {
				if (!$("img",this).hasClass("tooltip")) {
					$(this).append('<span class="mensaje"> ' + texto.titleVentanaNueva + '</span>');
				}
			}
		});
		
		$("a[class$='externo']").each(function(){
			if($(this).find('img').size()!=0){
				$(this).addClass('externoimg');
			}
		});
		
		//Etiquetas <area>
		$("area[href][class$='external']").each(function(){
			$(this).attr("target", "_blank");
			$(this).append('<span class="mensaje"> ' + texto.titleVentanaNueva + '</span>');
		});
	},

	/**
	 * Imprimir pagina
	 */
	imprimir: function() {
		window.print();
	},

	/**
	 * Enlace a la pagina anterior
	 */
	volver: function() {
		history.go(-1);
	},

	/**
	 * Accion para ver imagen en popup
	 */
	verImagen: function(img) {
		if (typeof(imagen) != 'undefined') {
			imagen.ampliar(img);
		}
	},

	/**
	 * Accion para cargar el plugin de bookmarks para redes sociales
	 */
	cargarBookmark: function() {
		var userAgent = window.navigator.userAgent.toLowerCase();
		var sSites = '<ul>';
		sSites = sSites + '<li>';
		sSites = sSites + '<a id="facebook" class="statBoton" href="http://www.facebook.com/sharer.php?u={u}&amp;t={t}" target="_blank" title="Facebook">';
		sSites = sSites + '<img src="'+contextoPortal+'public/img/comun/bmkFacebook.png" alt="" />';
		sSites = sSites + '</a>';
		sSites = sSites + '</li>';
		sSites = sSites + '<li>';
		sSites = sSites + '<a id="twitter" class="statBoton" href="http://twitter.com/home?status={tt}%20{u}%20{v}" target="_blank" title="Twitter">';
		sSites = sSites + '<img src="'+contextoPortal+'public/img/comun/bmkTwitter.png" alt="" />';
		sSites = sSites + '</a>';
		sSites = sSites + '</li>';
		sSites = sSites + '<li>';
		sSites = sSites + '<a id="linkedin" class="statBoton" href="http://www.linkedin.com/shareArticle?mini=true&amp;url={u}&amp;title={t}&amp;ro=false&amp;source=" target="_blank" title="Linkedin">';
		sSites = sSites + '<img src="'+contextoPortal+'public/img/comun/bmkLinkedin.png" alt="" />';
		sSites = sSites + '</a>';
		sSites = sSites + '</li>';
		if (userAgent.indexOf('android') != -1 || portal.esMovil() ) {
			sSites = sSites + '<li>';
			sSites = sSites + '<a id="whatsapp" href="whatsapp://send?text={t} - {u}" data-text="{t}" data-href="{u}">';
			sSites = sSites + '<img src="' + contextoPortal + 'public/img/comun/bmkWhatsApp.png" alt="" />';
			sSites = sSites + '</a>';
			sSites = sSites + '</li>';
		}
		sSites = sSites + '</ul>';
		
		$("#atajo #bookmark").html(sSites).hide();
		
		$('.compartir img').css('cursor', 'pointer').addClass('visible');
		
		$('.compartir img').bind('click keypress', function(e){
			if ($(this).hasClass('visible')) {
				//--------------------------------------------------------------------------------------------
				if ($("#atajo #bookmark .statBoton").attr('href').indexOf('http://bit.ly')==-1){
					var urlCompartir = '';
					var u = location.href;
					var t = encodeURIComponent(document.title);
					var tt = encodeURIComponent($("meta[name='twitter:title']").attr("content"));
					var v = 'via @bankia';

					if (userAgent.indexOf('android') != -1 || portal.esMovil() ) {
						var urlWhatsapp = $("#whatsapp").attr("href");
						urlWhatsapp = urlWhatsapp.replace('{t}', t);
						urlWhatsapp = urlWhatsapp.replace('{u}', u);
						$("#whatsapp").attr("href", urlWhatsapp);
						$("#whatsapp").attr("data-text", t);
						$("#whatsapp").attr("data-text", u);
					}

					$.ajax({
						url: contextoPortal+codigoIdioma+'/cargarUrlAcortada.do?urlOriginal='+u,
						success: function(data) {
							$("#atajo #bookmark .statBoton").each(function(){
								urlCompartir = $(this).attr('href');
								urlCompartir = urlCompartir.replace('{t}',t);
								urlCompartir = urlCompartir.replace('{tt}',tt);
								urlCompartir = urlCompartir.replace('{v}',v);
								if(data.length!=0){
									urlCompartir = urlCompartir.replace('{u}',data);
								}else{
									urlCompartir = urlCompartir.replace('{u}',u);
								}
								$(this).attr('href',urlCompartir);
							});
						},
						error: function(){
							$("#atajo #bookmark .statBoton").each(function(){
								urlCompartir = $(this).attr('href');
								urlCompartir = urlCompartir.replace('{t}',t);
								urlCompartir = urlCompartir.replace('{u}',u);
								urlCompartir = urlCompartir.replace('{v}',v);
								$(this).attr('href',urlCompartir);
							});
						}
					});
				}
				//------------------------------------------------------------------------------------------------
				$('.compartir #bookmark').fadeIn("slow", "linear");
				$(this).removeClass('visible');
			} else {
				$('.compartir #bookmark').fadeOut("slow", "linear");
				$(this).addClass('visible');
			}
		});
	},
	
	/**
	 * Accion para cargar el plugin de bookmarks para redes sociales en la vista responsive
	 */
	cargarBookmarkResponsive: function() {
		var userAgent = window.navigator.userAgent.toLowerCase();
		var sSites = '<ul>';
		sSites = sSites + '<li>';
		sSites = sSites + '<a id="facebook" class="statBoton" href="http://www.facebook.com/sharer.php?u={u}&amp;t={t}" target="_blank" title="Facebook">';
		sSites = sSites + '<img src="'+contextoPortal+'public/img/responsive/comun/bmkFacebook.gif" alt="" />';
		sSites = sSites + '</a>';
		sSites = sSites + '</li>';
		sSites = sSites + '<li>';
		sSites = sSites + '<a id="twitter" class="statBoton" href="http://twitter.com/home?status={t}%20{u}%20{v}" target="_blank" title="Twitter">';
		sSites = sSites + '<img src="'+contextoPortal+'public/img/responsive/comun/bmkTwitter.gif" alt="" />';
		sSites = sSites + '</a>';
		sSites = sSites + '</li>';
		sSites = sSites + '<li>';
		sSites = sSites + '<a id="linkedin" class="statBoton" href="http://www.linkedin.com/shareArticle?mini=true&amp;url={u}&amp;title={t}&amp;ro=false&amp;source=" target="_blank" title="Linkedin">';
		sSites = sSites + '<img src="'+contextoPortal+'public/img/responsive/comun/bmkLinkedin.gif" alt="" />';
		sSites = sSites + '</a>';
		sSites = sSites + '</li>';
		if (userAgent.indexOf('android') != -1 || portal.esMovil() ) {
			sSites = sSites + '<li>';
			sSites = sSites + '<a id="whatsapp" href="whatsapp://send?text={t} - {u}" data-text="{t}" data-href="{u}">';
			sSites = sSites + '<img src="' + contextoPortal + 'public/img/responsive/comun/bmkWhatsApp.png" alt="" />';
			sSites = sSites + '</a>';
			sSites = sSites + '</li>';
		}
		sSites = sSites + '</ul>';
		
		$("#bookmark").html(sSites).hide();
		
		$('#btn-ico-share').addClass('inactive');
		
		$('#btn-ico-share').bind('tapone', function(e){						
			if ($(this).hasClass('inactive')) {
				$('#bookmark').fadeIn("fast");
				$(this).removeClass('inactive');
				$(this).addClass('active');
				//--------------------------------------------------------------------------------------------
				if ($("#bookmark .statBoton").attr('href').indexOf('http://bit.ly')==-1){
					var urlCompartir = '';
					var u = location.href;
					var t = encodeURIComponent(document.title);
					var v = 'via @bankia';

					if (userAgent.indexOf('android') != -1 || portal.esMovil() ) {
						var urlWhatsapp = $("#whatsapp").attr("href");
						urlWhatsapp = urlWhatsapp.replace('{t}', t);
						urlWhatsapp = urlWhatsapp.replace('{u}', u);
						$("#whatsapp").attr("href", urlWhatsapp);
						$("#whatsapp").attr("data-text", t);
						$("#whatsapp").attr("data-text", u);
					}

					$.ajax({
						url: contextoPortal+'cargarUrlAcortada.do?urlOriginal='+u,
						success: function(data) {
							$("#bookmark .statBoton").each(function(){
								urlCompartir = $(this).attr('href');
								urlCompartir = urlCompartir.replace('{t}',t);
								urlCompartir = urlCompartir.replace('{v}',v);
								if(data.length!=0){
									urlCompartir = urlCompartir.replace('{u}',data);
								}else{
									urlCompartir = urlCompartir.replace('{u}',u);
								}
								$(this).attr('href',urlCompartir);
							});
						},
						error: function(){
							$("#bookmark .statBoton").each(function(){
								urlCompartir = $(this).attr('href');
								urlCompartir = urlCompartir.replace('{t}',t);
								urlCompartir = urlCompartir.replace('{u}',u);
								urlCompartir = urlCompartir.replace('{v}',v);
								$(this).attr('href',urlCompartir);
							});
						}
					});
				}
				
				if ($('#btn-ico-share').hasClass('active')) {
					$('#main-page').bind('tapone', function(e){			
						$('#btn-ico-share').removeClass('active');
						$('#btn-ico-share').addClass('inactive');
						$('#bookmark').fadeOut("fast");
					});
				}
				
				//------------------------------------------------------------------------------------------------
			} else {
				$(this).removeClass('active');
				$(this).addClass('inactive');
				$('#bookmark').fadeOut("fast");				
			}
			
		});		
	},
	
	/**
	 * Accion para mostrar/ocultar la capa de informacion de la LOPD
	 */
	mostrarOcultarLOPD: function() {
		$("#LOPD").hide();
		$("#enlaceLOPD").click(function() {
			if(!$("#LOPD").is(":visible")){
				$("#LOPD").slideToggle();
				$('html, body').animate({
					scrollTop: $('#LOPD').offset().top
				}, 500);
			}
			return false;
		});
	},

	/**
	 * Carga el reproductor multimedia
	 */
	cargarReproductorMedia: function() {
		if(typeof jwplayer=="function") {
			$(".reproductorMedia.jwplayer").each(function() {
				var id = $(this).attr("id");
				if ((id != null) && (id != '')) {
					var opciones = eval(id);
					var plugins = {'gapro-2': {}};
					if ((opciones.captions != null) && (opciones.captions != "")) {
						var captions = {'captions-2': {
							'back': false,
							'file': opciones.captions
						}};
						plugins = $.extend(plugins, captions);
					}
					var defaults = {'modes': [ 
					                          {type: "html5"}, 
					                          {type: "flash", src: contextoPortal + "/public/media/jwplayer/player.swf" }, 
					                          {type: "download"}
					                         ],
									'plugins': plugins};
					var settings = $.extend(defaults, opciones);
					jwplayer("reproductor_" + id).setup(settings);
				}
			});
		}
		if ($.fn.mediaelementplayer) {
			$(".reproductorMedia.mediaelement").each(function() {
				var id = $(this).attr("id");
				if ((id != null) && (id != '')) {
					var opciones = eval(id);
					var defaults = {
						audioVolume: 'vertical',
						videoVolume: 'vertical',
						playpauseText: texto.reproductorReproducir,
						muteText: texto.reproductorSilenciar,
						fullscreenText: texto.reproductorPantallaCompleta,
						iPadUseNativeControls: false,
						iPhoneUseNativeControls: false, 
						AndroidUseNativeControls: false,
						alwaysShowHours: false,
						autosizeProgress : false,
						audioWidth: $(this).width()
					};
					var settings = $.extend(defaults, opciones);
					$("#reproductor_" + id).mediaelementplayer(settings);
				}
			});
		}
	},

	/**
	 * Carga los objetos embed creados desde el editor
	 */
	cargarEmbed: function() {
		$(".objetoEmbed").each (function() {
			var id = $(this).attr("id");
			if ((id != null) && (id != '')) {
				var embed = unescape(eval(id));
				$(this).html(embed);
			}
		});
	},

	/**
	 * Inicializa el captcha para que al hacer click sobre la imagen genere un nuevo valor
	 */
	cargarCaptcha: function() {
		var contextoPortalAux = contextoPortal;
		if(contextoPortal=="/"){contextoPortalAux="";}
		$('#imagenCaptcha').click(function () { $(this).attr('src', contextoPortalAux + "/public/img/captcha.jpg?" + Math.floor(Math.random()*100) ); });
		//$('.grupocaptcha img').append('<span class="descripcion">' + texto.nuevoCaptcha + '</span>');
		$('<span class="descripcion">' + texto.nuevoCaptcha + '</span>').insertAfter('#imagenCaptcha');
	},
	
	mostrarDatosDocumentos: function(){
		var title = '';
		$('a.documento').each(function(){
			if($(this).find('img').size()==0){
				title = $(this).attr('title');
				if(title){
					$(this).attr('title',"");
					if(title!=''){
						$(this).text($(this).text() +' '+title);
					}
				}				
				$(this).addClass($(this).attr('href').substring(1 + $(this).attr('href').lastIndexOf(".")));
			}else{
				$(this).addClass('docimg');
			}
		});
	},
	
	/*
	 * Pide los datos de la paginacion incremental
	 */
	mostrarMasResultados: function(enlace){
		$.ajax({
			  url: $(enlace).attr('href'),
			  success: function(data) {
				 var ultimoIndex = $('.bloquelistado li').size()-1;
				 var ultimo = $(".bloquelistado li:eq("+ultimoIndex+")");
				 $('.bloquelistado').append($(data).find('.bloquelistado>li').hide().fadeIn(1000,function(){equalHeight($('.bloquelistado li:gt('+ultimoIndex+')'));}));
				 $('.bloquelistado li').css('display', 'inline-block');
				 $('.paginc>*').replaceWith($(data).find('.paginc>*'));
				 $('html#portal-responsive, html#portal-responsive body').animate({
				       scrollTop: ultimo.offset().top + 170
				 }, 500);
				 portal.activarPaginacionIncremental();
				 estadisticas.inicializar();
			  }
		});
		
	},
	
	/*
	 * Paginacion tipo noticias
	 */
	activarPaginacionIncremental: function(){
		if($(".paginc a.incremental")){
			$(".paginc a.incremental").click(function(event) {
				event.preventDefault();
				portal.mostrarMasResultados($(this));
			});
		}
	},
	
	/**
	 * Activa la paginacion
	 */
	activarPaginacion: function(){
		if ($(".paginacion")) {
			$("#numElementos div.jqTransformSelectWrapper ul li a").click(function(){   
				$('#formResultados').submit();
			    return false;
			});
			$("#etiquetatexto").focus(function(){
				$(this).val("");
			});
			
		}			
	}, 
	
	lanzarErroresForm: function(){
		if($('#errorvalidacion').size()>0){
			$('.errorlista .campoerror').each(function(){
				var ident = $(this).attr('for');
				$('#'+ident).parents('p').addClass('campoerror');
			});
		}
	},
	
	/**
	 * Inicializa los enlaces con urls oembed
	 */
	cargarOembed: function() {
		$('.oembed').oembed(null, {includeHandle: false, flickr : {maxWidth : 800, maxHeight :600},
			afterEmbed:function(){
               if($.colorbox){
					var ancho = null;
	                var alto = null;
					if($('#oembedElement').size()!=0){
						ancho = parseInt($('#oembedElement').attr('width'))+14;
						alto = $('#oembedElement').attr('height');
	        		}
					if(ancho!=null && alto!=null){
						$.colorbox.resize({innerWidth:ancho,innerHeight:alto});
					}else{
						$.colorbox.resize();
					}
               }
			}
		});
		
		$('.oembed').hide();
	},
	
	/**
	 * Inicializar los campos de formulario para desactivar el autocomplete
	 */
	inicializarAutocomplete: function() {
		// Campos de tipo texto en "form_tipo0"
		$(".form_tipo0 input[type=text]").each(function() {
			$(this).attr("autocomplete","off");
		});
		
		// Cualquier campo de tipo password en cualquier formulario
		$("input[type='password']").each(function() {
			$(this).attr("autocomplete","off");
			$(this).val("");
		});

	}
};