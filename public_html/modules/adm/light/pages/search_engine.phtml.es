!!INDEX
!! Erase the above line to hide your page from wims search engine.
!! Line starting with double exclamations are comment lines.
!!
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!!
!! Indexing definitions. You should modify them according to your case.
!!
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

!! Put each definition in ONE LINE!!
!let module_author      =
!let module_address     =
!let module_title       =Ayuda del motor de búsqueda
!let module_description =
!let module_language    =$lang

!!Your copyright policy.
!!Your page will be included in wims distribution if the word `GNU'
!! appears in the following definition.
!let module_copyright   =&copy; 2009 (<a href="COPYING">GNU GPL</a>)

!readproc adm/search_engine/names.$lang

!header

<div class="wims_content">
El motor de búsqueda permite una búsqueda por palabras clave.
!!if $wims_class=$empty
También puedes usar el enlace
<span class="text_icon browse">$wims_name_browse</span> para obtener una clasificación
por temas de los recursos disponibles.
!!endif

<h2>Buscar por palabras clave</h2>
<p>
Para obtener la lista de recursos asociados con un tema o nivel determinado,
elija el <b>tipo de recurso</b>, ingrese una (o más) <b>palabra(s) clave</b>,
elija la <b>búsqueda escriba</b>, el <b>idioma de búsqueda predeterminado</b>.

!if $jquery_defined=yes
Mueva los controles deslizantes de la <b>barra de nivel</b> para restringir su búsqueda
a los recursos ofrecidos en torno a un nivel de grado determinado.
!else
Elija los niveles (si no se selecciona ningún nivel, la búsqueda se realizará en
todos los niveles.)
!endif
Seleccione <span class="wims_code_words">$name_search_leveltrans</span>
si es necesario.
</p><p>
Luego haga clic en el botón
<span class="wims_button disabled">$N_Search</span>.
</p>
<h3>Tipo de recurso</h3>
<ul><li>
El tipo <span class="wims_code_words">$C_A</span> incluye todos los recursos de WIMS.
</li><li>
El tipo <span class="wims_code_words">$C_X</span> incluye todos los ejercicios,
especialmente el <span class="wims_code_words">$C_O</span>.
</li><li>
El tipo <span class="wims_code_words">$C_T</span> incluye todas las herramientas de cálculo,
especialmente las <span class="wims_code_words">$C_P</span>.
</li><li>
El <span class="wims_code_words">$C_S</span> y el <span class="wims_code_words">$C_C</span>
pueden buscarse sin una palabra clave.
</li></ul>
Para otros tipos de recursos, debe ingresar una palabra clave,
de lo contrario no se proporciona respuesta.

<h3>Palabras clave</h3>
<p>
Puede ingresar una <b>palabra</b>, como por ejemplo<span class="tt">gráfica</span>,
para una búsqueda temática o un nombre de nivel, como por ejemplo
<span class="tt">levelU1</span>, para buscar por nivel.
Puede introducir un <b>grupo de palabras</b> por ejemplo
<span class="tt">función exponencial</span>.
</p><p>
El motor de búsqueda compara esta palabra con las palabras clave definidas por los autores de los
recursos. Se ofrece una lista de estas palabras clave para autocompletar.
La palabra clave también se busca en las descripciones de los recursos.
Puede escribir las palabras clave con o sin acento, los resultados de la búsqueda serán
idénticos en ambos casos.
</p>

<h3>Tipo de búsqueda</h3>
Si desea realizar una búsqueda combinada en varias palabras o grupos de
palabras, sepárelas con comas. Usted obtendrá
la unión o intersección de los recursos asociados a cada palabra
o grupo de palabras ingresadas, dependiendo de su elección
<b>uno de los grupos de palabras</b> o <b>todos los grupos de palabras</b>.

<h3>Idioma de búsqueda predeterminado</h3>
El motor busca recursos en todos los idiomas. Cuando un
el recurso está disponible en varios idiomas, el motor solo muestra uno
versión, eligiendo primero si existe:
<ol><li>
la versión de su idioma de búsqueda predeterminado
</li><li>
 la versión en inglés
</li><li>
uno de los idiomas disponibles para el recurso.
</li></ol>

<h3>Dirección del módulo</h3>
<p>
Si ya conoce la dirección del módulo, por ejemplo
<span class="tt wims_address">E4/grammar/oeffonction.fr</span>,
puede introducirlo en el motor.
</p>
</div>

!tail
