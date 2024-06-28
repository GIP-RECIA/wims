
<div class="title_box"><h2 class="wims_title">En este servidor, usted puede encontrar:</h2></div>
<ul class="wims_home_list box_content">
  <li>
    !href module=$module&cmd=new&search_category=D Lecciones y referencias
   interactivas sobre varios temas.
  </li><li>
    !href module=$module&cmd=new&search_category=T Calculadoras y representaciones gráficas en línea
  &#x003A; números, funciones, matrices, curvas, superficies, etc.
  </li><li>
    !href module=$module&cmd=new&search_category=X Ejercicios interactivos
   de varios estilos y niveles.
  </li><li>
    !href module=$module&cmd=new&search_category=R Matemáticas recreativas
  &#x003A puzzles y juegos.
  </li><li>
    !href module=adm/tool/glossary&cmd=new Glosarios
    (en construcción).
  </li>

  !if $wims_theme_version=0
    <li>
      !href module=adm/doc Documentos de ayuda
      i
      !href module=help/teacher/faq FAQ
.</li>
  !endif
</ul>

!!exit
!if $wims_theme_version=0
  También puede
  !href module=adm/browse&$browse_parm realizar una visita guiada
  a este sitio.
!endif
