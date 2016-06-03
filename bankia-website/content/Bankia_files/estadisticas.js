/**
 * Objeto que inicializa todo lo relativo a las estadisticas de netinsight,
 */
var estadisticas = {

	/**
	 * Inicializa las funcionalidades de estadisticas de portal
	 *
	 * @constructor
	 */
	inicializar: function(){
		estadisticas.marcadoAdicional();
		$('a').each(function(e) {
	        var _this = this;
	        $(_this).bind('click keypress', function(event) {
	        	var code = event.charCode || event.keyCode;
                if (!code || (code && code == 13)) {
                	//comprobamos los atributos para saber si está marcado como botón o promoción
                	if($(this).hasClass('statBoton') && $(this).attr('rel')!=''){
                		estadisticas.registrarClickBoton($(this).attr('rel'));
                	}else{
                		if($(this).hasClass('statPromocion') && $(this).attr('rel')!=''){
                			estadisticas.registrarPromocion($(this).attr('rel'));
                		}
                		if($(this).hasClass('statResultadoBusq') && busqueda==1){
                			var posicion = 1;
                			if($(this).parents('li').size()!=0){
                				posicion = $(this).parents('li').index()+1;
                			}
                			if($(this).parents('tr').size()!=0){
                				//no +1 porque el th tambien lleva tr
                				posicion = $(this).parents('tr').index();
                			}
                			estadisticas.registrarClickResultado(posicion);
                		}
                	}
                }
	         });
	    });
		
		$('input:submit').each(function(e) {
			var _this = this;  
			$(_this).bind('click keypress', function(event) {
		        	var code = event.charCode || event.keyCode;
	                if (!code || (code && code == 13)) {
	                	if($(this).hasClass('statBoton') && $(this).attr('rel')!=''){
	                		estadisticas.registrarClickBoton($(this).attr('rel'));
	                	}
	                }
			  });     
		});
		
	}, 
	registrarClickBoton: function(nombreBoton){
		ntptAddPair("boton", nombreBoton);
		ntptEventTag("ev=clickboton");
	},
	
	registrarPromocion: function(nombrePromocion){
		ntptAddPair( "InternalCampaign", nombrePromocion); 
		ntptEventTag("ev=intcampaign");
	}, 
	
	registrarBusqueda: function(terminos){
		ntptAddPair( "CTBusqueda", terminos); 
		ntptEventTag("ev=clickbusqueda");
	}, 
	
	registrarClickResultado: function(numResultado){
		ntptEventTag("ctbusqueda="+numResultado+"&ev=clickbusqueda");
	},
	
	marcadoAdicional: function(){
		$('.bookmark_list a:eq(2)').attr('class','statBoton').attr('rel','Compartir LinkedIn');
		$('.bookmark_list a:eq(1)').attr('class','statBoton').attr('rel','Compartir Twitter');
		$('.bookmark_list a:eq(0)').attr('class','statBoton').attr('rel','Compartir Facebook');
		
		if ($('#formularioDinamicoForm').size() != 0){
			var nombreForm = 'formulario dinámico';
			if ($('#formularioDinamicoForm').siblings('h3').size() != 0){
				nombreForm = $('#formularioDinamicoForm').siblings('h3').text();
			}else{
				nombreForm = nombreForm + $('#formularioDinamicoForm input[name=identificador]').val();
			};
			$('#formularioDinamicoForm .enviar').attr('class','statBoton').attr('rel',nombreForm);
		}
		
		$('#botonbuscador').bind('click keypress', function(event) {
			var code = event.charCode || event.keyCode;
			if (!code || (code && code == 13)) {
				var busqueda = $('#textobusqueda').val();
				ntptAddPair("CTBusqueda",busqueda); 
				ntptEventTag("ev=clickbusqueda");
			}
		});
		
		if($('.caja-cliente').size()!=0){
			$('.caja-cliente .boton a').bind('click keypress', function(event) {
				var code = event.charCode || event.keyCode;
				if (!code || (code && code == 13)) {
					ntptAddPair("CTAccesoOI",'Entrar'); 
				}
			});
			
			$('.caja-cliente .links a:eq(0), .caja-cliente .texto-destacado a:eq(0)').bind('click keypress', function(event) {
				var code = event.charCode || event.keyCode;
				if (!code || (code && code == 13)) {
					ntptAddPair("CTAccesoOI",'Demo'); 
				}
			});
			
			$('.caja-cliente .links a:eq(1), .caja-cliente .texto-destacado a:eq(1)').bind('click keypress', function(event) {
				var code = event.charCode || event.keyCode;
				if (!code || (code && code == 13)) {
					ntptAddPair("CTAccesoOI",'Hágase cliente'); 
				}
			});
		}
	}	
};