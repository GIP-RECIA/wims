!set lang_exists=yes

!if $job=adddate
  !set cdt_subtitle=A�adir/modificar una fecha
  !goto common
!endif

!if $job=addtodo
  !set cdt_subtitle=A�adir deberes
  !goto common
!endif

!if $job=logfile
  !set cdt_subtitle=Ficha de registro
  !set name_text=Ah� tienes el registro de las conexiones al cuaderno de texto de la clase
  !goto common
!endif

!if $job=config
  !set cdt_subtitle=Ficha de registro
  !set name_link=Nombre del v�nculo sobre la p�gina inicial
  !set name_intro=Ah� tienes los par�metros que pueden cambiar
  !set name_see_logfile=Ver el fichero de conexi�n al cuaderno de texto de la clase
  !set name_reversedate=Mostrar informaci�n en orden inverso a la fecha
  !set name_showyear=Mostrar el a�o en tablas
  !set name_hide=Ocultar el libro de texto a los participantes
  !goto common
!endif

!if $job=addfile
  !set cdt_subtitle=Archivos subidos
  !set name_erasedfile=!nosubst El fichero <b>$erase</b> fue borrado.
  !set name_depos=Pueden depositar un fichero
  !set name_available=Ficheros disponibles
  !set name_erase=Borrar un fichero
  !set name_nodeposit=No pueden depositar m�s ficheros ya que su contenido est� muy cercano de, \
    o sobrepas�, el l�mite de espacio disco autorizado. Lo sentimos.
  !set name_explanation1=!nosubst Estos ficheros son accesibles con ayuda de la variable\
  <span class="tt wims_code_variable">\filedir</span>. \
  Por ejemplo,\
  <p class="wimscenter">\
 <span class="tt wims_address">&lt;a href="\filedir/$f1"&gt;$f1&lt;/a&gt;</span>\
 </p>\
 crea un v�nculo hacia el fichero <a href="$m_filedir/$f1">$f1</a>.\
 Pueden tambi�n escribir

  !set name_explanation2=para incluir el fichero de imagen <span class="tt">myfile.jpg</span> en la p�gina.\
 <br>Los ficheros depositados son solamente accesibles a los participantes de la clase.
  !goto common
!endif

!if $job=helplink
  !set name_Add=Para a�adir un objeto, pulsar el v�nculo correspondiente.
  !goto common
!endif

:common
!distribute line El trabajo efectuado\
El trabajo pendiente\
entre el\
y el\
A�adir un examen\
A�adir una hoja de ejercicios\
para el\
Trabajo pendiente \
Deberes\
Numero de fechas a mostrar\
Trabajo pendiente para el \
Trabajo efectuado\
Sesi�n de\
caracteres\
Ninguna informaci�n\
Ninguna informaci�n para este d�a\
Ninguna informaci�n para este per�odo\
D�a\
Asignaturas\
En clase\
Dado el\
No hay trabajo que hacer para el\
A�adir un recurso de la clase\
el\
into name_done,name_todo,name_between,name_and,name_addexam,name_addsheet,name_for,name_worktodo,\
name_work,name_nb_date,name_todo2,name_workdone,name_session,\
name_character,name_noinfo1,name_noinfo2,name_noinfo3,\
name_Day,name_discipline,name_inclass,name_giventhe,name_nowork,\
name_help_add,name_the

!set name_workfor=$name_work $name_for

!set name_warning1=Si no escriben una segunda fecha, efectuar�n \
una investigaci�n sobre la primera fecha.

!set name_find2=Investigar
!set name_find=Buscar

!set name_hiddencdt1=El libro de texto ha sido desactivado por tu profesor.
!set name_hiddencdt2=Los datos del libro de texto relacionados con determinadas materias no se muestran (visualizaci�n desactivada por el profesor de la clase).
!set name_nosupervise=Este libro de texto re�ne todos los libros de texto de la clase. Solo se puede consultar. Para realizar cambios o adiciones, debes acudir a los cursos correspondientes.
!set name_nosuperviseforuser=Este libro de texto re�ne los elementos de los libros de texto de todos los cursos de la clase.
