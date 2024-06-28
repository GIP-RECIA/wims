!set lang_exists=yes

!if $wims_read_parm!=
  !goto $wims_read_parm
!endif

!set name_auth=Autenticación del desarrollador
!set name_prop=Propiedades
!set name_modname=!nosubst Lista de módulos de <em>$(auth_name[1]) $(auth_name[2])</em>
!set name_create=Crear un módulo
!set name_diff=Comprobar las diferencias
!! must be the same as wims_name_modcontent in html/names.phtml.$lang
!! dont succeed not to duplicate
!set name_flist=Lista de ficheros
!set name_files_binfile=Ficheros binarios
!set name_del=Borrar un módulo
!set name_size=Tamaño (bytes)
!set name_publish=!nosubst Publicar $i_title<br><span class="tt">$mod</span>
!set name_publication=Publicación
!set name_validation_message=Pedir al administrador del sitio que verifique la instalación.
!set name_compile=Compilar latex2wims
!set name_backup=Respaldo
!set name_edfile=Modificación del fichero
!set name_showfile=Contenido del fichero

!set name_save_done=File save done

!distribute line Ficheros OEF/src\
Ficheros OEF/src/cpp\
Ficheros de datos editables\
Ficheros de traducción\
Ficheros de configuración\
Ficheros de ayuda\
into name_files_src,name_files_cpp, name_files_other,name_files_lang,name_files_phtml,name_files_help

!! wims_name_properties
!set name_index=Propiedades

!set name_file=Ficheros binarios existentes
!set name_file1=Fichero
!set name_nofile= No hay ningún fichero en el módulo.
!set name_depos=Depositar un fichero,en el siguiente directorio
!set name_in_module=en el módulo
!set name_replace=un fichero para sustituirlo
!set name_addfile=Añadir otro fichero
!set name_successfile=El archivo ha sido cargado en el módulo.
!set name_nosuccessfile=El archivo no se ha subido al módulo.\
  Verifique que su nombre no contenga una letra acentuada o \
  uno de los siguientes caracteres
!set name_successdeletefile=ha sido eliminado del módulo
!set name_failuredeletefile=NO ha sido eliminado del módulo
!set name_changefile=Renombrar
!set name_changenamefile=Nuevo nombre del fichero
!set name_warning_changenamefile=No se recomiendan algunos cambios de nombre \
    porque un aula virtual u hoja de trabajo que hace referencia a este ejercicio \
    dejará de funcionar si se cambia el nombre del ejercicio. \
    Este es el caso, en particular, del nombre de los archivos de ejercicios con extensión.

!set name_help_addfile=El nombre <span class="tt wims_fname">name_file</span> debe contener\
  solo caracteres alfanuméricos sin acentos ni espacios (no coloque un signo -).
!set name_help_addfile_src=el nombre de la fuente de un ejercicio OEF\
    debe ser de la forma <span class="tt"> src/name_file.oef</span>
!set name_help_addfile_cpp=El nombre del archivo que contiene la fuente de un archivo cpp de ejercicio OEF\
   debe tener el formato <span class="tt wims_fname">src/cpp/name_file.cpp</span>.\
   La lista de archivos que se crean (en la variable <span class="tt">target</span>)\
   debe contener únicamente caracteres alfanuméricos sin acentos ni espacios (no ponga el signo -).
!set name_help_addfile_other=El nombre del archivo debe ser de la forma\
 <span class="tt wims_fname">name_file</span>.
!set name_help_addfile_lang=El nombre del archivo debe ser de la forma\
 <span class="tt wims_fname">lang/name_file.xx</span> donde\
 <span class="tt wims_fname">xx</span> es el símbolo que representa la lengua.
!set name_help_addfile_phtml=Puede modificar algunos de estos archivos para\
 configurar más detalles de su módulo.

!set name_gestion=El enlace <span class="wims_button disabled">$wims_name_docgestion</span>\
  le permite crear los bloques del documento y editarlos. Una vez que se creó el primer bloque, \
  el enlace <span class="wims_button disabled">$wims_name_binfile</span>\
   le permite cargar archivos no editables (por ejemplo, imágenes, documentos \
  pdf, ...). Este enlace también permite depositar fuentes en LaTeX \
  que se transformará en un documento (ver la ayuda de $wims_name_latex2wims).

!set name_your_module=Su módulo
!set name_your_module_OEF=es un módulo de ejercicios escritos en formato OEF y

!set name_first=Para crear su primer ejercicio, regrese a la página de inicio de Modtool \
y haga clic en el enlace $$wims_name_createxo. Si está acostumbrado al modo raw, \
puede crear directamente el archivo (ver la parte inferior de esta página) y así elegir su nombre.
!set name_file2=contiene los siguientes archivos
!set name_updateadress=Actualice la dirección
!set name_simpl_address=La dirección de este módulo es una dirección simplificada
!set gnu=!nosubst &copy; $year (<a href=\"COPYING\">GNU GPL</a>)

!set name_type=Módulo de ejercicios OEF,Documento, Ejercicio, Herramienta, Recreación, Deducción
!set name_zone=Zona
!set name_Category=Categoría
!set name_category=!nosubst $wims_name_Type
!set name_createnew=Nuevo módulo
!set name_noquicktool=Quicktool no esta instalado en este servidor
!set name_rename=cambiar nombre
!set name_duplicate=duplicar
!set name_increment=¡No olviden incrementarlo cuando publiquen una nueva versión!
!set name_backto=!nosubst Volver a $otit
!set name_this1=de su nuevo módulo
!set name_this2=del módulo actualmente en desarrollo
!set name_levellist=K: guarderia; E: escuela primaria; H: escuela secundaria; U: universidad; <br>G: estudio doctoral; R: investigación

!set name_accountchange=Cambiar las propiedades de su cuenta de desarrollo
!set name_empty=deje el campo <span class="wims_label">contraseña</span> vacío si quieren conservar el antiguo
!set name_change=Se cambió la contraseña de su cuenta.
!set name_translation_language=Otros idiomas
!set name_images=Imágenes comunes
!set name_help_images=si necesita imágenes en un ejercicio OEF.
!distribute lines Opciones de prueba\
   Fórmulas\
   Imagen baja, Imagen alta, Mathml\
   Posibilidad de zoom\
   Espaciado de letras\
   normal, espaciado\
   Tamaño de las fórmulas matemáticas\
into name_optiontest,name_formule,name_useropts1, name_useropts2,name_fonte,name_useropts3,\
  name_useropts4

!if $job iswordof modname restore
  !set name_moddevcnt=!nosubst Tienen $totalcnt módulos en desarrollo.
  !set name_limited=!nosubst lista limitada a $maxlist módulos

  !distribute lines No mostrar más que los módulos cuya dirección contiene\
    Presione el título o la dirección de un módulo para trabajar\
    No tienen ningún módulo en desarrollo. Pulse aquí para \
    Restaurar un fichero de copia de seguridad\
  into name_browselist,name_clicktitle,name_nomodule,name_restore
!endif

!distribute lines Copiar, Cambiar nombre, Duplicar, Cambiar nombre\
  into name_choice
!set name_move=$(name_choice[2])
!set name_copy=$(name_choice[1])/$(name_choice[3])

!if $job iswordof move copy
  !distribute lines Hacer una copia\
   Cambiar el nombre del módulo va a romper las hojas de trabajo que lo utilizan. Garantizan que no es el caso\
 into name_copy,name_warning1

!set name_public_module=!nosubst el módulo público <span class="wims_mod_title">$otit</span>\
(<span class="tt wims_fname">$original2</span>) en su espacio de desarrollo bajo la dirección
!set name_warning2=Cambiar el nombre o duplicar un módulo de dirección pública\
 puede conducir a la duplicación de su publicación. ¡Sea muy prudente!\
  <p>Si quieren hacer pruebas sobre el módulo, elige la zona <span class="wims_fname">pruebas</span>.
!set name_warning3=Si ya publicaron este módulo, quiere cambiar esta dirección exactamente según \
  su dirección pública. Si no arriesgan una duplicación de su publicación.</p>
!endif

!if $job=auth
  !set name_intro=Esta herramienta es para desarrollar en línea módulos para WIMS. \
    Es una herramienta sofisticada y solamente desarrolladores registrados podrán \
    acceder a ella. Por favor, introduzca los datos de su identificación

  !distribute lines escriba al encargado de este servidor\
    si ha olvidado su contraseña.\
    Si usted tiene interés en desarrollar módulos WIMS,\
    para conseguir una identificación de desarrollador (usuario, contraseña).\
    Recuerde que usted también puede usar\
    para escribir ejercicios interactivos de una manera fácil, sin necesidad de identificación.\
  into name_manager,name_forget,name_developer,name_identification,name_createxo1,\
    name_createxo2
!endif

!if $job=backup
  !set name_save=Ahí tienes el fichero de copia de seguridad del módulo
  !set name_internal_error= Error interno: imposible de generar el fichero de protección. Quiere contactar el
!endif

!if $job=publish
  !distribute lines Nombre de su cuenta de publicación \
    Tipo de publicación\
    versión desarrollo, versión estable - modificar un módulo existente, versión estable - añadir un nuevo módulo\
    Es una traducción ¿de un módulo que existe <br> creado por otro autor?\
    Modificantes autorizados\
    ¡Lea esto en primer lugar!\
    El módulo publicado aparecerá en el motor de búsqueda del sitio de aquí a algunos minutos.\
    Si es un error, quiere pedir al gestor del lugar retirar manualmente el módulo que publicaron.\
    Van a recibir un correo electrónico que confirma la recepción del envío.\
    De acuerdo, andelante\
    Los siguientes dominios no existen\
 into name_publishaccount,name_publishtype,name_prompt,name_translation,name_authorized,name_readhelp,\
    name_local,name_error,name_emailsend,name_goahead,name_warning_nodomain

  !set name_warning0=!nosubst Este módulo tiene una dirección pública. Deben publicarlo pues en el centro de publicación $publishname
  !set name_warning01=Quiere entrar su identificación de publicación.
  !set name_warning1=¿Incrementaron la versión del módulo, si publican una nueva versión de un \
    módulo existente? Si no, nadie pondrá al día su nueva versión.
  !set name_warning2=Su módulo tiene una dirección local. No pueden publicarle sino sobre el espacio local \
    de este servidor. ¿Quieren seguir?
  !set name_warning3=La principal ventaja de una publicación en el espacio local es evidenciar \
    el módulo en el motor de búsqueda del servidor local.
  !set name_cheat1=!nosubst Este módulo declara que se satisface con WIMS-$Wver2,\
    mientras que se desarrolló probablemente o modificado bajo este servidor que es \
    de versión $wims_version. Deben poner al día el fichero ÍNDICE del módulo \
    modificando la versión de wims en <span class="tt"> Propiedades< /tt>.

  !set name_cheat2= ¡Si están seguros de lo que hicieron, pueden engañar \
    para hacer creer a los servidores que están en un servidor antiguo (OPERACIÓN MUY ARRIESGADA)!
  !set name_warning_domain=!nosubst Debería verificar las propiedades del módulo y \
    usar dominios y palabras clave que están en las ayudas del \
    campo <span class="wims_label">$wims_name_Domain</span> y \
    <span class="wims_label">$wims_name_Keywords</span>. \
    Si ninguno de ellos es conveniente, puede ayudarnos \
    enviando sus propuestas a
  !set name_warning_domain2=!nosubst Haga clic en el campo ayuda\
    <span class="wims_label">$wims_name_Domain</span> o\
    <span class="wims_label">$wims_name_Keywords</span> para encontrar la lista
  !set name_warning_keywords=!nosubst Para mejorar la referencia de los módulos públicos,\
    compruebe los dominios y las palabras clave (consulte el campo ayuda \
    <span class="wims_label">$wims_name_Domain</span> y \
    <span class="wims_label">$wims_name_Keywords</span>, les mots-clés doivent être séparés\
    por comas, pero los grupos de palabras se admiten,\
    introduzca la versión "inglés técnico", lo que permitirá una difusión\
    en todos los idiomas manejados por el servidor).
  !set name_warning_keywords_unknown=Las siguientes palabras clave no están en la lista oficial \
    de palabras clave de WIMS.
  !set name_warning_keywords2=Solo se propondrán palabras clave oficiales mediante el autocompletado \
    en el motor de búsqueda. ¿Has verificado que todas las palabras clave \
    que estás proponiendo no tienen una equivalente en la lista "oficial"? Recuerda que\
    todas las palabras en el título o la descripción también son tenidas en cuenta \
    por el motor de búsqueda.
  !set name_warning_suggestion=Complete el archivo de NOTICIAS rápidamente indicando \
     la versión, la fecha y los cambios realizados a
  !set name_changenews=Complete el archivo de NEWS indicando la versión rápidamente, \
     la fecha y los cambios realizados.
  !set name_publish_placeholder=Indique aquí \
     la originalidad de su módulo en comparación con los módulos existentes \
     y módulos relacionados con el que está enviando.
!endif

!if $job=diff
  !distribute lines Ninguna diferencia se encuentra entre la versión de desarrollo y la versión pública del servidor.\
    Demasiadas diferencias existen entre la versión de desarrollo y la versión pública del servidor.\
    Diferencias entre la versión de desarrollo y la versión pública del servidor&nbsp;:\
  into name_diff1,name_diff2,name_diff3
!endif

!if $job=restore
  !set name_warning1=Su fichero no tiene el aire de un fichero de protección de un módulo&nbsp;!<p> \
    No pueden restaurar un fichero sino si fue telecargado antes a partir de Modtool. Vuelva a intentar.</p>

  !distribute lines No pude reconocer su fichero como una protección de módulo. Error en el fichero&nbsp;!\
    Ninguna diferencia se encuentra entre el módulo existente (en su espacio de desarrollo) y lo salvaguarda.\
    Demasiada diferencia existe entre el módulo existente (en su espacio de desarrollo) y la salvaguarda.\
    Diferencias entre el módulo existente (en su espacio de desarrollo) y la salvaguarda&nbsp;\
    Dé el fichero de protección que debe restaurarse\
    hacer mostrar las diferencias entre los módulos en primer lugar.\
    Ir a trabajar sobre el módulo\
    Módulo restaurado\
  into name_norecognize,name_diff1,name_diff2,name_diff3,name_restoref,name_show_diff,name_gotowork,\
    name_restored

  !set name_illegal= ¡Su copia de seguridad contiene ficheros de tipos ilegales! Restauración imposible.\
    <p> ¿Es una copia de seguridad de una antigua versión? Ahora deben copiar los ficheros uno a uno</p>
  !set name_warning2=Solo se aceptan las copias de seguridad de Modtool.\
     Ninguna modificación manual del fichero de archivos se autoriza.
  !set name_warning_diff=!nosubst Este módulo va a sustituir completamente al módulo existente con la misma dirección,  \
    sin posibilidad de vuelta.<br> Pero pueden

!endif
!distribute line Para restaurar un módulo WIMS obtenido previamente por una copia de seguridad y ubicado en su computadora\
  Para guardar el módulo WIMS en el que está trabajando en su computadora \
into wims_name_title_restore,wims_name_title_modsave

!exit

:del
  !set name_delmodule_warning1=Un módulo borrado lo es definitivamente.

  !set name_delmodule_warning2=<b>Y no olvidar</b>:\
    Una clase virtual o una hoja de trabajo que hace referencia a su módulo\
    no funcionarán ya si se borra este módulo.

  !set name_delmodule_confirm=Está seguro de querer borrar el módulo

!exit

:delconfirm
El fichero
 <span class="tt wims_fname">$fname</span>
 del módulo
 <span class="wims_mod_title">$title</span> esta borrado.
!exit

:delfile
Está seguro de querer borrar el módulo
<span class="tt wims_fname">$fname</span>
del módulo
<span class="wims_mod_title">$title</span>
así como cualquier archivo depositado?
!exit

:changeconfirm
El archivo
<span class="tt wims_fname">$fname</span>
del módulo
<span class="wims_mod_title">$title</span>
ha sido renombrado como
<span class="tt wims_fname">$fnewname</span>.
