!if $wims_read_parm!=$empty
  !goto $wims_read_parm
!endif
$wims_read_parm
:type
<h2>Posibles tipos de tareas libres</h2>
Hay tres tipos posibles de tareas libres:
<ul>
  <li><b>$(name_type_list[1])</b>:
    Permite simplemente transmitir la declaraci�n de una tarea libre (archivo)
    a los estudiantes y luego difundir la correcci�n de la tarea libre.
  </li>
  <li><b>$(name_type_list[2])</b>:
!if $conf_nofile=yes
  <span style="color:grey">(deshabilitado en este servidor)</span>
!endif
    Se utiliza para distribuir la declaraci�n de una tarea libre a
    los estudiantes (archivo) y luego distribuir la clave de respuestas.
    Cada participante puede enviar su composici�n, el profesor puede
    <ul><li>
     corregir y distribuir su copia corregida a cada estudiante;
    </li><li>
     distribuir una clave de respuesta global;
    </li><li>
     asignar una calificaci�n manual para esta tarea.
    </li></ul>
     Esta actividad utiliza gran parte de la capacidad de almacenamiento del aula.
  </li>
  <li><b>$(name_type_list[3])</b>:
    Le permite construir un conjunto de zonas de respuesta con
     texto o diferentes applets. Los applets disponibles son:
    <ul>
      <li>�rea de texto.</li>
      <li>Repositorio de archivos.
        !if $conf_nofile=yes
          <span style="color:grey">(deshabilitado en este servidor)</span>
        !endif
      </li>
      <li>figura geogebra.</li>
      <li>serie de ejercicios wims.</li>
    </ul>
    Cada participante hace su composici�n
    (en las diferentes �reas). el maestro puede
    <ul><li>ver las composiciones de cada participante;
      </li><li>lanzar una soluci�n global;
      </li><li>asignar una calificaci�n manual para esta tarea.
    </li></ul>
  </li>
</ul>
!exit

:sizelimitfile
<h2> Limitaci�n de tama�o de archivo </h2>
El tama�o total de los archivos que el participante puede cargar es limitado
(en MB).
El l�mite de tama�o multiplicado por el n�mero de participantes debe ser menor
que el espacio disponible en la clase (que se muestra en la p�gina).
<div class="wims_msg warning">
Tenga en cuenta: un estudiante no podr� cargar un archivo incluso m�s peque�o que
el l�mite de tama�o cuando se alcance la capacidad total de la clase.
</div>
Por ejemplo: si tienes 30 MB en una clase con 35 alumnos y estableces la capacidad
por alumno en 0,75 MB, se puede activar la tarea gratuita (ya que te�ricamente
consumir�s 26,25 MB). Sin embargo, si mientras tanto dejas
archivos en el sal�n de clases o si los estudiantes registran ejercicios
o ex�menes, el espacio disponible puede disminuir y algunos estudiantes no podr�n
enviar sus tareas. <br>
En el caso de una asignaci�n de tipo 3 libre, el tama�o se aplica a todas las zonas de tipo de archivo.
!exit

:datedeadline
<h2> Fecha en la que el participante debe devolver su copia. </h2>
<ul>
<li>Cuando la tarea libre es del tipo <span class = "wims_code_words"> $(name_type_list[2])
</span> o <span class = "wims_code_words">$(name_type_list[3]) </span>, la interfaz para depositar
copias est� activada antes de la fecha y siempre que el estado de la asignaci�n libre sea
<span class="wims_code_words">Activo</span>.
</li><li>
Una vez pasada esta fecha, el profesor podr� descargar las copias
de los participantes y depositar copia corregida de cada participante. </li>
<li> Los participantes no pueden acceder a su copia corregida hasta que se env�en todas
las copias corregidas y la fecha de publicaci�n de la soluci�n
no haya pasado.
</li></ul>
!exit

:datetimesoldate
<h2> Fecha a partir de la cual los elementos de correcci�n estar�n disponibles
para su descarga por parte de los participantes.</h2>
<ul>
<li>Los archivos de soluciones comunes se pueden agregar, modificar o eliminar en cualquier momento. </li>
<li>Los participantes tambi�n pueden, despu�s de esta fecha, cargar su copia
corregida una vez que el maestro de la clase haya enviado todas las correcciones de copia
y siempre que el estado de la tarea libre permanezca activo. </li>
<li> Cuando el estado ha expirado, los participantes ya no pueden descargar
su copia corregida, sino solo los archivos de declaraciones y respuestas comunes
a todos (independientemente de la fecha de lanzamiento de la soluci�n). </li>
<li> Los estudiantes pueden acceder a los archivos de correcci�n comunes tan pronto
como haya pasado la fecha de soluci�n, incluso si no se corrigen todas las copias
en el caso de los tipos <span class="wims_code_words">$(name_type_list[2])</span> o
<span class="wims_code_words">$(name_type_list[3])</span>.</li>
</ul>
!exit

:scoring
<h2>Calificaci�n</h2>
Es posible agregar una nota manual para cada alumno de la clase.
<br>
La interfaz le permite ingresar directamente la nota de cada alumno
al mismo tiempo que el dep�sito de copias corregidas. <br>
Cuando esta opci�n est� activada, una columna (con un t�tulo gen�rico y un coeficiente 1)
se agrega autom�ticamente a la tabla de calificaciones manuales al activar la tarea libre.
<br>
Cette option n'est pas disponible dans un portail.
!exit

:typezone
<h2>Tipo de zonas</h2>
Una tarea consta de dos partes:
<ul>
<li>la parte de construcci�n de la declaraci�n (que luego ser� visible para los estudiantes); </li>
<li>la parte de construcci�n del �rea de respuesta del estudiante. Esta parte le permitir�
al estudiante ingresar su respuesta.
</li>
</ul>
Cada parte se divide en una serie de �reas. Hay cuatro tipos
de zona (tanto para el enunciado como para las respuestas de los participantes):
<ul>
<li><b>geogebra</b> Muestra un subprograma interactivo de Geogebra. </li>
<li><b>texto</b> un �rea de entrada de texto. Se aceptan etiquetas HTML.
Puede escribir f�rmulas matem�ticas coloc�ndolas entre \( y ). <br>
Por ejemplo, \(\sqrt{2}) generar�
!insmath \sqrt{2}
.
</li>
<li><b>archivo</b>
!if $conf_nofile=yes
  <span style="color:grey">(deshabilitado en este servidor)</span>
!endif
una zona de entrega de archivos. Puede colocar varios archivos en
cada �rea de archivo.</li>
<li><b>archivo</b> (solo para la parte de el enunciado)
!if $conf_nofile=yes
  <span style="color:grey">(deshabilitado en este servidor)</span>
!endif
una zona de entrega de archivos. Puede colocar varios archivos en
cada �rea de archivo, one of these files will be randomly picked and shown to the student..</li>
<li><b>Ejercicio Wims</b> (solo para la parte de el enunciado)
Una lista de ejercicios de wims para realizar. El estudiante debe aprobar la serie antes de poder
guardarla y luego escribir una soluci�n detallada. Esta soluci�n se le puede dar
al profesor usando los campos en la parte de respuesta. Si no se ha configurado ninguna zona
de respuesta. En ese caso se debe entregar en copia impresa.
</li>
</ul>
Puede haber varias �reas del mismo tipo tanto en la parte de enunciado (excepto en el tipo de ejercicio de wims)
como en la parte de respuesta de los participantes. El n�mero de zonas de respuesta utilizadas
y su naturaleza se eligen libremente.<br>
Si la parte de respuesta no contiene ninguna zona, significa que el documento debe ser devuelto directamente
en formato papel.
!exit

:zonegeogebra
La descripci�n de los campos a rellenar para este tipo de zona:
<ul>
<li><b>T�tulo:</b> el t�tulo de la zona. Si este campo permanece vac�o, se generar� un t�tulo autom�tico. </li>
<li><b>Descripci�n:</b> una descripci�n del �rea que puede contener instrucciones
espec�ficas (se mostrar� con el estilo css
  <span class="wims_code_words">freeworkdesczone</span>).</li>
<li><b>Opci�n de configuraci�n del applet:</b> esta zona se utiliza para definir las opciones
 de configuraci�n del applet (consulte el sitio de GeoGebra para obtener m�s detalles).
 Debe escribir una opci�n por l�nea. Por ejemplo :
<pre>
showToolBar=true
customToolBar="0|40|||1|2|5@10"
width=800
height=500
number=1
</pre></li>
<li><b>Mostrar esta zona para los estudiantes </b> (opci�n disponible solo
en la parte del enunciado): esta opci�n permite mostrar o no esta zona
en la p�gina del enunciado para el estudiante (para combinar con la siguiente opci�n,
permite proporcionar a los participantes una zona GeoGebra con contenido).
Si esta zona se muestra en la p�gina de los participantes, no podr� ser editada
por ellos.</li>
<li><b> Copiar el contenido del n�mero de zona del profesor </b> (opci�n disponible
solo en la secci�n de respuestas del alumno): esta opci�n le permite precargar
el applet con el contenido de uno de los applets de GeoGebra del �rea del profesor
(por ejemplo, para contener una figura inicial).</li>
<li><b>Contenido de la zona</b> (solo en la parte indicada) una ventana de applet
le permite realizar la figura.
</li></ul>
!exit

:zonetexte
La descripci�n de los campos a rellenar para este tipo de zona:
<ul>
<li><b>T�tulo:</b> el t�tulo de la zona. Si este campo permanece vac�o, se generar� un t�tulo autom�tico. </li>
<li><b>Descripci�n: </b> una descripci�n del �rea que puede contener
instrucciones espec�ficas (se mostrar� con el estilo css
    <span class="wims_code_words">freeworkdesczone</span>).</li>
<li><b>Contenido de la zona</b> (solo en la parte del anunciado) una zona de
 texto le permite ingresar el texto del anunciado.
</li></ul>
!exit

:zonefile
La descripci�n de los campos a rellenar para este tipo de zona:
<ul>
<li><b>T�tulo:</b> el t�tulo de la zona. Si este campo permanece vac�o, se generar� un t�tulo autom�tico. </li>
<li><b>Descripci�n:</b> una descripci�n del �rea que puede contener
instrucciones espec�ficas (se mostrar� con el estilo css
  <span class="wims_code_words">freeworkdesczone</span>).</li>
<li><b>N�mero m�ximo de archivos</b> (solo en la parte de respuesta):
 permite limitar el n�mero de archivos depositables por los participantes.</li>
<li><b>Contenido de la zona</b> (solo en la parte indicada):
   le permite cargar archivos para el enunciado
  (la interfaz de carga se encuentra en la parte inferior de la p�gina).</li>
</ul>
!exit

:zonerandfile
La descripci�n de los campos a rellenar para este tipo de zona:
<ul>
<li><b>T�tulo:</b> el t�tulo de la zona. Si este campo permanece vac�o, se generar� un t�tulo autom�tico. </li>
<li><b>Descripci�n:</b> una descripci�n del �rea que puede contener
instrucciones espec�ficas (se mostrar� con el estilo css
  <span class="wims_code_words">freeworkdesczone</span>).</li>
<li><b>Contenido de la zona</b> (solo en la parte indicada):
   le permite cargar archivos para el enunciado
  (la interfaz de carga se encuentra en la parte inferior de la p�gina).
  Only one of these file, chosen randomly, will be shown to the students.</li>
</ul>
!exit

:zonewimsexo
La descripci�n de los campos a completar para este tipo de zona:
<ul>
<li><b>T�tulo:</b> el t�tulo de la zona. Si este campo permanece vac�o, se generar� un t�tulo autom�tico.</li>
<li><b>Descripci�n:</b> una descripci�n del �rea que puede contener
  instrucciones espec�ficas (se mostrar� con el estilo css
    <span class="wims_code_words">freeworkdesczone</span>).</li>
<li><b>Contenido del �rea</b> una tabla presenta la lista de ejercicios a procesar. La adici�n de ejercicios se realiza por el
mismo m�todo que para las hojas de ejercicios (usando el motor de b�squeda de recursos).
</li></ul>
!exit

:allowtype
!! check adm/class/sheet/lang/help.phtml.es and change accordingly
!exit