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
Puedes crear la hoja de ejercicios tu mismo o utilizar los enlaces automáticos de creación.
</p><p>
<strong> Advertencia. </strong> Si desea que se registren las puntuaciones obtenidas en un ejercicio,
 que se encuentra tanto en la hoja como en el documento, los parámetros del ejercicio deben ser exactamente los mismos 
 en la hoja y en el documento (los parámetros en cuestión son los que se establecen en la introducción 
 de un módulo antes de mostrar el enunciado del ejercicio así como el número de pruebas contabilizadas).
  Por otro lado, el registro de notas sobre estos ejercicios solo se hará si la hoja está activa 
  y el registro de notas está abierto.
</p>
!exit

:autogenerate
<h2 id="statut">
Creación automática de la hoja de ejercicios de un documento
</h2>
<p>
Esta funcionalidad permite la creación de una nueva hoja de ejercicios
que contiene la lista de todos los ejercicios del documento.
</p><p>
Se añade automáticamente a tu clase; la conexión entre
este documento y la hoja se instala automáticamente.
</p><p>
Después puedes cambiar los parámetros de configuración,
o posiblemente eliminar algunos ejercicios y modificar los pesos,
usando la interfaz habitual de gestión de las hojas de ejercicios
a partir de la página de inicio de la clase.
</p><p>
Esta funcionalidad sólo se puede utilizar una vez.
Si se quiere crear una copia de la hoja de nuevo,
se utilizará la herramienta de duplicación de la hoja de ejercicios.
</p><p>
Luego puede modificar la configuración para usar la hoja,
o posiblemente eliminar conjuntos de ejercicios y modificar la escala, 
utilizando la interfaz habitual para administrar las hojas de trabajo 
desde la página de inicio de la clase.
</p>
!exit

:nohelp
No hay ayuda sobre este tema.
!exit
