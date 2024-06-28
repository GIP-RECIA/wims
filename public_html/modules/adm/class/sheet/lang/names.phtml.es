!let lang_exists=yes

!read adm/lang/date.phtml.$moduclass_lang
!read adm/lang/sheetexam.phtml.$moduclass_lang

!set statutname=$(wims_name_shstatus[1]),$wims_name_shstatus
!set seriesaction=!nosubst $wims_name_change,$wims_name_erase,$wims_name_up,Colocar en
!set name_duplicateok=Hoja de ejercicios duplicada correctamente.
!set name_createok=Hoja de trabajo creada. Vaya a "Contenido de la hoja" para agregar un trabajo.

!set name_name=!nosubst $wims_name_name
!set name_ltvalue=Valor(es)

!let name_shtab=!nosubst $wims_name_number,$wims_name_title,$wims_name_Description,\
  Puntos,$name_weight,$name_dependency,$wims_name_comment,$wims_name_action,\
  Configuraci�n de la serie,$wims_name_feedbackexo,Mover
!set name_qnum=Num. ej. en serie

!if $activetest<=0
 !let wims_name_sheetadmin=P�gina de preparaci�n
 !set name_title=!nosubst  Preparaci�n de la hoja de trabajo $sheet
 !set name_exo_order=Orden de los ejercicios de la serie
 !set name_default=Default
!else
 !let wims_name_sheetadmin=P�gina de gesti�n
 !set name_title=!nosubst Gesti�n de la hoja $sheet
!endif
!let name_mksheet=Crear la hoja

!distribute lines Informaci�n general\
Contenido de la hoja\
Esta hoja a�n no tiene contenido.\
El titulo original es\
Cambiar la serie de ejercicios\
N�mero de puntos solicitados\
Coregir la fuente\
La fecha de vencimiento de la hoja debe ser anterior a la fecha de vencimiento de la clase\
Por lo tanto, se ignora su solicitud.\
N�mero m�ximo de intentos contados\
into name_info,name_content,name_warning,name_oldtitle,name_prep_modify,\
name_pointsasked,name_correctsource,name_expiration1,name_expiration2,\
name_exotrymax

!set name_add_work=A�adir un trabajo
!set name_text1=Para a�adir un trabajo (ejercicio, herramienta, etc.) a la hoja, debe en primer lugar elegirlo\
(v�ase abajo); regule los distintos par�metros propuestos y lance el ejercicio.\
A continuaci�n, utilice el enlace sobre el borde del ejercicio para a�adirlo a la hoja.
!set name_options_to_add=Para elegir su trabajo, tiene una de las posibilidades siguientes
!set name_other_options=... o una de estas otras posibilidades

!set name_text2=Usar el motor de b�squeda
!set name_text3=Buscar un ejercicio entre los
!set name_text4=Buscar un ejercicio de su cuenta
!set name_texttaxo=Buscar un ejercicio por taxonom�a
!set name_textsubject=Buscar un ejercicio por tema (palabras claves).

!set name_getsource=Este es el c�digo fuente de esta hoja.\
Ahora lo puede copiar, lo que le permitir� reutilizar el contenido\
en otra hoja.

!set name_individualisation=Personalizaci�n
!set name_noone=Ninguna
!set name_contentindiv=Establecer el contenido seg�n el valor de una variable t�cnica
!set name_activindividualisation=Individualizaci�n de la hoja realizada con la variable t�cnica
!set name_desc_indivtechvar=Variable t�cnica para individualizaci�n de la hoja
!set name_indiv_desc=La serie de ejercicios solo estar� disponible para los participantes cuyo valor de variable t�cnica est� marcado.
!set name_show_req_we=Tambi�n cambie el peso y los puntos necesarios para cada ejercicio.

!set name_prpageedition=Edition de pr�sentation de la feuille
!set name_prpagedesc=La personnalisation de la page de pr�sentation d'une feuille utilise le m�me langage que celui des documents. 

!! be careful define variable below only if module help/teacher/program work in your lang. Keep , at the same place.
!set name_helpprog=Ayudarse de esta correspondencia orientativa, entre los programas de la ense�anza francesa y los ejercicios WIMS
