
<h3>C�mo incluir f�rmulas matem�ticas en los mensajes.</h3>

Adem�s de las caracter�sticas convecionales que le permiten navegar
a trav�s de los mensajes del foro, el foro de discusi�n
de WIMS hace posible incluir formulas matem�ticas de una manera muy
c�moda. Cuando el lector vea su mensaje, ver� las f�rmulas formateadas
autom�ticamente.
<p>
El gestor de foros de discusi�n usa la barra invertida <span class="wims_emph">\</span>
para detectar cu�ndo quiere usted que interprete lo que escribe como un s�mbolo
matem�tico o una f�rmula. La regla es como sigue:
</p><p>
Si quiere escribir una `\' en su mensaje y quiere que aparezca como una
barra invertida, la escribe dos veces: `<span class="tt">\\</span>'.
</p><p>
Si s�lo quiere insertar algunos s�mbolos matem�ticos o letras
griegas en su mensaje, no tiene m�s que escribir una 
<span class="tt">\</span>  seguida por el nombre del s�mbolo o de la letra griega. Por ejemplo, 
<span class="tt">\pi</span> le devuelve $m_pi, <span class="tt">\le</span> da $m_le, 
<span class="tt">\pm</span> da $m_pm, <span class="tt">\rightarrow</span> da 
$m_rightarrow, etc. Los nombres de los s�mbolos siguen la convenci�n
est�ndar de TeX. Aqu� tiene una
!href target=wims_help module=help/wimsdoc.en&subject=mathfonts#mathfonts lista de s�mbolos matem�ticos y sus nombres
 (sustituya <span class="tt">$$m_</span> por <span class="tt">\</span> en los nombres).
</p><p>
De forma m�s generalizada, para insertar una f�rmula matem�tica completa en el mensaje,
puede escribir la f�rmula de la forma normal en que la introducir�a en cualquier
software matem�tico o cualquier herramienta de c�lculo de WIMS. Para
formatear la f�rmula y mostrarla bonita en el foro de discusi�n, s�lo tiene
que encerrarla entre una par de par�ntesis precedidos por una barra invertida `\'.
Por ejemplo,, <span class="tt">\(x^3-3x+cos(2pi*x)^5)</span> le devuelve
!insmath x^3-3*x+cos(2pi*x)^5
, o <span class="tt">\(sqrt(x^2+y^2))</span> le da
!insmath sqrt(x^2+y^2)
. Puede escribir <span class="tt">\(integrate(x^2+1)dx)</span> para
!insmath integrate(x^2+1)*dx
, o <span class="tt">\(integrate(exp(x^2+1),x=1..infinity))</span> para
!insmath integrate(exp(x^2+1),x=1..infinity)
. Tambi�n puede escribir la suma
!insmath sum(1/n^2,n=1..infinity)
 usando <span class="tt">\(sum(1/n^2,n=1..infinity)</span>, o el producto
!insmath product(n/(n+1),n=1..infinity)
 usando <span class="tt">\(product(n/(n+1),n=1..infinity)</span>.
</p><p>
Puede obtener m�s ayuda acerca de c�mo introducir expresiones matem�ticas en
!href target=wims_help module=help/main&chapter=1&open=1_math#math esta p�gina
.
</p><p>
Para mostrar una matriz
!insmath [1,2,3;4,5,6;7,8,9]
, escribir�a <span class="tt">\([1,2,3;4,5,6;7,8,9])</span>. Se aceptan matrices anidadas
(y se representar�n correctamente).
</p><p>
Para expertos en TeX o LaTeX, tenga en cuenta que si el foro de discusi�n ve
una f�rmula encerrada entre un par de par�ntesis precedidos por <span class="tt">\</span>
que contiene barras invertidas `\', lo interpretar� como fuente de TeX, y
lo enviar� directamente a TeX para que lo formatee. Esto le permitir� escribir
f�rmulas muy complejas si sabe c�mo se escriben en TeX.
</p><p>
Finalmente, el bot�n `Vista previa' de la p�gina de composici�n de los mensajes
le permite comprobar si la f�rmula que ha introducido se mostrar� correctamente.
</p>
 <div class="wimscenter">
!href cmd=resume Volver a los mensajes.
</div>
