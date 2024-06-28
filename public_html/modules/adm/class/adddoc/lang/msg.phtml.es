!set wims_module_log=error: $error

!if $error iswordof already_exist baddocnumber not_supervisor insert_fail maxdoc toomuchsheet noexo
  !goto $error
!else
 !msg $error
 !exit
!endif

:already_exist
 El documento que desea insertar ya existe en la clase con el t�tulo <span class="tt wims_fname"> $title</span>.
!exit

:baddocnumber
 La informaci�n que ha introducido no corresponde a un documento guardado en la clase.
!exit

:not_supervisor
S�lo el administrador de la clase puede llevar a cabo esta acci�n.
!exit

:insert_fail
Intentas insertar un m�dulo no autorizado.
!exit

:maxdoc
El n�mero de documentos est� limitado a� $max_doc.
!exit

:maxtool
La cantidad de herramientas est� limitada a $max_doc.
!exit

:toomuchsheet
El n�mero de hojas est� limitado a $max_sheets. No puedes crear ninguna otra hoja de ejercicios.
!exit

:noexo
Este documento no contiene ning�n ejercicio.
!exit
