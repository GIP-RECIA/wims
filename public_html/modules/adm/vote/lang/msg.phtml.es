!set wims_module_log=error: $error

<span class="wims_warning">$wims_name_Error</span>.

!if $error=badvariablename
 Al menos una de las variables t�cnicas que utiliza no existe o no se puede modificar a este nivel. Su cuestionario no funcionar� correctamente. 
 !exit
!endif

!if $error=notechvar
 No hay variables t�cnicas definidas en esta clase. Para usar este modelo de cuestionario, primero debe definir una variable t�cnica en la clase usando el administrador de variables t�cnicas.
 !exit
!endif

!if $error = not_user
 El sistema de cuestionarios solo est� disponible para las clases virtuales.
 !exit
!endif

!if $error = bad_vote
 El cuestionario / registro que solicita no existe.
 !exit
!endif

!if $error = already_voted
 Ya ha votado. No puede volver a votar porque el cuestionario es an�nimo.
 !exit
!endif

!if $error = too_many_votes
 Hay demasiados cuestionarios / registros en su clase.
 �Por qu� necesita tantos?
 !exit
!endif

!if $error = no_content
 No ha llenado el contenido del cuestionario / registro.
 !exit
!endif

!if $error = no_title
 Debe darle un t�tulo a su cuestionario / registro.
 !exit
!endif

!if $error = bad_data
 Algunas de sus definiciones no son correctas. Por favor corr�jalas.
 !exit
!endif

!if $error = not_secure
 Puede acceder a los datos de la hoja de c�lculo solo desde una ubicaci�n segura.
 !exit
!endif

!if $error = no_vote
 A�n no ha votado, as� que no puede ver los resultados.
 !exit
!endif

!if $error = no_variable
   No ha dado nombre de variable o no es v�lido.
   !exit
!endif

!if $error = bad_variable
   El nombre de variable que entreg� (<span class="tt wims_code_words">$namevar</span>) no es conveniente porque 
   puede que ya sea usado por el software.
   !exit
!endif

!msg $error
