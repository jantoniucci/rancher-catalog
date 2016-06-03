/******************************************************************************
**
** Version
** =======
**
** Version del plugin de cookie:
** En caso de cambiar la normativa o el mensaje incluido en el plugin y volver
** a mostrar mensaje de aceptaci&oacute;n. Incrementaremos la variable "version", 
** esto permite eliminar las cookies anteriores y volver a mostrar el mensaje 
** de aceptaci&oacute;n.
**
*******************************************************************************/

var version = '3.2';




if(document.location.href.indexOf("/en/")!=-1){

cc.initialise({
	cookies: {
		analytics: {},	necessary: {}
	},
	settings: {
		consenttype: "implicit", hideprivacysettingstab: true,    	ignoreDoNotTrack: true,		refreshOnConsent: true,		disableallsites: true,		useSSL: true
	},
	strings: {
		notificationTitleImplicit: 'We use our own and third-party cookies to improve our services and show you advertising related to your preferences by analysing your browsing habits. If you continue browsing it will be understood that you accept their use. <br/> For more information or to know how to change this configuration, please see our <a href="http://www.bankia.es/en/politica-de-cookies" target="_blank" title="Opens in a new window." class="new_window">cookies policy</a>.<p><a class="cc-link" href="#" id="cc-approve-button-thissite">Accept</a></p>',
		allowCookies: 'Permitir cookies',		hideDetails: 'Ocultar detalles',		seeDetailsImplicit: '',		savePreference: 'Guardar preferencias',		saveForAllSites: 'Guardar para todos los sitios',
		privacySettings: 'Configuraci&oacute;n de privacidad',		privacySettingsDialogTitleA: 'Configuraci&oacute;n de privacidad',		preferenceUseGlobal: 'Usar configuraci&oacute;n global',
		preferenceConsent: 'Permitir',		preferenceDecline: 'No permitir',		notUsingCookies: 'Este sitio web no utiliza cookies',		allSitesSettingsDialogTitleA: 'Configuraci&oacute;n de privacidad',
		allSitesSettingsDialogTitleB: 'Para todos los sitios web',		preferenceAsk: 'Preguntar cada vez',		preferenceAlways: 'Permitir siempre',
		preferenceNever: 'Nunca permitir',		allSitesSettingsDialogSubtitle: '',		backToSiteSettings: 'Regresar a la configuraci&oacute;n',
		changeForAllSitesLink: 'Cambiar configuraci&oacute;n para todos los sitios web',		privacySettingsDialogTitleB: 'Para este sitio web',		allowForAllSites: 'Permitir para todos los sitios, web',
		allowCookiesImplicit: 'Accept',		seeDetails: 'Ver detalles',		necessaryDefaultDescription: '',		necessaryDefaultTitle: 'Estrictamente necesarias',
		analyticsDefaultTitle: 'Anal&iacute;tica',		analyticsDefaultDescription: ''
	}
});

}else if(document.location.href.indexOf("/ca/")!=-1){

cc.initialise({
	cookies: {
		analytics: {},	necessary: {}
	},
	settings: {
		consenttype: "implicit", hideprivacysettingstab: true,    	ignoreDoNotTrack: true,		refreshOnConsent: true,		disableallsites: true,		useSSL: true
	},
	strings: {
		notificationTitleImplicit: 'Utilitzem cookies pr&ograve;pies i de tercers per millorar els nostres serveis i mostrar-li publicitat relacionada amb les seves prefer&egrave;ncies mitjan&ccedil;ant l&rsquo;an&agrave;lisi dels seus h&agrave;bits de navegaci&oacute;. Si continua navegant, considerem que n&rsquo;accepta l&rsquo;&uacute;s. <br/> Per obtenir m&eacute;s informaci&oacute;, o saber com canviar la configuraci&oacute;, consulti la nostra <a href="http://www.bankia.es/ca/politica-de-cookies" target="_blank" title="S&#39;obre en finestra nova." class="new_window">pol&iacute;tica de cookies</a>.<p><a class="cc-link" href="#" id="cc-approve-button-thissite">Acceptar</a></p>',
		allowCookies: 'Permitir cookies',		hideDetails: 'Ocultar detalles',		seeDetailsImplicit: '',		savePreference: 'Guardar preferencias',		saveForAllSites: 'Guardar para todos los sitios',
		privacySettings: 'Configuraci&oacute;n de privacidad',		privacySettingsDialogTitleA: 'Configuraci&oacute;n de privacidad',		preferenceUseGlobal: 'Usar configuraci&oacute;n global',
		preferenceConsent: 'Permitir',		preferenceDecline: 'No permitir',		notUsingCookies: 'Este sitio web no utiliza cookies',		allSitesSettingsDialogTitleA: 'Configuraci&oacute;n de privacidad',
		allSitesSettingsDialogTitleB: 'Para todos los sitios web',		preferenceAsk: 'Preguntar cada vez',		preferenceAlways: 'Permitir siempre',
		preferenceNever: 'Nunca permitir',		allSitesSettingsDialogSubtitle: '',		backToSiteSettings: 'Regresar a la configuraci&oacute;n',
		changeForAllSitesLink: 'Cambiar configuraci&oacute;n para todos los sitios web',		privacySettingsDialogTitleB: 'Para este sitio web',		allowForAllSites: 'Permitir para todos los sitios, web',
		allowCookiesImplicit: 'Acceptar',		seeDetails: 'Ver detalles',		necessaryDefaultDescription: '',		necessaryDefaultTitle: 'Estrictamente necesarias',
		analyticsDefaultTitle: 'Anal&iacute;tica',		analyticsDefaultDescription: ''
	}
});
            
}else if(document.location.href.indexOf("/va/")!=-1){

cc.initialise({
	cookies: {
		analytics: {},	necessary: {}
	},
	settings: {
		consenttype: "implicit", hideprivacysettingstab: true,    	ignoreDoNotTrack: true,		refreshOnConsent: true,		disableallsites: true,		useSSL: true
	},
	strings: {
		notificationTitleImplicit: 'Utilitzem cookies pr&ograve;pies i de tercers per millorar els nostres serveis i mostrar-li publicitat relacionada amb les seues prefer&egrave;ncies mitjan&ccedil;ant l&rsquo;an&agrave;lisi dels seus h&agrave;bits de navegaci&oacute;. Si continua navegant, considerem que accepta el seu &uacute;s. <br/> Per obtindre m&eacute;s informaci&oacute;, o con&egrave;ixer com canviar la configuraci&oacute;, consulte la nostra <a href="http://www.bankia.es/va/politica-de-cookies" target="_blank" title="S&#39;obri en finestra nova." class="new_window">pol&iacute;tica de cookies</a>.<p><a class="cc-link" href="#" id="cc-approve-button-thissite">Acceptar</a></p>',
		allowCookies: 'Permitir cookies',		hideDetails: 'Ocultar detalles',		seeDetailsImplicit: '',		savePreference: 'Guardar preferencias',		saveForAllSites: 'Guardar para todos los sitios',
		privacySettings: 'Configuraci&oacute;n de privacidad',		privacySettingsDialogTitleA: 'Configuraci&oacute;n de privacidad',		preferenceUseGlobal: 'Usar configuraci&oacute;n global',
		preferenceConsent: 'Permitir',		preferenceDecline: 'No permitir',		notUsingCookies: 'Este sitio web no utiliza cookies',		allSitesSettingsDialogTitleA: 'Configuraci&oacute;n de privacidad',
		allSitesSettingsDialogTitleB: 'Para todos los sitios web',		preferenceAsk: 'Preguntar cada vez',		preferenceAlways: 'Permitir siempre',
		preferenceNever: 'Nunca permitir',		allSitesSettingsDialogSubtitle: '',		backToSiteSettings: 'Regresar a la configuraci&oacute;n',
		changeForAllSitesLink: 'Cambiar configuraci&oacute;n para todos los sitios web',		privacySettingsDialogTitleB: 'Para este sitio web',		allowForAllSites: 'Permitir para todos los sitios, web',
		allowCookiesImplicit: 'Acceptar',		seeDetails: 'Ver detalles',		necessaryDefaultDescription: '',		necessaryDefaultTitle: 'Estrictamente necesarias',
		analyticsDefaultTitle: 'Anal&iacute;tica',		analyticsDefaultDescription: ''
	}
});
}else { 

cc.initialise({
	cookies: {
		analytics: {},	necessary: {}
	},
	settings: {
		consenttype: "implicit", hideprivacysettingstab: true,    	ignoreDoNotTrack: true,		refreshOnConsent: true,		disableallsites: true,		useSSL: true
	},
	strings: {
		notificationTitleImplicit: 'Utilizamos cookies propias y de terceros para mejorar nuestros servicios y mostrarle publicidad relacionada con sus preferencias mediante el an&aacute;lisis de sus h&aacute;bitos de navegaci&oacute;n. Si continua navegando, consideramos que acepta su uso. <br /> Para obtener m&aacute;s informaci&oacute;n, o bien conocer c&oacute;mo cambiar la configuraci&oacute;n, consulte nuestra <a href="http://www.bankia.es/es/politica-de-cookies" target="_blank" title="Se abre en ventana nueva." class="new_window">pol&iacute;tica de cookies</a>.<p><a class="cc-link" href="#" id="cc-approve-button-thissite">Aceptar</a></p>',
		allowCookies: 'Permitir cookies',		hideDetails: 'Ocultar detalles',		seeDetailsImplicit: '',		savePreference: 'Guardar preferencias',		saveForAllSites: 'Guardar para todos los sitios',
		privacySettings: 'Configuraci&oacute;n de privacidad',		privacySettingsDialogTitleA: 'Configuraci&oacute;n de privacidad',		preferenceUseGlobal: 'Usar configuraci&oacute;n global',
		preferenceConsent: 'Permitir',		preferenceDecline: 'No permitir',		notUsingCookies: 'Este sitio web no utiliza cookies',		allSitesSettingsDialogTitleA: 'Configuraci&oacute;n de privacidad',
		allSitesSettingsDialogTitleB: 'Para todos los sitios web',		preferenceAsk: 'Preguntar cada vez',		preferenceAlways: 'Permitir siempre',
		preferenceNever: 'Nunca permitir',		allSitesSettingsDialogSubtitle: '',		backToSiteSettings: 'Regresar a la configuraci&oacute;n',
		changeForAllSitesLink: 'Cambiar configuraci&oacute;n para todos los sitios web',		privacySettingsDialogTitleB: 'Para este sitio web',		allowForAllSites: 'Permitir para todos los sitios, web',
		allowCookiesImplicit: 'Aceptar',		seeDetails: 'Ver detalles',		necessaryDefaultDescription: '',		necessaryDefaultTitle: 'Estrictamente necesarias',
		analyticsDefaultTitle: 'Anal&iacute;tica',		analyticsDefaultDescription: ''
	}
});

}

function leerCookie(clave)
{ 
	var valCookie= ""; 
	var buscar= clave + "="; 
	if(document.cookie.length > 0) { 
		pos=document.cookie.indexOf(buscar); 
	if (pos != -1) { 
		pos += buscar.length; 
		fin= document.cookie.indexOf(";", pos); 
	if (fin == -1) 
		fin= document.cookie.length; 
		valCookie= unescape(document.cookie.substring(pos,fin)) 
	} 
	} 
return valCookie; 
} 
function escrCookie(clave,valor, dias) { 
	var expirar = ""; 
	if(dias != null) { 
		expirar = new Date((new Date()).getTime() + dias * 24 * 3600000); 		
		expirar = "; expires="+ expirar.toGMTString()+";path=/"; 
	} 
	escribir = clave+"="+escape(valor)+ expirar; 	
	document.cookie = escribir 
} 
	
var versionCliente = leerCookie('bankia_versionCookie');
if(version != versionCliente){
	escrCookie('bankia_versionCookie',version, '1825');		
	escrCookie('cc_analytics','no', '-1');		
	escrCookie('cc_necessary','no', '-1');		
}				