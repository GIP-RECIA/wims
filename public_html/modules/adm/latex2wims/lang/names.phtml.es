!set lang_exists=yes

!if $wims_read_parm!=
  !goto $wims_read_parm
!endif

!distribute line Cargar un archivo\
  subir un archivo nuevo\
  Transfiera los archivos al servidor\
  la documentaci�n\
  la documentaci�n en PDF\
  Proporcione su ID de desarrollador de Modtool\
  archivo de latex\
  archivo de estilo CSS\
  archivo de estilo latex2wims\
  Te permitir�n crear un documento de ejemplo\
  Etapa\
  Archivos transferidos\
  Pasar a la siguiente etapa\
  Usted debe\
  transferir al menos un archivo de l�tex\
  Todavia puedes\
  Seleccione el archivo principal del documento latex\
  transferido el\
  Si ha incluido ejercicios, elija el n�mero de la hoja de trabajo correspondiente\
  Indique el nombre del documento de su cuenta\
  o crea una nueva en tu cuenta\
  Primero debe crear un documento en su cuenta\
  Debes seleccionar un documento real.\
  Iniciar ejecuci�n\
  Regrese a los pasos anteriores\
  tambi�n puede acceder a �l a trav�s del\
  Compruebe el resultado\
into name_transfer,name_newtransfer,name_transfer_wims,name_documentation,name_pdf,name_modtool,\
  name_latex,name_css, name_latex2wims,name_example,name_step,name_filet,name_newstep,\
  name_youmust,name_atleast,name_youcan,name_selectmain,name_transferdate,\
  name_sheet,name_namedocument,name_newmodule,name_createfirst,name_select_warning,\
  name_exec,name_comeback,name_gotomodtool,name_test

!set name_warning=!nosubst los archivos del documento <span class="tt wims_fname">$document</span>\
   ser�n borrados y reemplazados por otros nuevos.
!set name_select_example=Para empezar, puede recuperar los tres archivos\
(archivo de l�tex, l�tex y archivo de estilo css)

!set choix=Escoja
!set name_confirm=Confirmar
!exit


:1
le permite transformar un archivo de l�tex en un documento en su cuenta de Modtool.
Puede acceder a �l utilizando su nombre de usuario y contrase�a de desarrollador.
Para obtener un buen resultado, el archivo l�tex debe estar debidamente preparado.
y estar acompa�ado de un archivo de estilo CSS. Para esto, lea atentamente
!exit
:2
Para obtener una cuenta de Modtool,
!mailurl $wims_site_manager escriba al administrador del sitio\
WIMS new developer
para obtener una identificaci�n del desarrollador (login, contrase�a).
!exit
:3
le permite transformar un archivo de l�tex en un documento en su cuenta de Modtool.
Para obtener un buen resultado, el archivo l�tex debe estar debidamente preparado.
y estar acompa�ado de un archivo de estilo CSS. Para esto, lea atentamente
!exit
:4
los archivos del documento <span class="tt wims_fname">$document</span> seran borrados y remplazados por los nuevos.
!exit
