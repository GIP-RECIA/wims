!goto $wims_read_parm

:general
<h2>Operaci�n general</h2>
<p>
Cuando hace clic en el t�tulo de un ejercicio en la hoja, hace
 Aparece un enunciado del ejercicio. Para obtener una nota sobre el ejercicio,
  Deben responderse todas las preguntas del ejercicio. La calificaci�n otorgada es
una nota sobre 10.
</p>
<p>
 Para algunos ejercicios, el enunciado puede estar compuesto por preguntas.
que aparecen a medida que env�as tus respuestas
(pueden ser ejercicios de pasos o series de ejercicios);
</p>
<p>
  Debe haber completado un ejercicio antes de comenzar a trabajar en otro.
 ejercicio (de lo contrario, no se registrar� la calificaci�n obtenida en el 1er ejercicio).
No puede volver a las respuestas que ya envi�.
(en general, no debe utilizar los men�s de su navegador para
cambiar de p�gina o volver a la p�gina que dej�).
</p>
<p>
Cuando repite el mismo ejercicio, la redacci�n de ese ejercicio puede variar.
</p>
<p><span class = "wims_warning"> Advertencia</span>:por razones de seguridad,
el tiempo para responder a un ejercicio es limitado;
 si no ingresa sus respuestas a los
 $[floor($idle_time / 60)] minutos despu�s de la visualizaci�n de la declaraci�n,
es posible que no se tengan en cuenta.
</p>
<h2>$(wims_name_thsheet [3])</h2>
Si el n�mero de puntos necesarios para un ejercicio es superior a 10, significa
 que tu profesor quiere que hagas el mismo ejercicio varias veces.

<h2>$(wims_name_thsheet [14])</h2>
Si <span class = "wims_code_variable"> $(wims_name_thsheet [14]) X / Y</span>
aparece en la descripci�n del ejercicio, esto significa que
tu profesor ha decidido limitar la cantidad de intentos que puedes
 hacer en un ejercicio cuando la grabaci�n de notas en la hoja est� abierta:
<ul> <li>
<span class = "wims_code_variable"> Y</span> designa el n�mero m�ximo de intentos que
se contar� para definir su puntuaci�n en la hoja;
</li> <li> <span class = "wims_code_variable"> X</span> designa la cantidad de pruebas
 publicado que ya ha realizado.
</ul>
Tenga en cuenta que el trabajo en un ejercicio se considera un ensayo que ha completado
 ejercicio o no, ya sea que haya pausado la grabaci�n de notas o no.
<h3>Ejemplo 1</h3>
 Si en un ejercicio, est� escrito <span class = "wims_code_variable"> $(wims_name_thsheet [14]) 0/4</span> y si
 la grabaci�n de notas est� abierta en la hoja, esto significa que:
<ul> <li>
 no has trabajado en este ejercicio desde que tu profesor abri�
 anotando notas en esta hoja;
</li> <li>
la puntuaci�n obtenida en este ejercicio no se tendr� en cuenta
 para el c�lculo de la puntuaci�n en la hoja solo si se cumplen las dos condiciones siguientes:
<ol> <li>
esta puntuaci�n se obtiene en uno de los siguientes 4 ensayos de este ejercicio y
durante el per�odo en que la grabaci�n de notas est� abierta;
</li> <li>
no ha detenido la grabaci�n de notas.
</li></ol>
</li></ul>

<h3>Ejemplo 2</h3>
Si en un ejercicio est� escrito <span class = "wims_code_variable"> $(wims_name_thsheet [14]) 5/5</span>, esto significa
 que ha utilizado las 5 pruebas autorizadas por su profesor. Si trabajas desde
  de nuevo en este ejercicio, no se tendr� en cuenta su puntuaci�n en este ejercicio.

<h2>$(wims_name_thsheet [7])</h2>
La nota <span class = "wims_code_variable"> $(wims_name_thsheet [7])</span>
en un ejercicio tiene en cuenta la puntuaci�n obtenida en cada intento y el n�mero de intentos realizados.
<p>
Haga clic en el enlace <span class = "text_icon myscore"> $wims_name_myscore</span>
para averiguar la nota que tiene en esta hoja, luego en
<span class = "wims_button_help disabled"> Regla de c�lculo</span>
para saber c�mo se calculan los diferentes indicadores de su trabajo en la hoja.
</p>
!exit

:printversion
<h2>$wims_name_printable</h2>
No todos los ejercicios tienen una versi�n imprimible.
Para los ejercicios cuya declaraci�n aparece a medida que ingresa sus respuestas,
la versi�n imprimible solo mostrar� la primera parte de la declaraci�n.

<h2>$wims_name_exolog</h2>
Cuando haya completado un ejercicio, un v�nculo <span class = "text_icon exolog"> $wims_name_exolog</span>
puede permitirle realizar un seguimiento de la declaraci�n que recibi� y las respuestas
que ingresaste. Esta grabaci�n tambi�n ser� visible para tu profesor.
Entonces use este enlace si no comprende la respuesta dada por la computadora
 y quieres hablar con tu profesor al respecto. <br>
Tenga en cuenta que solo se pueden mantener registros de ejercicios de $wims_class_exolog
al mismo tiempo.
Las grabaciones posteriores borrar�n los primeros ejercicios grabados.
!exit
