!set wims_module_log=error: $error

!if badoldvaluesnb=$error
  El n�mero de valores tomados por esta antigua variable t�cnica es demasiado alto para que se pueda recuperar.
  !exit
!endif

!if not_supervisor=$error
  Lo siento, pero s�lo el profesor puede utilizar esta caracter�stica.
  !exit
!endif

!if nameforbidden=$error
  Lo siento, las variables t�cnicas no pueden tener nombres del tipo examen, hoja, cuestionario, manual seguido de un n�mero.
  !exit
!endif

!if bad_class=$error
  No est�s conectado a una clase.
  !exit
!endif

!if toomanytechvar=$error
  Ya ha alcanzado el n�mero m�ximo permitido de variables t�cnicas.
  !exit
!endif

!if badnamelen=$error
  El nombre de la variable t�cnica propuesta no tiene la longitud de caracteres correcta. (limitaci�n a $MAXcharname caracteres).
  !exit
!endif

!if namealreadyuse=$error
  El nombre de la variable t�cnica propuesta ya est� en uso. �Elija otro!
  !exit
!endif

!if badvaluenb=$error
  La lista de valores posibles no puede estar vac�a y no puede tener m�s de $MAXnbvalue �lementos.
  !exit
!endif

!if badtechvarnumber=$error
  Hay un problema de identificaci�n de la variable t�cnica. No utilice la barra de direcciones del navegador!
  !exit
!endif

!if valuedisappear=$error
  Los valores de la variable t�cnica que est�n en uso en la clase no se pueden borrar. !exit
  !exit
!endif

!if nolocalvartech=$error
  No hay una variable t�cnica editable para este estudiante.
  !exit
!endif

!if nooldvar=$error
  Ninguna variable t�cnica antigua detectada en esta estructura.
  !exit
!endif

!if $error=oldvar_nouser
  La variable t�cnica antigua que quiere crear no est� definida para ning�n estudiante de la clase. Probablemente esta variable pertenece a otra clase del grupo. No se ha realizado la creaci�n.
  !exit
!endif

!if $error=oldvar_badvar
  La variable antigua que usted est� tratando de transferir no corresponde a ninguna variable antigua transferible. No utilice la barra de direcciones del navegador!
  !exit
!endif

!if $error=witholdvar
  Se han detectado variables t�cnicas antiguas. Podr�a intentado recuperarlas utilizando el enlace <i>$wims_name_oldvar</i>, antes de crear nuevas variables?
  !exit
!endif

!if $error=activsheetindiv
  Modificar una variable para la cual la columna "N�mero (s) de hoja activa impactada" no est� vac�a, modificar� el contenido de las hojas activas cuyos n�meros se indican.
  Las calificaciones del estudiante en estas hojas podr�an cambiar potencialmente.
 !exit
!endif

!msg $error
