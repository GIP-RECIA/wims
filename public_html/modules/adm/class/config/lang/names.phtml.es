!set lang_exists=yes

!if $wims_read_parm!=
  !goto $wims_read_parm
!endif

!if $job=list
!distribute lines Ubicación (ciudad, país)\
 Al llenar este campo, usted acepta que indiquemos que WIMS es utilizado en su ciudad, (sin ninguna otra mención)\
 coordenadas GPS\
 into name_location,name_location_help,name_geoloc
  !set name_config_hideaverage=Cacher les moyennes générales aux participants
  !set name_config_mexolog=Autoriser les participants à signaler l'enregistrement d'exercices à l'enseignant
  !set name_config_utime=Longueur des intervalles de temps de connexion (en min)
  !set name_utime_help=Durée de chaque zone de temps dans les statistiques de temps de connexion des participants
!endif

!distribute items zonas,participantes,ejercicios,documentos,profesores,hojas de ejercicios\
into wims_name_zones,wims_name_participants,wims_name_exercises,wims_name_docs,wims_name_teachers,\
name_sheets

!distribute item mensaje del día,ejercicio,hojas de ejercicios,exámenes,documentos,\
  participantes,secuencias pedagógicas,registro de competencias,competencia(s),cuestionarios,\
  agenda,cuenta del profesor,foro de discusión,mensaje(s) del foro,Avanzado,Documento público\
into name_motd,name_exo,name_sheet,name_exam,name_doc,\
  name_user,name_seq,name_livret,name_competence,name_vote,\
  name_cdt,name_sup,name_forum,name_forum_mesg,name_advanced,name_pdoc

!distribute item mensajes del día,\
  ejercicios,hojas de ejercicios,exámenes,documentos,participantes\
into name_motds,name_exos,name_sheets,name_exams,name_docs,name_users

!if $job=grestrict
  !set name_allowedsites=Sitios a los que se les permite recibir calificaciones
  !set name_excepted=Exceptuados
!endif
!if $job=connectlink
  !set title=Enlaces de conexión
!endif
!if $job=arch
  !set title=Copias de seguridad y Restauración
  !set name_title_save=Copia de seguridad de la clase
  !set name_title_restore=Restauración de recursos a partir de una copia de seguridad
  !set name_intro1=Seleccione el fichero de la copia de seguridad a restaurar
  !set name_intro=Puede descargar una copia de seguridad de su clase, en formato
  !set name_tosend=Seleccione el fichero de la copia de seguridad a restaurar
  !set name_namefile=introduzca por favor el nombre del fichero de seguridad&nbsp;
  !set name_help=Luego puede seleccionar los recursos de la clase a restaurar.
  !set name_deposit=!nosubst Su copia de seguridad <span class="tt wims_fname">$wims_deposit</span> contiene los recursos\
   siguientes. Marque lo que quiera restaurar en su clase.
  !set name_no_restore=Imposible realizar la restauración porque usted comparte los recursos de otra\
 clase. Solo la clase que compartió los recursos puede efectuar la recuperación.
  !set name_check_dependency=Tener en cuenta dependencias
  !set name_desc_dependency=Advertencia: es posible que su copia de seguridad no funcione si ignora las dependencias requeridas.
  !set name_limit_exceed=No se puede importar porque la cantidad de recursos excede la capacidad máxima
  !set name_dependance=dependencia de un recurso que excede la capacidad máxima

  !distribute lines (de)seleccionar todo\
No ha seleccionado ningún recurso a restaurar.\
Restaurar todo salvo la configuración de la clase y la cuenta del profesor.\
<span class="wims_warning">¡Peligro!</span> <span class="small">Ver más abajo</span>\
Configuración de la clase\
Cuenta del profesor (incluida su contraseña)\
cuentas de los participantes\
Cuentas existentes\
documentos\
Documentos existentes\
ejercicios\
ejercicios existentes\
hojas de ejercicios\
Implica la recuperación de los ejercicios.\
Hojas existentes\
hojas de examen\
Implica la restauración de hojas de trabajo y de ejercicios\
Exámenes existentes\
mensajes de discusión\
Mensajes existentes\
Registro de las actividades de los participantes y puntuaciones automáticas. Implica la restauración de cuentas de participantes.\
Notas introducidas por el profesor\
Notas existentes\
Una agenda de la clase\
un agenda existente\
Un registro de competencias\
un registro de competencias existente\
Secuencias pedagógicas\
Implica la restauración de ejercicios, de hojas de ejercicios, de exámenes y de documentos\
Secuencias existentes\
Tipo de recurso\
Método de restauración\
Reemplazo\
Elimina los recursos existentes y los reemplaza por los recursos seleccionados\
Fusión\
Fusiona las cuentas de los participantes&nbsp;; fusiona los ejercicios de la clase reemplazando ejercicios de igual nombre&nbsp;; <span class="wims_warning">reemplaza los otros recursos existentes</span>\
Restaurar los recursos seleccionados\
Mensaje del día existente\
Fotos individuales\
Fotos existentes\
herramientas\
herramientas existentes\
Trabajo libre\
Implica la restauración de los ejercicios\
Trabajos libre existentes\
 into name_toggle_all,name_noselect,name_all,name_danger,name_config,name_teacher,name_user,name_user1,name_doc,\
   name_doc1,name_exo,name_exo1,name_sheet,name_sheet0,name_sheet1,name_exam,name_exam0,name_exam1,name_forum,\
   name_forum1,name_activity,name_manual,name_manual1,name_cdt,name_cdt1,name_livret,name_livret1,name_seq,\
   name_seq0,name_seq1,name_res_type,name_method,name_replace,name_replace1,name_merge,name_merge1,\
   name_selectrestore,name_motd1,name_userphoto,name_userphoto1,name_tool,name_tool1,name_freework,name_freework0,name_freework1

  !set name_cnil_warning=Le recordamos que conforme a las declaraciones realizadas a la CNIL, \
  usted no debe guardar datos relativos a sus estudiantes por más de un año. Debe entonces destruir\
  todas las copias de seguridad que contengan los datos de sus estudiantes.\
  Realice una copia de seguridad selectiva si desea guardar los recursos que usted\
  creó (hojas, exámenes, documentos) o use la posibilidad de duplicación.

  !distribute lines Recursos de copia de seguridad restaurados en la clase\
   Se rechaza la restauración de las cuentas de participantes (y registros de actividad) ya que no hay más espacio disponible. Quizás puede aumentar el número de participantes. \
   La fecha de expiración de la clase se modificó después de la restauración, ya que la fecha restaurada es\
   Cuenta(s) de participante(s) no restaurada(s) porque el identificador de usuario ya está en uso en el agrupamiento/pórtico&nbsp;\
   La restauración no es posible porque su clase ha autorizado el compartir recursos\
   La copia de seguridad y la restauración no son útiles a este nivel de la estructura\
 into name_restore1,name_restore2,name_restore3,name_restore4,name_forbiddenrestore,name_restore5

  !distribute items irreconocible, demasiado pronto, demasiado tarde into ebad,eearly,elate

  !distribute lines Lo sentimos, no se ha podido guardar su clase.\
  Este es el fichero en el que se ha guardado su clase\
  para registrarlo sobre su computador(a).\
  También puede seleccionar los datos a guardar. Marque los datos que desea copiar:\
  y luego haga clic en el botón\
  Copia de seguridad selectiva\
  para editar el archivo de copia de seguridad de arriba y guardarlo en su computador(a).\
  Posiblemente puede probar con un formato diferente. \
 into name_download1,name_download2,name_download3,name_download4,\
   name_selective1,name_selective2,name_selective3,name_try_other_format

  !set name_download5=<div class="wims_msg info">El tamaño de este fichero de copia de seguridad puede superar el límite autorizado\
  para su envío al servidor.</div> Para reducir el tamaño del fichero, puede también\
  seleccionar los datos a guardar:

  !goto commun
!endif

!if $job=clean
  !set title=Limpieza de la clase
  !set name_lines=líneas en los registros de actividad de participantes.
  !set name_cdtdates=La agenda
  !set name_livretcomp=El registro de competencias
  !set name_userphoto=fotos individuales
  !set name_empty=¡Su clase está vacía!<br>\
  No hay recursos en su clase que puedan borrarse.
  !set name_no_erase=No se pueden eliminar porque usted está compartiendo los de otra clase.

  !distribute lines Eliminar todo lo que se pueda eliminar\
    También se borrarán los registros de actividad\
    También se borrarán las hojas de examen\
    hacer una copia de seguridad de la clase\
    Los recursos actuales de su clase\
  into name_cleanall,name_erase1,name_warning_exam,name_saveclass,name_ressource
   !set name_warning_clean=¡Los recursos borrados desde esta página no se pueden\
  recuperar&nbsp;! Antes de eliminar cualquier cosa,
  !goto commun
!endif

!if $job=neighbor
  !set title=Clases vecinas
  !set name_noclass=No puede definir clases vecinas porque no hay ninguna otra\
  clase en este sitio.
  !set name_toomany=Hay demasiadas clases virtuales en este sitio. Dé una palabra clave para\
   buscar las clases que les conciernen
  !set name_toomany2=Hay aún demasiadas clases que corresponden a su búsqueda. Por favor\
   entregue una palabra clave más precisa.

 !distribute lines Buscar una clase \
  No se encontró clase para su búsqueda. Vuelva a intentar. \
  Mostrar las clases abiertas del servidor \
  Las relaciones de vecindad entre clases virtuales permiten el intercambio de recursos y/o desplazamiento entre las clases. \
  Presione el nombre de una clase para cambiar sus relaciones de vecindad con ella.\
  Clases en el mismo idioma que la suya\
  Clases en otro idioma\
  Ejemplos\
into name_research,name_noclass,name_exampleclass,name_help,name_changeneigh,\
  name_samelanguage,name_otherlanguage,name_example

  !distribute lines Declaración de vecindad\
   Compartir recursos\
   por usted\
   por otro\
   Intercambio(s) mutuo(s) activo(s).\
   Usted comparte sus recursos.\
   Comparta sus recursos.\
   Permisos mutuos para compartir.\
   Tiene permiso para compartir sus recursos.\
   Le permite compartir sus recursos.\
   Detener la relación de compartir.\
   Compartir\
   importarlos todos \
   Recursos de enseñanza \
   Importar otros recursos \
   Clases que pueden compartir los recursos de su clase\
   Número de recursos\
   activo\
   Lista de todas las clases\
   Info recursos compartidos\
   Clases abiertas del servidor\
   importar recursos\
   Usted puede\
   de la clase\
   Haga clic aquí para aceptar\
   fotos individuales\
   herramientas\
   Importation de ressources\
 into name_declaration,name_sharing,name_byyou,name_other,name_actif,name_share1,name_share2,\
 name_permit1,name_permit2,name_permit3,name_stopsharing,name_share,name_everybodyimport,name_teaching,\
 name_otherone,name_classsharing,name_ressourceallowed,name_active,name_listclass,name_infoshare,name_exampleclass,\
 name_import_resource,name_youcan,name_fromtheclass,name_click_ok,name_userphoto,name_tool,name_importres

  !set name_nonewres=!nosubst No hay ningún (nuevo) tipo de recursos en la clase \
  <span class="wims_emph">$nei_description</span> que le autoriza a compartir.

  !set name_newres=!nosubst La clase <span class="wims_emph">$nei_description</span> \
  le <b>autoriza</b> a compartir sus

  !set name_chooseres=!nosubst Elija los recursos que usted <b>autoriza</b> a la clase <span class="wims_emph">\
  $nei_description</span> a compartir&nbsp; (<i>seleccione y luego haga clic en <span class="wims_button disabled">$wims_name_tosave</span></i>)

  !set name_warning_authorized=!nosubst La clase <span class="wims_emph">$nei_description</span>\
  le autoriza a compartir algunos recursos. No debe autorizarla a compartir el mismo tipo de recursos \
  para evitar confusiones. Comience decidiendo cuál clase, entre las que \
  quieren compartir los recursos, autoriza el compartir un cierto tipo de recurso\
  y cuáles clases aceptan este compartir.

  !distribute lines Relación de vecindad\
   no ha declarado su clase como vecina\
   le acepta como vecina para\
   con\
   Ya comparte los siguientes recursos de la clase\
   no tiene recursos que usted pueda importar\
   tiene los siguientes recursos importables\
   Mismo título en su clase\
   Vacío(a)\
   en preparación\
   Reemplazar\
   Login ya utilizado en su clase\
   Participante borrado existe en su clase\
   Importación a partir de la clase\
   Transferido con éxito\
   cuentas de participantes de la clase vecina\
   Comprobar el resultado\
 into name_neighbor_relation,name_text1,name_text2,name_with,name_sharealready,\
   name_no_ressource,name_importable,name_same_title,name_empty,name_inpreparation,\
   name_replace,name_existinglogin,name_part_erased,name_import,name_transfered,\
   name_neigh_account,name_verify

    !set name_warning_duplicate=Solo las hojas cuyos contenidos (código fuente de las hojas) \
  sean diferentes son importables. Luego usted puede duplicar una hoja si desea\
  tener dos hojas de idéntico contenido.

  !set name_inactif=!nosubst El(la) $(name_$itype) ha sido puesto(a) en estado inactivo para permitirle\
  modificarlo si lo desea.

  !set name_accept=!nosubst  ¿Acepta usted la clase <span class="wims_emph"> $nei_description</span> como vecina suya para

  !if $job2=stopshare
    !set title=Dejar de compartir un recurso
    !set name_warning=Su clase tiene un registro de actividades activo y los\
  recursos compartidos no están vacíos. Si deja de compartir este recurso\
  ahora, ya no podrá volver a compartirlo más tarde.\
  <br> ¿Está seguro de querer dejar de compartir definitivamente este recurso&nbsp;?

    !set name_stop=interrumpir.
  !endif
  !if $job2=sharelist
    !set title=Información sobre recursos compartidos.
    !set name_sharelist=!nosubst Usted comparte $(name_$rec) de
    !distribute lines No comparte ningún recurso.\
    Usted comparte recursos de otras clases\
    into name_noresource,name_resource
  !endif

  !if $job2=addshare
    !set title=Compartir los recursos de una clase
    !set name_class_share=La clase <span class="wims_emph">$nei_description</span> \
        le permite compartir sus recursos siguientes.
    !distribute lines disponible(s)\
      Ya está compartiendo.\
      No puede compartirlos porque ya comparte los de otra clase.\
      limpiar sus propios recursos\
      si es posible.\
      ¡Es muy peligroso compartir la cuenta del profesor!\
    into name_available,name_actually_sharing,name_nosharing,name_cleanup,name_ifpossible,\
      name_dangerous

    !set name_warning1=No puede compartirlos porque ha permitido a otras clases compartir\
   SUS recursos del mismo tipo. No está autorizado compartir en cascada. Por tanto debe \
   primero poner fin a los permisos para compartir por\
   parte de la otra clase antes de poder compartir los de la clase
  !set name_warning2=!nosubst No puede compartirlos porque sus propios $(name_$r) no están vacíos.\
   Antes de compartir, debe primero
  !set name_warning_erase=!nosubst  ¡Al compartir va a BORRAR sus $(name_$r) existentes!\
     Se perderán definitivamente si no tiene una copia de seguridad.

  !endif

  !distribute items ---,<span class="small">el profesor</span>,\
  <span class="small">los participantes</span>,\
  <span class="small">profesor y participantes</span>\
  into n_n0, n_n1, n_n2, n_n3

  !if $job2=import
    !set code1=Ningún(a)
    !set code2=$wims_name_yes pero diferente
    !set code3=$wims_name_yes, activo y diferente
  !endif
  !goto commun
!endif

!if $job=connect
  !set title=Conectar a otros servidores / plataformas
  !set name_listserver=Lista de conexiones de los servidores

  !distribute lines Probar una conexión a servidor\
   Probar la conexión con la clase remota\
   Añadir una clase remota\
   Administrar una clase remota\
   clase local, clase remota\
   definición de la clase,lista de participantes,media de las notas, detalles de las notas,todo salvo la definición de la clase\
   Sincronizar\
   (con el otro) para\
   Clase remota\
   Servidor remoto\
   Administrar\
   Eliminar una clase remota\
   Se ha establecido la conexión al servidor remoto.\
   Se ha añadido la conexión a su clase, pero el servidor remoto devuelve un mensaje de error\
   El servidor remoto no responde. Repórtelo a.\
   La conexión ha sido rechazada por el servidor remoto. Mensaje de error\
   Clase remota verificada\
   Se ha establecido la conexión. Datos enviados por la clase remota\
   Para conectarse a una clase en el servidor escogido, por favor especifique\
   Identificador de la clase remota\
   Si la clase remota no existe, el servidor creará una nueva clase en el servidor remoto, usando las propiedades de su clase.\
   Actualizar automáticamente la clase remota al efectuar cambios en su clase\
   Permitir que la clase remota modifique su clase\
   Esta clase no tiene conexión con uno de estos servidores.\
   Ha establecido las siguientes conexiones a otros servidores.\
   Servidor\
   En estos momentos, este servidor WIMS permite conexiones con los siguientes servidores.\
   Acciones en la conexión\
   Acciones en la clase\
 into wims_name_connecttest,wims_name_classtest,wims_name_addconnection,wims_name_connectmanage,name_prompt1,\
   name_prompt2,name_synchronize,name_withotherone,name_remoteclass,name_remoteserver,wims_name_Manage,\
   wims_name_destroy,name_working,name_error1,name_errornoreply,name_errorreject,name_check,name_data,\
   name_toconnect,name_identifier,name_help,name_automatically,name_allow,name_noconnection,name_declaration,\
   wims_name_server,name_listserver1,name_connexion_action,name_class_action

  !goto commun
!endif

!if $job=access
  !set title=Configuración del acceso a los recursos
  !goto commun
!endif

!if $job=grestrict
  !set title=Restricción del acceso a la puntuación
  !goto commun
!endif

!if $job=present
  !set title=Configuración de la apariencia de la clase
  !set name_helpcolor=El primer color es para ejercicios no terminados.
  !goto commun
!endif

!if $job=oefdefault
  !set title=Configuración por defecto de los módulos OEF
  !read oef/es/intronames

  !distribute lines $name_oneserie\
    $name_levelseverity\
    $name_chrono\
    $name_secondes\
    $name_qcmanswer\
    $name_solutiongiven\
    $name_choice\
    $(name_choice_check[1])\
    $(name_choice_check[2])\
    $(name_choice_check[3])\
    $(name_choice_check[4])\
   into name_series,name_severity,name_chrono,name_secondes,name_qcmanswer,\
     name_solution,name_prompt,name_prompt1,name_prompt2,name_prompt3,name_prompt4
    !set name_warning=$(name_remarkintro3)
  !goto commun
!endif

!if $job=security
  !set title=Actividades de gestión de seguridad disponibles
  !set name_see_activity2=Usted debe ser el origen de todas estas actividades&nbsp;; de \
    lo contrario, deberá comprobar que no se ha producido una filtración de su contraseña de profesor.
  !set name_see_activity1=Ver el registro de actividad de gestión de su clase
  !distribute lines Configurar las restricciones a nivel de clase\
  de los sitios que tienen acceso a las calificaciones.\
  Otras definiciones de seguridad en\
  la configuración de la clase\
  into name_restriction1,name_restriction2,name_otherrestriction1,name_otherrestriction2
  !goto commun
!endif

!if $job=authtype
  !set title=Autentificación externa
  !set name_intro_authtype=Seleccione la autentificación y la identificación deseadas\
  y llene los campos útiles correspondientes.
  !set name_method_list= autentificación vía wims, autentificación vía CAS, \
  autentificación vía CAS e identificación por un ldap,\
  autentificación e identificación por un ldap,\
  autentificación via CAS e identificación vía php,\
  autentificación e identificación vía php
  !goto commun
!endif

  !!if $job2=import
!set code1=Ningún(a)
!set code2=$wims_name_yes pero diferente
!set code3=$wims_name_yes, activo y diferente
  !!endif

!if $job=propagate
  !if $wims_supertype=2
    !set name_thisclass=del pórtico
    !set name_subclasses=subclases
  !else
    !set name_thisclass=de la zona actual
    !set name_subclasses=zonas dependientes
  !endif

  !distribute lines Las configuraciones han sido enviadas a las $name_subclasses con éxito&nbsp;\
  Puede elegir enviar las configuraciones siguientes $name_thisclass a todas sus $name_subclasses&nbsp;\
 into name_propagate_succes,name_propagate_choose

  !set name_warning=Note que esto solo concierne a las $name_subclasses ya creadas y que \
    las $name_subclasses no reflejarán los cambios posteriores \
   de las configuraciones $name_thisclass. Debe volver a enviar los cambios cada vez que quiera \
   que se apliquen a las $name_subclasses.

!endif

!if $job=log
  !set name_warning_log=Aquí se encuentra el registro de ciertas actividades de administración de su clase.\
    Este registro le permite comprobar si hay actividades sospechosas.
!endif

!if $job=index
  !set title=!nosubst Actualización del índice $tit
  !set name_done=Hecho
  !set name_result=Resultado del script

  !if $job2=structure
    !set tit=de las zonas
  !endif
  !if $job2=userlist
    !set tit=de los participantes
  !endif
  !if $job2=teacherlist
   !set tit=de los profesores
  !endif
  !if $job2=oef
    !set tit=de los ejercicios
  !endif
  !if $job2=doc
    !set tit=de los documentos
  !endif
!endif

!if $job iswordof list new auth or $job=
  !! pas d'espace en début de ligne
  !distribute line Nombre del establecimiento\
Nombre de la clase\
Número de la clase\
Opciones\
Cuenta Modtool \
Bloqueo de conexión\
Mejores notas, número, anonimato\
Límite del número de participantes\
Fecha de expiración\
Grabación de los ejercicios\
Grabación de los exámenes\
visible por los estudiantes\
para modificar el estilo de las páginas de la clase, como los colores, añadir un logo.. \
preferencias personales, no modifica el aspecto de la clase para los participantes\
Enviar las configuraciones a las zonas inferiores\
definir relaciones de vecindad con otras clases de este servidor\
definir relaciones con otros servidores\
definir una autentificación externa a WIMS; la configuración se debe realizar antes de la inscripción de los participantes\
participantes\
Actualizar los índices \
uno de los cuales cambio de \
hacer una copia de seguridad de su clase en su computador(a) o restaurar recursos en la clase a partir de una copia de seguridad\
restringir los recursos accesibles por un participante conectado en la clase\
restringir las condiciones en las cuales las puntuaciones obtenidas por un participante son registradas\
para las cuales se registran las puntuaciones\
Eliminación selectiva\
Configurar\
Mezcla\
Autorizar a los participantes a desactivar las puntuaciones\
Títulos de los ejercicios OEF para los estudiantes\
Los participantes saben si el profesor está conectado\
Mostrar la IP del usuario al administrador de una clase\
Campos adicionales a completar en la inscripción\
Tomar en cuenta eventuales cambios de IP durante un examen\
parámetros definidos al crear la clase, configuración de las hojas y de los exámenes\
Mostrar el correo electrónico del(de la) profesor(a)\
  into name_name_institution,name_name_class,name_name_number,name_optionword,name_devaccount,name_lock_level,\
    name_bestscore,name_limit,name_expirationdate,name_register_exo,name_register_exam,\
    name_visible,name_apparence,name_pref,name_dependant_zone,name_neigh,name_link,name_useauth,name_ldap,name_index,\
    name_change,name_load,name_restriction1,name_restriction2,name_score,name_clean,\
    name_config,name_mix_auth,name_config_authscoresuspend,\
    name_config_exotitleform,name_config_supconnectshowed,name_config_show_IP,name_regvars,\
    name_examscore_withoutip,name_param,name_sendmailteacher

  !set name_config_exotitleformoption=Ningún(a),Título del ejercicio,Número de la hoja y de la serie de ejercicios,Título de la hoja y número de la serie de ejercicios,Título de la hoja y título de la serie de ejercicios en la hoja
  !set name_allowcloning=Autorizar la duplicación
  !set name_cloningpwd=Contraseña de duplicación
!endif

:commun
!distribute line Configuración global\
Autentificación\
Preferencias\
Restricción de acceso\
Parametrización OEF\
Clases vecinas\
Gestión de la seguridad\
Eliminación selectiva\
Actualizar\
Otros servidores\
Contraseñas\
Zonas inferiores\
Apariencia\
Restricción de la puntuación\
Dirección de una plataforma\
de\
Autentificación externa\
into wims_name_config_list,wims_name_config_auth,wims_name_config_pref,wims_name_config_restr,wims_name_config_oef,\
wims_name_config_neigh,wims_name_config_secure,wims_name_config_clean,wims_config_refresh,\
wims_name_config_otherserver,wims_name_config_passwd,wims_name_config_propagate,wims_name_config_present,\
wims_name_config_score,wims_name_config_ent,name_of,wims_name_external_auth

!let wims_name_exploresave=Restauration sélective

!distribute lines Estaciones de trabajo seguras\
Hoja de estilo\
Logo de la clase\
Posición del logo\
arriba a la izquierda, arriba a la derecha\
Tema de estilo de la clase\
Juego de iconos\
Nivel académico\
Estaciones de trabajo autorizadas a las notas\
Contraseña de inscripción\
Contraseña de profesor\
Límites de registro de ejercicios y exámenes\
Vínculos sobre una plataforma o una página web\
Color de fondo de las páginas\
Color de fondo de los menús\
Color de los vínculos en los menús\
Imagen de fondo de las páginas\
Transferir un fichero css\
Gama de colores de los resultados (de 0 a 10)\
Color de fondo de los botones\
Color del texto en los botones\
Color de fondo de los botones de ayuda\
Color del texto en los botones de ayuda\
Enlaces de conexión\
Color del texto\
Colores en la presentación de las actividades\
direcciones de los enlaces de conexión directa a la clase\
Configuración OEF predeterminada\
Tipo de autentificación\
Colores\
Correo del profesor visible\
into name_secure,name_css,name_logo,name_position_logo,name_logo_side,name_theme,\
   name_theme_icon,name_level,name_security,name_password,name_supass,name_exolog,name_ent,\
   name_background_color,name_menu_color,name_refmenu_color,name_image,name_css_transfer,\
   name_colorscore,name_button_bgcolor,name_button_color,name_button_help_bgcolor,\
   name_button_help_color,name_connectlink,name_act_color,name_coloract,\
   name_connectlinkhelp,name_oefdefault,name_auth,name_colors,\
   name_sendmailteacher

!set name_content_style =<span class="tt wims_code_words">$name_css</span> debe estar sobre <span class="tt wims_code_words">class</span>

!set name_content_style2=Insertar definiciones de estilo css

!distribute lines Presentación de la clase y de sus recursos\
la configuración de las herramientas siguientes también puede ser realizada a partir de la página de bienvenida\
la configuración puede ser hecha también fuera de esta zona\
parámetros predeterminados para la inserción de ejercicios en una hoja\
Acceso a los recursos y al registro de notas\
Relación con otras clases wims u otros servidores\
Los enlaces de abajo le permiten modificar algunos parámetros de la clase.\
Copias de seguridad y mantenimiento de la clase\
into name_newrem1,name_newrem2,name_seqrem,name_oefrem,\
  name_title_access,name_title_other,name_configrem,name_title_saveman
!exit
:arch

 Ha enviado unos recursos guardados a partir de otra clase.
 Si usted recupera recursos incompatibles en
 su clase, quedará inutilizable.
 !href cmd=help&special_parm=dependencies ¿Por qué?
 <br>
 !href cmd=reply&job=list Deténgase
 si no está completamente seguro de lo que está haciendo (en todo caso,
 guarde una copia del estado actual antes de continuar).
!exit

:arch_end
 <span class="wims_warning">IMPORTANTE</span>. <ul><li>No hay verificación de los datos que ha enviado y el sistema no
autoriza la modificación manual de los archivos de copia de seguridad.
Los errores introducidos por una modificación manual de los archivos
puede ocasionar comportamientos imprevisibles en su clase.
</li>
<li> Salvo en caso de absoluta necesidad, evite recuperar
<span class="wims_warning">la configuración de la clase</span> y
<span class="wims_warning">la cuenta del profesor</span>.
Los errores en los datos enviados para estos dos campos pueden hacer
perder por completo el control de su clase.
</li><li> Puede utilizar la copia de seguridad de una clase para instalar una
nueva. En este caso, evite recuperar los registros de la actividades y las
notas y puntuaciones (manuales y automáticas). Estos dos tipos de recursos
no pueden borrarse una vez instalados (medida de seguridad). Y muchas
operaciones de mantenimiento de la clase son imposibles cuando la clase
contiene calificaciones.
</li></ul>
!exit

:clean
 <p>
 No puede borrar recursos de la clase
 cuando ya han comenzado las actividades de los participantes.
 </p><p>
 Esta es una medida de seguridad importante. Si aún así desea
 sobrepasar esta limitación, piense en los dos siguientes aspectos.
 </p><p>
 Por un lado supongamos que un estudiante le roba la contraseña. Si entra
 en esta página para borrarlo todo, los otros estudiantes que no tienen
 culpa de nada lo van a pasar mal, y las actividades pedagógicas que había preparado usted resultarán muy perjudicadas.
 </p><p>
 Por otro lado, los diferentes recursos de la clase son interdependientes.
 Si borra ciertos recursos sin borrar los que dependen de ellos, la
 clase ya no funcionará.
 !href cmd=help&special_parm=dependencies Ejemplos.
 </p><p>
 De todas formas, si quiere hacer desaparecer de verdad esta clase, siempre puede
 borrarla (poniendo como fecha de expiración la de hoy, la clase desaparecerá
 mañana por la mañana), o
 <a href="mailto:$wims_site_manager?subject=Por favor borre mi clase">pedir
 al administrador del sitio</a> que la borre por usted.
 </p>
 !exit

 :clean2
 <span class="wims_warning">Observaciones</span>. <ul><li> Sólo se puede acceder a esta página mientras
la clase está en preparación. Una vez que han comenzado las actividades de
los participantes, ya no es posible borrar los recursos.
</li><li>
Los recursos compartidos por varias clases solo pueden borrarse
desde la clase maestra que comparte. Las otras
clases deben primero.
!href cmd=reply&job=neighbor&job2=sharelist dejar de compartir
 los recursos antes de borrarlos.
 </li></ul>
!exit

:connect_first_info
La conexión a servidores/plataformas permite que su clase se comunique directamente con
una clase en otro servidor WIMS u otra plataforma web de e-learning. Los participantes
pueden navegar de forma transparente entre las clases conectadas.
<br>
En particular, puede crear una réplica de esta clase en un servidor WIMS remoto,
de forma que si el servidor local queda inutilizable momentáneamente, el trabajo
puede continuar en la clase espejo. Las puntuaciones logradas en la réplica pueden fusionarse más tarde.
!exit

:connect_first

 Este servidor WIMS no ha declarado ningún servidor remoto que admita
 conexiones. Para utilizar esta capacidad de conexión, el
 <a href="mailto:$wims_site_manager?subject=conexión a servidor">administrador del sitio</a>
 debe declarar el servidor remoto, y el servidor remoto debe también
 declarar que este servidor WIMS tiene permiso de conexión.
 (El administrador del sitio puede consultar el fichero
 <span class="tt wims_fname">$basedir/log/classes/.connections/myself</span> en busca de detalles de
 cómo declarar conexiones a sitios.)

!exit

:import2
 <p>La hoja de ejercicios que quiere importar puede utilizar ejercicios
   definidos en la clase vecina.
   </p><p>
   Si los mismos ejercicios no existen en la suya, la hoja importada
   no funcionará correctamente. Por favor verifique con cuidado que todos
   los ejercicios de la clase vecina tengan su réplica en la suya.
   </p>
!exit
:import3
  <p>Las hojas de examen se basan en las hojas de ejercicios para constituir sus contenidos.
   </p><p>
   Importar una hoja de examen no tiene sentido si no tiene exactamente las
   mismas hojas de ejercicios que la clase vecina y si estas hojas no están
   dispuestas en el mismo orden en las dos clases.
   </p><p>
   De no ser así, con seguridad la hoja de examen importada tendrá
   comportamientos erráticos.
   </p>
!exit

:import4

Está a punto de reemplazar un(a) $(name_$itype)
  presente en su clase por el recurso importado. No habrá ninguna
  posibilidad de volver atrás tras esta operación.
!exit

:import5
  No se ha añadido a su clase ninguna cuenta de participante. Compruebe
 si su clase está llena (y si queda espacio en el sitio web para añadir
 nuevos participantes)
!exit

:auth1
<p>A esta herramienta de configuración solo puede accederse desde las estaciones de trabajo seguras.
</p><p>
Como no ha definido ninguna estación de trabajo segura, vamos a
realizar la autentificación enviándole un código secreto a su dirección de correo electrónico.
Por favor lea el correo, busque el código y tecléelo debajo.
</p>
!exit
:auth2
<p>
<b>Notas</b>. Esta autentificación sirve para asegurarse de que aunque
se perdiera o robaran su contraseña, los daños a su clase serían limitados.
El proceso de autentificación es mucho más sencillo si define estaciones
de trabajo seguras de forma correcta, conservando un alto nivel de seguridad.
</p>
!exit

:download
<b>Nota</b>. Según las actividades de la clase, normalmente son los
registros de las actividades de los participantes, los mensajes de
discusión y los documentos de la clase los que componen la mayor parte
del tamaño. Puede plantearse la posibilidad de hacer varias copias selectivas de seguridad para los diferentes recursos.
!exit

:import_livret
Está a punto de reemplazar la estructura del registro de competencias
  existente en su clase por el recurso importado. No habrá ninguna
  posibilidad de volver atrás tras esta operación. Los enlaces hacia las
hojas de trabajo de la clase no se importan (las existentes se perderán).
!exit
