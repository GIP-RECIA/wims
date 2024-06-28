!if $wims_module_log=$empty
  !set wims_module_log=error: $error
!endif

!if not_supervisor=$error
  Lo sentimos, pero s�lo los profesores est�n autorizados a cambiar la
  contrase�a de la clase.
  !exit
!endif

!if not_secure=$error
  Lo sentimos, pero la contrase�a de una clase s�lo se puede modificar
  en conexiones desde estaciones de trabajo seguras. Por favor utilice
  !href module=adm/class/config la herramienta de configuraci�n de la clase
  para definir estaciones de trabajo seguras, y con�ctese desde una de ellas
  para cambiar esta contrase�a.
  !exit
!endif

!if discord iswordof $error
  El cambio de contrase�a ha sido rechazado: la nueva contrase�a no
  coincide.
  !exit
!endif

!if bad_class_password iswordof $error
  �La contrase�a actual no es correcta!<p>
  �Es usted de verdad el profesor de esta clase?
  !exit
!endif

!if bad_user iswordof $error
  Fallo: no hay ning�n participante con el nombre de <span class="tt">$part</span>
  en la clase.
  !exit
!endif

!if bad_user_password iswordof $error
  �La contrase�a actual no es correcta!<p>
  El cambio de contrase�a ha sido rechazado.
  !exit
!endif

!if success iswordof $error
  La contrase�a ha sido modificada.
  !exit
!endif

!if fail iswordof $error
  El programa no ha podido grabar su nueva contrase�a.
  Se trata de un error interno; por favor contacte con el administrador del sitio.
  !exit
!endif

!if too_long iswordof $error
  Error: la nueva contrase�a es demasiado larga.
  !exit
!endif

!if too_short iswordof $error
  Error: la nueva contrase�a es demasiado corta.
  !exit
!endif

!if nothing_to_do iswordof $error
  No se ha realizado ninguna acci�n porque la nueva contrase�a es igual a la antigua.
  !exit
!endif

!msg $error
