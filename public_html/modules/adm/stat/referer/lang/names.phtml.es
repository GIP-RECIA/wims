!set lang_exists=yes

!if $wims_read_parm!=
  !goto $wims_read_parm
!endif
!set name_site=el sitio
!set name_stem=una p�gina en la direcci�n
!set name_uniq=la p�gina
!set names_site=sitios
!set names_stem=directorio de sitios
!set names_uniq=p�ginas

!distribute items d�a(s),semana(s),mes(es),a�o(s),el inicio,a\
  into name_day,name_week,name_month,name_year,name_begining,name_to

!distribute lines nombre del sitio\
  directorio base\
  direcci�n completa\
  Los enlaces se pueden listar por\
  de la p�gina web., y la lista limitarse a las\
  direcciones primeras., Las direcciones de los motores de b�squeda pueden ser\
  incluidas\
  excluidas de la lista\
  Opcionalmente puede restringir la lista a los sitios/p�ginas que contengan, el t�rmino\
into name_site1,name_stem,name_uniq,name_listlink,name_limited,name_searchengine,\
 name_included,name_excluded,name_option

!set name_list1=!nosubst Lista de web $(names_$type) que dirigen a visitantes hacia nosotros, \
  en el periodo de

!set name_sum=!nosubst en total $laps d�as

!set name_list2=>La primera columna muestra el n�mero de visitantes que siguieron\
un enlace en $(name_$type) de la segunda columna.

!set name_visit1=personas que nos han visitado a trav�s de enlaces de
!set name_visit2=!nosubst Al menos $auto otras visitas no especificaron referencias a p�ginas\
 p�blicas. Las p�ginas que tienen como referencia $httpd_HTTP_HOST no se han contado.


!set name_warning=El registro de enlaces inversos (referers) de las cabeceras http no est� \
activado en este sitio. No est� disponible la lista de enlaces inversos. Lo sentimos.

!set name_choose=Periodo del listado:, a partir de

!exit
:intro
<p>
En general una p�gina web que nos env�e muchos invitados ser� un lugar
interesante para el resto de nuestros visitantes. Es l�gico, si busca recursos
web relacionados con este servidor, lo que necesita es una lista de tales
p�ginas.
</p><p>
Por otro lado, si es usted el autor de una p�gina con enlace(s) a nosotros,
esta lista le permitir� medir la eficacia de su v�nculo. Es tambi�n nuestra
manera de agradecerle el enlace.
</p><p>
Nuestra lista de enlaces inversos se genera din�micamente, seg�n los par�metros que
puede elegir en el siguiente men�.
</p>
