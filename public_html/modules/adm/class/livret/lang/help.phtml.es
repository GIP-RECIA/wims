!! to translate this help you just have to copy this file with correct extension (fr en de) and translate it !
!!

!let help_isread=yes

!if $wims_read_parm!=$empty
    !goto $wims_read_parm
!endif
!set wims_backslash_insmath=yes
<p>
El informe de competencias permite obtener una tabla de lectura sint�tica del conjunto
del trabajo valorado de los alumnos de la clase.
El informe consta de competencias (un m�ximo de $maxcomp) cada una de sus competencias
puede poseer varios niveles (hasta $maxpalier.).
</p><p>
Para cada nivel, el profesor puede definir la lista de las series de ejercicios de la clase
que se tendr�n en cuenta en el c�lculo de la puntuaci�n de adquisici�n del nivel.
</p><p>
El profesor de la clase puede decidir que las puntuaciones de algunas hojas virtuales
no cuenten para calcular el grado de adquisici�n de los niveles del informe de competencias
(Esto permite conservar los datos pedag�gicas de un a�o a otro
a la vez que permite empezar a validar ciertas competencias).</p>

El c�lculo del nivel de adquisici�n se efect�a de la siguiente forma:
<div class="wimscenter">
!insmath 10 \times \frac{\sum_{i=1}^{N} NM(x_{L[i;1],L[i;2]})}{\sum_{i=1}^{N} \delta_{L[i;1]}}
</div>
donde
<ul>
 <li> \(N\) es el n�mero de series de ejercicios que intervienen en el nivel.</li>
 <li> \(L\) es la lista de series de ejercicios que intervienen en el nivel.
 Cada elemento de la lista contiene el n�mero de hoja (escrito L[i;1]) y
 el n�mero de la serie de ejercicios en la hoja (escrito L[i;2]).</li>
 <li>
  !insmath X_{i,j}
  es la nota de calidad de la serie de ejercicios \(j\) de la hoja \(i\).</li>
 <li>
  !insmath \delta_i
  vale 1 si la hoja \( i\) no est� en la lista de las hojas desactivadas para el c�lculo del nivel de adquisici�n de los grados y \(0\) si no. </li>
 <li>
 NM(a) vale \(1\) si \(a\) es superior a la nota m�nima para considerar
 que se supera una serie y \(0\) si no (fijar la nota m�nima a \(0\) neutraliza esta opci�n).
</li>
</ul>
<p>
<b>Nota</b>:  Si cambia el estado de una hoja de c�lculo
(pasar de "En preparaci�n" a modo "Activo"),
los participantes de la clase deber�n dejar el informe de competencias
para que los cambios surtan efecto.
Los niveles de adquisici�n que se mostrar�n desde el momento que
el profesor cambia el estado de una hoja y el momento que
el participante abandona el informe no se corresponder�n con nada !!
</p>
!exit

:color
<p>
Para cada color se puede definir un texto que se mostrar� en la leyenda
coloreada al comienzo de cada tabla de competencias (para los alumnos y el profesor).
</p><p>
Los colores sin texto se muestran con el rango de porcentaje
de �xito al que corresponden.
</p><p>
En caso de uso de los colores de la clase (y no los del informe),
la leyenda coloreada se asigna autom�ticamente a la gama de porcentaje del �xito correspondiente.
</p>
!exit
