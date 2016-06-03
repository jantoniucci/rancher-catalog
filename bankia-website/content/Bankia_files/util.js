/**
 * Objeto con funciones de utilidad para utilizar en cualquier modulo del portal
 */
var util = {
	/**
	 * Convierte una cadena de caracteres a Unicode
	 *
	 * @param pstrString La cadena a convertir
	 */
	unicodeEscape: function(pstrString) {
		if (pstrString == "") {
			return "";
		}
		var iPos = 0;
		var strOut = "";
		var strChar;
		var strString = escape(pstrString);
		while (iPos < strString.length) {
			strChar = strString.substr(iPos, 1);
			if (strChar == "%") {
				strNextChar = strString.substr(iPos + 1, 1);
				if (strNextChar == "u") {
					strOut += strString.substr(iPos, 6);
					iPos += 6;
				} else {
					strOut += "%u00" +
					strString.substr(iPos + 1, 2);
					iPos += 3;
				}
			} else {
				strOut += strChar;
				iPos++;
			}
		}
		return strOut;
	},

	/**
	 * Inicializa la secuencia de combos relacionados entre sí
	 * 
	 * @param aIdComboOrigen array con los id del combo origen
	 * @param aIdComboDestino array con los id del combo destino
	 * @param aIdRelacion array con los identificadores de las relaciones
	 * @param aCampoTextoDefecto array con los textos por defecto
	 */
	inicializarCombos: function(aIdComboOrigen, aIdComboDestino, aIdRelacion, aCampoTextoDefecto) {
		var idComboOrigen;
		var idComboDestino;
		var idRelacion;
		var campoTextoDefecto;
		for (var i = 0; i < aIdComboOrigen.length; i++) {
			idComboOrigen = aIdComboOrigen[i];
			idComboDestino = aIdComboDestino[i];
			idRelacion = aIdRelacion[i];
			campoTextoDefecto = aCampoTextoDefecto[i];
			if (i==0) util.recargarCombosDependientes(idComboOrigen, idComboDestino, idRelacion, campoTextoDefecto);
			$("#" + idComboOrigen).bind("change", {idComboOrigen: idComboOrigen, idComboDestino: idComboDestino, idRelacion: idRelacion, campoTextoDefecto: campoTextoDefecto}, function(event) {
				util.recargarCombosDependientes(event.data.idComboOrigen, event.data.idComboDestino, event.data.idRelacion, event.data.campoTextoDefecto);
			});
		}
	},

	/**
	 * Carga un combo sin dependencias de otro
	 * 
	 * @param idCombo identificador del combo
	 * @param idRelacion identificador de la relacion
	 * @param textoSeleccione texto campo seleccione
	 */
	cargarCombo: function(idCombo, idRelacion, textoSeleccione) {
		if ($("#" + idCombo) != null) {
			$.ajax({
				type: "POST",
				url: contextoPortal + codigoIdioma + '/cargarComboAjax.do',
				data: {idRelacion: idRelacion, idCondicion: 0}, 
				dataType: 'json',
				success : function(jsonArray) {
					util.recargarOpcionesCombo("select#" + idCombo, jsonArray, textoSeleccione);
				}
			});
		}
	},

	
	/**
	 * Recarga combos dependientes
	 * 
	 * @param idComboOrigen identificador del combo "padre"
	 * @param idComboDestino identificador del combo a recargar
	 * @param idRelacion identificador de la relacion
	 * @param textoSeleccione texto campo seleccione
	 */
	recargarCombosDependientes: function(idComboOrigen, idComboDestino, idRelacion, textoSeleccione) {
		if ($("#" + idComboOrigen) != null) {
			var idRegistro = $("#" + idComboOrigen).val();
			$.ajax({
				type: "POST",
				url: contextoPortal + codigoIdioma + '/cargarComboAjax.do',
				data: {idRelacion: idRelacion, idCondicion: idRegistro}, 
				dataType: 'json',
				success : function(jsonArray) {
					util.recargarOpcionesCombo("select#" + idComboDestino, jsonArray, textoSeleccione);
				}
			});
		}
	},

	/**
	 * Recarga las opciones del combo destino con el resultado de la llamada ajax
	 * 
	 * @param comboDestino combo destino
	 * @param jsonArray array json  
	 * @param textoSeleccione texto campo seleccione
	 */
	recargarOpcionesCombo: function(comboDestino, jsonArray, textoSeleccione) {
		var opcionSeleccionada = $(comboDestino).val();	
		var agrupacionOld = '';
		var options = '<option value="0">' + textoSeleccione + '</option>';
		for (var i = 0; i < jsonArray.length; i++) {
			if ((jsonArray[i].optgroup != null) && (jsonArray[i].optgroup != '') && (jsonArray[i].optgroup != agrupacionOld)) {
				if (i != 0) {
					 options += '</optgroup>';
				}
				options += '<optgroup label="'+ jsonArray[i].optgroup + '">';
				agrupacionOld = jsonArray[i].optgroup;
			}		
			if ((opcionSeleccionada != null) && (opcionSeleccionada != '') && (opcionSeleccionada == jsonArray[i].value)){
				options += '<option selected="selected" value="' + jsonArray[i].value + '">' + jsonArray[i].label + '</option>';
			} else {
				options += '<option value="' + jsonArray[i].value + '">' + jsonArray[i].label + '</option>';
			}
		}
		$(comboDestino).html(options);
		$(comboDestino).trigger("change");
	}
};