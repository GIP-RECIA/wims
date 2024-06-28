
!set wims_module_log=error: $error $wims_class

<b>$wims_name_Error</b>.

!if not_secure iswordof $error
  !if $code!=$empty
    Incorrecte geheime code.
  !else
    Deze module is alleen bereikbaar voor een "secure host".
  !endif
  Toegang geweigerd !
 !exit
!endif

!if checkhost iswordof $error
  Uw huidige ipadres staat niet in de nieuwe lijst van "secure hosts".
  Waarschijnlijk is dit een klein foutje.
  En ik zal dus de "secure host" datalijst niet bijwerken.
  !exit
!endif

!if bad_file iswordof $error
  Helaas, maar ik kan de <em>$wims_deposit</em> file niet als een klas backup archief bestand identificeren.
  Of er is  een verkeerd bestand gestuurd of het backup archief zelf is corrupt.

  !exit
!endif

!if empty_file iswordof $error
  Er is geen backup archief aangetroffen in uw bestand
  <span class="tt wims_fname">$wims_deposit</span>.
  !exit
!endif

!if no_upload iswordof $error
  De gestuurde data zijn ongeldig ! Probeer het nog eens.
  !exit
!endif

!if remote_sharing iswordof $error
  Een "buurt-klas" deelt enkele bronnen uit uw klas.<br>
  U kunt alleen wijzigingen aanbrengen in materiaal dat niet gedeeld wordt met anderen.<br>
  Voor beide klassen moet U de deling van materiaal beeindigen.
  !exit
!endif

!if share_dep iswordof $error
  Het delen van materiaal moet wel de afhankelijkeheden respecteren: voordat er
  !if sheet iswordof $error
    oefeningen uit werkbladen gedeeld kunnen worden.
  !else
    !if exam iswordof $error
      oefeningen en werkbladen uit examens gedeeld kunnen worden.
    !else
      !if livret iswordof $error
        oefeningen en werkbaden voor de vereiste raport competenties gedeeld kunnen worden.
      !else
        !if userphoto iswordof $error
          deelnemers accounts voordat afzonderlijke foto's worden gedeeld.
        !endif
      !endif
    !endif
  !endif
  !exit
!endif

!if stopshare_dep iswordof $error
  Voordat gedeeld materiaal be&iuml;ndigd kan worden, moeten wel de afhankelijkeheden gerespecteerd worden :
  !if sheet iswordof $error
    denk aan proefwerken en raport competenties en hun bijhorende werkbladen.
  !else
    !if exo iswordof $error
      denk aan werkbladen en de bijhorende oefeningen.
    !endif
  !endif
  !exit
!endif

!if not_neighbor iswordof $error
  U hebt geen erkende buurklassen.
   <br>
  Besef goed dat een klas pas echt een buurklas is als dit door <b>beide</b> klassen wordt erkend !
  exit
!endif

!if localmirror iswordof $error
  Het spiegelen/kopieren van een klas op de zelfde server heeft geen nut!
  !exit
!endif

!if toobigfile iswordof $error
  Het bestand is te groot: de ingestelde limiet is 12K.
  !exit
!endif

!if file_too_large iswordof $error
  <p>Het is door de grootte niet mogeljke deze klas te archiveren
  Backup archieven mogen maximaal <strong>$max_arch_size KB</strong> zijn.</p>
  <p>We adviseren om enkele selectieve backups aan te maken.</p>
  !if $format!=zip
    <p>NB:zelfs als de browser het bestand wel download, kan deze backup file onbruikbaar zijn.</p>
  !endif
  !exit
!endif

!if emptycloningpwd iswordof $error
  You must put a password with at least $passwd_min characters and at most
  $passwd_max characters amongs the characters <span class="tt">$char_passwd</span>
  !exit
!endif

!if expdate_sharing iswordof $error
 !let date=!word 2 of $error
 vous ne pouvez pas définir une date d'expiration après la date d'expiration d'une classe avec laquelle vous partagez des ressources.
 La date d'expiration de votre classe doit être située avant le
 !read date.phtml $date,notime
 !exit
!endif

!if sharing_expdate iswordof $error
 !let date=!word 2 of $error
 vous ne pouvez pas partager des ressources avec une classe dont la date d'expiration est inférieure à la date d'expiration de votre classe.
 Si vous voulez partager les ressources de cette classe, la date d'expiration de votre classe doit être située avant le
 !read date.phtml $date,notime
 !exit
!endif

!if expdate_sharable iswordof $error
 !let date=!word 2 of $error
 vous ne pouvez pas définir une date d'expiration précédent la date d'expiration d'une classe que vous autorisez à partager vos ressources.
 La date d'expiration de votre classe doit être située après le
 !read date.phtml $date,notime
 !exit
!endif

!if sharable_expdate iswordof $error
 !let date=!word 2 of $error
 vous ne pouvez pas proposer un partage de ressources avec une classe dont la date d'expiration est supérieure à la date d'expiration de votre classe.
 Si vous voulez proposer de partager vos ressources à cette classe, la date d'expiration de votre classe doit être située après le
 !read date.phtml $date,notime
 !exit
!endif

!msg $error
