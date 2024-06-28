!read adm/title.phtml 3\
Explorar por tipo de recursos

Los tipos de recursos siguientes est�n disponibles en este servidor.

<ol class="wims_browse_type_list">
<li>
Calculadoras y generadoras de gr�ficas en l�nea:
entre otras, puede echar un vistazo a
 <ul class="wims_browse_type_list">
 <li>
  !set cat=T
  !reset key
  !href $search_addr Todas la herramientas en l�nea disponibles
  ordenadas por popularidad.
 </li><li>
  Calculadoras num�ricas:
  !set cat=P
  !set key=n�mero, complejo, ra�ces
  !href $search_addr calculadoras sencillas emergentes
  (simplificar, fracciones, conversiones, factorizaci�n, n�meros complejos, etc.) y
  varias
  !set cat=T
  !set key=n�mero, ra�ces
  !href $search_addr calculadoras especializadas
  (enteros, fracciones continuas, caracter�sticas positivas, etc.)
 </li><li>
  !set key=an�lisis, c�lculo, funciones
  !set cat=P
  !href $search_addr herramientas emergentes
  y
  !set cat=T
  !href $search_addr calculadoras
, para casi todo lo que desee averiguar en el c�lculo o las funciones:
  derivada, integral, l�mite, m�nimo/m�ximo, ra�ces, secuencias y series,
  transformaciones de Fourier y Laplace, etc.
 </li><li>
  !set cat=T
  !set key=�lgebra lineal
  !href $search_addr Calculadoras de �lgebra lineal
  $ : sistemas lineales, matrices, determinante,
  espacios vectoriales, etc.
 </li><li>
  !set cat=T
  !set key=plotter
  Varias trazadoras:
  !href $search_addr herramientas complejas
  a menudo con animaciones y ejemplos, o
  !set cat=P
  !href $search_addr trazadoras emergentes r�pidas
 para trazar curvas, superficies, secuencias/series...
 </li><li>
  !set cat=T
  !set key=estad�sticas, datos
  !href $search_addr Calculadoras estad�sticas
$ : medias y desviaciones, histograma, regresi�n...
 </li></ul></li><li>
Ejercicios interactivos: los ejercicios de WIMS son de varios estilos diferentes.
En particular, hay:
 <ul class="wims_browse_type_list">
  <li>
  !set cat=X
  !reset key
  !href $search_addr Todos los ejercicios disponibles
  clasificados por orden de popularidad.
  </li><li>
  !set key=opciones gr�ficas
  !href $search_addr Opciones gr�ficas
  presentan problemas por medio de im�genes al azar, y le piden que elija la
  imagen correcta.
  </li><li>
  !set key=tiro
  !href $search_addr Ejercicios de tiro
  le piden que pulse en la posici�n de un punto oculto, y le dan una
  puntuaci�n a sus respuestas seg�n la precisi�n de sus clicks.
  </li><li>
  !set key=dibujo
  !href $search_addr Ejercicios de dibujo
  le piden que dibuje una curva con el rat�n, y punt�an sus respuestas
  seg�n la precisi�n de sus curvas.
  </li><li>
  !set key=coincidencia
  !href $search_addr Ejercicios de coincidencia
  le presentan una imagen (una curva), y le piden que halle una expresi�n
  que genere esa imagen, normalmente permiti�ndole
   varios intentos.
   </li><li>
  !set key=deductio
  !href $search_addr Ejercicios Deductio
  que permiten deducciones y razonamientos interactivos.
  </li><li>
  !set key=di�logo
  !href $search_addr Ejercicios de di�logo
  en los cuales usted puede hacerle preguntas al servidor para resolver un problema.
  �Pero recibir� una penalizaci�n si hace
  preguntas in�tiles!
  </li><li>
  !set key=escenario
  !href $search_addr Ejercicios de escenario
  presentan un razonamiento aleatorio y posiblemente falso, y usted debe descubrir
  el paso incorrecto.
  </li><li>
  !set cat=O
  !reset key
  !href $search_addr Ejercicios OEF
  (Open Exercise Format, Formato Abierto de Ejercicios)
  son colecciones de ejercicios creados en l�nea. La preguntas pueden ser altamente
  aleatorias, y las respuestas pueden ser
  m�ltiples opciones, n�meros, funciones, etc.
  </li>
 </ul>
 Puede tambi�n examinar los ejercicios
 !href module=$module&cmd=new&job=subject por temas
.
</li><li>
Matem�ticas recreativas:
 !set cat=R
 !reset key
 !href $search_addr clasificadas por orden de popularidad
.
</li>
</ol>
