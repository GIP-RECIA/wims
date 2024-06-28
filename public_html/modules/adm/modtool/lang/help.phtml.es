!if $special_parm!=$empty
 !read help/$special_parm.phtml
 !goto end
!endif

!if $login=$empty
<p>
 Esta herramienta permite la creación y el desarrollo en línea
 de módulos de actividades WIMS ordinarios.
 </p><p>
Tal módulo puede ser un ejercicio de plena potencia (comparado a
 los ejercicios OEF que son más fáciles de escribir pero tienen
 capacidades limitadas; ver
 <a target="wims_help" href="wims.cgi?module=adm/createxo&+cmd=help&+special_parm=oef&+session=$wims_session"> $wims_name_docoef</a>
o una herramienta de cálculo sofisticada. Debe estar escrito en el
idioma interpretado de WIMS, como se explica en
<a target="wims_help" href="wims.cgi?module=help/wimsdoc.en">WIMS technical documentation</a>
.
 </p><p>
 Si se interesan, se puede pedir al
 !mailurl $wims_site_manager administrador de este sitio WIMS\
WIMS Modtool id
 una identificación de acceso/contraseña de desarrollador
 que les permitirá utilizar esta herramienta.
</p>
 !exit
!endif

!if $mod=$empty
<p>
 Para trabajar sobre un módulo, deben en primer lugar crearlo. Para crear un
 nuevo módulo, hay que presionar los vínculos convenientes y luego llenar los formularios
 a tal efecto.
 </p>
!endif
<p>
Quiere consultar
 <a target="wims_help" href="wims.cgi?module=help/wimsdoc.en">WIMS technical documentation</a>
 con el fin de conocer la estructura de un módulo WIMS así como el sintaxis y el formato de su contenido.
</p><p>
Encontrarán aquí la
<a target="wims_help" href="wims.cgi?module=adm/createxo&+cmd=help&+special_parm=oef&+session=$wims_session"> $wims_name_docoef</a>
</p><p>
Indicaciones especiales:
</p><ol>
<li>Para eliminar errores de un fichero, pueden colocar una línea
<pre>
$!debug ...
</pre>
en este fichero, donde ... puede ser cualquier cadena de texto. Cuando
pruebe su módulo, la ejecución va a par a esta línea y el
contenido de ... se le mostrará. Si
... incluye variables, se substituyen estos últimos según las normas

habituales de sustitución de variables de WIMS.

</li></ol>

:end

