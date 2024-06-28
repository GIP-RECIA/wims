!if $wims_read_parm!=$empty
  !goto $wims_read_parm
!endif

:general

Este módulo permite analizar el respaldo de una clase para importar/reemplazar 
recursos seleccionándolos (uno a uno o en grupos del mismo tipo).
No se modifica ningún recurso existente de la clase. Los recursos de la copia de seguridad 
de los que hay una copia en la clase no se pueden importar.
<br>
Los recursos importables son:
<ul>
  <li> <b> Hojas </b>: se agregan con un estado en preparación
  y la fecha de caducidad se establece en la de la clase.
  No se pueden agregar hojas a la clase si
    <ul>
      <li> son idénticos a una hoja de la clase, </li>
      <li> contienen ejercicios de clase, </li>
      <li> invocan módulos de ejercicios que no están presentes en el servidor
      (la verificación se limita a la existencia del módulo sin verificar la versión 
      o la presencia de los ejercicios objetivo en el módulo). Los enlaces de ayuda del 
      ejercicio no están verificados. </li>
    </ul>
  </li> <li>
  <b> Documentos (privados) </b>: son documentos específicos de la clase.
    Se importan con el mismo estado de lectura / escritura que el documento original.
  </li> <li>
  <b> Enlaces a documentos públicos </b>: se importan con el estado "oculto".
  Se realiza una comprobación de la existencia del documento en el servidor.
  No se guarda ningún vínculo del documento a una hoja de trabajo de respaldo 
  (luego aparece un mensaje en la columna de comentarios).
  Si desea obtener esta hoja de trabajo, deberá generarla 
  desde la interfaz del documento una vez que se importe el enlace.
  </li> <li>
  <b> Enlaces a herramientas </b>: se importan con el estado "oculto".
  Se realiza una comprobación de la existencia de la herramienta en el servidor.
  </li> <li>
  <b> Glosarios </b>: se importan con el estado "oculto".
  No se realiza ninguna verificación de la existencia de
  cada glosa en el servidor.
  </li>
</ul>
La sustitución de recursos solo se puede realizar para aquellos 
cuyo estado sea <span class="tt"> En preparación </span> 
(en otras palabras, recursos que aún no han sido utilizados por 
los participantes). Por el momento, esta opción solo está disponible 
para hojas de trabajo.

!exit
