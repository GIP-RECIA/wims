!set lang_exists=yes
!if $wims_read_parm=$empty
 !exit
!endif

!goto $wims_read_parm

:file

<div>
  Ficheros disponibles en este documento:
  <ul class="inline">
  !for f in $flist
    <li>
      !set wims_getfile_fname=$f
      !set wims_ref_class=text_icon file
      !getfile doc/$f $f
    </li>
  !next f
  </ul>
</div>

!form reply
 <input type="hidden" name="job2" value="erase">
 <fieldset>
   <legend>Borrar un archivo:</legend>
   !formselect job2 list $flist
   <input type="submit" class="wims_warning" value="$wims_name_erase">
  </fieldset>
!formend

<p>
  Estos archivos son accesibles en el documento usando la variable
  <span class="tt wims_code_variable">\filedir</span>.
</p><p>
  Por ejempl0,
  <code class="wims_address">&lt;a href="\filedir/$f1" download="$f1"&gt; $f1 &lt;/a&gt;</code><br>
  (<b> copie este texto después de cargar su archivo </b>)
   crear un enlace al archivo <a href="$m_filedir/$f1" download="$f1">$f1</a> por ejemplo.
</p><p>
También puedes escribir
  <code class="wims_address">&lt;img src="\filedir/myfile.jpg" alt="descripción de la imagen myfile"&gt;</code>
  para incluir un archivo de imagen <span class="tt wims_fname">myfile.jpg</span> en la página.
</p><p>
  Los archivos depositados en este documento son accesibles
  solo para aquellos que tienen derecho a leer el documento.
</p>
<div>
   También puedes usar el comando <span class="tt wims_code_words">\href{}{}</span>.
Para obtener un enlace en el archivo, basta con escribir
  <p class="wimscenter">
    <code class="wims_code_words">\href{$f1}</code> o <code class="wims_code_words">\href{$f1}{liga}</code>.
  </p>
</div>
!exit

:readauth
 Si es el autor del documento,
 tenga en cuenta que necesita la aprobación del
 !mailurl $wims_site_manager administrador del sitio\
Solicitud para abrir el documento WIMS $doc
para hacer que el documento sea leíble por el público.
!exit

:erase1
Por razones de seguridad, solo el administrador del sitio puede borrar
documentos públicos.
<p>
  Por favor
  !mailurl $wims_site_manager solicitar administrador del sitio
  para borrar su documento por usted.
</p>
!exit

:erase2
<div class="wims_msg warning"><span class="wims_warning">ATENCIÓN</span>.
¡Un documento eliminado no se puede recuperar!</div>
<p>
  ¿Está seguro de que desea eliminar el contenido de <span class="tt wims_fname">$tit</span>?
</p>
!exit

:public
<b>Nota</b>. Debe solicitar la aprobación del
!mailurl $wims_site_manager administrador del sitio\
Solicitud para publicar el documento WIMS $doc
para hacerlo accesible al público.
!exit
