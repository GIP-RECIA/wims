
!set wims_module_error=error: $error

<span class="wims_warning">$wims_name_Error</span>.

!if bad_sheet iswordof $error
  Nombre de hoja de trabajo inválido.
  !exit
!endif

!if too_many_print iswordof $error
  Ha pedido demasiadas versiones impresas.
  !href cmd=reply&job=read $wims_name_back2
  !exit
!endif

!if sheet_hidden iswordof $error
  Cette feuille de travail n'est pas accessible pour vous. Ne jouez pas avec la barre d'adresse !!
  !href cmd=reply&job=read $wims_name_back2
  !exit
!endif

!if bad_maxsheet=$error
  El número de hojas está limitado a $max_sheets. No puede entonces crear más.
  !exit
!endif
