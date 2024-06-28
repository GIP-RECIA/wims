!set lang_exists=yes

!if $wims_read_parm!=
  !goto $wims_read_parm
!endif

!set name_donchoose=Elección de datos
!set name_studentloc=!nosubst $user_firstname $user_lastname
!set name_studentglo=!nosubst $wims_name_firstname $wims_name_lastname

!distribute line Media de la clase\
Media\
Media de las notas positivas\
Media global\
Media del grupo\
into name_classAverage,name_Average,name_posAverage,name_globalaverage,\
name_groupAverage
!set name_dtexolog=Último ejercicio <br>registrado

!set name_partdeleted=Participantes borrados
!set wims_name_reg_ex=Lista de los ejercicios registrados
!!set name_transfer=Transferir sus actividades desde otras clases

!set name_minmax=mín/media/máx de la clase

!set name_manualscore=Notas asignadas por el profesor
!set name_autoscore=Notas registradas por el servidor
!set name_manual_notes=global,prof.,auto
!set name_examnote=Notas de exámenes
!set name_auto=Media de las notas en las hojas y exámenes seleccionados ponderados por los pesos\
  asignados a cada una de esas actividades (por defecto es la media de todas las hojas y exámenes).

!set name_severitylevels=Niveles de severidad de las hojas de trabajo
!set name_formula=Número,Peso,Regla de cálculo
!set name_sheetstatut=prep,activa,expirada,ocultada

!distribute items Examen,Hoja,Ejercicio,Comienzo,Puntuación,Sesión,\
 Porcentaje de puntos acumulados,equiv., Duración\
into name_Exam,name_Sheet,name_Exercise,name_Start,name_Score,name_Session,\
name_done,name_equiv,name_Duration

!set name_formula_comment=Puede definir las reglas de cálculo (niveles de severidad) y los pesos de las hojas de \
trabajo en la tabla siguiente. Aquí, Q depende de la nota de calidad, \
usted puede escoger I entre los tres indicadores siguientes: I0 depende\
del número de puntos acumulados, I1 de la media de las n mejores puntuaciones obtenidas si 10n es \
es el número de puntos requeridos (nivel de éxito) e I2 depende del mínimo de las n \
mejoras puntuaciones precedentes (nivel de adquisición).\
Puede mirar la ayuda para conocer más detalles.\
Las notas serán calculadas con un máximo de
!set name_formula2=!nosubst Notas calculadas sobre un máximo de $scoremax
!set name_pickup=Seleccione las hojas para <br>mostrar los resultados por hoja&nbsp;
!set name_warning= Ha efectuado una petición ilegal.

!set name_click=Pulse sobre un nombre para ver los detalles de su trabajo
!set name_affi=la calidad,el porcentaje de puntos acumulados,las notas, el nivel de éxito, el nivel de adquisición
!set name_workdetail=Detalles del trabajo de
!set name_activesession=Este participante tiene una sesión de examen activa&nbsp;

!distribute items Estación de conexión, Tiempo restante, Sesión de examen de ,minutos\
into name_connecting,name_remaining_time,name_exam_session,name_minutes

!set name_noyetparticipant=Esta clase no tiene ningún participante aún.

!set name_warning_no_sequence=Usted ha activado la reorganización por secuencias pero \
 no ha definido ninguna secuencia. En consecuencia ninguna nota puede aparecer.

!set name_title_showsheet=!nosubst Detalles del trabajo sobre la hoja $numshowsheet<br>$sh_title
!set name_percentagegot=Porcentaje de puntos acumulados
!set name_qualitygot=Calidad del trabajo calculada sobre un máximo de 10
!set name_percentagedone=Porcentaje de puntos acumulados
!set name_percentagebest=Tasa de éxito sobre las mejores notas

!set name_post=mostrar
!set name_Post=Mostrar

!set name_sheetdetail=Puede hacer clic en el encabezado de la columna correspondiente \
 a la hoja para tener una visión global de los resultados de todos los estudiantes\
 en todos los ejercicios de la hoja seleccionada.

!if $job iswordof userprop teacher
  !distribute items Cambiar,Número de inscripción,Comentarios,URL de una fotografía,Variables (técnicas),\
  Contraseña de la clase,Introduzca la contraseña para la inscripción de participantes,\
  Identificador externo,Acceso de estudiante, Acceso de gestión,\
  Obligatorio\
  into name_change,name_regnum,name_comments,name_photourl,name_vars,\
  name_classpassword,name_enterpassword,name_external_auth,name_inscript,name_gestion,\
  name_userprop_warning
  !exit
!endif

!if $job=examcheck
  !set name_title_examcheck=!nosubst Detalles de los exámenes hechos por $name_studentloc
  !set name_no_exampart=Este participante no ha realizado aún ningún examen.
  !set name_exampart=Sesiones de examen efectuadas por este participante (pulse sobre un \
   ejercicio para ver su contenido):
  !set name_msg_exam_withip=Les notes indiquées avec un symbole &ast; ont été réduites suite à un changement\
    d'adresse IP pendant la session de l'examen.
  !set name_real_score=!nosubst $realtsco sans tenir compte du changement d'adresse IP
  !exit
!endif
!if $job=getraw
  !set name_title_getraw=!nosubst Detalles del trabajo de $name_studentloc<br>(datos en bruto)
  !exit
!endif

!set name_direct_score=lista y notas en directo

!if $job=csv
  !distribute line Este es el fichero\
    que puede descargar y abrir con el software de hoja de cálculo que prefiera.\
    Las propiedades han sido modificadas para los siguientes participantes&nbsp;\
    Participantes añadidos&nbsp;\
    La incorporación de nuevos participantes será ignorada porque no queda espacio libre.\
    Notas ingresadas manualmente han sido enviadas.\
    Las notas calculadas por el servidor (media y notas de hojas/exámenes) no pueden ser modificadas&nbsp;\
    Los datos relativos a los participantes borrados han sido ignorados&nbsp;\
    Los siguientes identificadores de usuario no pueden ser añadidos porque son demasiado cortos&nbsp;\
    Los siguientes identificadores de usuario no existen y no pueden ser añadidos, debido a información insuficiente/incorrecta en los datos enviados&nbsp;\
    Los siguientes identificadores de usuario no existen y no pueden ser añadidos (mala información o clase llena)&nbsp;\
    Solo se graban notas manuales para columnas ya existentes.\
    No hay ninguna diferencia entre los datos enviados y los ya existentes en la clase.\
    Revisar las notas\
    Para cargar los datos de la clase en su hoja de cálculo (solo los estudiantes), especifique&nbsp\
    Formato\
    Columnas\
    Para enviar datos de su hoja de cálculo a la clase, especifique\
    El fichero de datos\
    Formatos aceptados\
    Para los participantes nuevos, la columna contraseña es obligatoria.\
  into name_file,name_download,name_infochanged,name_added,name_warning1,name_warning2,\
  name_warning3,name_warning4,name_badlogin,name_nologin1,name_nologin2,name_manual1,name_data1,\
    name_check,name_data2,name_format,name_column,name_data3,name_data,name_format2,\
    name_passwarning

  !set name_deposit=!nosubst El fichero de hoja de cálculo <span class="tt">$wims_deposit</span> ha sido reconocido correctamente.
  !set name_indicateur=Indicador&nbsp;
  !set name_techvar=Variables técnicas&nbsp;
  !set name_regvar=Variables de inscripción&nbsp;
  !set name_all=Todo
  !set name_allscore=Todas las puntuaciones
  !set name_usedindiv=!nosubst Vous utilisez des variables techniques ($list_sheettechvar) pour individualiser des feuilles de travail actives. La modification de la valeur d'une telle variable\
technique pour un élève (en utilisant l'importation de la liaison tableur) entraînera la modification du contenu de ces feuilles.\
Les notes de l'élève relativement à ces feuilles pourront potentiellement changer.
!endif

!set name_topten=!nosubst Top $class_topscores de las medias clase

!set name_tryhelp= <div>\
  El primer número representa el número de intentos terminados cuya puntuación \
  fue correctamente registrada.</div><div>\
  Añadir el segundo número entrega el número total de intentos realizados \
  mientras el registro de notas de la hoja se encontraba \
  abierto.\
  </div><div>\
  Si un tercer número se muestra, con él se indica el número máximo de intentos \
  contabilizados (número fijado por el profesor).\
  </div>


!if $job=getuser
  !set name_group=!nosubst (groupe $indtechvarvalue)
  !set name_withoutgroup=(sans groupe)
  !set name_deadline=Deadline
  !! same as freeworks name_givedate
  !set name_handedin=Last handed in
  !set name_codownload=Score and remarks visibile (seen)
  !set name_fwscoring=Manual column
  !set name_putiworkco=Open for marking
!endif

!if $job=userexam
!! TODO_lang 
  !set name_timeleft=théorique,réel avec les dépendances de score
!endif

:end
!exit
