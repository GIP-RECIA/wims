!goto $err_

:notallowedmodule
Este m�dulo no est� habilitado en este servidor. Comun�quese con el administrador.!exit
!exit

:badsoldate
La fecha de aparici�n de la clave de respuestas debe ser mayor que la fecha de presentaci�n de la tarea por parte de los estudiantes.!exit
!exit

:badmaxfreework
La cantidad de tareas libres est� limitada a $max_freework. No puedes crear m�s.
!exit

:badstatutsubject
El estado de la tarea libre no le permite agregar archivos para el tema.!exit
!exit

:badstatutsolution
El estado de la tarea gratuita no le permite agregar archivos para la clave de respuestas.
!exit

:goodstatut
Cambio de estado exitoso.
!exit

:goodsave
Registro exitoso.
!exit

:gooderasefile
Archivo eliminado correctamente.
!exit

:goodaddfile
Archivo agregado
!exit

:notnow
Lo sentimos, esta funci�n a�n no est� implementada.
!exit

:fwnotperime
Acci�n imposible, la tarea libre no ha caducado.
!exit

:fwnotactive
Acci�n imposible: la asignaci�n libre no est� activa.
!exit

:badfilename
Su nombre de archivo no es compatible. Cambie el nombre antes de intentar cargarlo de nuevo.
!exit

:noterasable
Esta asignaci�n libre no se puede borrar. Debe haber otra asignaci�n libre activada con un n�mero mayor.
!exit

:gooderase
Asignaci�n libre debidamente borrada.
!exit

:gooddeactivate
Asignaci�n libre nuevamente en preparaci�n. Tenga en cuenta que es posible que algunos participantes de la clase ya hayan descargado los archivos de tareas.
!exit

:goodhide
Tareas libres ocultas a los participantes.
!exit

:goodarchive
Tarea libre archivada correctamente.
!exit

:notenoughfreespace
No hay suficiente espacio en el disco del aula para almacenar todos los archivos de los estudiantes. Debe reducir el tama�o m�ximo del �rea de archivo para cada alumno o pedirle al administrador del servidor que le asigne m�s espacio.
!exit

:badstudentfilesize
El tama�o de su archivo excede el tama�o permitido que es de $[0.25*$sizelimitfile] Mo.
!exit

:quota_file
Esta clase est� llena, ya no es posible cargar un archivo. �Contacta con tu profesor!
!exit

:quota_filestudent
No puede agregar este archivo porque su espacio personal no es suficiente.
!exit

:badallows
No tienes autorizaci�n para ver esta p�gina. �No te metas con la barra de direcciones!
!exit

:putworknotallow
No es posible enviar respuestas para esta tarea libre (mal estado o fecha de env�o de copias por parte de los participantes a�n no aprobados).
!exit

:studentwithoutfw
Este participante no envi� una copia, por lo que no es posible enviar una copia corregida.
!exit

:notallcorrected
Algunas copias no se han corregido. No es posible caducar esta asignaci�n libre.
!exit

:expire_nosoldisplay
La asignaci�n libre no puede caducar: la fecha para ver la hoja de respuestas no ha pasado.
!exit

:putworkusernotexists
�Qu� raro, pero este participante no existe! No juegues con la barra de direcciones del navegador.
!exit

:toomanychar
Est�s usando demasiados caracteres en tu texto. Debe estar limitado a $textzone_limit caracteres.
!exit

:notallowed_desactivated
Esta asignaci�n libre no se puede desactivar porque algunos participantes ya han comenzado a enviar una tarea.
!exit

:addrplay
Tu consulta no es correcta. �No te metas con la barra de direcciones!
!exit

:notauthsupervisor
Su estaci�n de trabajo no ha sido identificada como una ubicaci�n segura o no ha definido una ubicaci�n segura. Por lo tanto, no puede archivar su asignaci�n libre. Para continuar primero debes ingresar a la
!href module=adm/class/config zona de configuraci�n de la clase
 para certificar su conexi�n.
!exit

:not_secure
Solo se puede acceder a esta acci�n desde una estaci�n segura. Acceso denegado.
!exit

:alreadyarchivated
Esta asignaci�n libre ha sido archivada. Ya no es posible volver al estado activo.
!exit

:file_too_large
No fue posible crear un archivo de respaldo que contenga los datos de los estudiantes para esta tarea gratuita debido al tama�o.
<br> Los archivos est�n limitados a <strong>$max_arch_size Ko</strong>.
!exit

:addexo-nofreework
No hay ning�n ejercicio libre del tipo correcto en preparaci�n para insertar un ejercicio.
!exit

:not_exo
El recurso que seleccion� no es un ejercicio: no puede insertarlo en un trabajo libre.
!exit

:insert_fail
La inserci�n no tuvo �xito. Solo se pueden insertar ejercicios en un ejercicio libre.
!exit

:no_pick
La inserci�n no se ha realizado correctamente: no se ha seleccionado ninguna asignaci�n libre o la asignaci�n libre no era del tipo correcto.
!exit

:bad_freework
�Extra�o! El n�mero de asignaci�n libre es incorrecto.
!exit

:too_many_exos
Esta asignaci�n libre ya contiene el n�mero m�ximo de ejercicios.
!exit

:already_exist
Este recurso ya se ha insertado en la asignaci�n libre con los mismos par�metros.
!exit

:exo-insert
El ejercicio se insert� correctamente en la asignaci�n libre.
!exit

:exolog-noexo
Ning�n ejercicio seleccionado.
!exit

:exolog-exoexists
Ya ha guardado el ejercicio $exolog para esta asignaci�n libre. Ya no es posible cambiarlo.
!exit

:exolog-badparameter
La configuraci�n del ejercicio que est� intentando grabar no coincide con la declaraci�n. No te metas con la barra de direcciones.
!exit

:exolog-nofile
�Extra�o! No se registr� ning�n archivo para este ejercicio.
!exit

:exolog-nouser
�El participante no existe!
!exit

:ok-delexo
El ejercicio se ha eliminado correctamente.
!exit

:noinlineanswer
Bizarre ! mais ce devoir libre ne contient pas de r�ponse en ligne. Il faut �viter de jouer avec la barre d'adresse.
!exit

:badscore
La note que vous avez saisie est incorrecte. La note doit �tre un entier compris entre 0 et $maxscore.
!exit

:printversion
  Il est impossible d'ins�rer une version imprimable dans une feuille d'exercices.
!exit

:exolog-badscore
Vous essayez d'enregistrer un exercice avec un score insuffisant par rapport au score exig�. Ne jouez pas avec la barre d'adresse.
!exit

:toomanywimsexo
Vous ne pouvez pas d�finir plus d'une zone de type exercice interactif.
!exit

:duplicateok
Worksheet correctly duplicated.
!exit

:truncatedtext
Il testo inserito � troppo lungo e � stato rielaborato e tagliato.
!exit

:geogebratoolong
La costruzione GeoGebra � troppo complessa e non pu� essere salvata. Riprova!
!exit