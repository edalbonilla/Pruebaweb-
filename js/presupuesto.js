function init () {
	// body...
	//prompt() permite obtener entrada de datos del usuario
	var presupuesto = prompt('Ingrese el presupuesto anual','');
	var derma, trauma, pedia, i;
	var div = document.getElementById('distribucion');

	//REalizado los calculos para distribucion del presupuesto	
	derma = presupuesto * 0.40;
	trauma = presupuesto*0.35;
	pedia = presupuesto*0.25;
	//creando el código qie se insertara dentro del elemnto div=distribucion
	var html = "<ul>\n\t<li>\n";
	html += "\t\t <a href='#' class='move-right'>\n";
	html += "\t\t\tEl presupuesto asignado para Ginecología es $ "+ derma + "\n" ;
	html += "\t\t</a>\n";
	html += "\t</li>\n";

	html += "\t\t <a href='#' class='move-right'>\n";
	html += "\t\t\tEl presupuesto asignado para Traumatología es $ "+ trauma + "\n" ;
	html += "\t\t</a>\n";
	html += "\t</li>\n";

	html += "\t\t <a href='#' class='move-right'>\n";
	html += "\n\t\t\tEl presupuesto asignado para Pediatría es $ "+ pedia + "\n" ;
	html += "\t\t</a>\n";
	html += "\t</li>\n";

	html +="</ul>\n";

	//insertado dentro del elemento div el codigo asignado en la variable 
	div.innerHTML = html;
	//Hacer referencia a los elementos h1 dentro de la pagina web 
	var links=document.getElementsByTagName('a');
	//REcorrer todos los elementos a y asignar el manejador de evento
	//mediante una funcion anónima

	for (i = 0; i < links.length; i++) {
		links[i].onmouseover = function () {
			// body...
			this.className = 'move-right-hover';
		}
		links[i].onmouseout = function  () {
			// body...
			this.className = 'move-right';
		}
	};


}
window.onload = init;