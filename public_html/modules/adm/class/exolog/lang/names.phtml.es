!set lang_exists=yes

!set name_noexercise= No tiene ning�n ejercicio que se pueda grabar.
!set name_listexercise=!nosubst Pueden grabarse los ejercicios de la hoja de trabajo $logsheet
!set name_noexercise2=No se ha grabado ning�n ejercicio de
!set name_click= !nosubst Estos son los ejercicios grabados de $(names[1]) $(names[2]).\
Pulse en la fecha para reproducir el ejercicio correspondiente.

!distribute items Pasos,N�mero \
into name_Step,name_number

!set name_source=fuente
!set name_sendmail=�Error?
!set name_bug=Si cree que el ejercicio tiene un error, env�e un correo electr�nico haciendo clic\
  en el bot�n <span class = "wims_button disabled">$name_sendmail</span> y colocando el archivo \
  <span class = "wims_button disabled">$name_source</span> como archivo adjunto.

!! TODO_lang
!set name_ssendmail=�Avisar al maestro de clase? (Tambi�n puede ingresar un mensaje para su maestro)
!set name_msg=!nosubst El alumno $ufirst $ulast ha guardado el $unow un ejercicio en la clase $uclass de $ueta sous la r�f�rence $uref.
!set name_comment=Agreg� el siguiente comentario:
!set name_exolog=Guardar los detalles de un ejercicio
!set wims_name_SE_mod=Mensaje para el estudiante
