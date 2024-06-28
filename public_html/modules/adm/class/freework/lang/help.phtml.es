!if $wims_read_parm!=$empty
  !goto $wims_read_parm
!endif
$wims_read_parm
:type
<h2>Posibles tipos de tareas libres</h2>
Hay tres tipos posibles de tareas libres:
<ul>
  <li><b>$(name_type_list[1])</b>:
    Permite simplemente transmitir la declaración de una tarea libre (archivo)
    a los estudiantes y luego difundir la corrección de la tarea libre.
  </li>
  <li><b>$(name_type_list[2])</b>:
!if $conf_nofile=yes
  <span style="color:grey">(deshabilitado en este servidor)</span>
!endif
    Se utiliza para distribuir la declaración de una tarea libre a
    los estudiantes (archivo) y luego distribuir la clave de respuestas.
    Cada participante puede enviar su composición, el profesor puede
    <ul><li>
     corregir y distribuir su copia corregida a cada estudiante;
    </li><li>
     distribuir una clave de respuesta global;
    </li><li>
     asignar una calificación manual para esta tarea.
    </li></ul>
     Esta actividad utiliza gran parte de la capacidad de almacenamiento del aula.
  </li>
  <li><b>$(name_type_list[3])</b>:
    Le permite construir un conjunto de zonas de respuesta con
     texto o diferentes applets. Los applets disponibles son:
    <ul>
      <li>Área de texto.</li>
      <li>Repositorio de archivos.
        !if $conf_nofile=yes
          <span style="color:grey">(deshabilitado en este servidor)</span>
        !endif
      </li>
      <li>figura geogebra.</li>
      <li>serie de ejercicios wims.</li>
    </ul>
    Cada participante hace su composición
    (en las diferentes áreas). el maestro puede
    <ul><li>ver las composiciones de cada participante;
      </li><li>lanzar una solución global;
      </li><li>asignar una calificación manual para esta tarea.
    </li></ul>
  </li>
</ul>
!exit

:sizelimitfile
<h2> Limitación de tamaño de archivo </h2>
El tamaño total de los archivos que el participante puede cargar es limitado
(en MB).
El límite de tamaño multiplicado por el número de participantes debe ser menor
que el espacio disponible en la clase (que se muestra en la página).
<div class="wims_msg warning">
Tenga en cuenta: un estudiante no podrá cargar un archivo incluso más pequeño que
el límite de tamaño cuando se alcance la capacidad total de la clase.
</div>
Por ejemplo: si tienes 30 MB en una clase con 35 alumnos y estableces la capacidad
por alumno en 0,75 MB, se puede activar la tarea gratuita (ya que teóricamente
consumirás 26,25 MB). Sin embargo, si mientras tanto dejas
archivos en el salón de clases o si los estudiantes registran ejercicios
o exámenes, el espacio disponible puede disminuir y algunos estudiantes no podrán
enviar sus tareas. <br>
En el caso de una asignación de tipo 3 libre, el tamaño se aplica a todas las zonas de tipo de archivo.
!exit

:datedeadline
<h2> Fecha en la que el participante debe devolver su copia. </h2>
<ul>
<li>Cuando la tarea libre es del tipo <span class = "wims_code_words"> $(name_type_list[2])
</span> o <span class = "wims_code_words">$(name_type_list[3]) </span>, la interfaz para depositar
copias está activada antes de la fecha y siempre que el estado de la asignación libre sea
<span class="wims_code_words">Activo</span>.
</li><li>
Una vez pasada esta fecha, el profesor podrá descargar las copias
de los participantes y depositar copia corregida de cada participante. </li>
<li> Los participantes no pueden acceder a su copia corregida hasta que se envíen todas
las copias corregidas y la fecha de publicación de la solución
no haya pasado.
</li></ul>
!exit

:datetimesoldate
<h2> Fecha a partir de la cual los elementos de corrección estarán disponibles
para su descarga por parte de los participantes.</h2>
<ul>
<li>Los archivos de soluciones comunes se pueden agregar, modificar o eliminar en cualquier momento. </li>
<li>Los participantes también pueden, después de esta fecha, cargar su copia
corregida una vez que el maestro de la clase haya enviado todas las correcciones de copia
y siempre que el estado de la tarea libre permanezca activo. </li>
<li> Cuando el estado ha expirado, los participantes ya no pueden descargar
su copia corregida, sino solo los archivos de declaraciones y respuestas comunes
a todos (independientemente de la fecha de lanzamiento de la solución). </li>
<li> Los estudiantes pueden acceder a los archivos de corrección comunes tan pronto
como haya pasado la fecha de solución, incluso si no se corrigen todas las copias
en el caso de los tipos <span class="wims_code_words">$(name_type_list[2])</span> o
<span class="wims_code_words">$(name_type_list[3])</span>.</li>
</ul>
!exit

:scoring
<h2>Calificación</h2>
Es posible agregar una nota manual para cada alumno de la clase.
<br>
La interfaz le permite ingresar directamente la nota de cada alumno
al mismo tiempo que el depósito de copias corregidas. <br>
Cuando esta opción está activada, una columna (con un título genérico y un coeficiente 1)
se agrega automáticamente a la tabla de calificaciones manuales al activar la tarea libre.
<br>
Cette option n'est pas disponible dans un portail.
!exit

:typezone
<h2>Tipo de zonas</h2>
Una tarea consta de dos partes:
<ul>
<li>la parte de construcción de la declaración (que luego será visible para los estudiantes); </li>
<li>la parte de construcción del área de respuesta del estudiante. Esta parte le permitirá
al estudiante ingresar su respuesta.
</li>
</ul>
Cada parte se divide en una serie de áreas. Hay cuatro tipos
de zona (tanto para el enunciado como para las respuestas de los participantes):
<ul>
<li><b>geogebra</b> Muestra un subprograma interactivo de Geogebra. </li>
<li><b>texto</b> un área de entrada de texto. Se aceptan etiquetas HTML.
Puede escribir fórmulas matemáticas colocándolas entre \( y ). <br>
Por ejemplo, \(\sqrt{2}) generará
!insmath \sqrt{2}
.
</li>
<li><b>archivo</b>
!if $conf_nofile=yes
  <span style="color:grey">(deshabilitado en este servidor)</span>
!endif
una zona de entrega de archivos. Puede colocar varios archivos en
cada área de archivo.</li>
<li><b>archivo</b> (solo para la parte de el enunciado)
!if $conf_nofile=yes
  <span style="color:grey">(deshabilitado en este servidor)</span>
!endif
una zona de entrega de archivos. Puede colocar varios archivos en
cada área de archivo, one of these files will be randomly picked and shown to the student..</li>
<li><b>Ejercicio Wims</b> (solo para la parte de el enunciado)
Una lista de ejercicios de wims para realizar. El estudiante debe aprobar la serie antes de poder
guardarla y luego escribir una solución detallada. Esta solución se le puede dar
al profesor usando los campos en la parte de respuesta. Si no se ha configurado ninguna zona
de respuesta. En ese caso se debe entregar en copia impresa.
</li>
</ul>
Puede haber varias áreas del mismo tipo tanto en la parte de enunciado (excepto en el tipo de ejercicio de wims)
como en la parte de respuesta de los participantes. El número de zonas de respuesta utilizadas
y su naturaleza se eligen libremente.<br>
Si la parte de respuesta no contiene ninguna zona, significa que el documento debe ser devuelto directamente
en formato papel.
!exit

:zonegeogebra
La descripción de los campos a rellenar para este tipo de zona:
<ul>
<li><b>Título:</b> el título de la zona. Si este campo permanece vacío, se generará un título automático. </li>
<li><b>Descripción:</b> una descripción del área que puede contener instrucciones
específicas (se mostrará con el estilo css
  <span class="wims_code_words">freeworkdesczone</span>).</li>
<li><b>Opción de configuración del applet:</b> esta zona se utiliza para definir las opciones
 de configuración del applet (consulte el sitio de GeoGebra para obtener más detalles).
 Debe escribir una opción por línea. Por ejemplo :
<pre>
showToolBar=true
customToolBar="0|40|||1|2|5@10"
width=800
height=500
number=1
</pre></li>
<li><b>Mostrar esta zona para los estudiantes </b> (opción disponible solo
en la parte del enunciado): esta opción permite mostrar o no esta zona
en la página del enunciado para el estudiante (para combinar con la siguiente opción,
permite proporcionar a los participantes una zona GeoGebra con contenido).
Si esta zona se muestra en la página de los participantes, no podrá ser editada
por ellos.</li>
<li><b> Copiar el contenido del número de zona del profesor </b> (opción disponible
solo en la sección de respuestas del alumno): esta opción le permite precargar
el applet con el contenido de uno de los applets de GeoGebra del área del profesor
(por ejemplo, para contener una figura inicial).</li>
<li><b>Contenido de la zona</b> (solo en la parte indicada) una ventana de applet
le permite realizar la figura.
</li></ul>
!exit

:zonetexte
La descripción de los campos a rellenar para este tipo de zona:
<ul>
<li><b>Título:</b> el título de la zona. Si este campo permanece vacío, se generará un título automático. </li>
<li><b>Descripción: </b> una descripción del área que puede contener
instrucciones específicas (se mostrará con el estilo css
    <span class="wims_code_words">freeworkdesczone</span>).</li>
<li><b>Contenido de la zona</b> (solo en la parte del anunciado) una zona de
 texto le permite ingresar el texto del anunciado.
</li></ul>
!exit

:zonefile
La descripción de los campos a rellenar para este tipo de zona:
<ul>
<li><b>Título:</b> el título de la zona. Si este campo permanece vacío, se generará un título automático. </li>
<li><b>Descripción:</b> una descripción del área que puede contener
instrucciones específicas (se mostrará con el estilo css
  <span class="wims_code_words">freeworkdesczone</span>).</li>
<li><b>Número máximo de archivos</b> (solo en la parte de respuesta):
 permite limitar el número de archivos depositables por los participantes.</li>
<li><b>Contenido de la zona</b> (solo en la parte indicada):
   le permite cargar archivos para el enunciado
  (la interfaz de carga se encuentra en la parte inferior de la página).</li>
</ul>
!exit

:zonerandfile
La descripción de los campos a rellenar para este tipo de zona:
<ul>
<li><b>Título:</b> el título de la zona. Si este campo permanece vacío, se generará un título automático. </li>
<li><b>Descripción:</b> una descripción del área que puede contener
instrucciones específicas (se mostrará con el estilo css
  <span class="wims_code_words">freeworkdesczone</span>).</li>
<li><b>Contenido de la zona</b> (solo en la parte indicada):
   le permite cargar archivos para el enunciado
  (la interfaz de carga se encuentra en la parte inferior de la página).
  Only one of these file, chosen randomly, will be shown to the students.</li>
</ul>
!exit

:zonewimsexo
La descripción de los campos a completar para este tipo de zona:
<ul>
<li><b>Título:</b> el título de la zona. Si este campo permanece vacío, se generará un título automático.</li>
<li><b>Descripción:</b> una descripción del área que puede contener
  instrucciones específicas (se mostrará con el estilo css
    <span class="wims_code_words">freeworkdesczone</span>).</li>
<li><b>Contenido del área</b> una tabla presenta la lista de ejercicios a procesar. La adición de ejercicios se realiza por el
mismo método que para las hojas de ejercicios (usando el motor de búsqueda de recursos).
</li></ul>
!exit

:allowtype
!! check adm/class/sheet/lang/help.phtml.es and change accordingly
!exit