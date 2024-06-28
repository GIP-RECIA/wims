
<span class="wims_warning">$wims_name_Error</span>.
!distribute words $wims_read_parm into w1,w2,w3,w4,w5,w6
!if $w1 iswordof antiwversion badauth badauthhost badcategory badhour badlang \
	badname badtar badtype badversion badwimsversion \
	doublelang empty nochange noindex nolocalright \
	nongnu nooriginal noreply noright noright_translate notallow robot \
	symlink toolong unpublishable please-update-module-version lengthlimit \
	mirror_exists domain_keyword
 !goto $w1
!else
 !default $wims_read_parm=Er deed zich een technische storing voor.
 $wims_read_parm
 !exit
!endif

:mirror_exists
    Er bestaat al een module op een andere publicatie server onder deze naam.
    Bent u de schrijver van deze module, neem dan contact hierover op met de administrator.
    In alle andere gevallen : verander de naam van deze module.
!exit

:antiwversion
 Uw module vereist WIMS versie WIMS-$w2 ... deze server is echter versie
 $wims_version. Graag corrigeren.
!exit

:badauth
  Inlogfout. Toegang geweigerd.
!exit

:badauthhost
 Identiteit verificatie fout.
 Het is niet toegestaan vanaf uw IP adres een module te publiceren.
!exit

:badcategory
 !if / isin $w2
  De zone <span class="tt wims_code_words">$w2</span> van uw module is hier onbekend.
  !set w3=!word 3 to -1 of $wims_read_parm
  !set w0=!translate / to , in $w2
  De huidige categorieen in de zone <span class="bold tt wims_code_words"$(w0[1])</span>
  zijn&nbsp;:
  <pre>
  $w3
  </pre>
  Schrijf naar de
  !mailurl $sysadmin administrator dat U een nieuwe categorie
  aan het WIMS systeem wilt toevoegen.
 !else
 De zone <span class="tt wims_code_words">$w2</span> van uw module is hier niet bekend. Rapporteer dit probleem aan de
 !mailurl $sysadmin administator
 van deze server
.
 !endif
!exit

:badhour
 Op dit moment kunt U de module niet publiceren !

 Kies een tijdstip waarop de server wat minder bezet is.
 Vermijdt publicatie op de volgende tijdstippen:
  <br class="spacer">
 $nopublish
!exit

:badlang
 Helaas, maar de taal <span class="tt wims_code_words">$w2</span> bestaat nog niet in WIMS.
 Iemand zal eerst WIMS moeten vertalen in $w2 ,
 voor dat deze modules kan worden gepubliceerd.
!exit

:badname
 De naam van module <span class="tt wims_fname">$w2</span> is niet goed.
 Of te lang of te kort of bevat illegale karakters.
!exit

:badtar
 Er is een fout opgetreden tijdens het versturen.
 Controleer eerst alles en probeer het dan nog eens.
!exit

:badtype
 Een verkeerde module gestuurd:
 !if $w2=new
  Uw module is niet nieuw.
 !else
  U kunt geen niet-bestaande modules veranderen.
 !endif
 Hebt U soms een verkeerd adres van de module gebruikt?
!exit

:badversion
 Het versienummer <span class="tt wims_code_words">$w2</span> van uw module is niet juist geformateerd. Graag corrigeren.
!exit

:badwimsversion
 De wims_version declaratie van uw module moet wel overeenkomen met een bestaande WIMS
 versie tussen <b>3.36</b> en de laatste versie.
 Graag corrigeren.
!exit

:doublelang
 Er zijn verschillen in de module taal definitie ontdekt:
 de INDEX file declareert <span class="tt wims_code_words">language=$w3</span>, terwijl de directory de uitgang <span class="tt wims_code_words">$w2</span> heeft !
 Corrigeren graag.
!exit

:empty
 De lege module wordt genegeerd !
!exit

:lengthlimit
  De module is te groot en kan niet worden geinstalleerd via deze interface.
  Neem contact op met het publicatie centrum
  !mailurl $sysadmin $centralhost
  voor een handmatige instalatie.
!exit

:nochange
 De  module <span class="tt wims_fname">$w2</span> is niet veranderd sinds de laatste keer dan U de module hebt opgestuurd.
 De upload wordt dus genegeerd.
!exit

:noindex
 Verkeerde inhoud:
 de INDEX file van deze module lijkt corrupt of zelfs niet aanwezig.
!exit

:nolocalright
 Om uw module op deze server te installeren, hebt u bepaalde rechten nodig.
 Vraag eerst de systeembeheerder van deze server de juiste toestemming.

!exit

:nongnu
U hebt geen <b>GNU GPL</b> copyright aangegeven in uw module.
De installatie van uw module wordt geweigerd.

!exit

:nooriginal
 De centrale publicatie server kan de module in de oorspronkelijke taal niet vinden.
 Hebt U de module wel het goede adres gegeven?

!exit

:noreply
Netwerkfout : kon geen verbinding maken met de centrale publicatie server $centralhost.
!exit

:noright
 U bent niet geregistreerd als auteur of vertaler van <span class="tt wims_fname">$w2</span>.
 U kunt wel een
 !href cmd=reply&jobreq=backup backup archief
 met uw veranderingen of verbeteringen doorsturen naar de schrijver
 !set au=!line 2 of $wims_read_parm
 !distribute items $au into w3,w4
 <a href="mailto:$w4?subject=Your WIMS module $w2">$w3</a>
 en die weet hoe deze module wel gepubliceerd kan worden.
!exit

:notallow
 U kunt geen nieuwe publicaties in $D1/$D2 maken.
 Probeer het onder "ontwikkelings versie" te publiceren, of zoek iemand die
 wel over de juiste rechten beschikt en die deze publicatie ter hand wil nemen.
!exit

:please-update-module-version
Het versienummer van de module moet worden verhoogd bij publicatie.
Alle veranderingen aan de module moeten worden genoteerd in het bestanhd NEWS.
!exit

:robot
 Robot waarschuwing: interne technische fout, gaarne doorgeven !
!exit

:symlink
 Symbolische links zijn in modules niet meer toegestaan.
 Wanneer u een oude versie OEF module heeft, kunt u deze vertalen naar de nieuwe versie;
 deze heeft geen symbolische links meer.
!exit

:toolong
 Helaas maar uw ongetwijfeld prachtige module, is te groot om automatisch te
 worden verstuurd. Stuur de module "handmatig" op. Alvast bedankt !
!exit

:unpublishable
Deze module heeft een niet geldig publicatie adres. Om verder te gaan kunt U de module
!href cmd=reply&jobreq=move&modreq=$mod hernoemen
of
!href cmd=reply&jobreq=copy&original=devel/$auth_login/$mod dupliceren
.
!if oef iswordof  $w1 $w2 $w3 $w4 $w5 $w6
En omdat deze module gemaakt is als een OEF,
moet de naam te beginnen met <span class="tt wims_code_words">oef</span>.
!endif
!if doc iswordof  $w1 $w2 $w3 $w4 $w5 $w6
En omdat deze module gemaakt is als een wims document ,
moet de naam te beginnen met <span class="tt wims_code_words">doc</span>.
!endif
!exit

:domain_keyword
 De volgende velden <span class="wims_label">$wims_name_Domain</span> of
 <span class="wims_label">$wims_name_Keywords</span> zijn nog niet volledig ingevuld.
 Graag aanvullen.
!href cmd=reply&jobreq=index $wims_name_properties
 van de module $mod en lees de help pagina's.
!exit
