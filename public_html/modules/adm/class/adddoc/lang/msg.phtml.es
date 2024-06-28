!set wims_module_log=error: $error

!if $error iswordof already_exist baddocnumber not_supervisor insert_fail maxdoc toomuchsheet noexo
  !goto $error
!else
 !msg $error
 !exit
!endif

:already_exist
 El documento que desea insertar ya existe en la clase con el título <span class="tt wims_fname"> $title</span>.
!exit

:baddocnumber
 La información que ha introducido no corresponde a un documento guardado en la clase.
!exit

:not_supervisor
Sólo el administrador de la clase puede llevar a cabo esta acción.
!exit

:insert_fail
Intentas insertar un módulo no autorizado.
!exit

:maxdoc
El número de documentos está limitado a  $max_doc.
!exit

:maxtool
La cantidad de herramientas está limitada a $max_doc.
!exit

:toomuchsheet
El número de hojas está limitado a $max_sheets. No puedes crear ninguna otra hoja de ejercicios.
!exit

:noexo
Este documento no contiene ningún ejercicio.
!exit
