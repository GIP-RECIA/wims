<p>Puede especificar desde qué equipos se tendrán en cuenta las puntuaciones
o por el contrario, proporcionar equipos desde los cuales el registro de las puntuaciones
no se realizará. También puede restringir los períodos de tiempo durante los cuales
se realiza el registro de notas.
Estas restricciones se aplicarán independientemente de la configuración individual de la hoja.
</p>
!read grestrictform.phtml
<p>
Puede introducir una o varias palabras en cada campo. El servidor
verificará cada palabra contra el nombre o el número IP de cada sitio que se conecte.
La regla correspondiente se aplicará cada vez. Una palabra definida aquí es
una subcadena de caracteres del nombre de la estación de trabajo o de su número IP.
</p>
<div class="wims_smallremark"><b>Sugerencia.</b>
En el campo <span class="wims_label">$name_allowedsites</span>, puede imponer una
 restricción en el tiempo disponible para el registro de las notas añadiendo
 las palabras
<span class="tt wims_code_words">
&gt;aaaammjj.hh:mm</span>
 (inicio) y/o
<span class="tt wims_code_words">
&lt;aaaammjj.hh:mm</span>
 (fin). Las fechas y horas deben indicarse en tiempo local del SERVIDOR,
 y estas palabras deben estar separadas unas de otras por espacios.
  </div>
