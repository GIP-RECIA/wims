!set wims_module_log=error: $error

!if too_many_users=$error
  Su clase tiene demasiados participantes ($limit).
  Las puntuaciones se pueden introducir manualmente
  s�lo para clases con un m�ximo de $maxuser participantes.
  Lo sentimos.
  !exit
!endif

!msg $error
