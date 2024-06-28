!set lang_exists=yes

!distribute items dagen,weken,maanden,jaren,Aanvragen,Sessies,Via websites,\
  aantal,totaal,gemiddeld<br>per jaar,gemiddeld<br>per week,gemiddeld<br>per maand,gemiddeld<br>per jaar,\
  gemiddeld<br>per website,Wekelijks<br>gemiddelde,Een grafiek van,Dagelijks,het begin\
into name_day,name_week,name_month,name_year,name_Requests,name_Sessions,name_Visitors,\
   name_cnt,name_total,name_avgday,name_avgweek,name_avgmonth,name_avgyear,\
   name_avgsite,name_avghebdo,name_plot,name_byday

!set name_requests=!lowercase $name_Requests
!set name_sessions=!lowercase $name_Sessions
!set name_visitors=!lowercase $name_Visitors

!distribute lines Geef het overzicht van de periode :\
Laat ook de individuele modules zien\
Geef het overzicht\
Individuele modules\
Aantal bezoeken\
van\
naar\
Installatie datum\
Subtotaal\
into name_choose,name_details,name_showstat,wims_name_statdetail,name_number_visits,name_from,\
  name_to,name_installed,name_subtotal
!!!set title=Gebruiks statistieken
!set name_sum=!nosubst het totaal van $laps dagen

!set name_prompt=totaal<br>aanvragen,aanvragen<br>per website,totaal<br>websites
!set name_explanations=<ul>\
<li>Bij de berekening van de totale aanvragen wordt geen rekening gehouden met \
ontwikkelings modules.\
</li><li>Het aantal "bezoeken via website" wordt dageljks bijgehouden.\
</li><li>Een indicatie van het dagelijks aantal bezoekers is een getal tussen \
het aantal websites en het aantal opgestarte sessies. \
</li></ul>

!set name_warning=De gebruiks statistieken op deze server worden helaas niet bijgehouden.

!set name_numberclass=!nosubst Er zijn $classcnt klassen en/of scholen op deze server in gebruik,\
met in totaal $usercnt gebruikers.

!set name_clssrep=La répartition des classes en fonction des niveaux est la suivante (seules les classes et portails de plus de cinq élèves sont placés dans le tableau. Les classes d'exemples ne sont pas comptées.) :
!set name_level=Niveaux

!set format1=%m%d
!set format2=%m%d
!set format3=%m%y

!set name_nogeoloc=Aucune géolocalisation des classes n'est active sur ce serveur.
!set name_geolocdesc=Chaque classe est représentée par un marqueur. Les classes non géo-localisées du serveur sont représentées au point de résidence du serveur.
!set wims_name_map=Map
