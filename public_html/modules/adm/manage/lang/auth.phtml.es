!set name_admpasswd=Contrase�a de administrador del sitio

!read authscript.phtml
!if $passone!=$empty
<p>
Al no haber definido una contrase�a de administrador el servidor ha generado
 una contrase�a de un solo uso para esta sesi�n. Podr� encontrarla en el fichero
 <span class="tt">$wims_home/$oncename</span> en la cuenta del servidor WIMS.
 Por favor lea el fichero y teclee su contenido en el campo anterior.
 </p><p>
 Si desea definir una contrase�a permanente (lo que es c�modo pero menos
 seguro que las contrase�as de un solo uso) puede guardarla en un fichero de nombre 
 <span class="tt">$wims_home/log/.wimspass</span>. �Pero <b>DEBE</b> hacer que s�lo usted pueda 
 leer ese fichero!
 </p>
!else
 Ha definido una contrase�a permanente de administrador del sitio. Por favor
 recuerde que tambi�n puede utilizar contrase�as de un solo uso, que son m�s
 seguras.
 </p><p>
 Para cambiar a contrase�as de un solo uso no tiene m�s que borrar el 
 fichero <span class="tt">$wims_home/log/.wimspass</span> de la cuenta del servidor WIMS.
</p>
!endif

<p>
En cualquier caso por favor tenga MUCH�SIMO cuidado cuando maneje la
contrase�a de administrador del sitio. �Una intrusi�n como administrador del
sitio puede poner en peligro TODOS los datos de su servidor!
</p>
