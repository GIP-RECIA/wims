!set wims_module_log=error: $error

!if not_supervisor=$error
 Lo sentimos, pero s�lo tiene derecho a escribir el mensaje de una clase el profesor registrado.
 !exit
!endif

!if user_notconnected=$error
 �Este participante ya no est� conectado!
 !exit
!endif


!msg $error
