!set lang_exists=yes

!if $job=adddate
  !set cdt_subtitle=Modificatie datum
  !goto common
!endif

!if $job=addtodo
  !set cdt_subtitle=Voeg huiswerk toe
  !goto common
!endif

!if $job=logfile
  !set cdt_subtitle=Log file
  !set name_text=Lijst met ip-adressen ingelogd op de klassewerkboek
  !goto common
!endif

!if $job=config
  !set cdt_subtitle=Aanmelden
  !set name_link=De linknaam op de homepage
  !set name_intro=Hier zijn de instelparameters
  !set name_see_logfile=Bekijk de log file van het klassewerkboek.
  !set name_reversedate=De informatie in omgekeerde volgorde
  !set name_showyear=Jaartal in de tabel
  !set name_hide=Verberg het werkboek van de deelnemers.
  !goto common
!endif

!if $job=addfile
  !set cdt_subtitle=Uploaded files
  !set name_erasedfile=!nosubst Het bestand <b>$erase</b> is verwijderd.
  !set name_depos=Een bestand toevoegen
  !set name_available=Beschikbare bestanden
  !set name_erase=Verwijder een bestand
  !set name_nodeposit=Er kan geen bestand meer worden toegevoegd omdat de ingestelde maximum voor deze klas is bereikt.
  !set name_explanation1=!nosubst Deze bestanden kunnen worden ingebonden door de variabele\
  <span class="tt wims_code_variable">\filedir</span>. \
  Bijvoorbeeld:\
  <p class="wimscenter">\
  <span class="tt wims_address">&lt;a href="\filedir/$f1"&gt;$f1&lt;/a&gt;</span>\
  </p>\
  geeft een link naar het bestand \
  <a href="$m_filedir/$f1">$f1</a>.\
  En mag ook gedefinieerd worden als

 !set name_explanation2=!nosubst om een plaatje
 <span class="tt">myfile.jpg</span> \
 toe te voegen. <br>De bestanden zijn alleen bereikbaar voor leerlingen van deze klas.

  !goto common
!endif

!if $job=helplink
  !set name_Add=Klik op de link om een item toe te voegen.
  !set name_exam=Proefwerken;
  !goto common
!endif

:common
!distribute line Werk\
Nog te doen \
tussen\
en\
Voeg een proefwerk toe\
voor\
Werk te doen\
Werk\
Aantal zichtbare datums \
Werk nog te doen voor \
Werk\
Sessie\
karakters\
Geen informatie\
Geen informatie voor deze dag\
Geen informatie voor deze periode\
Dag\
Disciplines\
In klas\
Gegeven\
Er is geen werk opgegeven voor\
Voeg een activiteit toe\
de\
into name_done,name_todo,name_between,name_and,name_addexam,name_addsheet,name_for,name_worktodo,\
name_work,name_nb_date,name_todo2,name_workdone,name_session,\
name_character,name_noinfo1,name_noinfo2,name_noinfo3,\
name_Day,name_discipline,name_inclass,name_giventhe,name_nowork,\
name_help_add,name_the

!set name_workfor=$name_work $name_for

!set name_warning1=Als er geen tweede datum is opgegeven wordt alles gebaseerd op de eerst opgegeven datum.

!set name_find2=Zoeken
!set name_find=Zoek

!set name_hiddencdt1=Het werkboek is door je docent gedeactiveerd
!set name_hiddencdt2=Bepaald materiaal uit dit werkboek wordt nog niet getoond.
!set name_nosupervise=Ce cahier de texte regroupe tous les cahiers de texte des cours de la classe. Il ne peut qu'être consulter. Pour effectuer des modifications ou des ajouts, il faut se rendre dans les cours correspondants.
!set name_nosuperviseforuser=Ce cahier de texte regroupe les éléments des cahier de texte de tous les cours de la classe.
