!set wims_module_log=error: $error
<b>$wims_name_Error</b>.
!if $error iswordof toomanycomp closedlivret
  !goto $error
!else
 !msg $error
 !exit
!endif

:toomanycomp
 No se pueden a�adir m�s competencias, el l�mite es de $maxcomp !
!exit

:closedlivret
 El cuaderno de competencias ha sido desactivado por tu profesor.
!exit
