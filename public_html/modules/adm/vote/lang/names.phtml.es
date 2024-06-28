!set lang_exists=yes

!set name_remark_numstud=Usted puede ingresar 0 en la segunda columna para indicar que no hay límite. 
!set name_introtext_group=Introducir el tamaño(número) de cada grupo, y un comentario (si corresponde).
!set name_cardinal=Número

!set name_0=en preparación
!set name_1=abierto
!set name_2=cerrado
!set name_3=ocultado
!set name_publish=publicado
!set name_publish2=publicada
!set name_hide=ocultado
!set name_hide2=ocultada
!set name_nominative=nominal
!set name_anonymous=anónimo
!set name_trace=anónimo y trazado
!set name_choice=Elección
!set name_question=Pregunta
!set name_data=datos
!set name_global=globales
!set name_detail=por votante
!set name_yourchoice=Su elección&nbsp;:
!set title_data=Datos de los cuestionarios para hoja de cálculo
!set title_nominative=registro
!set title_vote=Cuestionario
!set title_anonymous=voto
!set name_choose=-- Escoja --
!set wims_name_vote=Lista de cuestionarios
!set name_result=Resultado del cuestionario&nbsp;
!set name_content=Contenido
!set name_creation= Creación de un cuestionario o registro.
!set name_edition=Edición de un cuestionario o registro.
!set name_remaining=plazas restantes
!set name_untitled=Sin título
!set name_showresult=Tablas de resultados
!set name_nowritable=Cuestionario activo, no se puede modificar su contenido. Aquí está el código fuente:
!set name_novotant=Ningún voto
!set name_notenough=No hay suficientes votantes para publicar la lista
!set name_showlist=Resultados por pregunta
!set name_showglobal=Resultados globales
!set name_showlistbystudent=Resultados por votantes
!set name_showstudentbyitem=Lista por elección

!distribute lines Su clase aún no tiene ningún cuestionario. \
Consulte con su profesor.\
No hay ningún cuestionario activo.\
Aquí están los cuestionarios / registros de su clase.\
Número de votos\
into name_novote,name_novotecheck,name_noactivevote,name_class_vote,\
name_cnt_votes

!distribute line Este cuestionario es anónimo.\
   Este cuestionario es $name_trace.\
   Este registro es $name_nominative.\
   Está cerrado.\
   Respuestas\
   Gracias por votar.\
   Ya ha manifestado su elección, pero está a tiempo de cambiar de opinión.\
   Haga su elección&nbsp;\
   Detalle de los registros\
   Textos de los comentarios\
   Si tiene comentarios, escríbalos en el foro.\
into name_thisvote_anomymous,name_thisvote_trace,name_thisvote_nominatif,\
   name_thisvote_closed,name_thisvote_answer,name_thisvote_already1,\
   name_thisvote_already2,name_give_your_choice,name_details,\
   name_comments,name_textarea

!set name_textarea_limit=!nosubst limitado a $limit_textarea caracteres
!set name_whovote=Lista de votantes
!set name_whodontvote=Lista de quienes no han votado

!set name_csv1=Aquí tiene el fichero que puede descargar y abrir en su software \
 de hoja de cálculo preferido&nbsp;

!set name_csv2=!nosubst Desea cargar los datos del cuestionario número $vote &nbsp;
!set name_format=formato

!set name_option=Opciones
!set name_value=Valores

!! guided mode

!set name_optionclosed=cerrado, se abrirá solamente cuando otras opciones estén llenas

!distribute lines Número de sesiones\
Número de grupos\
a lo más\
Nombre de la variable técnica\
Host IP predeterminado\
podrá ser modificado en la siguiente página\
Texto de introducción\
por ejemplo, instrucciones generales\
Número de estudiantes por sesión\
Fecha de la sesión\
Hora de inicio de la sesión\
Hora de término de la sesión\
Host IP\
Información adicional\
Cancelación de la inscripción\
into name_howmany,name_howmanygroups,name_atmost,name_namevar,name_textconnip,\
  name_textconnip2, name_introtext,name_introtext2,name_numstud,name_sessiondate,\
  name_begintime,name_endtime,name_connip,name_extra,\
  name_cancellation

!set name_numsess=!nosubst $numsess sesiones son posibles.
!set name_session_select =!nosubst Seleccione la fecha y la hora de las $numsess sesiones.

!set name_describesource=!nosubst Aquí está el código fuente del cuestionario. Verifique los datos \
y haga clic en <span class="wims_button disabled">$wims_name_tosave</span>.

!if $vote_mode!=free
 !readproc adm/lang/sheetexam.phtml.$lang
!endif

!set name_yourvariable=!nosubst El nombre de la variable que usted escogió para \
  este cuestionario es <span class="tt wims_code_variable">$namevar</span>
!set name_accessvar_instr=!nosubst <strong>Uso en un examen o en una hoja</strong>: \
en una hoja o en un examen activo, en <span class="tt wims_code_words">$(name_shinfo[6])</span>, seleccione \
 <span class="tt wims_code_words">$(name_allowtype[4])</span> y escoja esta variable técnica con la ayuda del menú propuesto.

!set name_group_instr=!nosubst <strong>Uso en la clase</strong>: puede filtrar \
los participantes según esta variable para ciertas actividades de la clase.

!set name_group_help= permite seleccionar los participantes \
según los grupos (correo y directorio de fotos por el momento).

!set name_accessvar_help=permite individualizar el acceso de los participantes \
a una hoja o a un examen.

!distribute items Modo libre,Acceso individualizado,Constitución de grupos,Grupos into name_free,name_accessvar, name_group,name_group1

!set name_model=Modelo
!set name_nextstep=Etapa siguiente

!set name_getsource=Aquí está el código fuente. Puede copiar este código \
(entre las dos líneas compuestas de `*') en un fichero, \
lo que le permitirá reutilizarlo.
