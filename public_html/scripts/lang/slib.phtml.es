!set slib_lang_exists=yes
!distribute lines Script\
 Resultado\
 Parámetro\
 Parámetros\
 Software utilizado\
 Llamada desde un módulo\
 Llamada desde OEF / Doc\
 Lista de scripts disponibles\
 Lista de variables de items separadas por comas\
 por defecto\
 el resultado se puede utilizar a través de variable\
 Todos\
into wims_name_slib,wims_name_Output,wims_name_Parameter,wims_name_Parameters,wims_name_Required_Software,\
  wims_name_call1,wims_name_call2,wims_name_listslib,wims_name_variable_list,wims_name_default,wims_name_result,wims_name_All

!set wims_name_upto=!nosubst Hasta $slpcnt, separados por comas.
!set wims_name_instruction=Los scripts de esta biblioteca se pueden llamar desde un módulo usando la orden\
<span class="tt">!read</span> \
(o\
<span class="tt">!readproc</span> \
desde un fichero phtml).\
Por ejemplo, la línea\
<pre>\
 !read slib/matrix/random 3, 5, 10\
</pre>\
permite construir una matriz 3&times;5 con coeficientes enteros al azar en [-10, 10].\
El resultado se asigna a la variable <span class="tt">slib_out</span>.\
Para llamar a un script slib desde un ejercicio OEF, desde un documento o en un mensaje del foro, \
usamos la función \
<span class="tt">slib()</span>. Por ejemplo <span class="tt">\text{a=slib( ... ) }</span><p>\
Solo las variables con el prefijo \
<span class="tt">slib_</span>\
son modificados por estos scripts.</p>
