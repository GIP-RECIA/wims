!set wims_module_log=error: $error
<b>$wims_name_Error: </b>
!if $error iswordof not_supervisor bad_jday bad_date day_exists same_devoir\
  same_devoir2 toomany_todo day_dontexist
  !goto $error
!else
  !msg $error
  !exit
!endif

:not_supervisor
 Lo siento, pero la operaci�n de preparaci�n/modificaci�n del cuaderno de textos se reserva al profesor de la clase.
!exit

:bad_jday
 La fecha para los deberes no es v�lida.
!exit

:bad_date
 La fecha que quieren modificar no existe.
!exit

:day_exists
 La fecha introducida ya existe en el cuaderno de textos.
!exit

:same_devoir
 No pueden introducir dos fechas de deberes id�nticas.
!exit

:same_devoir2
 No pueden, a partir del mismo d�a, introducir dos veces la misma fecha de deberes.<br>
 Utilizar m�s bien el v�nculo
 !href cmd=new&job=adddate&filename=$jyear$jmonth$jday modificar una fecha
 .
!exit

:toomany_todo
 Ya alcanzaron el n�mero m�ximo de deberes que se pueden dar en dicha fecha.
!exit

:day_dontexist
 La date que vous avez saisie est invalide.
!exit
