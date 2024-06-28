/***************************************************************************************
JSEditor est un produit developpe par Enev Zhelyaz <enevzhelyaz@gmail.com>
a l'occasion d'un stage pour le service TICE de l'universite Nice Sophia Antipolis http://tice.unice.fr
Il utilise textarea.2.0.0.RC1, base sur la librairie Prototype (http://livepipe.net/control/textarea )
*****************************************************************************************/

function include(fileName){
	document.write("<script type='text/javascript' src='scripts/js/editor/"+fileName+"'></script>" );
	/*var head = document.getElementsByTagName('head')[0];
	
	script = document.createElement('script');
	script.src = 'scripts/js/editor/'+fileName;
	script.type = 'text/javascript';
	
	head.appendChild(script);*/

}

if (version===null)
	var version = "fr";

var liste = "-";
var compter = 0;
var index = null;
var k = null;
var y = 0;
var instructionwims = "";
var chrono = null;
var chrono2 = null;

Nom_Browser = navigator.appName;
Version_Browser = navigator.appVersion;

include('names_'+version+'.js');
include('scripts_1/prototype.js');

/* NB : scriptaculous est un tres bon addon graphique pour Prototype : http://script.aculo.us/ 
textarea.2.0.0.RC1, base sur la librairie Prototype, permet d'afficher la barre d'outils du textarea -cf http://livepipe.net/control/textarea */

include('scripts_2/control.textarea.2.0.0.RC1.js');
include('scripts_2/control.textarea.markdown1.js');
/* gfcursor.js : Librairie de gestion du curseur dans un textearea  */
/* permet d'ajouter l'instruction selectionnee au niveau du curseur par exemple   */
include('scripts_2/gfcursor.js');

switch (Nom_Browser) {
 case "Netscape":
	include('scripts_2/fonctions_Mozilla.js');
	break;
 case "Microsoft Internet Explorer":
	include('scripts_2/fonctions_IE.js');
	break;
}