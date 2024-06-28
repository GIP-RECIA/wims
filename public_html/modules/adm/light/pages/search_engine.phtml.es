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
!let module_title       =Ayuda del motor de b�squeda
!let module_description =
!let module_language    =$lang

!!Your copyright policy.
!!Your page will be included in wims distribution if the word `GNU'
!! appears in the following definition.
!let module_copyright   =&copy; 2009 (<a href="COPYING">GNU GPL</a>)

!readproc adm/search_engine/names.$lang

!header

<div class="wims_content">
El motor de b�squeda permite una b�squeda por palabras clave.
!!if $wims_class=$empty
Tambi�n puedes usar el enlace
<span class="text_icon browse">$wims_name_browse</span> para obtener una clasificaci�n
por temas de los recursos disponibles.
!!endif

<h2>Buscar por palabras clave</h2>
<p>
Para obtener la lista de recursos asociados con un tema o nivel determinado,
elija el <b>tipo de recurso</b>, ingrese una (o m�s) <b>palabra(s) clave</b>,
elija la <b>b�squeda escriba</b>, el <b>idioma de b�squeda predeterminado</b>.

!if $jquery_defined=yes
Mueva los controles deslizantes de la <b>barra de nivel</b> para restringir su b�squeda
a los recursos ofrecidos en torno a un nivel de grado determinado.
!else
Elija los niveles (si no se selecciona ning�n nivel, la b�squeda se realizar� en
todos los niveles.)
!endif
Seleccione <span class="wims_code_words">$name_search_leveltrans</span>
si es necesario.
</p><p>
Luego haga clic en el bot�n
<span class="wims_button disabled">$N_Search</span>.
</p>
<h3>Tipo de recurso</h3>
<ul><li>
El tipo <span class="wims_code_words">$C_A</span> incluye todos los recursos de WIMS.
</li><li>
El tipo <span class="wims_code_words">$C_X</span> incluye todos los ejercicios,
especialmente el <span class="wims_code_words">$C_O</span>.
</li><li>
El tipo <span class="wims_code_words">$C_T</span> incluye todas las herramientas de c�lculo,
especialmente las <span class="wims_code_words">$C_P</span>.
</li><li>
El <span class="wims_code_words">$C_S</span> y el <span class="wims_code_words">$C_C</span>
pueden buscarse sin una palabra clave.
</li></ul>
Para otros tipos de recursos, debe ingresar una palabra clave,
de lo contrario no se proporciona respuesta.

<h3>Palabras clave</h3>
<p>
Puede ingresar una <b>palabra</b>, como por ejemplo<span class="tt">gr�fica</span>,
para una b�squeda tem�tica o un nombre de nivel, como por ejemplo
<span class="tt">levelU1</span>, para buscar por nivel.
Puede introducir un <b>grupo de palabras</b> por ejemplo
<span class="tt">funci�n exponencial</span>.
</p><p>
El motor de b�squeda compara esta palabra con las palabras clave definidas por los autores de los
recursos. Se ofrece una lista de estas palabras clave para autocompletar.
La palabra clave tambi�n se busca en las descripciones de los recursos.
Puede escribir las palabras clave con o sin acento, los resultados de la b�squeda ser�n
id�nticos en ambos casos.
</p>

<h3>Tipo de b�squeda</h3>
Si desea realizar una b�squeda combinada en varias palabras o grupos de
palabras, sep�relas con comas. Usted obtendr�
la uni�n o intersecci�n de los recursos asociados a cada palabra
o grupo de palabras ingresadas, dependiendo de su elecci�n
<b>uno de los grupos de palabras</b> o <b>todos los grupos de palabras</b>.

<h3>Idioma de b�squeda predeterminado</h3>
El motor busca recursos en todos los idiomas. Cuando un
el recurso est� disponible en varios idiomas, el motor solo muestra uno
versi�n, eligiendo primero si existe:
<ol><li>
la versi�n de su idioma de b�squeda predeterminado
</li><li>
 la versi�n en ingl�s
</li><li>
uno de los idiomas disponibles para el recurso.
</li></ol>

<h3>Direcci�n del m�dulo</h3>
<p>
Si ya conoce la direcci�n del m�dulo, por ejemplo
<span class="tt wims_address">E4/grammar/oeffonction.fr</span>,
puede introducirlo en el motor.
</p>
</div>

!tail
