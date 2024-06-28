!set lang_exists=yes

!set name_A=todos
!set name_X=ejercicios
!set name_T=herramientas
!set name_R=matem�ticas recreativas
!set name_L=referencias
!set name_S=hojas de ejercicios
!set name_P=herramientas r�pidas

!set name_M=m�dulo(s)

!set wims_name_credits=Cr�ditos

!if $job=subject
  !set title=B�squeda por tema
  !set name_domain=Por favor, seleccione una de las siguientes �reas.
  !set job_desc=Cada m�dulo educativo tiene asociadas unas palabras clave. \
   Encontrar� debajo todas estas palabras clave, organizadas en �rbol. \
<br class="spacer">\
Sin embargo, las cifras no tienen en cuenta las subramas. \
Cada punto indica el n�mero de m�dulos a los que se asigna la palabra clave correspondiente.

  !set name_available=!nosubst En el �rea <span class="wims_emph">$name</span>, los siguientes temas\
 est�n disponibles.
 !set wims_name_other=Otras �reas
!endif

!if $job=taxo
  !set title=B�squeda por taxonom�a
  !set job_desc=Una parte de los m�dulos de WIMS se han clasificado en algunas taxonom�as \
   cl�sicas, las pueden encontrar a continuaci�n.\
  <br class="spacer">\
  Aqu�, los n�meros que aparecen representan el n�mero de\
   m�dulos contenidos en las subramas.
!endif

!if $job=level
 !set title=B�squeda por nivel
 !distribute lines A�o\
   Categor�a \
   Escuela primaria \
   Secundaria y Bachillerato\
   Universidad\
   3er ciclo\
   Investigaci�n \
   Niveles�\
 into name_year,name_category,name_primary,name_secondary,name_university,name_graduate,\
 name_research,name_levels

!endif

!distribute lines Usted puede explorar el contenido de este sitio web siguiendo varios m�todos.\
  Por tema\
  Por nivel educativo\
  escuela primaria, secundaria y bachillerato, universidad, etc.\
  Por fecha\
  las �ltimas incorporaciones al servidor.\
  Y puede tambi�n utilizar las selecciones hechas para usted.\
  Por tipo de recursos\
  herramientas gr�ficas y de c�lculo, ejercicios, referencias, etc.\
  Una breve introducci�n\
  a alguna de las mejores actividades del servidor.\
  Correspondencia indicativa\
  con los programas de la educaci�n francesa\
  Reducir/Ampliar\
  Por taxonom�a\
  aplicaciones populares\
into name_h_browse,name_by_subject,name_by_level,name_by_level2,name_by_date,name_news,\
  name_selected,name_by_type,name_by_type2,name_introduction,name_thebest,name_french1,\
  name_french2,name_fold,name_by_taxo,name_best
