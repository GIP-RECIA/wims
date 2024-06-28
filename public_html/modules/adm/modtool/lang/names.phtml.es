!set lang_exists=yes

!if $wims_read_parm!=
  !goto $wims_read_parm
!endif

!set name_auth=Autenticaci�n del desarrollador
!set name_prop=Propiedades
!set name_modname=!nosubst Lista de m�dulos de <em>$(auth_name[1]) $(auth_name[2])</em>
!set name_create=Crear un m�dulo
!set name_diff=Comprobar las diferencias
!! must be the same as wims_name_modcontent in html/names.phtml.$lang
!! dont succeed not to duplicate
!set name_flist=Lista de ficheros
!set name_files_binfile=Ficheros binarios
!set name_del=Borrar un m�dulo
!set name_size=Tama�o (bytes)
!set name_publish=!nosubst Publicar $i_title<br><span class="tt">$mod</span>
!set name_publication=Publicaci�n
!set name_validation_message=Pedir al administrador del sitio que verifique la instalaci�n.
!set name_compile=Compilar latex2wims
!set name_backup=Respaldo
!set name_edfile=Modificaci�n del fichero
!set name_showfile=Contenido del fichero

!set name_save_done=File save done

!distribute line Ficheros OEF/src\
Ficheros OEF/src/cpp\
Ficheros de datos editables\
Ficheros de traducci�n\
Ficheros de configuraci�n\
Ficheros de ayuda\
into name_files_src,name_files_cpp, name_files_other,name_files_lang,name_files_phtml,name_files_help

!! wims_name_properties
!set name_index=Propiedades

!set name_file=Ficheros binarios existentes
!set name_file1=Fichero
!set name_nofile= No hay ning�n fichero en el m�dulo.
!set name_depos=Depositar un fichero,en el siguiente directorio
!set name_in_module=en el m�dulo
!set name_replace=un fichero para sustituirlo
!set name_addfile=A�adir otro fichero
!set name_successfile=El archivo ha sido cargado en el m�dulo.
!set name_nosuccessfile=El archivo no se ha subido al m�dulo.\
  Verifique que su nombre no contenga una letra acentuada o \
  uno de los siguientes caracteres
!set name_successdeletefile=ha sido eliminado del m�dulo
!set name_failuredeletefile=NO ha sido eliminado del m�dulo
!set name_changefile=Renombrar
!set name_changenamefile=Nuevo nombre del fichero
!set name_warning_changenamefile=No se recomiendan algunos cambios de nombre \
    porque un aula virtual u hoja de trabajo que hace referencia a este ejercicio \
    dejar� de funcionar si se cambia el nombre del ejercicio. \
    Este es el caso, en particular, del nombre de los archivos de ejercicios con extensi�n.

!set name_help_addfile=El nombre <span class="tt wims_fname">name_file</span> debe contener\
  solo caracteres alfanum�ricos sin acentos ni espacios (no coloque un signo -).
!set name_help_addfile_src=el nombre de la fuente de un ejercicio OEF\
    debe ser de la forma <span class="tt"> src/name_file.oef</span>
!set name_help_addfile_cpp=El nombre del archivo que contiene la fuente de un archivo cpp de ejercicio OEF\
   debe tener el formato <span class="tt wims_fname">src/cpp/name_file.cpp</span>.\
   La lista de archivos que se crean (en la variable <span class="tt">target</span>)\
   debe contener �nicamente caracteres alfanum�ricos sin acentos ni espacios (no ponga el signo -).
!set name_help_addfile_other=El nombre del archivo debe ser de la forma\
 <span class="tt wims_fname">name_file</span>.
!set name_help_addfile_lang=El nombre del archivo debe ser de la forma\
 <span class="tt wims_fname">lang/name_file.xx</span> donde\
 <span class="tt wims_fname">xx</span> es el s�mbolo que representa la lengua.
!set name_help_addfile_phtml=Puede modificar algunos de estos archivos para\
 configurar m�s detalles de su m�dulo.

!set name_gestion=El enlace <span class="wims_button disabled">$wims_name_docgestion</span>\
  le permite crear los bloques del documento y editarlos. Una vez que se cre� el primer bloque, \
  el enlace <span class="wims_button disabled">$wims_name_binfile</span>\
   le permite cargar archivos no editables (por ejemplo, im�genes, documentos \
  pdf, ...). Este enlace tambi�n permite depositar fuentes en LaTeX \
  que se transformar� en un documento (ver la ayuda de $wims_name_latex2wims).

!set name_your_module=Su m�dulo
!set name_your_module_OEF=es un m�dulo de ejercicios escritos en formato OEF y

!set name_first=Para crear su primer ejercicio, regrese a la p�gina de inicio de Modtool \
y haga clic en el enlace $$wims_name_createxo. Si est� acostumbrado al modo raw, \
puede crear directamente el archivo (ver la parte inferior de esta p�gina) y as� elegir su nombre.
!set name_file2=contiene los siguientes archivos
!set name_updateadress=Actualice la direcci�n
!set name_simpl_address=La direcci�n de este m�dulo es una direcci�n simplificada
!set gnu=!nosubst &copy; $year (<a href=\"COPYING\">GNU GPL</a>)

!set name_type=M�dulo de ejercicios OEF,Documento, Ejercicio, Herramienta, Recreaci�n, Deducci�n
!set name_zone=Zona
!set name_Category=Categor�a
!set name_category=!nosubst $wims_name_Type
!set name_createnew=Nuevo m�dulo
!set name_noquicktool=Quicktool no esta instalado en este servidor
!set name_rename=cambiar nombre
!set name_duplicate=duplicar
!set name_increment=�No olviden incrementarlo cuando publiquen una nueva versi�n!
!set name_backto=!nosubst Volver a $otit
!set name_this1=de su nuevo m�dulo
!set name_this2=del m�dulo actualmente en desarrollo
!set name_levellist=K: guarderia; E: escuela primaria; H: escuela secundaria; U: universidad; <br>G: estudio doctoral; R: investigaci�n

!set name_accountchange=Cambiar las propiedades de su cuenta de desarrollo
!set name_empty=deje el campo <span class="wims_label">contrase�a</span> vac�o si quieren conservar el antiguo
!set name_change=Se cambi� la contrase�a de su cuenta.
!set name_translation_language=Otros idiomas
!set name_images=Im�genes comunes
!set name_help_images=si necesita im�genes en un ejercicio OEF.
!distribute lines Opciones de prueba\
   F�rmulas\
   Imagen baja, Imagen alta, Mathml\
   Posibilidad de zoom\
   Espaciado de letras\
   normal, espaciado\
   Tama�o de las f�rmulas matem�ticas\
into name_optiontest,name_formule,name_useropts1, name_useropts2,name_fonte,name_useropts3,\
  name_useropts4

!if $job iswordof modname restore
  !set name_moddevcnt=!nosubst Tienen $totalcnt m�dulos en desarrollo.
  !set name_limited=!nosubst lista limitada a $maxlist m�dulos

  !distribute lines No mostrar m�s que los m�dulos cuya direcci�n contiene\
    Presione el t�tulo o la direcci�n de un m�dulo para trabajar\
    No tienen ning�n m�dulo en desarrollo. Pulse aqu� para \
    Restaurar un fichero de copia de seguridad\
  into name_browselist,name_clicktitle,name_nomodule,name_restore
!endif

!distribute lines Copiar, Cambiar nombre, Duplicar, Cambiar nombre\
  into name_choice
!set name_move=$(name_choice[2])
!set name_copy=$(name_choice[1])/$(name_choice[3])

!if $job iswordof move copy
  !distribute lines Hacer una copia\
   Cambiar el nombre del m�dulo va a romper las hojas de trabajo que lo utilizan. Garantizan que no es el caso\
 into name_copy,name_warning1

!set name_public_module=!nosubst el m�dulo p�blico <span class="wims_mod_title">$otit</span>\
(<span class="tt wims_fname">$original2</span>) en su espacio de desarrollo bajo la direcci�n
!set name_warning2=Cambiar el nombre o duplicar un m�dulo de direcci�n p�blica\
 puede conducir a la duplicaci�n de su publicaci�n. �Sea muy prudente!\
  <p>Si quieren hacer pruebas sobre el m�dulo, elige la zona <span class="wims_fname">pruebas</span>.
!set name_warning3=Si ya publicaron este m�dulo, quiere cambiar esta direcci�n exactamente seg�n \
  su direcci�n p�blica. Si no arriesgan una duplicaci�n de su publicaci�n.</p>
!endif

!if $job=auth
  !set name_intro=Esta herramienta es para desarrollar en l�nea m�dulos para WIMS. \
    Es una herramienta sofisticada y solamente desarrolladores registrados podr�n \
    acceder a ella. Por favor, introduzca los datos de su identificaci�n

  !distribute lines escriba al encargado de este servidor\
    si ha olvidado su contrase�a.\
    Si usted tiene inter�s en desarrollar m�dulos WIMS,\
    para conseguir una identificaci�n de desarrollador (usuario, contrase�a).\
    Recuerde que usted tambi�n puede usar\
    para escribir ejercicios interactivos de una manera f�cil, sin necesidad de identificaci�n.\
  into name_manager,name_forget,name_developer,name_identification,name_createxo1,\
    name_createxo2
!endif

!if $job=backup
  !set name_save=Ah� tienes el fichero de copia de seguridad del m�dulo
  !set name_internal_error= Error interno: imposible de generar el fichero de protecci�n. Quiere contactar el
!endif

!if $job=publish
  !distribute lines Nombre de su cuenta de publicaci�n \
    Tipo de publicaci�n\
    versi�n desarrollo, versi�n estable - modificar un m�dulo existente, versi�n estable - a�adir un nuevo m�dulo\
    Es una traducci�n �de un m�dulo que existe <br> creado por otro autor?\
    Modificantes autorizados\
    �Lea esto en primer lugar!\
    El m�dulo publicado aparecer� en el motor de b�squeda del sitio de aqu� a algunos minutos.\
    Si es un error, quiere pedir al gestor del lugar retirar manualmente el m�dulo que publicaron.\
    Van a recibir un correo electr�nico que confirma la recepci�n del env�o.\
    De acuerdo, andelante\
    Los siguientes dominios no existen\
 into name_publishaccount,name_publishtype,name_prompt,name_translation,name_authorized,name_readhelp,\
    name_local,name_error,name_emailsend,name_goahead,name_warning_nodomain

  !set name_warning0=!nosubst Este m�dulo tiene una direcci�n p�blica. Deben publicarlo pues en el centro de publicaci�n $publishname
  !set name_warning01=Quiere entrar su identificaci�n de publicaci�n.
  !set name_warning1=�Incrementaron la versi�n del m�dulo, si publican una nueva versi�n de un \
    m�dulo existente? Si no, nadie pondr� al d�a su nueva versi�n.
  !set name_warning2=Su m�dulo tiene una direcci�n local. No pueden publicarle sino sobre el espacio local \
    de este servidor. �Quieren seguir?
  !set name_warning3=La principal ventaja de una publicaci�n en el espacio local es evidenciar \
    el m�dulo en el motor de b�squeda del servidor local.
  !set name_cheat1=!nosubst Este m�dulo declara que se satisface con WIMS-$Wver2,\
    mientras que se desarroll� probablemente o modificado bajo este servidor que es \
    de versi�n $wims_version. Deben poner al d�a el fichero �NDICE del m�dulo \
    modificando la versi�n de wims en <span class="tt"> Propiedades< /tt>.

  !set name_cheat2= �Si est�n seguros de lo que hicieron, pueden enga�ar \
    para hacer creer a los servidores que est�n en un servidor antiguo (OPERACI�N MUY ARRIESGADA)!
  !set name_warning_domain=!nosubst Deber�a verificar las propiedades del m�dulo y \
    usar dominios y palabras clave que est�n en las ayudas del \
    campo <span class="wims_label">$wims_name_Domain</span> y \
    <span class="wims_label">$wims_name_Keywords</span>. \
    Si ninguno de ellos es conveniente, puede ayudarnos \
    enviando sus propuestas a
  !set name_warning_domain2=!nosubst Haga clic en el campo ayuda\
    <span class="wims_label">$wims_name_Domain</span> o\
    <span class="wims_label">$wims_name_Keywords</span> para encontrar la lista
  !set name_warning_keywords=!nosubst Para mejorar la referencia de los m�dulos p�blicos,\
    compruebe los dominios y las palabras clave (consulte el campo ayuda \
    <span class="wims_label">$wims_name_Domain</span> y \
    <span class="wims_label">$wims_name_Keywords</span>, les mots-cl�s doivent �tre s�par�s\
    por comas, pero los grupos de palabras se admiten,\
    introduzca la versi�n "ingl�s t�cnico", lo que permitir� una difusi�n\
    en todos los idiomas manejados por el servidor).
  !set name_warning_keywords_unknown=Las siguientes palabras clave no est�n en la lista oficial \
    de palabras clave de WIMS.
  !set name_warning_keywords2=Solo se propondr�n palabras clave oficiales mediante el autocompletado \
    en el motor de b�squeda. �Has verificado que todas las palabras clave \
    que est�s proponiendo no tienen una equivalente en la lista "oficial"? Recuerda que\
    todas las palabras en el t�tulo o la descripci�n tambi�n son tenidas en cuenta \
    por el motor de b�squeda.
  !set name_warning_suggestion=Complete el archivo de NOTICIAS r�pidamente indicando \
     la versi�n, la fecha y los cambios realizados a
  !set name_changenews=Complete el archivo de NEWS indicando la versi�n r�pidamente, \
     la fecha y los cambios realizados.
  !set name_publish_placeholder=Indique aqu� \
     la originalidad de su m�dulo en comparaci�n con los m�dulos existentes \
     y m�dulos relacionados con el que est� enviando.
!endif

!if $job=diff
  !distribute lines Ninguna diferencia se encuentra entre la versi�n de desarrollo y la versi�n p�blica del servidor.\
    Demasiadas diferencias existen entre la versi�n de desarrollo y la versi�n p�blica del servidor.\
    Diferencias entre la versi�n de desarrollo y la versi�n p�blica del servidor&nbsp;:\
  into name_diff1,name_diff2,name_diff3
!endif

!if $job=restore
  !set name_warning1=Su fichero no tiene el aire de un fichero de protecci�n de un m�dulo&nbsp;!<p> \
    No pueden restaurar un fichero sino si fue telecargado antes a partir de Modtool. Vuelva a intentar.</p>

  !distribute lines No pude reconocer su fichero como una protecci�n de m�dulo. Error en el fichero&nbsp;!\
    Ninguna diferencia se encuentra entre el m�dulo existente (en su espacio de desarrollo) y lo salvaguarda.\
    Demasiada diferencia existe entre el m�dulo existente (en su espacio de desarrollo) y la salvaguarda.\
    Diferencias entre el m�dulo existente (en su espacio de desarrollo) y la salvaguarda&nbsp;\
    D� el fichero de protecci�n que debe restaurarse\
    hacer mostrar las diferencias entre los m�dulos en primer lugar.\
    Ir a trabajar sobre el m�dulo\
    M�dulo restaurado\
  into name_norecognize,name_diff1,name_diff2,name_diff3,name_restoref,name_show_diff,name_gotowork,\
    name_restored

  !set name_illegal= �Su copia de seguridad contiene ficheros de tipos ilegales! Restauraci�n imposible.\
    <p> �Es una copia de seguridad de una antigua versi�n? Ahora deben copiar los ficheros uno a uno</p>
  !set name_warning2=Solo se aceptan las copias de seguridad de Modtool.\
     Ninguna modificaci�n manual del fichero de archivos se autoriza.
  !set name_warning_diff=!nosubst Este m�dulo va a sustituir completamente al m�dulo existente con la misma direcci�n,  \
    sin posibilidad de vuelta.<br> Pero pueden

!endif
!distribute line Para restaurar un m�dulo WIMS obtenido previamente por una copia de seguridad y ubicado en su computadora\
  Para guardar el m�dulo WIMS en el que est� trabajando en su computadora \
into wims_name_title_restore,wims_name_title_modsave

!exit

:del
  !set name_delmodule_warning1=Un m�dulo borrado lo es definitivamente.

  !set name_delmodule_warning2=<b>Y no olvidar</b>:\
    Una clase virtual o una hoja de trabajo que hace referencia a su m�dulo\
    no funcionar�n ya si se borra este m�dulo.

  !set name_delmodule_confirm=Est� seguro de querer borrar el m�dulo

!exit

:delconfirm
El fichero
 <span class="tt wims_fname">$fname</span>
 del m�dulo
 <span class="wims_mod_title">$title</span> esta borrado.
!exit

:delfile
Est� seguro de querer borrar el m�dulo
<span class="tt wims_fname">$fname</span>
del m�dulo
<span class="wims_mod_title">$title</span>
as� como cualquier archivo depositado?
!exit

:changeconfirm
El archivo
<span class="tt wims_fname">$fname</span>
del m�dulo
<span class="wims_mod_title">$title</span>
ha sido renombrado como
<span class="tt wims_fname">$fnewname</span>.
