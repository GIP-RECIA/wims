!set lang_exists=yes

!set name_duplicateok=Examen duplicado correctamente.
!set name_title=Preparaci�n del examen
!set wims_name_mainpage=P�gina principal del examen

!if $activetest<=0
  !set name_title=!nosubst Preparaci�n del examen
!else
  !set name_title=!nosubst Gesti�n del examen
!endif

!read adm/lang/date.phtml.$lang
!read adm/lang/sheetexam.phtml.$lang
!set wims_name_scoreexam=!nosubst $wims_name_myscore
!set wims_name_title_scoreexam=Notas del examen
!set name_Options=Opciones
!set name_All=Todas

!set name_done=hecho

!set name_instructions=Instrucciones&nbsp;

!distribute lines Disponibles\
Seleccionados\
into name_Availables, name_Selected

!distribute lines Terminar este ensayo de examen\
Volver a trabajar en el examen\
Vista del profesor del examen\
Presentaci�n a los participantes\
Detalle de la puntuaci�n actual\
�Este examen est� vac�o! Posiblemente sea un error de manipulaci�n de su profesor.\
Contenido del examen&nbsp;\
Actualmente, este examen est� cerrado para su conexi�n.\
Solo puede realizar una vez este examen.\
Por lo tanto no puede mejorar su puntuaci�n.\
Es su �ltimo ensayo disponible. �Preste atenci�n!\
la cuenta regresiva comenzar� y el n�mero de sesiones restantes disminuir� en 1.\
la cuenta regresiva comenzar�.\
Requiere realizar exitosamente otros ejercicios\
Puntuaci�n de este ensayo del examen\
into wims_name_endexam,wims_name_backexam,wims_name_teacherview,name_presentation,\
name_scoreexam,name_empty,name_content,name_examclosed,name_exam1,name_exam5,\
name_lasttry,name_exam7,name_exam8,name_depend,name_scoreexam2

!set name_exam2=!nosubst Puede hacer este examen hasta $stries veces en total.
!set name_exam3=!nosubst Ya ha terminado su examen con $tried ensayos,
!set name_exam4=!nosubst Ya ha hecho el examen <strong>$tried veces</strong>.
!set name_exam6=!nosubst Actualmente le quedan <strong>$tryremain ensayo(s) </strong> de examen.
!set name_exam6bis=Ya no le quedan ensayos disponibles.
!set name_exam9=!nosubst Cada ensayo de examen no puede durar m�s de <strong>$sdure minutos</strong>
!set name_exam9bis=!nosubst El ensayo de examen no puede durar m�s de <strong>$sdure minutos</strong>
!set name_exam10=Cuando haga clic en alguno de los ejercicios anteriores,
!set name_exam11=!nosubst Las respuestas a las preguntas de los ejercicios enviadas \
 cuando termine el examen o despu�s de \
  <strong>$time_end</strong> no se tomar�n en cuenta.

!set name_simulation=<strong>Este examen est� en modo simulaci�n.</strong> Funciona exactamente igual que el examen verdadero\
pero no se puede guardar la puntuaci�n y el ensayo no se tendr� en cuenta.<br/> Si usted prueba este examen,\
 tendr� que desconectarse de la clase antes de volver a la p�gina de gesti�n de recursos de su clase.

!set wims_name_examremain=!nosubst Tiempo restante de este ensayo de examen (ensayo $[$stries-$tryremain]): $

!distribute lines en espera\
Todav�a no ha comenzado a trabajar en este examen.\
Comenzar a trabajar.\
La puntuaci�n actual no se tomar� en cuenta, porque el examen est� en modo simulaci�n.\
into name_pending,name_begin1,name_begin2,name_simulation2

!set name_timeleft=!nosubst �Se acab� el tiempo! Descon�ctese.
!set name_realscore=!nosubst Su puntuaci�n real para este examen es $lastscore.
!set name_bestscore=!nosubst Su puntuaci�n para este examen es $[$lastscore*$scoremax/10]/$scoremax.
!set name_bestscore2=La mejor puntuaci�n es la que se tomar� en cuenta.


!! ---------------------------
!! nueva parte

!set statutname=$(wims_name_shstatus[1]),$wims_name_shstatus

!set name_desc_duration=Un cron�metro comienza a funcionar desde que se muestra la primera pregunta.
!set name_units_duration=minutos
!let name_mkexam=Crear el examen

!let name_shinfo_cutt=Horas de corte

!! distintos comentarios de la p�gina de gesti�n
!distribute lines Informaciones generales\
Contenido del examen\
Por favor utilice los enlances del men� para definir el contenido del examen (los ejercicios que van a componer el examen se escogen entre las hojas activadas).\
into name_info,name_contentsuper,name_warning

!! titre du tableau de contenu de l'examen (file examcontent.phtml)
!let name_extab=!nosubst $wims_name_number,$wims_name_title,Contenido,$name_weight,$name_dependency,$wims_name_comment,$name_Options,$wims_name_action,Desplazar

!set name_contenu=Elecci�n del contenido
!let name_cpsheet1=Usted agregar� de una vez todos los ejercicios de la hoja seleccionada \
despu�s de los ejercicios ya presentes. <br/>\
  Cada ejercicio tendr� un peso de 1.

!let name_cpsheet3=T�tulo de ejercicio gen�rico (opcional)
!let name_cpsheet4=Los ejercicios se numerar�n autom�ticamente. Si no completa este campo, \
  mantendr�n el t�tulo que ten�an en la hoja de trabajo.

!set name_warning_nonfinished=Todav�a no ha completado todos los ejercicios de este examen. \
  Terminar ahora congelar� la puntuaci�n y consumir� un ensayo de examen,\
   y usted se ver� obligado a recomenzar desde el principio la pr�xima vez.<br>\
   �Seguro que quiere terminar?
!set name_warning_nonfinished1=Todav�a no ha completado todos los ejercicios de este examen. \
  �Seguro que quiere terminar? No podr� retomar el examen.
!set wims_name_cpexam=Copiar un examen activo.

!set name_cpexam1=Usted va a copiar el contenido de otro examen activo. Luego podr� modificar el contenido del examen creado hasta cuando lo active.

!! TODO_lang
!set name_msg_exam_withip=Las notas marcadas con &ast; se redujeron debido a un cambio\
    de direcci�n IP durante la sesi�n de examen.
!set name_real_score=!nosubst $realtsco sin tener en cuenta el cambio de direcci�n IP
!set name_warning_notstartip=Tenga en cuenta que su direcci�n IP actual no es la del inicio de esta sesi�n de examen. Todav�a puede hacer los ejercicios y\
  se registrar�n las puntuaciones obtenidas. Sin embargo, no se utilizar�n, por ahora, en el c�lculo de la nota del examen.
!set name_modedesc=Este examen est� en modo carrera. Las reglas son las siguientes:<ul> <li>Los ejercicios se activan uno tras otro;</li><li>Alcanzar una puntuaci�n no m�xima en un ejercicio detiene la carrera.</li> </ul>
!set name_courseend=!nosubst No respondiste correctamente el ejercicio de $coursefalse: ��la carrera ha terminado!!
!set name_exammode_list=Est�ndar, Carrera
!set name_progress=Progreso de la carrera
!set name_studentloc=!nosubst $user_firstname $user_lastname
!set wims_name_coursewatch=Mirar la carrera
