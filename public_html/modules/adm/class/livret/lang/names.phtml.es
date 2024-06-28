!let lang_exists=yes

!read adm/lang/date.phtml.$lang

!distribute items Competencia,\
competencia,\
Competencias,\
competencias,\
Nivel,\
Niveles,\
nivel,\
niveles,\
Todas,\
informe de evaluación de competencias,\
into name_Competence,name_competence,name_Competences,name_competences,name_n_Palier,name_n_Paliers,name_n_palier,name_n_paliers,name_All,name_livret

!set name_no_competence=No hay ninguna  $name_competence en este informe!
!set name_noyetparticipant=Esta clase no tiene participantes todavía.
!set name_info=Información sobre esta $name_competence&nbsp;
!set name_param_change=Ahí tienes los parámetros que puedes cambiar&nbsp;
!set name_color=Color de los fondos de las casillas en función del nivel de validación del  $name_n_palier &nbsp;
!set name_score_modify=Los resultados de los ejercicios de las hojas de trabajo siguientes se neutralizan para el cálculo de los niveles de adquisición de las $name_n_paliers &nbsp;
!set name_cocher=Por  favor seleccione  los ejercicios que desea utilizar para este $name_n_palier.
!set name_selectsheet=Indicar solamente los ejercicios de la hoja
!let name_nowork=No hay trabajo
!let name_listscoreoption=de la clase, del informe
!let name_listscoreview=no mostrar, entero, con un decimal, con dos decimales, con tres decimales, con cuatro decimales

!distribute item Actividad,Color,Leyenda\
into name_activity, name_colorchoice,name_legend

!distribute items Título de la $name_competence&nbsp;,\
Título del $name_n_palier&nbsp;,\
Número de $name_n_paliers&nbsp;,\
de la clase,\
Nota mínima para considerar alcanzada la competencia,\
Paleta de color utilizada en el $name_n_paliers nivel,\
Muestra el resultado de $name_n_paliers nivel,\
Mostrar al alumno el informe de competencias,\
Mostrar al alumno el informe vacío de las  $name_competences,\
into name_title_comp,name_title_palier,name_cnt_palier,name_configtext2,name_configtext3,name_configtext4,name_configtext5,name_configtext6,name_configtext7

!!------------------------------- definición de los nombres de vínculos para wims_menu_items
!if $wims_user=supervisor
 !let tmp=!defof wims_name_SE_list in wimshome/public_html/modules/home/names.$lang
!else
  !let tmp=$wims_name_myscore
!endif

!distribute line Nueva competencia \
$tmp\
 into wims_name_add_competence,wims_name_go_userlist

!!FIXME wims_name_cls_livret=$wims_name_livret ??
!if $job=addcomp
 !set name_job=!nosubst Añadir/modificar la $name_competence $comp
 !exit
!endif

!if $job=modpalier
  !set name_job=!nosubst Modificar el $name_n_palier $palier (<span class="wims_emph">$name_palier</span>)\
  de la $name_competence $comp (<span class="wims_emph">$name_comp</span>).
  !exit
!endif

!if $job=user
  !set name_job=!nosubst <span class="wims_emph">$user_firstname $user_lastname</span>
!endif

!if $job=delpalier
 !let name_delpalier=!nosubst ¿Está seguro de querer suprimir el $name_n_palier $palier \
 <span class="wims_emph">$mem_palier</span> de la $name_competence $comp \
   <span class="wims_emph">$mem_title</span> del $name_livret ?
 !exit
!endif

!if $job=delcomp
 !let name_delcomp=!nosubst ¿Está seguro de querer suprimir el  $name_competence $comp <span class="wims_emph">$mem_title</span> del $name_livret ?
 !exit
!endif

!if $job=save
 name_get=Puede descargar el archivo de origen para obtener la estructura de su informe de competencias \
   Por ejemplo para restaurarla en otra clase.
 name_put=Escriba la dirección de un archivo de un informe de competencias en su computadora. \
  Las competencias del archivo se añadirán a las que ya están en su informe de competencias.
!endif
