!set wims_module_log=ERROR $error

!if $error=bad_password
 Het wachtwoord is afgekeurd. Probeer na 5 seconden opnieuw.<br>
 <span class="wims_warning">$wims_name_warning</span>!
 Elk wachtwoord dat binnen de volgende 5 seconden wordt ingevuld, wordt afgekeurd !
 <span id="badpwd"></span>.
 !exit
!endif

!if $error=in_exam
Je kan natuurlijk niet van klas veranderen tijdens een overhoring !
 !exit
!endif

!if $error=recent_rafale
Dit account is i.v.m. verdachte activiteiten voor 10 minuten geblokkeerd !
 !exit
!endif

!if $error=no_cgu
    De algemene voorwaarden voor het gebruik van deze server zijn nog niet geaccepteerd.
    Geef eerst goedkeuring aan de algemene gebruikers voorwaarden:
 !form reply
  !formcheckbox agreecgu list yes prompt $name_acceptcgu
  [
  !href cmd=help $name_seecgu
  ]
  !let save_logincgu=$auth_user
  <div class="wimscenter wimsform">
  <input type="submit" value="$wims_name_tosave">
  </div>

!formend
 !exit
!endif

!if $error=bad_loginmail
 Je wordt door het systeem niet herkend of je hebt bij de inschrijving geen geldig emailadres opgegeven.
 <br>
 Vraag je docent om een nieuw wachtwoord.
 <span class="wims_warning">$wims_name_warning</span> !
 Deze inlogprocedure wordt na een timeout van 5 seconden weer actief &nbsp;!
 <span id="badpwd"></span>.
 !exit
!endif

!if $error=bad_cas_connexion
  Er deed zich een probleem voor met de CAS verbinding ??
  <div class="tt">$response</div>
  !exit
!endif

!if $error=fullexamplecls
!! TODO_lang
  !changeto lang/msg.phtml.fr
  !exit
!endif

!msg $error
