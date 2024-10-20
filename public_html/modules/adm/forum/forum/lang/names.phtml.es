!set lang_exists=yes

!distribute line Lista de foros\
	Autentificación del propietario\
	Autentificación del participante\
	Inscripción de un usuario\
	into n_list,n_authowner,n_authuser,n_register

!distribute line invitado\
  participante\
  propietario\
  inscribirse\
  No se han encontrado en este sitio foros de discusión.\
  Contraseña del propietario\
into name_visitor,name_user,name_owner,name_register,name_noforum,\
 name_pass_owner

!set name_number_message=!nosubst Alojamos $ccnt foros de discusión en este sitio.\
Busque el foro que le interese en la siguiente tabla:

!if $wims_read_parm!=
  !goto $wims_read_parm
!endif
!exit

:create
Pulse en el tipo de conexión para entrar en el foro, o
pulse en la palabra <span class="wims_button disabled">$name_register</span> para darse de alta. También puede
!href module=adm/forum/regforum crear su propio foro
 en este sitio.
!exit

:enter

Para entrar en <span class="wims_emph">$mb_title</span>
como <em>usuario inscrito</em> por favor introduzca su nombre de
usuario (login) y su contraseña personal.
!exit

:owner

Para entrar en  <span class="wims_emph">$mb_title</span> como su
<em>propietario</em>, por favor, introduzca la contraseña del propietario.
!exit
