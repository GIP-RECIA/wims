!! This file contains error messages. It will be processed
!! whenever the variable `error' is not empty.

!set errorhead=<b>$wims_name_Error</b>.

!if prohibited = $error
  $errorhead Su mensaje contiene palabras que no est�n permitidas. Por ejemplo, no
  puede poner javascript en el mensaje. Tenga en cuenta que
  el servidor registra este error.
  !exit
!endif

!if forum_not_exist = $error
  $errorhead Ha solicitado un foro de discusi�n que no existe. Lo sentimos.
  !set fatal=yes
  !exit
!endif

!if no_read_right = $error
  $errorhead No est� autorizado a acceder a este foro de discusi�n. Lo siento.
  !set fatal=yes
  !exit
!endif

!if no_subject = $error
  $errorhead Por favor, a�ada un tema a su mensaje.
  !exit
!endif

!if translation_fail = $error
  $errorhead El software ha encontrado un error interno y es incapaz de
  interpretar su mensaje. Lo sentimos.
  !if $wims_exec_error!=$empty
    <p>
    Tipo de error: <span class="tt">$wims_exec_error</span>
    </p>
  !endif
  !exit
!endif

!if open_tag = $error
  <b>$wims_name_warning</b>.
  Su mensaje parecer acabar en una etiqueta html no cerrada. Por
  favor, compruebe el texto que escribe con cuidado. <p>
  Su mensaje se mostrar� como un archivo html. As�, si est� escribiendo
  desigualdades, por favor ponga un espacio despu�s del signo `&lt;', o
  proteja las desigualdades como f�rmulas matem�ticas
  (encerr�ndolas entre el par de par�ntesis \( y \) ).</p>
  !exit
!endif

!if bad_message = $error
  $errorhead El mensaje que quer�a leer no existe en este foro de
  discusi�n. Por favor, compruebe su petici�n.
  !exit
!endif

!if erased_message = $error
  $errorhead El mensaje que quer�a leer ha sido borrado.
  !exit
!endif

!if $error=no_send_right
  $errorhead No tiene autorizaci�n para enviar un mensaje a este foro.
  Lo sentimos.
  <p>
  !href cmd=reply&job=list&mlist=.newlist Lista de mensajes.
  </p>
  !exit
!endif

!if $error=email_required
  $errorhead Debe dar su direcci�n de correo para poder enviar un mensaje
  a este panel.
  <br>
  <b>$wims_name_warning</b>. �El servidor verificar� esta direcci�n! Por lo tanto, no
  d� una direcci�n falsa.
  !set job=compose
  !exit
!endif

!if $error=bad_email
 $errorhead No di� una direcci�n de correo v�lida. Por favor,
 corr�jala.
 !set job=compose
 !exit
!endif

!if $error=bad_sendcode
  $errorhead Su mensaje no ha sido aceptado porque la clave secreta que
  escribi� no es correcta.
  <p>
  Por favor, verifique la direcci�n de correo que ha dado, pulse en el bot�n
  `enviar' otra vez, y despu�s espere a que le llegue una NUEVA clave
  secreta por correo electr�nico.
  !set job=compose
  !exit
!endif

!if $error=not_owner
  $errorhead Solamente el propietario de un foro de discusi�n est� autorizado a configurarlo.
  !set job=list
  !exit
!endif

!if auth_failure = $error
  $errorhead Fallo de autentificaci�n. <p>
  !set fatal=yes
  !exit
!endif

!msg $error
