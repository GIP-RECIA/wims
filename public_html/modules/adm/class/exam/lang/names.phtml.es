!set lang_exists=yes

!set name_duplicateok=Examen duplicado correctamente.
!set name_title=Preparación del examen
!set wims_name_mainpage=Página principal del examen

!if $activetest<=0
  !set name_title=!nosubst Preparación del examen
!else
  !set name_title=!nosubst Gestión del examen
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
Presentación a los participantes\
Detalle de la puntuación actual\
¡Este examen está vacío! Posiblemente sea un error de manipulación de su profesor.\
Contenido del examen&nbsp;\
Actualmente, este examen está cerrado para su conexión.\
Solo puede realizar una vez este examen.\
Por lo tanto no puede mejorar su puntuación.\
Es su último ensayo disponible. ¡Preste atención!\
la cuenta regresiva comenzará y el número de sesiones restantes disminuirá en 1.\
la cuenta regresiva comenzará.\
Requiere realizar exitosamente otros ejercicios\
Puntuación de este ensayo del examen\
into wims_name_endexam,wims_name_backexam,wims_name_teacherview,name_presentation,\
name_scoreexam,name_empty,name_content,name_examclosed,name_exam1,name_exam5,\
name_lasttry,name_exam7,name_exam8,name_depend,name_scoreexam2

!set name_exam2=!nosubst Puede hacer este examen hasta $stries veces en total.
!set name_exam3=!nosubst Ya ha terminado su examen con $tried ensayos,
!set name_exam4=!nosubst Ya ha hecho el examen <strong>$tried veces</strong>.
!set name_exam6=!nosubst Actualmente le quedan <strong>$tryremain ensayo(s) </strong> de examen.
!set name_exam6bis=Ya no le quedan ensayos disponibles.
!set name_exam9=!nosubst Cada ensayo de examen no puede durar más de <strong>$sdure minutos</strong>
!set name_exam9bis=!nosubst El ensayo de examen no puede durar más de <strong>$sdure minutos</strong>
!set name_exam10=Cuando haga clic en alguno de los ejercicios anteriores,
!set name_exam11=!nosubst Las respuestas a las preguntas de los ejercicios enviadas \
 cuando termine el examen o después de \
  <strong>$time_end</strong> no se tomarán en cuenta.

!set name_simulation=<strong>Este examen está en modo simulación.</strong> Funciona exactamente igual que el examen verdadero\
pero no se puede guardar la puntuación y el ensayo no se tendrá en cuenta.<br/> Si usted prueba este examen,\
 tendrá que desconectarse de la clase antes de volver a la página de gestión de recursos de su clase.

!set wims_name_examremain=!nosubst Tiempo restante de este ensayo de examen (ensayo $[$stries-$tryremain]): $

!distribute lines en espera\
Todavía no ha comenzado a trabajar en este examen.\
Comenzar a trabajar.\
La puntuación actual no se tomará en cuenta, porque el examen está en modo simulación.\
into name_pending,name_begin1,name_begin2,name_simulation2

!set name_timeleft=!nosubst ¡Se acabó el tiempo! Desconéctese.
!set name_realscore=!nosubst Su puntuación real para este examen es $lastscore.
!set name_bestscore=!nosubst Su puntuación para este examen es $[$lastscore*$scoremax/10]/$scoremax.
!set name_bestscore2=La mejor puntuación es la que se tomará en cuenta.


!! ---------------------------
!! nueva parte

!set statutname=$(wims_name_shstatus[1]),$wims_name_shstatus

!set name_desc_duration=Un cronómetro comienza a funcionar desde que se muestra la primera pregunta.
!set name_units_duration=minutos
!let name_mkexam=Crear el examen

!let name_shinfo_cutt=Horas de corte

!! distintos comentarios de la página de gestión
!distribute lines Informaciones generales\
Contenido del examen\
Por favor utilice los enlances del menú para definir el contenido del examen (los ejercicios que van a componer el examen se escogen entre las hojas activadas).\
into name_info,name_contentsuper,name_warning

!! titre du tableau de contenu de l'examen (file examcontent.phtml)
!let name_extab=!nosubst $wims_name_number,$wims_name_title,Contenido,$name_weight,$name_dependency,$wims_name_comment,$name_Options,$wims_name_action,Desplazar

!set name_contenu=Elección del contenido
!let name_cpsheet1=Usted agregará de una vez todos los ejercicios de la hoja seleccionada \
después de los ejercicios ya presentes. <br/>\
  Cada ejercicio tendrá un peso de 1.

!let name_cpsheet3=Título de ejercicio genérico (opcional)
!let name_cpsheet4=Los ejercicios se numerarán automáticamente. Si no completa este campo, \
  mantendrán el título que tenían en la hoja de trabajo.

!set name_warning_nonfinished=Todavía no ha completado todos los ejercicios de este examen. \
  Terminar ahora congelará la puntuación y consumirá un ensayo de examen,\
   y usted se verá obligado a recomenzar desde el principio la próxima vez.<br>\
   ¿Seguro que quiere terminar?
!set name_warning_nonfinished1=Todavía no ha completado todos los ejercicios de este examen. \
  ¿Seguro que quiere terminar? No podrá retomar el examen.
!set wims_name_cpexam=Copiar un examen activo.

!set name_cpexam1=Usted va a copiar el contenido de otro examen activo. Luego podrá modificar el contenido del examen creado hasta cuando lo active.

!! TODO_lang
!set name_msg_exam_withip=Las notas marcadas con &ast; se redujeron debido a un cambio\
    de dirección IP durante la sesión de examen.
!set name_real_score=!nosubst $realtsco sin tener en cuenta el cambio de dirección IP
!set name_warning_notstartip=Tenga en cuenta que su dirección IP actual no es la del inicio de esta sesión de examen. Todavía puede hacer los ejercicios y\
  se registrarán las puntuaciones obtenidas. Sin embargo, no se utilizarán, por ahora, en el cálculo de la nota del examen.
!set name_modedesc=Este examen está en modo carrera. Las reglas son las siguientes:<ul> <li>Los ejercicios se activan uno tras otro;</li><li>Alcanzar una puntuación no máxima en un ejercicio detiene la carrera.</li> </ul>
!set name_courseend=!nosubst No respondiste correctamente el ejercicio de $coursefalse: ¡¡la carrera ha terminado!!
!set name_exammode_list=Estándar, Carrera
!set name_progress=Progreso de la carrera
!set name_studentloc=!nosubst $user_firstname $user_lastname
!set wims_name_coursewatch=Mirar la carrera
