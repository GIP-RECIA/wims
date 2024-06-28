!if $special_parm!=$empty
 !read help/$special_parm.phtml
 !goto end
!endif

!if $login=$empty
<p>
 Esta herramienta permite la creaci�n y el desarrollo en l�nea
 de m�dulos de actividades WIMS ordinarios.
 </p><p>
Tal m�dulo puede ser un ejercicio de plena potencia (comparado a
 los ejercicios OEF que son m�s f�ciles de escribir pero tienen
 capacidades limitadas; ver
 <a target="wims_help" href="wims.cgi?module=adm/createxo&+cmd=help&+special_parm=oef&+session=$wims_session"> $wims_name_docoef</a>
o una herramienta de c�lculo sofisticada. Debe estar escrito en el
idioma interpretado de WIMS, como se explica en
<a target="wims_help" href="wims.cgi?module=help/wimsdoc.en">WIMS technical documentation</a>
.
 </p><p>
 Si se interesan, se puede pedir al
 !mailurl $wims_site_manager administrador de este sitio WIMS\
WIMS Modtool id
 una identificaci�n de acceso/contrase�a de desarrollador
 que les permitir� utilizar esta herramienta.
</p>
 !exit
!endif

!if $mod=$empty
<p>
 Para trabajar sobre un m�dulo, deben en primer lugar crearlo. Para crear un
 nuevo m�dulo, hay que presionar los v�nculos convenientes y luego llenar los formularios
 a tal efecto.
 </p>
!endif
<p>
Quiere consultar
 <a target="wims_help" href="wims.cgi?module=help/wimsdoc.en">WIMS technical documentation</a>
 con el fin de conocer la estructura de un m�dulo WIMS as� como el sintaxis y el formato de su contenido.
</p><p>
Encontrar�n aqu� la
<a target="wims_help" href="wims.cgi?module=adm/createxo&+cmd=help&+special_parm=oef&+session=$wims_session"> $wims_name_docoef</a>
</p><p>
Indicaciones especiales:
</p><ol>
<li>Para eliminar errores de un fichero, pueden colocar una l�nea
<pre>
$!debug ...
</pre>
en este fichero, donde ... puede ser cualquier cadena de texto. Cuando
pruebe su m�dulo, la ejecuci�n va a par a esta l�nea y el
contenido de ... se le mostrar�. Si
... incluye variables, se substituyen estos �ltimos seg�n las normas

habituales de sustituci�n de variables de WIMS.

</li></ol>

:end

