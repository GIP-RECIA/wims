!set wims_module_log=ERROR $error

!if $error=bad_password
 Contrase�a no reconocida. Por favor vuelva a intentarlo pasados unos segundos.
 �<span class="wims_warning">$wims_name_warning</span>! �Cualquier contrase�a enviada en los pr�ximos 5 segundos
 ser� rechazada!
 <span id="badpwd"></span>.
 !exit
!endif

!if $error=in_exam
 No puede cambiar de clase cuando est� aplicando
 un examen.
 !exit
!endif

!if $error=recent_rafale
 Esta cuenta est� bloqueada durante 10 minutos debido a actividades irregulares.
 !exit
!endif

!if $error=no_cgu
No han aceptado las condiciones generales de uso de este servidor (CGU).
Primero debe aceptar los t�rminos de uso antes identificarle.
 !form reply
  !formcheckbox agreecgu list yes prompt $name_acceptcgu
  [
  !href cmd=help $name_seecgu
  ]
  !let save_logincgu=$auth_user
  <div class="wimscenter wimsform">
  <input type="submit" value="$wims_name_tosave">
  </div>

!formend
 !exit
!endif

!if $error=bad_loginmail
  No se reconoce su nombre de usuario o no defini� una direcci�n de correo electr�nico al registrarse.
  <br>
  P�dale a su maestro que le d� una nueva contrase�a.
  <span class = "wims_warning">$wims_name_warning</span>!
  Este procedimiento de recuperaci�n de contrase�a est� desactivado durante 5 segundos
  <span id="badpwd"></span>.
  !exit
!endif

!if $error=bad_cas_connexion
  Hubo un problema durante la conexi�n CAS.
  <div class="tt">$response</div>
  !exit
!endif

!if $error=fullexamplecls
!! TODO_lang
  !changeto lang/msg.phtml.fr
  !exit
!endif

!msg $error
