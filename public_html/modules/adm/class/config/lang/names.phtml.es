!set lang_exists=yes

!if $wims_read_parm!=
  !goto $wims_read_parm
!endif

!if $job=list
!distribute lines Ubicaci�n (ciudad, pa�s)\
 Al llenar este campo, usted acepta que indiquemos que WIMS es utilizado en su ciudad, (sin ninguna otra menci�n)\
 coordenadas GPS\
 into name_location,name_location_help,name_geoloc
  !set name_config_hideaverage=Cacher les moyennes g�n�rales aux participants
  !set name_config_mexolog=Autoriser les participants � signaler l'enregistrement d'exercices � l'enseignant
  !set name_config_utime=Longueur des intervalles de temps de connexion (en min)
  !set name_utime_help=Dur�e de chaque zone de temps dans les statistiques de temps de connexion des participants
!endif

!distribute items zonas,participantes,ejercicios,documentos,profesores,hojas de ejercicios\
into wims_name_zones,wims_name_participants,wims_name_exercises,wims_name_docs,wims_name_teachers,\
name_sheets

!distribute item mensaje del d�a,ejercicio,hojas de ejercicios,ex�menes,documentos,\
  participantes,secuencias pedag�gicas,registro de competencias,competencia(s),cuestionarios,\
  agenda,cuenta del profesor,foro de discusi�n,mensaje(s) del foro,Avanzado,Documento p�blico\
into name_motd,name_exo,name_sheet,name_exam,name_doc,\
  name_user,name_seq,name_livret,name_competence,name_vote,\
  name_cdt,name_sup,name_forum,name_forum_mesg,name_advanced,name_pdoc

!distribute item mensajes del d�a,\
  ejercicios,hojas de ejercicios,ex�menes,documentos,participantes\
into name_motds,name_exos,name_sheets,name_exams,name_docs,name_users

!if $job=grestrict
  !set name_allowedsites=Sitios a los que se les permite recibir calificaciones
  !set name_excepted=Exceptuados
!endif
!if $job=connectlink
  !set title=Enlaces de conexi�n
!endif
!if $job=arch
  !set title=Copias de seguridad y Restauraci�n
  !set name_title_save=Copia de seguridad de la clase
  !set name_title_restore=Restauraci�n de recursos a partir de una copia de seguridad
  !set name_intro1=Seleccione el fichero de la copia de seguridad a restaurar
  !set name_intro=Puede descargar una copia de seguridad de su clase, en formato
  !set name_tosend=Seleccione el fichero de la copia de seguridad a restaurar
  !set name_namefile=introduzca por favor el nombre del fichero de seguridad&nbsp;
  !set name_help=Luego puede seleccionar los recursos de la clase a restaurar.
  !set name_deposit=!nosubst Su copia de seguridad <span class="tt wims_fname">$wims_deposit</span> contiene los recursos\
   siguientes. Marque lo que quiera restaurar en su clase.
  !set name_no_restore=Imposible realizar la restauraci�n porque usted comparte los recursos de otra\
 clase. Solo la clase que comparti� los recursos puede efectuar la recuperaci�n.
  !set name_check_dependency=Tener en cuenta dependencias
  !set name_desc_dependency=Advertencia: es posible que su copia de seguridad no funcione si ignora las dependencias requeridas.
  !set name_limit_exceed=No se puede importar porque la cantidad de recursos excede la capacidad m�xima
  !set name_dependance=dependencia de un recurso que excede la capacidad m�xima

  !distribute lines (de)seleccionar todo\
No ha seleccionado ning�n recurso a restaurar.\
Restaurar todo salvo la configuraci�n de la clase y la cuenta del profesor.\
<span class="wims_warning">�Peligro!</span> <span class="small">Ver m�s abajo</span>\
Configuraci�n de la clase\
Cuenta del profesor (incluida su contrase�a)\
cuentas de los participantes\
Cuentas existentes\
documentos\
Documentos existentes\
ejercicios\
ejercicios existentes\
hojas de ejercicios\
Implica la recuperaci�n de los ejercicios.\
Hojas existentes\
hojas de examen\
Implica la restauraci�n de hojas de trabajo y de ejercicios\
Ex�menes existentes\
mensajes de discusi�n\
Mensajes existentes\
Registro de las actividades de los participantes y puntuaciones autom�ticas. Implica la restauraci�n de cuentas de participantes.\
Notas introducidas por el profesor\
Notas existentes\
Una agenda de la clase\
un agenda existente\
Un registro de competencias\
un registro de competencias existente\
Secuencias pedag�gicas\
Implica la restauraci�n de ejercicios, de hojas de ejercicios, de ex�menes y de documentos\
Secuencias existentes\
Tipo de recurso\
M�todo de restauraci�n\
Reemplazo\
Elimina los recursos existentes y los reemplaza por los recursos seleccionados\
Fusi�n\
Fusiona las cuentas de los participantes&nbsp;; fusiona los ejercicios de la clase reemplazando ejercicios de igual nombre&nbsp;; <span class="wims_warning">reemplaza los otros recursos existentes</span>\
Restaurar los recursos seleccionados\
Mensaje del d�a existente\
Fotos individuales\
Fotos existentes\
herramientas\
herramientas existentes\
Trabajo libre\
Implica la restauraci�n de los ejercicios\
Trabajos libre existentes\
 into name_toggle_all,name_noselect,name_all,name_danger,name_config,name_teacher,name_user,name_user1,name_doc,\
   name_doc1,name_exo,name_exo1,name_sheet,name_sheet0,name_sheet1,name_exam,name_exam0,name_exam1,name_forum,\
   name_forum1,name_activity,name_manual,name_manual1,name_cdt,name_cdt1,name_livret,name_livret1,name_seq,\
   name_seq0,name_seq1,name_res_type,name_method,name_replace,name_replace1,name_merge,name_merge1,\
   name_selectrestore,name_motd1,name_userphoto,name_userphoto1,name_tool,name_tool1,name_freework,name_freework0,name_freework1

  !set name_cnil_warning=Le recordamos que conforme a las declaraciones realizadas a la CNIL, \
  usted no debe guardar datos relativos a sus estudiantes por m�s de un a�o. Debe entonces destruir\
  todas las copias de seguridad que contengan los datos de sus estudiantes.\
  Realice una copia de seguridad selectiva si desea guardar los recursos que usted\
  cre� (hojas, ex�menes, documentos) o use la posibilidad de duplicaci�n.

  !distribute lines Recursos de copia de seguridad restaurados en la clase\
   Se rechaza la restauraci�n de las cuentas de participantes (y registros de actividad) ya que no hay m�s espacio disponible. Quiz�s puede aumentar el n�mero de participantes. \
   La fecha de expiraci�n de la clase se modific� despu�s de la restauraci�n, ya que la fecha restaurada es\
   Cuenta(s) de participante(s) no restaurada(s) porque el identificador de usuario ya est� en uso en el agrupamiento/p�rtico&nbsp;\
   La restauraci�n no es posible porque su clase ha autorizado el compartir recursos\
   La copia de seguridad y la restauraci�n no son �tiles a este nivel de la estructura\
 into name_restore1,name_restore2,name_restore3,name_restore4,name_forbiddenrestore,name_restore5

  !distribute items irreconocible, demasiado pronto, demasiado tarde into ebad,eearly,elate

  !distribute lines Lo sentimos, no se ha podido guardar su clase.\
  Este es el fichero en el que se ha guardado su clase\
  para registrarlo sobre su computador(a).\
  Tambi�n puede seleccionar los datos a guardar. Marque los datos que desea copiar:\
  y luego haga clic en el bot�n\
  Copia de seguridad selectiva\
  para editar el archivo de copia de seguridad de arriba y guardarlo en su computador(a).\
  Posiblemente puede probar con un formato diferente. \
 into name_download1,name_download2,name_download3,name_download4,\
   name_selective1,name_selective2,name_selective3,name_try_other_format

  !set name_download5=<div class="wims_msg info">El tama�o de este fichero de copia de seguridad puede superar el l�mite autorizado\
  para su env�o al servidor.</div> Para reducir el tama�o del fichero, puede tambi�n\
  seleccionar los datos a guardar:

  !goto commun
!endif

!if $job=clean
  !set title=Limpieza de la clase
  !set name_lines=l�neas en los registros de actividad de participantes.
  !set name_cdtdates=La agenda
  !set name_livretcomp=El registro de competencias
  !set name_userphoto=fotos individuales
  !set name_empty=�Su clase est� vac�a!<br>\
  No hay recursos en su clase que puedan borrarse.
  !set name_no_erase=No se pueden eliminar porque usted est� compartiendo los de otra clase.

  !distribute lines Eliminar todo lo que se pueda eliminar\
    Tambi�n se borrar�n los registros de actividad\
    Tambi�n se borrar�n las hojas de examen\
    hacer una copia de seguridad de la clase\
    Los recursos actuales de su clase\
  into name_cleanall,name_erase1,name_warning_exam,name_saveclass,name_ressource
   !set name_warning_clean=�Los recursos borrados desde esta p�gina no se pueden\
  recuperar&nbsp;! Antes de eliminar cualquier cosa,
  !goto commun
!endif

!if $job=neighbor
  !set title=Clases vecinas
  !set name_noclass=No puede definir clases vecinas porque no hay ninguna otra\
  clase en este sitio.
  !set name_toomany=Hay demasiadas clases virtuales en este sitio. D� una palabra clave para\
   buscar las clases que les conciernen
  !set name_toomany2=Hay a�n demasiadas clases que corresponden a su b�squeda. Por favor\
   entregue una palabra clave m�s precisa.

 !distribute lines Buscar una clase \
  No se encontr� clase para su b�squeda. Vuelva a intentar. \
  Mostrar las clases abiertas del servidor \
  Las relaciones de vecindad entre clases virtuales permiten el intercambio de recursos y/o desplazamiento entre las clases. \
  Presione el nombre de una clase para cambiar sus relaciones de vecindad con ella.\
  Clases en el mismo idioma que la suya\
  Clases en otro idioma\
  Ejemplos\
into name_research,name_noclass,name_exampleclass,name_help,name_changeneigh,\
  name_samelanguage,name_otherlanguage,name_example

  !distribute lines Declaraci�n de vecindad\
   Compartir recursos\
   por usted\
   por otro\
   Intercambio(s) mutuo(s) activo(s).\
   Usted comparte sus recursos.\
   Comparta sus recursos.\
   Permisos mutuos para compartir.\
   Tiene permiso para compartir sus recursos.\
   Le permite compartir sus recursos.\
   Detener la relaci�n de compartir.\
   Compartir\
   importarlos todos \
   Recursos de ense�anza \
   Importar otros recursos \
   Clases que pueden compartir los recursos de su clase\
   N�mero de recursos\
   activo\
   Lista de todas las clases\
   Info recursos compartidos\
   Clases abiertas del servidor\
   importar recursos\
   Usted puede\
   de la clase\
   Haga clic aqu� para aceptar\
   fotos individuales\
   herramientas\
   Importation de ressources\
 into name_declaration,name_sharing,name_byyou,name_other,name_actif,name_share1,name_share2,\
 name_permit1,name_permit2,name_permit3,name_stopsharing,name_share,name_everybodyimport,name_teaching,\
 name_otherone,name_classsharing,name_ressourceallowed,name_active,name_listclass,name_infoshare,name_exampleclass,\
 name_import_resource,name_youcan,name_fromtheclass,name_click_ok,name_userphoto,name_tool,name_importres

  !set name_nonewres=!nosubst No hay ning�n (nuevo) tipo de recursos en la clase \
  <span class="wims_emph">$nei_description</span> que le autoriza a compartir.

  !set name_newres=!nosubst La clase <span class="wims_emph">$nei_description</span> \
  le <b>autoriza</b> a compartir sus

  !set name_chooseres=!nosubst Elija los recursos que usted <b>autoriza</b> a la clase <span class="wims_emph">\
  $nei_description</span> a compartir&nbsp; (<i>seleccione y luego haga clic en <span class="wims_button disabled">$wims_name_tosave</span></i>)

  !set name_warning_authorized=!nosubst La clase <span class="wims_emph">$nei_description</span>\
  le autoriza a compartir algunos recursos. No debe autorizarla a compartir el mismo tipo de recursos \
  para evitar confusiones. Comience decidiendo cu�l clase, entre las que \
  quieren compartir los recursos, autoriza el compartir un cierto tipo de recurso\
  y cu�les clases aceptan este compartir.

  !distribute lines Relaci�n de vecindad\
   no ha declarado su clase como vecina\
   le acepta como vecina para\
   con\
   Ya comparte los siguientes recursos de la clase\
   no tiene recursos que usted pueda importar\
   tiene los siguientes recursos importables\
   Mismo t�tulo en su clase\
   Vac�o(a)\
   en preparaci�n\
   Reemplazar\
   Login ya utilizado en su clase\
   Participante borrado existe en su clase\
   Importaci�n a partir de la clase\
   Transferido con �xito\
   cuentas de participantes de la clase vecina\
   Comprobar el resultado\
 into name_neighbor_relation,name_text1,name_text2,name_with,name_sharealready,\
   name_no_ressource,name_importable,name_same_title,name_empty,name_inpreparation,\
   name_replace,name_existinglogin,name_part_erased,name_import,name_transfered,\
   name_neigh_account,name_verify

    !set name_warning_duplicate=Solo las hojas cuyos contenidos (c�digo fuente de las hojas) \
  sean diferentes son importables. Luego usted puede duplicar una hoja si desea\
  tener dos hojas de id�ntico contenido.

  !set name_inactif=!nosubst El(la) $(name_$itype) ha sido puesto(a) en estado inactivo para permitirle\
  modificarlo si lo desea.

  !set name_accept=!nosubst  �Acepta usted la clase <span class="wims_emph"> $nei_description</span> como vecina suya para

  !if $job2=stopshare
    !set title=Dejar de compartir un recurso
    !set name_warning=Su clase tiene un registro de actividades activo y los\
  recursos compartidos no est�n vac�os. Si deja de compartir este recurso\
  ahora, ya no podr� volver a compartirlo m�s tarde.\
  <br> �Est� seguro de querer dejar de compartir definitivamente este recurso&nbsp;?

    !set name_stop=interrumpir.
  !endif
  !if $job2=sharelist
    !set title=Informaci�n sobre recursos compartidos.
    !set name_sharelist=!nosubst Usted comparte $(name_$rec) de
    !distribute lines No comparte ning�n recurso.\
    Usted comparte recursos de otras clases\
    into name_noresource,name_resource
  !endif

  !if $job2=addshare
    !set title=Compartir los recursos de una clase
    !set name_class_share=La clase <span class="wims_emph">$nei_description</span> \
        le permite compartir sus recursos siguientes.
    !distribute lines disponible(s)\
      Ya est� compartiendo.\
      No puede compartirlos porque ya comparte los de otra clase.\
      limpiar sus propios recursos\
      si es posible.\
      �Es muy peligroso compartir la cuenta del profesor!\
    into name_available,name_actually_sharing,name_nosharing,name_cleanup,name_ifpossible,\
      name_dangerous

    !set name_warning1=No puede compartirlos porque ha permitido a otras clases compartir\
   SUS recursos del mismo tipo. No est� autorizado compartir en cascada. Por tanto debe \
   primero poner fin a los permisos para compartir por\
   parte de la otra clase antes de poder compartir los de la clase
  !set name_warning2=!nosubst No puede compartirlos porque sus propios $(name_$r) no est�n vac�os.\
   Antes de compartir, debe primero
  !set name_warning_erase=!nosubst  �Al compartir va a BORRAR sus $(name_$r) existentes!\
     Se perder�n definitivamente si no tiene una copia de seguridad.

  !endif

  !distribute items ---,<span class="small">el profesor</span>,\
  <span class="small">los participantes</span>,\
  <span class="small">profesor y participantes</span>\
  into n_n0, n_n1, n_n2, n_n3

  !if $job2=import
    !set code1=Ning�n(a)
    !set code2=$wims_name_yes pero diferente
    !set code3=$wims_name_yes, activo y diferente
  !endif
  !goto commun
!endif

!if $job=connect
  !set title=Conectar a otros servidores / plataformas
  !set name_listserver=Lista de conexiones de los servidores

  !distribute lines Probar una conexi�n a servidor\
   Probar la conexi�n con la clase remota\
   A�adir una clase remota\
   Administrar una clase remota\
   clase local, clase remota\
   definici�n de la clase,lista de participantes,media de las notas, detalles de las notas,todo salvo la definici�n de la clase\
   Sincronizar\
   (con el otro) para\
   Clase remota\
   Servidor remoto\
   Administrar\
   Eliminar una clase remota\
   Se ha establecido la conexi�n al servidor remoto.\
   Se ha a�adido la conexi�n a su clase, pero el servidor remoto devuelve un mensaje de error\
   El servidor remoto no responde. Rep�rtelo a.\
   La conexi�n ha sido rechazada por el servidor remoto. Mensaje de error\
   Clase remota verificada\
   Se ha establecido la conexi�n. Datos enviados por la clase remota\
   Para conectarse a una clase en el servidor escogido, por favor especifique\
   Identificador de la clase remota\
   Si la clase remota no existe, el servidor crear� una nueva clase en el servidor remoto, usando las propiedades de su clase.\
   Actualizar autom�ticamente la clase remota al efectuar cambios en su clase\
   Permitir que la clase remota modifique su clase\
   Esta clase no tiene conexi�n con uno de estos servidores.\
   Ha establecido las siguientes conexiones a otros servidores.\
   Servidor\
   En estos momentos, este servidor WIMS permite conexiones con los siguientes servidores.\
   Acciones en la conexi�n\
   Acciones en la clase\
 into wims_name_connecttest,wims_name_classtest,wims_name_addconnection,wims_name_connectmanage,name_prompt1,\
   name_prompt2,name_synchronize,name_withotherone,name_remoteclass,name_remoteserver,wims_name_Manage,\
   wims_name_destroy,name_working,name_error1,name_errornoreply,name_errorreject,name_check,name_data,\
   name_toconnect,name_identifier,name_help,name_automatically,name_allow,name_noconnection,name_declaration,\
   wims_name_server,name_listserver1,name_connexion_action,name_class_action

  !goto commun
!endif

!if $job=access
  !set title=Configuraci�n del acceso a los recursos
  !goto commun
!endif

!if $job=grestrict
  !set title=Restricci�n del acceso a la puntuaci�n
  !goto commun
!endif

!if $job=present
  !set title=Configuraci�n de la apariencia de la clase
  !set name_helpcolor=El primer color es para ejercicios no terminados.
  !goto commun
!endif

!if $job=oefdefault
  !set title=Configuraci�n por defecto de los m�dulos OEF
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
  !set title=Actividades de gesti�n de seguridad disponibles
  !set name_see_activity2=Usted debe ser el origen de todas estas actividades&nbsp;; de \
    lo contrario, deber� comprobar que no se ha producido una filtraci�n de su contrase�a de profesor.
  !set name_see_activity1=Ver el registro de actividad de gesti�n de su clase
  !distribute lines Configurar las restricciones a nivel de clase\
  de los sitios que tienen acceso a las calificaciones.\
  Otras definiciones de seguridad en\
  la configuraci�n de la clase\
  into name_restriction1,name_restriction2,name_otherrestriction1,name_otherrestriction2
  !goto commun
!endif

!if $job=authtype
  !set title=Autentificaci�n externa
  !set name_intro_authtype=Seleccione la autentificaci�n y la identificaci�n deseadas\
  y llene los campos �tiles correspondientes.
  !set name_method_list= autentificaci�n v�a wims, autentificaci�n v�a CAS, \
  autentificaci�n v�a CAS e identificaci�n por un ldap,\
  autentificaci�n e identificaci�n por un ldap,\
  autentificaci�n via CAS e identificaci�n v�a php,\
  autentificaci�n e identificaci�n v�a php
  !goto commun
!endif

  !!if $job2=import
!set code1=Ning�n(a)
!set code2=$wims_name_yes pero diferente
!set code3=$wims_name_yes, activo y diferente
  !!endif

!if $job=propagate
  !if $wims_supertype=2
    !set name_thisclass=del p�rtico
    !set name_subclasses=subclases
  !else
    !set name_thisclass=de la zona actual
    !set name_subclasses=zonas dependientes
  !endif

  !distribute lines Las configuraciones han sido enviadas a las $name_subclasses con �xito&nbsp;\
  Puede elegir enviar las configuraciones siguientes $name_thisclass a todas sus $name_subclasses&nbsp;\
 into name_propagate_succes,name_propagate_choose

  !set name_warning=Note que esto solo concierne a las $name_subclasses ya creadas y que \
    las $name_subclasses no reflejar�n los cambios posteriores \
   de las configuraciones $name_thisclass. Debe volver a enviar los cambios cada vez que quiera \
   que se apliquen a las $name_subclasses.

!endif

!if $job=log
  !set name_warning_log=Aqu� se encuentra el registro de ciertas actividades de administraci�n de su clase.\
    Este registro le permite comprobar si hay actividades sospechosas.
!endif

!if $job=index
  !set title=!nosubst Actualizaci�n del �ndice $tit
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
  !! pas d'espace en d�but de ligne
  !distribute line Nombre del establecimiento\
Nombre de la clase\
N�mero de la clase\
Opciones\
Cuenta Modtool \
Bloqueo de conexi�n\
Mejores notas, n�mero, anonimato\
L�mite del n�mero de participantes\
Fecha de expiraci�n\
Grabaci�n de los ejercicios\
Grabaci�n de los ex�menes\
visible por los estudiantes\
para modificar el estilo de las p�ginas de la clase, como los colores, a�adir un logo.. \
preferencias personales, no modifica el aspecto de la clase para los participantes\
Enviar las configuraciones a las zonas inferiores\
definir relaciones de vecindad con otras clases de este servidor\
definir relaciones con otros servidores\
definir una autentificaci�n externa a WIMS; la configuraci�n se debe realizar antes de la inscripci�n de los participantes\
participantes\
Actualizar los �ndices \
uno de los cuales cambio de \
hacer una copia de seguridad de su clase en su computador(a) o restaurar recursos en la clase a partir de una copia de seguridad\
restringir los recursos accesibles por un participante conectado en la clase\
restringir las condiciones en las cuales las puntuaciones obtenidas por un participante son registradas\
para las cuales se registran las puntuaciones\
Eliminaci�n selectiva\
Configurar\
Mezcla\
Autorizar a los participantes a desactivar las puntuaciones\
T�tulos de los ejercicios OEF para los estudiantes\
Los participantes saben si el profesor est� conectado\
Mostrar la IP del usuario al administrador de una clase\
Campos adicionales a completar en la inscripci�n\
Tomar en cuenta eventuales cambios de IP durante un examen\
par�metros definidos al crear la clase, configuraci�n de las hojas y de los ex�menes\
Mostrar el correo electr�nico del(de la) profesor(a)\
  into name_name_institution,name_name_class,name_name_number,name_optionword,name_devaccount,name_lock_level,\
    name_bestscore,name_limit,name_expirationdate,name_register_exo,name_register_exam,\
    name_visible,name_apparence,name_pref,name_dependant_zone,name_neigh,name_link,name_useauth,name_ldap,name_index,\
    name_change,name_load,name_restriction1,name_restriction2,name_score,name_clean,\
    name_config,name_mix_auth,name_config_authscoresuspend,\
    name_config_exotitleform,name_config_supconnectshowed,name_config_show_IP,name_regvars,\
    name_examscore_withoutip,name_param,name_sendmailteacher

  !set name_config_exotitleformoption=Ning�n(a),T�tulo del ejercicio,N�mero de la hoja y de la serie de ejercicios,T�tulo de la hoja y n�mero de la serie de ejercicios,T�tulo de la hoja y t�tulo de la serie de ejercicios en la hoja
  !set name_allowcloning=Autorizar la duplicaci�n
  !set name_cloningpwd=Contrase�a de duplicaci�n
!endif

:commun
!distribute line Configuraci�n global\
Autentificaci�n\
Preferencias\
Restricci�n de acceso\
Parametrizaci�n OEF\
Clases vecinas\
Gesti�n de la seguridad\
Eliminaci�n selectiva\
Actualizar\
Otros servidores\
Contrase�as\
Zonas inferiores\
Apariencia\
Restricci�n de la puntuaci�n\
Direcci�n de una plataforma\
de\
Autentificaci�n externa\
into wims_name_config_list,wims_name_config_auth,wims_name_config_pref,wims_name_config_restr,wims_name_config_oef,\
wims_name_config_neigh,wims_name_config_secure,wims_name_config_clean,wims_config_refresh,\
wims_name_config_otherserver,wims_name_config_passwd,wims_name_config_propagate,wims_name_config_present,\
wims_name_config_score,wims_name_config_ent,name_of,wims_name_external_auth

!let wims_name_exploresave=Restauration s�lective

!distribute lines Estaciones de trabajo seguras\
Hoja de estilo\
Logo de la clase\
Posici�n del logo\
arriba a la izquierda, arriba a la derecha\
Tema de estilo de la clase\
Juego de iconos\
Nivel acad�mico\
Estaciones de trabajo autorizadas a las notas\
Contrase�a de inscripci�n\
Contrase�a de profesor\
L�mites de registro de ejercicios y ex�menes\
V�nculos sobre una plataforma o una p�gina web\
Color de fondo de las p�ginas\
Color de fondo de los men�s\
Color de los v�nculos en los men�s\
Imagen de fondo de las p�ginas\
Transferir un fichero css\
Gama de colores de los resultados (de 0 a 10)\
Color de fondo de los botones\
Color del texto en los botones\
Color de fondo de los botones de ayuda\
Color del texto en los botones de ayuda\
Enlaces de conexi�n\
Color del texto\
Colores en la presentaci�n de las actividades\
direcciones de los enlaces de conexi�n directa a la clase\
Configuraci�n OEF predeterminada\
Tipo de autentificaci�n\
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

!distribute lines Presentaci�n de la clase y de sus recursos\
la configuraci�n de las herramientas siguientes tambi�n puede ser realizada a partir de la p�gina de bienvenida\
la configuraci�n puede ser hecha tambi�n fuera de esta zona\
par�metros predeterminados para la inserci�n de ejercicios en una hoja\
Acceso a los recursos y al registro de notas\
Relaci�n con otras clases wims u otros servidores\
Los enlaces de abajo le permiten modificar algunos par�metros de la clase.\
Copias de seguridad y mantenimiento de la clase\
into name_newrem1,name_newrem2,name_seqrem,name_oefrem,\
  name_title_access,name_title_other,name_configrem,name_title_saveman
!exit
:arch

 Ha enviado unos recursos guardados a partir de otra clase.
 Si usted recupera recursos incompatibles en
 su clase, quedar� inutilizable.
 !href cmd=help&special_parm=dependencies �Por qu�?
 <br>
 !href cmd=reply&job=list Det�ngase
 si no est� completamente seguro de lo que est� haciendo (en todo caso,
 guarde una copia del estado actual antes de continuar).
!exit

:arch_end
 <span class="wims_warning">IMPORTANTE</span>. <ul><li>No hay verificaci�n de los datos que ha enviado y el sistema no
autoriza la modificaci�n manual de los archivos de copia de seguridad.
Los errores introducidos por una modificaci�n manual de los archivos
puede ocasionar comportamientos imprevisibles en su clase.
</li>
<li> Salvo en caso de absoluta necesidad, evite recuperar
<span class="wims_warning">la configuraci�n de la clase</span> y
<span class="wims_warning">la cuenta del profesor</span>.
Los errores en los datos enviados para estos dos campos pueden hacer
perder por completo el control de su clase.
</li><li> Puede utilizar la copia de seguridad de una clase para instalar una
nueva. En este caso, evite recuperar los registros de la actividades y las
notas y puntuaciones (manuales y autom�ticas). Estos dos tipos de recursos
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
 Esta es una medida de seguridad importante. Si a�n as� desea
 sobrepasar esta limitaci�n, piense en los dos siguientes aspectos.
 </p><p>
 Por un lado supongamos que un estudiante le roba la contrase�a. Si entra
 en esta p�gina para borrarlo todo, los otros estudiantes que no tienen
 culpa de nada lo van a pasar mal, y las actividades pedag�gicas que hab�a preparado usted resultar�n muy perjudicadas.
 </p><p>
 Por otro lado, los diferentes recursos de la clase son interdependientes.
 Si borra ciertos recursos sin borrar los que dependen de ellos, la
 clase ya no funcionar�.
 !href cmd=help&special_parm=dependencies Ejemplos.
 </p><p>
 De todas formas, si quiere hacer desaparecer de verdad esta clase, siempre puede
 borrarla (poniendo como fecha de expiraci�n la de hoy, la clase desaparecer�
 ma�ana por la ma�ana), o
 <a href="mailto:$wims_site_manager?subject=Por favor borre mi clase">pedir
 al administrador del sitio</a> que la borre por usted.
 </p>
 !exit

 :clean2
 <span class="wims_warning">Observaciones</span>. <ul><li> S�lo se puede acceder a esta p�gina mientras
la clase est� en preparaci�n. Una vez que han comenzado las actividades de
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
La conexi�n a servidores/plataformas permite que su clase se comunique directamente con
una clase en otro servidor WIMS u otra plataforma web de e-learning. Los participantes
pueden navegar de forma transparente entre las clases conectadas.
<br>
En particular, puede crear una r�plica de esta clase en un servidor WIMS remoto,
de forma que si el servidor local queda inutilizable moment�neamente, el trabajo
puede continuar en la clase espejo. Las puntuaciones logradas en la r�plica pueden fusionarse m�s tarde.
!exit

:connect_first

 Este servidor WIMS no ha declarado ning�n servidor remoto que admita
 conexiones. Para utilizar esta capacidad de conexi�n, el
 <a href="mailto:$wims_site_manager?subject=conexi�n a servidor">administrador del sitio</a>
 debe declarar el servidor remoto, y el servidor remoto debe tambi�n
 declarar que este servidor WIMS tiene permiso de conexi�n.
 (El administrador del sitio puede consultar el fichero
 <span class="tt wims_fname">$basedir/log/classes/.connections/myself</span> en busca de detalles de
 c�mo declarar conexiones a sitios.)

!exit

:import2
 <p>La hoja de ejercicios que quiere importar puede utilizar ejercicios
   definidos en la clase vecina.
   </p><p>
   Si los mismos ejercicios no existen en la suya, la hoja importada
   no funcionar� correctamente. Por favor verifique con cuidado que todos
   los ejercicios de la clase vecina tengan su r�plica en la suya.
   </p>
!exit
:import3
  <p>Las hojas de examen se basan en las hojas de ejercicios para constituir sus contenidos.
   </p><p>
   Importar una hoja de examen no tiene sentido si no tiene exactamente las
   mismas hojas de ejercicios que la clase vecina y si estas hojas no est�n
   dispuestas en el mismo orden en las dos clases.
   </p><p>
   De no ser as�, con seguridad la hoja de examen importada tendr�
   comportamientos err�ticos.
   </p>
!exit

:import4

Est� a punto de reemplazar un(a) $(name_$itype)
  presente en su clase por el recurso importado. No habr� ninguna
  posibilidad de volver atr�s tras esta operaci�n.
!exit

:import5
  No se ha a�adido a su clase ninguna cuenta de participante. Compruebe
 si su clase est� llena (y si queda espacio en el sitio web para a�adir
 nuevos participantes)
!exit

:auth1
<p>A esta herramienta de configuraci�n solo puede accederse desde las estaciones de trabajo seguras.
</p><p>
Como no ha definido ninguna estaci�n de trabajo segura, vamos a
realizar la autentificaci�n envi�ndole un c�digo secreto a su direcci�n de correo electr�nico.
Por favor lea el correo, busque el c�digo y tecl�elo debajo.
</p>
!exit
:auth2
<p>
<b>Notas</b>. Esta autentificaci�n sirve para asegurarse de que aunque
se perdiera o robaran su contrase�a, los da�os a su clase ser�an limitados.
El proceso de autentificaci�n es mucho m�s sencillo si define estaciones
de trabajo seguras de forma correcta, conservando un alto nivel de seguridad.
</p>
!exit

:download
<b>Nota</b>. Seg�n las actividades de la clase, normalmente son los
registros de las actividades de los participantes, los mensajes de
discusi�n y los documentos de la clase los que componen la mayor parte
del tama�o. Puede plantearse la posibilidad de hacer varias copias selectivas de seguridad para los diferentes recursos.
!exit

:import_livret
Est� a punto de reemplazar la estructura del registro de competencias
  existente en su clase por el recurso importado. No habr� ninguna
  posibilidad de volver atr�s tras esta operaci�n. Los enlaces hacia las
hojas de trabajo de la clase no se importan (las existentes se perder�n).
!exit
