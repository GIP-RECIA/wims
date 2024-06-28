!set lang_exists=yes

!if $wims_read_parm!=
  !goto $wims_read_parm
!endif

!set lang_fr=franc�s
!set lang_en=ingl�s
!set lang_es=espa�ol
!set lang_nl=holand�s


!distribute lines Inscripci�n de un participante en un foro de discusi�n\
  Este sitio no contiene actualmente foros de discusi�n. �Lo sentimos, int�ntelo m�s adelante!\
  est� protegido por contrase�a. Tiene que introducir la contrase�a para inscribirse.\
  Escribir al propietario\
  opcional\
  �Bienvenido/a\
  No ha dado una direcci�n de correo v�lida.\
  Con direcci�n de correo\
  Para verificar la exactitud de su contrase�a, vu�lvala a escribir otra vez m�s\
  Lista de foros de este sitio\
into title,name_noforum,name_passw,name_write_owner,name_optional,name_hello,\
  name_email1,name_email2,name_email3,name_forumlist

!set name_obtain_passw=!nosubst <b>Nota</b>. Si el propietario ($supervisor) de este foro \
  le permite el acceso, deber� darle la contrase�a de acceso
!set name_inscription=!nosubst Para poder inscribirse como participante en $forumname, por favor, \
  rellene la siguiente informaci�n:

!set name_password1=Este ser� el identificador que usar� despu�s para acceder al foro de discusi�n.\
  Por favor, elija una palabra que contenga entre 4 y 16 caracteres (d�gitos o letras sin acentuar).
!set name_password2=La contrase�a debe contener entre 4 y 16 caracteres (d�gitos o letras sin acentuar)

!set name_inscription2=!nosubst Se est� registrando como participante en $forumname, con identificador de usuario &nbsp;
!exit

:welcome
 Bienvenido/a a $forumname.
  Ya es miembro de este foro de discusi�n, con identificador de
  usuario <span class="wims_emph">$login</span>. <p>
  Ahora puede
  !href module=adm/forum/forum&forum=$forum&type=authuser acceder
  al foro de discusi�n.
</p>
!exit

:code
 $forumname no permite la inscripci�n an�nima. Utiliza la direcci�n de
  correo electr�nico que ha proporcionado para identificarle (con el objeto de prevenir abusos).
  <p>
  Para verificar la validez de su direcci�n de correo, el servidor
  le ha enviado una clave secreta a su cuenta de correo. Por favor, lea este
  e-mail, y copie la clave aqu�:
  </p>
!exit
