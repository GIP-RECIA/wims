!set wims_module_log=error: $error

<span class="wims_warning">$wims_name_Error</span>.

!if no_reccourse=$error
  The transfer of these activities is not possible.
  !exit
!endif

!if not_supervisor=$error
  Helaas, deze handeling is alleen voorbehouden voor de supervisor van een klas.
  !exit
!endif

!if bad_classpass=$error
  Helaas, niet het juiste wachtwoord ingevuld.
  De gegevens worden niet gewijzigd.
  !exit
!endif

!if bad_user=$error
  De student <span class="tt wims_login">$checkuser</span> komt niet voor in de database.
  !exit
!endif

!if badimgformat=$error
  Le fichier que vous avez envoyé n'est pas une image.
  !exit
!endif

!if filetoobig=$error
  Le fichier que vous avez envoyé dépasse la capacité maximale autorisé après conversion de l'image. Veuillez envoyer une image moins volumineuse.
  !exit
!endif

!if quota_file=$error
  La capacité maximale de stockage de la classe est atteinte. Il n'est pas possible de sauvegarder votre image.
  !exit
!endif

!msg $error
