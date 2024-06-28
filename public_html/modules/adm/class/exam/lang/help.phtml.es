!if $wims_read_parm!=$empty
  !goto $wims_read_parm
!endif
!if $job=student
  !goto student
  !exit
!endif
!if $wims_read_parm=$empty
  !goto general
!endif

:student
Un examen está compuesto de ejercicios WIMS que se deben realizar en un tiempo
limitado definido por el profesor.<p>
Contrariamente a una hoja WIMS,</p>
<ul><li>
no es posible renovar un ejercicio del examen,
ni desactivar el registro de notas.
</li><li>
cuando se hace clic sobre un ejercicio, el enunciado aparece en otra
ventana del navegador. Un enlace <span class="tt wims_code_words">Retorno a la lista de ejercicios</span>
permite pasar a otro ejercicio.
</li><li>
No es necesario haber respondido un ejercicio
para pasar al siguiente, el enunciado obtenido se conserva.
</li></ul>
<p>
El profesor puede dar la posibilidad de recomenzar varias veces la totalidad del
examen. La nota del examen guardada por WIMS es la máxima de las notas
obtenidas en todos los ensayos del examen. La duración de un examen corresponde a la duración
máxima de un ensayo de examen.
</p><p>
Independientemente de la duración máxima un ensayo, el profesor puede fijar el periodo
en el cual el registro de notas estará abierto.
</p><p>
Para que las respuestas de un ejercicio se tomen en cuenta,
se deben enviar antes que el tiempo fijado para hacer
un ensayo de examen se acabe.
</p>
!if $tryremain>0 and $stries >1
<p>
 Ejemplo.
 Supongamos que está escrito:
</p>
!set h_min=$[rint(9*60+$stries*($sdure) - $sdure/2)]
!set h_fin= $[rint($h_min/60)] h $[$h_min%60] min
!set h_d2=$[rint($sdure - $sdure/3)]
!set h_min2=$[min($sdure,$h_d2)]
!set d_1=$[rint(min(10,$sdure/2))]
!set h_min3=$[9*60+$d_1]
!set h_3=$[rint($h_min3/60)] h $[$h_min3%60] min
<pre>
$name_exam2
$name_exam6
$name_exam9
$name_exam7
</pre>
y que el profesor ha abierto el registro de notas entre las 9h y $h_fin.
Eso significa que usted puede comenzar el examen a partir de las 9h y
deberá terminar los $stries ensayos antes de $h_fin:
<ul><li>
Si usted ocupó $d_1 minutos para hacer el primer ensayo de examen y comenzó
el segundo ensayo a las $h_3, tendrá $sdure minutos para hacer el segundo ensayo
de examen.
</li><li>
Si comienza el último ensayo de examen $h_d2 minutos antes de $h_fin, solo tendrá
$h_min2 minutos para hacer este último ensayo de examen.
</li></ul>
<p>
Para comenzar otro ensayo de examen, haga clic en
<span class="tt wims_code_words">$wims_name_endexam</span>.
Usted se desconectará. Tendrá que reconectarse para comenzar de nuevo.
Puede ver los resultados de los ensayos anteriores
haciendo clic en
<span class="tt wims_code_words">$wims_name_myscore</span>.
Una vez en el examen, se le aconseja hacer clic en
<span class="tt wims_code_words">$wims_name_refresh</span>
 para que se muestren las notas.
</p>
!endif
!if $class_examscore_withoutip!=yes
  Si vous changez d'adresse IP en cours d'examen, les exercices que vous aurez effectués à partir d'une
  autre adresse IP que celle du démarrage de la session seront enregistrés mais les notes obtenues ne compteront
  pas dans le calcul de la note finale de l'examen.<br>
  Cependant, votre enseignant peut, à tout moment, décider de ne plus tenir compte des changements
  d'adresse IP. Dans ce cas, les scores seront recalculés rétroactivement (un délai de 24H est parfois nécessaire
  pour que les nouveaux scores s'affichent correctement).
!endif
!if $wims_read_parm!=$empty or $job=student
  !exit
!endif

:general
<h2 id="general">Introducción</h2>

<p>
Un examen se constituye de series de ejercicios tomados de entre las hojas
activas o expiradas.
</p><p>
Cuando un participante comienza un examen, dispone de un
tiempo limitado para hacer todos los ejercicios presentes (tiempo fijado por el profesor
denominado <span class="wims_emph">duración de un ensayo de examen</span>).
No existe la posibilidad de renovar un ejercicio ni de desactivar
el registro de notas.
</p><p>
El profesor puede dar la posibilidad de comenzar de nuevo
el examen varias veces (parámetro <span class="wims_emph">número
de ensayos autorizados</span>). La nota de un ensayo de examen
es el promedio (ponderado) de las notas obtenidas en cada ejercicio. La nota final del examen es
el máximo de las notas de los diferentes ensayos de examen.
</p><p>
Los enunciados de cada ejercicio obtenido por el participante durante un examen, así como las respuestas que ha entregado son registradas y visibles por el participante y el profesor después de cada ensayo de examen.
</p><p>
Se puede proponer un examen en modo simulación: los participantes
pueden entonces practicar el examen pero los puntajes no son registrados y los ensayos no son contabilizados.
</p><p>
Tal como para una hoja, el profesor puede fijar las fechas de inicio y de término del registro de notas del examen, y restringir el acceso fijando números IP o usando una variable técnica.
</p><p>
Los siguientes párrafos presentan en detalle los diferentes parámetros de un examen.
</p>
!if $wims_read_parm!=$empty
  !exit
!endif

:statut
<h2 id="statut"> Statut d'un examen</h2>
Un examen puede tener cuatro estados:
<span class="wims_emph">
!replace internal , by ,$ $ in $(wims_name_shstatus).
</span>
<p>
<span class="wims_emph">$(wims_name_shstatus[1]) :</span>
es el estado inicial de un examen. En este estado, el examen no es visible por los estudiantes.
</p><p>
<span class="wims_emph">$(wims_name_shstatus[2]) :</span>
cuando se hace clic en
<span class="tt wims_code_words">$(wims_name_actionlist[1])</span>,
el examen se vuelve visible para los estudiantes (ellos podrán trabajar en los ejercicios del examen si ningún parámetro en el campo
<span class="tt wims_code_words">$(name_shinfo[4])</span>
lo impide), su contenido
no se puede modificar, excepto el título, el texto de explicación y el campo
<span class="tt wims_code_words">$(name_shinfo[6])</span>
</p><p>
Del estado
<span class="tt wims_code_words">$(wims_name_shstatus[2])</span>,
La hoja de examen puede pasar al estado
<span class="tt wims_code_words">$(wims_name_shstatus[3])</span>
 Haciendo clic en el botón
 <span class="tt wims_code_words">$(wims_name_actionlist[2])</span>.
No se puede volver al estado
<span class="tt wims_code_words">$(wims_name_shstatus[1])</span>.
</p><p>
<span class="wims_emph">$(wims_name_shstatus[3]) :</span>
el estudiante ve el examen, pero solo tiene acceso al título de los ejercicios,
ya no puede trabajar en ellos.
</p><p>
Una vez que el examen expira, se le puede hacer visible a los estudiantes haciendo clic en
<span class="tt wims_code_words">$(wims_name_actionlist[4])</span>,
pero también volverlo a colocar en el estado
<span class="tt wims_code_words">$(wims_name_shstatus[2])</span>.
 </p>
!if $wims_read_parm!=$empty
  !exit
!endif

:session

<h2 id="duration">Número de ensayos de examen y duración de ensayos</h2>

<p>
Durante un examen, el participante no tiene la posibilidad de renovar
un ejercicio del examen, ni de desactivar el registro de notas.
El profesor puede dar la posibilidad de comenzar de nuevo un examen un cierto número de veces;
este número es el <span class="tt wims_code_words">número de ensayos autorizados</span>
fijado por el profesor. La nota de examen guardada por WIMS es el máximo de las notas obtenidas durante los diferentes ensayos de examen.
</p><p>
La <span class="wims_emph">duración de un ensayo de examen</span> es el tiempo dado
al estudiante para hacer el examen una vez.
Puede ser fijada entre $duration_min minutos y $duration_max minutos.
Cuando el estudiante comienza el examen, WIMS inicia el cronómetro.
Cada vez que el estudiante comienza un nuevo ensayo de examen, el
cronómetro vuelve a cero. Cuando el cronómetro llega a la duración fijada para un
ensayo de examen, el estudiante no puede trabajar más en este ensayo de examen.
</p><p>
<span class="wims_warning">Cuidado:</span> en este servidor, un ensayo que no tenga actividad por
más de $[floor($idle_time/60)] minutos será automáticamente destruido.
Piense en eso al escoger la duración de un ensayo.
</p>
<span class="wims_warning">Cuidado:</span> la duración de un ensayo de examen
es una noción diferente al tiempo que pasarán los estudiantes en la sala de computación
(esta última se ajusta en el campo
<span class="tt wims_code_words">$(name_shinfo[6])</span>).
Así, si el examen tiene una duración prevista de dos horas
en la sala de computación y que el profesor fija el parámetro de duración
de un ensayo de examen en 90 minutos y el número de ensayos autorizados es 3
(estos son los valores por defecto), si el estudiante termina su primer ensayo a los 50 minutos
, le quedarían aún 120 - 50 = 70 minutos y dos ensayos
para intentar mejorar su nota. Si nuevamente se demora 50 minutos en el segundo ensayo,
solo podrá pasar 20 minutos en el tercer ensayo.
</p>
!if $wims_read_parm!=$empty
  !exit
!endif

:exammode
!! lang_TODO
!changeto lang/help.phtml.fr $wims_read_parm

!if $wims_read_parm!=$empty
  !exit
!endif

:allowtype
<h2 id="allowtype">Restricción en el registro de examen.</h2>
<p>
Puede seleccionar el modo
<span class="tt wims_code_words">$(name_allowtype[2])</span>
en el campo
<span class="tt wims_code_words">$(name_shinfo[6]).</span>
Este modo permite a los participantes practicar el examen
sin que su trabajo sea registrado, ni
que sus ensayos sean contabilizados (es el modo que el profesor ve
cuando hace clic en <span class="tt wims_code_words">Vista de los participantes</span>).
</p><p>
Usted puede imponer una restricción en el tiempo
para registrar las notas, seleccionando
<span class="tt wims_code_words">$(name_allowtype[4])</span>
en el campo
<span class="tt wims_code_words">$(name_shinfo[6])</span>.
Una interfaz complementaria aparece y usted puede indicar un periodo de tiempo así como las
direcciones IP a partir de las cuales las notas serán registradas.
Esta restricción se escribe usando una expresión de tres partes (no es necesario que todas
estén presentes):
 <ul>
  <li>Una fecha y hora de inicio;</li>
  <li>Una fecha y hora de término;</li>
  <li>Un rango de IP.</li>
 </ul>
Las fechas y horas deben estar en el tiempo local del SERVIDOR y estas palabras deben estar separadas unas de otras por espacios.
</p><p>
La configuración del campo <span class="tt wims_code_words">$(name_shinfo[6])</span>
se mantiene modificable hasta cuando el examen tenga el estado <span class="wims_emph">Activo.</span>
</p>
 <p>
Ejemplo:
$wims_name_form <span class="tt wims_code_words">20131007</span> $wims_name_at <span class="tt wims_code_words">10:30</span> $wims_name_to <span class="tt wims_code_words">20131001</span> $wims_name_at <span class="tt wims_code_words">10:00</span> $wims_name_IP<span class="tt wims_code_words"> 127.0.</span> <br>
permite registrar notas entre 2 fechas y solamente desde computadores cuyos números IP comiencen
por <span class="tt wims_code_words">127.0.</span>.
</p>
<p>
<span class="wims_warning">Cuidado:</span>
las fechas de apertura y cierre del examen no serán visibles por los(as) estudiantes.
Se pueden escribir en el campo "Texto de explicación" para que sean visibles por los(as) estudiantes.
</p>
!if $wims_read_parm!=$empty
  !exit
!endif


:cutt
<p>
Las <span class="wims_emph">horas de corte</span>
permiten realizar el examen en diferentes sesiones.
Un participante que haya comenzado el examen antes de una hora de corte no puede trabajar
en un nuevo ensayo de examen después de la hora de corte, incluso si no ha utilizado
todos los ensayos disponibles autorizados por el profesor.
</p><p>
Formato de las horas de corte:
<span class="tt wims_code_words">aaaammjj.hh:mm</span>
(separe múltiples horas de corte por espacios).
</p>

Ejemplo: un primer grupo A de la clase realiza el examen entre
9h y 10h el 10/02/2015 y otro grupo B de la misma clase de 10h
a 11h el mismo día.
<ul><li>
Ingrese <span class="tt">20150210.10:00</span> en el campo
<span class="tt wims_code_words">$name_shinfo_cutt</span>
</li><li>
Ingrese en campo de texto <span class="tt wims_code_words">$(name_shinfo[6])</span> :
$wims_name_from <span class="tt wims_code_words">20150210</span> $wims_name_at <span class="tt wims_code_words">9:00</span> $wims_name_to <span class="tt wims_code_words">20150210</span> $wims_name_at <span class="tt wims_code_words">11:00</span>.
</li></ul>
En este caso, el nombre y título de los diferentes ejercicios del examen
son visibles por todos los estudiantes de la clase a partir de las 9h, un estudiante que
haga clic sobre un ejercicio del examen entre las 9h y las 10h no podrá abrir un nuevo
ensayo de examen después de las 10h.

!if $wims_read_parm!=$empty
  !exit
!endif

:variable
<p id="variable">
Con el objetivo de individualizar las restricciones de acceso, es posible ingresar
el nombre de una <span class="wims_emph">variable técnica</span> en
el campo <span class="tt wims_code_words">$(name_shinfo[6]). </span>
Esta variable debe estar definida para cada participante según las
reglas precedentes, manualmente en las propiedades de cuenta de un
participante o por enlace a la hoja de cálculo (variable técnica). Si la
restricción es una elección propia del participante (inscripción según ciertas fechas por ejemplo),
es posible crear y utilizar un cuestionario en modo guiado
(ver la ayuda correspondiente).
</p>

!if $wims_read_parm!=$empty
  !exit
!endif

:contenu

<h2 id="contenu">Contenido de un ejercicio de examen</h2>
<p>
Un ejercicio de examen es un ejercicio de una hoja de ejercicios activa o expirada o
una lista de ejercicios existentes en estas hojas (en este último caso,
un ejercicios escogido aleatoriamente entre ellos será presentado al estudiante).
</p><p>
Luego de hacer clic en el enlace <span class="tt wims_code_words">$wims_name_addexo</span>
usted verá aparecer una lista de ejercicios; mueva hacia el cuadro de la derecha
los que conformarán este ejercicio del examen, y luego haga clic en el botón
<span class="tt wims_code_words">Registrar.</span>
</p><p>
<span class="wims_emph">Título</span>: el título que se asigna a un ejercicio será visible por los estudiantes desde que
su estado sea
<span class="wims_emph">$(wims_name_shstatus[2])</span>
o
<span class="wims_emph">$(wims_name_shstatus[3]). </span>
Por defecto, el título del ejercicio es <span class="wims_emph">Ej.</span>
</p><p>
<span class="wims_emph">Peso</span>: la nota de un ensayo de examen es un promedio ponderado
por los pesos definidos para cada serie de ejercicios del examen.
Por defecto, el peso es igual a 1.
</p><p>
Usted puede usar el enlace
<span class="tt wims_code_words">$wims_name_addsexo</span>
para añadir todos los ejercicios de una hoja (cada ejercicio de la hoja
será un ejercicio del examen).
</p><p>
Usted tiene la posibilidad de modificar el contenido del examen siempre que tenga
el estado
<span class="wims_emph"> $(wims_name_shstatus[1]).</span></p>
<strong>Observación. </strong> En un examen, un ejercicio funcionará de la misma manera que en la hoja de donde se obtuvo, con
la excepción de los parámetros concernientes a:
<ul><li>
la muestra de ayudas o pistas (los botones <span class="wims_button_help disabled inline">Ayuda</span> e <span class="wims_button_help disabled inline">Indicación</span> aparecerán como enlaces que no se pueden cliquear). ;
</li><li>
el máximo de número de intentos contabilizados y el número de intentos con la misma versión de un ejercicio
(estos dos parámetros no se toman en cuenta en un examen. De hecho, incluso si algunas variables son las mismas en varios ejercicios de una serie ordenada de ejercicios, sus valores podrán cambiar de un ejercicio a otro).
</li>
</ul>


!if $wims_read_parm!=$empty
  !exit
!endif

:dependency
<h2 id="dependency">Dependencia de la puntuación</h2>
<p>
Si se añade una dependencia de puntuación en un ejercicio, un participante debe
primero lograr una cantidad suficiente de puntos en otros ejercicios de la hoja
de examen antes de poder trabajar en ese ejercicio. Por ejemplo, añadir
<span class="tt wims_code_words">1:50,2:30,3+4+5:60</span>
en el ejercicio 6 significa que el participante debe tener un éxito de 50%
en el ejercicio 1, 30% en el ejercicio 2, y un promedio de éxito de 60%
en los ejercicios 3, 4, 5 para poder trabajar en el ejercicio 6.
En el caso de un examen, esto debe ocuparse con mucha moderación.
</p>
!if $wims_read_parm!=$empty
  !exit
!endif

:options
<h2 id="options">Options</h2>
<p>
Por el momento hay una sola opción disponible&nbsp;:
</p>
<ul>
<li><span class="tt wims_code_words">autogen</span> quiere decir que el ejercicio
se genera automáticamente incluso si el usuario no hace clic en él para que pueda
consultar el ejercicio guardado una vez que la sesión esté cerrada.
Se aconseja fuertemente no usarlo, salvo para los ejercicios a corregir manualmente.
</li></ul>

!if $wims_read_parm!=$empty
  !exit
!endif

:globalparam
<h2 id = "globalparam"> Otras configuraciones posibles </h2>
Se pueden configurar otros parámetros para todos los exámenes de una clase yendo a la página de
<span class = "text_icon SE_config"> Configuración / Mantenimiento </span>:
<ul> <li>
De forma predeterminada, si el número de IP de un estudiante cambia durante una sesión de examen, la calificación obtenida en
 esta sesión de examen no se tiene en cuenta:
<span class = "wims_emph"> Tener en cuenta el posible cambio de IP durante un examen </span> tiene el valor
<span class = "tt wims_code_words"> sí </span> (este valor se puede modificar en
<span class = "text_icon config_list"> Configuración global </span>).
</li> <li>
De forma predeterminada, un alumno puede ver las grabaciones de sus sesiones de examen:
<span class = "wims_emph"> visible para los estudiantes </span> tiene el valor
<span class = "tt wims_code_words"> sí </span> (este valor se puede modificar en
<span class = "text_icon config_list"> Configuración global) </span>.
</li> <li> Es posible evitar que los estudiantes accedan a ciertos recursos del aula
como herramientas, documentos ... (consulte la sección <span class = "text_icon config_restr"> Restricción de acceso </span>).
</li> </ul>
<strong> Nota. </strong>
El número de sesiones de examen que se pueden mantener al mismo tiempo está limitado a $wims_examlog_limit
(los registros más antiguos se eliminan cuando se supera este número).

!if $wims_read_parm!=$empty
  !exit
!endif


