!set wims_module_log=error: $error
!set level=$[$level-1]

<span class="wims_warning">$wims_name_Error</span>:

!if no_title iswordof $error
 Por favor, d� un t�tulo a este ejercicio en preparaci�n.
 !exit
!endif

!if empty_title iswordof $error
 El software es incapaz de encontrar el t�tulo de su ejercicio. 
 �Lo ha definido?
 !exit
!endif

!if no_answer iswordof $error
 Su ejercicio debe pedir al menos una respuesta (num�rica, funcional
 u opciones m�ltiples).
 !exit
!endif

!if no_statement iswordof $error
 El contenido de su ejercicio est� incompleto: no ha definido el enunciado
 del ejercicio.
 !exit
!endif

!if no_reply2 iswordof $error
 El contenido de su ejercicio est� incompleto: no hay peticiones v�lidas de
 respuestas (una petici�n de respuesta es v�lida solamente si se han
 completado todos los campos).
 !exit
!endif

!if def_fail iswordof $error
 El software no ha podido generar un ejercicio v�lido a partir de los
 datos que ha introducido. Hay errores en lo que ha escrito.
 
  <div class="tt"><pre>$oef2wims_out</pre></div>
 !if $mode!=$empty
  !set level=1
 !else
  !set level=2
 !endif
 !exit
!endif

!if name_exhaust iswordof $error
 Hay ya varios ejercicios en su clase que tienen el mismo t�tulo que el
 que acaba de crear. Si estos ejercicios son REALMENTE diferentes,
 elija otro t�tulo para el ejercicio ejercicio actual
 antes de grabarlo.
 !exit
!endif

!if name_exhaustpub iswordof $error 
Se han enviado ya varios ejercicios con el mismo
t�tulo que el que quiere crear. Si no est� enviando 
el mismo ejercicio varias veces,elija otro t�tulo para 
su ejercicio actual antes de grabarlo.
 !exit
!endif

!if unknown iswordof $error
 El registro de su ejercicio ha fallado por alguna raz�n desconocida. Lo sentimos.
 !exit
!endif

!if already iswordof $error
 El ejercicio que quiere enviar ya est� en el servidor.
 !exit
!endif

!if not_class iswordof $error
 Su solicitud es ilegal.
 !exit
!endif

!if not_supervisor iswordof $error
 Hmm... �Por supuesto, solamente los profesores pueden borrar los ejercicios
 de la clase!
 <p>Su solicitud se ha rechazado.</p>
 !exit
!endif

!if not_exist iswordof $error
 !if $catmodule!=$empty
  El ejercicio <span class="tt">$del</span> de <span class="tt">$catmodule</span>
  que desea importar no existe o usted no est� autorizado a
  importarlo.
 !else
  El ejercicio <span class="tt">$del</span> que quer�a modificar/eliminar no existe
  en su clase.
 !endif
 !exit
!endif

