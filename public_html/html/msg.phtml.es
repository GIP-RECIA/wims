
!if empty_data iswordof $wims_error
  Ha enviado una petici�n incompleta. Por favor, complete sus datos antes de
  enviarlos.
  !exit
!endif

!if double_reply iswordof $wims_error
  Ya ha enviado una respuesta a este problema, que ha sido analizada y
  puntuada. Las respuestas repetidas se ignoran (�No use el bot�n `Recargar'
  de su navegador para reenviar respuestas!).
  !exit
!endif

!if bad_data iswordof $wims_error
  No pude evaluar los valores que envi�. �Error de tipograf�a? !exit
  !exit
!endif

!if no_ldap_parameter iswordof $wims_error
  Vous devez remplir les champs marqu�s d'un ast�risque. Consultez pour cela
  le gestionnaire de votre annuaire ldap.
  !exit
!endif

!if bad_class iswordof $wims_error
  Extra�o, pero encuentro que su clase no es v�lida!
  !exit
!endif

!if bad_day iswordof $wims_error or day_dontexist iswordof $wims_error
  La fecha introducida no es v�lida.
  !exit
!endif


!if not_supervisor iswordof $wims_error
  Lo siento, pero esta operaci�n se reserva a los profesores registrados de una clase.
  !exit
!endif

!if nouser iswordof $wims_error or bad_user iswordof $wims_error \
  or bad_usercls iswordof $wims_error
  �Extra�o pero el participante no parece existir!!!!
  !exit
!endif

!if insert_fail iswordof $wims_error
  El software no ha podido insertar su trabajo en la base de datos. Por
  favor, compruebe sus datos.
  !exit
!endif

!if bad_pass iswordof $wims_error
  Mala contrase�a: debe tener entre 4 y 16 caracteres,
  cartas y cifras solamente. �Y la contrase�a repetida debe ser id�ntica
  primero! Intente a�n.
  !exit
!endif

!if bad_auth iswordof $wims_error
  Fracaso de autenticaci�n. Vuelve a intentar.
  !exit
!endif

!if bad_login iswordof $wims_error
  Su identificador de usuario contiene caracteres ilegales. <p>
  Por favor utilice una palabra que contenga �nicamente cifras o letras
  sin acentos y sin espacios entre ellas.
  </p>
  !exit
!endif

!if closedmodexcls iswordof $wims_error
  Este m�dulo no es accesible desde una clase de ejemplo.
  !exit
!endif

Tipo de error: $wims_error $wims_error_parm.
