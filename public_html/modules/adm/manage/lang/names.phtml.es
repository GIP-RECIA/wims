!set lang_exists=yes

!set name_communication=Comunicación
!set name_optionalmod=Módulos opcionales
!set name_optionalmoddesc=Los siguientes módulos opcionales están presentes en el servidor. Solo se pueden utilizar los módulos marcados.
!set name_optionalmod_parameter_desc=Lista de opciones de tiempo de ejecución para módulos opcionales. Solo las opciones marcadas están habilitadas.
!set name_optionalmod_param_freework_nofile=Deshabilitar el depósito de archivos en trabajo libre
!set name_optionalmod_param_tchat_nofile=Deshabilitar el almacenamiento temporal de archivos en el chat
!set name_intromain=Esta utilidad le permite al administrador del sitio llevar en línea el mantenimiento de la instalación WIMS.\
 El acceso a ella está controlado estrictamente mediante definiciones en el fichero de configuración

!set name_motd=Saludos
!set name_motdtype=Página de inicio del servidor, Página de inicio del supervisor
!set name_motdintro=!nosubst Esta interfaz le permite ingresar y modificar ciertos saludos.\
Se permiten etiquetas HTML. La longitud del texto está limitada a $max_motdchar caracteres.\
Para ingresar textos más largos, es necesario conectarse directamente al servidor en modo consola.
!set name_motdtypename=Tipo de mensaje
!set name_motddesc=Contenido
!set name_motdlangdesc=El mensaje solo se mostrará a los usuarios que utilicen este idioma.
!set name_motdmodify=Modificar
!set name_motdview=Consultar
!set name_motdview=Verificar
!set name_motd_intro2=Visualización de la página de inicio del servidor, Visualización del mensaje del día de la página de inicio del supervisor
!set name_motd_introdesc=A continuación se muestra el mensaje en cada uno de los idiomas disponibles en el servidor.

!set name_geolocoption=Opción de geolocalización
!set name_geolocoptiondesc=La información de ubicación y las coordenadas GPS se utilizan para ubicar el servidor\
en el mapa del mundo. Las clases para las que también se completa esta información también se apuntan al mismo mapa.\
Las clases sin coordenadas GPS apuntan a la ubicación del servidor si está configurado o no apuntan\
si no está configurado.<br>\
La actualización de los datos de ubicación del servidor se realiza todos los lunes.

!set name_serverlocation_help=Las coordenadas GPS son dos números reales separados por una coma.
!set name_serverlocation=Ubicación del servidor (Ciudad País)
!set name_geoloc=Coordenadas GPS
!set name_autocompletion=Sugerencia de ubicación automática
!set name_autocompletion_help=Es posible definir una API de autocompletado diferente para cada uno de los idiomas (entre las API disponibles),\
  cada API gestiona una región del mundo. La API permite el autocompletado de coordenadas GPS en función del campo de ubicación\
  así como el formateo de este campo de forma estándar.\
  Sin embargo, el usuario aún puede ingresar información no autocompletada si esta\
  última no está disponible o no da el resultado deseado.
!set name_autocompletionscript=Script de autocompletado
!set name_noone=No API

!set name_warning_wrongpass=Ha introducido una contraseña errónea.
!set name_try_wrongpass=Vuelva a intentarlo

!!list
!distribute lines Tras la compilación es necesario configurar la seguridad de la instalación. ¡Por favor ejecute bin/wrapuid como root!\
  Lista de tareas que puede realizar en línea\
  Configuración\
  Chequeo del sistema\
  tras la adición de nuevos recursos (módulos, hojas de trabajo) al servidor.\
  Mantenimiento\
  Creación y mantenimiento\
  Varios\
into name_warning,name_online,name_configuration,name_checklist,name_mkindex,name_checkmaintain,\
  name_createmaintain,name_various

!set name_restore_class=Restaurar una clase
!!help

!set name_warning_help=Por favor use los enlaces de ayuda específicos de los distintos temas de ayuda.

!set name_visit=Visitar
!set name_click=Pulse aquí

!set wims_name_download_module=Module download

!if $job=access
  !set title=Configuración de la normativa de acceso
  !set name_subtitle=Definición de la normativa de acceso

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
últimos\
desde\
Número de peticiones\
Sesiones activas en los últimos 10 minutos\
Sesión\
IP del cliente\
Peticiones\
Módulo\
  into name_servor_time,name_Load,name_min,name_mins,name_hour,name_hours,name_last,name_since,\
   name_requests,name_activesessions,name_session,name_IP,name_Requests,name_module

   !if $job=activ
     !exit
   !endif
!endif

!if $job=attrib
  !set title=Comprobación de los permisos de los ficheros

  !distribute lines  Todos los permisos de acceso de esta instalación de WIMS están en modo seguro.\
  Los siguientes archivos/directorios pueden ser leídos por otros y no deberían\
  Hay un número muy grande de ficheros y directorios legibles por otros, lo que no debería de ocurrir.\
   El problema sólo se ha corregido de forma parcial. Por favor\
   repita el proceso de nuevo \
   hasta que no queden ficheros/directorios con permisos incorrectos\
   Lista de los permisos corregidos esta vez\
   Los siguientes archivos/directorios tienen el permiso de escritura abierto a otros, lo que no debería de ocurrir\
   Hay un gran número de ficheros/directorios que tienen el permiso de ejecución abierto a otros, lo que no debería de ocurrir.\
   Hay un gran número de ficheros/directorios que tienen el permiso de ejecución abierto a otros, lo que no debería de ocurrir.\
   El dueño de los siguientes ficheros/directorios no es WIMS.\
   Los siguientes directorios/ficheros deben tener el permiso de ejecución abierto a todo el mundo, y no lo tienen.\
into name_attrib1,name_attrib2,name_attrib3,name_attrib4,name_repeat,\
  name_attrib5,name_attrib6,name_attrib7,name_attrib8,name_attrib9,name_attrib10,
  name_attrib11

  !set name_warning1=Las carpetas WIMS no deben contener archivos que sean propiedad de otros.\
   Debe verificar el origen de estos archivos y eliminarlos o cambiar su propiedad.
  !set name_warning2=Importante recomendación de seguridad: por favor compruebe\
   el dueño de los ficheros.

 !set name_warning_chroot=Si usa la distribución wims-chroot, debe ejecutar \
 el script <span class="tt">bin/setchroot</span> como root.
 !set name_warning_wimsd=Si usa wimsd, debe ejecutar el script <span class="tt">bin/setwimsd</span> \
 como <span class="tt">root</span>.
 !set name_warning_wrapexec=Debe ejecutar el script <span class="tt">bin/setwrapexec</span> como root.\
   Esto es crucial para la seguridad de su instalación.
 !set name_warning3=Estos permisos erróneos constituyen un riesgo de seguridad para su instalación.\
  El problema acaba de ser corregido, pero debe estar alerta y comprobar\
  los permisos de acceso con más frecuencia. Si reaparece el mismo problema,\
  debe plantearse la posibilidad de una intrusión en su sistema, y los datos\
  de este servidor pueden estar en peligro.

  !exit
!endif

!if $job=backup

 !distribute lines  La realización de copias de seguridad de los datos no está activada en este servidor.\
   Pulse aquí\
   para configurar la salvaguardia diaria automática de los datos.\
   Última salvaguardia de los datos\
   Descargar las copias de seguridad\
   Para recuperar una copia de seguridad vieja, escriba el nombre del fichero (debe ser un archivo *.tgz)\
   Necesitará una conexión rápida si el fichero que quiere descargar es grande.\
into name_backup,name_click,name_daily,name_last,name_download,name_restore,name_fast

  !exit
!endif

!if $job=badconf

  !set name_warning1=!nosubst ¡El fichero $fname tiene permisos de lectura por todo el mundo!\
   Hay un riesgo serio de que se haya producido una filtración de la configuración \
   del administración del sitio y/o su contraseña. DEBE cambiar ahora mismo las \
   propiedades de $fname haciéndolo legible sólo por su dueño,
  !set name_warning2=y aumentar la seguridad de las definiciones del fichero en tanto sea posible.
  !set name_warning3=y definir una nueva contraseña de administrador.
  !set name_warning4=Una vez haya hecho esto vuelva a intentar abrir esta página.

  !exit
!endif

!if $job iswordof class bestclass
  !set title=
  !distribute lines Pulse aquí\
   para configurar la normativa de acceso del sitio con respecto a las clases virtuales.\
    No hay clase virtual correspondiente a su búsqueda. \
    Lista de clases de este sitio\
    creada\
    expira\
    se refiere al número de horas de conexión acumuladas en el último mes.\
    mejor actividad de clase, en este período\
    Participante\
    Lista de clases independientes\
    significa la conexión del alumno acumulativa de hora desde\
    mejor clase de horas de conexión acumulativa desde\
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
     número de serie\
     Esta clase viene con la distribución de WIMS.\
     Contraseña del profesor\
     Contraseña para la inscripción de participantes\
     Borrar esta contraseña hace que todo el mundo pueda acceder a la clase.\
     Estaciones de trabajo seguras\
     Fecha de expiración\
     notificar al superviso\
     de la clase acerca de sus cambios.\
     Otras clases\
     Límite de participantes\
    ¿Está seguro de querer borrar esta clase?\
    Su clase virtual de WIMS\
    Modificación de una clase de Wims\
  into name_prop,name_of,name_serial,name_distrib,name_supervisor_p,name_supervisor_r,\
    name_warning,name_secure,name_expire,name_notify,name_change,name_other,name_limit,name_erase,\
    name_yourclass,name_yourclassmod

  !set name_creation=!nosubst is created on $class_creation and
  !set name_expires=!nosubst expires on $class_expiration
  !set name_remark=<b>Nota</b>. Los cambios en estos campos sólo tienen sentido si es el \
     profesor responsable de la clase el que los solicita (y ha perdido el  control de la clase). Usted probablemente debería
  !endif

  !exit
!endif

!if $job=conf
  !set title=!nosubst Configuración de $cattit
  !distribute lines La configuración no ha cambiado porque no ha hecho modificaciones.\
por defecto\
Recomendado\
   into name_config,name_default,name_recommended

  !set name_updated=!nosubst El fichero <span class="tt">wims.conf</span> ha sido actualizado. Puede recuperar \
  la información de configuración antigua en <span class="tt">$backdir/wims.conf.old</span>.

  !set name_warning=Los parámetros con un asterisco <span class="tt wims_warning">'*'</span> en su título son importantes.\
Los que tienen un signo de peligro <span class="tt wims_warning">'!'</span> pueden dañar la instalación si comete algún error.\
De todas formas recuerde que si borra el fichero <span class="tt">log/wims.conf</span>\
volverá a empezar con una configuración por defecto. También puede recuperar\
las configuraciones guardadas en el directorio log.
!!confcat=6
  !distribute lines Pulsar aquí \
   para administrar las protecciones y \
   aquí\
  para administrar su módulo manualmente.\
 into name_click,name_backup,name_here,name_manual

!!ressources
  !set name_config_site=para configurar las normas de restricción de acceso del sitio.
!!graphics and software
  !distribute line para comprobar los efectos de la nueva configuración.\
   Compruebe las aplicaciones de cálculo utilizadas por numerosos módulos de WIMS\
   si quiere comprobar las aplicaciones gráficas\
   orden\
   importancia\
   disponibilidad\
   No disponible\
   Ejemplo de módulos que dependen de él\
   Este software va normalmente incluido en la distribución de WIMS. Quizás  haya fallado su compilación o usted la ha excluido deliberadamente.\
   Para comprobar los efectos del nuevo ajuste.\
 into name_check,name_checksoftware,name_checkgraphics,name_command,name_importance,\
   name_availability,name_Unavailable,name_dependingonit,name_fail,name_refresh

  !set name_warning_program=WIMS no ha podido encontrar los siguientes programas que usan algunos de sus\
 módulos. Estas aplicaciones o bien no están instaladas en el sistema\
 (en cuyo caso por favor instálelas) o bien están instaladas en un directorio\
 que no está incluido en el camino de búsqueda de WIMS. En ese caso, agregue el nombre del directorio \
 al parámetro PATH (ruta) en

!set name_imagemagick=<b>ERROR</b>! No hemos encontrado una instancia funcional de ImageMagick en su sistema.\
 Sin este paquete la mayoría de las imágenes y animaciones de WIMS estarán mal.\
 En consecuencia le recomendamos vivamente que instale ImageMagick antes de continuar.

!set name_dynamic=Comprobar las imágenes dinámicas (puede plantearse hacerlo en distintos navegadores)
!set name_tex=Esta fórmula usa una inserción dinámica escrita en TeX. Debería verse correctamente, a no ser \
 que TeX no esté instalado correctamente en su sistema.
!set name_size= Puede cambiar la escala de cambio del tamaño de los tipos de letra si aparecen\
 demasiado grandes o demasiado pequeños
!set name_mathml=Esta fórmula utiliza MathML dinámico. Si no aparece correctamente, seguramente es\
porque el navegador que usas no trata correctamente MathML.

!set name_drawing=Las siguientes dos imágenes han sido generadas por la utilidad interna\
  de dibujo dinámico. La primera es una imagen estática, la segunda es animada.\
  ¿Las ve correctamente? De lo contrario pruebe otros formatos gráficos y de animación.

!set name_gnuplot1=La siguiente representación gráfica usa <b>gnuplot</b>.
!set name_gnuplot2= Las curvas deben tener colores diferentes. Si el resultado no es correcto pruebe con distintos formatos gráficos.

!set name_graphviz1=El siguiente gráfico en color utiliza <b>graphviz</b> y es independiente de otro software de dibujo. \
   Si no aparece,
!set name_graphviz2=no está instalado correctamente.

!set name_povray1=La siguiente imagen de traza de rayos con Povray es independiente de los formatos anteriores. \
Si no aparece, entonces
!set name_povray2=no está correctamente instalado.

  !exit
!endif


!if $job=crontab
  !set title=Mantenimiento diario automático
 !distribute  Se ha encontrado una tarea cron (crontab) instalada a mano. Debe o bien continuar admnistrando las tareas de cron de forma manual o bien borrar este fichero crontab antes de pasar a utilizar la herramienta en línea.\
   ¡Nunca use esta herramienta si tiene un crontab personalizado!\
   Error extraño: no pudo recuperar mi directorio de trabajo. Compruebe su instalación: no funciona normalmente.\
   Trabajos de mantenimiento disponibles\
   Copia de seguridad de los datos a las\
   elija una hora en la que el servidor no esté ocupado\
   Contabilidad de la actividad (necesaria para las estadísticas del sitio)\
into name_manually,name_warning,name_strange,name_available,name_daily,name_notbusy,name_accounting

  !exit
!endif

!if $job2=del1
  !set name_warning=¿Está seguro de que quiere borrar la cuenta de desarrollador

  !exit
!endif

!if $job=developer
  !set title=
  !set wims_name_adddevel=Añadir una nueva cuenta de desarrollador
  !set wims_name_develaccount=Lista de cuentas de desarrolladores
  !set name_dev=Desarrolladores de módulos registrados en este servidor

  !set name_allowed=Desarrolladores a los que se les permite instalar módulos en el subdirectorio\
   local del sitio., Escriba sus identificadores de usuario:

  !set name_modification=Modificación de las propiedades de una cuenta de desarrollador
  !set name_mod_password=Deje el campo de la contraseña en blanco\
   si no desea modificar la contraseña.
  !set name_add= Para crear una nueva cuenta de desarrollador especifique por favor (todos los campos son obligatorios):
  !set name_bad_devpub=The developers who are allowed to install modules must be\
    also a registered module developpers.
  !if $job2=mod2
    !set name_error1=!nosubst El identificador de usuario (login) <span class="tt">$devlogin</span> \
   está ya siendo usado por otra cuenta. Por favor escoja otro identificador.
    !set name_error2=!nosubst No ha introducido el campo <span class="tt">$badfield</span> correctamente.\
   Por favor corríjalo.
  !endif

  !exit
!endif

!if $job=file
  !distribute lines Este es el fichero que va a descargar\
      ¿De verdad quiere borrar el fichero\
     modificado por última vez\
     bytes\
     es una imagen\
     es un fichero binario\
     es demasiado largo para poder mostrarlo o editarlo.\
     Este fichero pertenece a la distribución, no debería ser modificado.\
     Descargar el fichero\
     Contenido de\
   into name_file,name_erase,name_last,name_bytes,name_image,name_binary,name_toolong,\
   name_distrib,name_download,name_content

  !exit
!endif

!if $job=fs
!distribute lines Directorio actual\
  Subdirectorios (pulse para ir)\
  Enlaces simbólicos\
  Añadirle un nuevo fichero\
  Ficheros\
  No hay ningún fichero normal en este directorio.\
into name_current,name_sub,name_symbolic,name_add,name_files,name_file

  !exit
!endif

!if $job=no_right
  !set name_warning=Lo sentimos pero no se ha identificado correctamente como administrador\
de este sitio. No está autorizado a acceder a este módulo.

  !exit
!endif

!if $job=mkindex
  !set title=Reconstrucción del índice de recursos
  !distribute lines Se ha planificado la reconstrucción del índice de recursos. Recibirá un correo electrónico con el resultado de la reconstrucción.\
    La reconstrucción del índice de recursos ocupa muchos recursos del servidor,y debe ser evitada cuando el servidor se encuentre muy ocupado.\
    Resultado de la última reconstrucción del índice de recursos, el $lastdate\
    Pulse aquí\
    para reiniciar una reconstrucción del índice de recursos (no debería).\
    para iniciar la reconstrucción del índice de recursos.\
  into name_scheduled,name_rebuilding,name_result,name_click,name_restart,name_start

  !exit
!endif

!if $job=modules
  !set title=Module download
  !set name_scheduled=!nosubst  Se ha recibido la petición de ejecutar su orden <span class="tt wims_code_words">$auto</span>. El resultado \
   se le enviará por correo electrónico.<p> Por favor no repita la orden hasta que\
   se haya completado su ejecución.
  !distribute lines Centros de publicación consultados \
    Zona\
    Indique el área de búsqueda general, o <tt>todas</tt> para una búsqueda en todas las áreas\
    ejemplo: H1\
    Categoría\
    Especifique una categoría de búsqueda o <tt>todas</tt> para una búsqueda de todas las categorías\
    ejemplo: geometría\
    Módulos modificados desde al menos\
    días\
    Este retraso a veces evita la descarga de un módulo publicado demasiado apresuradamente\
    Configuración de descarga\
  into name_mod, name_zone, muzone_help, muzone_placeholder,\
    name_cat, mucat_help, mucat_placeholder, name_change, name_ago,\
    mudelay_help, wims_name_config_module

  !distribute lines Error en la descarga del módulo \
      Error al instalar/actualizar\
      Instalación/actualización de\
       Éxito\
       Deberá\
       Probar\
       reconstruir el índice de módulos\
       Instalar\
       Actualizar\
       contra\
       Cambios\
       Nueva versión de\
       Módulo nuevo\
       Tiene que\
      después de una actualización de módulos.\
      Pulse aquí\
      para configurar los centros de publicación y las descargas utilizadas, para configurar la actualización diaria de los módulos o para elegir los centros de publicación puestos a disposición de los desarrolladores de su sitio.\
      Pueden también poner al día\
      Aquí puede actualizar/cargar módulos.\
    into name_error1,name_error2,name_install,name_successful,name_need,name_test,name_rebuild,name_Install,\
      name_Update,name_versus,name_Changes,name_version,name_newmodule,name_youneed,name_after,\
      name_click,name_automatic,name_rss,name_canupdate

!!check
  !distribute lines No se ha hallado ningún anuncio de módulo que se corresponda con su búsqueda.\
    Pulse en la dirección de un módulo para comprobar/instalar/actualizarlo.\
    Se han hallado versiones nuevas\
    Se han hallado versiones nuevas\
    actualizar todo\
    instalar todos\
    actualizado por\
    Nueva versión\
    Hallados módulos nuevos\
    Versión del<br>servidor\
    hecho público<br>por\
  into name_check1,name_click_adress,name_foundv,name_foundm,name_all_u,name_all_i,name_updated,name_newv,name_newm,name_server,name_published

  !exit
!endif

!if $job=restore
  !set name_warning1=Archivo comprimido en mal estado: no se ha encontrado ningún contenido en él.
  !set name_warning2=Se han recuperado/instalado con éxito datos en los siguientes directorios

  !exit
!endif

!if $job=sess
  !set title=Sesión de usuario
  !distribute lines Contenido de la sesión\
    Contenido del fichero de variables de la sesión\
    Contenido del fichero\
    Lista de sesiones activas\
  into name_content_s,name_content_v,name_content_f,name_listsessions

  !exit
!endif

!if $job=upload
  !set name_warning=Para subir recursos al servidor, inserte el cdrom o pendrive usb que contiene\
   el recurso y busque el fichero <span class="tt">wims-resource.tgz</span>\
   o <span class="tt">wimsres-*.tgz</span>  en el siguiente campo de entrada
  !set name_need=Necesitará una conexión rápida si el fichero que va a subir es grande.
  !set name_depositcheck=Do this only after checking the file you are loading.\
    It can be difficult to go back through this interface.
  !exit
!endif

!if $job=rss
  !set title= Reconstruir la conexión RSS
  !set name_start=para comenzar a reconstruir la conexión RSS.

  !exit
!endif

!if $job=otherdownload
  !set name_text1=Otros recursos pueden cargarse a distancia manualmente.
  !set name_shtooka=Cargar a distancia los recursos Shtooka (palabras audio)

  !exit
!endif

!if $job=swac
  !set name_mkindex=Reconstruir el índice
  !set name_text_swac= Pueden cargar a distancia los ficheros MP3 de algunos volúmenes\
   del proyecto Shtooka.<p>Si los módulos que los llaman son muy solicitados por\
   el servidor WIMS, deberían hacerlo. Si no, estos módulos irán a buscar los ficheros MP3 sobre el sitio http://shtooka.net\
</p><p>\
Para cargar a distancia las colecciones, hagan lo por línea de pedido con el script <span class="tt">$wims_home/bin/swac </span> \
desde la línea de comando. Instalará algunos paquetes swac en el lugar debido.\
</p><p class="small">Porque los ficheros wims se cifran ISOlatino, no es aún \
posible utilizar los paquetes cirílicos.</p>

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
  Hay muchas clases archivadas. Ingrese la identificación de la clase para restaurar.\
  into name_restore_choose, name_restore_noclass,name_toomuchbackup

  !set name_restore_done=!nosubst La clase <strong>$year/$class</strong> ha sido restaurada.<br>\
   La indexación de las clases se realizará durante la limpieza diaria.<br>\
   Notifique al maestro que la nueva fecha de vencimiento es <strong>$date</strong>.\
   No recomendamos hacer esto con demasiada frecuencia mientras el servidor está en uso.<br>\
   No se recomienda repetir esta operación una segunda vez.

  !set name_class_link=Enlace directo a la página de mantenimiento de la clase:
  !exit
!endif
