!set wims_module_log=error: $error
!read adm/class/classname.phtml $description\
$institution

!if bad_optioncourse=$error
  Debes estar registrado en la clase que contiene este curso.
  !exit
!endif
!if bad_classtype=$error
  La inscripci�n de participantes no est� autorizada en esta zona.
  !exit
!endif

!if no_class=$error
  �La clase que ha escogido parece no existir!
  Si no se trata de un fallo del programa, entonces es que la clase ha
  expirado o usted est� jugando con el sitio (y en tal caso sepa que todas sus acciones est�n siendo registradas).
  !exit
!endif

!if noclass=$error
  �No se especifica ninguna clase de registro!
  Si est� jugando con el sitio, tenga en cuenta que todas sus actividades est�n registradas.
  !exit
!endif

!if complete=$error
  La clase que ha elegido est� al completo. No quedan plazas disponibles.
  Lo sentimos.
  !exit
!endif

!if no_real=$error
  No ha proporcionado sus apellidos ni su nombre.
  !exit
!endif

!if login_size=$error
  su identificador de usuario es demasiado
  !if $n<4
    corto.
  !else
    largo.
  !endif
  Debe contener entre 4 y 16 caracteres.
  !exit
!endif

!if pass_size=$error
  su contrase�a es demasiado
  !if $n<4
    corta.
  !else
    larga.
  !endif
  Debe contener entre 4 y 16 caracteres.
  !exit
!endif

!if bad_classpass=$error
  Su contrase�a para la clase
  $classname
  no es correcta. No est� autorizado a inscribirse en
  esta clase. Lo sentimos.
  !exit
!endif

!if login_double=$error
  El identificador de usuario <span class="tt wims_login">$login</span>
  est� ya siendo utilizado en la clase $classname.
  Por favor compruebe si no estaba ya inscrito; en caso contrario elija otro identificador de usuario.
  !exit
!endif

!if login_empty=$error
  No se pudo crear el identificador porque los datos est�n vac�os.
  Verifique la configuraci�n de autenticaci�n o el identificador externo.
  !exit
!endif

!if pass_error=$error
  La contrase�a que ha vuelto a teclear no se corresponde con la primera.
  Por tanto su inscripci�n no se ha tenido en cuenta; puede intentarlo de nuevo.
  !exit
!endif

!if site_complete=$error
  El n�mero de usuarios inscritos ha alcanzado el l�mite autorizado por
  este sitio ($wims_user_limit).
  El servicio de inscripci�n se ha cerrado, lo sentimos.
  <p>Puede
  !mailurl $wims_site_manager escribir al administador del sitio\
site user limit
  para pedirle que aumente este l�mite o que le
  !href $ conecte a WIMS como visitante
. </p>
  !exit
!endif

!if internal_total=$error
  Error interno del programa: fallo en la determinaci�n del n�mero de usuarios
  inscritos.
  !exit
!endif

!if no_cgu=$error
  Si no est� de acuerdo con los t�rminos de uso,
  no puede registrarse.
  !exit
!endif

!msg $error
