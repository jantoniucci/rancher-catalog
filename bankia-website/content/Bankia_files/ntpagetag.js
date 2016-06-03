/* Divisadero
	Date: 04/12/2013
 */
/* Unica Page Tagging Script v7.4.0
 * Copyright 2004-2008 Unica Corporation.  All rights reserved.
 * Visit http://www.unica.com for more information.
 */

var NTPT_IMGSRC = 'http://pt200193.unica.com/ntpagetag.gif';


var NTPT_FLDS = new Object();
NTPT_FLDS.lc = true; // Document location
NTPT_FLDS.rf = true; // Document referrer
NTPT_FLDS.rs = true; // User's screen resolution
NTPT_FLDS.cd = true; // User's color depth
NTPT_FLDS.ln = true; // Browser language
NTPT_FLDS.tz = true; // User's timezone
NTPT_FLDS.jv = true; // Browser's Java support
NTPT_FLDS.ck = true; // Cookies

var NTPT_MAXTAGWAIT = 1.0; // Max delay (secs) on link-tags and submit-tags
// Optional variables:
var NTPT_HTTPSIMGSRC = 'https://pt200193.unica.com/ntpagetag.gif';
var NTPT_GLBLREFTOP = false;
var NTPT_SET_IDCOOKIE = true;
var NTPT_IDCOOKIE_NAME = 'UnicaID';


// Variables that will need to be modified on a per-site basis
var NTPT_GLBLEXTRA = 'site=institucional.com';
var NTPT_IDCOOKIE_DOMAIN = 'bankia.com';


// NTPT_GLBLCOOKIES can be used to pass other cookie values to NetInsight through the page tag
var NTPT_GLBLCOOKIES = [ ];

/* Plug-in section
 * Copyright 2013 - Divisadero
 * Visit http://www.divisadero.com for more information.
 */
 
//plugin Idioma
if(NTPT_PGEXTRA.indexOf("idioma")==-1){
	if(document.location.href.indexOf("/en/")!=-1){
		NTPT_PGEXTRA=NTPT_PGEXTRA+'&idioma=EN';
	}
	else if(document.location.href.indexOf("/ca/")!=-1){
		NTPT_PGEXTRA=NTPT_PGEXTRA+'&idioma=CA';
		}
		else if(document.location.href.indexOf("/va/")!=-1){
			NTPT_PGEXTRA=NTPT_PGEXTRA+'&idioma=VA';
		}
		else {
			NTPT_PGEXTRA=NTPT_PGEXTRA+'&idioma=ES';
			}
}
/*
* Plugin: Replace v0.1 - Remplaza todas las apariciones de la cadena "&amp;" por la cadena "&"
* Autor: Divisadero
*/
if(NTPT_PGEXTRA.indexOf("&amp;")!=-1){
	NTPT_PGEXTRA=NTPT_PGEXTRA.replace(/&amp;/gi,"&");
}

/*****************************************************************************
Plugin exitlinks_v1.1

PRODUCE: Un evento "ExitLink" al cual se asocia el href del enlace de salida

Made by: Divisadero
******************************************************************************/
if (typeof jQuery != 'undefined') {jQuery(function(){jQuery("a").click(function(){
var texto = jQuery(this).attr("href").split("/")[2];
var compruebaHREF = jQuery(this).attr("href").split("/")[0];
var aux = jQuery(this).attr("href").split(".");
var isDownload = aux[aux.length-1];
if(((compruebaHREF=="http:")||(compruebaHREF=="https:"))&&(texto!=document.location.hostname)&&((isDownload!="pdf")&&(isDownload!="PDF"))&&((isDownload!="exe")&&(isDownload!="EXE"))&&((isDownload!="zip")||(isDownload!="ZIP"))&&((isDownload!="rar")&&(isDownload!="RAR"))&&((isDownload!="wav")&&(isDownload!="WAV"))&&((isDownload!="mp3")&&(isDownload!="MP3"))&&((isDownload!="mpg")&&(isDownload!="MPG"))&&((isDownload!="avi")&&(isDownload!="AVI"))&&((isDownload!="wmv")&&(isDownload!="WMV"))&&((isDownload!="doc")&&(isDownload!="DOC"))&&((isDownload!="docx")&&(isDownload!="DOCX"))&&((isDownload!="xls")&&(isDownload!="XLS"))&&((isDownload!="xlsx")&&(isDownload!="XLSX"))&&((isDownload!="ppt")&&(isDownload!="PPT"))&&((isDownload!="pptx")&&(isDownload!="PPTX"))&&((isDownload!="JPG")&&(isDownload!="jpg"))){
ntptEventTag('ev=ExitLink&ExitLinkName='+texto);}});});}

/*****************************************************************************
Plugin download_v1.1

NECESITA: Ficheros en elementos <a> con alguna de las siguientes extensiones
"exe,zip,rar,wav,mp3,mov,mpg,avi,wmv,doc,docx,pdf,xls,xlsx,ppt,pptx,jpg,EXE,
ZIP,RAR,WAV,MP3,MOV,MPG,AVI,WMV,DOC,DOCX,PDF,XLS,XLSX,PPT,PPTX,JPG"

PRODUCE: Un evento "FileDownload" asociado al nombre del fichero descargado

Made by: Divisadero
******************************************************************************/
if (typeof jQuery != 'undefined') {jQuery(function(){
jQuery("a[href$='.pdf']").click(function(){
var texto = jQuery(this).attr('href').split('/');
texto = texto[texto.length-1].replace(/-/g, " ");
ntptEventTag('ev=FileDownload&FileDownloadName='+texto);
});
jQuery("a[href$='.doc']").click(function(){
var texto = jQuery(this).attr('href').split('/');
texto = texto[texto.length-1].replace(/-/g, " ");
ntptEventTag('ev=FileDownload&FileDownloadName='+texto);
});
jQuery("a[href$='.docx']").click(function(){
var texto = jQuery(this).attr('href').split('/');
texto = texto[texto.length-1].replace(/-/g, " ");
ntptEventTag('ev=FileDownload&FileDownloadName='+texto);
});
jQuery("a[href$='.xls']").click(function(){
var texto = jQuery(this).attr('href').split('/');
texto = texto[texto.length-1].replace(/-/g, " ");
ntptEventTag('ev=FileDownload&FileDownloadName='+texto);
});
jQuery("a[href$='.xlsx']").click(function(){
var texto = jQuery(this).attr('href').split('/');
texto = texto[texto.length-1].replace(/-/g, " ");
ntptEventTag('ev=FileDownload&FileDownloadName='+texto);
});
jQuery("a[href$='.ppt']").click(function(){
var texto = jQuery(this).attr('href').split('/');
texto = texto[texto.length-1].replace(/-/g, " ");
ntptEventTag('ev=FileDownload&FileDownloadName='+texto);
});
jQuery("a[href$='.pptx']").click(function(){
var texto = jQuery(this).attr('href').split('/');
texto = texto[texto.length-1].replace(/-/g, " ");
ntptEventTag('ev=FileDownload&FileDownloadName='+texto);
});
jQuery("a[href$='.exe']").click(function(){
var texto = jQuery(this).attr('href').split('/');
texto = texto[texto.length-1].replace(/-/g, " ");
ntptEventTag('ev=FileDownload&FileDownloadName='+texto);
});
jQuery("a[href$='.zip']").click(function(){
var texto = jQuery(this).attr('href').split('/');
texto = texto[texto.length-1].replace(/-/g, " ");
ntptEventTag('ev=FileDownload&FileDownloadName='+texto);
});
jQuery("a[href$='.wav']").click(function(){
var texto = jQuery(this).attr('href').split('/');
texto = texto[texto.length-1].replace(/-/g, " ");
ntptEventTag('ev=FileDownload&FileDownloadName='+texto);
});
jQuery("a[href$='.mp3']").click(function(){
var texto = jQuery(this).attr('href').split('/');
texto = texto[texto.length-1].replace(/-/g, " ");
ntptEventTag('ev=FileDownload&FileDownloadName='+texto);
});
jQuery("a[href$='.mov']").click(function(){
var texto = jQuery(this).attr('href').split('/');
texto = texto[texto.length-1].replace(/-/g, " ");
ntptEventTag('ev=FileDownload&FileDownloadName='+texto);
});
jQuery("a[href$='.mpg']").click(function(){
var texto = jQuery(this).attr('href').split('/');
texto = texto[texto.length-1].replace(/-/g, " ");
ntptEventTag('ev=FileDownload&FileDownloadName='+texto);
});
jQuery("a[href$='.avi']").click(function(){
var texto = jQuery(this).attr('href').split('/');
texto = texto[texto.length-1].replace(/-/g, " ");
ntptEventTag('ev=FileDownload&FileDownloadName='+texto);
});
jQuery("a[href$='.wmv']").click(function(){
var texto = jQuery(this).attr('href').split('/');
texto = texto[texto.length-1].replace(/-/g, " ");
ntptEventTag('ev=FileDownload&FileDownloadName='+texto);
});
jQuery("a[href$='.rar']").click(function(){
var texto = jQuery(this).attr('href').split('/');
texto = texto[texto.length-1].replace(/-/g, " ");
ntptEventTag('ev=FileDownload&FileDownloadName='+texto);
});
jQuery("a[href$='.jpg']").click(function(){
var texto = jQuery(this).attr('href').split('/');
texto = texto[texto.length-1].replace(/-/g, " ");
ntptEventTag('ev=FileDownload&FileDownloadName='+texto);
});
jQuery("a[href$='.PDF']").click(function(){
var texto = jQuery(this).attr('href').split('/');
texto = texto[texto.length-1].replace(/-/g, " ");
ntptEventTag('ev=FileDownload&FileDownloadName='+texto);
});
jQuery("a[href$='.DOC']").click(function(){
var texto = jQuery(this).attr('href').split('/');
texto = texto[texto.length-1].replace(/-/g, " ");
ntptEventTag('ev=FileDownload&FileDownloadName='+texto);
});
jQuery("a[href$='.DOCX']").click(function(){
var texto = jQuery(this).attr('href').split('/');
texto = texto[texto.length-1].replace(/-/g, " ");
ntptEventTag('ev=FileDownload&FileDownloadName='+texto);
});
jQuery("a[href$='.XLS']").click(function(){
var texto = jQuery(this).attr('href').split('/');
texto = texto[texto.length-1].replace(/-/g, " ");
ntptEventTag('ev=FileDownload&FileDownloadName='+texto);
});
jQuery("a[href$='.XLSX']").click(function(){
var texto = jQuery(this).attr('href').split('/');
texto = texto[texto.length-1].replace(/-/g, " ");
ntptEventTag('ev=FileDownload&FileDownloadName='+texto);
});
jQuery("a[href$='.PPT']").click(function(){
var texto = jQuery(this).attr('href').split('/');
texto = texto[texto.length-1].replace(/-/g, " ");
ntptEventTag('ev=FileDownload&FileDownloadName='+texto);
});
jQuery("a[href$='.PPTX']").click(function(){
var texto = jQuery(this).attr('href').split('/');
texto = texto[texto.length-1].replace(/-/g, " ");
ntptEventTag('ev=FileDownload&FileDownloadName='+texto);
});
jQuery("a[href$='.EXE']").click(function(){
var texto = jQuery(this).attr('href').split('/');
texto = texto[texto.length-1].replace(/-/g, " ");
ntptEventTag('ev=FileDownload&FileDownloadName='+texto);
});
jQuery("a[href$='.ZIP']").click(function(){
var texto = jQuery(this).attr('href').split('/');
texto = texto[texto.length-1].replace(/-/g, " ");
ntptEventTag('ev=FileDownload&FileDownloadName='+texto);
});
jQuery("a[href$='.WAV']").click(function(){
var texto = jQuery(this).attr('href').split('/');
texto = texto[texto.length-1].replace(/-/g, " ");
ntptEventTag('ev=FileDownload&FileDownloadName='+texto);
});
jQuery("a[href$='.MP3']").click(function(){
var texto = jQuery(this).attr('href').split('/');
texto = texto[texto.length-1].replace(/-/g, " ");
ntptEventTag('ev=FileDownload&FileDownloadName='+texto);
});
jQuery("a[href$='.MOV']").click(function(){
var texto = jQuery(this).attr('href').split('/');
texto = texto[texto.length-1].replace(/-/g, " ");
ntptEventTag('ev=FileDownload&FileDownloadName='+texto);
});
jQuery("a[href$='.MPG']").click(function(){
var texto = jQuery(this).attr('href').split('/');
texto = texto[texto.length-1].replace(/-/g, " ");
ntptEventTag('ev=FileDownload&FileDownloadName='+texto);
});
jQuery("a[href$='.AVI']").click(function(){
var texto = jQuery(this).attr('href').split('/');
texto = texto[texto.length-1].replace(/-/g, " ");
ntptEventTag('ev=FileDownload&FileDownloadName='+texto);
});
jQuery("a[href$='.WMV']").click(function(){
var texto = jQuery(this).attr('href').split('/');
texto = texto[texto.length-1].replace(/-/g, " ");
ntptEventTag('ev=FileDownload&FileDownloadName='+texto);
});
jQuery("a[href$='.RAR']").click(function(){
var texto = jQuery(this).attr('href').split('/');
texto = texto[texto.length-1].replace(/-/g, " ");
ntptEventTag('ev=FileDownload&FileDownloadName='+texto);
});
jQuery("a[href$='.JPG']").click(function(){
var texto = jQuery(this).attr('href').split('/');
texto = texto[texto.length-1].replace(/-/g, " ");
ntptEventTag('ev=FileDownload&FileDownloadName='+texto);});});}

getTrafficSource();
 /* Plug-in trafficsource v1.2
  */
function getTrafficSource(){
var ref=document.referrer;
var pagetag_aux="";

if((ref=='')&&(isFirstAccess()==1)){
pagetag_aux=pagetag_aux+"&ts_channel=Trafico Directo";
}
else if(getURLParam('ni_channel',document.location.href)!=''){
pagetag_aux=pagetag_aux+"&ts_channel="+getURLParam('ni_channel',document.location.href);
if(getURLParam('ni_segment',document.location.href)!=''){
pagetag_aux=pagetag_aux+"&ts_segment="+getURLParam('ni_segment',document.location.href);
}
if(getURLParam('ni_campaign',document.location.href)!=''){
pagetag_aux=pagetag_aux+"&ts_campaign="+getURLParam('ni_campaign',document.location.href);
}
if(getURLParam('ni_creative',document.location.href)!=''){
pagetag_aux=pagetag_aux+"&ts_creative="+getURLParam('ni_creative',document.location.href);
}
if(getURLParam('ni_keyword',document.location.href)!=''){
pagetag_aux=pagetag_aux+"&ts_keyword="+getURLParam('ni_keyword',document.location.href);
}
}
else if(isBankia(ref)&&(isFirstAccess()==1)){
	pagetag_aux=pagetag_aux+"&ts_channel=Portales Bankia&ts_segment="+getBankia(ref);
}
else if(isSearchEngine(ref)){
	pagetag_aux=pagetag_aux+"&ts_channel=SEO&ts_seo_keyword="+getkeyword(ref);
}
else if(isSocialNetwork(ref)){
	pagetag_aux=pagetag_aux+"&ts_channel=Redes Sociales&ts_social_dom="+getdomain(ref)+"&ts_social_ref="+ref;
}
else if((isInternalDomain(ref)==1)&&(isFirstAccess()==1)){
	pagetag_aux=pagetag_aux+"&ts_channel=Trafico Directo";
}
else if((isInternalDomain(ref)==0)&&(ref!='')){
	pagetag_aux=pagetag_aux+"&ts_channel=Dominios referentes&ts_refdom_ref="+ref+"&ts_refdom_dom="+getdomain(ref);
}
document.cookie='un_ts=1;;path=/';
NTPT_PGEXTRA=NTPT_PGEXTRA+pagetag_aux;
}
function isBankia(ref){
//recogermos sólo el dominio de referencia
ref=getdomain(ref);
var ser='v8kcmo01,bibliotecas.obrasocialcajamadrid.es,cajamadrid.com,lacasaencendida.es,fundacioncajamadrid.es,bibliotecas.obrasocialcajamadrid.es,buscador.cajamadrid.es,resersubastas.com,salaretiro.com,bankiafondos.es,planempleo.cajamadridpensiones.es,bankiapensiones.es,cajamadridpensiones.es,bankia.com,bankia.es,bancofinancieroydeahorros.com,oi.bankia.es,ome.bankia.es,bankiabancapersonal.es,joven.bankia.es,buscador.bankia.es,m.bankia.es,bankiabolsa.es,empresas.bankia.es,bankiabancaprivada.es,bankiahabitat.es,sliro328:33201,redagentes.cm.es,cajadeavila.com,bancaja.com,cajarioja.com,cajasegovia.com,cajadecanarias.com,caixalaietana.com,broker.bankia.es,extranet.mapfre.com,bankialink.es,revistabankia.cm.es,darcuerda.com,empecemosporlosprincipios.com,sos.cm.es,sileonole.com';
ser=ser.split(',');
for(var i=0;i<ser.length;i++){
if(ref.match(ser[i])!=null)
return true;
}return false;
}
function getBankia(ref){
//recogermos sólo el dominio de referencia
ref=getdomain(ref);
var ser='v8kcmo01,bibliotecas.obrasocialcajamadrid.es,cajamadrid.com,lacasaencendida.es,fundacioncajamadrid.es,bibliotecas.obrasocialcajamadrid.es,buscador.cajamadrid.es,resersubastas.com,salaretiro.com,bankiafondos.es,planempleo.cajamadridpensiones.es,bankiapensiones.es,cajamadridpensiones.es,bankia.com,bankia.es,bancofinancieroydeahorros.com,oi.bankia.es,ome.bankia.es,bankiabancapersonal.es,joven.bankia.es,buscador.bankia.es,m.bankia.es,bankiabolsa.es,empresas.bankia.es,bankiabancaprivada.es,bankiahabitat.es,sliro328:33201,redagentes.cm.es,cajadeavila.com,bancaja.com,cajarioja.com,cajasegovia.com,cajadecanarias.com,caixalaietana.com,broker.bankia.es,extranet.mapfre.com,bankialink.es,revistabankia.cm.es,darcuerda.com,empecemosporlosprincipios.com,sos.cm.es,sileonole.com';
ser=ser.split(',');
for(var i=0;i<ser.length;i++){
if(ref.match(ser[i])!=null)
{
ser[i]=ser[i].toString();
return ser[i];
}
}return "No encontrado";
}
function isSearchEngine(ref){
//recogermos sólo el dominio de referencia
ref=getdomain(ref);
var se='.google.,search.yahoo.,.bing.com,.aol.,ask.com,altavista.com,.lycos.,.hispavista.,.yandex.,.babylon.com,.search-results.com,.mywebsearch.com,.searchcompletion.com,plusnetwork.com,searchya.com,gooofullsearch.com,.mysearchresults.com,searchmobileonline.com';
se=se.split(',');
for(var i=0;i<se.length;i++){
if(ref.match(se[i])!=null)
return true;
}return false;
}
function getkeyword(ref){
var keyword="";
if(getURLParam('q',ref)!='') keyword=getURLParam('q',ref);
else if(getURLParam('p',ref)!='') keyword=getURLParam('p',ref);
else if(getURLParam('text',ref)!='') keyword=getURLParam('text',ref);
return keyword;
}
function getdomain(ref){
var domain = '';
ref.indexOf('http')>-1?domain = ref.split('/')[2]:domain = ref.split('/')[0];
return domain;
}

function isInternalDomain(ref){
var dom=NTPT_IDCOOKIE_DOMAIN;
if(ref.indexOf(dom)>-1)
return 1;
return 0;
}

function isFirstAccess(){
if(document.cookie.length>0){
if(document.cookie.indexOf('un_ts')!=-1)	
return 0;
}return 1;
}

function isSocialNetwork(ref){
//recogermos sólo el dominio de referencia
ref=getdomain(ref);
var sot='facebook.com,linkedin.com,twitter.com,orkut.com,friendster.com,livejournal.com,blogspot.com,wordpress.com,friendfeed.com,myspace.com,digg.com,reddit.com,stumbleupon.com,twine.com,yelp.com,mixx.com,delicious.com,tumblr.com,disqus.com,intensedebate.com,plurk.com,slideshare.net,backtype.com,netvibes.com,mister-wong.com,diigo.com,flixster.com,youtube.com,vimeo.com,12seconds.tv,zooomr.com,identi.ca,jaiku.com,flickr.com,imeem.com,dailymotion.com,photobucket.com,fotolog.com,smugmug.com,classmates.com,myyearbook.com,mylife.com,tagged.com,brightkite.com,ning.com,bebo.com,hi5.com,yuku.com,cafemom.com,xanga.com,tuenti.com';
sot=sot.split(',');
for(var i=0;i<sot.length;i++){
if(ref.match(sot[i])!=null)
return true;
}return false;
}

/*
* Plugin: getURLParam 1.1 - return query string parameter(s)
*/
function getURLParam(name,url){
var params="";
var fin="";
var flag=false;
if(url.indexOf("?")>-1){
params = url.split('?');
var tparams=params[1].split('&');
fin="";
    for(var i = 0; i < tparams.length && flag==false; i++)
    {
        var param = tparams[i].split('=');
		if(param[0]==name){
			if(param[1]!="")
			fin=param[1];
			else fin="Not Provided";
			flag=true;
		}
    }
}
    return fin;
}
/*
* Utility Function: split
*/
split=new Function("l","d","var i,x=0,a= new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x++]=l.substring(0,i);l=l.substring(i+d.length);}return a");
  /* FIN Plug-in section
 * Copyright 2013 - Divisadero
 * Visit http://www.divisadero.com for more information.
 */
 
/*** END OF USER-CONFIGURABLE VARIABLES ***/

function OOOO000(OO0O00,O0O0O,O000OOO,OO0O00O){var O00O0="";O00O0=OO0O00+"\x3d"+escape(O0O0O)+"\x3b";if(OO0O00O)O00O0+="\x20\x64\x6f\x6d\x61\x69\x6e\x3d"+OO0O00O+"\x3b";if(O000OOO>(0x1d65+435-0x1f18)){var OOO00O=new Date();OOO00O.setTime(OOO00O.getTime()+(O000OOO*(0x9a6+2102-0xdf4)));O00O0+="\x20\x65\x78\x70\x69\x72\x65\x73\x3d"+OOO00O.toGMTString()+"\x3b";}O00O0+="\x20\x70\x61\x74\x68\x3d\x2f";document.cookie=O00O0;};function OOOO00(OO0O00){var O0O0O0O=OO0O00+"\x3d";if(document.cookie.length>(0x162f+0-0x162f)){var OO0000;OO0000=document.cookie.indexOf(O0O0O0O);if(OO0000!=-(0x106+5772-0x1791)){var OOO000;OO0000+=O0O0O0O.length;OOO000=document.cookie.indexOf("\x3b",OO0000);if(OOO000==-(0x129c+4910-0x25c9))OOO000=document.cookie.length;return unescape(document.cookie.substring(OO0000,OOO000));}else{return null;};}};function O00000O(O0OO0){var OO000O="";for(OO00O in O0OO0){if((typeof(O0OO0[OO00O])=="\x73\x74\x72\x69\x6e\x67")&&(O0OO0[OO00O]!="")){if(OO000O!="")OO000O+="\x3b";OO000O+=OO00O+"\x3d"+O0OO0[OO00O];};}return OO000O;};var O00OOO=["\x41","\x42","\x43","\x44","\x45","\x46","\x47","\x48","\x49","\x4a","\x4b","\x4c","\x4d","\x4e","\x4f","\x50","\x51","\x52","\x53","\x54","\x55","\x56","\x57","\x58","\x59","\x5a","\x61","\x62","\x63","\x64","\x65","\x66","\x67","\x68","\x69","\x6a","\x6b","\x6c","\x6d","\x6e","\x6f","\x70","\x71","\x72","\x73","\x74","\x75","\x76","\x77","\x78","\x79","\x7a","\x30","\x31","\x32","\x33","\x34","\x35","\x36","\x37","\x38","\x39"];function OOOOOO0(O00000){if(O00000<(0x41+9084-0x237f)){return O00OOO[O00000];}else{return(OOOOOO0(Math.floor(O00000/(0x1163+644-0x13a9)))+O00OOO[O00000%(0x1c5c+1570-0x2240)]);}};function O0O000O(){var OO0OO0O="";var OOOOO00=new Date();for(OOO0O0O=(0x13b0+769-0x16b1);OOO0O0O<(0x26f+3070-0xe62);OOO0O0O++){OO0OO0O+=O00OOO[Math.round(Math.random()*(0xb62+1003-0xf10))];}return(OO0OO0O+"\x2d"+OOOOOO0(OOOOO00.getTime()));};function OO0OO(O0O0000,OOO0O00){return(eval("\x74\x79\x70\x65\x6f\x66\x20"+O0O0000+"\x20\x21\x3d\x20\x22\x75\x6e\x64\x65\x66\x69\x6e\x65\x64\x22")?eval(O0O0000):OOO0O00);};function OO0O000(O00OOO0,O0O000){return(O00OOO0+(((O00OOO0=='')||((O0O000=='')||(O0O000.substring((0x1dc9+2039-0x25c0),(0x1442+4474-0x25bb))=="\x26")))?'':"\x26")+O0O000);};function O000O00(){var O0O00O=new Date();return(O0O00O.getTime()+"\x2e"+Math.floor(Math.random()*(0xed9+1573-0x1116)));};function O00OO(OO0O00,OO0OO00){OOO00[OO0O00]=OO0OO00.toString();};function O0OO0O0(OO0O00){OOO00[OO0O00]='';};function OOO0000(O000O){var O0OO0O='',OO00O,O0O0O;OO00OO(OO0OO("\x4e\x54\x50\x54\x5f\x47\x4c\x42\x4c\x45\x58\x54\x52\x41",''));if(!LnkLck)OO00OO(OO0OO("\x4e\x54\x50\x54\x5f\x50\x47\x45\x58\x54\x52\x41",''));OO00OO(O000O);for(OO00O in OOO00){O0O0O=OOO00[OO00O];if(typeof(O0O0O)=="\x73\x74\x72\x69\x6e\x67"){if(O0O0O&&(O0O0O!=''))O0OO0O=OO0O000(O0OO0O,(OO00O+"\x3d"+(self.encodeURIComponent?encodeURIComponent(O0O0O):escape(O0O0O))));};}return O0OO0O;};function O000000(){var OO00O;OOOOO0.OOO00=new Array();for(OO00O in OOO00)OOOOO0.OOO00[OO00O]=OOO00[OO00O];};function OOO00OO(){var OO00O;OOO00=new Array();for(OO00O in OOOOO0.OOO00)OOO00[OO00O]=OOOOO0.OOO00[OO00O];};function OO0O0OO(O00O00,O0OOOO0,O000OO){if(OOOO0[O00O00]!=null){var O000O0=new Function(O0OOOO0);OOOO0[O00O00].onload=O000O0;OOOO0[O00O00].onerror=O000O0;OOOO0[O00O00].onabort=O000O0;}setTimeout(O0OOOO0,(O000OO*(0x5f3+3206-0xe91)));};function O0O00O0(O0OOOO,OO0O0O){if(O0OOOO=='')return;O0000=((O0000+(0x1312+1405-0x188e))%OOOO0.length);if(OOOO0[O0000]==null)OOOO0[O0000]=new Image((0x1005+4276-0x20b8),(0x1208+715-0x14d2));OOOO0[O0000].src=O0OOOO+"\x3f"+OO0O0O;};function OOOOO0O(O000O){var O0OOOO;var OO0O0O;if((O00O00O!='')&&(document.location.protocol=="\x68\x74\x74\x70\x73\x3a"))O0OOOO=O00O00O;else O0OOOO=O0000OO;OO0O0O=OOO0000(O000O);O0O00O0(O0OOOO,OO0O0O);OOO00OO();};function OO00OO(O000O){var OO00O0;var O00O0O;if(!O000O)return;O000O=O000O.toString();if(O000O=='')return;OO00O0=O000O.split("\x26");for(O00O0O=(0xdc+1230-0x5aa);O00O0O<OO00O0.length;O00O0O++){var OOO0O0=OO00O0[O00O0O].split("\x3d");if(OOO0O0.length==(0x83d+4370-0x194d))O00OO(OOO0O0[(0x1240+5137-0x2651)],(self.decodeURIComponent?decodeURIComponent(OOO0O0[(0xa7d+3816-0x1964)]):unescape(OOO0O0[(0xd8f+2979-0x1931)])));}};function O0O0OO(O000O){O00OO("\x65\x74\x73",O000O00());OOOOO0O(O000O);return true;};function O00OO0O(OOOOO,O000O,O000OO){var O0OOO;if(!OOOOO||!OOOOO.href)return true;if(LnkLck)return false;LnkLck=OOOOO;if(OO000.lc)O00OO("\x6c\x63",OOOOO.href);if(OO000.rf){if(!O0OO000||!top||!top.document)O00OO("\x72\x66",document.location);}O0O0OO(O000O);if(O000OO)O0OOO=O000OO;else O0OOO=NTPT_MAXTAGWAIT;if(O0OOO>(0x659+6874-0x2133)){var OOOOOO;if(OOOOO.click){OOOOO.tmpclck=OOOOO.onclick;OOOOO.onclick=null;OOOOOO="\x69\x66\x20\x28\x20\x4c\x6e\x6b\x4c\x63\x6b\x20\x29\x20\x7b\x20\x4c\x6e\x6b\x4c\x63\x6b\x2e\x63\x6c\x69\x63\x6b\x28\x29\x3b\x20\x4c\x6e\x6b\x4c\x63\x6b\x2e\x6f\x6e\x63\x6c\x69\x63\x6b\x20\x3d\x20\x4c\x6e\x6b\x4c\x63\x6b\x2e\x74\x6d\x70\x63\x6c\x63\x6b\x3b\x20\x4c\x6e\x6b\x4c\x63\x6b\x20\x3d\x20\x6e\x75\x6c\x6c\x3b\x20\x7d";}else OOOOOO="\x69\x66\x20\x28\x20\x4c\x6e\x6b\x4c\x63\x6b\x20\x29\x20\x7b\x20\x77\x69\x6e\x64\x6f\x77\x2e\x6c\x6f\x63\x61\x74\x69\x6f\x6e\x2e\x68\x72\x65\x66\x20\x3d\x20\x22"+OOOOO.href+"\x22\x3b\x20\x4c\x6e\x6b\x4c\x63\x6b\x20\x3d\x20\x6e\x75\x6c\x6c\x3b\x20\x7d";OO0O0OO(O0000,OOOOOO,O0OOO);return false;}LnkLck=null;return true;};function O000OO0(OO0OOO,O000O,O000OO){var O0OOO;if(!OO0OOO||!OO0OOO.submit)return true;if(FrmLck)return false;FrmLck=OO0OOO;O0O0OO(O000O);if(O000OO)O0OOO=O000OO;else O0OOO=NTPT_MAXTAGWAIT;if(O0OOO>(0x1497+4406-0x25cd)){OO0OOO.tmpsbmt=OO0OOO.onsubmit;OO0OOO.onsubmit=null;OO0O0OO(O0000,"\x69\x66\x20\x28\x20\x46\x72\x6d\x4c\x63\x6b\x20\x29\x20\x7b\x20\x46\x72\x6d\x4c\x63\x6b\x2e\x73\x75\x62\x6d\x69\x74\x28\x29\x3b\x20\x46\x72\x6d\x4c\x63\x6b\x2e\x6f\x6e\x73\x75\x62\x6d\x69\x74\x20\x3d\x20\x46\x72\x6d\x4c\x63\x6b\x2e\x74\x6d\x70\x73\x62\x6d\x74\x3b\x20\x46\x72\x6d\x4c\x63\x6b\x20\x3d\x20\x6e\x75\x6c\x6c\x3b\x20\x7d",O0OOO);return false;}FrmLck=null;return true;};var O0000OO=NTPT_IMGSRC;var OO000=NTPT_FLDS;var O00OO0=OO0OO("\x4e\x54\x50\x54\x5f\x47\x4c\x42\x4c\x43\x4f\x4f\x4b\x49\x45\x53",null);var OOOO0O=OO0OO("\x4e\x54\x50\x54\x5f\x50\x47\x43\x4f\x4f\x4b\x49\x45\x53",null);var OOO00O0=OO0OO("\x4e\x54\x50\x54\x5f\x53\x45\x54\x5f\x49\x44\x43\x4f\x4f\x4b\x49\x45",false);var OO0OO0=OO0OO("\x4e\x54\x50\x54\x5f\x49\x44\x43\x4f\x4f\x4b\x49\x45\x5f\x4e\x41\x4d\x45","\x53\x61\x6e\x65\x49\x44");var OO00O00=OO0OO("\x4e\x54\x50\x54\x5f\x49\x44\x43\x4f\x4f\x4b\x49\x45\x5f\x44\x4f\x4d\x41\x49\x4e",null);var OO0OOOO=OO0OO("\x4e\x54\x50\x54\x5f\x49\x44\x43\x4f\x4f\x4b\x49\x45\x5f\x45\x58\x50\x49\x52\x45",155520000);var O00O00O=OO0OO("\x4e\x54\x50\x54\x5f\x48\x54\x54\x50\x53\x49\x4d\x47\x53\x52\x43",'');var O0OO000=OO0OO("\x4e\x54\x50\x54\x5f\x50\x47\x52\x45\x46\x54\x4f\x50",OO0OO("\x4e\x54\x50\x54\x5f\x47\x4c\x42\x4c\x52\x45\x46\x54\x4f\x50",false));var OO00000=OO0OO("\x4e\x54\x50\x54\x5f\x4e\x4f\x49\x4e\x49\x54\x49\x41\x4c\x54\x41\x47",false);var ntptAddPair=O00OO;var ntptDropPair=O0OO0O0;var ntptEventTag=O0O0OO;var ntptLinkTag=O00OO0O;var ntptSubmitTag=O000OO0;var OOO00=new Array();var OOOOO0=new Object();var OOOO0=Array((0x317+3540-0x10e1));var O0000;for(O0000=(0x1584+3590-0x238a);O0000<OOOO0.length;O0000++)OOOO0[O0000]=null;var LnkLck=null;var FrmLck=null;O00OO("\x6a\x73","\x31");O00OO("\x74\x73",O000O00());if(OO000.lc)O00OO("\x6c\x63",document.location);if(OO000.rf){var OOO0OO;if(O0OO000&&top&&top.document)OOO0OO=top.document.referrer;else OOO0OO=document.referrer;O00OO("\x72\x66",OOO0OO);}if(self.screen){if(OO000.rs)O00OO("\x72\x73",self.screen.width+"\x78"+self.screen.height);if(OO000.cd)O00OO("\x63\x64",self.screen.colorDepth);}if(OO000.ln){var OOO0O;if(navigator.language)OOO0O=navigator.language;else if(navigator.userLanguage)OOO0O=navigator.userLanguage;else OOO0O='';if(OOO0O.length>(0x462+2203-0xcfb))OOO0O=OOO0O.substring((0xe45+3555-0x1c28),(0x186+8395-0x224f));OOO0O=OOO0O.toLowerCase();O00OO("\x6c\x6e",OOO0O);}if(OO000.tz){var OO0O0;var O0O00O=new Date();var O0O00=O0O00O.getTimezoneOffset();var O0OO00;OO0O0="\x47\x4d\x54";if(O0O00!=(0x1214+4348-0x2310)){if(O0O00>(0x773+6772-0x21e7))OO0O0+="\x20\x2d";else OO0O0+="\x20\x2b";O0O00=Math.abs(O0O00);O0OO00=Math.floor(O0O00/(0x878+3391-0x157b));O0O00-=O0OO00*(0xc3b+4046-0x1bcd);if(O0OO00<(0x13e6+969-0x17a5))OO0O0+="\x30";OO0O0+=O0OO00+"\x3a";if(O0O00<(0xba1+208-0xc67))OO0O0+="\x30";OO0O0+=O0O00;}O00OO("\x74\x7a",OO0O0);}if(OO000.jv){var O0000O;if(navigator.javaEnabled())O0000O="\x31";else O0000O="\x30";O00OO("\x6a\x76",O0000O);}var O0OO0=new Array();var O00O0OO=false;if(OO000.ck){var O0O0O0;var O00O0,O0OOO0;if(O00OO0){for(O0O0O0=(0x87a+7306-0x2504);O0O0O0<O00OO0.length;O0O0O0++){O0OO0[O00OO0[O0O0O0]]="";};}if(OOOO0O){for(O0O0O0=(0x1b2a+931-0x1ecd);O0O0O0<OOOO0O.length;O0O0O0++){O0OO0[OOOO0O[O0O0O0]]="";};}for(OO00O in O0OO0){O00O0=OOOO00(OO00O);if(O00O0){O0OO0[OO00O]=O00O0;};}if(OOO00O0){O00O0=OOOO00(OO0OO0);if(O00O0){O0OO0[OO0OO0]=O00O0;O00O0OO=true;};}O0OOO0=O00000O(O0OO0);if(O0OOO0!="")O00OO("\x63\x6b",O0OOO0);}O000000();if(!OO00000)OOOOO0O('');if(OOO00O0&&!O00O0OO){var O00O0=OOOO00(OO0OO0);if(!O00O0){O00O0=O0O000O();OOOO000(OO0OO0,O00O0,OO0OOOO,OO00O00);if(OO000.ck&&OOOO00(OO0OO0)){O0OO0[OO0OO0]=O00O0;var O0OOO0=O00000O(O0OO0);if(O0OOO0!=""){O00OO("\x63\x6b",O0OOO0);O000000();};};};}
