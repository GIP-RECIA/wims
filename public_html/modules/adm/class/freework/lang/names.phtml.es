!set lang_exists=yes
wims_name_freework=Trabajo libre
name_info=Información general
name_content=Contenido de la tarea
name_parametrage=Parametrización de la tarea
name_listwork=Lista de tareas entregadas
name_ltsolution=Tareas corregidas (y fecha de depósito)
name_ltannotation=Fecha de corrección
name_solutiondeposit=Depósito de la corrección
name_correctedwork=Tarea corregida
name_studentglo=Nombre y apellido
name_givedate=Tareas (y fecha de depósito)
name_mega=Mb
name_studentname=!nosubst $lastname $firstname
!let name_shinfo=!nosubst $wims_name_title,\
Tipo,\
$wims_name_Status,\
Texto de explicación,\
$wims_name_comment,\
Fecha de expiración,\
Fecha de entrega,\
Fecha de corrección,\
Calificación,\
El profesor siempre puede ver la tarea de los alumnos.,\
Possibility of an early hand in of homework

name_type_list=Entrega, Entrega y recuperación, Respuesta en línea
name_desc_title=!nosubst Limitado a $title_limit caracteres
name_desc_type=Una vez que se crea la tarea, ya no podrá cambiar su tipo.
name_desc_desc=!nosubst Limitado a $desc_limit caracteres; Etiquetas html permitidas
name_desc_comment=Visible solo para el profesor.
name_desc_scoring=Le permite asignar una puntuación manual a cada participante
name_desc_seealltime=Si esta casilla está marcada, el profesor podrá ver las tareas de los estudiantes antes de la fecha de finalización de la tarea (sin embargo, no será posible corregirlas).
name_desc_studentclose=After handing in homework students can no longer modify their work.
name_mkfreework=Crea la tarea
name_tmkfreework=!nosubst Créación de la asignación libre $freework
name_managefreework=!nosubst Gestión de la asignación libre $freework
name_datasubject=Archivos para el tema
name_datasolution=Archivos para la corrección
name_desc_deadline=Fecha en la que los alumnos deben devolver el tema.
name_desc_soldate=Fecha a partir de la cual la hoja de respuestas estará disponible para descargar.
name_nodeposit=Ya no puede depositar un archivo porque el contenido de la clase está muy cerca o ha excedido el límite de espacio en disco permitido. Lo sentimos.
name_depos=Nuevo archivo
name_limitestudent=Límite de tamaño para el archivo del alumno
name_available=Archivo(s) ya descargado
name_erase=Archivo para borrar
name_badstatut=El estado de la tarea libre no le permite agregar archivos.
name_subject=Tema
name_solution=Corrección
name_copie=Entregar su tarea
name_solutiondate=La corrección estará disponible para su descarga el
name_copie_type1=Su tarea debe ser devuelta directamente a su maestro antes del
name_copie_type2=Puede enviar o modificar su tarea a continuación hasta el
name_copie_type2bis=!nosubst Dispone de $[0.25*$sizelimitfile] Mb como máximo
name_usedstorage=!nosubst Usted ha utilizado $[rint($used*100)/100] Mb
name_copie_toolate2=Es demasiado tarde para regresar o cambiar su tarea
name_copie_toolate=$name_copie_toolate2. Tuvo que ser devuelto antes del
name_desc_sizelimitfile=Le permite establecer el límite de tamaño del área de archivo para cada participante.
name_fortheclass=para los participantes de la clase
name_oldwork=Archivo depositado
name_the=el
name_userperimemessage=Su tarea corregida (si la envió) ya no está disponible para descargar.
name_userperimemessage3=Tu trabajo ya no se puede ver.
name_desc_listwork2=Los estudiantes tienen acceso a su tarea corregida tan pronto como haya pasado la fecha de distribución de la hoja de respuestas general y se hayan entregado todas las tareas corregidas.
name_desc_listwork3=Los estudiantes pueden dejar sus tareas.
name_desc_listwork31=Podrá recogerlos al final del período de depósito autorizado.
name_desc_listwork32=You can view them, but you can only correct them after the dead line
name_desc_listwork4=!nosubst Los estudiantes aún pueden enviar y/o modificar su tarea hasta el $date
name_desc_listwork5=!nosubst La corrección ya no es posible después de la fecha de lanzamiento ($date)
name_allworkcorrected=Todas las tareas están corregidas
name_worknotcorrecteds=!nosubst Quedan $notcorrected tareas sin corregir.
name_worknotcorrected=!nosubst Quda $notcorrected tarea sin coregir.
name_nbcopies=!nosubst $nbcopies alumnos han depositado su tarea.
name_nbcopie=!nosubst $nbcopies alumno a depositado su  tarea.
name_datafile=Archivos
name_noscoring=Sin Calificación
name_usedscoring=Utilización de la calificación manual
name_none=Ninguna
name_score=Calificación
name_workof=Tarea de
name_remark=Remarque en cours de travail
name_desc_remark=Remarques éventuelles à destination de l'élève (elles seront visibles immédiatement par l'élève).
name_finalremark=Nota
name_desc_finalremark=Escriba en la ventana debajo la evaluación de la tarea y cualquier comentario destinado al alumno. elle ne sera visible qu'après la date de rendu du devoir.
name_app=Appréciation

name_zone=Zona
name_titlezone=Título de la zona
name_desczone=Descripción de la zona
name_zonepara_teacher=Construcción del enunciado
name_zonepara_student=Construcción de la zona de respuesta del alumno
name_zonetype=Tipo
name_zonecontent=Contenido de la zona
name_answerzone=Zona de respuesta
name_nbzone=Número de zonas
name_ztype=tipo de zona
name_listofztype=GeoGebra,Texto,Archivo,Exercice Interactif,RandFile
name_applet_geogebra=Opción para configurar el subprograma, Copia el contenido del número de zona del profesor, Hacer que esta zona aparezca para los estudiantes
name_noone=Ninguno
name_noparameters=Ningún parámetro específico

name_badstatutsubject=Ya no es posible agregar o modificar archivos para el tema.
name_badstatutsolution=Ya no es posible agregar o modificar archivos para la solución.
name_warningseealltime=Tu profesor puede ver tu tarea en cualquier momento.
name_warning_fullclass=Esta clase está llena, ya no es posible cargar un archivo. \
  ¡Contacta con tu profesor!
name_warning_fullzone=Has superado la capacidad del espacio de almacenamiento que te asignó el profesor.
name_noscore=no calificado
name_nomorecodownload=Su tarea corregida ya no está disponible para descargar
name_nouploaded=No entregó su tarea.

name_textarealimit=!nosubst El texto está limitado a $textezone_tmplimit caracteres
name_nofile=Ningún archivo
name_depositzone=Zona de depósito
name_filedeposit=Carga de archivos
name_archivefreework=Archivado de tarea
name_desc_filearchive=Este archivo contiene los datos de los participantes de la clase (copias y posibles correcciones individuales)
name_warning_archive=!nosubst Está a punto de archivar la tarea número $freework.\
  Esto eliminará los datos del estudiante relacionados con esta tarea libre en el  servidor\
  (copias individuales / correcciones).\
  Puede recuperar el archivo que contiene todos estos datos anteriores (si está disponible).\
  Tenga en cuenta que esta operación es irreversible. Una vez hecho,\
  <ul> <li> ya no tendrá acceso a esta información en el servidor;</li>.\
  <li> no será posible utilizar el archivo descargado para volver a cargar la información al servidor.</li></ul>\
 ¿Estás seguro de que quieres continuar?
name_archivatedfreework=Esta tarea se ha archivado, ya no es posible acceder a las copias de los alumnos.

name_msgstudenthavefile=Si vuelve a cargar un archivo, reemplazará al que ya cargó.
name_toomany_users=!nosubst Su clase contiene demasiados participantes (más de $max_userforgrades), por lo que no es posible editar las calificaciones de las tareas gratuitas en esta página. Debe utilizar la edición manual del archivo de notas en el módulo de gestión de:
name_modulegrades=calificaciones manuales
name_preview=Vista previa de los textos
name_outpreview=Vista previa

name_exochoice=Elección de ejercicios
name_nodeposit=Nada cargado
name_wimsexo=Ejercicios
name_nofiledeposit=El repositorio de copia no está habilitado para este ejercicio libre.
name_insert=Quieres insertar un recurso de módulo
name_parm=con parámetros de ejecución
name_choose_exo=Este recurso se insertará como un nuevo ejercicio libre.
name_choose=Escoja un ejercicio libre
name_freeworkcheck=Verifique el ejercicio libre
name_end=!nosubst El recurso <span class="wims_mod_title">$title</span> se ha insertado con éxito en el ejercicio libre$pickfreework
name_listexo=Lista de ejercicios
name_listexo_desc=Los ejercicios se pueden agregar utilizando las mismas modalidades que para las hojas de trabajo.
name_num=No
name_description=Descripción
name_action=Acción
name_typequatre_desc=Debes resolver los ejercicios sugeridos en wims y obtener la máxima puntuación para cada ejercicio. De lo contrario, se debe reiniciar el ejercicio. Para cada ejercicio, tendrás que escribir la solución en una hoja y dársela a tu profesor o depositarla en el sitio (si el profesor ha abierto el repositorio). Puedes consultar en cualquier momento los ejercicios que tienes que redactar.
name_done=Hecho
name_teacher_noreplyzone=La copia debe entregarse directamente al profesor sin pasar por la interfaz de Wims.
name_maxnumberoffile=Número máximo de archivos
name_maxfilelimit=Se ha alcanzado el límite del número de archivos. Si desea cargar otro archivo, debe eliminar uno de los archivos que ya ha cargado.
name_nowork=Lo studente non ha ancora iniziato il compito.
name_correctedfile=Archivo(s) corregido(s)
name_textlimitsize=Número máximo de caracteres
name_textlimitsizedesc=!nosubst Este número debe estar entre 1 y $textezone_limit.
name_minscoretosave=Score minimal
name_desc_minscoretosave=Il s'agit du score minimal que l'élève doit atteindre à un exercice pour qu'il puisse être enregistré (automatiquement ou manuellement).
name_autoreg=Enregistrement automatique
name_remarkinwork=Remarque(s) en cours de travail
name_ltremark=Date de remarque
name_seeco=Correction Vue
name_closeco=Final hand in
name_co_para=Paramétrage pour la correction
name_solutiongiven=Solution
name_feedbackgiven=Feedback
name_co_desc=Ces éléments seront ajoutés seulement lors de la lecture de la copie après la période de correction.
name_detailact=Détails d'activité sur ce devoir libre
name_close_alertpre1=You choose to hand in your work. Your reply will be saved as shown further down. Read carefully your reply and then click on 
name_close_alertpre2=at the bottom of the page.
name_close_alertpost=You are handing in your work. Once you confirm, you will not be able to modify your work any longer.
name_close_confirm=Confirm handing in
name_close_closed=You handed in your work,you cannot modify your work any longer
name_close_info=If you think you are finished, you can save and hand in your work.
name_close_doclose=Hand in now
name_reopen=Riapri

!set name_showhidetitle=Affichage du devoir aux participants
!let name_allowtype=visible pour tous,cachée pour tous,visible pour postes (et/ou heures) suivants,visibilité réglée par une variable technique
!set name_desc_allowtechvar=Choix de la variable technique
!set name_desctableval=Table de filtre en fonction de la valeur de la variable technique
!set name_value=Valeur
!set name_filtre=Filtre
!set name_EMPTY=(aucune valeur)

!set name_notyet=This freework will be available starting from 
!set name_at=at
!set name_notavailable=This freework is not available.

!set wims_name_studscores=Participant's scores
