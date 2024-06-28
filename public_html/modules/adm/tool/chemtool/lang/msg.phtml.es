
!if no_auth iswordof $error
  Debe estar autenticado previamente para tener acceso a este módulo.
 !exit
!endif

!if no_module iswordof $error
 No ha especificado un módulo en desarrollo.
!exit
!endif

!if accountempty iswordof $error
  No tiene ningún módulo OEF en desarrollo disponible en su cuenta de Modtool. Por favor, créelo primero.
!exit
!endif

!if notype iswordof $error
  Debe especificar un método.
  !exit
!endif

!if noname iswordof $error
  Elija un archivo de descripción de estructura de molécula en su computadora.
  !exit
!endif

!msg $error

!!empty_data bad_data
