!set wims_module_log=error: $error

<span class="wims_warning">$wims_name_Error</span>.

!if $error=badvariablename
 Al menos una de las variables técnicas que utiliza no existe o no se puede modificar a este nivel. Su cuestionario no funcionará correctamente. 
 !exit
!endif

!if $error=notechvar
 No hay variables técnicas definidas en esta clase. Para usar este modelo de cuestionario, primero debe definir una variable técnica en la clase usando el administrador de variables técnicas.
 !exit
!endif

!if $error = not_user
 El sistema de cuestionarios solo está disponible para las clases virtuales.
 !exit
!endif

!if $error = bad_vote
 El cuestionario / registro que solicita no existe.
 !exit
!endif

!if $error = already_voted
 Ya ha votado. No puede volver a votar porque el cuestionario es anónimo.
 !exit
!endif

!if $error = too_many_votes
 Hay demasiados cuestionarios / registros en su clase.
 ¿Por qué necesita tantos?
 !exit
!endif

!if $error = no_content
 No ha llenado el contenido del cuestionario / registro.
 !exit
!endif

!if $error = no_title
 Debe darle un título a su cuestionario / registro.
 !exit
!endif

!if $error = bad_data
 Algunas de sus definiciones no son correctas. Por favor corríjalas.
 !exit
!endif

!if $error = not_secure
 Puede acceder a los datos de la hoja de cálculo solo desde una ubicación segura.
 !exit
!endif

!if $error = no_vote
 Aún no ha votado, así que no puede ver los resultados.
 !exit
!endif

!if $error = no_variable
   No ha dado nombre de variable o no es válido.
   !exit
!endif

!if $error = bad_variable
   El nombre de variable que entregó (<span class="tt wims_code_words">$namevar</span>) no es conveniente porque 
   puede que ya sea usado por el software.
   !exit
!endif

!msg $error
