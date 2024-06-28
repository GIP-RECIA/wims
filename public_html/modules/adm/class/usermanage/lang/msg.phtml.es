!set wims_module_log=error: $error

<span class="wims_warning">$wims_name_Error</span>.

!if no_reccourse=$error
  La transferencia de estas actividades no es posible.
  !exit
!endif

!if not_supervisor=$error
  Lo sentimos pero la operaci�n de preparaci�n /modificaci�n de una hoja
  de trabajo est� reservada a los profesores registrados de la clase.
  !exit
!endif

!if bad_classpass=$error
  Lo sentimos pero no ha introducido la contrase�a correcta de la clase.
  No est� autorizado a cambiar la informaci�n siguiente sin
  esa contrase�a.
  !exit
!endif

!if bad_user=$error
  Error de llamada: el participante <span class="tt wims_login">$checkuser</span> no existe.
  !exit
!endif

!if badimgformat=$error
  El archivo que envi� no es una imagen.
  !exit
!endif

!if filetoobig=$error
  El archivo que envi� excede la capacidad m�xima permitida despu�s de la conversi�n de la imagen. Env�e una imagen m�s peque�a.
  !exit
!endif

!if quota_file=$error
  Se ha alcanzado la capacidad m�xima de almacenamiento de la clase. No es posible guardar su imagen.
  !exit
!endif

!msg $error
