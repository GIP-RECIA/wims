!set lang_exists=yes

!if $class_type iswordof 2 4
  !if $class_type=2
    !set name_classe=agrupamiento de clases
    !set name_sup=administrador
    !set name_classes= el $name_classe
    !set name_classesss= del $name_classe
    !set name_classessss= El $name_classe
  !else
    !set name_classe=centro educativo
    !set name_sup=administrador
    !set name_classes= el $name_classe
    !set name_classesss= del $name_classe
    !set name_classessss= El $name_classe
  !endif
  !set name_classess= un $name_classe
!else
  !set name_classe=clase
  !set name_classes=la $name_classe
  !set name_classess=una $name_classe
  !set name_classesss= de la $name_classe
  !set name_classessss= La $name_classe
  !set name_sup=profesor
!endif

!if $splevel iswordof 1 2 3
  !set sousclasses=!item $splevel of clase,curso
  !set Name_level= !item $splevel of Nivel,Clase,Curso
  !set Name_levels=!item $splevel of Niveles,Clases,Cursos
  !set sousclasses_else=!item $splevel of o una clase, o un curso
  !set name_level_else= !item $splevel of un nivel,una clase,un curso
!else
  !set sousclasses=subclases
  !set sousclasses_else=una clase o un centro educativo
!endif

!set CL_Name	=Nivel,Clase,Programa,Curso,Cursos interclases,Portal,Zona de prueba
!set Name_program=Programas
!set name_program=programa
!set name_portalandgroup=Centros educativos y agrupamientos de clases
!set name_independantclass=Clases independientes

!distribute items Inscripción,Inscribirse,Anónimo,abierto,protegido,Año,\
Nuevo participante,Inscrito,Tipo de conexión,&#8679;,Duplicar\
into name_register,name_signup,name_anonymous,name_open,name_protected,name_year,\
name_new_participant,name_registered,name_connexion,name_up,name_copy

!set name_new_participant_external=!nosubst Aún no está inscrito en $classname. Por inscribirse,\
  pulse el botón
!set name_warning_external=Utilice el formulario de abajo sólo si el enlace de arriba\
no funciona.
!distribute line  No tiene cuenta en otras clases.\
Buscar su clase\
No hay ninguna clase disponible\
Ninguna clase corresponde a su búsqueda.\
Puede ir directamente a \
into name_noaccount,name_searchclass,name_noavailable,name_nofound,name_direct

!let classification=Primaria, Secundaria, Bachillerato, Universidad, Lenguas, Archivos, Desarrollo

!set name_text1=Elija la línea correspondiente a la clase o al centro educativo que le corresponda. \
<p>Pulse <span class="wims_button disabled">$wims_name_Enter</span> para entrar o inscribirse \
(si el estado es <span class="wims_label wims_warning">$name_protected</span>, necesita la contraseña de la clase \
que le proporcione el profesor o el administrador).</p>

!set name_text2=Para pasar a $name_level_else $sousclasses_else, elija \
el nombre en la tabla siguiente.
!set name_text3=Puede elegir $name_classess de la siguiente tabla.

!set name_language=No hay clases en español en este sitio. ¿Quizás esté buscando una clase en \
otro idioma ?
!set name_language2=Este sitio no contiene ninguna clase en español.

!set name_warning=Ha pedido conectarse a $name_classess que no existe.\
 Por favor verifique su petición.

!set name_enterorregister= !nosubst Usted tiene una cuenta en esta clase virtual,\
  Usted no tiene una cuenta en esta clase virtual
!set name_enter=!nosubst Para entrar a $classname, \
por favor introduzca su nombre de usuario y su contraseña.

!set name_entersup=!nosubst Para ingresar <strong>$name_classes $classname</strong> como\
  <em>$name_sup</em>, ingrese la contraseña $name_sup.

!set name_research1=Hay muchas clases virtuales en este sitio. Para encontrar la suya, \
escriba parte de una palabra en el título o en el nombre del(a) profesor(a).
!set name_research2=Hay todavía demasiadas clases correspondientes a su palabra de búsqueda. Por favor,\
dar una palabra más específica.

!set name_supervisor_text=!nosubst Escoja la línea que corresponde a la clase, al agrupamiento o al establecimiento buscado.\
<br>Luego pulse sobre <span class="wims_button disabled">$wims_name_Enter</span> como profesor (para entrar o inscribirse)\
 o como administrador (para gestionar el agrupamiento o establecimiento).\
<p>La inscripción a esta parte está reservada a los profesores.</p>

 !if $type=example
   !set name_example1=Lo sentimos, no se han encontrado clases abiertas en este sitio.
   !set name_example2= No hay clases abiertas en español en este sitio.
   !set name_example3=!nosubst Hay $clcnt clase(s) abierta(s) en español en este sitio.
    !set name_example3b=!nosubst  Hay $othercnt clase(s) abierta(s) en otros idiomas
   !set name_example4=Una clase abierta está abierta para todos como <strong>participante</strong>, de forma anónima o \
registrándose. El acceso como estudiante registrado le permite seguir el trabajo realizado \
(atención: las inscripciones se limpian regularmente, por ejemplo, al final del año escolar).
  !set name_example41=Un <strong> profesor </strong> puede usar los recursos de una clase abierta en una clase \
  adaptándolos a su proyecto. Por ejemplo,\
  <ul><li> es posible crear una nueva clase idéntica a una clase abierta; \
</li><li>después de crear una clase, el profesor puede elegir los recursos de una clase abierta \
y ponerlos en su clase.\
</li></ul>
   !set name_instruction=<ul>\
<li>Haga clic en <span class="wims_button disabled">$name_anonymous</span> para entrar a la clase como visitante anónimo (participante).\
</li><li>Haga clic en <span class="wims_button disabled">$name_register</span> para inscribirse en la clase.\
</li><li>Cuando esté inscrito, haga clic en <span class="wims_button disabled">$name_registered</span>\
para entrar a la clase con su identificador de usuario y su contraseña personal.\
</li></ul>
  !set name_sheet_example=El motor de búsqueda permite también encontrar XXXXX sobre un tema y\
  de un nivel dado que usted puede importar en una clase.
!endif

!set name_acceptcgu=Acepto las condiciones generales de uso
!set name_seecgu=Ver las condiciones generales de uso

!set name_sendmailmess=Se ha enviado un mensaje que contiene una nueva contraseña \
  a la dirección de correo electrónico que usted (o su profesor) estableció durante \
  la inscripción a la clase. \
  </p><p> \
  Intente ingresar nuevamente a la clase usando \
  su identificador de usuario y esta nueva contraseña \
  (una vez en la clase, puede cambiar su contraseña si lo desea). \
</p><p> \
Si no puede encontrar el mensaje enviado, póngase en contacto con el profesor de la clase \
  quien puede darle una nueva contraseña.
