!set lang_exists=yes

!set name_password_check=Verificaci�n de contrase�a
!set name_listclass=clase,clase,agrupaci�n de clases,clase,portal de centro educativo

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
!set name_cgu=He le�do los t�rminos de uso,\
  (ver los t�rminos de uso),\
  y los acepto.,\
  S�lo puede aceptar las Condiciones Generales de Uso si las ha le�do.
!set name_supcgu=Ya has aceptado las condiciones generales de uso

# Do not insert line break in noagreecgu_msg to keep JS working
!set noagreecgu_msg=No puede crear una clase en este servidor si no lee y acepta nuestros T�rminos de servicio.

!distribute lines Seguir\
  Reiniciar la operaci�n\
  Creaci�n de una estructura\
  Nombre del centro educativo\
A lo sumo\
Al menos\
  Reservado a los expertos\
  caracteres\
  Volver de nuevo al principio de la operaci�n.\
  Seleccione el tipo de clase virtual que desea crear.\
  entre 4 y 16 caracteres, d�gitos o letras sin acentuar\
 into name_continue,name_again,title,name_Name_portal,name_atmost,name_atleast,name_expert,\
   name_characters,name_comeback,name_choose,name_warningpass

!if $regpolicy=file
  !set noright=(no est� autorizado para hacer eso).
 !else
  !set noright=(�nicamente el administrador del sitio puede hacerlo).
 !endif

!set name_regpolicy=la creaci�n de una clase no tendr� �xito a menos que d� una direcci�n\
   de correo correcta a la que tenga acceso en este momento

!set name_help1=Esta contrase�a le permitir� acceder a la $name_classe como su supervisor.\
  Debe ser la �nica persona que la conozca.

!set name_help2=La contrase�a $name_classesss se requerir� para la inscripci�n\
   de los participantes en la clase; as� que deber� comunic�rsela\
    a sus estudiantes.

!set name_help3=La contrase�a $name_classesss se requerir� para la inscripci�n\
   de <strong>los profesores</strong> $name_classesss;  <span class="wims_warning">\
   sus estudiantes y alumnos no deben conocerla.</span>

!distribute lines Es la fecha en que se archivar� autom�ticamente su clase. Ya no estar� accesible.\
L�mite de participantes de la $name_classesss\
Acceso seguro\
Opcional\
Esta clave es de un solo uso. �No puede usarse para conectar a la $name_classe!\
Clave de la $name_classe\
Liga de autenticaci�n CAS\
  into name_help_date,name_help_limit,name_secure,name_optional,name_warning_code,name_code,name_cas

!set name_host=!nosubst Nombres de las estaciones de trabajo desde las que efectuar� las operaciones\
 sensibles sobre su $name_classe. Si no escribe nada, se le enviar� un correo electr�nico por cada operaci�n \
  sensible (recomendado). Poner la palabra <span class="tt wims_code_words">all</span> inhabilitar� esta medida de seguridad.

!set name_cas_help=Complete este campo solo si desea utilizar la autenticaci�n externa del tipo CAS \
(proporcionado por su instituci�n, por ejemplo).

!set name_cpexempleintro=!nosubst Crear�s una copia de la clase\
 <span class="tt wims_code_words">$source_title</span>
!set name_choosemode=Debes elegir el modo de copia de esta clase.
!distribute item Completo,Parcial into name_btcpexemplemeth0,name_btcpexemplemeth1

!set name_cpexemplemeth0=Se copiar�n todos los recursos. Los recursos se pueden desactivar \
y luego eliminar o adaptar seg�n las dependencias.
!set name_cpexemplemeth1=Los ex�menes no se copiar�n. Los recursos se desactivar�n autom�ticamente.\
 A continuaci�n, puede decidir cu�les desea eliminar, adaptar o conservar.
!set name_cpexemplecomment=En todos los casos, las fechas de caducidad se adaptar�n\
 a la fecha de cierre de la clase creada.
!set name_research1=Hay muchas clases virtuales en este sitio. \
Escribe parte de una palabra en su t�tulo o en el nombre del profesor para encontrar la que est�s buscando.
!set name_research2=Todav�a hay demasiadas clases que coinciden con su palabra de b�squeda. \
Por favor, d� una palabra m�s espec�fica.
!set name_searchclass=Encuentra una clase
!set name_nofound=Ninguna clase coincide con su b�squeda.

!distribute items Libre, Protegida, No autorizada, Duplicaci�n, \
Haga clic en la clase que se duplicar�\
into name_free,name_protected,name_disallowed,name_cloning,name_clickclone

!set name_getcloningpwd=!nosubst Crear� una copia de la clase <span class = "tt wims_code_words">$source_title </span>. \
Para hacer esto, debe ingresar la contrase�a de duplicaci�n que le dio el administrador de la clase.
!set name_subclass=Subclase de
!set name_clonebyclass=A partir d'une classe du serveur
!set name_clonebytgz=A partir d'une sauvegarde de classe,\
D�posez votre sauvegarde,\
S�lectionnez le fichier de sauvegarde � utiliser,\
Cette classe a �t� obtenue � partir d'une sauvegarde.

!distribute lines Ubicaci�n (ciudad, pa�s)\
  Al completar este campo, acepta que le indicamos que se utiliza WIMS en su ciudad (sin ninguna otra menci�n)\
  Coordenadas GPS\
into name_location,name_location_help,name_geoloc
