!set wims_module_log=error: $error

!if $error=nosupervisoremail
  Er is geen email adres bekend voor uw account !
  Het is dus niet mogelijk om via dit programma emails te versturen.
  !exit
!endif

!if empty_msg=$error
  Het email bericht is leeg !
  !exit
!endif

!if empty_user=$error
  Er zijn geen deelnemers geselecteerd. Kontroleer de filter instellingen.
  !exit
!endif

!if empty_mailuser=$error
  Geen van de deelnemers heeft een email adres opgegeven.
  !exit
!endif

!if noclass=$error
  Je bent niet aangemeld als leerling in een bestaande klas. Niet met de adresbalk van je browser prutsen !
  !exit
!endif

!if notsupervisor=$error
  Je bent niet aangemeld als ldocent / supervisor in een bestaande klas. Niet met de adresbalk van je browser prutsen !
  !exit
!endif

!if nouser=$error
  Aucun des participants de cette classe n'a défini d'adresse électronique. Il n'est donc pas possible d'envoyer de message !
  !exit
!endif

!if nousermail=$error
  Aucun participant avec une adresse électronique ne correspond aux critères que vous avez définis. Aucun message ne peut être envoyé.
  !exit
!endif

!if sendmailteacherclose=$error
  L'enseignant de cette classe a fermé l'expédition de message ou n'a pas défini d'adresse électronique. Il n'est donc pas possible de lui envoyer un message.
  !exit
!endif

!msg $error
