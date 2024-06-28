!!!!WARNING If you have to put "into" in the translation, write into$  ...

!if $wims_name_home!=$empty
  !exit
!endif

!set lang_exists=yes

!! punctuation rules
!! en espagnol on ne met pas d'espace
!set wims_punct_colon=:

!! **** Default Names ***
!distribute items Nuevo trabajo libre,Trabajos libres,Trabajo libre,trabajo libre,trabajos libres \
  into wims_name_add_freework,wims_name_Freeworks,wims_name_Freework,wims_name_freework,wims_name_freeworks

!distribute items Buscar,\
Al trabajo,Volver al trabajo,\
Inicio WIMS,Introducción/Configuración,Ayuda,Acerca de,Acerca de WIMS,\
Introducción,Cerrar,\
Cerrar esta ventana,Atrás,Inicio de la página,\
actual,\
Administrador del sitio,Autor de la página,Autores de la página,\
Traducido por,Salir,\
Ayuda de WIMS,Referencias,\
Foro,Foros,\
Hoja de trabajo,Herramientas,Herramienta,\
Copiar a Modtool,\
Imprimir,\
Importar a su clase,\
Versión imprimible,\
Otro nuevo,\
Ir,\
Actualizar,\
Guardar,\
Sí,\
No,\
Descargar,\
Enviar,\
Comenzar,\
Detalles,\
Detalles de los exámenes,\
Mostrar,\
Corregir,\
¡Atención!,\
¡Felicidades!,\
o,\
Explicaciones,\
Ejercicio,\
Hoja,Hojas,\
Cuenta,\
Entrar,\
Notas,\
Mis notas,\
Examen,Exámenes,\
Explorar el sitio,\
Volver al menú,\
Fecha de expiración,\
Error,\
Ejercicio siguiente,Ejercicio anterior,\
Ejemplo,\
Cuestionario,Cuestionarios,\
¿Necesita ayuda?,\
¡Bravo!,\
Desconexión CAS,\
Créditos,\
Novedades,\
Responda,\
Gestión de los participantes,\
Vuelta al módulo,\
Leyenda,\
Duplicar la hoja,\
Duplicar el examen,\
Duplicate freework,\
Gestionar variables técnicas,\
Variables técnicas antiguas,\
Resultados de las evaluaciones,\
Serie,\
Glosario,Glosarios,\
Mi actividad,\
Señalar un error de programación,\
Depositar,\
Pista,\
ver más,\
Última conexion el,\
Sugerencia de trabajo\
 into wims_name_search,\
   wims_name_work,wims_name_resume,\
   wims_name_home,wims_name_intro,wims_name_help,wims_name_about,wims_name_aboutw,\
   wims_name_titleintro,wims_name_Close,\
   wims_name_back,wims_name_back2,wims_name_top_page,\
   wims_name_current,\
   wims_name_manager,wims_name_author,wims_name_authors,\
   wims_name_translatedby,wims_name_exit,\
   wims_name_whelp,wims_name_reference,wims_name_forum,wims_name_forums,\
   wims_name_sheet,wims_name_tools,wims_name_Tool,\
   wims_name_modify,wims_name_print,wims_name_import,\
   wims_name_printable,wims_name_renew,wims_name_testgo,\
   wims_name_refresh,wims_name_tosave,\
   wims_name_yes,wims_name_no,wims_name_download,wims_name_send,wims_name_start,wims_name_detail,wims_name_examdetail,\
   wims_name_Show,wims_name_Edit,wims_name_warning,wims_name_Congratulations,wims_name_or,\
   wims_name_Explanations,wims_name_Exercise,wims_name_Sheet,wims_name_Sheets,wims_name_account,wims_name_Enter,\
   wims_name_Score1,wims_name_myscore,wims_name_Examen,wims_name_Examens,wims_name_browse,wims_name_menuback,\
   wims_name_expiration,wims_name_Error,wims_name_nextseries,wims_name_previousseries,\
   wims_name_Example,wims_name_Vote,wims_name_Votes,wims_name_feedbackexo,wims_name_feedbackplus,\
   wims_name_cas_logout,wims_name_credits,wims_name_mod_new,wims_name_answer,wims_name_usermanage,\
   wims_name_moduback,wims_name_legend,wims_name_duplicatesheet,wims_name_duplicateexam,wims_name_duplicatefw,wims_name_techvar,wims_name_oldvar,\
   wims_name_Evaluation,wims_name_Serie,wims_name_Glossary,wims_name_Glossaries,wims_name_myactivity,wims_name_sendbug,wims_name_submit\
   wims_name_Hint,wims_name_seemore,wims_name_lastconnect,wims_name_swork

!! Legal notice names
!distribute items Información legal,Condiciones generales de uso, Política de confidencialidad,\
Política local de confidencialidad,\
  into wims_name_legal,wims_name_cgu,wims_name_privacy,wims_name_local_privacy

!! **** Menuprof Names ***
!distribute items Clases, Buscar,\
Creación, Ejemplos,\
Ejercicios, Ayudas,\
FAQ, Tutoriales,\
Informaciones,\
Otros métodos,\
Sitio,\
  into wims_name_Classes, wims_name_Searching,\
    wims_name_Creation, wims_name_Samples,\
    wims_name_Exercices, wims_name_Aid,\
    wims_name_faq, wims_name_dochelp,\
    wims_name_Infos, wims_name_othermethods,\
    wims_name_Site

!! **** Permalink Names ***
!distribute items este módulo, este ejercicio,\
Mostrar, en un sitio/blog,\
Ocultar estas opciones, \
Enlace permanente, Lector incrustable,\
Copiar y pegar, el vínculo, el código, o, en un correo electrónico,\
para, solamente,\
la configuración actual,\
  into wims_name_this_module, wims_name_this_exercice,\
  wims_name_display,wims_name_on_your_site,\
  wims_name_mask_this,\
  wims_name_permalink,wims_name_embeddable,\
  wims_name_copy_and_paste,wims_name_the_link,wims_name_the_code,wims_name_or,wims_name_in_a_mail,\
  wims_name_for,wims_name_only,\
  wims_name_this_config

!set wims_name_Share=Compartir
!set wims_name_to_embed_it=para incrustarlo
!set wims_name_permalink_desc=Copia uno de estos enlaces para compartirlo fácilmente (a través de mail, Preferidos, ...).
!set wims_name_hide=Ocultar
!set wims_name_showall=Detalles

!! the following sentences can be changed according to language if needed
!set wims_name_display1=!nosubst $wims_name_Share $wims_name_this_module
!set wims_name_display2=!nosubst $wims_name_copy_and_paste $wims_name_the_link $wims_name_on_your_site $wims_name_or $wims_name_in_a_mail
!set wims_name_display3=!nosubst $wims_name_copy_and_paste $wims_name_the_code $wims_name_to_embed_it $wims_name_on_your_site
!set wims_name_permalink1=!nosubst $wims_name_permalink $wims_name_for $wims_name_this_module

!! **** Module About Names ***
!distribute items Nombre,\
Sobre los iconos,\
Información sobre este módulo,\
Información sobre este ejercicio,\
Dirección,\
Vínculo para Preferidos,\
Descripción,\
Versión,\
Versión WIMS requerida,\
Lengua,\
Autor,\
Mantenedor,\
Traductor,\
General,\
Este es un módulo de,\
WWW Interactive Multipurpose Server,\
Derechos de autor,\
Palabras clave,\
Correo electrónico del traductor,\
Correo electrónico del autor,\
Correo electrónico del mantenedor,\
Dominio,\
Tipo,\
Nivel/es,\
Mecanismo de puntuación,\
ejercicio/recreación,\
Programas informáticos de apoyo necesarios,\
Hora del servidor,\
Módulo de datos,\
Desarrollado en WIMS,\
Centro de publicación,\
Centro de descarga,\
Sintaxis,\
Significado,\
Indexación,\
Cambiar las preferencias,\
Configuración,\
WIMS se distribuye bajo licencia <a href="COPYING">GNU GPL</a>.\
  into wims_name_name,\
    wims_name_iconabout,\
    wims_name_module_infos,\
    wims_name_exo_infos,\
    wims_name_Address,\
    wims_name_Link_for_bookmark,\
    wims_name_Description,\
    wims_name_Version,\
    wims_name_Required_WIMS_version,\
    wims_name_Language,\
    wims_name_Author,\
    wims_name_Maintainer,\
    wims_name_Translator,\
    wims_name_General,\
    wims_name_This_is_a_module,\
    wims_name_WIMS_subtitle,\
    wims_name_Copyright,wims_name_Keywords,\
    wims_name_tr_email,wims_name_auth_email,wims_name_maint_email,\
    wims_name_Domain,wims_name_Type,wims_name_Levels,\
    wims_name_Scoring,wims_name_Scoringhelp,\
    wims_name_require,wims_name_server_time,wims_name_datamodule,\
    wims_name_devwims,wims_name_publish_center,wims_name_download_center,\
    wims_name_Syntax,wims_name_Meaning,wims_name_Indexation,\
    wims_name_pref,wims_name_setup,name_wims_licence
!! Titles of menus
!distribute items Comunicación,Configuración,\
   Utilidades de la clase,Enlaces externos,\
   Navegación, Mis informaciones\
into wims_name_classactivity,wims_name_configuration,\
  wims_name_classtools,wims_name_otherclasses,\
   wims_name_navigation,wims_name_myinfo

!! **** Class Relative Names ***
!if $wims_class!=$empty
 !distribute items Página principal de la clase,Insertar en una hoja de trabajo,Insertar como una ayuda en una hoja,\
Escribir al profesor, Salir,\
El registro de notas está cerrado.,\
Ha suspendido el registro de notas.,\
Activar el registro, Suspender el registro,\
Usted es el profesor de la clase,\
Registrar los detalles de este ejercicio,\
Página de gestión de la hoja de trabajo,\
Añadir una secuencia,\
Visto,\
Detalles de los ejercicios analizados,\
Insertar todos los ejercicios en una hoja de trabajo,\
Vista de los participantes,\
Insertar en un glosario,\
Revisión del glosario,\
Añadir una glosa nueva,\
Posición\
Esta sesión de examen se cerrará automáticamente el \
  into wims_name_class_home,wims_name_add,wims_name_addh,\
  wims_name_wsup,wims_name_visitor,\
  wims_name_scoreclose,\
  wims_name_scoresuspend,\
  wims_name_scorereopen,wims_name_scoreclose2,\
  wims_name_syou,\
  wims_name_exolog,\
  wims_name_sheetmanagement,\
  wims_name_add_sequence,\
  wims_name_readen,\
  wims_name_save_ex,wims_name_addallexo,\
  wims_name_participantview,\
  wims_name_addglossary,wims_name_glossarycheck,wims_name_newglose,\
  wims_name_Position,\
  wims_name_exam_ending

!!set wims_name_score=!nosubst Ha conseguido $[$wims_homeref_got] de \  $[$wims_homeref_req] puntos en este trabajo\
  !! <br> Calidad: $[$wims_homeref_mean]/10.
  !set wims_name_thsheet=Número,Título,Puntos requeridos,Peso,Puntos obtenidos,%,Calidad,Severidad,Nota,\
    Mejores notas,Número de intentos,Último resultado,Adquirido,Ensayos,No acabados
   !set wims_name_you=Usted es <b>$wims_firstname $wims_lastname</b>, perteneciente a
   !if _exam isin $session
      !distribute items Otros ejercicios del examen,\
  Tiempo que dispone para este examen:,\
  cuando se cargue esta página\
    into wims_name_back,wims_name_examremain,wims_name_whenloaded
  !endif
  !if _check isin $session
    !let wims_page_name=Página
  !endif
  !default wims_name_sequence=Secuencia
  !set wims_name_sequences=secuencias

  !set wims_name_exceeded=Su clase superó el espacio de disco autorizado en el servidor.\
  La gestión de la clase ya no está disponible. ¡Lo siento!<p>Le sugerimos pidan al administrador del sitio\
 aumentar el espacio de disco autorizado para las clases virtuales.</p>

  !set wims_name_reaching_limit=Su clase alcanza el límite de espacio de disco autorizado.\
  Una vez superado este límite, se bloqueará la gestión de la clase!

  !set wims_name_chseries=!nosubst Guardar los cambios en la serie de ejercicios $(special_parm4[2]) hoja $(special_parm4[1])
!endif

!! exit this file when in userscore export function to avoid a 'variable_name_buffer_overflow' error.
!if $module=adm/class/userscore and $job=csv
  !exit
!endif

!if $wims_user!= and $wims_class!= and $exotrymax!=$empty
  !distribute lines Ensayo\
  Este es su ensayo número\
  Las notas ya no se tienen en cuenta.\
   El número de ensayos posibles en esta serie es \
   La nota de este ensayo se tiene en cuenta porque ha habilitado el registro de notas.\
   La nota de este ensayo no se tiene en cuenta porque ha suspendido el registro de notas.\
into wims_name_try,wims_name_maxexotry0,wims_name_maxexotry1,wims_name_maxexotry2,wims_name_maxexotry_warning1,\
  wims_name_maxexotry_warning2
!endif

!!!if adm/class isin $module or adm/manage isin $module
 !distribute line Zona de Profesores \
Zona de estudiantes\
Clases abiertas\
Autentificación del profesor\
Autentificación de los participantes\
Autentificación\
¿Contraseña olvidada?\
enseñanza primaria\
enseñanza secundaria\
universidad\
Lista de clases \
Lista de clases y portales \
Clase individual\
Agrupación de clases \
Portal de centro \
Participantes borrados\
de\
la\
IP\
para\
Otra url\
  into wims_name_n_supervisor,wims_name_n_participant,wims_name_n_example,\
    wims_name_n_authsupervisor,wims_name_n_authparticipant,wims_name_connexion,\
    wims_name_n_forgetpwd,wims_name_n_E,wims_name_n_H,wims_name_n_U,\
    wims_name_classlist,wims_name_portal_list,\
    wims_name_create_class,wims_name_create_superclass,wims_name_create_portal,wims_name_recover,\
    wims_name_from,wims_name_to,wims_name_IP,wims_name_at,wims_name_otherurl
!!!endif

!set wims_name_corrected_date=Please note: this date was prior to the class creation date and has been corrected.

!if adm/new isin $module
  !distribute line Nuevos módulos\
Módulos actualizados \
Cambios recientes en el sistema \
RSS Nuevos módulos\
RSS Módulos actualizados \
New features\
  into wims_name_mod_new,wims_name_mod_modif,wims_name_mod_sys,\
    wims_name_rss_new,wims_name_rss_modif,wims_name_mod_resume
!endif

  !distribute line Crear una clase \
  into wims_name_classcreate

!if adm/modtool isin $module or adm/createxo isin $module or $wims_user!=$empty or $module!=
  !distribute line Probar el módulo \
Gestor del documento \
Archivos editables \
Archivos editables \
Propiedades \
Guardar\
Diferencias \
Publicar \
Nuevo Módulo \
Lista de módulos \
Depósito de archivos \
Restauración \
Propiedades de la cuenta \
Probador de programas \
Documentación OEF \
Documentación\
Biblioteca de programas \
Tipos de respuestas\
Documentación técnica \
Volver a la lista de archivos \
Cambiar el archivo \
Cambiar\
Arriba\
Abajo\
Eliminar\
Acción\
Para utilizar esta actividad, debe activar java en su navegador.\
Fecha\
Añadir\
Suprimir\
Código fuente\
Salir\
 into wims_name_test,wims_name_docgestion,wims_name_modcontent,wims_name_otherfiles,\
wims_name_properties,wims_name_modsave,wims_name_checkdiff,wims_name_publish,wims_name_createnew,\
wims_name_modlist,wims_name_binfile,wims_name_restore,\
wims_name_account_property,\
wims_name_scripttest,wims_name_docoef,wims_name_docu,wims_name_docslib,wims_name_docanswer,wims_name_doctec,\
wims_name_back3,wims_name_edfile,wims_name_change,wims_name_up,wims_name_down,wims_name_erase,wims_name_action,\
wims_name_nojava,wims_name_date,wims_name_add0,wims_name_delete,wims_name_source,\
wims_name_visitor

!distribute line Prueba y copia de seguridad\
Lista de modelos \
Modelos preparados \
into wims_name_backcreatexo,wims_name_modellist,wims_name_model

!distribute lines para hacer ejercicios sin programación\
into wims_name_title_model

!distribute line Probar el ejercicio \
Volver a confia2qcm\
Volver a createqcm\
Modificar el código fuente \
Poner en el módulo de desarrollo \
Poner este ejercicio en la clase \
Guardar como nuevo ejercicio \
Enviar un archivo (imagen, sonido) \
Reemplazar el anterior\
Eliminar este ejercicio\
into wims_name_testexo,wims_name_backconfia2qcm,wims_name_backcreateqcm,wims_name_exomodify,\
wims_name_putmodtool,wims_name_putclass,wims_name_newversion,\
wims_name_downloadbinary,wims_name_replace,wims_name_exoerase

!endif

!distribute line Nuevo documento \
Nueva hoja \
Nuevo examen \
Nueva clase \
Nuevo cuestionario \
Mis cuestionarios\
Nuevo ejercicio \
Ejercicios de la clase \
Ejercicios de la hoja\
Ejercicio siguiente\
Ejercicio anterior\
into wims_name_add_doc,wims_name_add_sheet,wims_name_add_exam,wims_name_add_class,wims_name_add_vote,wims_name_myvote,\
wims_name_add_exo,wims_name_classexo,wims_name_sheet_exos,wims_name_next,wims_name_prev

!distribute items sin intentar,sin hacer,hecho,felicidades,intentado \
  into wims_name_exo_untry,wims_name_exo_undone,wims_name_exo_done,wims_name_exo_congratulation,wims_name_exo_tried

!!! for documents...

!distribute items WIMS,Clase,Docs,Arriba,\
        Atrás,Sig.,Hist.,Recargar,\
  Versión interactiva,Versión para imprimir,\
  Volver a doc.,Ayuda,Acerca de,\
  Depósito de archivos,\
  Volver a la lista de archivos,\
  Página de entrada del documento\
  Transferir,\
Capítulo anterior,\
Capítulo siguiente,\
Capítulo,\
  into wims_name_doch_wims,wims_name_doch_class,wims_name_doch_docs,wims_name_doch_up,\
  wims_name_doch_prev,wims_name_doch_next,wims_name_doch_hist,wims_name_doch_reload,\
  wims_name_doch_interactive,wims_name_doch_printable,\
  wims_name_doch_back,wims_name_doch_help,wims_name_doch_about,\
  wims_name_doch_upload,wims_name_doch_filelist,wims_name_doch_main,wims_name_doch_transfer,\
  wims_name_doch_prev_chapt,wims_name_doch_next_chapt,wims_name_doch_Chapter

!! for sequence and document

!distribute line Documento\
Documentos\
oculto, visible \
Título \
Reorganización por secuencias \
Insertar en la clase \
Crear un nuevo documento \
Documento de prueba\
Estado\
Insertar\
En preparación,Activo,Expirado,Expirado+Oculto\
ni leer ni escribir,leer pero no escribir,leer y escribir\
Nro\
Nro de ejercicios\
into wims_name_doc,wims_name_Docs,wims_name_status,wims_name_title,wims_name_reorder,wims_name_adddoc,\
wims_name_createdoc,wims_name_doctry,wims_name_Status,wims_name_Insert,wims_name_shstatus,\
wims_name_Docstatus,wims_name_number,wims_name_cnt_exo

 !distribute line Añadir una fecha \
Añadir un archivo \
Añadir deberes \
Configurar \
Abandonar \
Agenda\
  into wims_name_adddate,wims_name_addfile,wims_name_addtodo,wims_name_config,wims_name_giveup,\
  wims_name_cdt

!set wims_name_supervisor=administrador
!set wims_name_Supervisor=Administrador
!set wims_name_namestudent=Alumno
!set wims_name_nameteacher=Profesor
!set wims_name_teacher=Cuentas de profesores
!set wims_name_addteacher=Añadir profesor
!set wims_name_addparticipant=Añadir participante
!set wims_name_modteacher=Propiedades del profesor
!set wims_name_delteacher=Borrar a un profesor
!set wims_name_student=Cuentas de alumnos
!set wims_name_addstudent=Nuevo alumno
!set wims_name_modstudent=Propiedades del alumno
!set wims_name_delstudent=Borrar a un alumno
!set wims_name_delstudent1=Borrar el alumno
!set wims_name_group= Portal
!set wims_name_portal= Portal
!set wims_name_level=Nivel
!set wims_name_class=Clase
!set wims_name_program=Programa
!set wims_name_course=Curso
!set wims_name_icourse=Curso interclase
!set wims_name_backstruct=Hacer una copia de seguridad de la estructura
!set wims_name_tchat=Tchat
!set wims_name_tchatclose=Close tchat
!set wims_name_open=open
!set wims_name_close=close

!if config isin $module or $module=home or $module=adm/class/userscore or $module=adm/class/livret
  !distribute line $wims_name_config\
Página principal de configuración\
Gestión de la estructura\
Gestión\
into wims_name_configb,wims_name_config,wims_name_struct,wims_name_manage
!endif

!set wims_name_save=Copias de seguridad y recuperación
!set wims_name_backgateway= Gestión de

!distribute line Añadir un curso \
Añadir un curso interclase \
Añadir una clase \
Añadir un programa \
Añadir un nivel \
login de gestión\
Cambiar de zona \
Añadir clases (csv)\
into wims_name_addcourse,wims_name_addicourse,wims_name_addclass,wims_name_addprog,wims_name_addlevel,\
wims_name_login,wims_name_chzone,wims_name_addcsvclass

!distribute line Estadísticas de actividad \
Actividades globales de los participantes \
Cambiar el baremo \
Notas asignadas manualmente\
Conexión hoja de cálculo \
Actividades globales\
into wims_name_class_stat,wims_name_activity,wims_name_formula,wims_name_grades,\
wims_name_csv,wims_name_activity1

!if adm/class isin $module or reguser isin $module or $wims_class!=$empty
!distribute line Lista de los participantes\
Lista de profesores\
Resultados del alumno \
Cerrar esta sesión de examen\
Detalles de su trabajo\
Eliminar el alumno \
Datos detallados\
Cambiar su contraseña\
Datos tratados\
Cuaderno de competencias \
Siguiente\
Anterior\
Filtros\
Informe de evaluación\
Añadir variable técnica\
into wims_name_part_list,wims_name_teacherlist,wims_name_scores,wims_name_partexamclose,wims_name_workdetail,\
wims_name_delprep,wims_name_rawdata,wims_name_passwd,wims_name_getraw,wims_name_livret,\
 wims_name_next_participant,wims_name_prev_participant,wims_name_filter,\
 wims_name_livret1,wims_name_add_techvar
!endif

!if adm/manage isin $module
  !distribute line Otras tareas de mantenimiento \
  into wims_name_sitegestion
!endif

!if $wims_user=supervisor
  !distribute line Volver a la página del profesor \
 into wims_name_backteacher
  !set wims_name_attribut=Ícono
  !set wims_name_attribut_help=Mostrar un ícono delante del ejercicio (opcional)
!endif

!distribute lines Modtool\
Createxo\
Quicktool\
Latex2wims\
Imageclick\
Otras utilidades\
   into wims_name_modtool,wims_name_createxo,wims_name_quicktool,wims_name_latex2wims,\
    wims_name_coordclick,wims_name_othertools

!distribute line activar el editor HTML \
desactivar el editor HTML \
Cuidado, las modificaciones hechas no se salvarán si cambian esta opción en curso de redacción\
into wims_name_active, wims_name_desactive,wims_name_speck_warning

!distribute items Apellido,Nombre,Contraseña,Correo electrónico,Identificador de usuario,Repita la contraseña,Comentarios\
into wims_name_lastname, wims_name_firstname,wims_name_Password,wims_name_email,\
wims_name_Login,wims_name_repeat_pass,wims_name_comment

!distribute line Orla\
Envío de correos electrónicos\
into wims_name_photoboard,wims_name_sendmail

!distribute items Profesor,Administrador,Alumno\
into wims_name_nameteacher,wims_name_Supervisor,wims_name_namestudent

!!if $module isitemof home,adm/class/sheet,adm/class/exam,adm/class/sequence,adm/class/freework
 !set wims_name_actionlist=Activar, Expirar, Desactivar, Ocultar, $wims_name_Show,$wims_name_erase,Archivo
!!endif

!if $module isitemof adm/class/sheet,adm/class/exam
 !set wims_name_end=fin
 !set wims_name_moveafter=Mover a
!endif
!if $module=adm/class/usermanage
    !set wims_name_regmanage=Gestión de acceso
!endif

!set wims_name_cloneclass=Duplicar una clase existente
!set wims_name_clonethisclass=Clonar esta clase
!set SU_partconnected=Este alumno está conectado
!set wims_name_SE_config=Config./Mantenim.

!! Site links
!set wims_name_mirror=Réplicas
!set wims_name_ref=Lista de enlaces inversos
!set wims_name_stat=Estadísticas del sitio

!! ending session warnings
!set swarn_dialog_title1=Información sobre el fin de la sesión
!set swarn_dialog_title2=Sesión expirada

!set swarn_dialog_common=Estuvo inactivo durante demasiado tiempo.
!set swarn_dialog_1=Si no realiza ninguna acción, será automáticamente desconectado en
!set swarn_dialog_2=Su sesión ha expirado, vuelva a conectarse para continuar.
!set swarn_dialog_button=Conectarse


!! name for freework type=3
!if $wims_class!=$empty and $wims_fwnumber!=$empty
!! be careful each line is a different msg
  !set wims_name_freework_intro=!nosubst Ha obtenido una nota suficiente. El ejercicio se grabó automáticamente. Ahora puede pasar a la fase de escritura de este ejercicio o a otro ejercicio de la tarea.\
Debes lograr una puntuación de $wims_fwminscore en el ejercicio antes de escribir los detalles de su solución en una hoja de papel.\
Has obtenido la máxima puntuación. Usted puede :\
Seleccione este ejercicio para ir a la fase de escritura haciendo clic en el enlace de abajo\
Repita el ejercicio con el botón "reiniciar ejercicio".\
No resolvió este ejercicio correctamente, tiene que empezar de nuevo.

  !set wims_name_exorenew=Renouveler l'exercice
  !set wims_name_freework_selexo=Seleccione este ejercicio
  !set wims_name_bc2fw=Regresar a tarea para ratos libres
!endif
!set wims_name_addfw=Insertar en un trabajo para ratos libres

!if adm/class/activity isin $module
  !set wims_name_workingtime=Tiempo de conexión
!endif

!read name_titles.phtml.es

!set wims_name_noteacherclass=No estás conectado como profesor de esta clase, sino como administrador del grupo/portal.\
No has iniciado sesión como profesor de esta clase, sino como administrador del servidor.
