!set wims_module_log=error: $error

!if not_supervisor=$error
 Lo sentimos, pero sólo tiene derecho a escribir el mensaje de una clase el profesor registrado.
 !exit
!endif

!if user_notconnected=$error
 ¡Este participante ya no está conectado!
 !exit
!endif


!msg $error
