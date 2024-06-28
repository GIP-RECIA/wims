!set lang_exists=yes

!default wims_name_passsup=$wims_name_Password ($name_sup)
!default wims_name_password=$wims_name_Password ($name_classesss)
!default wims_name_institution=$name_Name_portal
!default wims_name_description=$wims_name_name $name_classesss

!set cname=!item $cltype+1 of klassen,,een groep klassen,,\
  een portaal

!if noagreecgu iswordof $error
  $noagreecgu_msg
  !exit
!endif

!if no_subclass iswordof $error
  Bij de huidige instellingen heeft U niet de
  rechten om subklassen op te richten.
  !set restart=no
  !exit
!endif

!if no_right iswordof $error
    U heeft niet de rechten om klassen op te richten op deze WIMS-server.<br>
    Neem
    !mailurl $wims_site_manager contact op met de site-manager\
    voor meer details over het oprichten van klassen
    op deze server.
  !set restart=no
  !exit
!endif

!if not_manager iswordof $error
  Helaas, maar alleen systeembeheerder (sitemanager) heeft de bevoegdheden
  om $cname op te richten.
  !exit
!endif

!if getpass iswordof $error
  <div class="wims_msg warning">
    Le mot de passe de création qui vous a été transmis par l'administrateur
    ne doit pas être communiqué.
    !if $cltype=2
      De même, vous vous engagez à ne diffuser le mot de passe d'inscription des enseignants
      à votre groupement qu'aux enseignants dont vous souhaitez l'inscription
      dans votre groupement. En aucun cas ce mot de passe n'aura une diffusion publique.
      L'administrateur du serveur se réserve le droit de fermer votre groupement
      en cas de manquement à cette règle.
    !endif
  </div>
  !if $sendmail!=$empty
    <p class="wimscenter">Het wachtwoord is verstuurd naar: $sendmail.</p>
  !endif
  !if $regpass!=$empty
    <div class="wims_msg warning">
    Helaas, Uw wachtwoord is niet juist. Probeer het nog eens.
    </div>
  !else
    !if $sendmail=$empty
      Het oprichten van $cname op deze server is beschermd met een wachtwoord.
      Vul hieronder het wachtwoord in.
    !endif
  !endif
  !form reply
  <input type="hidden" name="step" value="$step">
  <input type="hidden" name="job" value="$job">
  <label for="regpass">
    Het wachtwoord:
  </label>
  <input size="16" name="regpass" type="password" id="regpass" required>
  <input type="submit" value="$wims_name_send">
  !formend
    <div class="wims_msg info">
    Opmerking. Het wachtwoord voor het oprichten van klassen kan worden verkregen bij de
    !mailurl $wims_site_manager systeembeheerder\
van deze WIMS server.
    !if $regpassmail!=$empty and $sendmail=$empty
      !form reply
        Geef hier het emailadres waar het wachtwoord naar verstuurd moet worden:
        <input type="text" name="adresse1" value="$adresse1" size="20">
        <input type="hidden" name="step" value="0">
        !let nbaddr=!itemcnt $regpassmail
        !if $nbaddr=1
          @$regpassmail
        <input type="hidden" name="adresse2" value="$regpassmail">
       !else
    @
    !formselect adresse2 list $regpassmail
   !endif
   &nbsp;
   <input type="submit" value="$wims_name_send">
  !formend
   !else
    !reset sendmail
   !endif
   !set restart=no
 !exit
!endif

!if getid iswordof $error
  !if $regpass$regid!=$empty
    Helaas, het wachtwoord was niet correct. Probeer nog een keer.
  !else
    Het oprichten van klassen op deze server wordt geregeld door een
    wachtwoord beschermde aanmeldings procedure.
  !endif
  </div>
  !form reply
    <fieldset class="property_fields halfwidth blockcenter">
      <div class="field box">
        <label for="regid">
          Geef de naam van uw account:
        </label>
        <input size="20" name="regid" id="regid" required>
      </div>
      <div class="field box">
        <label for="regpass">
          en het bijhorende wachtwoord:
        </label>
        <input size="16" name="regpass" id="regpass" type="password"  required>
      </div>
      <div class="wimscenter">
        <input type="submit" value="$wims_name_send">
      </div>
    </fieldset>
  !formend
  Opmerking: Schrijf naar de systeembeheerder of
  !mailurl $wims_site_manager sitemanager\
voor een account
  als U klassen op deze server wilt oprichten.
  !set restart=no
  !exit
!endif

!if class_quota=$error
  U had het recht om $r_quota1 klassen op deze server te laten hosten.
  Het quotum is nu bereikt: er is geen plek meer voor nog een extra klas.
  !set restart=no
  !exit
!endif

!if bad_secure=$error
  Uw huidige ipadres staat niet in de door uzelf aangemaakte lijst (<span class="tt wims_code_words">$secure</span>)
  met veilige ipadressen.Dit is waarschijnlijk een typfoutje.
  <p>
  Lees aandachtig de onderstaande documentatie.
  Als het niet duidelijk is, vul hier dan niets of het woord <span class="tt wims_code_words">all</span> in.
  Bij dit laatste schakelt WIMS de controle op ipadressen voor uw klassen uit.
  </p><hr>
  !read help/hosts.phtml
  !reset secure
  !exit
!endif

!if has_empty=$error
  U hebt voor het oprichten van een klas niet alle vereiste informatie ingevuld.
  Graag aanvullen.<br>
  <span class="tt wims_code_words">$(wims_name_$error_subject) required.</span>
  !exit
!endif

!if too_short=$error
  Het veld <span class="tt wims_code_words">$(wims_name_$(error_subject))</span> lijkt wat te kort.
  !exit
!endif

!if bad_date=$error
  De ingevulde einddatum is niet correct.
  !exit
!endif

!if anti_date=$error
  De verloopdatum van Uw klas ligt voor vandaag...uw klas is dus verlopen <b>voor</b> dat
  "hij" is opgericht ;-)
  !exit
!endif

!if bad_level=$error
  Een onjuiste niveau waarde.
  !exit
!endif

!if bad_email=$error
  Uw ingevulde email adres blijkt niet valide te zijn.
  <p>
  Denk eraan dat het oprichten van klassen op deze server alleen kan
  slagen bij een <b>echt werkend email adres<b>.
  </p>
  !exit
!endif

!if existing=$error
  De klas $classname bestaat volgens mij al op deze server.
  !exit
!endif

!if pass_discord isin $error
  Het tweede wachtwoord komt niet overeen met het eerste.<br>
  Probeer het nog eens.
  !exit
!endif

!if bad_pass=$error
  Uw $(wims_name_$(error_subject)) bevat niet toegestane karakters.
  Gebruik een woord met alleen cijfers en/of letters zonder accenten en zonder spaties.
  !exit
!endif

!if bad_code=$error
  U hebt niet de juiste toegangscode ingevuld.<br>
  Hebt U een correct werkend email adres ingevuld?<p>
  Dit voorval wordt opgenomen in de logfiles van deze server.
  !exit
!endif

!if define_fail=$error or abuse=$error
  De server was niet in staat deze nieuwe klas op te nemen in de database.<br>
  Dit moet een interne fout van de software zijn.
  <p>
  Gaarne dit voorval melden bij de
  !mailurl $wims_site_manager systeem beheerder\
Interne serverfout (oprichten van een klas)
  Alvast bedankt!
  !exit
!endif

!if duplicate=$error
  U probeert een bestaande klas opnieuw op te richten...<br>
  Hebt U op de <b>reload</b>-knop van uw browser geklikt?
  In elk geval: Uw klas $classname bestaat gewoon op deze server,
  en deze poging wordt dus genegeerd.
  <div>
  !read adm/lang/links.phtml.$modu_lang
  </div>
  !exit
!endif

!if classdontexists=$error
  Die klas bestaat niet.
  !exit
!endif

!if notexempleclass=$error
  Deze klas is niet kopieerbaar.
  !exit
!endif

!if badcpmethod=$error
  Deze methode van kopieren kan niet worden uitgevoerd.
  Probeer opnieuw. Als deze fout zich blijft voordoen, neem dan kontact op met de site manager.
  !exit
!endif

!if cloningnotallow=$error
  Het kopieren van de klas is niet toegestaan door de beheerder ervan.
  !exit
!endif

!if badcloningpwd=$error
  Het ingevoerde wachtwoord voor kopieren is niet correct.
  !exit
!endif

!if disallowcloning=$error
  Het kopieren van deze klas mag niet worden uitgevoerd.
  !exit
!endif

!if subclasslimit=$error
  Vous avez atteint le nombre maximum de sous-classes ($max_subclasses).
  Il n'est pas possible d'en créer d'autres.
  !exit
!endif

!if bad_file iswordof $error
  Helaas, maar ik kan de <em>$wims_deposit</em> file niet als een klas backup archief bestand identificeren.
  Of er is  een verkeerd bestand gestuurd of het backup archief zelf is corrupt.
  !exit
!endif

!msg $error
