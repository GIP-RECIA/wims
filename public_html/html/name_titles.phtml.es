!set wims_name_title_whelp=Gu�a de uso de las primeras versiones de WIMS

!! variable for title in link (by default it is the name of the link)
!! do not leave a space at the beginning of the line
!! Home page of wims
!distribute line Para acceder a las clases organizadas por los profesores\
Para crear o administrar una clase\
Clases de acceso abierto para trabajar de forma aut�noma\
Preguntas m�s frecuentes\
Documentaci�n sobre el lenguaje WIMS\
Diferentes clasificaciones de recursos pedag�gicos\
Lista de recursos pedag�gicos creados o modificados recientemente\
Para descargar las fuentes del servidor WIMS\
Lista de los otros servidores p�blicos WIMS\
Condiciones generales de uso del servidor WIMS\
Para ajustar algunos par�metros de configuraci�n\
P�gina de inicio del servidor\
Para acceder a otra clase\
Para obtener informaci�n sobre la versi�n de WIMS instalada, el administrador del sitio ...\
Para obtener informaci�n sobre el m�dulo $$module, su autor, la versi�n ... \
  into wims_name_title_n_participant,wims_name_title_n_supervisor,wims_name_title_n_example,\
  wims_name_title_faq,wims_name_title_doctec,\
  wims_name_title_browse,wims_name_title_mod_new,\
  wims_name_title_download,wims_name_title_mirror,wims_name_title_cgu,\
  wims_name_title_pref,wims_name_title_home,wims_name_title_U_oclass,\
  wims_name_title_aboutw,wims_name_title_about

!!! tools
!distribute line Herramientas para crear ejercicios\
Espacio para la creaci�n de m�dulos de ejercicios, de documentos, ... \
Herramienta que facilita la creaci�n de algunos tipos de ejercicios sin programaci�n\
Herramienta para transformar un documento latex en un documento WIMS\
Herramienta para hacer ejercicios que pidan subtitular im�genes\
Herramienta para la preparaci�n de ejercicios de qu�mica\
Herramienta para probar el software de c�lculo o de dise�o utilizado en los ejercicios\
  into wims_name_title_createxo,wims_name_title_modtool,wims_name_title_quicktool,\
  wims_name_title_latex2wims,wims_name_title_coordclick, wims_name_title_chemtool,\
  wims_name_title_scripttest

!!! links in a class
!distribute line para ver los datos guardados por el servidor sobre su trabajo en la clase\
Para ver el detalle de las notas obtenidas en cada ejercicio y el baremo\
Para trabajar en la hoja de ejercicios sin que los resultados se tengan en cuenta en el c�lculo de las notas\
Para que el trabajo hecho en la hoja de ejercicios se tenga en cuenta en el c�lculo de las notas\
Para poder revisar el enunciado y las respuestas dadas\
Herramientas que se pueden utilizar para hacer el ejercicio\
Ayuda sobre el ejercicio propuesto por su profesor\
Suplemento sobre el ejercicio propuesto por su profesor\
  into wims_name_title_rawdata, wims_name_title_myscore, wims_name_title_scoreclose2, wims_name_title_scorereopen,\
  wims_name_title_exolog, wims_name_title_tools, wims_name_title_feedbackexo,\
  wims_name_title_feedbackplus

!!documents
!distribute lines Para ver una versi�n del documento en una sola p�gina web\
Para volver a la versi�n interactiva del documento\
Para volver a cargar la p�gina web\
into wims_name_title_doch_printable, wims_name_title_doch_interactive, wims_name_title_doch_reload

!!! links for a teacher in a class
!distribute lines Para cambiar el contenido o las propiedades de la hoja de ejercicios\
Para importar el c�digo del ejercicio a Createxo para poderlo modificar\
Para a�adir el ejercicio a una hoja de ejercicios en preparaci�n de la clase\
Para a�adir el documento a la lista de documentos de la clase\
Para configurar la presentaci�n de las hojas, documentos ... en la p�gina principal de un alumno\
Vista de la clase similar a la de un alumno\
Ejercicios creados o importados a la clase\
Para mostrar como ayuda para el ejercicio de una hoja cuando no haya tenido �xito\
  into wims_name_title_sheetmanagement, wims_name_title_import,\
  wims_name_title_add, wims_name_title_adddoc, wims_name_title_reorder,\
  wims_name_title_participantview, wims_name_title_classexo,\
  wims_name_title_addh
!if adm/sheet isin $module
  !set wims_name_title_import=Para hacer una hoja de trabajo nueva en la clase
!endif

!!
!distribute lines para crear varias clases por cada archivo de hoja de c�lculo\
into wims_name_title_addcsvclass

!!set wims_name_title_moduback=Para ir a la p�gina de introducci�n del m�dulo que contiene este ejercicio

!! links for modtool
!distribute lines archivos del m�dulo no modificables en l�nea (im�genes, ...)\
archivos del m�dulo modificables en l�nea\
into wims_name_title_binfile,wims_name_title_otherfiles

!set wims_name_title_recover=para volver a registrar a un participante eliminado
