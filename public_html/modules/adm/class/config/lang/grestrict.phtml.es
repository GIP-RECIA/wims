<p>Puede especificar desde qu� equipos se tendr�n en cuenta las puntuaciones
o por el contrario, proporcionar equipos desde los cuales el registro de las puntuaciones
no se realizar�. Tambi�n puede restringir los per�odos de tiempo durante los cuales
se realiza el registro de notas.
Estas restricciones se aplicar�n independientemente de la configuraci�n individual de la hoja.
</p>
!read grestrictform.phtml
<p>
Puede introducir una o varias palabras en cada campo. El servidor
verificar� cada palabra contra el nombre o el n�mero IP de cada sitio que se conecte.
La regla correspondiente se aplicar� cada vez. Una palabra definida aqu� es
una subcadena de caracteres del nombre de la estaci�n de trabajo o de su n�mero IP.
</p>
<div class="wims_smallremark"><b>Sugerencia.</b>
En el campo <span class="wims_label">$name_allowedsites</span>, puede imponer una
 restricci�n en el tiempo disponible para el registro de las notas a�adiendo
 las palabras
<span class="tt wims_code_words">
&gt;aaaammjj.hh:mm</span>
 (inicio) y/o
<span class="tt wims_code_words">
&lt;aaaammjj.hh:mm</span>
 (fin). Las fechas y horas deben indicarse en tiempo local del SERVIDOR,
 y estas palabras deben estar separadas unas de otras por espacios.
  </div>
