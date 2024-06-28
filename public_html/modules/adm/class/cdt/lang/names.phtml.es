!set lang_exists=yes

!if $job=adddate
  !set cdt_subtitle=Añadir/modificar una fecha
  !goto common
!endif

!if $job=addtodo
  !set cdt_subtitle=Añadir deberes
  !goto common
!endif

!if $job=logfile
  !set cdt_subtitle=Ficha de registro
  !set name_text=Ahí tienes el registro de las conexiones al cuaderno de texto de la clase
  !goto common
!endif

!if $job=config
  !set cdt_subtitle=Ficha de registro
  !set name_link=Nombre del vínculo sobre la página inicial
  !set name_intro=Ahí tienes los parámetros que pueden cambiar
  !set name_see_logfile=Ver el fichero de conexión al cuaderno de texto de la clase
  !set name_reversedate=Mostrar información en orden inverso a la fecha
  !set name_showyear=Mostrar el año en tablas
  !set name_hide=Ocultar el libro de texto a los participantes
  !goto common
!endif

!if $job=addfile
  !set cdt_subtitle=Archivos subidos
  !set name_erasedfile=!nosubst El fichero <b>$erase</b> fue borrado.
  !set name_depos=Pueden depositar un fichero
  !set name_available=Ficheros disponibles
  !set name_erase=Borrar un fichero
  !set name_nodeposit=No pueden depositar más ficheros ya que su contenido está muy cercano de, \
    o sobrepasó, el límite de espacio disco autorizado. Lo sentimos.
  !set name_explanation1=!nosubst Estos ficheros son accesibles con ayuda de la variable\
  <span class="tt wims_code_variable">\filedir</span>. \
  Por ejemplo,\
  <p class="wimscenter">\
 <span class="tt wims_address">&lt;a href="\filedir/$f1"&gt;$f1&lt;/a&gt;</span>\
 </p>\
 crea un vínculo hacia el fichero <a href="$m_filedir/$f1">$f1</a>.\
 Pueden también escribir

  !set name_explanation2=para incluir el fichero de imagen <span class="tt">myfile.jpg</span> en la página.\
 <br>Los ficheros depositados son solamente accesibles a los participantes de la clase.
  !goto common
!endif

!if $job=helplink
  !set name_Add=Para añadir un objeto, pulsar el vínculo correspondiente.
  !goto common
!endif

:common
!distribute line El trabajo efectuado\
El trabajo pendiente\
entre el\
y el\
Añadir un examen\
Añadir una hoja de ejercicios\
para el\
Trabajo pendiente \
Deberes\
Numero de fechas a mostrar\
Trabajo pendiente para el \
Trabajo efectuado\
Sesión de\
caracteres\
Ninguna información\
Ninguna información para este día\
Ninguna información para este período\
Día\
Asignaturas\
En clase\
Dado el\
No hay trabajo que hacer para el\
Añadir un recurso de la clase\
el\
into name_done,name_todo,name_between,name_and,name_addexam,name_addsheet,name_for,name_worktodo,\
name_work,name_nb_date,name_todo2,name_workdone,name_session,\
name_character,name_noinfo1,name_noinfo2,name_noinfo3,\
name_Day,name_discipline,name_inclass,name_giventhe,name_nowork,\
name_help_add,name_the

!set name_workfor=$name_work $name_for

!set name_warning1=Si no escriben una segunda fecha, efectuarán \
una investigación sobre la primera fecha.

!set name_find2=Investigar
!set name_find=Buscar

!set name_hiddencdt1=El libro de texto ha sido desactivado por tu profesor.
!set name_hiddencdt2=Los datos del libro de texto relacionados con determinadas materias no se muestran (visualización desactivada por el profesor de la clase).
!set name_nosupervise=Este libro de texto reúne todos los libros de texto de la clase. Solo se puede consultar. Para realizar cambios o adiciones, debes acudir a los cursos correspondientes.
!set name_nosuperviseforuser=Este libro de texto reúne los elementos de los libros de texto de todos los cursos de la clase.
