!set wims_module_log=error: $error

!if no_pick=$error
  Por favor
  !href cmd=resume escoja un glosario
  antes de pulsar el bot�n  <span class="wims_button disabled">$wims_name_Insert</span>.
  !exit
!endif

!if not_supervisor=$error
  Lo siento, pero la operaci�n de modificaci�n del glosario
   est� reservada para el profesor registrado de una clase.
  !exit
!endif

!if bad_sheet=$error
  N�mero de glosario equivocado
  !exit
!endif

!if too_many_exos=$error
  El glosario $picksheet ya contiene el m�ximo de $max_exos
   objetos. Elimine algunos antes de insertar otros.
  !exit
!endif

!if already_exist=$error
  La glosa que desea agregar ya existe en el glosario $test.
  !exit
!endif

!msg $error
