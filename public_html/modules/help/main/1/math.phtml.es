!set lang_exists=yes

<p>
  Cuando trabaje con WIMS, a menudo se le pedirá que introduzca expresiones
matemáticas.
</p>
Las expresiones matemáticas pueden teclearse del modo
habitual:
<ul>
  <li>
    <code>3*x+5</code> para escribir
    !insmath 3x+5
  </li><li>
    <code>sin(pi*x)</code> para
    !insmath sin(pi*x)
  </li><li>
    <code>y^3+1</code> para
    !insmath y^3+1
  </li><li>
    <code>(x+1)/(y-1)</code> para
    !insmath {x+1 \over y-1}
  </li><li>etc...</li>
</ul>

<p>
Además, WIMS contiene un analizador inteligente que puede corregir
``errores'' comunes en las expresiones matemáticas. Por ejemplo, <tt>3x+5</tt>
será corregido como <tt>3*x+5</tt>, <tt>sin x</tt> será corregido a
<tt>sin(x)</tt>, etc. Pero no le recomendamos que confíe demasiado en este
corrector, porque en ocasiones las ambigüedades de las expresiones pueden
llevar a interpretaciones erróneas. Siempre es mejor teclear las expresiones
matemáticas ``correctamente'', aunque sea a menudo laborioso.
</p><p>
Aquí presentamos una lista de funciones matemáticas y el modo (correcto) 
de introducirlas. WIMS reconoce estas funciones siempre que tengan sentido.
(Algunos módulos pueden aceptar funciones adicionales; por favor consulte
las páginas de ayuda de los módulos.)
</p><p>
  !set x=<i class="wims_mathfont">x</i>
  !set y=<i class="wims_mathfont">y</i>
  Puede sustituir $x por cualquier subexpresión de la tabla siguiente.
</p>

!set table_th = función, descripción, cómo teclearla

!set table_descs=constante bien conocida\
base del logaritmo natural\
valor absoluto de $x\
signo de $x\
raíz cuadrada de $x\
el entero más próximo a $x\
el entero mayor\
el entero menor\
exponencial\
logaritmo natural\
logaritmo de base 10\
seno trigonométrico\
coseno trigonométrico\
tangente trigonométrica\
cotangente trigonométrica\
inversa trigonométrica\
inversa trigonométrica\
inversa trigonométrica\
seno hiperbólico\
coseno hiperbólico\
tangente hiperbólica\
inversa hiperbólica\
inversa hiperbólica\
iinversa hiperbólica\
El mayor de $x e $y\
El menor de $x e $y\
Máximo Común Divisor\
Mínimo Común Múltiplo\

!read 1/math.phtml.common
