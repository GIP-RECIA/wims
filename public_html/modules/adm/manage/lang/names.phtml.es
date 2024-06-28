!set lang_exists=yes

!set name_communication=Comunicaci�n
!set name_optionalmod=M�dulos opcionales
!set name_optionalmoddesc=Los siguientes m�dulos opcionales est�n presentes en el servidor. Solo se pueden utilizar los m�dulos marcados.
!set name_optionalmod_parameter_desc=Lista de opciones de tiempo de ejecuci�n para m�dulos opcionales. Solo las opciones marcadas est�n habilitadas.
!set name_optionalmod_param_freework_nofile=Deshabilitar el dep�sito de archivos en trabajo libre
!set name_optionalmod_param_tchat_nofile=Deshabilitar el almacenamiento temporal de archivos en el chat
!set name_intromain=Esta utilidad le permite al administrador del sitio llevar en l�nea el mantenimiento de la instalaci�n WIMS.\
 El acceso a ella est� controlado estrictamente mediante definiciones en el fichero de configuraci�n

!set name_motd=Saludos
!set name_motdtype=P�gina de inicio del servidor, P�gina de inicio del supervisor
!set name_motdintro=!nosubst Esta interfaz le permite ingresar y modificar ciertos saludos.\
Se permiten etiquetas HTML. La longitud del texto est� limitada a $max_motdchar caracteres.\
Para ingresar textos m�s largos, es necesario conectarse directamente al servidor en modo consola.
!set name_motdtypename=Tipo de mensaje
!set name_motddesc=Contenido
!set name_motdlangdesc=El mensaje solo se mostrar� a los usuarios que utilicen este idioma.
!set name_motdmodify=Modificar
!set name_motdview=Consultar
!set name_motdview=Verificar
!set name_motd_intro2=Visualizaci�n de la p�gina de inicio del servidor, Visualizaci�n del mensaje del d�a de la p�gina de inicio del supervisor
!set name_motd_introdesc=A continuaci�n se muestra el mensaje en cada uno de los idiomas disponibles en el servidor.

!set name_geolocoption=Opci�n de geolocalizaci�n
!set name_geolocoptiondesc=La informaci�n de ubicaci�n y las coordenadas GPS se utilizan para ubicar el servidor\
en el mapa del mundo. Las clases para las que tambi�n se completa esta informaci�n tambi�n se apuntan al mismo mapa.\
Las clases sin coordenadas GPS apuntan a la ubicaci�n del servidor si est� configurado o no apuntan\
si no est� configurado.<br>\
La actualizaci�n de los datos de ubicaci�n del servidor se realiza todos los lunes.

!set name_serverlocation_help=Las coordenadas GPS son dos n�meros reales separados por una coma.
!set name_serverlocation=Ubicaci�n del servidor (Ciudad Pa�s)
!set name_geoloc=Coordenadas GPS
!set name_autocompletion=Sugerencia de ubicaci�n autom�tica
!set name_autocompletion_help=Es posible definir una API de autocompletado diferente para cada uno de los idiomas (entre las API disponibles),\
  cada API gestiona una regi�n del mundo. La API permite el autocompletado de coordenadas GPS en funci�n del campo de ubicaci�n\
  as� como el formateo de este campo de forma est�ndar.\
  Sin embargo, el usuario a�n puede ingresar informaci�n no autocompletada si esta\
  �ltima no est� disponible o no da el resultado deseado.
!set name_autocompletionscript=Script de autocompletado
!set name_noone=No API

!set name_warning_wrongpass=Ha introducido una contrase�a err�nea.
!set name_try_wrongpass=Vuelva a intentarlo

!!list
!distribute lines Tras la compilaci�n es necesario configurar la seguridad de la instalaci�n. �Por favor ejecute bin/wrapuid como root!\
  Lista de tareas que puede realizar en l�nea\
  Configuraci�n\
  Chequeo del sistema\
  tras la adici�n de nuevos recursos (m�dulos, hojas de trabajo) al servidor.\
  Mantenimiento\
  Creaci�n y mantenimiento\
  Varios\
into name_warning,name_online,name_configuration,name_checklist,name_mkindex,name_checkmaintain,\
  name_createmaintain,name_various

!set name_restore_class=Restaurar una clase
!!help

!set name_warning_help=Por favor use los enlaces de ayuda espec�ficos de los distintos temas de ayuda.

!set name_visit=Visitar
!set name_click=Pulse aqu�

!set wims_name_download_module=Module download

!if $job=access
  !set title=Configuraci�n de la normativa de acceso
  !set name_subtitle=Definici�n de la normativa de acceso

  !exit
!endif
!if $job=geolocoption
  !set title=$name_geolocoption
!endif
!if $job=optionalmod
  !set title=$name_optionalmod
!endif
!! 'activ' job strings, but some are also used in class & bestclass jobs
!if $job iswordof activ class bestclass
  !set title=Actividades actuales del servidor
  !distribute lines Hora del servidor\
Media de carga\
minuto\
minutos\
hora\
horas\
�ltimos\
desde\
N�mero de peticiones\
Sesiones activas en los �ltimos 10 minutos\
Sesi�n\
IP del cliente\
Peticiones\
M�dulo\
  into name_servor_time,name_Load,name_min,name_mins,name_hour,name_hours,name_last,name_since,\
   name_requests,name_activesessions,name_session,name_IP,name_Requests,name_module

   !if $job=activ
     !exit
   !endif
!endif

!if $job=attrib
  !set title=Comprobaci�n de los permisos de los ficheros

  !distribute lines  Todos los permisos de acceso de esta instalaci�n de WIMS est�n en modo seguro.\
  Los siguientes archivos/directorios pueden ser le�dos por otros y no deber�an\
  Hay un n�mero muy grande de ficheros y directorios legibles por otros, lo que no deber�a de ocurrir.\
   El problema s�lo se ha corregido de forma parcial. Por favor\
   repita el proceso de nuevo \
   hasta que no queden ficheros/directorios con permisos incorrectos\
   Lista de los permisos corregidos esta vez\
   Los siguientes archivos/directorios tienen el permiso de escritura abierto a otros, lo que no deber�a de ocurrir\
   Hay un gran n�mero de ficheros/directorios que tienen el permiso de ejecuci�n abierto a otros, lo que no deber�a de ocurrir.\
   Hay un gran n�mero de ficheros/directorios que tienen el permiso de ejecuci�n abierto a otros, lo que no deber�a de ocurrir.\
   El due�o de los siguientes ficheros/directorios no es WIMS.\
   Los siguientes directorios/ficheros deben tener el permiso de ejecuci�n abierto a todo el mundo, y no lo tienen.\
into name_attrib1,name_attrib2,name_attrib3,name_attrib4,name_repeat,\
  name_attrib5,name_attrib6,name_attrib7,name_attrib8,name_attrib9,name_attrib10,
  name_attrib11

  !set name_warning1=Las carpetas WIMS no deben contener archivos que sean propiedad de otros.\
   Debe verificar el origen de estos archivos y eliminarlos o cambiar su propiedad.
  !set name_warning2=Importante recomendaci�n de seguridad: por favor compruebe\
   el due�o de los ficheros.

 !set name_warning_chroot=Si usa la distribuci�n wims-chroot, debe ejecutar \
 el script <span class="tt">bin/setchroot</span> como root.
 !set name_warning_wimsd=Si usa wimsd, debe ejecutar el script <span class="tt">bin/setwimsd</span> \
 como <span class="tt">root</span>.
 !set name_warning_wrapexec=Debe ejecutar el script <span class="tt">bin/setwrapexec</span> como root.\
   Esto es crucial para la seguridad de su instalaci�n.
 !set name_warning3=Estos permisos err�neos constituyen un riesgo de seguridad para su instalaci�n.\
  El problema acaba de ser corregido, pero debe estar alerta y comprobar\
  los permisos de acceso con m�s frecuencia. Si reaparece el mismo problema,\
  debe plantearse la posibilidad de una intrusi�n en su sistema, y los datos\
  de este servidor pueden estar en peligro.

  !exit
!endif

!if $job=backup

 !distribute lines  La realizaci�n de copias de seguridad de los datos no est� activada en este servidor.\
   Pulse aqu�\
   para configurar la salvaguardia diaria autom�tica de los datos.\
   �ltima salvaguardia de los datos\
   Descargar las copias de seguridad\
   Para recuperar una copia de seguridad vieja, escriba el nombre del fichero (debe ser un archivo *.tgz)\
   Necesitar� una conexi�n r�pida si el fichero que quiere descargar es grande.\
into name_backup,name_click,name_daily,name_last,name_download,name_restore,name_fast

  !exit
!endif

!if $job=badconf

  !set name_warning1=!nosubst �El fichero $fname tiene permisos de lectura por todo el mundo!\
   Hay un riesgo serio de que se haya producido una filtraci�n de la configuraci�n \
   del administraci�n del sitio y/o su contrase�a. DEBE cambiar ahora mismo las \
   propiedades de $fname haci�ndolo legible s�lo por su due�o,
  !set name_warning2=y aumentar la seguridad de las definiciones del fichero en tanto sea posible.
  !set name_warning3=y definir una nueva contrase�a de administrador.
  !set name_warning4=Una vez haya hecho esto vuelva a intentar abrir esta p�gina.

  !exit
!endif

!if $job iswordof class bestclass
  !set title=
  !distribute lines Pulse aqu�\
   para configurar la normativa de acceso del sitio con respecto a las clases virtuales.\
    No hay clase virtual correspondiente a su b�squeda. \
    Lista de clases de este sitio\
    creada\
    expira\
    se refiere al n�mero de horas de conexi�n acumuladas en el �ltimo mes.\
    mejor actividad de clase, en este per�odo\
    Participante\
    Lista de clases independientes\
    significa la conexi�n del alumno acumulativa de hora desde\
    mejor clase de horas de conexi�n acumulativa desde\
    Su clase virtual de WIMS\
    Lista de clases\
    carga\
    formato\
  into name_click,name_config,name_noclass,name_list,name_created,name_expire,name_cumul,name_best,\
  name_part,name_listindependant,name_cumul_student,name_bestcumul,name_yourclass,name_listclass,\
  name_load,name_format

  !set name_search1=There are many virtual classes on this site. To find a class, please type a search keyword.
  !set name_search2=There are still too many classes corresponding to your search word. Please give a more precise word.
  !set name_total=!nosubst There are $nbcls class groups or classes in this server.

  !if $job2 iswordof modify erase
    !set title=
    !distribute lines Propiedades importantes de la clase virtual \
     de\
     n�mero de serie\
     Esta clase viene con la distribuci�n de WIMS.\
     Contrase�a del profesor\
     Contrase�a para la inscripci�n de participantes\
     Borrar esta contrase�a hace que todo el mundo pueda acceder a la clase.\
     Estaciones de trabajo seguras\
     Fecha de expiraci�n\
     notificar al superviso\
     de la clase acerca de sus cambios.\
     Otras clases\
     L�mite de participantes\
    �Est� seguro de querer borrar esta clase?\
    Su clase virtual de WIMS\
    Modificaci�n de una clase de Wims\
  into name_prop,name_of,name_serial,name_distrib,name_supervisor_p,name_supervisor_r,\
    name_warning,name_secure,name_expire,name_notify,name_change,name_other,name_limit,name_erase,\
    name_yourclass,name_yourclassmod

  !set name_creation=!nosubst is created on $class_creation and
  !set name_expires=!nosubst expires on $class_expiration
  !set name_remark=<b>Nota</b>. Los cambios en estos campos s�lo tienen sentido si es el \
     profesor responsable de la clase el que los solicita (y ha perdido el  control de la clase). Usted probablemente deber�a
  !endif

  !exit
!endif

!if $job=conf
  !set title=!nosubst Configuraci�n de $cattit
  !distribute lines La configuraci�n no ha cambiado porque no ha hecho modificaciones.\
por defecto\
Recomendado\
   into name_config,name_default,name_recommended

  !set name_updated=!nosubst El fichero <span class="tt">wims.conf</span> ha sido actualizado. Puede recuperar \
  la informaci�n de configuraci�n antigua en <span class="tt">$backdir/wims.conf.old</span>.

  !set name_warning=Los par�metros con un asterisco <span class="tt wims_warning">'*'</span> en su t�tulo son importantes.\
Los que tienen un signo de peligro <span class="tt wims_warning">'!'</span> pueden da�ar la instalaci�n si comete alg�n error.\
De todas formas recuerde que si borra el fichero <span class="tt">log/wims.conf</span>\
volver� a empezar con una configuraci�n por defecto. Tambi�n puede recuperar\
las configuraciones guardadas en el directorio log.
!!confcat=6
  !distribute lines Pulsar aqu� \
   para administrar las protecciones y \
   aqu�\
  para administrar su m�dulo manualmente.\
 into name_click,name_backup,name_here,name_manual

!!ressources
  !set name_config_site=para configurar las normas de restricci�n de acceso del sitio.
!!graphics and software
  !distribute line para comprobar los efectos de la nueva configuraci�n.\
   Compruebe las aplicaciones de c�lculo utilizadas por numerosos m�dulos de WIMS\
   si quiere comprobar las aplicaciones gr�ficas\
   orden\
   importancia\
   disponibilidad\
   No disponible\
   Ejemplo de m�dulos que dependen de �l\
   Este software va normalmente incluido en la distribuci�n de WIMS. Quiz�s  haya fallado su compilaci�n o usted la ha excluido deliberadamente.\
   Para comprobar los efectos del nuevo ajuste.\
 into name_check,name_checksoftware,name_checkgraphics,name_command,name_importance,\
   name_availability,name_Unavailable,name_dependingonit,name_fail,name_refresh

  !set name_warning_program=WIMS no ha podido encontrar los siguientes programas que usan algunos de sus\
 m�dulos. Estas aplicaciones o bien no est�n instaladas en el sistema\
 (en cuyo caso por favor inst�lelas) o bien est�n instaladas en un directorio\
 que no est� incluido en el camino de b�squeda de WIMS. En ese caso, agregue el nombre del directorio \
 al par�metro PATH (ruta) en

!set name_imagemagick=<b>ERROR</b>! No hemos encontrado una instancia funcional de ImageMagick en su sistema.\
 Sin este paquete la mayor�a de las im�genes y animaciones de WIMS estar�n mal.\
 En consecuencia le recomendamos vivamente que instale ImageMagick antes de continuar.

!set name_dynamic=Comprobar las im�genes din�micas (puede plantearse hacerlo en distintos navegadores)
!set name_tex=Esta f�rmula usa una inserci�n din�mica escrita en TeX. Deber�a verse correctamente, a no ser \
 que TeX no est� instalado correctamente en su sistema.
!set name_size= Puede cambiar la escala de cambio del tama�o de los tipos de letra si aparecen\
 demasiado grandes o demasiado peque�os
!set name_mathml=Esta f�rmula utiliza MathML din�mico. Si no aparece correctamente, seguramente es\
porque el navegador que usas no trata correctamente MathML.

!set name_drawing=Las siguientes dos im�genes han sido generadas por la utilidad interna\
  de dibujo din�mico. La primera es una imagen est�tica, la segunda es animada.\
  �Las ve correctamente? De lo contrario pruebe otros formatos gr�ficos y de animaci�n.

!set name_gnuplot1=La siguiente representaci�n gr�fica usa <b>gnuplot</b>.
!set name_gnuplot2= Las curvas deben tener colores diferentes. Si el resultado no es correcto pruebe con distintos formatos gr�ficos.

!set name_graphviz1=El siguiente gr�fico en color utiliza <b>graphviz</b> y es independiente de otro software de dibujo. \
   Si no aparece,
!set name_graphviz2=no est� instalado correctamente.

!set name_povray1=La siguiente imagen de traza de rayos con Povray es independiente de los formatos anteriores. \
Si no aparece, entonces
!set name_povray2=no est� correctamente instalado.

  !exit
!endif


!if $job=crontab
  !set title=Mantenimiento diario autom�tico
 !distribute  Se ha encontrado una tarea cron (crontab) instalada a mano. Debe o bien continuar admnistrando las tareas de cron de forma manual o bien borrar este fichero crontab antes de pasar a utilizar la herramienta en l�nea.\
   �Nunca use esta herramienta si tiene un crontab personalizado!\
   Error extra�o: no pudo recuperar mi directorio de trabajo. Compruebe su instalaci�n: no funciona normalmente.\
   Trabajos de mantenimiento disponibles\
   Copia de seguridad de los datos a las\
   elija una hora en la que el servidor no est� ocupado\
   Contabilidad de la actividad (necesaria para las estad�sticas del sitio)\
into name_manually,name_warning,name_strange,name_available,name_daily,name_notbusy,name_accounting

  !exit
!endif

!if $job2=del1
  !set name_warning=�Est� seguro de que quiere borrar la cuenta de desarrollador

  !exit
!endif

!if $job=developer
  !set title=
  !set wims_name_adddevel=A�adir una nueva cuenta de desarrollador
  !set wims_name_develaccount=Lista de cuentas de desarrolladores
  !set name_dev=Desarrolladores de m�dulos registrados en este servidor

  !set name_allowed=Desarrolladores a los que se les permite instalar m�dulos en el subdirectorio\
   local del sitio., Escriba sus identificadores de usuario:

  !set name_modification=Modificaci�n de las propiedades de una cuenta de desarrollador
  !set name_mod_password=Deje el campo de la contrase�a en blanco\
   si no desea modificar la contrase�a.
  !set name_add= Para crear una nueva cuenta de desarrollador especifique por favor (todos los campos son obligatorios):
  !set name_bad_devpub=The developers who are allowed to install modules must be\
    also a registered module developpers.
  !if $job2=mod2
    !set name_error1=!nosubst El identificador de usuario (login) <span class="tt">$devlogin</span> \
   est� ya siendo usado por otra cuenta. Por favor escoja otro identificador.
    !set name_error2=!nosubst No ha introducido el campo <span class="tt">$badfield</span> correctamente.\
   Por favor corr�jalo.
  !endif

  !exit
!endif

!if $job=file
  !distribute lines Este es el fichero que va a descargar\
      �De verdad quiere borrar el fichero\
     modificado por �ltima vez\
     bytes\
     es una imagen\
     es un fichero binario\
     es demasiado largo para poder mostrarlo o editarlo.\
     Este fichero pertenece a la distribuci�n, no deber�a ser modificado.\
     Descargar el fichero\
     Contenido de\
   into name_file,name_erase,name_last,name_bytes,name_image,name_binary,name_toolong,\
   name_distrib,name_download,name_content

  !exit
!endif

!if $job=fs
!distribute lines Directorio actual\
  Subdirectorios (pulse para ir)\
  Enlaces simb�licos\
  A�adirle un nuevo fichero\
  Ficheros\
  No hay ning�n fichero normal en este directorio.\
into name_current,name_sub,name_symbolic,name_add,name_files,name_file

  !exit
!endif

!if $job=no_right
  !set name_warning=Lo sentimos pero no se ha identificado correctamente como administrador\
de este sitio. No est� autorizado a acceder a este m�dulo.

  !exit
!endif

!if $job=mkindex
  !set title=Reconstrucci�n del �ndice de recursos
  !distribute lines Se ha planificado la reconstrucci�n del �ndice de recursos. Recibir� un correo electr�nico con el resultado de la reconstrucci�n.\
    La reconstrucci�n del �ndice de recursos ocupa muchos recursos del servidor,y debe ser evitada cuando el servidor se encuentre muy ocupado.\
    Resultado de la �ltima reconstrucci�n del �ndice de recursos, el $lastdate\
    Pulse aqu�\
    para reiniciar una reconstrucci�n del �ndice de recursos (no deber�a).\
    para iniciar la reconstrucci�n del �ndice de recursos.\
  into name_scheduled,name_rebuilding,name_result,name_click,name_restart,name_start

  !exit
!endif

!if $job=modules
  !set title=Module download
  !set name_scheduled=!nosubst  Se ha recibido la petici�n de ejecutar su orden <span class="tt wims_code_words">$auto</span>. El resultado \
   se le enviar� por correo electr�nico.<p> Por favor no repita la orden hasta que\
   se haya completado su ejecuci�n.
  !distribute lines Centros de publicaci�n consultados \
    Zona\
    Indique el �rea de b�squeda general, o <tt>todas</tt> para una b�squeda en todas las �reas\
    ejemplo: H1\
    Categor�a\
    Especifique una categor�a de b�squeda o <tt>todas</tt> para una b�squeda de todas las categor�as\
    ejemplo: geometr�a\
    M�dulos modificados desde al menos\
    d�as\
    Este retraso a veces evita la descarga de un m�dulo publicado demasiado apresuradamente\
    Configuraci�n de descarga\
  into name_mod, name_zone, muzone_help, muzone_placeholder,\
    name_cat, mucat_help, mucat_placeholder, name_change, name_ago,\
    mudelay_help, wims_name_config_module

  !distribute lines Error en la descarga del m�dulo \
      Error al instalar/actualizar\
      Instalaci�n/actualizaci�n de\
       �xito\
       Deber�\
       Probar\
       reconstruir el �ndice de m�dulos\
       Instalar\
       Actualizar\
       contra\
       Cambios\
       Nueva versi�n de\
       M�dulo nuevo\
       Tiene que\
      despu�s de una actualizaci�n de m�dulos.\
      Pulse aqu�\
      para configurar los centros de publicaci�n y las descargas utilizadas, para configurar la actualizaci�n diaria de los m�dulos o para elegir los centros de publicaci�n puestos a disposici�n de los desarrolladores de su sitio.\
      Pueden tambi�n poner al d�a\
      Aqu� puede actualizar/cargar m�dulos.\
    into name_error1,name_error2,name_install,name_successful,name_need,name_test,name_rebuild,name_Install,\
      name_Update,name_versus,name_Changes,name_version,name_newmodule,name_youneed,name_after,\
      name_click,name_automatic,name_rss,name_canupdate

!!check
  !distribute lines No se ha hallado ning�n anuncio de m�dulo que se corresponda con su b�squeda.\
    Pulse en la direcci�n de un m�dulo para comprobar/instalar/actualizarlo.\
    Se han hallado versiones nuevas\
    Se han hallado versiones nuevas\
    actualizar todo\
    instalar todos\
    actualizado por\
    Nueva versi�n\
    Hallados m�dulos nuevos\
    Versi�n del<br>servidor\
    hecho p�blico<br>por\
  into name_check1,name_click_adress,name_foundv,name_foundm,name_all_u,name_all_i,name_updated,name_newv,name_newm,name_server,name_published

  !exit
!endif

!if $job=restore
  !set name_warning1=Archivo comprimido en mal estado: no se ha encontrado ning�n contenido en �l.
  !set name_warning2=Se han recuperado/instalado con �xito datos en los siguientes directorios

  !exit
!endif

!if $job=sess
  !set title=Sesi�n de usuario
  !distribute lines Contenido de la sesi�n\
    Contenido del fichero de variables de la sesi�n\
    Contenido del fichero\
    Lista de sesiones activas\
  into name_content_s,name_content_v,name_content_f,name_listsessions

  !exit
!endif

!if $job=upload
  !set name_warning=Para subir recursos al servidor, inserte el cdrom o pendrive usb que contiene\
   el recurso y busque el fichero <span class="tt">wims-resource.tgz</span>\
   o <span class="tt">wimsres-*.tgz</span>  en el siguiente campo de entrada
  !set name_need=Necesitar� una conexi�n r�pida si el fichero que va a subir es grande.
  !set name_depositcheck=Do this only after checking the file you are loading.\
    It can be difficult to go back through this interface.
  !exit
!endif

!if $job=rss
  !set title= Reconstruir la conexi�n RSS
  !set name_start=para comenzar a reconstruir la conexi�n RSS.

  !exit
!endif

!if $job=otherdownload
  !set name_text1=Otros recursos pueden cargarse a distancia manualmente.
  !set name_shtooka=Cargar a distancia los recursos Shtooka (palabras audio)

  !exit
!endif

!if $job=swac
  !set name_mkindex=Reconstruir el �ndice
  !set name_text_swac= Pueden cargar a distancia los ficheros MP3 de algunos vol�menes\
   del proyecto Shtooka.<p>Si los m�dulos que los llaman son muy solicitados por\
   el servidor WIMS, deber�an hacerlo. Si no, estos m�dulos ir�n a buscar los ficheros MP3 sobre el sitio http://shtooka.net\
</p><p>\
Para cargar a distancia las colecciones, hagan lo por l�nea de pedido con el script <span class="tt">$wims_home/bin/swac </span> \
desde la l�nea de comando. Instalar� algunos paquetes swac en el lugar debido.\
</p><p class="small">Porque los ficheros wims se cifran ISOlatino, no es a�n \
posible utilizar los paquetes cir�licos.</p>

  !exit
!endif

!if $job=sendmail
  !distribute item Asunto,Mensaje \
  into name_subject,name_message
  !let name_dest=Destinatarios,Administrador del servidor,Administrador de clase individual,Administrador de grupo de clase,Administrador de escuela,Profesor de grupo de clase,Profesor de escuela
  !let name_sending=Su mensaje ha sido enviado a todos los destinatarios.

  !exit
!endif

!if $job=classrestore
  !distribute lines Elija la clase a restaurar en la siguiente lista\
  No hay clases para restaurar.\
  Hay muchas clases archivadas. Ingrese la identificaci�n de la clase para restaurar.\
  into name_restore_choose, name_restore_noclass,name_toomuchbackup

  !set name_restore_done=!nosubst La clase <strong>$year/$class</strong> ha sido restaurada.<br>\
   La indexaci�n de las clases se realizar� durante la limpieza diaria.<br>\
   Notifique al maestro que la nueva fecha de vencimiento es <strong>$date</strong>.\
   No recomendamos hacer esto con demasiada frecuencia mientras el servidor est� en uso.<br>\
   No se recomienda repetir esta operaci�n una segunda vez.

  !set name_class_link=Enlace directo a la p�gina de mantenimiento de la clase:
  !exit
!endif
