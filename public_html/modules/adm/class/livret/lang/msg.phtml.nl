!set wims_module_log=error: $error
<b>$wims_name_Error</b>.
!if $error iswordof toomanycomp closedlivret
  !goto $error
!else
 !msg $error
 !exit
!endif


:toomanycomp
    Er kunnen geen nieuwe vaardigheden (competienties) meer worden toegevoegd : de limiet is $maxcomp ! 
!exit

:closedlivret
 Le livret de compétence a été désactivé par votre enseignant.
!exit

!msg $error
