!set wims_module_log=error: $error
<b>$wims_name_Error: </b>
!if $error iswordof not_supervisor bad_jday bad_date day_exists same_devoir\
  same_devoir2 toomany_todo day_dontexist
  !goto $error
!else
  !msg $error
  !exit
!endif

:bad_jday
de vermelde datum voor het werkboek is niet geldig.
!exit

:bad_date
de verzochte datum bestaat niet in de agenda.
!exit

:day_exists
deze datum is reeds vermeld in de agenda.
!exit

:same_devoir
U kunt niet twee keer dezelfde datum gebruiken voor het werkboek.
!exit

:same_devoir2
U kunt niet twee keer dezelfde datum gebruiken voor het werkboek.
Gebruik deze link:
 !href cmd=new&job=adddate&filename=$jyear$jmonth$jday verander een datum
 .
!exit

:toomany_todo
het maximum aantal werkboek opdrachten is overschreden.
!exit

:day_dontexist
de ingevoerde datum is ongeldig.
!exit
