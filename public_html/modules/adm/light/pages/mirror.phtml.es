!!INDEX
!! Erase the above line to hide your page from wims search engine.
!! Line starting with double exclamations are comment lines.
!!
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!!
!! Indexing definitions. You should modify them according to your case.
!!
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

!! Put every definition in ONE LINE!!
!let module_author	=XIAO, Gang
!let module_address	=
!let module_maintainer_address=wimsdev@groupes.renater.fr
!let module_title	=R�plicas p�blicas
!let module_description	=lista de sitios WIMS accesibles al p�blico.
!let module_version	=2.08
!let module_wims_version=2.08

!! This is the Spanish template file
!let module_language	=es

!!Your copyright policy.
!!Your page will be included in wims distribution if the word `GNU'
!! appears in the following definition.
!let module_copyright	=&copy; 1998 (<a href="COPYING">GNU GPL</a>)

!! Possible categories: exercise, tool, dictionary, course, recreation.
!let module_category	=adm

!! En: elementary school. Hn: high school. Un: undergrad.
!! G: graduate. R: research.
!! E1,...,E6; H1...,H6; U1,...,U4; G; R
!let module_level	=E1 E2 E3 E4 E5 E6 H1 H2 H3 H4 H5 H6 U1 U2 U3 U4 G R

!! e.g. algebra, analysis, geometry, etc.
!let module_domain	=

!! For search engines; anything you like.
!let module_keywords	=

!let module_translator	=Juan Rafael Fern�ndez Garc�a
!let module_translator_address=juanrafael.fernandez@hispalinux.es

!!INDEXEND

!header1
<h1 class="wims_title">
<span style="text-transform:capitalize;">www
Interactive Multipurpose Server</span><br>
<span style="font-size:small">en <a href="/">$httpd_HTTP_HOST</a></span> <br>
$module_title</h1>

!set mir=wimshome/public_html/html/mirrors.es
!set thissite=!tolower $httpd_SERVER_NAME
!set n=!recordcnt $mir
!set c=
!for i_=1 to $n
 !set m_=!record $i_ of $mir
 !set l_=!line 1 of $m_
 !set l_=!trim $l_
 !set l_=!translate / to $\
$ in $l_
 !set l_=!line 1 of $l_
 !set l_=!lower $l_
 !if $l_!=$thissite
  !set c=!append item $i_ to $c
 !endif
!next i_
!set n=!itemcnt $c
!if $n<1
<p>
 Este sitio WIMS no parece mantener una lista de r�plicas. Lo sentimos.
 </p>
!else
 Aqu� est�n los otros sitios WIMS que se sabe que est�n abiertos al
 p�blico general. Si usa normalmente WIMS en su trabajo, le sugerimos
 que a�ada a sus Favoritos al menos una de estas direcciones.

 $table_header
 $table_hdtr<th>Sitio</th><th>Localizaci�n</th><th>Pa�s</th><th>Idiomas<br>en que funciona</th><th>Comentarios</th></tr>
 !for i_=1 to $n
  !set j_=!item $i_ of $c
  !set l_=!record $j_ of $mir
  !distribute lines $l_ into u_,t_,C_,l_,m_,e_,r_
  !readproc mirror.proc
  $table_tr<td>
  <a href="$u_">$U_</a></td>
  <td>$t_</td>
  <td>$C_</td>
  <td>
  !for L_ in $l_
   <img src="gifs/$L_.gif" alt="$L_.gif" height="16">
  !next L_
!!  <td align="center">!mailurl n$e_ $m_\nWIMS site
  </td><td>$r_&nbsp;</td></tr>
 !next i_
 $table_end
!endif

:end
Si tiene una instalaci�n WIMS y quiere que aparezca en este listado,
por favor
!mailurl wimsdev@groupes.renater.fr escr�bame\
wims mirror
.
<p>
WIMS se puede
!href module=adm/light&phtml=download.phtml.$lang descargar
 gratuitamente,
y puede instalarse sobre sistemas operativos Linux.
Por favor, lea el archivo <a href="README">README</a>  para obtener m�s informaci�n sobre c�mo instalar WIMS.
</p>
!tail

