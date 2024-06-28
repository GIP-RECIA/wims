!set wims_module_log=error: $error

!if $error=nosupervisoremail
  No indicaron correo electrónico. No les es pues posible enviar un correo electrónico.
  !exit
!endif

!if empty_msg=$error
  ¡Su mensaje es vacío!
  !exit
!endif

!if empty_user=$error
  No seleccionaron a ningún participante. Compruebe los filtros.
  !exit
!endif

!if empty_mailuser=$error
  Ningún de los participantes seleccionados tiene correo electrónico
  !exit
!endif

!if noclass=$error
  No estás identificado en una clase. ¡No te metas con la barra de direcciones del navegador!
  !exit
!endif

!if notsupervisor=$error
  No eres el profesor de esta clase. ¡No te metas con la barra de direcciones del navegador!
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
