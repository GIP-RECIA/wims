!set lang_exists=yes

!if $wims_read_parm!=
  !goto $wims_read_parm
!endif

!set name_studentloc=!nosubst $user_lastname $user_firstname
!set name_studentglo=!nosubst $wims_name_lastname $wims_name_firstname

!set name_click=Pulse sobre un nombre para ver los detalles de su trabajo
!set name_noyetparticipant=Esta clase no tiene ning�n participante a�n.
!set name_transfer=Transferir sus actividades desde otras clases
!set name_filter=Variables t�cnicas
!set name_mkclass=Ajouter des classes

!if $job=regmanage
	!set name_all=Todos los participantes
	!set name_reguser=Inscribir a los participantes
	!set name_unreguser=Suprimir la inscripci�n de participantes
        !set name_display=Mostrar
        !set name_techvardisplay=selecci�n por variables t�cnicas
	!set name_description=Use las casillas de verificaci�n para seleccionar los participantes y las clases de su elecci�n y luego presione uno de los dos botones para cambiar sus derechos de acceso.
!endif

!if $job iswordof userprop teacher userlist getclasspwd
  !distribute items Cambiar, N�mero de registro, Comentarios, URL de una foto, Variables (t�cnicas),\
  Contrase�a de la clase,\
  Se requiere la contrase�a de registro del participante para poder modificar los datos de la cuenta, \
  Identificador externo, Acceso de estudiantes, Acceso de gesti�n, \
  Obligatorio�,Archivo local de una foto\
  into name_change,name_regnum,name_comments,name_photourl,name_vars,\
  name_classpassword,name_enterpassword,name_external_auth,name_inscript,name_gestion,\
  name_userprop_warning,name_photofile
  !set name_commentmess=Este comentario es visible para el participante.
  !set name_commentmessv5=Se ha introducido un cambio en el funcionamiento de wims, \
     su clase no tiene esto en cuenta debido a su antig�edad. Sin embargo \
     en las pr�ximas clases que crear� en este servidor, este comentario \
     ser� visible para el participante.
  !set name_commentuser=Comentario del profesor
  !set name_filterhelp=Estas variables son definidas por el profesor para constituir \
     grupos dentro de la clase para ciertas actividades.
  !exit
!endif

!if $job=transfer
  !set name_title_transfer=Transferir las actividades
  !distribute items Unir, Remplazar,Examinar into name_merge, name_replace,name_show
  !set name_error1=El participante no est� registrado en un curso correspondiente \
     a la clase actual, lo que evita la transferencia desde
  !set name_error2=Error de identificador de clase. \
    �Movimiento incorrecto o error de software?
  !set name_activities=!nosubst Detalles de actividades en $i (limitado a 1000 l�neas).
  !set name_totransfer=Aqu� est�n los otros cursos en los que el participante ha tenido actividades. \
  Haga clic en una acci�n para transferirlos.
  !exit
!endif

!if $job=recover
  !set name_empty= No se ha dado de baja a ning�n participante de esta clase.
  !set name_click=Pulse sobre un identificador de usuario (login) para volver a incluir al participante en la clase.
  !exit
!endif

!if $job=delprep
  !set name_delete=!nosubst �Est� seguro de que quiere dar de baja a  <b><em>$name_studentloc</em></b> de su $(name_struct[$type_class+1])?
  !set name_subclsinscrit=Est� registrado en (los registros se mantendr�n en caso de una nueva activaci�n de la cuenta):
  !exit
!endif

!exit

:transfer
<b>Notas</b>.
<ol>
  <li>"$name_merge" quiere decir unificar los conjuntos de actividades de los dos cursos.</li>
  <li>"$name_replace" se refiere  a que las actividades del otro curso van a eliminar completamente las de este. La sustituci�n no se realizar� si el primero est� vac�o.</li>
  <li>Las puntuaciones de los ex�menes y las actividades no puntuadas siempre se unifican.</li>
  <li>El registro de los detalles de los ejercicios o de los ex�menes no se transfiere.</li>
  <li>Despu�s de la operaci�n ($name_merge ou $name_replace), se borrar�n los registros de las actividades del participante en el otro curso.</li>
</ol>
!exit
