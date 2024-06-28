!set wims_module_log=error: $error

!if bad_maxexams=$error
  Het aantal proefwerken is beperkt tot $max_exams.
  !exit
!endif

!if not_supervisor=$error
  Helaas, maar het maken of modificeren van een proefwerk
  is voorbehouden aan de docent van een klas.
  !exit
!endif

!if $error=no_sheet
  <p>
   De inhoud van een proefwerk kan alleen worden genomen
   uit een <em>actief</em> of <em>verlopen</em> <b>werkblad</b>
  </p><p>
  Deze klas heeft echter geen werkbladen (actief of verlopen). <br>
  Dus eerst een werkblad maken uit oefeningen. (zoek naar een onderwerp)<br>
  Onderaan elke oefening staan de link <b>"toevoegen aan werkblad"</b><br>
  Daarna kan van deze actieve/verlopen werkbladen het echte proefwerk worden gemaakt.
  </p>
  !exit
!endif

!if bad_exam=$error
  Uw proefwerk nummer is helaas niet geldig...een bug in de software?
  !exit
!endif

!if $error=simuchange
  De status van dit proefwerk heeft U net veranderd.<br>Klik
  !href cmd=reply&job=scorereg hier
  om deze simulatie correct af te sluiten.
  !exit
!endif

!if already_registered=$error
  Je cijfer staat al genoteerd.
  !exit
!endif

!if no_more_registration=$error
Dit proefwerk mocht je $stries keer maken.<br>
Je mag het proefwerk dus niet meer overdoen...
 !exit
!endif

!if bad_source=$error
  Het item nummer $bad_source in de broncode, dat net is opgestuurd is helaas ongeldig
  !href cmd=reply&job=prep_putsource&source=$source Verbeter de broncode
  .
  !exit
!endif

!if no_title=$error
  U wilt een proefwerk registreren zonder een naam ?
  niet verstandig. Fout of manipulatie ?
  !exit
!endif

!if prep_activate=$error
  U wilt het proefwerk $exam activeren en dus beschikbaar stellen aan Uw leerlingen.
  <div class="wims_warning">
  Besef dat een proefwerk eenmaal geactiveerd niet meer kan worden veranderd.<br>
  Wilt U doorgaan?
  </div>
  <div class="wimscenter">
    !set wims_ref_class=wims_button wims_warning
    !href cmd=reply&job=activate $wims_name_yes ; $(wims_name_actionlist[1])
    &nbsp;
    !set wims_ref_class=wims_button wims_secondary_button
    !href cmd=resume $wims_name_no ; $wims_name_giveup
  </div>
  !exit
!endif

!if prep_erase=$error
  Wil U werkelijk het proefwerk nummer $exam ($title) verwijderen?
  <div class="wimscenter">
  !set wims_ref_class=wims_button wims_warning
  !href cmd=reply&job=erase $wims_name_yes; $wims_name_erase
  !set wims_ref_class=wims_button
  !href cmd=resume $wims_name_no; $wims_name_giveup
  </div>
  !exit
!endif

!if prep_expire=$error
  Dit proefwerk $exam ($title) zou verlopen zijn op $expday
  !item $expmon of $months
  $expyear. Het <b>nu</b> laten verlopen?
  <div class="wimscenter">
  !href cmd=reply&job=expire $wims_name_yes; $(wims_name_actionlist[2])
  $ $
  !href cmd=resume $wims_name_no; $wims_name_giveup
  </div><b>Opmerking.</b>
  Leerlingen kunnen niet doorgaan met het werken aan een verlopen proefwerk.<br>
  Maar hun reeds behaalde cijfers voor dit proefwerk worden wel bewaard.
  (en ook statistisch verwerkt, zodat deze resultaten altijd nog kunnen worden bekeken)
  !exit
!endif

!if nodeactivate=$error
  Dit proefwerk kan niet worden gedeactiveerd omdat
  !if badstructure isin $deactivate
    de structuur van dit instituut dit niet toestaat.
  !else
    !if score isin $deactivate
      enkele studenten al zijn begonnen met dit proefwerk !
    !else
      het wordt gedeeld met een andere klas !
    !endif
  !endif
  !exit
!endif

!if active_exam=$error
  Helaas, maar dit proefwerk is aktief en daardoor niet meer te veranderen.<br>
  We kunnen dus ook niets aan de opgenomen oefeningen meer wijzigen.
  !exit
!endif

!if $error=prep_noexercise
  De oefening $exo uit dit proefwerk is leeg. Probeer opnieuw.
  !exit
!endif

!if $error=addexook
  De oefening is correct verwerkt.
  !exit
!endif

!if exam_hidden iswordof $error
  Cet examen n'est pas accessible pour vous. Ne jouez pas avec la barre d'adresse !!
  !exit
!endif

!if badtechvarname iswordof $error
  !let code=!word 2 to -1 of $error
  !if $code=_
    une des conditions <span class="wims_code_words">Condition pour cacher la feuille aux participants</span> n'a pas de nom de variable
  !else
    Un des noms de variable (
    !let code=!listcomplement _ in $code
    $code
    ) n'est pas un nom correct de variable technique. Les noms incorrects de variable technique
    ont été supprimés du champs <span class="wims_code_words">Condition pour cacher l'examen aux participants</span>.
  !endif
  !exit
!endif

!if $error=badallowshare
  La variable technique que vous souhaitez utiliser n'est pas disponible dans toutes les classes en partage de ressources avec votre
  classe.
  Vous ne pouvez donc pas propager ces réglages aux autres classes en partage.
  !exit
!endif

!if $error=noclass
  Vous n'êtes pas connecté à une classe. Cette situation peut se produire si vous étiez en train de travailler
  sur un examen et que votre enseignant a cloturé votre session. Il vous faut vous reconnecter à la classe.
 !exit
!endif

!if other_exam isin $error
  Vous avez déjà commencé un autre examen (le numéro
  !word 2 of $error
  ). Vous ne pouvez pas en commencer un autre tant que vous ne l'avez pas terminé.
  !exit
!endif

!if $error=hiddenbadtechvar
  Attention, la <span class="wims_code_words">condition pour cacher l'examen aux participants</span> en utilisant une variable technique est incorrecte. Vous devez la corriger.
  !exit
!endif

!msg $error
