!if $wims_read_parm!=$empty
 !goto $wims_read_parm
!else
 No hay ayuda para esta página.
 !exit
!endif

:listvar
Este módulo permite gestionar variables técnicas:
<ul>
 <li>
 Creación de variables técnicas (limitadas a $MAXtechvar) ;
 </li><li>
 Cambios en la lista de valores posibles para cada variable técnica ;
 </li><li>
 Ver/cambiar el valor de las variables técnicas para cada participante.
 </li>
</ul>
<p>
Las variables técnicas pueden ser utilizadas para hacer algunas acciones
sobre un grupo de alumnos de la clase (por ejemplo, limitar selectivamente
el periodo de apertura de hojas de ejercicios o de exámenes, enviar un mensaje a
un grupo de estudiantes o hacer aparecer un grupo de estudiantes en la tabla de resultados ...).
</p>
Existen dos tipos de variables técnicas:
<ul>
 <li>
 Variables técnicas locales: Estas son las que se pueden configurar y cambiar
(Su número se limita a $MAXtechvar).
 </li><li>
 Las variables técnicas globales: las de la estructura
(agrupamiento de clases o portal de centro) a la que la clase pertenezca.
Estas variables no son editables (sólo lo son por el administrador de la estructura)
  pero puede utilizarlas para filtrar estudiantes.
 </li>
</ul>
<h3>
 Creación de una variable técnica local
</h3>
Utilice el menú <span class="tt wims_code_words">$name_addvar</span>  para definir
el nombre (sólo letras minúsculas; habrá una conversión automática)
y los valores posibles para esta variable.
<h3>
 Establecer o cambiar el valor de una variable técnica local de un estudiante
</h3>
Para establecer o cambiar el valor de una variable técnica local de un estudiante,
simplemente haga clic en el enlace <span class="tt wims_code_words">Lista de participantes</span>
desde la página<span class="tt wims_code_words">Gestión de las variables técnicas,</span>
entonces haga clic en el nombre del estudiante en la lista que aparece.
<p>
También es posible introducir los valores de una variable técnica
para todos los participantes mediante un archivo de hoja de cálculo
(Ver página de ayuda <span class="tt wims_code_words">Enlace hoja de cálculo </span>
para conocer el formato del archivo de hoja de cálculo).
</p>

<h3>
Variable técnica local y personalización de una hoja de trabajo
</h3>
<p>Se puede utilizar una variable técnica local para personalizar una hoja de trabajo de acuerdo
con el valor de la variable técnica (ver el módulo de gestión de la hoja de trabajo).
</p>
<p>
Si se utiliza esta opción, la modificación del valor de una variable técnica para un estudiante
cambiará potencialmente la configuración de las hojas de trabajo activas que administra, así
como las notas en estas hojas.
</p>

!exit


