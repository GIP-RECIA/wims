
!if no_auth iswordof $error
  Debe estar autenticado previamente para tener acceso a este m�dulo.
 !exit
!endif

!if no_module iswordof $error
 No ha especificado un m�dulo en desarrollo.
!exit
!endif

!if accountempty iswordof $error
  No tiene ning�n m�dulo OEF en desarrollo disponible en su cuenta de Modtool. Por favor, cr�elo primero.
!exit
!endif

!if notype iswordof $error
  Debe especificar un m�todo.
  !exit
!endif

!if noname iswordof $error
  Elija un archivo de descripci�n de estructura de mol�cula en su computadora.
  !exit
!endif

!msg $error

!!empty_data bad_data
