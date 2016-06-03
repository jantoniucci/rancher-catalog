var apariencia = {

		/**
		 * Inicializa las funcionalidades de apariencia
		 */
		inicializar: function() {

			if($("#portal-classic").length>0) {
				apariencia.mostrarIdiomas();
				apariencia.mostrarMegamenu();
				apariencia.mostrarBuscador();
				apariencia.hoverIconosPie();
				apariencia.activarAnimacionDestacados();
				apariencia.gobiernoMap();
			}

			if($("#portal-responsive").length>0) {
				apariencia.mostrarBuscadorResponsive();
				apariencia.igualarAlto();
			}

			apariencia.activarPestanas();
			apariencia.desplegable();
			apariencia.focoInputError();
			apariencia.aparienciaForm();
			portal.activarPaginacion();
			apariencia.hoverImgDocs();
			apariencia.activarFiltro();
			apariencia.formacionDualMapa();
			apariencia.formacionDualCategorias();
			apariencia.formacionDualGaleria();
			apariencia.mostraricono();
			apariencia.gobiernoMap();
			apariencia.accesosHome();
			apariencia.igualarAltoWidget();

			/** se vuelve a llamar cada vez q cambia el tamaño de la ventana **/
			$(window).smartresize(function(){
				setTimeout(function() {
					apariencia.equalHeight();
					apariencia.igualarAlto();
					apariencia.twitterTimeLines();
				}, 500);
				apariencia.redimesionarCapa();

				if($("#portal-classic").length>0) {
					apariencia.gobiernoMap();
				}
			});

		},

		/**
		 * Activa la apariencia de los formularios
		 */
		aparienciaForm: function(){
			$("form.jqtransform").jqTransform();
		},

		/**
		 * Carga menu desplegable en la navegacion de primer nivel
		 */
		mostrarMegamenu: function(){

			$("ul#n1 li").not('.ultimo').each(function(){
				$("ul#sub_" + $(this).attr("id")).clone().appendTo("#" + $(this).attr("id"));
			});

			$("#n1").hover(function(){
				$(this).find('>li>a').hover(function(){
					$('#n1>li').removeClass('menu-on');
					$(this).parent().addClass('menu-on').find('ul');
				});
			}, function(){
				$('#n1>li').removeClass('menu-on');
			});

			$("#n1>li>ul").hover(function(){
				$(this).find('>li>a').hover(function(){
					$('#n1>li>ul>li').removeClass('submenu-on');
					$(this).parent().addClass('submenu-on').find('ul');
				});
			}, function(){
				$('#n1>li>ul>li').removeClass('submenu-on');
			});

		},

	    /**
		 * Cambia la apariencia de los idiomas de la cabecera
		 */
		mostrarIdiomas: function(){
			$("#idioma ul li strong").hide();
			$('#idioma span').css("cursor", "pointer");
			$("#idioma span").click(function () {
			    $("#idioma").toggleClass("idiomaon");
	            $("#idioma ul").toggleClass('hide-with-script');
			});
		},

		accesosHome: function(){

			if($(".accesos-home").length > 0){
				if($("#portal-responsive").length > 0){
					$('.owl-carousel').owlCarousel({
						navigation: false,
						items : 4,
						itemsTablet: [768,4]
					});
				} else {
					$('.owl-carousel').owlCarousel({
						navigation: true,
						pagination: false,
						items : 4
					});
				}
			}
				/*if($("#portal-responsive").length > 0){

					if($(window).width() <= 500){
						options = {
							animation: "slide",
							animationLoop: false,
							directionNav: false,
							slideshow: false,
							itemWidth: 230,
							minItems: 2,
							move: 1
						};
					} else {

						options = {
							animation: "slide",
							animationLoop: false,
							directionNav: false,
							slideshow: false,
							itemWidth: 230,
							minItems: 4,
							move: 1
						};

					}
				}else{
					options = {
						animation: "slide",
						animationLoop: false,
						controlNav: false,
						slideshow: false,
						itemWidth: 230,
						minItems: 4,
						move: 1
					};
				}

				$('.accesos-home .flexslider').flexslider(options);
			}*/
		},

		/**
		 * Muestra / oculta los buscadores de las noticias, agenda y hechos relevantes
		 */
		mostrarBuscador: function(){
			//$('.form_tipo2 h2 img').css("cursor", "pointer");
			 $(".form_tipo2 h2 a").bind('click keypress', function(event) {
				 	event.preventDefault();
		        	var code = event.charCode || event.keyCode;
	                if (!code || (code && (code == 39 || code == 37))) {
	                	if ($(this).find('img').hasClass('plegar')) {
	    					$(this).find('img').attr('src',contextoPortal +'public/img/comun/icoPlegado.png');
	    					$(".form_tipo2 form.hide-with-script").slideToggle("slow");
	    			    	$(this).find('img').removeClass('plegar');
	    				} else {
	    					$(this).find('img').attr('src',contextoPortal +'public/img/comun/icoDesplegado.png');
	    					$(".form_tipo2 form.hide-with-script").slideToggle("slow");
	    					$(this).find('img').addClass('plegar');
	    				}
	                }

			 });
		},

		/**
		 * Muestra / oculta los buscadores de las noticias, agenda y hechos relevantes en la vista responsive
		 */
		mostrarBuscadorResponsive: function(){
			var lupa = $('#btn-ico-lupa');
			lupa.insertAfter("#main-header h1");

			lupa.show().bind('tapone', function(){
				if ($(this).hasClass('active')) {
					$(this).removeClass('active');
					setTimeout('mobile.bloquearContenido(1)',500);
					$('.form_tipo2 form').slideUp(200, 'jswing', function(){
						setTimeout('mobile.bloquearContenido(0)',1000);
					});
				}else{
					$(this).addClass('active');
					setTimeout('mobile.bloquearContenido(1)',500);
					$('.form_tipo2 form').slideDown(200, 'jswing', function(){
						setTimeout('mobile.bloquearContenido(0)',1000);
						$('html, body').animate({
							scrollTop: $(this).offset().top - 63  /* menos lo q mide la cabecera */
						}, 500);
					});
				}
			});
		},

		activarPestanas: function(){
			var $pestanas = $(".pestanas.tipo2");
			if($pestanas.length > 0) {
				$pestanas.find("ul.tipo2 li a").each(function() {
					var href = $(this)[0].href;
					if (href != null) {
						var ancla = href.split("#")[1];
						if (ancla != null) {
							$("a[name="+ ancla +"]").parent().attr("id", ancla);
							$("a[name="+ ancla +"]").attr("name", ancla + "_anchor");
						}
					}
				});
				$pestanas.tabs({
					show: function( event, ui ) {
						apariencia.equalHeight();
						apariencia.mostraricono();
					}
				});
			}
		},

		hoverIconosPie: function(){
			$('#footer .seccion3 img').each(function(){
				if($(this).length!=0){
					$(this).hover(function() {
						// mouseover
						$(this).css('top', '-3px');
						},
						function() {
							// mouseout
							$(this).css('top', '0');
						}
					);
				}
			});
		},

		desplegable: function(){
			$(".desplegable .tit h3,.desplegable .tit h2").wrapInner('<a href="#"/>');
			$(".desplegable .tit").css('cursor', 'pointer');
			$(".desplegable .tit,.desplegable .tit a").bind('click keypress', function(event) {
			 	event.preventDefault();
	        	var code = event.charCode || event.keyCode;
                if (!code || (code && (code == 39 || code == 37))) {
					var esto = $(this);
                	if(!$(this).hasClass('tit')){
                		var esto = $(this).parents('.tit');
					}
                	if($(esto).hasClass('activo')) {
		        		$(esto).removeClass('activo');
		        	}
					else {
		        		//ocultar los bloquesactivos anteriores
		        		$('.desplegable .activo').next('div').hide();
		        		$('.desplegable .activo').removeClass('activo');
		        		$(esto).addClass('activo');
		        	}
                	$(esto).next('div').stop().slideToggle(function(){
 		        	   $('html, body').animate({
 							scrollTop: $(esto).offset().top - 70
 						}, 700);
 		           });
		          return false;
                }
			});
		},

		focoInputError: function(){
			$("#errorvalidacion li a").click(function () {
				var identificador = $(this).attr('href');
				$(identificador).focus();
			});
		},


		/**
		 * Igual el alto de capas
		 */
		equalHeight: function() {
			var target1 = $(".caja4col .item");
			var target2 = $(".caja3col .item");
			var target3 = $(".album ul li strong");
			var target4 = $("#a_noticia .itemlistado");

			target1.removeAttr("style");
			target2.removeAttr("style");
			target3.removeAttr("style");
			target4.removeAttr("style");

			if($(window).width()>480){
				equalHeight(target1);
				equalHeight(target2);
				equalHeight(target3);
				equalHeight(target4);
			}
		},

		/**
		 * Rollover sobre destacados de la home/subhomes
		 */
		activarAnimacionDestacados: function() {
			$('.destacado p strong').css("cursor", "pointer");
			$('.destacado .infodestacado div.hide-with-script').addClass('conscript');
			$('.destacado').hover(function () {
				$(this).find('.hide-with-script').show();
			},function(){
				$(this).find('.hide-with-script').hide();
			});
		},

		hoverImgDocs: function(){
			$('a.documento2, a.documento').each(function(){
				if($(this).find('img').size()!=0){
					var src = $(this).find('img').attr('src');
					var cortaruta = src.split('.gif');
					if(src.indexOf('archivo.gif')!=-1
							|| src.indexOf('audio.gif')!=-1
							|| src.indexOf('doc.gif')!=-1
							|| src.indexOf('ppt.gif')!=-1
							|| src.indexOf('txt.gif')!=-1
							|| src.indexOf('xls.gif')!=-1
							|| src.indexOf('pdf.gif')!=-1){
						$(this).hover(function() {
							// mouseover
							$(this).find('img').attr('src', cortaruta[0] + 'On.gif');
							},
							function() {
								// mouseout
								$(this).find('img').attr('src', cortaruta[0] + '.gif');
							}
						);
					}
				}
			});
		},

		activarFiltro: function(){
			$('.filtro p').css("cursor", "pointer");
			$(".filtro").bind( "mouseenter mouseleave", function () {
				$(this).find('ul').stop(true, false).slideToggle('slow');
			});

		},

		redimesionarCapa: function(){
			$('.destacado img').each(function(){
				$(this).parents('.destacado').find('.infodestacado div.hide-with-script').css('height',$(this).height());
			});
		},

		formacionDualMapa: function(){

			var namemap = $('.mapafd map').attr('id');
			$('.mapafd map').attr('name', namemap);

			$(".mapafd .enlaces-ancla area, .categoriasfd .item a").each(function() {
				var href = $(this)[0].href;
				if (href != null) {
					var ancla = href.split("#")[1];
					if (ancla != null) {
						$("a[id="+ ancla +"]").parent().attr("id", ancla);
						$("a[id="+ ancla +"]").attr("id", ancla + "_anchor");
					}
				}
			});
			$(".mapafd .enlaces-ancla area").click(function(event){
				event.preventDefault();
				var identificador = $(this).attr('href');
				$(identificador).show();
				var altoVentana = $('html').height();
				$('<span class="opacidadfd" />').css('height', altoVentana).appendTo('body');
			});
			$('.infofd .cerrar-info').css('cursor', 'pointer').click(function(){
				$(this).parent().hide();
				$('.opacidadfd').remove();
			});

			$('img[usemap]').rwdImageMaps();

		},

		formacionDualCategorias: function(){
			$('.categoriasfd .item a').click(function(event){

				if($(window).width() > 650){
					event.preventDefault();
				}

				var identificador = $(this).attr('href');

				if($(identificador).hasClass('activo')) {
					$(identificador).removeClass('activo');
				}
				else {
					//ocultar los bloquesactivos anteriores
					$('.enlace-on').removeClass('enlace-on');
					$('.catfd').hide();
					$(this).parents('.item').addClass('enlace-on');
					$('.activo').removeClass('activo');
					$(identificador).addClass('activo');
				}
				$(identificador).show();
				return false;

			});
		},

		/**
		 * Cargar galer�a de im�genes
		 */
		formacionDualGaleria: function(){
			$('.galeriafd li, .galeriafd .galsup .imgfd').hover(function(){
				$(this).find('.infoimg').show();
			}, function(){
				$('.infoimg').hide();
			});

			$('.infoimg .ampliar a').colorbox({rel:'gal'});
		},

		/**
		 * mediatecaCategorias
		 */
		mostraricono: function(){
			var altura = $('.album > li img').height();
			$('.enlace').css('height' , altura);

			$('ul.album > li').hover(function(){
				$(this).find('.enlace').show();
			}, function(){
				$('.enlace').hide();
			});


		},

		/**
		 * mapeo imagen gobiernoCorporativo
		 */
		gobiernoMap: function(){
			$(".mapagobierno area").each(function() {
				var href = $(this)[0].href;
				if (href != null) {
					var ancla = href.split("#")[1];
					if (ancla != null) {
						$("a[id="+ ancla +"]").parent().attr("id", ancla);
						$("a[id="+ ancla +"]").attr("id", ancla);
					}
				}

				var index = $(this).index();
				if(index > 8){
					$(this).addClass('mayor8');
				}

			});

			$('.mapagobierno area').bind({
				mouseenter: function() {
					var identificador = $(this).attr('href');

					var coordenadas = $(this).attr('coords').split(',');
					var top = coordenadas[1];
					var left = coordenadas[0];
					var right = left

					top = parseInt(top) + 120;
					right = parseInt(left) - 240;

					if($(this).hasClass('mayor8')){
						$(identificador).show().addClass('mayor8');
						$(identificador).css({'top': top + 'px', 'left': right + 'px'});
					}else{
						$(identificador).show();
						$(identificador).css({'top': top + 'px', 'left': left + 'px'});
					}
				},
				mouseleave: function(){
					$('.infoPersonas').hide();
				},
				click: function(event) {
					var identificador = $(this).attr('href');
					event.preventDefault();

					var tit = $(identificador+'b').find('.tit');

					if($(tit).hasClass('activo')) {
		        		$(tit).removeClass('activo');
		        	}
					else {
		        		//ocultar los bloquesactivos anteriores
		        		$('.desplegable .activo').next('div').hide();
		        		$('.desplegable .activo').removeClass('activo');
		        		$(tit).addClass('activo');
		        	}
					$(tit).next('div').slideDown('slow', function(){
						 $('html, body').animate({
 							scrollTop: $(tit).offset().top - 70
 						}, 700);
					});

				}
			});

			$('.titulo .cerrar').css('cursor', 'pointer').bind('click', function(){
				$('.infoPersonas').hide();
			});

		},

		/**
		 * Igual el alto de capas
		 */
		igualarAlto: function() {
			equalHeightLine($("#a_dossier .listado_tipo1 .itemlistado"));
		},

			/*
		 * Se llama para readaptarse cada ver
		 * */
		twitterTimeLines: function() {

			var twitter = $("#a_timelinepressbankia a.twitter-timeline");

			if(twitter.length > 0) {

				if($(".caja4col").length > 0) {
					group = $(".caja4col .item");
				} else if($(".caja3col").length > 0) {
					group = $(".caja3col .item");
				}

				var alto = group.height();
				var ancho = group.width();

				if ($("#portal-responsive").length > 0) {
					alto = alto-20;
					ancho = ancho-20;
				}

				twitter.removeAttr("height");
				twitter.removeAttr("width");
				twitter.attr("height", alto);
				twitter.attr("width", ancho);

				!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");

			}

		},

		/**
		 * Igual el alto widget
		 */
		igualarAltoWidget: function() {
			if($(window).width() > 800){
				setTimeout('equalHeightLine($("#a_timeline .modulo100 .widget"));', 4500);
			}
		}

};

function equalHeight(group) {
	tallest = 0;
	group.each(function() {
		thisHeight = $(this).height();
		if(thisHeight > tallest) {
			tallest = thisHeight;
		}
	});
	group.height(tallest);
}

/* iguala el alto de las capas por l�neas */
function equalHeightLine (container){
	var currentTallest = 0,
	     currentRowStart = 0,
	     rowDivs = new Array(),
	     $el,
	     topPosition = 0;
	 $(container).each(function() {
	   $el = $(this);
	   $($el).height('auto')
	   topPostion = $el.position().top;

	   if (currentRowStart != topPostion) {
	     for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
	       rowDivs[currentDiv].height(currentTallest);
	     }
	     rowDivs.length = 0;
	     currentRowStart = topPostion;
	     currentTallest = $el.height();
	     rowDivs.push($el);
	   } else {
	     rowDivs.push($el);
	     currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
	  }
	   for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
	     rowDivs[currentDiv].height(currentTallest);
	   }
	 });
}


