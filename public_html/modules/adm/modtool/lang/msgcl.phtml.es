
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
  !default wims_read_parm=Ha aparecido un error técnico.
  $wims_read_parm
  !exit
!endif

:mirror_exists
 Ya existe un módulo con el mismo nombre en otro servidor espejo. Si eres el autor,
 debes publicarlo en el otro servidor o pedirle al servidor de publicación que
 transfiera tus derechos. Si no es el autor, cambie el nombre de su módulo.
!exit

:antiwversion
 Su módulo requiere WIMS- $w2 para funcionar. Este servidor solo está en la
 versión $wims_version. Por favor corrija.
!exit

:badauth
 Error de autentificación. Acceso denegado. Para publicar, debe tener una cuenta de
 publicación en el servidor de publicación que ha elegido. Este nombre de usuario
 y contraseña son independientes del nombre de usuario y contraseña de su cuenta
 de Modtool. Puedes escribir a
 !mailurl $sysadmin administrador de publicación
  para conseguir uno.
!exit

:badauthhost
Error de autentificación. No tienes permiso para publicar con este número de IP.
Acceso denegado.
!exit

:badcategory
!if / isin $w2
  La zona <span class="tt wims_code_words">$w2</span> de su módulo enviado es desconocida.
  !set w3=!word 3 to -1 of $wims_read_parm
  !set w0=!translate / to , in $w2
  Las categorías actualmente disponibles en el área <span class=" bold tt wims_code_words">$(w0[1])</span>
  son:
  <pre>
  $w3
  </pre>
Por favor escriba a
 !mailurl $sysadmin administrador de publicación
   si desea agregar una nueva categoría.
 !else
  La zona <span class="tt wims_code_words">$w2</span> de su módulo enviado es desconocido. Por favor
   reporta tu problema al
  !mailurl $sysadmin administrador de publicación
.
!endif
!exit

:badhour
¡Ahora no es el momento de publicar!

 Elija un momento en el que el servidor esté más silencioso. Evite publicar módulos durante las siguientes horas:
 <br class="spacer">
 $nopublish
!exit

:badlang
Lo sentimos, pero el idioma <span class="tt wims_code_words">$w2</span> aún no existe en WIMS.
  Alguien necesita traducir WIMS a este idioma primero antes que un módulo se puede publicar.
!exit

:badname
 El nombre del módulo <span class="tt wims_fname">$w2</span> no es bueno: demasiado largo, demasiado corto o
  caracteres no permitidos.
!exit

:badtar
Se detectó un error durante la transmisión.
Comprueba tu maniobra e inténtalo de nuevo.
!exit

:badtype
Tipo de envío incorrecto:
!if $w2=new
  su módulo no es nuevo.
!else
  no se puede modificar un módulo que no existe.
!endif
¿Puso la dirección incorrecta en este módulo?
!exit

:badversion
 La version <span class="tt wims_code_words">$w2</span> de su módulo está formateado incorrectamente. Por favor corrija.
!exit

:badwimsversion
La declaración wims_version de su módulo debe ser una versión WIMS existente entre la 3.36 y la última versión.
  Este aparentemente no es el caso. Por favor corrija.
!exit

:doublelang
Confusión en la definición de lenguaje del módulo: el archivo INDEX dice
 <span class="tt wims_code_words">language=$w3</span>, mientras que la dirección del módulo tiene una extensión
 <span class="tt wims_code_words">$w2</span>. Por favor corrija.
!exit

:empty
Envío vacío ignorado.
!exit

:lengthlimit
El tamaño del módulo supera el límite permitido. Además, este módulo no se puede instalar a través de esta interfaz.
Puede ponerse en contacto directamente con el centro de publicaciones
!mailurl $sysadmin $centralhost
para que se realice una instalación manual.
!exit

:nochange
 El módulo <span class="tt wims_fname">$w2</span>
no ha sido modificado desde la última publicación. Envío ignorado.
!exit

:noindex
Contenido incorrecto: no se puede encontrar el archivo INDEX del módulo o
  roto.
!exit

:nolocalright
Para poder instalar su módulo en el espacio del servidor local,
  primero debe pedirle al administrador del sitio que
  le otorgue el derecho.
!exit

:nongnu
No ha declarado que los derechos de autor del módulo sean GNU GPL o Creative Commons.
  Envío rechazado.
!exit

:nooriginal
El centro de publicación no puede encontrar el módulo original
  del cual se traduce este módulo.
  ¿Puso la dirección incorrecta en este módulo?
!exit

:noreply
 Error al conectar con el centro de publicaciones $centralhost.
!exit

:noright
 No se le reconoce como autor o traductor de
 <span class="tt wims_fname">$w2</span> en este editor.
  Si es el autor, es posible que haya ingresado el servidor de publicación
  incorrecto. Alternativamente, puede enviar un archivo desde
 !href cmd=reply&jobreq=respaldo de respaldo
de su modificación al autor
 !set au=!line 2 of $wims_read_parm
 !distribute items $au into w3,w4
 <a href="mailto:$w4?subject=Su módulo WIMS $w2">$w3</a>
 quién lo publicará si así lo desea.
!exit

:noright_translate
 Este módulo es una traducción de otro módulo. Por tanto, debe indicar que se trata de una traducción.
  Puede enviar un archivo desde
 !href cmd=reply&jobreq=guardar el respaldo
  de su modificación al autor
 !set au=!line 2 of $wims_read_parm
 !distribute items $au into w3,w4
 <a href="mailto:$w4?subject=Su módulo WIMS $w2">$w3</a>
 quién lo publicará si así lo desea.
!exit

:notallow
Aún no tienes derecho a agregar un nuevo módulo
  en $D1/$D2. Intente publicarlo en la versión de desarrollo o
  contacte a alguien con este derecho para publicarlo por usted!
!exit

:please-update-module-version
Debe cambiar la versión del módulo que está actualizando (también
es recomendable indicar las modificaciones realizadas en el archivo NEWS).
!exit

:robot
 Acceso de robot detectado: error técnico interno, informe.
!exit

:symlink
Ya no se permiten enlaces simbólicos en módulos nuevos.
  Si se trata de una versión antigua del módulo OEF, puede traducirlo a
  nueva versión que no contenga un enlace simbólico.
!exit

:toolong
Lo sentimos, pero su módulo es demasiado grande para la carga automática.
  Puede enviarlo manualmente al administrador de publicaciones. ¡Gracias!
!exit

:unpublishable
Este módulo tiene una dirección que no se puede publicar.
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
  De hecho, su módulo se declara como un módulo de ejercicio OEF, su
  nombre debe comenzar con<span class="tt wims_code_words">oef</span>.
 !endif
 !if doc iswordof  $w1 $w2 $w3 $w4 $w5 $w6
  De hecho, su módulo se declara como documento,
   su nombre debe comenzar con <span class="tt wims_code_words">doc</span>.
!endif
!exit

:domain_keyword
Los campos <span class="wims_label">$wims_name_Domain</span> o
 <span class="wims_label">$wims_name_Keywords</span> no se han completado.
Modifique el
!href cmd=reply&jobreq=index $wims_name_properties
 del módulo $mod consultando las ayudas.
!exit
