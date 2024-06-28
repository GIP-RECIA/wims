!set lang_exists=yes

!if $wims_read_parm!=
  !goto $wims_read_parm
!endif

!set name_title=nombre del foro
!set name_description=descripci�n del foro
!set name_supervisor=nombre del propietario
!set name_email=direcci�n de correo electr�nico
!set name_password=contrase�a del foro
!set name_passsup=contrase�a del propietario

!set forumname=<span class="wims_emph">$title</span>

!set months=enero,febrero,marzo,abril,mayo,junio,julio,agosto,septiembre,octubre,noviembre,diciembre

!distribute lines Creaci�n de un foro de discusi�n\
  Reiniciar la operaci�n.s\
  Nombre completo del propietario (es decir, usted)\
  su foro de discusi�n no se crear�, a menos que d� una direcci�n de correo v�lida y funcional en este momento\
  Elija la contrase�a del propietario\
  Elija una contrase�a para el foro de discusi�n\
  entre 4 y 16 caracteres, d�gitos o letras sin acento\
  Continuar\
  �Hola\
  Contrase�a del propietario\
  Contrase�a del foro de discusi�n\
  Clave del foro\
  caracteres\
into title_title,name_restart,name_name_owner,name_warning1,name_choosepass1,name_choosepass2,\
  name_instruction,name_continue,name_hello,name_ownerpass,name_forumpass,name_code,\
  name_characters

!set name_name_forum=!nosubst Nombre del foro (a lo sumo $titlelim caracteres)

!set name_help1=Esta contrase�a le permitir� acceder al foro de discusi�n como su\
  propietario. D

!set name_help2=Esta palabra clave ser� necesaria para la inscripci�n de los usuarios al\
  foro; por tanto, podr� proporcion�rsela a quienes desee que participen en el foro.

!set name_warning=Si crea un foro de discusi�n en este sitio WIMS, debe asumir la \
  responsabilidad de su mantenimiento. <p> Para crear su foro, complete \
  la siguiente informaci�n.

!set name_warning2= <b>Atenci�n</b> Esta clave es de un solo uso. �No puede utilizarla para\
  conectarse al foro de discusi�n!

!exit

:step1
Est� creando el foro de discusi�n $forumname en el sitio
WIMS en
$httpd_HTTP_HOST.
<p>
Si encuentra un error en la informaci�n anterior, por favor
!href module=$module&cmd=reply&step=0 corr�jala.
</p><p>
 De lo contrario, para verificar la correcci�n de las contrase�as,
por favor, vu�lvalas a escribir.
</p>
!exit

:step2
Ahora necesita una clave para finalizar la operaci�n de creaci�n de un
nuevo foro de discusi�n bajo WIMS en este sitio $httpd_HTTP_HOST.
<p>
 Esta clave se le acaba de enviar a la direcci�n de correo que proporcion�
 ``<span class="tt">$email</span>''. Por favor, compruebe su correo
 electr�nico (espere unos minutos si es necesario), y lea el mensaje 
 que se le ha enviado.
 Busque la clave incluida en el mensaje y c�piela a continuaci�n.
</p>
!exit

:step3
Se ha creado el foro de discusi�n $forumname.
�Felicidades, y divi�rtase!
<p>
 Puede acceder al foro
 !href module=adm/forum/forum desde aqu�
.
</p>
!exit
