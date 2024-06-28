
<span class="wims_warning">$wims_name_Error</span>.
!distribute words $wims_read_parm into w1,w2,w3,w4,w5,w6
!if $w1 iswordof antiwversion badauth badauthhost badcategory badhour badlang \
	  badname badtar badtype badversion badwimsversion \
	  doublelang empty nochange noindex nolocalright \
	  nongnu nooriginal noreply noright noright_translate notallow robot \
	  symlink toolong unpublishable please-update-module-version lengthlimit \
	  mirror_exists domain_keyword
  !goto $w1
!else
  !default wims_read_parm=Ha aparecido un error t�cnico.
  $wims_read_parm
  !exit
!endif

:mirror_exists
 Ya existe un m�dulo con el mismo nombre en otro servidor espejo. Si eres el autor,
 debes publicarlo en el otro servidor o pedirle al servidor de publicaci�n que
 transfiera tus derechos. Si no es el autor, cambie el nombre de su m�dulo.
!exit

:antiwversion
 Su m�dulo requiere WIMS- $w2 para funcionar. Este servidor solo est� en la
 versi�n $wims_version. Por favor corrija.
!exit

:badauth
 Error de autentificaci�n. Acceso denegado. Para publicar, debe tener una cuenta de
 publicaci�n en el servidor de publicaci�n que ha elegido. Este nombre de usuario
 y contrase�a son independientes del nombre de usuario y contrase�a de su cuenta
 de Modtool. Puedes escribir a
 !mailurl $sysadmin administrador de publicaci�n
  para conseguir uno.
!exit

:badauthhost
Error de autentificaci�n. No tienes permiso para publicar con este n�mero de IP.
Acceso denegado.
!exit

:badcategory
!if / isin $w2
  La zona <span class="tt wims_code_words">$w2</span> de su m�dulo enviado es desconocida.
  !set w3=!word 3 to -1 of $wims_read_parm
  !set w0=!translate / to , in $w2
  Las categor�as actualmente disponibles en el �rea <span class=" bold tt wims_code_words">$(w0[1])</span>
  son:
  <pre>
  $w3
  </pre>
Por favor escriba a
 !mailurl $sysadmin administrador de publicaci�n
   si desea agregar una nueva categor�a.
 !else
  La zona <span class="tt wims_code_words">$w2</span> de su m�dulo enviado es desconocido. Por favor
   reporta tu problema al
  !mailurl $sysadmin administrador de publicaci�n
.
!endif
!exit

:badhour
�Ahora no es el momento de publicar!

 Elija un momento en el que el servidor est� m�s silencioso. Evite publicar m�dulos durante las siguientes horas:
 <br class="spacer">
 $nopublish
!exit

:badlang
Lo sentimos, pero el idioma <span class="tt wims_code_words">$w2</span> a�n no existe en WIMS.
  Alguien necesita traducir WIMS a este idioma primero antes que un m�dulo se puede publicar.
!exit

:badname
 El nombre del m�dulo <span class="tt wims_fname">$w2</span> no es bueno: demasiado largo, demasiado corto o
  caracteres no permitidos.
!exit

:badtar
Se detect� un error durante la transmisi�n.
Comprueba tu maniobra e int�ntalo de nuevo.
!exit

:badtype
Tipo de env�o incorrecto:
!if $w2=new
  su m�dulo no es nuevo.
!else
  no se puede modificar un m�dulo que no existe.
!endif
�Puso la direcci�n incorrecta en este m�dulo?
!exit

:badversion
 La version <span class="tt wims_code_words">$w2</span> de su m�dulo est� formateado incorrectamente. Por favor corrija.
!exit

:badwimsversion
La declaraci�n wims_version de su m�dulo debe ser una versi�n WIMS existente entre la 3.36 y la �ltima versi�n.
  Este aparentemente no es el caso. Por favor corrija.
!exit

:doublelang
Confusi�n en la definici�n de lenguaje del m�dulo: el archivo INDEX dice
 <span class="tt wims_code_words">language=$w3</span>, mientras que la direcci�n del m�dulo tiene una extensi�n
 <span class="tt wims_code_words">$w2</span>. Por favor corrija.
!exit

:empty
Env�o vac�o ignorado.
!exit

:lengthlimit
El tama�o del m�dulo supera el l�mite permitido. Adem�s, este m�dulo no se puede instalar a trav�s de esta interfaz.
Puede ponerse en contacto directamente con el centro de publicaciones
!mailurl $sysadmin $centralhost
para que se realice una instalaci�n manual.
!exit

:nochange
 El m�dulo <span class="tt wims_fname">$w2</span>
no ha sido modificado desde la �ltima publicaci�n. Env�o ignorado.
!exit

:noindex
Contenido incorrecto: no se puede encontrar el archivo INDEX del m�dulo o
  roto.
!exit

:nolocalright
Para poder instalar su m�dulo en el espacio del servidor local,
  primero debe pedirle al administrador del sitio que
  le otorgue el derecho.
!exit

:nongnu
No ha declarado que los derechos de autor del m�dulo sean GNU GPL o Creative Commons.
  Env�o rechazado.
!exit

:nooriginal
El centro de publicaci�n no puede encontrar el m�dulo original
  del cual se traduce este m�dulo.
  �Puso la direcci�n incorrecta en este m�dulo?
!exit

:noreply
 Error al conectar con el centro de publicaciones $centralhost.
!exit

:noright
 No se le reconoce como autor o traductor de
 <span class="tt wims_fname">$w2</span> en este editor.
  Si es el autor, es posible que haya ingresado el servidor de publicaci�n
  incorrecto. Alternativamente, puede enviar un archivo desde
 !href cmd=reply&jobreq=respaldo de respaldo
de su modificaci�n al autor
 !set au=!line 2 of $wims_read_parm
 !distribute items $au into w3,w4
 <a href="mailto:$w4?subject=Su m�dulo WIMS $w2">$w3</a>
 qui�n lo publicar� si as� lo desea.
!exit

:noright_translate
 Este m�dulo es una traducci�n de otro m�dulo. Por tanto, debe indicar que se trata de una traducci�n.
  Puede enviar un archivo desde
 !href cmd=reply&jobreq=guardar el respaldo
  de su modificaci�n al autor
 !set au=!line 2 of $wims_read_parm
 !distribute items $au into w3,w4
 <a href="mailto:$w4?subject=Su m�dulo WIMS $w2">$w3</a>
 qui�n lo publicar� si as� lo desea.
!exit

:notallow
A�n no tienes derecho a agregar un nuevo m�dulo
  en $D1/$D2. Intente publicarlo en la versi�n de desarrollo o
  contacte a alguien con este derecho para publicarlo por usted!
!exit

:please-update-module-version
Debe cambiar la versi�n del m�dulo que est� actualizando (tambi�n
es recomendable indicar las modificaciones realizadas en el archivo NEWS).
!exit

:robot
 Acceso de robot detectado: error t�cnico interno, informe.
!exit

:symlink
Ya no se permiten enlaces simb�licos en m�dulos nuevos.
  Si se trata de una versi�n antigua del m�dulo OEF, puede traducirlo a
  nueva versi�n que no contenga un enlace simb�lico.
!exit

:toolong
Lo sentimos, pero su m�dulo es demasiado grande para la carga autom�tica.
  Puede enviarlo manualmente al administrador de publicaciones. �Gracias!
!exit

:unpublishable
Este m�dulo tiene una direcci�n que no se puede publicar.
 !if $unpublishable_site!=
  en el servidor
  <span class="tt">$unpublishable_site</span>.
 !endif
Primero debe ser
 !href cmd=reply&jobreq=move&modreq=$mod renombrado
 o
 !href cmd=reply&jobreq=copy&original=devel/$auth_login/$mod duplicado
  para ser publicable en este servidor.
 !if oef iswordof  $w1 $w2 $w3 $w4 $w5 $w6
  De hecho, su m�dulo se declara como un m�dulo de ejercicio OEF, su
  nombre debe comenzar con<span class="tt wims_code_words">oef</span>.
 !endif
 !if doc iswordof  $w1 $w2 $w3 $w4 $w5 $w6
  De hecho, su m�dulo se declara como documento,
   su nombre debe comenzar con <span class="tt wims_code_words">doc</span>.
!endif
!exit

:domain_keyword
Los campos <span class="wims_label">$wims_name_Domain</span> o
 <span class="wims_label">$wims_name_Keywords</span> no se han completado.
Modifique el
!href cmd=reply&jobreq=index $wims_name_properties
 del m�dulo $mod consultando las ayudas.
!exit
