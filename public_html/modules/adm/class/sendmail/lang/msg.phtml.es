!set wims_module_log=error: $error

!if $error=nosupervisoremail
  No indicaron correo electr�nico. No les es pues posible enviar un correo electr�nico.
  !exit
!endif

!if empty_msg=$error
  �Su mensaje es vac�o!
  !exit
!endif

!if empty_user=$error
  No seleccionaron a ning�n participante. Compruebe los filtros.
  !exit
!endif

!if empty_mailuser=$error
  Ning�n de los participantes seleccionados tiene correo electr�nico
  !exit
!endif

!if noclass=$error
  No est�s identificado en una clase. �No te metas con la barra de direcciones del navegador!
  !exit
!endif

!if notsupervisor=$error
  No eres el profesor de esta clase. �No te metas con la barra de direcciones del navegador!
  !exit
!endif

!if nouser=$error
  Aucun des participants de cette classe n'a d�fini d'adresse �lectronique. Il n'est donc pas possible d'envoyer de message !
  !exit
!endif

!if nousermail=$error
  Aucun participant avec une adresse �lectronique ne correspond aux crit�res que vous avez d�finis. Aucun message ne peut �tre envoy�.
  !exit
!endif

!if sendmailteacherclose=$error
  L'enseignant de cette classe a ferm� l'exp�dition de message ou n'a pas d�fini d'adresse �lectronique. Il n'est donc pas possible de lui envoyer un message.
  !exit
!endif

!msg $error
