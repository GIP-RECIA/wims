
!set wims_module_error=error: $error

<span class="wims_warning">$wims_name_Error</span>.

!if bad_sheet iswordof $error
  Ongeldige naam voor een werkblad.
  !exit
!endif

!if too_many_print iswordof $error
  U hebt te veel verzoeken gedaan tot het aanmaken van een printversie
  !href cmd=reply&job=read $wims_name_back2
  !exit
!endif

!if sheet_hidden iswordof $error
    Dit werkblad is niet beschikbaar...niet spelen met de adresbalk !
  !href cmd=reply&job=read $wims_name_back2
  !exit
!endif

!if bad_maxsheet=$error
  Het maximum aantal werkbladen is ingesteld op $max_sheets. Er kan geen nieuw werkblad meer worden aangemaakt.
  !exit
!endif

