# Format:
# Line 1. type name_in_wims_conf variable_name
# Line 2. prompt
# Line 3. variable type
# Line 4. selection range; prompts
# Line 5 Small Help
# Line 6 and up. More help

:tech PATH
PATH
free

Ruta para ejecutables binarios.
Es mejor dejarlo con el valor predeterminado,
a menos que tenga una configuraci�n especial de instalaci�n del sistema.

:tech aliased_cgi
cgi to html address aliasing
choice
yes,no;$wims_name_yes,$wims_name_no
Config�relo en s� si desea que los robots de
Internet vean algunos contenidos de WIMS como
p�ginas html. Ayuda a que el sitio est� mejor referenciado y sea m�s conocido, pero necesita Apache 1.3 o superior para que esto funcione correctamente.
<p>
Si acaba de actualizar Apache httpd y tiene
problemas con direcciones desconocidas cuando
activa esta funci�n, ejecute el script<code class="tt">bin/apache-config</code>.
</p>
:tech aliased_getfile
Sobrescribir la direcci�n de los archivos descargados
choice
yes,no;$wims_name_yes,$wims_name_no
Activar esto le permite obtener los nombres de archivo correctos al descargar
archivos generados por wims: archivos de respaldo, datos de los estudiantes en clases virtuales,
algunos archivos de imagen, etc. De lo contrario, todas las descargas de archivos tendr�n por
defecto el nombre "wims.cgi", que debe corregirse manualmente cuando guarde el archivo.
<p>
Puede tener problemas para descargar si su Apache httpd no est� configurado correctamente.
En este caso, diga "no".
</p>
:housekeep backup_hour
Hora de respaldo diario
choice
-1,1,2,3,4,5,6,7,8,9,11,13,15,17,18,19,20,21,22; none,1,2,3,4,5,6,7,8,9,11,13,15,17,18,19,20,21,22
Esta es la hora en la que se realizar� la copia
de seguridad diaria de los datos. Elija una hora en la que el servidor no est� ocupado o elija
<code class="tt">no</code> para desactivar la copia de seguridad diaria.

:resources busyhours wims_busyhours
Horas ocupadas del servidor
free

Lista de momentos en los que es probable que el servidor est� muy ocupado.
Ciertas actividades como la publicaci�n local de un m�dulo estar�n prohibidas durante estos per�odos.
Dar una lista de palabras formada por dos n�meros: por ejemplo
<code class="tt">08 09 13 14</code>.

:graphics default_anim_format ins_format
Formato de animaciones din�micas <span class="tt wims_warning">*</span>
choice
gif, mng
Formato de imagen para animaciones din�micas.
Solo hay dos posibilidades: <code class = "tt">gif</code> o <code class = "tt">mng</code>.
Sin embargo, la mayor�a de los navegadores actualmente en uso no pueden mostrar animaciones en l�nea.

:graphics default_texposition
Posici�n de f�rmula predeterminada/MathML
choice
0,1,2; low,high,MathML
TeX formulas are small graphics files that are middle-aligned with respect to the text line.
<p>There is an ancient middle-alignment bug from the beginning days of
Netscape, which aligns the middle of the picture against the base line of
the text. This of course makes the formulas appear too low, and WIMS patches
it by raising a bit the formulas. </p>
<p>However, recent browsers no longer carry this alignment bug. And for these
browsers, the patch makes the formulas too high with respect to text. This
parameter allows you to choose whether or not to activate the patch by
default. Note that users can define their own preferences. </p>
<p>The parameter can be used also to activate MathML translation.</p>
<p>If you change this value, do not think of your own browser,
but of those of your average users!</p>

:tech cgi_name
Nombre del programa cgi principal <span class="tt wims_warning">!</span>
free

You can change this name only if you have correctly aliased things in the configuration file of your httpd.
For example, if you have run the script
in <code class="tt">bin/apache-config</code>,
you may try the names <code class="tt">index.html</code> or <code class="tt">wims.html</code>.
<p>
Do not change this if you do not know what you are doing! If you make it
wrong, you will have to manually recover your config.
</p>
:class class_limit wims_class_limit
N�mero m�ximo de aulas virtuales
int
0,1000

:class class_regpass wims_class_regpass
Derechos para crear clases virtuales
free

Este par�metro define los derechos para crear un aula virtual.
en este sitio. Contiene tres campos separados por comas,
definir el derecho de acceso para crear una clase individual,
un grupo de clase, un establecimiento. Para cada campo,
son posibles las siguientes definiciones:
<dl>
<dt><code class="tt">all</code> <dd> Cualquiera puede crear una clase.
<dt><code class="tt">deny</code> <dd> Nadie puede crear una clase.
<dt><code class="tt">correo electr�nico </code> <dd> Cualquiera puede crear una clase,
 si se env�a una direcci�n de correo electr�nico v�lida.
 El sitio verificar� que esta direcci�n de correo electr�nico sea v�lida.
<dt> <code class="tt"> contrase�a ****** ----- </code>
<dd> El usuario debe ingresar la contrase�a
para obtener permiso para crear una clase. Debes ingresar la contrase�a
como la segunda palabra del par�metro (reemplazando <code class = "tt"> ****** </code>)
y comunique la contrase�a a quienes quieran crear una clase. <br>
Se puede agregar una tercera palabra. Te permite definir una lista de dominios de correo
para el cual un env�o autom�tico
se enviar� la contrase�a
(los dominios deben estar separados por |).
<dt> <code class = "tt"> Nombres de host o n�meros de IP </code> <dd>
 Solo personas que se conectan desde extensiones definidas
 se le permitir� crear una clase.
>>>>>>> .r16125
$sitehelp
</dl>
Por ejemplo, si pones
<code class="tt">email,email,passwd tartenpion ac-paris.fr|ac-versailles.fr</code>
Se autorizar� la creaci�n de clases y agrupaci�n de clases previa verificaci�n
de un correo electr�nico v�lido (mediante el env�o de un c�digo). Para la creaci�n de un establecimiento,
se enviar� la contrase�a
<span class="tt">tartenpion</span> ser� enviada
autom�ticamente a direcciones cuyo dominio es
<code class = "tt">ac-paris.fr</code> o <code class="tt"> ac-versailles.fr</code>.
Para otras �reas, se le debe hacer una solicitud por correo electr�nico.
<p>
El administrador del sitio (es decir, usted) siempre tiene el derecho
para crear un aula virtual de cualquier tipo.
</p>
:class class_quota wims_class_quota
Capacidad de disco para un aula virtual en MB
int
1,1000
This is the limit of disk space usage for each virtual class.
If a virtual class' disk space use reaches or exceeds this number in Megabytes,
the supervisor's homepage will get locked.

:class superclass_quota wims_superclass_quota
Disk quota for portal in Meg
int
1,2000
L�mite de espacio en disco que puede utilizar cada portal en el servidor.
Si el espacio en disco de un portal alcanza o supera este n�mero en Megabits,
se bloquear� la p�gina de inicio del administrador del portal.

:class class_user_limit wims_class_user_limit
L�mite de participantes en cada clase
int
0,2000

:housekeep backup_delete
Tiempo de destrucci�n de clases en d�as
int
100,2000
Ponga un n�mero de d�as entre 100 y 2000.
Si especifica un n�mero entero N, las clases archivadas se destruir�n N d�as despu�s de la fecha de su
archivando o mejor dicho el primero del mes siguiente.

:graphics default_ins_format ins_format
Formato de im�genes din�micas <span class="tt wims_warning">*</span>
choice
gif, jpeg, png
Lo siento por los defensores de png, pero gif es el formato m�s compatible.
Especialmente si puede instalar software que produzca archivos gif comprimidos.
La segunda opci�n es jpeg. png todav�a tiene algunos problemas de compatibilidad.
<p> Tenga en cuenta tambi�n que el formato de gr�ficos animados no se ve afectado por esta configuraci�n. </p>

:security,misc devel_modules
Pol�tica de acceso a m�dulos en desarrollo
choice
open,close
Se recomienda encarecidamente la pol�tica de "cerrar".
Si se selecciona <code class = "tt">close</code>, no se podr� acceder a los m�dulos en desarrollo
m�s que con autenticaci�n. En particular, los ejercicios no podr�n
estar incluido en una hoja de trabajo de la clase
ya que un participante no est� autenticado como desarrollador.
<p>
Se recomienda encarecidamente que elija <code class = "tt"> cerrar </code>, en orden
para evitar problemas futuros. Se debe alentar a los desarrolladores de m�dulos a
publique sus m�dulos en el espacio local para que otros puedan utilizarlos.
</p>
:class examlog_limit
N�mero m�ximo de sesiones de examen registradas por participante
int
0,100
Tenga en cuenta que esta es una limitaci�n de todo el sitio.
Las configuraciones de clases individuales no pueden exceder este l�mite.
Los registros de los detalles del examen pueden ocupar mucho espacio en disco,
por lo que si este l�mite es demasiado alto, es posible que se ejecuten algunas clases muy activas
en problemas de cuota de disco.
<p>
Si establece este l�mite en 0 o negativo, no se registrar� ning�n detalle del examen en
cualquier clase virtual.
</p>
:tech tmp_debug wims_tmp_debug
Modo de depuraci�n
choice
yes,no;$wims_name_yes,$wims_name_no
El cambio al modo de depuraci�n hace que aparezca cierta informaci�n en la parte inferior de las p�ginas
cuando la solicitud se realiza desde <code class="tt">localhost</code> o desde una IP de mantenimiento del sitio.
La carpeta de sesiones temporales (ubicada dentro de <code class="tt">down tmp/sessions/</code>)
se mantiene. Esto es �til para el desarrollo o para localizar errores.

:graphics default_insplot_font insplot_font
Tama�o de fuente para dibujos din�micos (gnuplot)
choice
small,medium,large
Este tama�o de fuente predeterminado es para im�genes din�micas creadas por Gnuplot.
Esta configuraci�n se puede cambiar en los m�dulos.

:doc doc_quota wims_class_quota
L�mite de espacio en disco para documentos en Meg
int
1,1000
L�mite de espacio en disco para cada documento interactivo
Si la memoria de un documento supera este n�mero en Megabytes,
ya no es posible modificarlo.

:forum forum_limit wims_forum_limit
N�mero m�ximo de foros
int
0,1000

:software gap_command
Comando de acceso a GAP
free

GAP es una calculadora de grupo utilizada por WIMS.
Si lo instal� en un directorio con un <code class="tt">gap.sh</code>
que se encuentra en las rutas habituales, no es necesario cambiar este campo.

:log general_log_limit
Longitud m�xima (en bytes) de los archivos de registro
int
0,102400000
Longitud m�xima (en bytes) de los archivos de registro principales (access.log, post.log, session.log).


:graphics gnuplot_format
Formato interno de im�genes creadas por gnuplot <span class="tt wims_warning">*</span>
choice
gif,jpeg,png
Utilice un formato conocido por la versi�n de Gnuplot que haya instalado.
Gnuplot se utiliza para crear gr�ficos din�micos. En algunas distribuciones,
Gnuplot no est� compilado para el formato <code class="tt">gif</code>.

:appearances home_module
M�dulo de entrada predeterminado <span class="tt wims_warning">!</span>
free

Este m�dulo es el punto de entrada al sitio.
No debe cambiarlo a menos que haya creado su propio m�dulo de entrada.

:appearances site_languages wims_site_languages
Idiomas admitidos <span class="tt wims_warning">*</span>
free

Idiomas disponibles:
ca (catal�n),
cn (gb chino),
de (alem�n),
en (ingl�s),
es (espa�ol),
fr (franc�s),
eso (italiano),
nl (holand�s),
si (esloveno),
tw (chino gib5).

Pon la lista de idiomas separados por espacios.
<p>
El orden de la lista es importante: los idiomas en primer lugar
  se utilizar� primero.
</p>

:tech idle_time
Retraso antes de que se elimine una sesi�n de clase inactiva
choice
600,1200,1800,2400,3600,5400,7200,10800,14400,18000;10 min,20 min, 30 min, 40 min, 1 hour,1.5 hours, 2 hours, 3 hours,4 hours, 5 hours
Reducir esto puede aumentar el rendimiento,
pero los visitantes lentos encontrar�n sus sesiones caducadas.
Por lo general, un usuario activo tocar� su sesi�n al menos una vez cada 10 minutos, a menos que est�
trabajando en un ejercicio muy duro (un caso bastante raro). Sin embargo, matar al
La sesi�n de este �ltimo resultar� en una gran frustraci�n.
�As� que ten cuidado!
<p>Si se realizar�n ex�menes en su instalaci�n, tenga en cuenta que este
el retraso debe exceder el tiempo permitido de cualquier hoja de examen.
</p>

:tech idle_time2
Tiempo antes de que se destruya una sesi�n an�nima.
choice
600,900,1200,1800,2400,3600,5400,7200,10800,14400,18000;10 min,15 min,20 min, 30 min, 40 min, 1 hour,1.5 hours, 2 hours, 3 hours,4 hours, 5 hours
Reducir este tiempo puede aumentar el rendimiento del servidor ...
pero los visitantes lentos ver�n desaparecer su sesi�n. Suele ser un usuario activo
cambie la sesi�n al menos una vez cada 10 minutos a menos que est� trabajando en un ejercicio muy duro.
Aunque esto puede resultar muy frustrante para el visitante, estas actividades son menos
importantes que cuando provienen de un aula virtual.
<p>
Este tiempo solo se aplica a sesiones sin autenticaci�n. �l
no puede ser mayor que el l�mite de tiempo para las sesiones de una clase.
</p>
:tech idle_time3
Retraso antes de que se destruya una primera sesi�n.
choice
300,360,480,600,720,900,1200,1800,2400,3600,7200;5 min,6 min,8 min,10 min,12 min,15 min,20 min, 30 min, 40 min, 1 hour,2 hours, 2 hours
Si se crea una sesi�n sin ser utilizada durante este tiempo, se destruir�.
<p>
Este retraso solo se aplica a las sesiones sin autenticaci�n.
La creaci�n de una sesi�n sin usarla generalmente se debe a los robots de Internet.
</p><p>
Este tiempo no puede ser mayor que el elegido para el
sesiones an�nimas.
</p>
:tech mail_opt
Opciones para el comando  !mailto
free

Agregue opciones al comando del sistema de correo.
Estas opciones se utilizar�n al ejecutar el comando interno  <code class="tt">!mailto</code>.
Consulte el manual de correo en su sistema para obtener detalles sobre las posibles opciones.
<p>
Por ejemplo, si el comando <code class="tt">mail</code> lo acepta, puede agregar
para agregar un encabezado de agente de usuario
a los correos electr�nicos enviados por WIMS.
</p>


:tech mail_hidden wims_mail_hidden
Cacher les adresses �lectroniques
choice
no,yes;$wims_name_no,$wims_name_yes
Montrer/Cacher les adresses �lectroniques
Cette option permet de rendre invisible les adresses �lectroniques sur le serveur.

:security manager_https
Conexi�n <code class="tt">https</code> para el mantenimiento del sitio. <span class="tt wims_warning">*</span>
choice
0,1;$wims_name_no,$wims_name_yes
Si es posible, utilice la conexi�n <code class="tt">https</code>.
Para aumentar la seguridad, WIMS es compatible con https.
Todo lo que tienes que hacer es configurar tu httpd
para aceptar solicitudes https.

:security manager_site
Mantenimiento s�lo desde esta(s) IP <span class="tt wims_warning">*</span>
free

Puede ingresar varios n�meros de IP separados por espacios.
N�meros parciales como 134.59.10. son aceptadas, pero tenga en cuenta que hay m�s
cuantos m�s n�meros se acepten, m�s aumentan los riesgos de seguridad.
El n�mero m�s seguro es 127.0.0.1
(localhost). En cualquier caso, solo coloque sitios de los que est� seguro.
  Una intrusi�n en su servidor como administrador del sitio representa una
  gran peligro para su instalaci�n.
<p>
Si coloca '*' en este campo, ya no podr� utilizar la herramienta de mantenimiento
en l�nea (y puede estar seguro de que nadie m�s podr� hacerlo).
</p>
:software maxima_command
Comando para llamar a M�xima
free

Por lo general, no es necesario cambiar este campo.
(Si Maxima se instala de la forma habitual con el ejecutable en PATH)

:log module_log
Registrar informaci�n de m�dulos individuales
choice
1,0;$wims_name_no,$wims_name_yes
La mayor�a de los m�dulos WIMS definen su propia informaci�n para poner en el registro.
Si desea ver la informaci�n de registro sobre los m�dulos, puede habilitarla aqu�
(ver tambi�n la definici�n de la longitud de los archivos de registro del m�dulo).
Sin embargo, tenga cuidado de que estos archivos de registro terminen tomando
espacio en disco, porque hay cientos de m�dulos.

:log module_log_limit
Longitud m�xima (en bytes) de los registros
int
0,102400000
Longitud m�xima de los archivos de registro del m�dulo. Este l�mite lo utilizan algunos archivos de registro generales secundarios, por lo que este n�mero tiene sentido incluso si est� deshabilitado el almacenamiento de archivos de registro del m�dulo.

:housekeep site_accounting
Logs de actividad
choice
0,1;$wims_name_no,$wims_name_yes
Habilita o deshabilita los registros de actividad diaria.
Es necesario activarlo para las estad�sticas de actividad del sitio as� como para las actividades generales de
tiempo de conexi�n de clase.

:housekeep mu_download_site
Download site for module update
checkbox
$mu_downloadsites
Sitio de descarga de actualizaciones de m�dulos
Los sitios espejo conocidos son
<pre>
$help_downloadsites
</pre>
:housekeep mu_publish_site
$wims_name_publish_center
checkbox
$mu_publishsitesw
los centros de publicaci�n de m�dulos educativos.
<pre>
$help_publishsites
</pre>

:housekeep mu_delay
Retraso en la actualizaci�n autom�tica del m�dulo
choice
0,1,2,4,7,10,15,20,30,50,100
N�mero de d�as entre cada actualizaci�n autom�tica del m�dulo
<p>
La elecci�n de un valor m�s alto le permite reducir el riesgo de detectar nuevos errores, ya que se espera que estos se descubran y solucionen durante el retraso.
Si elige un n�mero muy peque�o aqu� (0 o 1), debe establecer el sitio de descarga al espejo principal <code class="tt">$(mu_sites[1])</code>.
</p>
:housekeep mu_zone
Zones for automatic module update
free

La actualizaci�n autom�tica de m�dulos est� limitada a las �reas indicadas.
<code class="tt">all</code> significa todo.
<p>
Zonas que se pueden elegir: <dl>
<dt><code class="tt">K</code>
    <dd>Kindergarten (que puede afirnar con  K1 K2 K3)
<dt><code class="tt">E</code>
    <dd>Escuela primaria (que puede afirnar con E1 E2 E3 E4 E5 E6)
<dt><code class="tt">H</code>
    <dd>Secundaria y preparatoria (que puede afirnar con H1 H2 H3 H4 H5 H6)
<dt><code class="tt">U</code>
    <dd>Universidad (que puede afirnar con U1 U2 U3 U4 U5)
<dt><code class="tt">Lang</code>
    <dd>Lengua extranjera.
<dt><code class="tt">tool</code>
    <dd>Herramientas en l�nea y ayudas.
</dl>
</p><p>
Puedes poner varias zonas separadas por espacios.
</p>
:housekeep mu_cat
Categor�as actualizadas autom�ticamente
free

Limita la actualizaci�n autom�tica a las categor�as especificadas.
<code class="tt">all</code> significa todas las categor�as.
<p>
Algunas opciones de categor�as (no exhaustivas): <dl>
<dt><code class="tt">math</code> resp. <code class="tt">physics chemistry language</code> etc.
    <dd>Disciplinas correspondientes.
<dt><code class="tt">cs</code>
    <dd>Computer science.
</dl>
</p><p>
Puedes poner varias categor�as separadas por espacios.
</p>
:log old_log_files
N�mero de archivos de registro guardados <span class="tt wims_warning">*</span>
int
0,20
Este es el n�mero de archivos de registro antiguos que se guardan. Aumentar este n�mero mantiene la informaci�n por m�s tiempo, pero tambi�n aumenta el espacio en disco utilizado.
Consulte tambi�n la secci�n "Limpieza/actualizaci�n diaria".
:housekeep log_delete
N�mero de d�as despu�s de los cuales se destruyen los registros generales.
int
3,1000

Los registros en cuesti�n son
<span class="tt">access.log, referer.log, session.log, post.log, mail.log",
    user_error.log, internal_error.log, refuse.log
</span>

:software pari_command
Comandp para ejecutar PARI/GP
free

PARI/GP es una calculadora de teor�a num�rica utilizada en muchos m�dulos WIMS.
Si sigue su procedimiento de instalaci�n con un ejecutable binario
en la ruta habitual, no es necesario que toque este campo.

:resources priority
Sitios con acceso prioritario
free

Se permite el acceso incluso si el servidor est� muy ocupado.
Las conexiones de estos sitios no se rechazar�n cuando
la carga del servidor est� por encima del umbral.
$sitehelp

:appearances page_bgcolor wims_bgcolor
Color de fondo principal
color

Color de fondo de la mayor�a de las p�ginas WIMS.
Use un nombre de color o, mejor, un c�digo hexadecimal #rrvvbb
  (ver los <a href="http://www.w3schools.com/HTML/html_colornames.asp">est�ndares html</a>).

:appearances page_bgimg wims_bgimg
Imagen de fondo
free

Se aplicar� un mosaico de fondo.
Escriba una URL v�lida. <br>
Mire la carpeta <code>public_html/gifs/bg</code> que contiene algunas im�genes de fondo predefinidas. <br>
A estos �ltimos se les puede llamar directamente por su nombre, sin especificar la ruta de acceso. <br>
<p> Lista de archivos de imagen predefinidos:</p>
<pre>$bgimgs</pre>

:tech,misc rafale_level
Severidad anti-r�faga
int
0,100
Las solicitudes de ejercicios r�pidos sin intentos serios de resolverlos generar�n errores.
Esta es una de las medidas anti-trampa del sistema.
Un nivel de gravedad m�s alto da como resultado m�s requisitos a tiempo antes de que se produzcan nuevos
Se permiten ejercicios. Si elige un valor de 0 o menos para esta gravedad,
se desactivar� esta medida.

:appearances ref_bgcolor wims_ref_bgcolor
Color de fondo de la tabla
color

Color de fondo que aparece en los men�s principales y en muchos m�dulos de administraci�n de WIMS.
Utilice un nombre de color o c�digo hexadecimal #rrggbb (consulte el est�ndar html para obtener m�s detalles).

:appearances ref_menucolor wims_ref_menucolor
Color de los enlaces en men�s y tabla de referencia.
color

Puede elegir el enlace del men� de colores aqu�.
Esto solo es posible para "temas nuevos", por lo que no para el tema predeterminado.
El�jalo seg�n el color de fondo de la mesa.

:appearances ref_button_bgcolor wims_ref_button_bgcolor
Color de fondo de los botones
color

El color de fondo de los botones correspondientes a las acciones.
Esta elecci�n no es posible para el tema <code class = "tt">default</code>.
El�gelo seg�n el color de fondo de las tablas.

:appearances ref_button_color wims_ref_button_color
Color del texto de los botones
color

El color de los botones correspondientes a las acciones.
Esta elecci�n no es posible para el tema <code class = "tt">default</code>.

:appearances ref_button_help_bgcolor wims_ref_button_help_bgcolor
Color de fondo del bot�n de ayuda
color

El color de fondo de los botones de ayuda.
Esta elecci�n no es posible para el tema <code class="tt">default</code>.

:appearances ref_button_help_color wims_ref_button_help_color
Color del texto de los botones de ayuda
color

El color del texto de los botones de ayuda.
Esta elecci�n no es posible para el tema <code class="tt">default</code>.

:appearances theme wims_theme
Tema de presentaci�n
choice
$themelist
El tema de presentaci�n
<code class="tt">default</code> es el original. El tema <code class="tt">standard</code> permite un estilo CSS y un tema de iconos m�s configurables.

:appearances theme_icon wims_theme_icon
Tema de iconos
choice
$iconlist;$iconpromptlist
el tema de los iconos de presentaci�n.
Esta elecci�n no es posible para el tema <code class="tt">d�fault</code>.

:appearances css wims_css
Hoja de estilo
choice
$csslist
La hoja de estilo CSS modifica todas las p�ginas del sitio.
<p>
Las hojas de estilo disponibles (css) est�n en
<code class="tt">public_html/html/css/$lang</code>. Si desea tener otras hojas de estilo,
puede poner nuevas en esta carpeta.
</p><p>
Si escoge css=<code class="tt">-theme-</code>, la hoja de estilo del tema actual
se utilizar�. No se cargar� ninguna hoja de estilo si
css=<code class="tt">----</code>.
</p>
:appearances frontmsg wims_frontmsg
M�dulo de mensajes
free

Direcci�n de un m�dulo de presentaci�n en la p�gina de inicio
Direcci�n de un m�dulo en local/data/para mostrar informaci�n, un carrusel de ejemplos en la p�gina de inicio del servidor
Si desea tener una versi�n por idioma, puede escribir, por ejemplo
<span class="tt">local/data/news fr en</span>.
El m�dulo est� en forma estandarizada con dos archivos.
<span class="tt">data/blocnews</span> y <span class="tt">data/blocexamples</span>
donde se almacena la base de datos. Para completar.
:resources rlimit_cpu
Permiso de tiempo de procesamiento en segundos <span class="tt wims_warning">*</span>
int
1,10000
Medida de seguridad contra ataques de denegaci�n de servicio
Si la solicitud de un usuario necesita m�s tiempo que esta cantidad para procesarse,
se cortar� el c�lculo y se enviar� un mensaje de error.
Es in�til aumentar demasiado este n�mero, porque
en circunstancias normales pocos usuarios de Internet esperar�n m�s de unas pocas decenas de segundos
por una p�gina.
<p>
Esta tambi�n es una medida de seguridad muy importante para verificar
los ataques de denegaci�n de servicio.
</p>

:appearances show_author wims_show_author
Visualizaci�n de los nombres de los autores
choice
yes,no;$wims_name_yes,$wims_name_no
Muestra los nombres de los autores en el motor de b�squeda.
Seleccione <code class="tt">si</code> si desea que se
muestren los nombres de los autores en los resultados de los motores de b�squeda

:appearances show_stat wims_show_stat
Mostrar estad�sticas de uso del sitio
choice
yes,no;$wims_name_yes,$wims_name_no
Las cuentas de registro deben estar habilitadas
para que se puedan mostrar las estad�sticas.

:housekeep mu_auto
M�todo de actualizaci�n
choice
none,check,install,update,all
M�todo de actualizaci�n autom�tica diaria.
<dl>
<dt><code class="tt">none</code>
 <dd>Desactivar la actualizaci�n autom�tica
 <dt><code class="tt">check</code>
 <dd>Verifique qu� necesita actualizarse y env�e un correo electr�nico
 al administrador (es decir, usted). No instale
 ni actualice m�dulos.
 <dt><code class="tt">install</code>
 <dd>Instala m�dulos nuevos pero no actualiza
 los m�dulos existentes.
 <dt><code class="tt">update</code>
 <dd>Actualiza m�dulos existentes pero no instala m�dulos nuevos.
 Esto le permite beneficiarse de las correcciones de errores.
 <dt><code class="tt">all</code>
 <dd>Instala nuevos m�dulos y actualiza los m�dulos existentes
 </dl>

:misc site_description wims_site_description
Descripci�n del lugar
free

Descripci�n colocada en el encabezado de cada p�gina creada por el servidor
para informar a los robots de Internet.
<p>
 Los m�dulos tienen acceso a este texto mediante la variable
 $$wims_site_description.
 </p>

:misc site_keywords wims_site_keywords
Palabras clave del sitio
free

Lista general de palabras clave colocadas al comienzo de cada p�gina.
Cada m�dulo agregar� su propia lista de palabras clave.
El objetivo principal es mejorar el SEO mediante los robots de los motores de b�squeda.
<p>
 Los m�dulos tienen acceso a este texto a trav�s de la variable
 $$wims_site_keywords
</p>

:misc site_hostname wims_site_hostname
Nombre de host p�blico del servidor
free

Le permite personalizar el nombre del servidor (si es diferente del nombre de host de la m�quina).
<p>Si ha instalado su servidor detr�s de un proxy
(por ejemplo, para balanceo de carga),
el nombre de host de la m�quina ser� diferente del que se muestra a los usuarios
</p><p>
 En este caso, indique el nombre de host aqu� p�blico,
  que utilizarse, por ejemplo, en tareas programadas
  (actualizaci�n de m�dulos, eliminaci�n de clases caducadas, etc.)
</p><p>
Ingrese solo el nombre del servidor (por ejemplo, "wims.wimsedu.info", sin "https://").
</p>

:appearances site_manager wims_site_manager
Direcci�n de correo electr�nico del administrador de <span class="tt wims_warning">*</span>
free

Correo electr�nico para contactar al webmaster del sitio.
Es a esta direcci�n a la que los visitantes y usuarios del servidor informar�n sobre los problemas del servidor.
<p>
Debe cambiar el valor predeterminado  $DF_site_manager a SU direcci�n de correo electr�nico, si no lee los
mensajes enviados a $DF_site_manager.
</p><p>
Los m�dulos tienen acceso a este texto a trav�s de la variable
$$wims_site_manager.
</p>

:appearances site_dpd wims_site_dpd
Datos de contacto del delegado de protecci�n de datos <span class="tt wims_warning">*</span>
free

Delegado del establecimiento que aloja el servidor.
La ley europea (art�culo 37 del RGPD) obliga a los organismos p�blicos (universidades, etc.)
a designar un Delegado de Protecci�n de Datos (DPD).
Si su servidor est� alojado por una organizaci�n de este tipo,
por ejemplo, puede ingresar los detalles de contacto de su DPO aqu�.
Aparecer�n en la p�gina de pol�tica de privacidad de este sitio WIMS,
como contacto para
los usuarios.

:graphics texbasesize
Paso de tama�o de fuente TeX predeterminado <span class="tt wims_warning">*</span>
choice
0,1,2,3,4,5,6,7,8,9,10
Este es el tama�o de fuente predeterminado en las im�genes gr�ficas generadas por TeX
(es decir, f�rmulas matem�ticas).
Este tama�o predeterminado debe configurarse para que coincida con el
tama�o de fuente del texto del navegador de los visitantes promedio. Este �ltimo puede cambiar
este tama�o para adaptarse mejor a su situaci�n, pero este cambio no se guarda de una
sesi�n a otra, excepto para los usuarios de clases virtuales.
<p>
�No ajuste este tama�o de fuente solo de acuerdo con su propio navegador! Piense en
otros que pueden tener diferentes tama�os de fuente en sus navegadores.
 </p><p>
 Cada paso aumenta (disminuye) un 9% del tama�o lineal de la fuente.
 </p>
:resources threshold1
Primer umbral de carga
int
10,500
Arriba, se negar� el acceso de visitantes.
Si la carga del servidor (calculada por 'w', 'uptime' o 'top') excede este valor por
0.01, se negar� el acceso a los visitantes fuera de un aula virtual.
<p>
El tiempo de ejecuci�n de cada solicitud aumentar� si la
carga del servidor se acerca a este valor.5

</p><p>Actualmente, este valor se calcula para un solo procesador.
Puede multiplicar este valor por el n�mero de procesadores.
</p>
:resources threshold2
Segundo umbral de carga
int
10,500
Arriba, las conexiones ser�n rechazadas (excluyendo los sitios prioritarios)
Si la carga del servidor (calculada por 'w', 'uptime' o 'top') excede este valor por
0.01, el acceso de visitantes que no provengan de sitios prioritarios ser� rechazado.
Este valor debe ser mayor que el primer umbral de carga.

<p>Actualmente, este valor se calcula para el caso de un solo procesador.
Puede multiplicar este valor por el n�mero de procesadores.
</p>
:security trusted_modules
Lista de m�dulos de confianza
free

Un m�dulo de confianza puede utilizar comandos administrativos prohibidos a los m�dulos habituales.
Estos comandos permiten que el m�dulo modifique o vea informaci�n del servidor generalmente
oculta al p�blico. Por razones de seguridad, solo los m�dulos de administraci�n
y los m�dulos escritos por autores confiables
pueden tener acceso a estos comandos.
<p>
Los m�dulos de administraci�n (en el subdirectorio adm/) y el m�dulo de inicio
se conf�an autom�ticamente. Si desea agregar otros m�dulos a esta lista, agregue
sus direcciones (la parte despu�s de `module = 'en la cadena de solicitud http) en
este campo, separadas por espacios en blanco.
</p><p>
Evite definir m�dulos de confianza a menos que est� realmente seguro de lo que est� haciendo.
</p>
:class user_limit wims_user_limit
Nombre m�ximo de participantes inscritos en el servidor
int
10,100000
El registro de nuevos participantes falla si la suma de participantes supera este l�mite.
Cada vez que se registre un nuevo participante, se computar� la suma
de los participantes existentes en todas las clases virtuales.

:resources workfile_limit
Longueur maximum des fichiers de donn�es
int
10000,100000000
Este l�mite se aplica a muchos archivos,
incluidos los archivos de script en los m�dulos, as� como los archivos de datos
de los trabajos de los participantes. As� que no lo establezca demasiado peque�o.

:misc usecookie wims_usecookie
Cookie pour les visiteurs anonymes
choice
yes,no;$wims_name_yes,$wims_name_no
Permite el seguimiento de visitantes an�nimos.
Si elige "s�", el servidor enviar� cookies a visitantes an�nimos,
lo que ayuda a rastrear al usuario.
<p>
Tenga en cuenta que las cookies no son obligatorias: incluso si
el visitante deshabilita las cookies, a�n podr� trabajar normalmente en WIMS.
La principal diferencia es que las cookies pueden ayudarles a mantener sus
preferencias personales por m�s tiempo y pueden mejorar el rendimiento del servidor al
eliminar las creaciones de sesiones innecesarias.
<p>
El uso de cookies para trabajos en clases virtuales no se ve afectado por este
par�metro.
<p>
:log show_ip
mostrar las IP de los usuarios y las horas de trabajo en los datos sin procesar de un usuario en una clase
choice
yes,no;$wims_name_yes,$wims_name_no
Si se selecciona <span class="tt">no</span>, el administrador de la clase no ver� el n�mero de IP en el registro del estudiante ni tampoco las horas de trabajo.

:software scilab_command
Comando para ejecutar Scilab
free

Software de c�lculo digital de c�digo abierto

:auth cas_auth
Servidor CAS
free

Estos valores se utilizar�n por defecto en las clases que permitan la autenticaci�n por CAS.
En el caso de varios servidores CAS, sep�relos por <code>|</code>;
puede indicar el nombre que aparecer� para los profesores posteriormente, por ejemplo
<pre>
https://url1, site1 | https://url2, site2
</pre>

:auth php_auth
Direcci�n de un script PHP
free

Estos valores se utilizar�n por defecto en las clases que permitan la autenticaci�n mediante un script PHP.

:auth ldap_auth
Host LDAP
free

Estos valores se utilizar�n de forma predeterminada en las clases que permitan la autenticaci�n mediante un directorio LDAP.
:auth ldap_port
Puerto LDAP
free

Estos valores se utilizar�n de forma predeterminada en las clases que permitan la autenticaci�n mediante un directorio LDAP.

:auth ldap_version
Versi�n LDAP
free

Estos valores se utilizar�n de forma predeterminada en las clases que permitan la autenticaci�n mediante un directorio LDAP.

:auth ldap_base
Base LDAP
free

Estos valores se utilizar�n de forma predeterminada en las clases que permitan la autenticaci�n mediante un directorio LDAP.

:auth ldap_branch
Rama LDAP
free

Estos valores se utilizar�n de forma predeterminada en las clases que permitan la autenticaci�n mediante un directorio LDAP.

:auth ldap_uid
ID de LDAP
free

Ponga aqu� el identificador utilizado por el directorio. Este es el identificador que
el participante debe ingresar como identificador.
Estos valores se utilizar�n de forma predeterminada en las clases que permitan la autenticaci�n mediante un directorio LDAP.

:auth ldap_login
Inicio de sesi�n Wims  usando identificadores LDAP
free

Es este identificador el que utilizar� WIMS en su estructura interna.
Estos valores se utilizar�n de forma predeterminada en las clases que permitan la autenticaci�n mediante un directorio LDAP.
:auth ldap_email
Correo electr�nico LDAP
free

Estos valores se utilizar�n de forma predeterminada en las clases que permitan el registro mediante un directorio LDAP.
:auth ldap_photourl
Foto LDAP
free

Estos valores se utilizar�n de forma predeterminada en las clases que permitan el registro mediante un directorio LDAP.
:auth ldap_regnum
N�mero de registro LDAP
free

Estos valores se utilizar�n de forma predeterminada en las clases que permitan el registro mediante un directorio LDAP.

:appearances site_logo
Direcci�n de un logotipo institucional
free

Una imagen que aparecer� en el banner superior.

:appearances site_logolink
Enlace externo sobre el logo institucional
free

P�gina que se muestra al hacer clic en el logotipo.

:tech validator_address
Direcci�n de un validador de w3c
free

Por ejemplo, http://validator.w3.org/check

:software octave_command
Comando de acceso a Octave
free

GNU Octave es un software de c�lculo, destinado principalmente a c�lculos num�ricos.
Proporciona una interfaz de l�nea de comandos conveniente para resolver
num�ricamente problemas lineales y no lineales y para realizar otros
experimentos num�ricos utilizando un lenguaje que es esencialmente compatible
con Matlab.

:software QRencode_command
Comando de acceso QRencode
free

QRencode se utiliza para crear c�digos QR en el servidor.

:tech classification_open
Posibilidad de indexar ejercicios OEF.
choice
no,yes;$wims_name_no,$wims_name_yes
Si es as�, un profesor puede indexar los ejercicios de OEF.
A partir de una clase, puede poner palabras clave gratuitas o seg�n una taxonom�a
a los ejercicios para mejorar los motores de b�squeda. Debe ponerse en contacto con
la asociaci�n WIMS EDU referencement@wimsedu.info
para que estos datos puedan ser utilizados.

:optionalmod allowed_optional_module
Activaci�n de m�dulos opcionales
checkbox
Trabajos libres
Elija m�dulos opcionales activos

:class max_techvar
N�mero m�ximo de variables t�cnicas
int
1,$MAX_LTECHVAR
Este es el n�mero en cada clase o nivel para estructuras complejas.
