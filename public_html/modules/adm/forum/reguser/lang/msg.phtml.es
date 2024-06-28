!set wims_module_log=error: $error

!if no_forum=$error
 No ha indicado en qu� foro de discusi�n quiere inscribirse.
 <p>
 !href module=adm/forum/forum Lista de foros de discusi�n
.
 !exit
!endif

!if bad_forum=$error
 �Parece que el foro de discusi�n que ha elegido no existe!
 Si no se trata de un error del software, entonces el foro de discusi�n
 ha expirado, o usted est� jugando con el sitio (en este caso, tenga en
 cuenta que sus actividades se est�n registrando).
 !exit
!endif

!if no_register=$error
 El foro de discusi�n <em>$em_title</em> no permite la inscripci�n
 en l�nea de usuarios. Por favor,
 !mailurl $mb_email contacte con su propietario
 si quiere participar.
 !exit
!endif

!if no_real=$error
 No ha dado sus apellidos y su nombre.
 !exit
!endif

!if no_email=$error
 Es obligatorio dar una direcci�n de correo electr�nico real para poder 
 inscribirse en 
 este foro de discusi�n (�el servidor verificar� la direcci�n antes
 de autorizar la inscripci�n!)
 !exit
!endif

!if bad_login=$error
 Su identificador de usuario contiene caracteres ilegales. <p>
 Por favor, use una palabra que contenga �nicamente d�gitos o letras
 sin acentuar, y sin espacios.
 !exit
!endif

!if auth_fail=$error
 La clave secreta que ha introducido no es correcta. Ha fallado
 la inscripci�n.
 !exit
!endif

!if bad_pass=$error
 Su contrase�a contiene caracteres ilegales. <p>
 Por favor, use una contrase�a que contenga �nicamente d�gitos o
 letras sin acentuar, y sin espacios.
 !exit
!endif

!if login_size=$error
 Su identificador de usuario es demasiado
 !if $n<4
  corto
 !else
  largo
 !endif
 Debe contener entre 4 y 16 caracteres.
 !exit
!endif

!if pass_size=$error
 Su contrase�a es demasiado
 !if $n<4
  corta
 !else
  larga
 !endif
 Debe contener entre 4 y 16 caracteres.
 !exit
!endif

!if bad_forumpass=$error
 Su contrase�a para <span class="wims_emph">$title</span>
 no es correcta. Por lo tanto, no est� autorizado a inscribirse 
 en este foro de discusi�n. Lo sentimos.
 !exit
!endif

!if login_double=$error
 El identificador de usuario <span class="tt wims_login">$login</span>
 ya se est� usando en
 <p class="wimscenter"><span class="wims_emph">$title</span>.
 </p>
 Por favor, compruebe si estaba inscrito; de lo contrario, por favor
 elija otro nombre de acceso.
 !exit
!endif

!if pass_error=$error
 La contrase�a que ha vuelto a teclear no se corresponde con la primera. Por
 lo tanto, su inscripci�n se ha ignorado. Int�ntelo otra vez.
 !exit
!endif

!if insert_fail=$error
 El software no ha podido incluir su inscripci�n en la base de datos.
 Hay un error interno. Lo sentimos.
 !exit
!endif

!if site_complete=$error
 El n�mero de usuarios inscritos ha alcanzado el m�ximo permitido
 por este foro de discusi�n ($user_limit).
 El servicio de inscripci�n se ha cerrado,
 lo sentimos. <p>
 !exit
!endif

!if internal_total=$error
 Error interno del software: no se ha podido determinar el n�mero de
 usuarios inscritos.
 !exit
!endif

