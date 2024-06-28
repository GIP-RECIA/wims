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
a menos que tenga una configuración especial de instalación del sistema.

:tech aliased_cgi
cgi to html address aliasing
choice
yes,no;$wims_name_yes,$wims_name_no
Configúrelo en sí si desea que los robots de
Internet vean algunos contenidos de WIMS como
páginas html. Ayuda a que el sitio esté mejor referenciado y sea más conocido, pero necesita Apache 1.3 o superior para que esto funcione correctamente.
<p>
Si acaba de actualizar Apache httpd y tiene
problemas con direcciones desconocidas cuando
activa esta función, ejecute el script<code class="tt">bin/apache-config</code>.
</p>
:tech aliased_getfile
Sobrescribir la dirección de los archivos descargados
choice
yes,no;$wims_name_yes,$wims_name_no
Activar esto le permite obtener los nombres de archivo correctos al descargar
archivos generados por wims: archivos de respaldo, datos de los estudiantes en clases virtuales,
algunos archivos de imagen, etc. De lo contrario, todas las descargas de archivos tendrán por
defecto el nombre "wims.cgi", que debe corregirse manualmente cuando guarde el archivo.
<p>
Puede tener problemas para descargar si su Apache httpd no está configurado correctamente.
En este caso, diga "no".
</p>
:housekeep backup_hour
Hora de respaldo diario
choice
-1,1,2,3,4,5,6,7,8,9,11,13,15,17,18,19,20,21,22; none,1,2,3,4,5,6,7,8,9,11,13,15,17,18,19,20,21,22
Esta es la hora en la que se realizará la copia
de seguridad diaria de los datos. Elija una hora en la que el servidor no esté ocupado o elija
<code class="tt">no</code> para desactivar la copia de seguridad diaria.

:resources busyhours wims_busyhours
Horas ocupadas del servidor
free

Lista de momentos en los que es probable que el servidor esté muy ocupado.
Ciertas actividades como la publicación local de un módulo estarán prohibidas durante estos períodos.
Dar una lista de palabras formada por dos números: por ejemplo
<code class="tt">08 09 13 14</code>.

:graphics default_anim_format ins_format
Formato de animaciones dinámicas <span class="tt wims_warning">*</span>
choice
gif, mng
Formato de imagen para animaciones dinámicas.
Solo hay dos posibilidades: <code class = "tt">gif</code> o <code class = "tt">mng</code>.
Sin embargo, la mayoría de los navegadores actualmente en uso no pueden mostrar animaciones en línea.

:graphics default_texposition
Posición de fórmula predeterminada/MathML
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
Número máximo de aulas virtuales
int
0,1000

:class class_regpass wims_class_regpass
Derechos para crear clases virtuales
free

Este parámetro define los derechos para crear un aula virtual.
en este sitio. Contiene tres campos separados por comas,
definir el derecho de acceso para crear una clase individual,
un grupo de clase, un establecimiento. Para cada campo,
son posibles las siguientes definiciones:
<dl>
<dt><code class="tt">all</code> <dd> Cualquiera puede crear una clase.
<dt><code class="tt">deny</code> <dd> Nadie puede crear una clase.
<dt><code class="tt">correo electrónico </code> <dd> Cualquiera puede crear una clase,
 si se envía una dirección de correo electrónico válida.
 El sitio verificará que esta dirección de correo electrónico sea válida.
<dt> <code class="tt"> contraseña ****** ----- </code>
<dd> El usuario debe ingresar la contraseña
para obtener permiso para crear una clase. Debes ingresar la contraseña
como la segunda palabra del parámetro (reemplazando <code class = "tt"> ****** </code>)
y comunique la contraseña a quienes quieran crear una clase. <br>
Se puede agregar una tercera palabra. Te permite definir una lista de dominios de correo
para el cual un envío automático
se enviará la contraseña
(los dominios deben estar separados por |).
<dt> <code class = "tt"> Nombres de host o números de IP </code> <dd>
 Solo personas que se conectan desde extensiones definidas
 se le permitirá crear una clase.
>>>>>>> .r16125
$sitehelp
</dl>
Por ejemplo, si pones
<code class="tt">email,email,passwd tartenpion ac-paris.fr|ac-versailles.fr</code>
Se autorizará la creación de clases y agrupación de clases previa verificación
de un correo electrónico válido (mediante el envío de un código). Para la creación de un establecimiento,
se enviará la contraseña
<span class="tt">tartenpion</span> será enviada
automáticamente a direcciones cuyo dominio es
<code class = "tt">ac-paris.fr</code> o <code class="tt"> ac-versailles.fr</code>.
Para otras áreas, se le debe hacer una solicitud por correo electrónico.
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
Límite de espacio en disco que puede utilizar cada portal en el servidor.
Si el espacio en disco de un portal alcanza o supera este número en Megabits,
se bloqueará la página de inicio del administrador del portal.

:class class_user_limit wims_class_user_limit
Límite de participantes en cada clase
int
0,2000

:housekeep backup_delete
Tiempo de destrucción de clases en días
int
100,2000
Ponga un número de días entre 100 y 2000.
Si especifica un número entero N, las clases archivadas se destruirán N días después de la fecha de su
archivando o mejor dicho el primero del mes siguiente.

:graphics default_ins_format ins_format
Formato de imágenes dinámicas <span class="tt wims_warning">*</span>
choice
gif, jpeg, png
Lo siento por los defensores de png, pero gif es el formato más compatible.
Especialmente si puede instalar software que produzca archivos gif comprimidos.
La segunda opción es jpeg. png todavía tiene algunos problemas de compatibilidad.
<p> Tenga en cuenta también que el formato de gráficos animados no se ve afectado por esta configuración. </p>

:security,misc devel_modules
Política de acceso a módulos en desarrollo
choice
open,close
Se recomienda encarecidamente la política de "cerrar".
Si se selecciona <code class = "tt">close</code>, no se podrá acceder a los módulos en desarrollo
más que con autenticación. En particular, los ejercicios no podrán
estar incluido en una hoja de trabajo de la clase
ya que un participante no está autenticado como desarrollador.
<p>
Se recomienda encarecidamente que elija <code class = "tt"> cerrar </code>, en orden
para evitar problemas futuros. Se debe alentar a los desarrolladores de módulos a
publique sus módulos en el espacio local para que otros puedan utilizarlos.
</p>
:class examlog_limit
Número máximo de sesiones de examen registradas por participante
int
0,100
Tenga en cuenta que esta es una limitación de todo el sitio.
Las configuraciones de clases individuales no pueden exceder este límite.
Los registros de los detalles del examen pueden ocupar mucho espacio en disco,
por lo que si este límite es demasiado alto, es posible que se ejecuten algunas clases muy activas
en problemas de cuota de disco.
<p>
Si establece este límite en 0 o negativo, no se registrará ningún detalle del examen en
cualquier clase virtual.
</p>
:tech tmp_debug wims_tmp_debug
Modo de depuración
choice
yes,no;$wims_name_yes,$wims_name_no
El cambio al modo de depuración hace que aparezca cierta información en la parte inferior de las páginas
cuando la solicitud se realiza desde <code class="tt">localhost</code> o desde una IP de mantenimiento del sitio.
La carpeta de sesiones temporales (ubicada dentro de <code class="tt">down tmp/sessions/</code>)
se mantiene. Esto es útil para el desarrollo o para localizar errores.

:graphics default_insplot_font insplot_font
Tamaño de fuente para dibujos dinámicos (gnuplot)
choice
small,medium,large
Este tamaño de fuente predeterminado es para imágenes dinámicas creadas por Gnuplot.
Esta configuración se puede cambiar en los módulos.

:doc doc_quota wims_class_quota
Límite de espacio en disco para documentos en Meg
int
1,1000
Límite de espacio en disco para cada documento interactivo
Si la memoria de un documento supera este número en Megabytes,
ya no es posible modificarlo.

:forum forum_limit wims_forum_limit
Número máximo de foros
int
0,1000

:software gap_command
Comando de acceso a GAP
free

GAP es una calculadora de grupo utilizada por WIMS.
Si lo instaló en un directorio con un <code class="tt">gap.sh</code>
que se encuentra en las rutas habituales, no es necesario cambiar este campo.

:log general_log_limit
Longitud máxima (en bytes) de los archivos de registro
int
0,102400000
Longitud máxima (en bytes) de los archivos de registro principales (access.log, post.log, session.log).


:graphics gnuplot_format
Formato interno de imágenes creadas por gnuplot <span class="tt wims_warning">*</span>
choice
gif,jpeg,png
Utilice un formato conocido por la versión de Gnuplot que haya instalado.
Gnuplot se utiliza para crear gráficos dinámicos. En algunas distribuciones,
Gnuplot no está compilado para el formato <code class="tt">gif</code>.

:appearances home_module
Módulo de entrada predeterminado <span class="tt wims_warning">!</span>
free

Este módulo es el punto de entrada al sitio.
No debe cambiarlo a menos que haya creado su propio módulo de entrada.

:appearances site_languages wims_site_languages
Idiomas admitidos <span class="tt wims_warning">*</span>
free

Idiomas disponibles:
ca (catalán),
cn (gb chino),
de (alemán),
en (inglés),
es (español),
fr (francés),
eso (italiano),
nl (holandés),
si (esloveno),
tw (chino gib5).

Pon la lista de idiomas separados por espacios.
<p>
El orden de la lista es importante: los idiomas en primer lugar
  se utilizará primero.
</p>

:tech idle_time
Retraso antes de que se elimine una sesión de clase inactiva
choice
600,1200,1800,2400,3600,5400,7200,10800,14400,18000;10 min,20 min, 30 min, 40 min, 1 hour,1.5 hours, 2 hours, 3 hours,4 hours, 5 hours
Reducir esto puede aumentar el rendimiento,
pero los visitantes lentos encontrarán sus sesiones caducadas.
Por lo general, un usuario activo tocará su sesión al menos una vez cada 10 minutos, a menos que esté
trabajando en un ejercicio muy duro (un caso bastante raro). Sin embargo, matar al
La sesión de este último resultará en una gran frustración.
¡Así que ten cuidado!
<p>Si se realizarán exámenes en su instalación, tenga en cuenta que este
el retraso debe exceder el tiempo permitido de cualquier hoja de examen.
</p>

:tech idle_time2
Tiempo antes de que se destruya una sesión anónima.
choice
600,900,1200,1800,2400,3600,5400,7200,10800,14400,18000;10 min,15 min,20 min, 30 min, 40 min, 1 hour,1.5 hours, 2 hours, 3 hours,4 hours, 5 hours
Reducir este tiempo puede aumentar el rendimiento del servidor ...
pero los visitantes lentos verán desaparecer su sesión. Suele ser un usuario activo
cambie la sesión al menos una vez cada 10 minutos a menos que esté trabajando en un ejercicio muy duro.
Aunque esto puede resultar muy frustrante para el visitante, estas actividades son menos
importantes que cuando provienen de un aula virtual.
<p>
Este tiempo solo se aplica a sesiones sin autenticación. Él
no puede ser mayor que el límite de tiempo para las sesiones de una clase.
</p>
:tech idle_time3
Retraso antes de que se destruya una primera sesión.
choice
300,360,480,600,720,900,1200,1800,2400,3600,7200;5 min,6 min,8 min,10 min,12 min,15 min,20 min, 30 min, 40 min, 1 hour,2 hours, 2 hours
Si se crea una sesión sin ser utilizada durante este tiempo, se destruirá.
<p>
Este retraso solo se aplica a las sesiones sin autenticación.
La creación de una sesión sin usarla generalmente se debe a los robots de Internet.
</p><p>
Este tiempo no puede ser mayor que el elegido para el
sesiones anónimas.
</p>
:tech mail_opt
Opciones para el comando  !mailto
free

Agregue opciones al comando del sistema de correo.
Estas opciones se utilizarán al ejecutar el comando interno  <code class="tt">!mailto</code>.
Consulte el manual de correo en su sistema para obtener detalles sobre las posibles opciones.
<p>
Por ejemplo, si el comando <code class="tt">mail</code> lo acepta, puede agregar
para agregar un encabezado de agente de usuario
a los correos electrónicos enviados por WIMS.
</p>


:tech mail_hidden wims_mail_hidden
Cacher les adresses électroniques
choice
no,yes;$wims_name_no,$wims_name_yes
Montrer/Cacher les adresses électroniques
Cette option permet de rendre invisible les adresses électroniques sur le serveur.

:security manager_https
Conexión <code class="tt">https</code> para el mantenimiento del sitio. <span class="tt wims_warning">*</span>
choice
0,1;$wims_name_no,$wims_name_yes
Si es posible, utilice la conexión <code class="tt">https</code>.
Para aumentar la seguridad, WIMS es compatible con https.
Todo lo que tienes que hacer es configurar tu httpd
para aceptar solicitudes https.

:security manager_site
Mantenimiento sólo desde esta(s) IP <span class="tt wims_warning">*</span>
free

Puede ingresar varios números de IP separados por espacios.
Números parciales como 134.59.10. son aceptadas, pero tenga en cuenta que hay más
cuantos más números se acepten, más aumentan los riesgos de seguridad.
El número más seguro es 127.0.0.1
(localhost). En cualquier caso, solo coloque sitios de los que esté seguro.
  Una intrusión en su servidor como administrador del sitio representa una
  gran peligro para su instalación.
<p>
Si coloca '*' en este campo, ya no podrá utilizar la herramienta de mantenimiento
en línea (y puede estar seguro de que nadie más podrá hacerlo).
</p>
:software maxima_command
Comando para llamar a Máxima
free

Por lo general, no es necesario cambiar este campo.
(Si Maxima se instala de la forma habitual con el ejecutable en PATH)

:log module_log
Registrar información de módulos individuales
choice
1,0;$wims_name_no,$wims_name_yes
La mayoría de los módulos WIMS definen su propia información para poner en el registro.
Si desea ver la información de registro sobre los módulos, puede habilitarla aquí
(ver también la definición de la longitud de los archivos de registro del módulo).
Sin embargo, tenga cuidado de que estos archivos de registro terminen tomando
espacio en disco, porque hay cientos de módulos.

:log module_log_limit
Longitud máxima (en bytes) de los registros
int
0,102400000
Longitud máxima de los archivos de registro del módulo. Este límite lo utilizan algunos archivos de registro generales secundarios, por lo que este número tiene sentido incluso si está deshabilitado el almacenamiento de archivos de registro del módulo.

:housekeep site_accounting
Logs de actividad
choice
0,1;$wims_name_no,$wims_name_yes
Habilita o deshabilita los registros de actividad diaria.
Es necesario activarlo para las estadísticas de actividad del sitio así como para las actividades generales de
tiempo de conexión de clase.

:housekeep mu_download_site
Download site for module update
checkbox
$mu_downloadsites
Sitio de descarga de actualizaciones de módulos
Los sitios espejo conocidos son
<pre>
$help_downloadsites
</pre>
:housekeep mu_publish_site
$wims_name_publish_center
checkbox
$mu_publishsitesw
los centros de publicación de módulos educativos.
<pre>
$help_publishsites
</pre>

:housekeep mu_delay
Retraso en la actualización automática del módulo
choice
0,1,2,4,7,10,15,20,30,50,100
Número de días entre cada actualización automática del módulo
<p>
La elección de un valor más alto le permite reducir el riesgo de detectar nuevos errores, ya que se espera que estos se descubran y solucionen durante el retraso.
Si elige un número muy pequeño aquí (0 o 1), debe establecer el sitio de descarga al espejo principal <code class="tt">$(mu_sites[1])</code>.
</p>
:housekeep mu_zone
Zones for automatic module update
free

La actualización automática de módulos está limitada a las áreas indicadas.
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
    <dd>Herramientas en línea y ayudas.
</dl>
</p><p>
Puedes poner varias zonas separadas por espacios.
</p>
:housekeep mu_cat
Categorías actualizadas automáticamente
free

Limita la actualización automática a las categorías especificadas.
<code class="tt">all</code> significa todas las categorías.
<p>
Algunas opciones de categorías (no exhaustivas): <dl>
<dt><code class="tt">math</code> resp. <code class="tt">physics chemistry language</code> etc.
    <dd>Disciplinas correspondientes.
<dt><code class="tt">cs</code>
    <dd>Computer science.
</dl>
</p><p>
Puedes poner varias categorías separadas por espacios.
</p>
:log old_log_files
Número de archivos de registro guardados <span class="tt wims_warning">*</span>
int
0,20
Este es el número de archivos de registro antiguos que se guardan. Aumentar este número mantiene la información por más tiempo, pero también aumenta el espacio en disco utilizado.
Consulte también la sección "Limpieza/actualización diaria".
:housekeep log_delete
Número de días después de los cuales se destruyen los registros generales.
int
3,1000

Los registros en cuestión son
<span class="tt">access.log, referer.log, session.log, post.log, mail.log",
    user_error.log, internal_error.log, refuse.log
</span>

:software pari_command
Comandp para ejecutar PARI/GP
free

PARI/GP es una calculadora de teoría numérica utilizada en muchos módulos WIMS.
Si sigue su procedimiento de instalación con un ejecutable binario
en la ruta habitual, no es necesario que toque este campo.

:resources priority
Sitios con acceso prioritario
free

Se permite el acceso incluso si el servidor está muy ocupado.
Las conexiones de estos sitios no se rechazarán cuando
la carga del servidor está por encima del umbral.
$sitehelp

:appearances page_bgcolor wims_bgcolor
Color de fondo principal
color

Color de fondo de la mayoría de las páginas WIMS.
Use un nombre de color o, mejor, un código hexadecimal #rrvvbb
  (ver los <a href="http://www.w3schools.com/HTML/html_colornames.asp">estándares html</a>).

:appearances page_bgimg wims_bgimg
Imagen de fondo
free

Se aplicará un mosaico de fondo.
Escriba una URL válida. <br>
Mire la carpeta <code>public_html/gifs/bg</code> que contiene algunas imágenes de fondo predefinidas. <br>
A estos últimos se les puede llamar directamente por su nombre, sin especificar la ruta de acceso. <br>
<p> Lista de archivos de imagen predefinidos:</p>
<pre>$bgimgs</pre>

:tech,misc rafale_level
Severidad anti-ráfaga
int
0,100
Las solicitudes de ejercicios rápidos sin intentos serios de resolverlos generarán errores.
Esta es una de las medidas anti-trampa del sistema.
Un nivel de gravedad más alto da como resultado más requisitos a tiempo antes de que se produzcan nuevos
Se permiten ejercicios. Si elige un valor de 0 o menos para esta gravedad,
se desactivará esta medida.

:appearances ref_bgcolor wims_ref_bgcolor
Color de fondo de la tabla
color

Color de fondo que aparece en los menús principales y en muchos módulos de administración de WIMS.
Utilice un nombre de color o código hexadecimal #rrggbb (consulte el estándar html para obtener más detalles).

:appearances ref_menucolor wims_ref_menucolor
Color de los enlaces en menús y tabla de referencia.
color

Puede elegir el enlace del menú de colores aquí.
Esto solo es posible para "temas nuevos", por lo que no para el tema predeterminado.
Elíjalo según el color de fondo de la mesa.

:appearances ref_button_bgcolor wims_ref_button_bgcolor
Color de fondo de los botones
color

El color de fondo de los botones correspondientes a las acciones.
Esta elección no es posible para el tema <code class = "tt">default</code>.
Elígelo según el color de fondo de las tablas.

:appearances ref_button_color wims_ref_button_color
Color del texto de los botones
color

El color de los botones correspondientes a las acciones.
Esta elección no es posible para el tema <code class = "tt">default</code>.

:appearances ref_button_help_bgcolor wims_ref_button_help_bgcolor
Color de fondo del botón de ayuda
color

El color de fondo de los botones de ayuda.
Esta elección no es posible para el tema <code class="tt">default</code>.

:appearances ref_button_help_color wims_ref_button_help_color
Color del texto de los botones de ayuda
color

El color del texto de los botones de ayuda.
Esta elección no es posible para el tema <code class="tt">default</code>.

:appearances theme wims_theme
Tema de presentación
choice
$themelist
El tema de presentación
<code class="tt">default</code> es el original. El tema <code class="tt">standard</code> permite un estilo CSS y un tema de iconos más configurables.

:appearances theme_icon wims_theme_icon
Tema de iconos
choice
$iconlist;$iconpromptlist
el tema de los iconos de presentación.
Esta elección no es posible para el tema <code class="tt">défault</code>.

:appearances css wims_css
Hoja de estilo
choice
$csslist
La hoja de estilo CSS modifica todas las páginas del sitio.
<p>
Las hojas de estilo disponibles (css) están en
<code class="tt">public_html/html/css/$lang</code>. Si desea tener otras hojas de estilo,
puede poner nuevas en esta carpeta.
</p><p>
Si escoge css=<code class="tt">-theme-</code>, la hoja de estilo del tema actual
se utilizará. No se cargará ninguna hoja de estilo si
css=<code class="tt">----</code>.
</p>
:appearances frontmsg wims_frontmsg
Módulo de mensajes
free

Dirección de un módulo de presentación en la página de inicio
Dirección de un módulo en local/data/para mostrar información, un carrusel de ejemplos en la página de inicio del servidor
Si desea tener una versión por idioma, puede escribir, por ejemplo
<span class="tt">local/data/news fr en</span>.
El módulo está en forma estandarizada con dos archivos.
<span class="tt">data/blocnews</span> y <span class="tt">data/blocexamples</span>
donde se almacena la base de datos. Para completar.
:resources rlimit_cpu
Permiso de tiempo de procesamiento en segundos <span class="tt wims_warning">*</span>
int
1,10000
Medida de seguridad contra ataques de denegación de servicio
Si la solicitud de un usuario necesita más tiempo que esta cantidad para procesarse,
se cortará el cálculo y se enviará un mensaje de error.
Es inútil aumentar demasiado este número, porque
en circunstancias normales pocos usuarios de Internet esperarán más de unas pocas decenas de segundos
por una página.
<p>
Esta también es una medida de seguridad muy importante para verificar
los ataques de denegación de servicio.
</p>

:appearances show_author wims_show_author
Visualización de los nombres de los autores
choice
yes,no;$wims_name_yes,$wims_name_no
Muestra los nombres de los autores en el motor de búsqueda.
Seleccione <code class="tt">si</code> si desea que se
muestren los nombres de los autores en los resultados de los motores de búsqueda

:appearances show_stat wims_show_stat
Mostrar estadísticas de uso del sitio
choice
yes,no;$wims_name_yes,$wims_name_no
Las cuentas de registro deben estar habilitadas
para que se puedan mostrar las estadísticas.

:housekeep mu_auto
Método de actualización
choice
none,check,install,update,all
Método de actualización automática diaria.
<dl>
<dt><code class="tt">none</code>
 <dd>Desactivar la actualización automática
 <dt><code class="tt">check</code>
 <dd>Verifique qué necesita actualizarse y envíe un correo electrónico
 al administrador (es decir, usted). No instale
 ni actualice módulos.
 <dt><code class="tt">install</code>
 <dd>Instala módulos nuevos pero no actualiza
 los módulos existentes.
 <dt><code class="tt">update</code>
 <dd>Actualiza módulos existentes pero no instala módulos nuevos.
 Esto le permite beneficiarse de las correcciones de errores.
 <dt><code class="tt">all</code>
 <dd>Instala nuevos módulos y actualiza los módulos existentes
 </dl>

:misc site_description wims_site_description
Descripción del lugar
free

Descripción colocada en el encabezado de cada página creada por el servidor
para informar a los robots de Internet.
<p>
 Los módulos tienen acceso a este texto mediante la variable
 $$wims_site_description.
 </p>

:misc site_keywords wims_site_keywords
Palabras clave del sitio
free

Lista general de palabras clave colocadas al comienzo de cada página.
Cada módulo agregará su propia lista de palabras clave.
El objetivo principal es mejorar el SEO mediante los robots de los motores de búsqueda.
<p>
 Los módulos tienen acceso a este texto a través de la variable
 $$wims_site_keywords
</p>

:misc site_hostname wims_site_hostname
Nombre de host público del servidor
free

Le permite personalizar el nombre del servidor (si es diferente del nombre de host de la máquina).
<p>Si ha instalado su servidor detrás de un proxy
(por ejemplo, para balanceo de carga),
el nombre de host de la máquina será diferente del que se muestra a los usuarios
</p><p>
 En este caso, indique el nombre de host aquí público,
  que utilizarse, por ejemplo, en tareas programadas
  (actualización de módulos, eliminación de clases caducadas, etc.)
</p><p>
Ingrese solo el nombre del servidor (por ejemplo, "wims.wimsedu.info", sin "https://").
</p>

:appearances site_manager wims_site_manager
Dirección de correo electrónico del administrador de <span class="tt wims_warning">*</span>
free

Correo electrónico para contactar al webmaster del sitio.
Es a esta dirección a la que los visitantes y usuarios del servidor informarán sobre los problemas del servidor.
<p>
Debe cambiar el valor predeterminado  $DF_site_manager a SU dirección de correo electrónico, si no lee los
mensajes enviados a $DF_site_manager.
</p><p>
Los módulos tienen acceso a este texto a través de la variable
$$wims_site_manager.
</p>

:appearances site_dpd wims_site_dpd
Datos de contacto del delegado de protección de datos <span class="tt wims_warning">*</span>
free

Delegado del establecimiento que aloja el servidor.
La ley europea (artículo 37 del RGPD) obliga a los organismos públicos (universidades, etc.)
a designar un Delegado de Protección de Datos (DPD).
Si su servidor está alojado por una organización de este tipo,
por ejemplo, puede ingresar los detalles de contacto de su DPO aquí.
Aparecerán en la página de política de privacidad de este sitio WIMS,
como contacto para
los usuarios.

:graphics texbasesize
Paso de tamaño de fuente TeX predeterminado <span class="tt wims_warning">*</span>
choice
0,1,2,3,4,5,6,7,8,9,10
Este es el tamaño de fuente predeterminado en las imágenes gráficas generadas por TeX
(es decir, fórmulas matemáticas).
Este tamaño predeterminado debe configurarse para que coincida con el
tamaño de fuente del texto del navegador de los visitantes promedio. Este último puede cambiar
este tamaño para adaptarse mejor a su situación, pero este cambio no se guarda de una
sesión a otra, excepto para los usuarios de clases virtuales.
<p>
¡No ajuste este tamaño de fuente solo de acuerdo con su propio navegador! Piense en
otros que pueden tener diferentes tamaños de fuente en sus navegadores.
 </p><p>
 Cada paso aumenta (disminuye) un 9% del tamaño lineal de la fuente.
 </p>
:resources threshold1
Primer umbral de carga
int
10,500
Arriba, se negará el acceso de visitantes.
Si la carga del servidor (calculada por 'w', 'uptime' o 'top') excede este valor por
0.01, se negará el acceso a los visitantes fuera de un aula virtual.
<p>
El tiempo de ejecución de cada solicitud aumentará si la
carga del servidor se acerca a este valor.5

</p><p>Actualmente, este valor se calcula para un solo procesador.
Puede multiplicar este valor por el número de procesadores.
</p>
:resources threshold2
Segundo umbral de carga
int
10,500
Arriba, las conexiones serán rechazadas (excluyendo los sitios prioritarios)
Si la carga del servidor (calculada por 'w', 'uptime' o 'top') excede este valor por
0.01, el acceso de visitantes que no provengan de sitios prioritarios será rechazado.
Este valor debe ser mayor que el primer umbral de carga.

<p>Actualmente, este valor se calcula para el caso de un solo procesador.
Puede multiplicar este valor por el número de procesadores.
</p>
:security trusted_modules
Lista de módulos de confianza
free

Un módulo de confianza puede utilizar comandos administrativos prohibidos a los módulos habituales.
Estos comandos permiten que el módulo modifique o vea información del servidor generalmente
oculta al público. Por razones de seguridad, solo los módulos de administración
y los módulos escritos por autores confiables
pueden tener acceso a estos comandos.
<p>
Los módulos de administración (en el subdirectorio adm/) y el módulo de inicio
se confían automáticamente. Si desea agregar otros módulos a esta lista, agregue
sus direcciones (la parte después de `module = 'en la cadena de solicitud http) en
este campo, separadas por espacios en blanco.
</p><p>
Evite definir módulos de confianza a menos que esté realmente seguro de lo que está haciendo.
</p>
:class user_limit wims_user_limit
Nombre máximo de participantes inscritos en el servidor
int
10,100000
El registro de nuevos participantes falla si la suma de participantes supera este límite.
Cada vez que se registre un nuevo participante, se computará la suma
de los participantes existentes en todas las clases virtuales.

:resources workfile_limit
Longueur maximum des fichiers de données
int
10000,100000000
Este límite se aplica a muchos archivos,
incluidos los archivos de script en los módulos, así como los archivos de datos
de los trabajos de los participantes. Así que no lo establezca demasiado pequeño.

:misc usecookie wims_usecookie
Cookie pour les visiteurs anonymes
choice
yes,no;$wims_name_yes,$wims_name_no
Permite el seguimiento de visitantes anónimos.
Si elige "sí", el servidor enviará cookies a visitantes anónimos,
lo que ayuda a rastrear al usuario.
<p>
Tenga en cuenta que las cookies no son obligatorias: incluso si
el visitante deshabilita las cookies, aún podrá trabajar normalmente en WIMS.
La principal diferencia es que las cookies pueden ayudarles a mantener sus
preferencias personales por más tiempo y pueden mejorar el rendimiento del servidor al
eliminar las creaciones de sesiones innecesarias.
<p>
El uso de cookies para trabajos en clases virtuales no se ve afectado por este
parámetro.
<p>
:log show_ip
mostrar las IP de los usuarios y las horas de trabajo en los datos sin procesar de un usuario en una clase
choice
yes,no;$wims_name_yes,$wims_name_no
Si se selecciona <span class="tt">no</span>, el administrador de la clase no verá el número de IP en el registro del estudiante ni tampoco las horas de trabajo.

:software scilab_command
Comando para ejecutar Scilab
free

Software de cálculo digital de código abierto

:auth cas_auth
Servidor CAS
free

Estos valores se utilizarán por defecto en las clases que permitan la autenticación por CAS.
En el caso de varios servidores CAS, sepárelos por <code>|</code>;
puede indicar el nombre que aparecerá para los profesores posteriormente, por ejemplo
<pre>
https://url1, site1 | https://url2, site2
</pre>

:auth php_auth
Dirección de un script PHP
free

Estos valores se utilizarán por defecto en las clases que permitan la autenticación mediante un script PHP.

:auth ldap_auth
Host LDAP
free

Estos valores se utilizarán de forma predeterminada en las clases que permitan la autenticación mediante un directorio LDAP.
:auth ldap_port
Puerto LDAP
free

Estos valores se utilizarán de forma predeterminada en las clases que permitan la autenticación mediante un directorio LDAP.

:auth ldap_version
Versión LDAP
free

Estos valores se utilizarán de forma predeterminada en las clases que permitan la autenticación mediante un directorio LDAP.

:auth ldap_base
Base LDAP
free

Estos valores se utilizarán de forma predeterminada en las clases que permitan la autenticación mediante un directorio LDAP.

:auth ldap_branch
Rama LDAP
free

Estos valores se utilizarán de forma predeterminada en las clases que permitan la autenticación mediante un directorio LDAP.

:auth ldap_uid
ID de LDAP
free

Ponga aquí el identificador utilizado por el directorio. Este es el identificador que
el participante debe ingresar como identificador.
Estos valores se utilizarán de forma predeterminada en las clases que permitan la autenticación mediante un directorio LDAP.

:auth ldap_login
Inicio de sesión Wims  usando identificadores LDAP
free

Es este identificador el que utilizará WIMS en su estructura interna.
Estos valores se utilizarán de forma predeterminada en las clases que permitan la autenticación mediante un directorio LDAP.
:auth ldap_email
Correo electrónico LDAP
free

Estos valores se utilizarán de forma predeterminada en las clases que permitan el registro mediante un directorio LDAP.
:auth ldap_photourl
Foto LDAP
free

Estos valores se utilizarán de forma predeterminada en las clases que permitan el registro mediante un directorio LDAP.
:auth ldap_regnum
Número de registro LDAP
free

Estos valores se utilizarán de forma predeterminada en las clases que permitan el registro mediante un directorio LDAP.

:appearances site_logo
Dirección de un logotipo institucional
free

Una imagen que aparecerá en el banner superior.

:appearances site_logolink
Enlace externo sobre el logo institucional
free

Página que se muestra al hacer clic en el logotipo.

:tech validator_address
Dirección de un validador de w3c
free

Por ejemplo, http://validator.w3.org/check

:software octave_command
Comando de acceso a Octave
free

GNU Octave es un software de cálculo, destinado principalmente a cálculos numéricos.
Proporciona una interfaz de línea de comandos conveniente para resolver
numéricamente problemas lineales y no lineales y para realizar otros
experimentos numéricos utilizando un lenguaje que es esencialmente compatible
con Matlab.

:software QRencode_command
Comando de acceso QRencode
free

QRencode se utiliza para crear códigos QR en el servidor.

:tech classification_open
Posibilidad de indexar ejercicios OEF.
choice
no,yes;$wims_name_no,$wims_name_yes
Si es así, un profesor puede indexar los ejercicios de OEF.
A partir de una clase, puede poner palabras clave gratuitas o según una taxonomía
a los ejercicios para mejorar los motores de búsqueda. Debe ponerse en contacto con
la asociación WIMS EDU referencement@wimsedu.info
para que estos datos puedan ser utilizados.

:optionalmod allowed_optional_module
Activación de módulos opcionales
checkbox
Trabajos libres
Elija módulos opcionales activos

:class max_techvar
Número máximo de variables técnicas
int
1,$MAX_LTECHVAR
Este es el número en cada clase o nivel para estructuras complejas.
