!if $special_parm!=$empty
  !changeto help/$module_language/$special_parm.phtml
!endif

!if $wims_user!=supervisor
  Lo sentimos, no hay ayuda para los participantes.
  !tail
  !exit
!endif

!if $wims_read_parm=$empty
El contenido de un cuestionario puede ser un texto html, reforzado con los mismos
elementos que los mensajes de los foros. Además se pueden utilizar las siguientes
órdenes: <dl>
 <dt><span class="tt wims_code_variable">\menu{Sí,No}</span>
	<dd>Elección mediante un menú desplegable.
    </dd>
 <dt><span class="tt wims_code_variable">\list{A,B,C,D}</span>
	<dd>Elección mediante botones en una lista vertical.
    </dd>
 <dt><span class="tt wims_code_variable">\radio{muy mal, bastante mal, bastante bien, muy bien}</span>
	<dd>Una elección con botones horizontales.
	</dd>
 <dt><span class="tt wims_code_variable">\checkbox{A,B,C,D}</span>
	<dd>Varias elecciones posibles con botones horizontales.
	</dd>
 <dt><span class="tt wims_code_variable">\uservar{vname,val0,val1,...}</span>
	<dd>Grabar la elección inmediatamente precedente en una variable
	individual para el participante, de nombre <span class="tt">vname</span>. Esta
	variable tendrá el valor <span class="tt">val0</span> por defecto, <span class="tt">val1</span> si
	el participante escoge la primera opción, etc. <br>
	Esta variable puede posteriormente utilizarse para definir accesos
	individualizados a las hojas de trabajo o a los exámenes, agregando
	la palabra <span class="tt wims_code_variable">\vname</span> entre las restricciones de la hoja o examen.
	En este caso, se puede fijar el número máximo de participantes que pueden elegir una opción.
	Para ello, cada una de las opciones debe comenzar por el número máximo de participantes que la pueden elegir
	seguida de <span class="tt wims_code_words">:</span>
	Por ejemplo,
<pre>
\list{46:Sesión 1 a partir de las 8 hrs,
46:Sesión 2 a partir de las 10 hrs,
40:Sesión 3 a partir de 13 hrs}
</pre>
  Sin embargo, tenga cuidado, el uso de la misma variable técnica en varios cuestionarios / registros puede generar conflictos.
  </dd>
<dt><span class="tt wims_code_variable">\textarea</span>
 <dd>Se puede usar una zona de texto libre solo cuando el voto o respuesta es anónima. </dd>
<dt><span class="tt wims_code_variable">\inputfield</span>
  <dd>Un área de texto libre pero limitada a una línea, utilizable solo cuando el voto
  es anónimo. Los resultados se clasifican en espacios cercanos (en desarrollo).</dd>
</dl>

Una encuesta o cuestionario puede contener hasta $max_parms campos de elección.
!tail
!exit
!endif

!if generalinfo iswordof $wims_read_parm
<ul>
 <li><b>$wims_name_title</b> : el título de la encuesta/cuestionario.</li>
 <li><b>$wims_name_Type</b> :
  <ul>
   <li><b>$name_anonymous</b> : cuestionario anónimo, nadie conoce las respuestas entregadas
   (es imposible conocer su propia respuesta una vez que ya la ha enviado)</li>
   <li><b>$name_trace</b> : cuestionario anónimo que sigue los mismos criterios precedentes.
   Sin embargo, es posible conocer las respuestas entregadas por un participante,
   sin poder identificarlo.</li>
   <li><b>$name_nominative</b> : las respuestas de cada participante pueden ser
   consultadas (no se pueden usar zonas de respuestas
   libres en este tipo de cuestionario/encuesta).</li>
  </ul>
 </li>
 <li><b>$wims_name_Status</b> : uno de los estados a continuación:
     <ul>
      <li><b>$name_0</b> : el cuestionario es modificable, los participantes no pueden verlo.</li>
      <li><b>$name_1</b> : el cuestionario ya no es modificable, los participantes
      pueden responder el cuestionario.</li>
      <li><b>$name_2</b> : el cuestionario ya no es modificable, los participantes
      ya no pueden responder el cuestionario.</li>
      <li><b>$name_3</b> : el cuestionario ya no es modificable, los participantes
      ya no ven el cuestionario.</li>
     </ul>
 </li>
 <li><b>$name_result</b> : si los resultados son $(name_publish)s, los participantes pueden consultarlos
 (una vez que hayan respondido/votado). En caso contrario, solo el profesor de la clase tiene acceso a los resultados.</li>
 <li><b>$name_whovote</b> : si la lista de votantes es $name_publish2, entonces el profesor
 y los participantes pueden consultarla (con la condición que haya un número suficiente de votantes
 o que el voto sea nominal).
 En caso contrario, nadie puede saber quién ha votado.</li>
</ul>
 !goto guidedmode
!tail
!exit
!endif

!if guidedmode iswordof $wims_read_parm
:guidedmode
Varios modos son posibles:
<ul><li>
  <b>$name_free</b>: puede crear
  un cuestionario usando libremente los comandos que aparecen en la ayuda.
  </li><li>
  !readproc adm/lang/sheetexam.phtml.$lang
  <b>$name_accessvar</b>: con este formulario, puede permitir inscripciones en intervalos de tiempo.
  La variable técnica creada le permitirá a usted por ejemplo, definir un acceso individualizado
  a las hojas o a los exámenes. Para ello, basta con que seleccione
  <span class="tt wims_code_words">$(name_allowtype[4])</span>.
  </li><li>
  <b>$name_group</b>: usted podría formar grupos. Se le pedirá un nombre de variable
  (digamos que usted la ha llamado <span class="tt wims_code_variable">ma_variable</span>. Con la ayuda
  de ella, podrá enviar correos electrónicos o formar un directorio de fotos según el grupo,
  clasificar los archivos csv obtenidos en la clase, según grupo (con la condición <b>en este último caso</b>
  de haber pedido la variable <span class="tt wims_code_variable">var_ma_variable</span>).
  Se prevén otros usos.
  </li>
  <li>Sin embargo, tenga cuidado, el uso de la misma variable técnica en varios cuestionarios/encuestas puede generar conflictos.</li>
  </ul>

El nombre de las variables debe ser diferente de los nombres de otras variables ya utilizadas por WIMS (por ejemplo,
no use
<span class="tt wims_code_variable">exam1</span>, ... , <span class="tt wims_code_variable">sheet1</span>, ...,
<span class="tt wims_code_variable">manual1</span>, ...).
<br>
Los modelos <span class="tt wims_code_words">$name_free</span> y <span class="tt wims_code_words">$name_group</span> no están disponibles cuando los cuestionarios son compartidos con otra clase.
  !tail
  !exit
!endif
!tail
