!set lang_exists=yes

!read adm/lang/sheetexam.phtml.$modu_lang
!set name_from=a partir de
!set name_student1=!nosubst Puede trabajar en esta hoja hasta el $expday $expmon $expyear.
!set name_student2=Esta hoja ha expirado. Puede seguir \
 trabajando en ella, pero sus puntuaciones ya no serán tenidas en cuenta.
!set name_student3= Por el momento no está autorizado a consultar el contenido de esta hoja.\
  Por favor contacte con su profesor.
!set name_student5=Por ahora, tu profesor ha suspendido el registro de calificaciones\
en esta hoja, pero puedes seguir trabajando.

!set name_score=!nosubst $[$got] de $[$require] puntos obtenidos, calidad
!set name_score2=!nosubst $[$require] puntos exigidos

!set name_scoreopen=La grabación de notas está abierta.
!set name_scoreclose=La grabación de notas está cerrada.
!set name_scoreclosesup=Su maestro no autoriza detener la grabación de calificaciones.

!set name_textsource=Aquí está el archivo fuente de esta hoja. Puedes importarlo \
   en su salón de clases usando copiar y pegar.
!set name_answer_i=Respuesta al ejercicio

!set name_title=!nosubst $wims_name_sheet $wims_name_number$sh
!set name_exo=!defof name_exo in wimshome/public_html/scripts/oef/$modu_lang/names.proc
!set name_noprint=!defof name_noprint in oef/$modu_lang/names.proc
!set name_answers=!defof name_answers in oef/$modu_lang/names.proc

!distribute items nivel aproximado, duración \
into name_level,name_duration

!set name_skillbullet=Competencia(s) del folleto en cuestión
!set name_indivsupervisor=Esta hoja se individualiza mediante una variable técnica. \
  Puede ver las diferentes formas de la hoja en función de los posibles valores de la variable utilizando el menú desplegable a continuación.
!set name_choosevalue=Valor mostrado
!set name_novalue=Sin valor
!set name_msgusergroup=!nosubst Esta hoja depende de su grupo de trabajo. Estas en el grupo $uservartechvalue.
!set name_msgusergroupempty=!nosubst Esta hoja depende de su grupo de trabajo. No estás en ningún grupo.

!distribute items Apellido,Nombre,Classe into name_lastname,name_firstname,name_class
!set wims_name_latexuser=Version latex individualisée de la feuille
