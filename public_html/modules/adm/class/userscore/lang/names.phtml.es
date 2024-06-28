!set lang_exists=yes

!if $wims_read_parm!=
  !goto $wims_read_parm
!endif

!set name_donchoose=Elecci�n de datos
!set name_studentloc=!nosubst $user_firstname $user_lastname
!set name_studentglo=!nosubst $wims_name_firstname $wims_name_lastname

!distribute line Media de la clase\
Media\
Media de las notas positivas\
Media global\
Media del grupo\
into name_classAverage,name_Average,name_posAverage,name_globalaverage,\
name_groupAverage
!set name_dtexolog=�ltimo ejercicio <br>registrado

!set name_partdeleted=Participantes borrados
!set wims_name_reg_ex=Lista de los ejercicios registrados
!!set name_transfer=Transferir sus actividades desde otras clases

!set name_minmax=m�n/media/m�x de la clase

!set name_manualscore=Notas asignadas por el profesor
!set name_autoscore=Notas registradas por el servidor
!set name_manual_notes=global,prof.,auto
!set name_examnote=Notas de ex�menes
!set name_auto=Media de las notas en las hojas y ex�menes seleccionados ponderados por los pesos\
  asignados a cada una de esas actividades (por defecto es la media de todas las hojas y ex�menes).

!set name_severitylevels=Niveles de severidad de las hojas de trabajo
!set name_formula=N�mero,Peso,Regla de c�lculo
!set name_sheetstatut=prep,activa,expirada,ocultada

!distribute items Examen,Hoja,Ejercicio,Comienzo,Puntuaci�n,Sesi�n,\
 Porcentaje de puntos acumulados,equiv., Duraci�n\
into name_Exam,name_Sheet,name_Exercise,name_Start,name_Score,name_Session,\
name_done,name_equiv,name_Duration

!set name_formula_comment=Puede definir las reglas de c�lculo (niveles de severidad) y los pesos de las hojas de \
trabajo en la tabla siguiente. Aqu�, Q depende de la nota de calidad, \
usted puede escoger I entre los tres indicadores siguientes: I0 depende\
del n�mero de puntos acumulados, I1 de la media de las n mejores puntuaciones obtenidas si 10n es \
es el n�mero de puntos requeridos (nivel de �xito) e I2 depende del m�nimo de las n \
mejoras puntuaciones precedentes (nivel de adquisici�n).\
Puede mirar la ayuda para conocer m�s detalles.\
Las notas ser�n calculadas con un m�ximo de
!set name_formula2=!nosubst Notas calculadas sobre un m�ximo de $scoremax
!set name_pickup=Seleccione las hojas para <br>mostrar los resultados por hoja&nbsp;
!set name_warning= Ha efectuado una petici�n ilegal.

!set name_click=Pulse sobre un nombre para ver los detalles de su trabajo
!set name_affi=la calidad,el porcentaje de puntos acumulados,las notas, el nivel de �xito, el nivel de adquisici�n
!set name_workdetail=Detalles del trabajo de
!set name_activesession=Este participante tiene una sesi�n de examen activa&nbsp;

!distribute items Estaci�n de conexi�n, Tiempo restante, Sesi�n de examen de ,minutos\
into name_connecting,name_remaining_time,name_exam_session,name_minutes

!set name_noyetparticipant=Esta clase no tiene ning�n participante a�n.

!set name_warning_no_sequence=Usted ha activado la reorganizaci�n por secuencias pero \
 no ha definido ninguna secuencia. En consecuencia ninguna nota puede aparecer.

!set name_title_showsheet=!nosubst Detalles del trabajo sobre la hoja $numshowsheet<br>$sh_title
!set name_percentagegot=Porcentaje de puntos acumulados
!set name_qualitygot=Calidad del trabajo calculada sobre un m�ximo de 10
!set name_percentagedone=Porcentaje de puntos acumulados
!set name_percentagebest=Tasa de �xito sobre las mejores notas

!set name_post=mostrar
!set name_Post=Mostrar

!set name_sheetdetail=Puede hacer clic en el encabezado de la columna correspondiente \
 a la hoja para tener una visi�n global de los resultados de todos los estudiantes\
 en todos los ejercicios de la hoja seleccionada.

!if $job iswordof userprop teacher
  !distribute items Cambiar,N�mero de inscripci�n,Comentarios,URL de una fotograf�a,Variables (t�cnicas),\
  Contrase�a de la clase,Introduzca la contrase�a para la inscripci�n de participantes,\
  Identificador externo,Acceso de estudiante, Acceso de gesti�n,\
  Obligatorio\
  into name_change,name_regnum,name_comments,name_photourl,name_vars,\
  name_classpassword,name_enterpassword,name_external_auth,name_inscript,name_gestion,\
  name_userprop_warning
  !exit
!endif

!if $job=examcheck
  !set name_title_examcheck=!nosubst Detalles de los ex�menes hechos por $name_studentloc
  !set name_no_exampart=Este participante no ha realizado a�n ning�n examen.
  !set name_exampart=Sesiones de examen efectuadas por este participante (pulse sobre un \
   ejercicio para ver su contenido):
  !set name_msg_exam_withip=Les notes indiqu�es avec un symbole &ast; ont �t� r�duites suite � un changement\
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
    que puede descargar y abrir con el software de hoja de c�lculo que prefiera.\
    Las propiedades han sido modificadas para los siguientes participantes&nbsp;\
    Participantes a�adidos&nbsp;\
    La incorporaci�n de nuevos participantes ser� ignorada porque no queda espacio libre.\
    Notas ingresadas manualmente han sido enviadas.\
    Las notas calculadas por el servidor (media y notas de hojas/ex�menes) no pueden ser modificadas&nbsp;\
    Los datos relativos a los participantes borrados han sido ignorados&nbsp;\
    Los siguientes identificadores de usuario no pueden ser a�adidos porque son demasiado cortos&nbsp;\
    Los siguientes identificadores de usuario no existen y no pueden ser a�adidos, debido a informaci�n insuficiente/incorrecta en los datos enviados&nbsp;\
    Los siguientes identificadores de usuario no existen y no pueden ser a�adidos (mala informaci�n o clase llena)&nbsp;\
    Solo se graban notas manuales para columnas ya existentes.\
    No hay ninguna diferencia entre los datos enviados y los ya existentes en la clase.\
    Revisar las notas\
    Para cargar los datos de la clase en su hoja de c�lculo (solo los estudiantes), especifique&nbsp\
    Formato\
    Columnas\
    Para enviar datos de su hoja de c�lculo a la clase, especifique\
    El fichero de datos\
    Formatos aceptados\
    Para los participantes nuevos, la columna contrase�a es obligatoria.\
  into name_file,name_download,name_infochanged,name_added,name_warning1,name_warning2,\
  name_warning3,name_warning4,name_badlogin,name_nologin1,name_nologin2,name_manual1,name_data1,\
    name_check,name_data2,name_format,name_column,name_data3,name_data,name_format2,\
    name_passwarning

  !set name_deposit=!nosubst El fichero de hoja de c�lculo <span class="tt">$wims_deposit</span> ha sido reconocido correctamente.
  !set name_indicateur=Indicador&nbsp;
  !set name_techvar=Variables t�cnicas&nbsp;
  !set name_regvar=Variables de inscripci�n&nbsp;
  !set name_all=Todo
  !set name_allscore=Todas las puntuaciones
  !set name_usedindiv=!nosubst Vous utilisez des variables techniques ($list_sheettechvar) pour individualiser des feuilles de travail actives. La modification de la valeur d'une telle variable\
technique pour un �l�ve (en utilisant l'importation de la liaison tableur) entra�nera la modification du contenu de ces feuilles.\
Les notes de l'�l�ve relativement � ces feuilles pourront potentiellement changer.
!endif

!set name_topten=!nosubst Top $class_topscores de las medias clase

!set name_tryhelp= <div>\
  El primer n�mero representa el n�mero de intentos terminados cuya puntuaci�n \
  fue correctamente registrada.</div><div>\
  A�adir el segundo n�mero entrega el n�mero total de intentos realizados \
  mientras el registro de notas de la hoja se encontraba \
  abierto.\
  </div><div>\
  Si un tercer n�mero se muestra, con �l se indica el n�mero m�ximo de intentos \
  contabilizados (n�mero fijado por el profesor).\
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
  !set name_timeleft=th�orique,r�el avec les d�pendances de score
!endif

:end
!exit
