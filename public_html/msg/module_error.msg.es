
	    Fichero de mensajes de error de WIMS, versi�n espa�ola.

Environment variable substitutions are valid (variable names start by `$').

A line starting with ':' at the FIRST column is a tag line. Text following
this line will be printed if the tag equals error type; tag line with empty
tag is valid for all error types.

Nothing before the first tag line will be printed; so put comments simply
at the beginning of the file (or after a fictive tag).


:antidated_version
 Este m�dulo requiere al menos WIMS-$module_wims_version, pero el 
 servidor s�lo est� en la versi�n $wims_version.
 <p>
 M�dulo mal instalado.

:append_syntax
  Error de sintaxis en `append'.

:bad_allow
  El campo ``allow'' en la definici�n de variable no es v�lido.

:bad_cmd
  El comando ``$wims_error_data'' no es v�lido.  

:bad_index
  El valor del �ndice no es v�lido.

:bad_var_def
  Archivo var.def no v�lido.

:cannot_create_session_directory
  No puedo crear el directorio de sesi�n.

:cannot_create_session_number
  No puedo crear el n�mero de sesi�n.

:comp_syntax
  Error de sintaxis en la funci�n compare(): $wims_error_data.

:debug
  Salida de depuraci�n:
$debug

:defn_too_long
  Cadena de definici�n demasiado larga.

:executable
 WIMS no puede procesar el fichero $executable, puesto que se trata de un fichero
 ejecutable.

:file_access_denied
 El acceso al fichero ``$wims_error_data'' ha sido rechazado por razones de
 seguridad.

:file_name_too_long
 El nombre del fichero es demasiado largo:
 ``$wims_error_data''

:file_too_long
  La longitud del archivo ``$wims_error_data'' excede el l�mite.
  
:for_syntax
  Error de sintaxis en el `for'.

:getscore_syntax
  Error de sintaxis en `getscore'.

:illegal_cmd
  La orden ``$wims_error_data'' es ilegal:
  No deber�a intentar acceder a los directorios padre en el nombre de la orden.
  
:illegal_fname
  El nombre del archivo ``$wims_error_data'' es ilegal:
  No se permite acceder a los archivos a trav�s de sus directorios padre.

:illegal_name
  El nombre de la variable ``$wims_bad_name'' es incorrecto.

:illegal_plot_cmd
  La cadena de par�metros para gnuplot puede que contenga caracteres ilegales.
  No se permite el uso de tuber�as en esta cadena (un ap�strofo 
  seguido de `<').
  
:label_not_found
  Imposible encontrar la etiqueta ``$wims_error_data''

:mathsubst_syntax
  Error de sintaxis en  ``mathsubst''.

:multiple_declaration
  Se ha declarado la variable ``$wims_bad_name'' en varias ocasiones.

:name_is_reserved
  El nombre ``$wims_reserved_name'' est� reservado para uso interno de 
  este servidor. No deber� usarlo en su m�dulo. Por favor, elija otro
  nombre para su variable.

:name_too_long
  Nombre de variable demasiado largo.

:next_without_for
  `next' sin `for'.
  (�Hay un goto que salte dentro de un bucle `for'?)

:no_double_quote
  No se permiten dobles " comillas en los par�metros de una orden, debido
  a razones de seguridad. Lo sentimos.
  
:no_of
  Error de sintaxis. La sintaxis es: $wims_error_data ??? of ???

:not_trusted
  El m�dulo $module no tiene privilegios para ejecutar guiones privados 
  o comandos administrativos.

:output_too_long
  La longitud de la p�gina html de salida ha excedido el l�mite.
  Si no lo plane� as� (en este caso, divida la p�gina), es probable
  que se deba a un bucle infinito.
  
:parm_too_long
  La cadena de par�metros ha excedido la longitud m�xima.
  
:replace_syntax
  Error de sintaxis en `replace'.

:subst_exceeded
  Demasiadas sustituciones en una cadena. (�Hay un bucle infinito de 
  sustituciones?)

:syntax_error
  Error de sintaxis en la orden.

:text_bad_table
  La tabla para inserci�n de textos est� corrupta.

:timeup
 Se ha interrumpido el procesamiento de su petici�n porque requiere
 demasiado tiempo.

:too_few_columns
  A la definici�n de la variable le faltan campos.

:too_many_fors
  El n�mero de bucles `for' ha excedido el l�mite.

:too_many_gotos
  Demasiados goto's (o de bucles `for'). Est� limitado el 
  n�mero de goto's.
  
:too_many_ins
  El n�mero de inserciones din�micas (instex, insplot) ha excedido el
  l�mite.

:too_many_nested_read
  El n�mero de ejecuciones de ficheros anidadas ha superado el l�mite. Compruebe si el
  fichero no se est� leyendo a s� mismo.

:too_many_variables
  El n�mero de variables definidas en var.def ha excedido el l�mite.

:tr_syntax
  Error de sintaxis para `translate'.

:unmatched_parentheses
  Error de sintaxis. Los par�ntesis no corresponden.

:workfile_too_long
  El m�dulo contiene un archivo que excede la longitud m�xima permitida.

:zero_step
  No se puede ejecutar un bucle `for' con paso (`step') cero.
 
:

</p>
Si ve este mensaje, generalmente se deber� a un error en el m�dulo 
`$module'.

Por favor contacte con el desarrollador del m�dulo para informarle del error.
