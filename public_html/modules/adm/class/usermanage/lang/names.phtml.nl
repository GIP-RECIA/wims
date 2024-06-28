!set lang_exists=yes

!if $wims_read_parm!=
  !goto $wims_read_parm
!endif

!set name_studentloc=!nosubst $user_lastname $user_firstname
!set name_studentglo=!nosubst $wims_name_lastname $wims_name_firstname

!set name_click=Klik op de naam van een student om zijn/haar werk gedetailleerd te bestuderen
!set name_noyetparticipant=Deze klas heeft nog geen studenten.
!set name_transfer=Breng zijn/haar activiteiten over uit andere klassen
!set name_filter=Technische variabelen
!set name_mkclass=Ajouter des classes

!if $job=regmanage
	!set name_all=Alle leeringen
	!set name_reguser=Inschrijven van leerlingen
	!set name_unreguser=Annuleer de inschrijving
  !set name_display=Laat zien
  !set name_techvardisplay=Selectie dmv tech. variabelen
	!set name_description=Gebruik de checkboxen voor het selecteren van  deelnemers en klassen en klik op eacute;eacute;n van de knoppen om de toegangsrechten aan te passen.
!endif

!if $job iswordof userprop teacher userlist getclasspwd
  !distribute items Name,Value,Verander,Registratie nummer,Opmerkingen,Foto url, (technische) Variabelen,\
   Klasse wachtwoord,Geef het klasse wachtwoord,\
   Login bij externe authentificatie,Inschrijving,Beheer,\
   Verplicht,Plaatjes bestanden\
   into name_name,name_value,name_change,name_regnum,name_comments,name_photourl,name_vars,\
  name_classpassword,name_enterpassword,name_external_auth,name_inscript,name_gestion,\
  !set name_commentmess=Het kommentaar is zichbaar voor de student.
  !set name_commentmessv5=De algemene instelling van wordt nu veranderd. Hierdoor zullen deze instellingen\
   worden doorgegeven aan alle nieuwe klassen die worden aangemaakt.
  !set name_commentuser=Kommentaar voor docenten
  !set name_filterhelp=These variables are defined by the teacher to form groups within the\
    class for certain activities.
  !exit
!endif

!if $job=transfer
   !set name_title_transfer=Verplaatsen van activiteiten
   !distribute items Samenvoegen, Vervangen,Bekijken\
   into name_merge, name_replace,name_show
  !set name_error1=Deze student is niet geregistreerd bij de andere cursus en\
kan dus niet worden overgezet van
  !set name_error2=<b>Fout</b> in de klas authentificatie. Verkeerde handeling of een software fout?
  !set name_activities=!nosubst Details van de aktiviteiten in $i (beperkt tot 1000 regels).
  !set name_totransfer=Hier staan de andere cursussen waarin deze student werk heeft uitgevoerd.\
 Klik om het werk over te hevelen
  !exit
!endif

!if $job=recover
  !set name_empty=Er is geen verwijderde student in deze klas.
  !set name_click=Klik op de loginnaam om het account te herstellen.
  !exit
!endif

!if $job=delprep
  !set name_delete=!nosubst Zeker weten de <b><em>$name_studentloc</em></b>\
     uit deze $(name_struct[$type_class+1]) verwijderd moet worden ?
  !set name_subclsinscrit=Il est inscrit dans (les inscriptions seront conservées en cas de nouvelle activation du compte):
  !exit
!endif

!exit

:transfer
<b>Opmerkingen</b>. <ol>
  <li>"$name_merge" wil zeggen : het samenvoegen van de activiteiten van twee cursussen.</li>
  <li>"$name_replace" wil zeggen : de activiteiten in de andere cursus gaan de activiteiten
  in deze cursus vervangen.</li>
  <li>Proefwerk cijfers en alle niet_scorende activiteiten worden altijd samengevoegd.</li>
  <li>De verbatim opgeslagen proefwerk &amp; oefeningen worden niet overgezet.</li>
  <li>Na de handeling ($name_merge of $name_replace), worden deze gegevens van de
  student in de andere cursus gewist.</li>
</ol>
!exit
