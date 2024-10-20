!if $wims_read_parm!=$empty
  !goto $wims_read_parm
!endif

:general
<h2 id="general">Introducci�n</h2>

<p>
Una hoja permite proponer a los estudiantes una actividad con nota compuesta por una lista de ejercicios WIMS.
</p>
<div>
El servidor registra un cierto n�mero de datos sobre el trabajo
efectuado por un participante en los ejercicios de una hoja permitiendo
al profesor seguir las actividades de los participantes:
<ul><li>fecha en la cual un estudiante abre el enunciado de un ejercicio de la hoja,
</li><li> fecha en la cual ingresa sus respuestas,
</li><li>su puntuaci�n en el ejercicio.
</li></ul>
<p>
La nota de la hoja se calcula a partir de las puntuaciones obtenidas en cada intento
de realizaci�n de los ejercicios de la hoja. Por defecto, esta nota se calcula entre 0 y 10.
</p>
</div>
<div>
Por omisi�n, un estudiante puede:
<ul><li>hacer de nuevo un mismo ejercicio de la hoja tantas veces como quiera;
</li><li>
trabajar en los ejercicios de una hoja en el orden que quiera;
</li><li>optar por trabajar en una hoja sin que las puntuaciones obtenidas se tomen en cuenta en la nota de la hoja.
</li></ul>
</div>
<div>
De forma predeterminada, el tiempo durante el cual un
 estudiante puede responder a un ejercicio desde el
 momento en que hace clic para obtener una declaraci�n
 solo est� limitado por la duraci�n m�xima de una
 sesi�n (la duraci�n m�xima de una sesi�n sin actividad
 la establece el administrador del servidor en $idle_time minutos).
</div>
<div style="margin-top:1em">
Para formar las hojas de su clase, podemos
<ul><li>
importar hojas que encuentre gracias al motor de b�squeda (haga clic en
el t�tulo de la hoja y luego en el enlace
<span class="tt wims_code_words">$wims_name_import</span>)
y luego modificarla si as� lo estima conveniente;
</li><li>
crear una nueva hoja a partir de un enlace
<span class="tt wims_code_words">$wims_name_add_sheet</span> en la p�gina de inicio
de la clase,
luego construir el contenido de la hoja a�adiendo
los ejercicios encontrados a trav�s del motor de b�squeda o entre los ejercicios
de su clase; (el enlace <span class="tt wims_code_words">$wims_name_add</span>
se hace visible cuando trabajamos en el enunciado de un ejercicio,
el enlace <span class="tt wims_code_words">$wims_name_addallexo</span>
se hace visible en la p�gina de introducci�n de ciertos m�dulos de ejercicios);
</li><li>
crear una nueva hoja a partir de ejercicios de un documento
publicado en el servidor (la creaci�n de una hoja se propone al momento
de la inserci�n de un documento en la clase).
</li></ul>
Una vez creada la hoja, tambi�n es posible a�adir un c�digo fuente de una
lista de ejercicios encontrada por ejemplo en un documento wims.
</div>
<p>
A cada ejercicio de la hoja, el profesor puede asociar una ayuda que puede ser
un enlace hacia un documento o un ejercicio WIMS que ser� propuesto al estudiante cuando su puntuaci�n
en un intento del ejercicio sea estrictamente menor a un valor escogido.
Puede definir dependencias con otros ejercicios de una hoja de modo de hacer visibles
ciertos ejercicios solo cuando el estudiante haya obtenido suficiente puntuaci�n en el ejercicio.
</p><p>
Las hojas son numeradas en el orden de su creaci�n/inserci�n en la clase.
Es posible reorganizar la presentaci�n de las hojas a los estudiantes usando
el enlace <span class="tt wims_code_words">$wims_name_reorder</span>.
</p>

!if $wims_read_parm!=$empty
  !exit
!endif

:statut
<h2 id="statut">Estado de una hoja</h2>
Una hoja puede tener cuatro estados:
<span class="wims_code_variable">
!replace internal , by ,$ $ in $(wims_name_shstatus).
</span>
<p>
<span class="wims_code_variable">$(wims_name_shstatus[1]) :</span>
es el estado inicial de una hoja. En este estado, la hoja no es
visible para los estudiantes.
</p><p>
<span class="wims_code_variable">$(wims_name_shstatus[2]) :</span>
cuando se hace clic en
<span class="tt wims_code_words">$(wims_name_actionlist[1])</span>,
la hoja se vuelve visible para los estudiantes (ellos(as) podr�n trabajar
en los ejercicios si ning�n par�metro en el campo
<span class="tt wims_code_words">$(name_shinfo[6])</span>
lo impide), su contenido
ya no se puede modificar excepto los t�tulos y los textos de explicaci�n de la hoja y
los ejercicios, el campo
<span class="tt wims_code_words">$(name_shinfo[6])</span> y
los campos
<span class="tt wims_code_words">$wims_name_feedbackexo</span> de los ejercicios.
</p><p>
Del estado
<span class="tt wims_code_words">$(wims_name_shstatus[2])</span>,
la hoja puede pasar al estado
<span class="tt wims_code_words">$(wims_name_shstatus[3])</span>
 haciendo clic en el bot�n
 <span class="tt wims_code_words">$(wims_name_actionlist[2])</span>.
No se puede volver al estado
<span class="tt wims_code_words">$(wims_name_shstatus[1])</span>.
</p><p>
<span class="wims_code_variable">$(wims_name_shstatus[3]) :</span>
el estudiante puede trabajar en la hoja pero su trabajo no se contabiliza.
</p><p>
Una vez que la hoja expira, se puede hacer invisible a los estudiantes haciendo clic en
<span class="tt wims_code_words">$(wims_name_actionlist[4])</span>,
pero tambi�n se puede volver a colocarla en el estado
<span class="tt wims_code_words">$(wims_name_shstatus[2])</span>.
 </p>
!if $wims_read_parm!=$empty
  !exit
!endif

:allowtype
<h2 id="allowtype">Configuraci�n del registro de notas.</h2>

Usted puede imponer una restricci�n, por ejemplo en el tiempo,
en el que se registrar�n las notas. Hay varias opciones disponibles:
<ul>
 <li><span class="tt wims_code_words">$(name_allowtype[1])</span> :
las notas ser�n registradas.</li>
 <li><span class="tt wims_code_words">$(name_allowtype[2])</span> :
ninguna nota ser� registrada.</li>
 <li><span class="tt wims_code_words">$(name_allowtype[3])</span> :
una interfaz de entrada,
<span class="tt wims_code_words">$(name_shinfo[6])</span>,
aparece y usted puede indicar un rango horario as� como tambi�n
las direcciones IP desde las cuales se registrar�n las notas.
Esta restricci�n se escribe con la ayuda de una expresi�n de tres partes (que pueden
 no estar presentes): <br>
 <ul>
  <li>Una fecha y hora de inicio;</li>
  <li>Una fecha y hora de t�rmino;</li>
  <li>Un rango de IP;</li>
 </ul>
Las fechas (formato <span class="tt wims_code_words">aaaammjj</span>) y las horas
(formato <span class="tt wims_code_words">hh:mm</span>) deben estar indicadas en tiempo local del SERVIDOR.
 <p>
Ejemplo:
$wims_name_form <span class="tt wims_code_words">20131007</span> $wims_name_at <span class="tt wims_code_words">10:30</span> $wims_name_to <span class="tt wims_code_words">20131001</span> $wims_name_at <span class="tt wims_code_words">10:00</span> $wims_name_IP<span class="tt wims_code_words"> 127.0.</span> <br>
permite registrar notas entre 2 fechas y solamente para los n�meros IP que comiencen
por <span class="tt wims_code_words">127.0.</span>.
</p>
</li><li><span class="tt wims_code_words">$(name_allowtype[4])</span> :
esta opci�n puede ser escogida para individualizar las restricciones
de acceso con la ayuda de una <span class="tt wims_code_words">variable
t�cnica</span> (esta variable t�cnica est� definida para cada
participante, sea manualmente usando el m�dulo de gesti�n de
variables t�cnicas, o sea con la ayuda de un
<span class="tt wims_code_words">$wims_name_Vote</span>).
Cuando se escoja esta opci�n, un men� permite elegir la variable
 t�cnica que servir� para diferenciar y una tabla permite
efectuar ajustes del filtro (usando el mismo formato
anterior) para cada valor posible de la variable.
No indicar nada en el filtro para un valor de la variable t�cnica significa
no abrir el registro de notas para los participantes que posean este valor.
<p>
En el caso de una variable t�cnica definida con la ayuda de un modelo
<span class="tt wims_code_words">Acceso personalizado</span>
de un <span class="tt wims_code_words">$wims_name_Vote</span>
espec�fico para la creaci�n de reserva de intervalo horario,
la tabla ya est� prellenada con los datos propuestos cuando el cuestionario
 fue creado. Estos datos pueden ser modificados,
pero las modificaciones no afectan el cuestionario.
</p>
<p>Ejemplo: Supongamos que la tabla que describe los filtros para la variable t�cnica
<span class="tt wims_code_variable">grupo</span>, que toma los valores 1, 2 y 3, es:
!readproc slib/text/matrixhtml [$name_value,$name_filtre\
$name_EMPTY, 129.50.10. &#62;20160915.12&#58;00\
1,&#62;20160915.15&#58;00 &#60;20160925.12&#58;00\
2,\
3,127.0.],wimscenter wimsborder wimstable,TH=[1;]
$slib_out
</p>
En el l�mite de la fecha de expiraci�n de la hoja,
<ul><li>
para los estudiantes cuyo
<span class="tt wims_code_variable">grupo</span> no tiene valor,
el registro de notas se abre a partir de
15/09/2016 12h y solamente en los puestos cuyas IP comiencen por
129.50.10.
</li><li>
para los estudiantes cuyo <span class="tt wims_code_variable">grupo=1</span>,
el registro de notas estar� abierto entre 15/09/2016 15h y 25/09/2016 12h.
</li><li>
para los estudiantes
con <span class="tt wims_code_variable">grupo=2</span>, el registro de notas no se abrir�.
</li><li>
para los estudiantes con
<span class="tt wims_code_variable">grupo=3</span>,
el registro de notas estar� abierto solamente para puestos
cuya IP comience por 127.0.
</li></ul>
</li>
<li>Ces r�glages peuvent �tre propag�s :
<ul>
  <li>Dans un groupement, pour des classes en partage � partir de la classe ayant initi� le partage et en utilisant une variable technique provenant du groupement.</li>
  <li>Dans un portail, � partir d'un programme vers les cours en utilisant une variable technique provenant du portail ou du niveau.</li>
</ul>
</li>
</ul>

!if $tv_listtechvar!=$empty
 Las variables t�cnicas actualmente disponibles en su clase son:
 !read adm/vfilter/listvar.phtml
!else
<div class="wims_msg info">
Actualmente no hay ninguna variable t�cnica definida en su
clase. Si usted quiere usar esta opci�n, tendr� que
definir una variable t�cnica.
</div>
!endif
!if $wims_read_parm!=$empty
  !exit
!endif

:variable
<p>
Para individualizar las restricciones de acceso, es posible ingresar
una variable (en el ejemplo abajo, ingresar
<span class="tt wims_code_words">\timelimit</span>).
Esta variable debe entonces estar definida para cada participante seg�n
las reglas precedentes, o manualmente en las propiedades de
la cuenta de un participante (variable t�cnica).
</p><p>
Ejemplo: ingresar
<span class="tt wims_code_words">timelimit=&lt;20131007.10:30 &gt;20131001.10:00</span>
en el campo <span class="tt wims_code_words">variable t�cnica</span>
de las propiedades de cuenta de un estudiante.
Para los participantes que tengan esta variable t�cnica vac�a,
el registro de notas estar� cerrado.
</p><p>
Es posible a�adir esta variable con la hoja de c�lculo.
Si la restricci�n es una elecci�n del participante (inscripci�n seg�n
ciertas fechas por ejemplo), es posible crear y usar
un cuestionario en modo guiado (mirar la ayuda correspondiente).
</p>
!!if $wims_read_parm!=$empty
!exit
!!endif

:dependancies
<h2 id="dependancies">$(name_shtab[6])</h2>
<p>
Si agregamos una dependencia de puntuaciones en un ejercicio, un participante debe
primero lograr suficientes puntos en otros ejercicios de la hoja. </p>
El campo <span class="tt wims_code_words">$(name_shtab[6])</span>
de un ejercicio permite indicar los puntos que debe obtener un participante
en otros ejercicios de la hoja antes de poder trabajar en este.
Por ejemplo, colocar <span class="tt wims_code_words">1:50,2:30,3+4+5:60</span>
en el ejercicio 6 significa que el participante debe tener un �xito de 50% en
el ejercicio 1, 30% en el ejercicio 2, y una media de �xito de 60% en
 los ejercicios 3, 4, 5 para poder hacer el ejercicio 6.
</p>

!if $wims_read_parm!=$empty
  !exit
!endif

:feedback
<h2 id="feedback">$(name_shtab[10])</h2>

Podemos indicar en este campo un enlace a un documento de WIMS
o un ejercicio de WIMS. El enlace a este recurso aparecer� cuando el puntaje sea
estrictamente menor a una nota fijada (entre 0 y 10).
El segundo elemento es la nota l�mite (entre 0 y 10), el primer elemento es la direcci�n en la siguiente forma (forma abreviada):
<ul><li>
Ejercicio de un m�dulo o documento p�blico:
<span class="tt wims_address">module=xxx</span>
(como en <span class="wims_button disabled">$wims_name_about</span>).
</li><li>
Ejercicio de la clase:
<span class="tt wims_address">module=classes/fr&exo=_nom_fichier_</span>
o <span class="tt">_nom_fichier_</span> es el nombre del archivo del ejercicio
(sin la extensi�n <span class="tt">.oef</span>).
</li><li>
Documento de la clase:
<span class="tt wims_address">module=adm/doc&doc=c1&+block=_nom_bloc</span>
</li><li>
Glose du glossaire g�n�ral
<span class="tt wims_address">module=adm/tool/glossary&special_parm=_nom_glose</span>
(par exemple, _nom_glose est mathematics/algebra/fr/affixe).
</li></ul>
Los siguientes elementos son la puntuaci�n m�xima y la puntuaci�n m�nima (por defecto 0)
para que aparezca el enlace (los tres elementos deben estar en la misma l�nea).
Por ejemplo, en el caso siguiente, si la nota es menor a
5, el estudiante ser� dirigido al documento <span class="tt">c2</span>
de la clase, m�s precisamente
a la p�gina correspondiente al bloque
<span class="tt">aaa</span> de este documento.
<pre>module=adm/doc&doc=c2&+block=aaa,5</pre>
En el siguiente ejemplo, habr� un
enlace a un ejercicio del m�dulo <span class="tt wims_fname">H6/set/oefset.fr</span>
cuyo c�digo fuente tiene por nombre <span class="tt">traduction1</span>
(la nota que el estudiante obtenga en este ejercicio no ser� registrada en
la clase).
<pre>module=H6/set/oefset.fr&cmd=new&exo=traduction1,10</pre>

Ingresando dos n�meros (donde el segundo es estrictamente positivo), el bot�n
aparece cuando el puntaje se ubica entre el segundo
n�mero y el primer n�mero: por ejemplo, si ingresa
<pre>module=H6/set/oefset.fr&cmd=new&exo=traduction1,11,10</pre>
el bot�n aparece cuando el puntaje es de 10 y es la palabra
$wims_name_feedbackplus que aparece. Si el segundo n�mero es 0,
el sistema se comporta como si no lo hubiese ingresado.

Es posible definir varios enlaces correspondientes a
diferentes rangos de notas (por el momento, sin verificaci�n
por software).

<pre>module=H6/set/oefset.fr&cmd=new&exo=traduction1,10,5
module=adm/doc&doc=c2&+block=aaa,5,4
</pre>

Usted tambi�n puede insertar un enlace de ayuda en la hoja
seleccionando primero un recurso WIMS y haciendo clic en el enlace
<span class="wims_button disabled">$wims_name_addh</span>
en el men� de la izquierda. Sin embargo, es aconsejable comprobar despu�s de
haber insertado todos los enlaces la compatibilidad de los rangos de notas.

!exit

:series
<p>
En general, los ejercicios de una serie son mostrados aleatoriamente
y al menos un ejercicio de cada tipo es presentado si el n�mero
pedido lo permite.
</p><p>
En la configuraci�n experta usted pidi� que el orden no sea
aleatorio,
aqu� puede cambiar el orden de los ejercicios de una serie.
</p>
!exit

:score
!changeto adm/lang/help.score.es

:exotrymax
<h2 id="exotrymax">M�ximo n�mero de intentos contabilizados</h2>
Par�metro que permite establecer el n�mero m�ximo <span class="tt">n</span>
de intentos contabilizados en el c�lculo de notas mientras que el registro de notas
de la hoja est� abierto.
<p>
Deje el campo vac�o si no desea colocar un n�mero m�ximo de intentos contabilizados.
</p>
<p>
<strong>Intento</strong>: el trabajo en una serie de ejercicios se considera como un intento o ensayo
independientemente si se entreg� una respuesta o no o si el registro de notas estaba abierto o no.
</p>
Si usted ingresa un entero positivo <span class="tt">n</span>
<ul><li>
trabajar en el ejercicio es siempre posible, incluso despu�s que este n�mero se alcance;
</li><li>
el contador del n�mero de intentos solo se incrementa cuando el registro
de notas de la hoja se encuentra abierto por el profesor;
</li><li>
el c�lculo de las notas solo toma en cuenta las puntuaciones de los primeros <span class="tt">n</span>
 intentos (realizados cuando el registro de notas haya sido activado). En consecuencia, el n�mero de puntos
requeridos en un ejercicio no debe superar <span class="tt">10 x n,</span> pues es el n�mero m�ximo
de puntos que un participante podr� obtener en el ejercicio.
</li></ul>
!exit

:weight
!changeto adm/lang/weight.es
!exit

:weightexo
!set wims_backslash_insmath=yes
<h2 id="weightexo">Peso de un ejercicio en la hoja</h2>
El peso del ejercicio en la hoja influye en el c�lculo de los tres
 indicadores del trabajo de la hoja - <span class="wims_code_variable">$(wims_name_thsheet[5]),
$(wims_name_thsheet[10]), $(wims_name_thsheet[13])</span> -
y en c�lculo de la nota <span class="wims_code_variable">$(wims_name_thsheet[7])</span> de la hoja.
<ul><li>
El valor del indicador <span class="wims_code_variable">$(wims_name_thsheet[5])</span>
es una media ponderada del indicador
de acumulaci�n de cada ejercicio de la hoja, usando como coeficiente de ponderaci�n el producto del peso
del ejercicio en la hoja por el n�mero de puntos requeridos. La regla es an�loga para el c�lculo de los
 valores de <span class="wims_code_variable">$(wims_name_thsheet[10])</span>
 y <span class="wims_code_variable">$(wims_name_thsheet[13])</span>.
 </li><li>
La nota <span class="wims_code_variable">$(wims_name_thsheet[7])</span>
 de la hoja es una media ponderada de la nota de calidad
obtenida en cada ejercicio usando como coeficiente de ponderaci�n el producto
del peso del ejercicio por el indicador de acumulaci�n obtenido en ese ejercicio.
</li></ul>
<p>
Coloque el peso 0 si usted no desea que las puntuaciones en este ejercicio
sean contabilizadas.
</p>
Ejemplo: la tabla describe los resultados obtenidos por un participante en
una hoja de 3 ejercicios:
$table_header
  <thead>
  $table_hdtr
    <th scope="col" data-sort-method="number">$(wims_name_thsheet[1])</th>
    <th scope="col">$(wims_name_thsheet[2])</th>
    <th scope="col" data-sort-method="number">$(wims_name_thsheet[3])</th>
    <th scope="col" data-sort-method="number">$(wims_name_thsheet[4])</th>
  !!qualite
    <th scope="col" data-sort-method="number">$(wims_name_thsheet[7])</th>
    <th scope="col" data-sort-method="number">$(wims_name_thsheet[5])</th>
  </tr>
  </thead>
  <tbody>
<tr><td> 1 </td><td>Exo 1</td><td>20</td><td>2</td><td>5.5</td><td>60%</td></tr>
<tr><td> 2 </td><td>Exo 2</td><td>10</td><td>3</td><td>6.5</td><td>25%</td></tr>
<tr><td> 3 </td><td>Exo 3</td><td>10</td><td>0</td><td>8.5</td><td>100%</td></tr>
  </tbody>
$table_end
<ul><li>La nota $(wims_name_thsheet[5]) en la hoja se calcula como
\(\frac{2\times 20 \times 60 + 3 \times 10 \times 80 + 0}{2\times 20 + 3 \times 10}\% = 68.57\%\)
</li><li>
La nota $(wims_name_thsheet[7]) en la hoja se calcula como
\(\frac{2\times 60 \times 5.5 + 3 \times 80 \times 6.5 + 0}{2\times 60 + 3 \times 80} = 6.17\)
</li></ul>
!if $wims_read_parm!=$empty
  !exit
!endif

:exodescshow
<h2 id="statut">$(name_shinfo[13])</h2>
Si usted marca <span class="tt">$wims_name_yes</span>, la descripci�n del ejercicio
aparecer� en el encabezado del ejercicio y no solo en la lista de ejercicios
de la hoja.
!if $wims_read_parm!=$empty
  !exit
!endif

:indivtechvar
<h2 id="statut">$name_individualisation</h2>
La opci�n <span class="wims_code_words">$name_desc_indivtechvar</span>
le permite indicar una variable t�cnica que se utilizar� para seleccionar ciertos
ejercicios en la hoja para cada valor de la variable t�cnica:
esto permite ofrecer diferentes versiones de la hoja a grupos de participantes.
<p>
El participante ve la versi�n de la hoja correspondiente al valor de la variable
 t�cnica que se le asigna. Los participantes cuya variable t�cnica no haya sido
 asignada ver�n todos los ejercicios en la hoja de trabajo. <br>
Nota: El participante ver� el nombre de la variable t�cnica seguido de su valor
debajo del t�tulo de la hoja y en la tabla que describe su trabajo en la hoja.
</p><p>
Las diferentes versiones de la hoja se crean en la pesta�a <span class="wims_code_words">$name_individualisation</span>
que aparece solo cuando se selecciona una variable t�cnica.
Entonces es posible seleccionar la serie de ejercicios presentes en cada versi�n de
la hoja y fijar los puntos y pesos asignados a esta serie de ejercicios.
<p><p class="wims_msg warning">
Esta opci�n es incompatible con las dependencias de puntuaci�n.
La variable t�cnica debe ser local.
</p><p class="wims_msg info">
!if $tv_listlocal!=$empty
Las variables t�cnicas locales actualmente disponibles en su clase son:
!read adm/vfilter/listvar.phtml local
!else
Actualmente no hay variables t�cnicas definidas en su clase.
Si desea utilizar esta opci�n, primero defina una variable t�cnica.
!endif
</p>
!if $wims_read_parm!=$empty
  !exit
!endif
