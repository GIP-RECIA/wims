!set lang_exists=yes
!!!set name_title=Individuele activiteiten
!set name_noparticipant=Deze klas heeft geen deelnemers/leerlingen
!set name_lastconnexion=Laatste inlogsessie via ip-adres
!set name_total=tijdsduur
!set name_click=Klik op een naam voor details
!set name_nbsessions=Aantal sessies
!set name_exo=oefening
!set name_time=Tijd
!set name_cnt_exo=Nb. exos

!set name_showsheet=Selecteer de werkbladen voor het activiteiten overzicht

!set name_ylabel=# ex.

!set name_expert0=Voor het selecteren van deelnemers zijn\
 meerdere methodes beschikbaar. Kies de gewenste methode.

!distribute items Expert menu,Lijst met loginnamen&nbsp;,Per selectie&nbsp;,\
Per student,dagen,Grafische weergave, Alle deelnemers\
into name_menu,name_loginlist,name_select,name_shiftpart,name_days,\
 name_graphics, name_allpart

!distribute lines U kunt door de deelnemers bladeren  (standaardmethode ingeval grafische weergave).\
Het maximaal aantal gelijktijdig te selecteren deelnemers is beperkt tot $limitpart.\
In dit geval of bij grafische weergave kunnen maximaal $limitpart deelnemers gelijktijdig worden getoond.\
Uitsluitend wanneer geen grafische weergave is vereist.\
in het geval er een grafische weergave is vereist.\
into name_help1,name_help2,name_help3,name_help0,name_help00

!set name_min=min
!set name_listdays=Lundi,Mardi,Mercredi,Jeudi,Vendredi,Samedi,Dimanche
!set name_workingtime=Evaluation du temps de connexion
!set name_lgword=jusqu'à,entre,et,plus de,Pas d'activité
!set name_studentname=!nosubst $lastname $firstname
!set name_choose=Choisir le participant
!set name_activityof=Activité de
!set name_notsingleclass=!nosubst Cette classe fait partie d'une structure. Le temps d'activité présenté avant la date du $slib_out\
  est celui de l'activité dans l'ensemble de la structure. Après cette date, il s'agit de l'activité dans la classe.

!if $job=cfwtime
  !set name_titlecfwtime=Configuration de l'affichage du temps de connexion
  !set name_config=Autoriser l'affichage du temps de connexion,\
Nombre de subdivisions,\
Durée d'une subdivision,\
Coloration
  !set name_desc_config=,\
Nombre de couleurs différentes utilisées dans le tableau,\
Longueur d'une subdivision en minutes,\
Vous pouvez choisir la couleur de chaque subdivision

!endif
