!set wims_module_log=error: $error

<span class="wims_warning">$wims_name_Error</span>.

!if no_reccourse=$error
  La transferencia de estas actividades no es posible.
  !exit
!endif

!if not_supervisor=$error
  Lo sentimos pero la operación de preparación /modificación de una hoja
  de trabajo está reservada a los profesores registrados de la clase.
  !exit
!endif

!if bad_classpass=$error
  Lo sentimos pero no ha introducido la contraseña correcta de la clase.
  No está autorizado a cambiar la información siguiente sin
  esa contraseña.
  !exit
!endif

!if bad_user=$error
  Error de llamada: el participante <span class="tt wims_login">$checkuser</span> no existe.
  !exit
!endif

!if badimgformat=$error
  El archivo que envió no es una imagen.
  !exit
!endif

!if filetoobig=$error
  El archivo que envió excede la capacidad máxima permitida después de la conversión de la imagen. Envíe una imagen más pequeña.
  !exit
!endif

!if quota_file=$error
  Se ha alcanzado la capacidad máxima de almacenamiento de la clase. No es posible guardar su imagen.
  !exit
!endif

!msg $error
