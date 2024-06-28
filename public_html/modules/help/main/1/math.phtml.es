!set lang_exists=yes

<p>
  Cuando trabaje con WIMS, a menudo se le pedir� que introduzca expresiones
matem�ticas.
</p>
Las expresiones matem�ticas pueden teclearse del modo
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
Adem�s, WIMS contiene un analizador inteligente que puede corregir
``errores'' comunes en las expresiones matem�ticas. Por ejemplo, <tt>3x+5</tt>
ser� corregido como <tt>3*x+5</tt>, <tt>sin x</tt> ser� corregido a
<tt>sin(x)</tt>, etc. Pero no le recomendamos que conf�e demasiado en este
corrector, porque en ocasiones las ambig�edades de las expresiones pueden
llevar a interpretaciones err�neas. Siempre es mejor teclear las expresiones
matem�ticas ``correctamente'', aunque sea a menudo laborioso.
</p><p>
Aqu� presentamos una lista de funciones matem�ticas y el modo (correcto) 
de introducirlas. WIMS reconoce estas funciones siempre que tengan sentido.
(Algunos m�dulos pueden aceptar funciones adicionales; por favor consulte
las p�ginas de ayuda de los m�dulos.)
</p><p>
  !set x=<i class="wims_mathfont">x</i>
  !set y=<i class="wims_mathfont">y</i>
  Puede sustituir $x por cualquier subexpresi�n de la tabla siguiente.
</p>

!set table_th = funci�n, descripci�n, c�mo teclearla

!set table_descs=constante bien conocida\
base del logaritmo natural\
valor absoluto de $x\
signo de $x\
ra�z cuadrada de $x\
el entero m�s pr�ximo a $x\
el entero mayor\
el entero menor\
exponencial\
logaritmo natural\
logaritmo de base 10\
seno trigonom�trico\
coseno trigonom�trico\
tangente trigonom�trica\
cotangente trigonom�trica\
inversa trigonom�trica\
inversa trigonom�trica\
inversa trigonom�trica\
seno hiperb�lico\
coseno hiperb�lico\
tangente hiperb�lica\
inversa hiperb�lica\
inversa hiperb�lica\
iinversa hiperb�lica\
El mayor de $x e $y\
El menor de $x e $y\
M�ximo Com�n Divisor\
M�nimo Com�n M�ltiplo\

!read 1/math.phtml.common
