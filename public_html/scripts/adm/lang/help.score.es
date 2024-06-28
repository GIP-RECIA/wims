<h2>Regla de cálculo de las hojas de trabajo</h2>

!set wims_backslash_insmath=yes

!if $wims_user=supervisor
<p>
Por cada ejercicio el servidor calcula tres indicadores del trabajo de cada participante (el indicador de acumulación (\(i_0)), el indicador de éxito (\(i_1)) y el indicador de adquisición \((i_2))) y una nota de calidad \(q).

Para explicar cómo se calculan los distintos indicadores, supongamos que el número de puntos requeridos en un ejercicio es \(10n\) donde \(n\) es un entero, y que el estudiante ha hecho este ejercicio \(p\) veces, obteniendo los puntajes \(x_1, x_2, x_3, ..., x_p\) (que son números entre 0 y 10).
</p>
<ul><li>
El indicador de acumulación \((i_0)) es la suma de los puntajes obtenidos (con un tope de \(10 n\))
dividido por \(10n\): \(i_0=min(x_1+...+x_p, 10*n)/(10*n)).
Se muestra en los resultados del estudiante como un porcentaje.
</li><li>
Escribamos \(y_1\geq y_2\geq ... \geq y_p\) los puntajes obtenidos ordenados en orden decreciente.

El indicador de éxito (\(i_1)) es el promedio de los \(n\) mejores puntajes,
dividido por 10:
 \(i_1 = (y_1+...+y_n)/(n*10)) si el número \(p\) de puntajes obtenidos es superior a \(n\) y
 \(i_1 = (y_1+...+y_p)/(n*10)) si
el número \(p\) de puntajes obtenidos es inferior a \(n).
Se muestra como un porcentaje.
</li><li>
El indicador de adquisición (\(i_2)) es el menor de los \(n\) mejores puntajes
dividido por 10:
\(i_2 = 0) si el número \(p\) de puntajes obtenidos es menor a \(n\)
y \(i_2= y_n/10\) si \(p\geq n\).
</li></ul>
<p>
Por ejemplo, si \(n=2\) y si los puntajes son 7, 5 y 3, entonces \(i_0 = 0.75\) (75%),
\(i_1=0.6\) (60%) y \(i_2=0.5) (50%).
</p><p>
La nota de calidad es el promedio ponderado e incremental de los puntajes (es decir, los últimos puntajes obtenidos tienen más importancia que los primeros). Este indicador se ajusta penalizando los intentos sin respuesta, de la siguiente manera:
si el número de intentos no terminados \(s_n\), es estrictamente mayor a \(5+2*s_t\),
donde \(s_t\) es el número de intentos terminados (con alguna nota),
la nota de calidad se multiplica por \(\frac{2 s_t}{s_n-4} < 1\).
</p><p>
En seguida, por cada hoja el servidor calcula 
</p>
<ul><li>
el promedio ponderado (\(I_0, I_1, I_2)) de los respectivos indicadores \(i_0, i_1, i_2) de todos los ejercicios de la hoja, usando como coeficientes de ponderación el producto del peso del ejercicio por el número de puntos requeridos;
</li><li>
 el promedio ponderado \(Q\) de los coeficientes de calidad \(q\) usando como coeficientes de ponderación el producto del peso del ejercicio por el indicador de acumulación \(i_0\) del ejercicio (así, se tiene en cuenta la calidad de lo que se ha hecho).
</li>
</ul>
<p>
Si la nota de calidad es menor a 1 para un ejercicio,
el indicador \(i) usado para el cálculo de cada uno de los indicadores \(I)
se establece como 0 para ese ejercicio;
si la nota de calidad está entre 1 y 2,
el indicador  \(i) usado para el cálculo de cada uno de los indicadores \(I)
 se divide por 2.
</p><p>
Los valores de \(Q, I_0, I_1, I_2\) se entregan por cada hoja
en la página de seguimiento individual de los estudiantes.
</p><p>
El servidor calcula entonces la nota de la hoja siguiendo una regla de cálculo que usted define (puede escoger la regla y el indicador \(I\)
usado entre \(I_0, I_1, I_2)).

A continuación se muestran las opciones posibles:
</p>

!reset table_center
$table_header
$table_hdtr<th>Regla</th><th>Fórmula</th><th>Explicación</th></tr>
$table_tr<td>0</td><td> \($scoremax * $(list[1;]) \)
 </td><td>máximo entre el indicador escogido y la calidad.</td></tr>
$table_tr<td>1</td><td> \($scoremax *$(list[2;]) \)
 </td><td>La calidad no se toma en cuenta. Se obtiene la nota máxima cuando el indicador escogido alcanza el valor máximo.</td></tr>
$table_tr<td>2</td><td>\($scoremax*$(list[3;])\)
 </td><td>La calidad tiene un efecto reducido sobre la nota.</td></tr>
$table_tr<td>3</td><td>\($scoremax*$(list[4;])\)
 </td><td>Mayor efecto de la calidad.</td></tr>
$table_tr<td>4</td><td>\($scoremax*$(list[5;])\)
 </td><td>Para obtener una nota $scoremax, se debe tener todos los puntos requeridos
   (100%) sin cometer errores (calidad=10).</td></tr>
$table_tr<td>5</td><td>$\($scoremax*$(list[6;])\)
 </td><td></td></tr>
$table_end
!read help/sheetscore.phtml
!else
Para esta hoja, su profesor ha escogido la siguiente manera de calcular la nota. El número de puntos requeridos es \(10n\).
Para cada uno de los ejercicios, se calcula
<ul>
<li>
!if $help_sw=0
  \(i\) : la suma de los puntajes con un tope superior de \(10n\)
que se divide por \(10n\) (nivel de acumulación)
!endif
!if $help_sw=1
 el promedio \(i\) de los \(n\) mejores puntajes divido por 10 (nivel de éxito):
 si sus puntajes son  \(y_1\geq y_2\geq ... \geq y_p \) ordenados por orden decreciente:
 \(i  = (y_1+...+y_n)/(10n)\) si el número \(p\) de puntajes obtenidos es mayor a \(n\)
 y
 \(i = (y_1+...+y_p)/(10n)) si el número \(p\) de puntajes obtenidos es menor a \(n\).
!endif
!if $help_sw=2
 el mínimo \(i\) de los \(n\) mejores puntajes divido por 10 (nivel de adquisición):
 si sus puntajes son \(y_1\geq y_2\geq ... \geq y_p \) ordenados en orden decreciente:
  \(i  = 0\) si el número \(p\) de puntajes obtenidos es menor a \(n) y luego
 \(i = y_n/10).
!endif
</li>
!if $help_level>0
<li>
la calidad \(q\) de los puntos obtenidos en los ejercicios es un promedio ponderado. Los últimos puntajes tienen un peso mayor que los primeros. Tenga cuidado, si usted reinicia el ejercicio muchas veces sin completarlo, la nota de calidad disminuirá.
</li>
!endif
</ul>
La nota de la hoja se calcula a partir de los promedios ponderados de
\(I) y \(Q) de los indicadores \(i) y \(q) de cada ejercicio.

!if $help_level>0
Si la nota de calidad es menor a 1 para un ejercicio,
el indicador \(i\) será 0 para ese ejercicio;
si la nota de calidad está entre 1 y 2,
el indicador \(i\) se divide por 2.
!else
 Sin embargo, si usted cometió demasiados errores o si intentó muchas veces un ejercicio sin terminarlo, esta nota puede bajar. 
Pregunte a su profesor.
!endif
<p>
 La nota de la hoja se calcula como
<span class="bold">$scoremax $(list[$help_level+1;])</span>.
</p>
!endif
