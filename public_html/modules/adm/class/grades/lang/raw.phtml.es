
Aqu� est�n los fuentes separados por comas de las calificaciones introducidas
manualmente, las puede modificar directamente (ver las
explicaciones de abajo).

!form reply
!mexec catraw.sh
<input type="submit" name="reg" value="$wims_name_tosave">

!formend

<span class="wims_warning">$wims_name_warning</span>.�El servidor no comprueba los datos que env�a para su grabaci�n!
<p>
Por favor, no modifique la estructura de l�neas del archivo, los
caracteres especiales de separaci�n de los campos (`:' y `,'), ni los nombres de los
participantes. En caso contrario sus puntuaciones podr�an llegar a
ser inutilizables.
<p>
<b>Estructura del archivo.</b> Cada l�nea debe comenzar
con el caracter `:', excepto las l�neas segunda y tercera.
<p>
La primera l�nea es el porcentaje de la media de las puntuaciones introducidas
manualmente en el c�lculo del total.
<p>
La segunda l�nea es una lista de los t�tulos de la columna de puntuaciones.
<p>
La tercera l�nea es la lista de pesos de cada columna.
<p>
Las otras l�neas son listas de campos separados por comas:
el campo 1 es el nombre de acceso del participante, el campo 2 es el nombre
real, y el resto son sus notas columna por columna.

<p>

