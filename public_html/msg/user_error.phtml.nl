Status: 450 WIMS User Error
Server: WIMS $wims_version (WWW Interactive Multipurpose Server)
Content-type: text/html; charset=windows-1252
Cache-Control: no-cache
Pragma: no-cache

<!DOCTYPE html>
<html><head>
  <meta http-equiv=expires content="1 Jan 1990">
  <meta HTTP-EQUIV="Pragma" CONTENT="no-cache">
  <meta HTTP-EQUIV="Cache-Control" CONTENT="no-cache">
  <!-- Theme CSS style -->
  <link rel="stylesheet" href="html/themes/$wims_theme/css.css" type="text/css">
  <style>
   input[type="submit"],input[type="button"],.wims_button{ background-color:$wims_ref_button_bgcolor;color:$wims_ref_button_color;}
   .wims_button_help{ background-color:$wims_ref_button_help_bgcolor;color:$wims_ref_button_help_color;}
  </style>

  !if exam_ isin $wims_user_error
    <style><!--
    body {text-align: justify;
    padding-left: 3%; padding-right: 3%;}
    --></style>
    </head>
    <body onload="window.resizeTo(500,200);window.moveTo(250,300);">
      <h1 class="wimscenter">FOUT</h1>
    !goto examerr
  !endif

</head><body class="user_error">

!if threshold iswordof $wims_user_error
  <h1>We zijn te druk</h1>
  <hr style="width:50%">
  <p>
    Deze WIMS server <span style="color:blue">$httpd_HTTP_HOST</span>
    is op dit moment belast door een zeer groot aantal aanvragen
    en neemt geen nieuwe opdrachten meer aan.
  </p><p>
    Kom later terug, of maak gebruik van een WIMS mirror site.
    We hopen U spoedig  weer van dienst te kunnen zijn.
  </p>
  !read mirror.phtml.en
  !goto end_html
!endif

!if overload iswordof $wims_user_error
  <hr style="width:1px">
  <h1>SORRY</h1>
  <p>
  Uw verzoek is geblokkeerd door deze WIMS server: maximum aantal verbindingen is bereikt.
  </p>
  !goto end_html
!endif

!if ++++missing_ isin ++++$wims_user_error
  <hr width="1">
  <h1>Sorry</h1>
  <hr style="width:50%">
  <p>
    WIMS heeft het software pakket
    !set miss=!upper $missing_software
    <span class="wims_warning">$miss</span>
    nodig om aan Uw verzoek te voldoen, helaas is dit pakket niet
    beschikbaar (of niet zichtbaar voor WIMS) op deze server.
  </p><p>
    U kunt een email sturen naar de
    <a href="mailto:$wims_site_manager?subject=$missing_software niet beschikbaar op WIMS">
    website beheerder</a> om deze te informeren over dit probleem, of een
    mirror site kiezen uit de onderstaande tabel.
  </p><p><a href="$refname">WIMS homepage</a>.</p>
  !read mirror.phtml.en
  !goto end_html
!endif

!if trapped iswordof $wims_user_error
  <h1>Stop!</h1>
  <hr>
  Het materiaal op
  <a href="http://$httpd_HTTP_HOST">$httpd_HTTP_HOST</a>
  is niet geschikt voor het automatisch downloaden.
  <p>
  De pagina's worden interactief gegenereerd en zijn ongeschikt voor offline gebruik.
  </p>
  !goto end_html
!endif

!if no_access notwordof $wims_user_error and no_access_class notwordof $wims_user_error
  <h1>WIMS error</h1>
  <p>
    Er is een fout geconstateerd in het verzoek aan deze WIMS server.
  </p>
!endif
!if module_change iswordof $wims_user_error
  !if $wims_human_access=yes
    <p>
      Voorkom het gebruik van de 'Terug' knop van de browser op deze Interactieve server.
      (dit voorval is geregistreerd)
    </p>
    <div class="wimscenter">
    !set tit=!module title $module
    !default tit=$module
    !href module=$module $tit
    &nbsp;
    !set wims_ref_class=wims_button
    !href $ WIMS home
    !if $httpd_HTTP_REFERER!=$empty
      &nbsp;<a href="$httpd_HTTP_REFERER">Exit WIMS</a>
    !else
      <p class="small">
        Wilt U deze website gewoon willen verlaten, negeer dan deze mededelingen en
        ga door met het klikken van de `Terug' knop.</small>
      </p>
    !endif
    </div>
    !goto end_html
  !endif
  <p>
    U hebt een illegaal verzoek gedaan.
    Gebruik van een download robot om deze site te benaderen is verboden?
  </p>
  :unblock
  !form new
    <input type="hidden" name="module" value="home">
    <input type="hidden" name="deblockparm" value="$[randint(10000000)+1000000]">
    Hebt U per ongeluk op de `Terug' knop van de browser geklikt,
    voer dan s.v.p. het woord "wims" hier:
    <input size="8" name="special_parm"> en
    <input type="submit" value="opsturen naar de server">.
  !formend
 <p>
 Besef goed dat deze WIMS pagina's dynamisch worden gegenereerd en kunnen
 dus <b>alleen</b> online gebruikt worden, via een normale browser.
 Het is zinloos deze pagina's op te halen met een "download robot".
 </p>
  !if robot_doubt iswordof $wims_user_error
    <p class="small">
      <small>Besef goed dat hackers voorgoed toegang tot deze
      site kunnen worden ontnomen !
    </p>
  !endif
  !goto end_html
!endif

!if robot_doubt iswordof $wims_user_error
  <p>
    We blokkeren de toegang tot deze website omdat er het verdacht bestaat
    dat een "download robot" gebruikt wordt om de webpagina's op te halen.
  </p>
  !goto unblock
!endif

!if allow_violation iswordof $wims_user_error
  <p>
    U hebt niet de toegangsrechten om de variabele ``$wims_error_data''
    te veranderen met de opdracht ``$cmd''.
  </p>
!endif

!if bad_command iswordof $wims_user_error
  <p>
  De opdrachtregel ``$cmd'' is niet toegestaan.
  </p><p>
  de toegestane commando's zijn:
  </p>
  <pre>new, renew, reply, help, hint, config</pre>
!endif

!if bad_host iswordof $wims_user_error
  <p>
    U hebt geprobeerd een sessie op te starten van af een andere computer.
    Dit is niet toegestaan vanuit een virtuele klas.
  </p><p>
    Helaas geven sommige Internet Service Providers een dynamisch hostadres,
    dat tijdens een verbinding kan veranderen...
    Mocht dit bij U het geval zijn, schrijf dan naar de docent met het verzoek
    de betreffende instellingen te wijzigen.
  </p>
!endif

!if need_https iswordof $wims_user_error
  Uw klas kan alleen via een <b>https</b> sessie worden bereikt.
  !set refname=!replace http:// by https:// in $wims_ref_name
  <a href="$refname?session=$wims_session&module=home&cmd=new">Probeer deze link</a>.
  !goto end_html
!endif

!if bad_insnum iswordof $wims_user_error
  <p>
  !if $cmd=getfile
    Het gezochte bestand bestaat niet.
  !else
    De bestandsnaam is niet geldig.
  !endif
  </p>
!endif

!if cmd_output_too_long iswordof $wims_user_error
  <p>
    Deze berekening heeft het ingestelde maximum ruim overtreden.<br>
    Vermoedelijk een te gecompliceerde? berekening...
    Vereenvoudig het verzoek.
  </p>
!endif

!if double_click iswordof $wims_user_error
  <p>
  De server is nog steeds bezig met Uw <b>vorige opdracht</b>.
  </p><p>
    Per ongeluk <b>dubbel geklikt ?</b>, wacht dan
    <span class="wims_warning">$wims_cpu_limit seconden</span>
    tot de vorige opdracht is afgehandeld en
    !href cmd=resume klik hier
    om terug te gaan naar het werk.
  </p><p>
    Mocht U deze website gewoon willen verlaten, negeer dan deze mededelingen en
     ga door met het klikken van de `Terug' knop.
  </p>
  !goto end_html
!endif

!if invalid_char_in_query_string iswordof $wims_user_error
  <p>
    De substitutie ``$wims_error_data'' in de opdracht regel is illegaal.
  </p>
!endif

!if name_conflict iswordof $wims_user_error
  <p>
  ``$wims_error_data'' is een gereserveerde naam van WIMS.
  </p>
!endif

!if no_command iswordof $wims_user_error
  <p>
    Er is geen opdracht...
  </p>
!endif

!if no_insnum iswordof $wims_user_error
  <p>
  !if $cmd=getfile
    Een file aangevraagd zonder passende filenaam ?
  !else
    Een "dynamische invoeging" verzocht zonder een passend nummer ?
  !endif
  </p>
!endif

!if no_module_name iswordof $wims_user_error
  <p>
    U hebt een nieuwe sessie aangevraagd zonder module naam...vermoedelijk een foutieve link naar een module ?
  </p>
!endif

!if no_session iswordof $wims_user_error
  <p>
    Het sessienummer is niet aanwezig.
  </p>
!endif

!if parm_too_long iswordof $wims_user_error
  <p>
    Uw opdracht regel is veel te groot...niet toegestaan.
  </p>
!endif

!if string_too_long iswordof $wims_user_error
  <p>
    De definitie van deze variabele valt buiten het toegestane maximum.
  </p>
!endif

!if too_many_variables iswordof $wims_user_error
  <p>
    Het aantal parameters is groter dan de toegestane limiet.
  </p>
!endif

!if unmatched_parentheses iswordof $wims_user_error
  <p>
    We hebben een missend haakje ontdekt :<br>
    U kunt deze fout hier herstellen:
  </p>
  !form $cmd
  !for i in module,special_parm,worksheet
    !if $($i)!=$empty
      !set value=!translate " to $ $ in $($i)
      <input type="hidden" name="$i" value="$value">
    !endif
  !next i
  !for i=0 to $user_var_no-1
    !if $i!=$bad_parentheses
      !set value=!translate " to $ $ in $(value$i)
      <input type="hidden" name="$(name$i)" value="$value">
    !endif
  !next i
  !set value=!translate " to $ $ in $(value$bad_parentheses)
  !set len=!charcnt $value
  !if $len<55
    !set len=$[$len+3]
  !else
    !set len=59
  !endif
  !set input_id=$(name$bad_parentheses)
  <div class="field box">
    <label for="$input_id">$input_id =</label>
    !set n=!linecnt $value
    !if $n<=1
      <input size="$len" name="$input_id" id="$input_id" value="$value">
    !else
      <textarea rows="$n" name="$input_id" id="$input_id">$(value$bad_parentheses)</textarea>
    !endif
  </div>
  <p class="actions">
    en vervolgens
    <input type="submit" value="verstuur de gecorrigeerde text">
  </p>
  !formend
  <hr>
  <p class="wimscenter">
    !href cmd=resume Laat maar zitten
    |
    !href $ wims home
  </p>
  !goto end_html
!endif

!if wrong_module iswordof $wims_user_error
  !set tmp=!translate "!/<>;': to $         $ in $module
  <p>
    De verzochte module <code>$tmp</code> bestaat niet op deze WIMS site.
  <br><small><em>kontroleer regelmatig of de links op uw web-pagina / ELO nog up-to-date zijn.</em></small>
  </p>
!endif

!if wrong_session iswordof $wims_user_error
  <p>
  Het sessienummer ``$session'' is niet (of niet langer) geldig.
  <a href="$refname">Maak een nieuwe sessie</a>.
  </p>
!endif

!if rafale iswordof $wims_user_error
  <p>Niet spelen met de oefeningen !</p>
  <p>
  Je kan beter even nadenken en proberen een oplossing te vinden voor
  deze oefening...in plaats van keer op keer een nieuwe variant aan te vragen.
  </p>
  !set wims_ref_class=wims_button
  !href cmd=resume Vergeet het laatste verzoek
.
  !if $wims_user!=$empty and $wims_user!=supervisor
    <p>
      <span class="wims_warning">ATTENTIE</span>!
      Deze gebruikersfout niet herhalen !
      Dit kan aanleiding geven tot zeer slechte scoreresultaten...zelfs als de cijferregistratie gesloten is.
    </p>
  !endif
  !goto end2
!endif

:examerr

!if exam_dep iswordof $wims_user_error
  <p>
    Deze oefening is alleen beschikbaar wanneer je met goed gevolg
  !if , isin $dep_list
    de opdrachten  $dep_list.
  !else
    de opdracht $dep_list.
  !endif
  hebt afgerond.
  </p>
  !goto examend
!endif

!if bad_exam iswordof $wims_user_error
  <p>
    Je hebt een illegaal verzoek gedaan binnen een examen sessie.
  </p>
  !goto examend
!endif

!if exam_exo_finished iswordof $wims_user_error
  <p>
  Je hebt deze oefening reeds afgerond met een $wims_exo_lastscore als resultaat.
  Je kunt dit niet nog eens overdoen: dit is een examen (...)
  </p>
  !goto examend
!endif

!if expired_exam iswordof $wims_user_error
  <p>
    Je hebt geen tijd meer over om het examen af te maken.
  </p>
  :examend
  !set pses=!translate _ to , in $wims_session
  !set pses=!item 1 of $pses
  !set pser=!randint 1,999
  !set wims_opener=window.opener.location='$wims_ref_name?session=$pses.$pser&cmd=reply&job=student';
  <p class="wimscenter">
    <a href="#" onclick="window.close();$wims_opener">Sluit dit venster</a>.
  </p>
  !goto end_html
!endif

!if exam_closed iswordof $wims_user_error
  <p>
  Dit "examen" is op dit moment niet meer bereikbaar vanuit je ipadres.<br>
  Log opnieuw in en start een nieuw "examen"
  </p><p>
  Eventueel even navragen bij je docent.
  </p>
  !goto examend
!endif

!if bad_ident iswordof $wims_user_error
  <p>
    Uw verzoek geeft een "gebruikers identificatie" fout.
  </p><p>
    Probeer je andermans sessie te benaderen?
  </p><p>
    s.v.p.
    <a href="$refname?special_parm=ignorecookie&special_parm2=$[randint(10^8)]">maak een nieuwe sessie</a>.
  </p>
  !goto end_html
!endif

!if no_access iswordof $wims_user_error
  <div class="wims_msg warning">Door het toegangsbeleid op deze site kan het verzoek niet worden behandeld.<br>
  Onze excuses.</div>
  !goto end2
!endif

!if no_access_class iswordof $wims_user_error
  !distribute items (exercices), (outils), (documents) into name_exo,name_tool,name_doc
  !set tt=!word 2 of $wims_user_error
  <h2>Fermeture des activités de la classe</h2>
  <div class="wims_msg warning">
    L'accès à certaines activités $(name_$tt) de cette classe virtuelle est provisoirement fermé
    par l'enseignant. Revenez plus tard.
  </div>
  !goto end2
!endif

!if class_closed iswordof $wims_user_error
  <h2>Sorry.</h2>
  <p>
    Je docent heeft de virtuele klas is eventjes gesloten.<br>
    Kom later terug, of vraag aan je docent de klas weer te openen...
  </p><p class="wimscenter">
    !href cmd=close&module=home WIMS
  </p>
  !goto end_html
!endif

!if other_exam_session iswordof $wims_user_error
  <p>Vous avez déjà commencé une session d'examen. Vous ne pouvez pas en commencer une autre.</p>
  <p>Si vous avez fermé le navigateur par erreur pendant votre session d'examen revenez à la page d'accueil de la classe et vous pourrez récupérer votre session.</p>
  <p class="wimscenter">
    <a href="#" onclick="window.close();$wims_opener">Fermer cette fenêtre</a>.
  </p>
  !goto end_html
!endif

:end
<p>
  Wanneer je dit bericht ziet na het volgen van een link op een andere
  pagina, dan is vermoedelijk deze link corrupt.
  In dat geval, gaarne informeer de auteur van deze pagina's.
</p><p>
  Je kan natuurlijk ook de
  <a href="mailto:$wims_site_manager?subject=wims.cgi">site manager</a> een email sturen
  met een gedetailleerde beschrijving van het geconstateerde ongemak.
</p>

:end2

<div class="wimscenter">
  !set wims_ref_class=wims_button home
  !href module=home&cmd=new WIMS start pagina
</div>

:end_html
</body></html>
