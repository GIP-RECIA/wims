!if $wims_read_parm!=$empty
  !goto $wims_read_parm
!endif

:general

Este m�dulo permite analizar el respaldo de una clase para importar/reemplazar 
recursos seleccion�ndolos (uno a uno o en grupos del mismo tipo).
No se modifica ning�n recurso existente de la clase. Los recursos de la copia de seguridad 
de los que hay una copia en la clase no se pueden importar.
<br>
Los recursos importables son:
<ul>
  <li> <b> Hojas </b>: se agregan con un estado en preparaci�n
  y la fecha de caducidad se establece en la de la clase.
  No se pueden agregar hojas a la clase si
    <ul>
      <li> son id�nticos a una hoja de la clase, </li>
      <li> contienen ejercicios de clase, </li>
      <li> invocan m�dulos de ejercicios que no est�n presentes en el servidor
      (la verificaci�n se limita a la existencia del m�dulo sin verificar la versi�n 
      o la presencia de los ejercicios objetivo en el m�dulo). Los enlaces de ayuda del 
      ejercicio no est�n verificados. </li>
    </ul>
  </li> <li>
  <b> Documentos (privados) </b>: son documentos espec�ficos de la clase.
    Se importan con el mismo estado de lectura / escritura que el documento original.
  </li> <li>
  <b> Enlaces a documentos p�blicos </b>: se importan con el estado "oculto".
  Se realiza una comprobaci�n de la existencia del documento en el servidor.
  No se guarda ning�n v�nculo del documento a una hoja de trabajo de respaldo 
  (luego aparece un mensaje en la columna de comentarios).
  Si desea obtener esta hoja de trabajo, deber� generarla 
  desde la interfaz del documento una vez que se importe el enlace.
  </li> <li>
  <b> Enlaces a herramientas </b>: se importan con el estado "oculto".
  Se realiza una comprobaci�n de la existencia de la herramienta en el servidor.
  </li> <li>
  <b> Glosarios </b>: se importan con el estado "oculto".
  No se realiza ninguna verificaci�n de la existencia de
  cada glosa en el servidor.
  </li>
</ul>
La sustituci�n de recursos solo se puede realizar para aquellos 
cuyo estado sea <span class="tt"> En preparaci�n </span> 
(en otras palabras, recursos que a�n no han sido utilizados por 
los participantes). Por el momento, esta opci�n solo est� disponible 
para hojas de trabajo.

!exit
