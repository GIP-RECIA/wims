!set lang_exists=yes

name_supervisor=administrador
!!name_teacher=Cuentas de profesores
name_addteacher=Nueva cuenta de profesor
!!name_modteacher=$wims_name_modteacher
name_delteacher=Borrar una cuenta de profesor
!!name_student=Cuentas de alumnos
name_addstudent=Nuevo alumno
name_modstudent=Propiedades del alumno
name_delstudent=Borrar un alumno
name_portal=Portal
name_level=Nivel
name_class=Clase
name_program=Programas
name_course=Curso
name_icourse=Curso entre clases
name_recsharable=Programas compartidos

name_dellevel0=Borrar el nivel
name_delclass0=Borrar la clase
name_delprogram0=Borrar el programa
name_delcourse0=Borrar el curso
name_deltest0=Borrar la zona de pruebas
name_classproperties=Propiedades de la clase
name_courseproperties=Propiedades del curso
name_levelproperties=Propiedades del nivel
name_programproperties=Propiedades del programa
name_participant=Participantes
name_csv=Cargar los datos de hoja de c�lculo: formato
name_backstruct=Hacer una copia de seguridad de la estructura
!set name_gestion=Acceso de gesti�n
!set name_othergestion=Otros accesos de gesti�n
!set name_addgestion=A�adir un acceso de gesti�n

this_level=este nivel
this_class=esta clase
this_prog=este programa
this_course=este curso
this_icourse=este curso

levellist=E1,E2,E3,E4,E5,E6,H1,H2,H3,H4,H5,H6,U1,U2,U3,U4,U5,G,R
levelnames=EPO 1,EPO 2,EPO 3,EPO 4,EPO 5,EPO 6,\
	ESO 1 , ESO 2, ESO 3, BAC 1 / BAC 2, BAC 3,\
	Universidad a�o 1,\
	Universidad a�o 2,\
	Universidad a�o 3,\
	Universidad a�o 4,\
	Universidad a�o 5,\
	Posgrado,\
	Investigaci�n

!set name_hidepass=ocultar las contrase�as
!set name_showpass=mostrar las contrase�as
!set name_IP=Ordenadores seguros
!set name_nonavailable=No disponible
!set name_code=C�digo
!set name_register=para inscripci�n
!set name_supervisor2=Responsable
!set name_Style= Estilo del programa
!set name_style=obligatorio, optativo
!set name_installation=Instalaci�n autom�tica de los cursos \
 <br>en todas las clases del nivel
 !set name_visit= Visitar

!if $job=addcourse
   !set name_course1= No hay ning�n programa que pueda a�adir cursos en esta clase.
   !set name_course2= No hay ninguna clase en la que este programa pueda instalar cursos.
   !set name_course3=Estos son los programas que le permiten a su clase a�adir cursos. \
   Pulse sobre el t�tulo para a�adir un curso.
 !set name_course4= Estas son las clases donde este programa puede instalar m�s cursos.\
 Pulse en el t�tulo para instalar un curso.
!endif

!if $job=class
  !set name_class1= Esta clase a�n no tiene cursos.
  !set name_class2=Cursos existentes en esta clase
!endif

!if $job=first
  !set name_first1=Todav�a no hay cuentas de profesores.
  !set name_first2=Todav�a no hay cuentas de alumnos.
  !set name_first3=Todav�a no se ha instalado ning�n nivel educativo.
  !set name_first4=Niveles educativos disponibles
!endif

!if $job=level
  !set name_level1=Este nivel todav�a no tiene clases.
  !set name_level2=Este nivel todav�a no tiene programas educativos.
  !set name_level3=Programas educativos disponibles en este nivel
  !set name_level4=Clases disponibles en este nivel
!endif

!if $job iswordof prog addtest deltest
 !set name_prog1=Zona de pruebas
 !set name_prog2= Este programa no tiene una zona de pruebas
 !set name_prog3=Instalar una zona de pruebas
 !set name_prog4=Este programa todav�a no tiene cursos.
 !set name_prog5=Cursos instalados en este programa
 !set name_prog6=Compartir los recursos de otro programa
 !set name_prog7=Los recursos de este programa son compartidos por otros programas.
 !set name_prog8=Este programa comparte los recursos pedag�gicos del programa
 !set name_prog9=Este programa no tiene cursos interclases.
!endif

!if $job=backstruct
 !set name_backstruct1=Esta es la copia de seguridad

 !set name_backstruct2=Se trata de un fichero en formato csv. Significado de los campos:\
 <p>tipo, c�digo, t�tulo, cuenta-del-administrador, contrase�a-de-inscripci�n, contrase�a-del-profesor, opciones.</p>

!endif

!set name_warning_share= No puede borrar este programa ya que sus recursos pedag�gicos  \
son compartidos por otros programas.
!if $job=addclass
!set form_titlename=T�tulos de las nuevas clases
!set form_titlename2=Separe los t�tulos con comas si \
  a�ade varias clases al mismo tiempo
!exit
!endif

!if $job=addicourse
!set form_caption=A�adir cursos interclases al programa
!set form_titlename=T�tulos de los nuevos cursos
!set form_titlename2=separe los t�tulos con comas si \
 a�ade varios cursos al mismo tiempo

!exit
!endif

!if $job=addprog
!set form_titlename=T�tulos de los nuevos programas:
!set form_titlename2=separe los t�tulos con comas si \
  a�ade varios programas al mismo tiempo)
!exit
!endif
