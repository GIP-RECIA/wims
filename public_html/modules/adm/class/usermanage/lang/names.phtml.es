!set lang_exists=yes

!if $wims_read_parm!=
  !goto $wims_read_parm
!endif

!set name_studentloc=!nosubst $user_lastname $user_firstname
!set name_studentglo=!nosubst $wims_name_lastname $wims_name_firstname

!set name_click=Pulse sobre un nombre para ver los detalles de su trabajo
!set name_noyetparticipant=Esta clase no tiene ningún participante aún.
!set name_transfer=Transferir sus actividades desde otras clases
!set name_filter=Variables técnicas
!set name_mkclass=Ajouter des classes

!if $job=regmanage
	!set name_all=Todos los participantes
	!set name_reguser=Inscribir a los participantes
	!set name_unreguser=Suprimir la inscripción de participantes
        !set name_display=Mostrar
        !set name_techvardisplay=selección por variables técnicas
	!set name_description=Use las casillas de verificación para seleccionar los participantes y las clases de su elección y luego presione uno de los dos botones para cambiar sus derechos de acceso.
!endif

!if $job iswordof userprop teacher userlist getclasspwd
  !distribute items Cambiar, Número de registro, Comentarios, URL de una foto, Variables (técnicas),\
  Contraseña de la clase,\
  Se requiere la contraseña de registro del participante para poder modificar los datos de la cuenta, \
  Identificador externo, Acceso de estudiantes, Acceso de gestión, \
  Obligatorio ,Archivo local de una foto\
  into name_change,name_regnum,name_comments,name_photourl,name_vars,\
  name_classpassword,name_enterpassword,name_external_auth,name_inscript,name_gestion,\
  name_userprop_warning,name_photofile
  !set name_commentmess=Este comentario es visible para el participante.
  !set name_commentmessv5=Se ha introducido un cambio en el funcionamiento de wims, \
     su clase no tiene esto en cuenta debido a su antigüedad. Sin embargo \
     en las próximas clases que creará en este servidor, este comentario \
     será visible para el participante.
  !set name_commentuser=Comentario del profesor
  !set name_filterhelp=Estas variables son definidas por el profesor para constituir \
     grupos dentro de la clase para ciertas actividades.
  !exit
!endif

!if $job=transfer
  !set name_title_transfer=Transferir las actividades
  !distribute items Unir, Remplazar,Examinar into name_merge, name_replace,name_show
  !set name_error1=El participante no está registrado en un curso correspondiente \
     a la clase actual, lo que evita la transferencia desde
  !set name_error2=Error de identificador de clase. \
    ¿Movimiento incorrecto o error de software?
  !set name_activities=!nosubst Detalles de actividades en $i (limitado a 1000 líneas).
  !set name_totransfer=Aquí están los otros cursos en los que el participante ha tenido actividades. \
  Haga clic en una acción para transferirlos.
  !exit
!endif

!if $job=recover
  !set name_empty= No se ha dado de baja a ningún participante de esta clase.
  !set name_click=Pulse sobre un identificador de usuario (login) para volver a incluir al participante en la clase.
  !exit
!endif

!if $job=delprep
  !set name_delete=!nosubst ¿Está seguro de que quiere dar de baja a  <b><em>$name_studentloc</em></b> de su $(name_struct[$type_class+1])?
  !set name_subclsinscrit=Está registrado en (los registros se mantendrán en caso de una nueva activación de la cuenta):
  !exit
!endif

!exit

:transfer
<b>Notas</b>.
<ol>
  <li>"$name_merge" quiere decir unificar los conjuntos de actividades de los dos cursos.</li>
  <li>"$name_replace" se refiere  a que las actividades del otro curso van a eliminar completamente las de este. La sustitución no se realizará si el primero está vacío.</li>
  <li>Las puntuaciones de los exámenes y las actividades no puntuadas siempre se unifican.</li>
  <li>El registro de los detalles de los ejercicios o de los exámenes no se transfiere.</li>
  <li>Después de la operación ($name_merge ou $name_replace), se borrarán los registros de las actividades del participante en el otro curso.</li>
</ol>
!exit
