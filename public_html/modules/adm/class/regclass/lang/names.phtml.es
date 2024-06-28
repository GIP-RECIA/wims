!set lang_exists=yes

!set name_password_check=Verificación de contraseña
!set name_listclass=clase,clase,agrupación de clases,clase,portal de centro educativo

!default Cltype=$cltype
!if $Cltype iswordof 2 4
  !if $Cltype=2
    !set name_classe=$(name_listclass[$Cltype+1])
    !set name_sup=del profesor-administrador
  !else
    !set name_classe=$(name_listclass[$Cltype+1])
    !set name_sup=del administrador
  !endif
  !set name_classes= el $name_classe
  !set name_classess= un $name_classe
  !set name_classesss= del $name_classe
  !set name_classessss= El $name_classe
!else
  !set name_classe=$(name_listclass[$Cltype+1])
  !set name_classes=la $name_classe
  !set name_classess=una $name_classe
  !set name_classesss= de la $name_classe
  !set name_classessss= La $name_classe
  !set name_sup=del profesor
!endif

# the name_cgu second item is the text link for the Terms of use.
!set name_cgu=He leído los términos de uso,\
  (ver los términos de uso),\
  y los acepto.,\
  Sólo puede aceptar las Condiciones Generales de Uso si las ha leído.
!set name_supcgu=Ya has aceptado las condiciones generales de uso

# Do not insert line break in noagreecgu_msg to keep JS working
!set noagreecgu_msg=No puede crear una clase en este servidor si no lee y acepta nuestros Términos de servicio.

!distribute lines Seguir\
  Reiniciar la operación\
  Creación de una estructura\
  Nombre del centro educativo\
A lo sumo\
Al menos\
  Reservado a los expertos\
  caracteres\
  Volver de nuevo al principio de la operación.\
  Seleccione el tipo de clase virtual que desea crear.\
  entre 4 y 16 caracteres, dígitos o letras sin acentuar\
 into name_continue,name_again,title,name_Name_portal,name_atmost,name_atleast,name_expert,\
   name_characters,name_comeback,name_choose,name_warningpass

!if $regpolicy=file
  !set noright=(no está autorizado para hacer eso).
 !else
  !set noright=(únicamente el administrador del sitio puede hacerlo).
 !endif

!set name_regpolicy=la creación de una clase no tendrá éxito a menos que dé una dirección\
   de correo correcta a la que tenga acceso en este momento

!set name_help1=Esta contraseña le permitirá acceder a la $name_classe como su supervisor.\
  Debe ser la única persona que la conozca.

!set name_help2=La contraseña $name_classesss se requerirá para la inscripción\
   de los participantes en la clase; así que deberá comunicársela\
    a sus estudiantes.

!set name_help3=La contraseña $name_classesss se requerirá para la inscripción\
   de <strong>los profesores</strong> $name_classesss;  <span class="wims_warning">\
   sus estudiantes y alumnos no deben conocerla.</span>

!distribute lines Es la fecha en que se archivará automáticamente su clase. Ya no estará accesible.\
Límite de participantes de la $name_classesss\
Acceso seguro\
Opcional\
Esta clave es de un solo uso. ¡No puede usarse para conectar a la $name_classe!\
Clave de la $name_classe\
Liga de autenticación CAS\
  into name_help_date,name_help_limit,name_secure,name_optional,name_warning_code,name_code,name_cas

!set name_host=!nosubst Nombres de las estaciones de trabajo desde las que efectuará las operaciones\
 sensibles sobre su $name_classe. Si no escribe nada, se le enviará un correo electrónico por cada operación \
  sensible (recomendado). Poner la palabra <span class="tt wims_code_words">all</span> inhabilitará esta medida de seguridad.

!set name_cas_help=Complete este campo solo si desea utilizar la autenticación externa del tipo CAS \
(proporcionado por su institución, por ejemplo).

!set name_cpexempleintro=!nosubst Crearás una copia de la clase\
 <span class="tt wims_code_words">$source_title</span>
!set name_choosemode=Debes elegir el modo de copia de esta clase.
!distribute item Completo,Parcial into name_btcpexemplemeth0,name_btcpexemplemeth1

!set name_cpexemplemeth0=Se copiarán todos los recursos. Los recursos se pueden desactivar \
y luego eliminar o adaptar según las dependencias.
!set name_cpexemplemeth1=Los exámenes no se copiarán. Los recursos se desactivarán automáticamente.\
 A continuación, puede decidir cuáles desea eliminar, adaptar o conservar.
!set name_cpexemplecomment=En todos los casos, las fechas de caducidad se adaptarán\
 a la fecha de cierre de la clase creada.
!set name_research1=Hay muchas clases virtuales en este sitio. \
Escribe parte de una palabra en su título o en el nombre del profesor para encontrar la que estás buscando.
!set name_research2=Todavía hay demasiadas clases que coinciden con su palabra de búsqueda. \
Por favor, dé una palabra más específica.
!set name_searchclass=Encuentra una clase
!set name_nofound=Ninguna clase coincide con su búsqueda.

!distribute items Libre, Protegida, No autorizada, Duplicación, \
Haga clic en la clase que se duplicará\
into name_free,name_protected,name_disallowed,name_cloning,name_clickclone

!set name_getcloningpwd=!nosubst Creará una copia de la clase <span class = "tt wims_code_words">$source_title </span>. \
Para hacer esto, debe ingresar la contraseña de duplicación que le dio el administrador de la clase.
!set name_subclass=Subclase de
!set name_clonebyclass=A partir d'une classe du serveur
!set name_clonebytgz=A partir d'une sauvegarde de classe,\
Déposez votre sauvegarde,\
Sélectionnez le fichier de sauvegarde à utiliser,\
Cette classe a été obtenue à partir d'une sauvegarde.

!distribute lines Ubicación (ciudad, país)\
  Al completar este campo, acepta que le indicamos que se utiliza WIMS en su ciudad (sin ninguna otra mención)\
  Coordenadas GPS\
into name_location,name_location_help,name_geoloc
