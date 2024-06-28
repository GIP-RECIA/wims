!set name_subtitle = Ficheros binarios para el ejercicio
!set name_over_quota = No puede a�adir m�s ficheros a su clase porque su contendido\
 ha igualado o superado el espacio de disco autorizado. Lo sentimos.
!set name_add_file = A�adir un nuevo fichero
!set name_add_file_label = Fichero para el ejercicio:
!set name_add_file_help = Puede cargar diferentes tipos de ficheros (imagen, audio, pdf, ...).

!set name_empty_imglist = Este ejercicio no tiene a�n ning�n fichero binario.
!set name_imglist = Lista de ficheros binarios del ejercicio
!set name_filename = Nombre del fichero
!set name_preview = Vista
!set name_html_code = C�digo HTML
!set name_oef_code = C�digo OEF
!set name_Actions = Acciones
!set name_oncondition=on some conditions (see below)

!set name_img_default_alt = vista del fichero $$i
!set name_img_accessibility_alt = Describa aqu� la imagen

!set name_some_browsers = algunos navegadores web
!set name_ogg_warning = no pueden leer ficheros .ogg.

!set name_access_via_imagedir = Para acceder a estos archivos en la declaraci�n del ejercicio,\
  simplemente copie el c�digo (HTML o OEF) que se muestra arriba delante del archivo deseado,\
  y p�guelo en el ejercicio donde desea que aparezca. <br>\
  El par�metro <span class = "tt wims_code_variable"> \ imagedir </span> corresponde\
  a la carpeta que contiene los archivos. <br>\
  El c�digo de la segunda columna debe usarse directamente en las partes\
  <span class="tt wims_code_variable">statement</span>,\
 <span class="tt wims_code_variable">feedback</span>, etc.


!set name_how_to_hide_help = <h2>Ocultar el nombre de la imagen</h2>\
    Si elige una imagen aleatoria, el nombre del archivo puede ser una ayuda para el estudiante. \
     Puede ocultar este nombre de archivo con este c�digo en las partes\
  <span class="tt wims_code_variable">statement</span>,\
  <span class="tt wims_code_variable">feedback</span>, etc:\
  <pre>\img{\imagedir/picture.jpg alt="$name_img_accessibility_alt"}</pre>\
  Si el estudiante echa un vistazo a la p�gina generada, s�lo ver� \
  <pre>&lt;img src="a_random_unrelated_file_name" alt="$name_img_accessibility_alt"></pre>\
  <p>La ventaja de este segundo m�todo es que los estudiantes no ver�n el nombre del fichero.</p>\
  <p>A causa de su coste en consumo de recursos, no utilice este m�todo m�s que cuando sea necesario.\
  The file will be renamed only if the exercise is saved in a module \
   and not in a class.</p>

!set name_save_exo_warning = Los ficheros binarios se guardan permanentemente solo cuando se guarda el ejercicio.
