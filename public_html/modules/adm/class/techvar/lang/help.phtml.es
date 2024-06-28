!if $wims_read_parm!=$empty
 !goto $wims_read_parm
!else
 No hay ayuda para esta p�gina.
 !exit
!endif

:listvar
Este m�dulo permite gestionar variables t�cnicas:
<ul>
 <li>
 Creaci�n de variables t�cnicas (limitadas a $MAXtechvar) ;
 </li><li>
 Cambios en la lista de valores posibles para cada variable t�cnica ;
 </li><li>
 Ver/cambiar el valor de las variables t�cnicas para cada participante.
 </li>
</ul>
<p>
Las variables t�cnicas pueden ser utilizadas para hacer algunas acciones
sobre un grupo de alumnos de la clase (por ejemplo, limitar selectivamente
el periodo de apertura de hojas de ejercicios o de ex�menes, enviar un mensaje a
un grupo de estudiantes o hacer aparecer un grupo de estudiantes en la tabla de resultados ...).
</p>
Existen dos tipos de variables t�cnicas:
<ul>
 <li>
 Variables t�cnicas locales: Estas son las que se pueden configurar y cambiar
(Su n�mero se limita a $MAXtechvar).
 </li><li>
 Las variables t�cnicas globales: las de la estructura
(agrupamiento de clases o portal de centro) a la que la clase pertenezca.
Estas variables no son editables (s�lo lo son por el administrador de la estructura)
  pero puede utilizarlas para filtrar estudiantes.
 </li>
</ul>
<h3>
 Creaci�n de una variable t�cnica local
</h3>
Utilice el men� <span class="tt wims_code_words">$name_addvar</span>  para definir
el nombre (s�lo letras min�sculas; habr� una conversi�n autom�tica)
y los valores posibles para esta variable.
<h3>
 Establecer o cambiar el valor de una variable t�cnica local de un estudiante
</h3>
Para establecer o cambiar el valor de una variable t�cnica local de un estudiante,
simplemente haga clic en el enlace <span class="tt wims_code_words">Lista de participantes</span>
desde la p�gina<span class="tt wims_code_words">Gesti�n de las variables t�cnicas,</span>
entonces haga clic en el nombre del estudiante en la lista que aparece.
<p>
Tambi�n es posible introducir los valores de una variable t�cnica
para todos los participantes mediante un archivo de hoja de c�lculo
(Ver p�gina de ayuda <span class="tt wims_code_words">Enlace hoja de c�lculo </span>
para conocer el formato del archivo de hoja de c�lculo).
</p>

<h3>
Variable t�cnica local y personalizaci�n de una hoja de trabajo
</h3>
<p>Se puede utilizar una variable t�cnica local para personalizar una hoja de trabajo de acuerdo
con el valor de la variable t�cnica (ver el m�dulo de gesti�n de la hoja de trabajo).
</p>
<p>
Si se utiliza esta opci�n, la modificaci�n del valor de una variable t�cnica para un estudiante
cambiar� potencialmente la configuraci�n de las hojas de trabajo activas que administra, as�
como las notas en estas hojas.
</p>

!exit


