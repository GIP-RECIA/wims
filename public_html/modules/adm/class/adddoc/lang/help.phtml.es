!if $wims_read_parm!=$empty
  !goto $wims_read_parm
!endif

:linksh
<h2 id="general">
Vincular un documento a una hoja de ejercicios
</h2>
<p>
Puedes optar por enlazar el documento a una hoja de ejercicios
concreta que contiene las mismas series de ejercicios que los que hay
en el documento. Esto permite registrar el trabajo
realizado por los estudiantes cuando hacen clic en los enlaces de los ejercicios del documento.
</p><p>
Puedes crear la hoja de ejercicios tu mismo o utilizar los enlaces autom�ticos de creaci�n.
</p><p>
<strong> Advertencia. </strong> Si desea que se registren las puntuaciones obtenidas en un ejercicio,
 que se encuentra tanto en la hoja como en el documento, los par�metros del ejercicio deben ser exactamente los mismos 
 en la hoja y en el documento (los par�metros en cuesti�n son los que se establecen en la introducci�n 
 de un m�dulo antes de mostrar el enunciado del ejercicio as� como el n�mero de pruebas contabilizadas).
  Por otro lado, el registro de notas sobre estos ejercicios solo se har� si la hoja est� activa 
  y el registro de notas est� abierto.
</p>
!exit

:autogenerate
<h2 id="statut">
Creaci�n autom�tica de la hoja de ejercicios de un documento
</h2>
<p>
Esta funcionalidad permite la creaci�n de una nueva hoja de ejercicios
que contiene la lista de todos los ejercicios del documento.
</p><p>
Se a�ade autom�ticamente a tu clase; la conexi�n entre
este documento y la hoja se instala autom�ticamente.
</p><p>
Despu�s puedes cambiar los par�metros de configuraci�n,
o posiblemente eliminar algunos ejercicios y modificar los pesos,
usando la interfaz habitual de gesti�n de las hojas de ejercicios
a partir de la p�gina de inicio de la clase.
</p><p>
Esta funcionalidad s�lo se puede utilizar una vez.
Si se quiere crear una copia de la hoja de nuevo,
se utilizar� la herramienta de duplicaci�n de la hoja de ejercicios.
</p><p>
Luego puede modificar la configuraci�n para usar la hoja,
o posiblemente eliminar conjuntos de ejercicios y modificar la escala, 
utilizando la interfaz habitual para administrar las hojas de trabajo 
desde la p�gina de inicio de la clase.
</p>
!exit

:nohelp
No hay ayuda sobre este tema.
!exit
