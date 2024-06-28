!set lang_exists=yes

!set name_nolink=Allow html links
!set name_user=!nosubst $wims_firstname $wims_lastname.
!set monthnames=enero,febrero,marzo,abril,mayo,junio,julio,agosto,septiembre,octubre,noviembre,diciembre
!set name_wroteon=escrito en
!set name_default=Foro de la classe
!distribute item <i>Asunto:</i> <b>,</b> into subj1,subj2
!distribute item <hr>,<hr> into body1,body2

!distribute line Lista de mensajes.\
	Lista de los mensajes por hilo\
	Leer un mensaje\
	Componer un nuevo mensaje\
	Escribir una contestaci�n\
	Rese�a de su mensaje\
	Enviar el mensaje\
	Configurar el foro\
	List by subjects\
into n_list,n_threadlist,n_read,n_compose,n_follow,n_preview,n_send,n_config,n_subjectlist

!set wims_name_compose=$n_compose
!set n_welcome=Bienvenido/a
!set n_otherforums=Otros foros de discusi�n
!set n_list_subject_month =Lista de mensajes del mes de
!set n_email=correo electr�nico
!set n_list_month = Lista de mensajes del mes de
!set n_most=los m�s
!set n_old=recientes primero,antiguos primero
!set n_new=Nuevo mensaje
!set n_archives=Archivos mensuales
!set n_following=ContinuSubjectaci�n de
!set n_reverse=Orden inverso
!set n_recent=�ltimos mensajes
!set n_erased=borrado
!set n_send=Enviar el mensaje
!set n_edit=Volver a editarlo
!set n_emptymsg= �Su mensaje est� vac�o!
!set n_listforum=Lista de foros de discusi�n accesibles en este servidor.
!set n_by=por
!set n_newfollow= El nuevo sigue a
!set n_subject=Tema
!set n_content=Cuerpo del mensaje
!set n_preview=Vista previa
!set n_send0=Enviar
!set n_origin=Mensaje original
!set n_help=Ayuda
!set n_mathhelp=sobre c�mo escribir f�rmulas matem�ticas en sus mensajes.
!set n_yourname= Nombre
!set n_cautious=<b>Atenci�n.</b> Su mensaje no ser� aceptado, a menos que d� una \
  direcci�n de correo electr�nico QUE FUNCIONE.
!set n_anonymous=visitante an�nimo.
!set n_emptyforum=Este foro est� vac�o todav�a.No accessible message is found corresponding to your request. Sorry.
!set n_erasedmsg=Mensaje borrado
!set n_nomessage=Ning�n mensaje accesible corresponde a su petici�n. Lo sentimos.
!set n_with=incluyendo
!!!set n_or=$wims_name_or
!set n_without=sin incluir
!set n_citation= cita
!set n_source=Sin formatear
!set n_format=Formateado
!set n_follow_c=Contestaci�n con cita
!set n_follow_nc=Contestaci�n sin cita
!set n_add= Su mensaje se ha a�adido al foro.
!set n_bydate=Por fechas
!set n_bysubject=Por tema
!set n_prec=Anterior
!set n_first=Primero que sigue
!set n_allfollowing=Todas las contestaciones
!set $n_statusask= Este foro de discusi�n no acepta mensajes an�nimos. Utiliza la direcci�n de correo \
 electr�nico actual que usted ha proporcionado, para conservar su identidad, con objeto de evitar abusos.<p>\
 Para verificar la validez de su direcci�n de correo, el servidor le ha \
 enviado una clave secreta por correo. Por favor lea ese e-mail, y copie la clave aqu�:
!set n_warning=Se a�adi� un mensaje al foro. No responder a este mensaje.
!set n_connect_to=Log in to the class
!set n_forum=Foro
!set n_thread=Por hilos

!if $job=compose and $c_prec!=$empty
  !set n_compose=Contestar
!endif

!set name_prompt=Actividad desconocida

!distribute line Par�metros del foro de discusi�n que puede cambiar.\
  Nuevos par�metros guardados\
  �Qui�n puede leer los mensajes\
  todos los participantes, s�lo usted\
  todos (inscritos o no), usuarios inscritos solamente, nadie excepto usted\
  �Qui�n puede enviar mensajes\
  todos los participantes,participantes con comprobaci�n del correo electr�nico,solamente usted\
  visitantes con direcci�n de correo electr�nico o inscritos,s�lo los usuarios inscritos,usuarios con comprobaci�n del correo electr�nico,nadie excepto usted\
into name_introconfig, name_introconfigsaved, name_whoread,name_prompt1,name_prompt2,name_whosend,name_prompt3,name_prompt4
