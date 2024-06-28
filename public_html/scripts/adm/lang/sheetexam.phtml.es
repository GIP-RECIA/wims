!! definición de los nombres para los vínculos en el menubox (definidos por wims_menu_items)
 !distribute items Insertar un archivo fuente,\
	 Obtener el código fuente de la hoja \
into wims_name_putsource,wims_name_sheetsource

!distribute items Añadir un ejercicio,\
		Añadir todos los ejercicios de una hoja,\
into wims_name_addexo,wims_name_addsexo

!set name_desc_title=!nosubst limitado a  $title_limit caracteres
!set name_desc_desc=!nosubst limitado a $desc_limit caracteres; se admiten las balisas y vínculos HTML

!let name_shinfo=!nosubst $wims_name_title,$wims_name_Status,\
Texto de explicación,\
Fecha de caducidad,Página de presentación,Registro de las notas,para todas las clases compartiendo :,$wims_name_comment,Duración de una sesión de examen,Número de pruebas por sesión,\
Peso,Regla de cálculo,\
Condición para ocultar la hoja a los estudiantes (uso de variables técnicas),\
Condición para ocultar la hoja a los estudiantes (uso de variables técnicas),\
Mode d'affichage,\
Pourcentage requis
!! TODO_lang

!let name_allowtype=abierto para todos, abierto para simulación, cerrado para todos, abierto para siguientes puestos (y/o horas):,ajustado por una variable técnica
!if exam notin $module
 !let name_allowtype=$(name_allowtype[1,3,4,5])
!endif
!set name_desc_allowtechvar=Elección de la variable técnica
!set name_desctableval=Tabla de filtro de acuerdo con el valor de la variable técnica
!set name_value=Valor
!set name_filtre=Filtro
!set name_EMPTY=(ningún valor)

!set name_desc_comment=Visible solamente por el profesor.
!let name_selectsheet=Indicar solamente los ejercicios de la hoja


!if $job=student
  !set name_title=Hoja de trabajo número $sheet<br>$title (presentación para los participantes)
  !set name_assignedwork=Tareas asignadas en esta hoja
  !set name_quality=0 de $[$re] puntos obtenidos, calidad
!endif

!set name_sheetempty=¡La hoja está vacía! No se le ha asignado nada todavía. Posiblemente se trata de un error de su profesor.

!set name_deps=Tiene que mejorar sus puntuaciones en los ejercicios
!set name_dep=Tiene que mejorar su puntuación en el ejercicio
!set name_dep2= antes de recibir puntuaciones en este.

!distribute items Peso,Coeficiente,Nota\
into name_weight,name_coeff,name_Score

!set name_dependency=Dependencias de las puntuaciones
