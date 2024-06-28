!set wims_module_log=error: $error

!if badoldvaluesnb=$error
  El número de valores tomados por esta antigua variable técnica es demasiado alto para que se pueda recuperar.
  !exit
!endif

!if not_supervisor=$error
  Lo siento, pero sólo el profesor puede utilizar esta característica.
  !exit
!endif

!if nameforbidden=$error
  Lo siento, las variables técnicas no pueden tener nombres del tipo examen, hoja, cuestionario, manual seguido de un número.
  !exit
!endif

!if bad_class=$error
  No estás conectado a una clase.
  !exit
!endif

!if toomanytechvar=$error
  Ya ha alcanzado el número máximo permitido de variables técnicas.
  !exit
!endif

!if badnamelen=$error
  El nombre de la variable técnica propuesta no tiene la longitud de caracteres correcta. (limitación a $MAXcharname caracteres).
  !exit
!endif

!if namealreadyuse=$error
  El nombre de la variable técnica propuesta ya está en uso. ¡Elija otro!
  !exit
!endif

!if badvaluenb=$error
  La lista de valores posibles no puede estar vacía y no puede tener más de $MAXnbvalue élementos.
  !exit
!endif

!if badtechvarnumber=$error
  Hay un problema de identificación de la variable técnica. No utilice la barra de direcciones del navegador!
  !exit
!endif

!if valuedisappear=$error
  Los valores de la variable técnica que están en uso en la clase no se pueden borrar. !exit
  !exit
!endif

!if nolocalvartech=$error
  No hay una variable técnica editable para este estudiante.
  !exit
!endif

!if nooldvar=$error
  Ninguna variable técnica antigua detectada en esta estructura.
  !exit
!endif

!if $error=oldvar_nouser
  La variable técnica antigua que quiere crear no está definida para ningún estudiante de la clase. Probablemente esta variable pertenece a otra clase del grupo. No se ha realizado la creación.
  !exit
!endif

!if $error=oldvar_badvar
  La variable antigua que usted está tratando de transferir no corresponde a ninguna variable antigua transferible. No utilice la barra de direcciones del navegador!
  !exit
!endif

!if $error=witholdvar
  Se han detectado variables técnicas antiguas. Podría intentado recuperarlas utilizando el enlace <i>$wims_name_oldvar</i>, antes de crear nuevas variables?
  !exit
!endif

!if $error=activsheetindiv
  Modificar una variable para la cual la columna "Número (s) de hoja activa impactada" no está vacía, modificará el contenido de las hojas activas cuyos números se indican.
  Las calificaciones del estudiante en estas hojas podrían cambiar potencialmente.
 !exit
!endif

!msg $error
