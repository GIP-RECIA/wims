N_manage = Administraci�n de WIMS en l�nea
wims_name_mirror  = Webs espejos
wims_name_Mirror  = Webs espejos
!! was erased by another definition
!!wims_name_pref    = Pr�f�rences

name_nopreparationsheet=Usted no tiene ninguna hoja de trabajo en preparaci�n en donde pueda insertar recursos. Le aconsejamos crear una hoja de trabajo antes de seguir su b�squeda de actividades.

N_within = entre
## defined also in scripts/adm/search_engine
N_clear = Empezar de nuevo

N_go = Ir a la zona de prueba
name_importfromtest=materiales de la zona de prueba del programa.
N_at = en
N_hide = Ocultar
name_allexampleclass=Todas las clases abiertas

name_example_motd=Usted ingres� como visitante an�nimo en esta clase.\
Si desea tener una visi�n clara de su trabajo, debe desconectarse\
y luego inscribirse como participante. Se realiza un trabajo de limpieza de inscripciones regularmente,\
pero no durante el a�o escolar.

V_title = WWW Interactive Multipurpose Server
V_cls = Clases virtuales
!! no more useful
wims_name_n_participant =Zona de Estudiantes
!! no more useful
wims_name_n_supervisor =Zona de Profesores
!! samething as wims_name_wsup
wims_name_mail = Escribir al profesor
!! transfer in html/names.phtml.fr
wims_name_pref          = Preferencias de visualizaci�n

wims_name_ref           = Enlaces inversos
wims_name_stat          = Estad�sticas
wims_name_title_stat=Estad�sticas de utilizaci�n de este sitio WIMS

CR_1 = Creaci�n de recursos
CR_Docs=Tutoriales
## old version
CR_OEF = Ejercicios interactivos
CR_mod = M�dulos de ejercicios
CR_sequence=Usted ha optado por presentar los siguientes recursos en secuencia \
  para los participantes. Recuerde actualizarla cuando agregue \
  un nuevo recurso.
##

E_comp = compilado el
E_manager = Administrador del sitio
E_software=Software interconectados
!set name_wimsabout1=Si usted encontr� alg�n problema con el servidor,\
puede contactar al
!set name_wimsabout2=indicando:\
<ul><li> el <strong>n�mero de la clase</strong> si el problema apareci� cuando usted trabajaba en una clase (o el t�tulo en su defecto) ;\
    </li><li> la <strong>fecha y hora</strong> en las cuales el problema ocurri� ;\
    </li><li> el <strong>tipo de sistema</strong> sobre el cual usted trabaja (por ejemplo: <span class="tt">Ubuntu version 14.04</span>, <span class="tt">Windows 10</span>...);\
    </li><li> el <strong>navegador</strong> que usted usa (por ejemplo: <span class="tt">firefox version 55.0.2</span> ...);\
    </li><li> la <strong>naturaleza del problema</strong>, indicando lo que usted hizo antes que ocurriera el problema. \
</li></ul>\
Si usted olvid� su contrase�a o el nombre de usuario que le permite trabajar en su clase,\
    <strong>contacte a su profesor</strong>.
wims_name_About_icons=Tema de iconos
wims_name_Change_log=Novedades de esta versi�n (Change log)

RE_prev = !nosubst Resultados anteriores
RE_next = !nosubst Resultados siguientes
RE_found = !nosubst Se han encontrado $Gotcnt $tt para su b�squeda
RE_found2= Los resultados est�n clasificados de acuerdo al tipo de actividad.\
  Haga clic en el bot�n correspondiente para verlas.
RE_warning_more= !nosubst Hay demasiados resultados, por lo que no se muestran todos \
  (limitado a $gotlim2 de cada tipo). Puede refinar la b�squeda \
  a�adiendo palabras y seleccionando el tipo de b�squeda a todas las palabras \
  (todos los grupos de palabras).
RE_nomatch = !nosubst Su b�squeda no arroj� ning�n resultado
RE_pop = !nosubst Aqu� est�n los $gotcnt $tt m�s populares
RE_pop2 = !nosubst $gotcnt $tt por orden de popularidad\
(n�mero $[$list_start+1] - $[$list_start+$gotcnt])
RE_try = Pruebe
RE_noKeyword    = Tiene que escribir una palabra clave

U_greet = !nosubst �Bienvenido/a\ $wims_firstname $wims_lastname!

U_newmsg = Hay $$newmsgcnt nuevo(s) mensajes(s) en el foro de la clase.
U_nosheet = Esta clase no tiene a�n hojas de trabajo. Por favor, vuelva a entrar\
m�s tarde, cuando su profesor haya preparado una.

U_assign = El profesor ha preparado las siguientes hojas de trabajo.
U_expired = expirado
U_done = hecho
U_average = calidad
U_examworking = Usted est� trabajando en un examen.
U_examdouble = En este caso no puede conectarse desde otro puesto.
U_examcont = Continuar el examen.
wims_name_U_oclass = Zonas de trabajo
wims_name_U_account = Mi cuenta
wims_name_coeff = coeficiente

U_gotoclass1 = Entrar como participante:
U_gotoclass3 = Entrar como profesor:
U_gotoclass0 = Sus zonas de trabajo:
U_gotoclass11 = Sus cursos como participante:
U_gotoclass31 = Sus cursos como profesor:
U_gotoclass01 = Sus cursos:
U_nogotoclass = Aucune classe en acc�s enseignant.

U_inscription1 = Para inscribirse en una zona de trabajo, pulse en una de las clases:
U_inscription2 = Inscribirse en una zona de trabajo como participante.
U_clickhere = Pulse aqu�
U_supervise = Inscribirse en una zona de trabajo como profesor.
!if $class_type=4
  name_gotosupervise = Para ir a otra clase como profesor, p�ngase en contacto con el administrador\
     del establecimiento
!else
  name_gotosupervise = Para ir a otra clase como profesor, p�ngase en contacto con el administrador\
     de la agrupaci�n de clases.
!endif
SU_greet = !nosubst �Hola, $wims_firstname $wims_lastname! <br> Bienvenido/a a la p�gina de mantenimiento de su clase
SU_Bhome = Volver a la p�gina principal del profesor
SU_log = acceso del profesor
SU_exp1 = la cual expira el
SU_exp2 =
SU_nosheet = Su clase todav�a no tiene recursos.

!!! In a group of classes
!if $class_type=2
SU_nosheet = Esta zona est� destinada a la configuraci�n del agrupamiento de clases.\
<ul><li>\
Haga clic en el bot�n "Gu�a" para obtener ayuda sobre el funcionamiento de un agrupamiento de clases.\
</li><li>\
Piense en configurar la manera con la cual los participantes y los profesores se identificar�n (en "Config/Mantenimiento")\
antes de proceder con las inscripciones.\
</li></ul>
!endif
!!! In a class zone in an institutional structure:
!if $class_typename=class and $class_type=3
SU_nosheet = Esta zona est� destinada a la inscripci�n de participantes que tendr�n acceso\
 a un mismo conjunto de cursos.\
 <ul><li>Usted puede completar esta zona escribiendo un mensaje\
 del d�a visible por los participantes cuando ingresen a esta clase antes de\
 trabajar en uno de los cursos propuestos (ver la secci�n "Vida de la clase").\
</li><li>\
 Los enlaces de la secci�n "Herramientas de la clase" permiten agregar recursos.\
</li><li>\
 Una ayuda apropiada se activar� cuando usted haga clic en alguno de los enlaces.\
</li></ul>
!endif
!!! In a test zone:
!if /0// isin $wims_class//
SU_nosheet = Esta zona est� destinada a la preparaci�n de recursos.\
 Para que un recurso de la zona de prueba se vuelva accesible a los participantes,\
 deber� primero importarlo a la zona programa.\
<div>\
Astucia: use esta zona para restaurar los recursos de la zona programa de un\
 a�o al otro.</div>
!endif

!!! In an individual class or a program zone:
!if $class_typename=program or $class_type=0 or\
   ($class_type=1 and $class_typename!=course and /0// notin $wims_class//)

SU_nosheet = Para comenzar r�pidamente:\
<ul><li>\
Use el motor de b�squeda para seleccionar y luego importar hojas de ejercicios\
 o documentos preparados por otros profesores.\
</li><li>\
Use la secci�n "Herramientas de la clase" si desea concebir\
sus propias hojas de ejercicios o documentos.\
</li><li>\
 Una hoja de ejercicios puede contener ejercicios encontrados gracias al motor de b�squeda\
 o sus propios ejercicios (mire la secci�n "Creaci�n de recursos" y luego Createxo para crearlos)\
</li><li>\
 Una ayuda apropiada se activar� cuando usted haga clic en alguno de los enlaces.\
</li><li>\
Si necesita m�s detalles, consulte la secci�n "$CR_Docs".\
</li></ul>
!endif
SU_shlist = Lista de recursos.
wims_name_SU_Gateway = Administraci�n de la estructura
SU_Bprogram = Vuelta al programa
SU_nopartconnected= Ning�n estudiante est� actualmente conectado
SU_numpartconnected=!nosubst Hay actualmente $wims_numpartconnected estudiante(s) conectado(s)
U_supconnected       = El profesor est� conectado.

wims_name_SE_list = Alumnos y notas (old)
wims_name_n_participant = P�gina inicial para el participante

wims_name_SE_mod = Mensaje del d�a
wims_name_SE_secu = Administraci�n de la seguridad

ADD_1 = A�adir
ADD_doc = un documento
ADD_sheet = una hoja de ejercicios
ADD_exam = un examen
ADD_exo = un ejercicio
ADD_vote = un cuestionario
ADD_class = clase
ADD_2 =
ADD_3 = A�adir una
ADD_cdt = Agenda

CL_Names = Niveles,Clases,Programas,Cursos,Cursos interclase
CL_Name = nivel, clase,programa,curso,curso interclase
CL_Test = Zona de prueba
CL_otherNames = Otras $(CL_Names[2]),$(CL_Names[3]),$(CL_Names[4]) de la clase

!if $wims_supertype = 4
 wims_name_U_oclass = Cambiar de zona
!else
 wims_name_U_oclass = Otras clases
!endif

## mettre dans un commun
!set name_deps = Tiene que mejorar sus notas en los ejercicios
!set name_dep = Tiene que mejorar su nota en el ejercicio
!set name_dep2 = antes de trabajar en este.
!set name_dep3 = Volver a la hoja de trabajo.


!set name_msg_openclasses=Usted ingres� como visitante an�nimo en esta clase, \
las notas toman en cuenta todas las respuestas de todos los visitantes an�nimos.\
Si desea tener una visi�n clara de su trabajo, debe desconectarse\
y luego inscribirse como participante.\
Se realiza un trabajo de limpieza de inscripciones regularmente, pero no durante el a�o escolar.

name_sequence_withtechvar_warning=Tenga en cuenta que la visualizaci�n de ciertas secuencias est� controlada por una variable t�cnica. La vista del estudiante propuesta no tiene esto en cuenta.
