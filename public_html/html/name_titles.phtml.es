!set wims_name_title_whelp=Guía de uso de las primeras versiones de WIMS

!! variable for title in link (by default it is the name of the link)
!! do not leave a space at the beginning of the line
!! Home page of wims
!distribute line Para acceder a las clases organizadas por los profesores\
Para crear o administrar una clase\
Clases de acceso abierto para trabajar de forma autónoma\
Preguntas más frecuentes\
Documentación sobre el lenguaje WIMS\
Diferentes clasificaciones de recursos pedagógicos\
Lista de recursos pedagógicos creados o modificados recientemente\
Para descargar las fuentes del servidor WIMS\
Lista de los otros servidores públicos WIMS\
Condiciones generales de uso del servidor WIMS\
Para ajustar algunos parámetros de configuración\
Página de inicio del servidor\
Para acceder a otra clase\
Para obtener información sobre la versión de WIMS instalada, el administrador del sitio ...\
Para obtener información sobre el módulo $$module, su autor, la versión ... \
  into wims_name_title_n_participant,wims_name_title_n_supervisor,wims_name_title_n_example,\
  wims_name_title_faq,wims_name_title_doctec,\
  wims_name_title_browse,wims_name_title_mod_new,\
  wims_name_title_download,wims_name_title_mirror,wims_name_title_cgu,\
  wims_name_title_pref,wims_name_title_home,wims_name_title_U_oclass,\
  wims_name_title_aboutw,wims_name_title_about

!!! tools
!distribute line Herramientas para crear ejercicios\
Espacio para la creación de módulos de ejercicios, de documentos, ... \
Herramienta que facilita la creación de algunos tipos de ejercicios sin programación\
Herramienta para transformar un documento latex en un documento WIMS\
Herramienta para hacer ejercicios que pidan subtitular imágenes\
Herramienta para la preparación de ejercicios de química\
Herramienta para probar el software de cálculo o de diseño utilizado en los ejercicios\
  into wims_name_title_createxo,wims_name_title_modtool,wims_name_title_quicktool,\
  wims_name_title_latex2wims,wims_name_title_coordclick, wims_name_title_chemtool,\
  wims_name_title_scripttest

!!! links in a class
!distribute line para ver los datos guardados por el servidor sobre su trabajo en la clase\
Para ver el detalle de las notas obtenidas en cada ejercicio y el baremo\
Para trabajar en la hoja de ejercicios sin que los resultados se tengan en cuenta en el cálculo de las notas\
Para que el trabajo hecho en la hoja de ejercicios se tenga en cuenta en el cálculo de las notas\
Para poder revisar el enunciado y las respuestas dadas\
Herramientas que se pueden utilizar para hacer el ejercicio\
Ayuda sobre el ejercicio propuesto por su profesor\
Suplemento sobre el ejercicio propuesto por su profesor\
  into wims_name_title_rawdata, wims_name_title_myscore, wims_name_title_scoreclose2, wims_name_title_scorereopen,\
  wims_name_title_exolog, wims_name_title_tools, wims_name_title_feedbackexo,\
  wims_name_title_feedbackplus

!!documents
!distribute lines Para ver una versión del documento en una sola página web\
Para volver a la versión interactiva del documento\
Para volver a cargar la página web\
into wims_name_title_doch_printable, wims_name_title_doch_interactive, wims_name_title_doch_reload

!!! links for a teacher in a class
!distribute lines Para cambiar el contenido o las propiedades de la hoja de ejercicios\
Para importar el código del ejercicio a Createxo para poderlo modificar\
Para añadir el ejercicio a una hoja de ejercicios en preparación de la clase\
Para añadir el documento a la lista de documentos de la clase\
Para configurar la presentación de las hojas, documentos ... en la página principal de un alumno\
Vista de la clase similar a la de un alumno\
Ejercicios creados o importados a la clase\
Para mostrar como ayuda para el ejercicio de una hoja cuando no haya tenido éxito\
  into wims_name_title_sheetmanagement, wims_name_title_import,\
  wims_name_title_add, wims_name_title_adddoc, wims_name_title_reorder,\
  wims_name_title_participantview, wims_name_title_classexo,\
  wims_name_title_addh
!if adm/sheet isin $module
  !set wims_name_title_import=Para hacer una hoja de trabajo nueva en la clase
!endif

!!
!distribute lines para crear varias clases por cada archivo de hoja de cálculo\
into wims_name_title_addcsvclass

!!set wims_name_title_moduback=Para ir a la página de introducción del módulo que contiene este ejercicio

!! links for modtool
!distribute lines archivos del módulo no modificables en línea (imágenes, ...)\
archivos del módulo modificables en línea\
into wims_name_title_binfile,wims_name_title_otherfiles

!set wims_name_title_recover=para volver a registrar a un participante eliminado
