<div class="wimsbody">
<h1>
El logo de WIMS
</h1>

<img src="gifs/logo-160.gif" align="middle" alt="logo">
<p>
La curva representa el trazo de un punto sobre un disco de radio 1 rodando
dentro de un c�rculo fijo de radio 3. Y la deformaci�n de la curva representa
lo que ocurre cuando la distancia del punto al centro del disco movible var�a
entre 0 y infinito.
</p><p>
Este logo animado se cre� con la aplicaci�n
!href module=tool/geometry/animtrace.es Representaciones animadas
 bajo WIMS.
</p>
<ul>
<li>Tipo de dibujo: curva param�trica en 2D.
</li><li>
 Ecuaciones:
 <pre>
     x=(1-s)*cos(t+pi*s)+s*cos(2*t)
     y=(1-s)*sin(t+pi*s)-s*sin(2*t)
 </pre>
  (donde s es el ``par�metro secuencial'' como se define en
  <span class="wims_emph">Representaciones animadas</font>.)
</li><li>
 Rango de las variables:
<pre>-1&lt;x&lt;1, -1&lt;y&lt;1, 0&lt;t&lt;2*pi.</pre>
</ul>
<p>
Puede
!href module=tool/geometry/animtrace.es&cmd=new&type=parametric2D&x1=(1-s)*cos(t+pi*s)+s*cos(2*t)&y1=(1-s)*sin(t+pi*s)-s*sin(2*t)&tleft=0&tright=2*pi&xleft=-1&xright=1&yleft=-1&yright=1&special_parm=noshow cargar directamente estos par�metros
 en el men� de <span class="wims_emph">Representaciones animadas</font>
para representarlo usted mismo.
</p>
<p class="wimstech">
Fecha de creaci�n 03-27-1998, &copy; XIAO, Gang.
</p><hr>
 <p class="wimscenter">
!href module=home Volver a wims
 </p>
</div>
