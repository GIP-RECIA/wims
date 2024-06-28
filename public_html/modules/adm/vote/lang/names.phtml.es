!set lang_exists=yes

!set name_remark_numstud=Usted puede ingresar 0 en la segunda columna para indicar que no hay l�mite. 
!set name_introtext_group=Introducir el tama�o(n�mero) de cada grupo, y un comentario (si corresponde).
!set name_cardinal=N�mero

!set name_0=en preparaci�n
!set name_1=abierto
!set name_2=cerrado
!set name_3=ocultado
!set name_publish=publicado
!set name_publish2=publicada
!set name_hide=ocultado
!set name_hide2=ocultada
!set name_nominative=nominal
!set name_anonymous=an�nimo
!set name_trace=an�nimo y trazado
!set name_choice=Elecci�n
!set name_question=Pregunta
!set name_data=datos
!set name_global=globales
!set name_detail=por votante
!set name_yourchoice=Su elecci�n&nbsp;:
!set title_data=Datos de los cuestionarios para hoja de c�lculo
!set title_nominative=registro
!set title_vote=Cuestionario
!set title_anonymous=voto
!set name_choose=-- Escoja --
!set wims_name_vote=Lista de cuestionarios
!set name_result=Resultado del cuestionario&nbsp;
!set name_content=Contenido
!set name_creation= Creaci�n de un cuestionario o registro.
!set name_edition=Edici�n de un cuestionario o registro.
!set name_remaining=plazas restantes
!set name_untitled=Sin t�tulo
!set name_showresult=Tablas de resultados
!set name_nowritable=Cuestionario activo, no se puede modificar su contenido. Aqu� est� el c�digo fuente:
!set name_novotant=Ning�n voto
!set name_notenough=No hay suficientes votantes para publicar la lista
!set name_showlist=Resultados por pregunta
!set name_showglobal=Resultados globales
!set name_showlistbystudent=Resultados por votantes
!set name_showstudentbyitem=Lista por elecci�n

!distribute lines Su clase a�n no tiene ning�n cuestionario. \
Consulte con su profesor.\
No hay ning�n cuestionario activo.\
Aqu� est�n los cuestionarios / registros de su clase.\
N�mero de votos\
into name_novote,name_novotecheck,name_noactivevote,name_class_vote,\
name_cnt_votes

!distribute line Este cuestionario es an�nimo.\
   Este cuestionario es $name_trace.\
   Este registro es $name_nominative.\
   Est� cerrado.\
   Respuestas\
   Gracias por votar.\
   Ya ha manifestado su elecci�n, pero est� a tiempo de cambiar de opini�n.\
   Haga su elecci�n&nbsp;\
   Detalle de los registros\
   Textos de los comentarios\
   Si tiene comentarios, escr�balos en el foro.\
into name_thisvote_anomymous,name_thisvote_trace,name_thisvote_nominatif,\
   name_thisvote_closed,name_thisvote_answer,name_thisvote_already1,\
   name_thisvote_already2,name_give_your_choice,name_details,\
   name_comments,name_textarea

!set name_textarea_limit=!nosubst limitado a $limit_textarea caracteres
!set name_whovote=Lista de votantes
!set name_whodontvote=Lista de quienes no han votado

!set name_csv1=Aqu� tiene el fichero que puede descargar y abrir en su software \
 de hoja de c�lculo preferido&nbsp;

!set name_csv2=!nosubst Desea cargar los datos del cuestionario n�mero $vote &nbsp;
!set name_format=formato

!set name_option=Opciones
!set name_value=Valores

!! guided mode

!set name_optionclosed=cerrado, se abrir� solamente cuando otras opciones est�n llenas

!distribute lines N�mero de sesiones\
N�mero de grupos\
a lo m�s\
Nombre de la variable t�cnica\
Host IP predeterminado\
podr� ser modificado en la siguiente p�gina\
Texto de introducci�n\
por ejemplo, instrucciones generales\
N�mero de estudiantes por sesi�n\
Fecha de la sesi�n\
Hora de inicio de la sesi�n\
Hora de t�rmino de la sesi�n\
Host IP\
Informaci�n adicional\
Cancelaci�n de la inscripci�n\
into name_howmany,name_howmanygroups,name_atmost,name_namevar,name_textconnip,\
  name_textconnip2, name_introtext,name_introtext2,name_numstud,name_sessiondate,\
  name_begintime,name_endtime,name_connip,name_extra,\
  name_cancellation

!set name_numsess=!nosubst $numsess sesiones son posibles.
!set name_session_select =!nosubst Seleccione la fecha y la hora de las $numsess sesiones.

!set name_describesource=!nosubst Aqu� est� el c�digo fuente del cuestionario. Verifique los datos \
y haga clic en <span class="wims_button disabled">$wims_name_tosave</span>.

!if $vote_mode!=free
 !readproc adm/lang/sheetexam.phtml.$lang
!endif

!set name_yourvariable=!nosubst El nombre de la variable que usted escogi� para \
  este cuestionario es <span class="tt wims_code_variable">$namevar</span>
!set name_accessvar_instr=!nosubst <strong>Uso en un examen o en una hoja</strong>: \
en una hoja o en un examen activo, en <span class="tt wims_code_words">$(name_shinfo[6])</span>, seleccione \
 <span class="tt wims_code_words">$(name_allowtype[4])</span> y escoja esta variable t�cnica con la ayuda del men� propuesto.

!set name_group_instr=!nosubst <strong>Uso en la clase</strong>: puede filtrar \
los participantes seg�n esta variable para ciertas actividades de la clase.

!set name_group_help= permite seleccionar los participantes \
seg�n los grupos (correo y directorio de fotos por el momento).

!set name_accessvar_help=permite individualizar el acceso de los participantes \
a una hoja o a un examen.

!distribute items Modo libre,Acceso individualizado,Constituci�n de grupos,Grupos into name_free,name_accessvar, name_group,name_group1

!set name_model=Modelo
!set name_nextstep=Etapa siguiente

!set name_getsource=Aqu� est� el c�digo fuente. Puede copiar este c�digo \
(entre las dos l�neas compuestas de `*') en un fichero, \
lo que le permitir� reutilizarlo.
