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
  Configuración de la serie,$wims_name_feedbackexo,Mover
!set name_qnum=Num. ej. en serie

!if $activetest<=0
 !let wims_name_sheetadmin=Página de preparación
 !set name_title=!nosubst  Preparación de la hoja de trabajo $sheet
 !set name_exo_order=Orden de los ejercicios de la serie
 !set name_default=Default
!else
 !let wims_name_sheetadmin=Página de gestión
 !set name_title=!nosubst Gestión de la hoja $sheet
!endif
!let name_mksheet=Crear la hoja

!distribute lines Información general\
Contenido de la hoja\
Esta hoja aún no tiene contenido.\
El titulo original es\
Cambiar la serie de ejercicios\
Número de puntos solicitados\
Coregir la fuente\
La fecha de vencimiento de la hoja debe ser anterior a la fecha de vencimiento de la clase\
Por lo tanto, se ignora su solicitud.\
Número máximo de intentos contados\
into name_info,name_content,name_warning,name_oldtitle,name_prep_modify,\
name_pointsasked,name_correctsource,name_expiration1,name_expiration2,\
name_exotrymax

!set name_add_work=Añadir un trabajo
!set name_text1=Para añadir un trabajo (ejercicio, herramienta, etc.) a la hoja, debe en primer lugar elegirlo\
(véase abajo); regule los distintos parámetros propuestos y lance el ejercicio.\
A continuación, utilice el enlace sobre el borde del ejercicio para añadirlo a la hoja.
!set name_options_to_add=Para elegir su trabajo, tiene una de las posibilidades siguientes
!set name_other_options=... o una de estas otras posibilidades

!set name_text2=Usar el motor de búsqueda
!set name_text3=Buscar un ejercicio entre los
!set name_text4=Buscar un ejercicio de su cuenta
!set name_texttaxo=Buscar un ejercicio por taxonomía
!set name_textsubject=Buscar un ejercicio por tema (palabras claves).

!set name_getsource=Este es el código fuente de esta hoja.\
Ahora lo puede copiar, lo que le permitirá reutilizar el contenido\
en otra hoja.

!set name_individualisation=Personalización
!set name_noone=Ninguna
!set name_contentindiv=Establecer el contenido según el valor de una variable técnica
!set name_activindividualisation=Individualización de la hoja realizada con la variable técnica
!set name_desc_indivtechvar=Variable técnica para individualización de la hoja
!set name_indiv_desc=La serie de ejercicios solo estará disponible para los participantes cuyo valor de variable técnica esté marcado.
!set name_show_req_we=También cambie el peso y los puntos necesarios para cada ejercicio.

!set name_prpageedition=Edition de présentation de la feuille
!set name_prpagedesc=La personnalisation de la page de présentation d'une feuille utilise le même langage que celui des documents. 

!! be careful define variable below only if module help/teacher/program work in your lang. Keep , at the same place.
!set name_helpprog=Ayudarse de esta correspondencia orientativa, entre los programas de la enseñanza francesa y los ejercicios WIMS
