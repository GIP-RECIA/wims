!set lang_exists=yes

!set wims_name_sheetcheck=Compruebe la hoja de trabajo

!set name_choose=Elija la hoja 
!!in file index
!!set name_title=Insertar en una hoja de trabajo

!set name_insert=Quiere insertar el elemento de trabajo del módulo
!set name_parm=con los parámetros de inicialización
!set name_modifytitle=También puede modificar el título y el texto de la descripción.

!set name_required=Número de puntos que los participantes deben obtener
!set name_repeat=cada respuesta correcta en el ejercicio da 10 puntos; ponga \
 más de 10 puntos aquí si quiere que el participante repita el ejercicio.

!set name_weight=Peso de los puntos obtenidos en este trabajo
!set name_weight_hint=Se utiliza tanto para el cálculo de los indicadores de trabajo\
 en la hoja como para el cálculo del puntaje de calidad de la hoja.\
 Ponga el peso 0 si no desea que se cuenten las puntuaciones obtenidas en este ejercicio.
!set name_exotrymax=Número máximo de intentos contabilizados
!set name_exotrymax_hint=Parámetro que permite establecer un número máximo <span class="tt">n</span>\
 de pruebas contadas en el cálculo de las notas durante los períodos en los que se abre el registro de las notas\
  en la hoja (el trabajo en el ejercicio siempre es aún posible\
   una vez superado este número).\
  Trabajar en una serie de ejercicios se considera una prueba, \
   si se ha dado o no una respuesta y\
   si se ha activado o no la grabación de notas.\
   El cálculo de las notas tiene en cuenta únicamente las puntuaciones de las primeras <span class = "tt">n</span>\
   pruebas en las que se activó el registro de las notas.\
    De forma predeterminada, se cuentan todas las pruebas con registro activado.\
    Verifique la compatibilidad con la cantidad de puntos requeridos si coloca un número positivo.
!set name_end=!nosubst El recurso <span class="wims_mod_title">$title</span> se ha añadido con éxito a la hoja de trabajo
!set name_endallexo=!nosubst se ha insertado con éxito una serie de ejercicios en \
  la hoja <span class = "wims_mod_title"> $title </span> con parámetros
!set name_endallexos=!nosubst $addexo series de ejecicios han sido añadidas con éxito\
  en la hoja <span class="wims_mod_title">$title</span> con los parámetros
!set name_endallexo2s=!nosubst El siguiente $notadd material educativo no pudo ser añadido porque ya existía:
!set name_endallexo2=!nosubst El siguiente recurso no pudo ser añadido porque ya existe:

!set name_choose_exo=Este recurso se insertará como un nueva serie de ejercicios de la hoja de trabajo.
!set name_choose_allexo=!nosubst Cada uno de los $exocnt ejercicios del módulo se insertará como una nueva serie de ejercicios en la hoja.
!set name_choose_helpexo=Este recurso se insertará como ayuda para una de las series \
 de ejercicios en la hoja cuando la calificación esté entre,y
!set name_choose_series=Haga clic en el nombre de la serie de ejercicios a la que desea agregar la ayuda.
!set name_actualhelp=Ayuda actual
!set name_series=Series de ejercicios
!set name_exo_order=Órden de los ejercicios de la serie
!set name_replace_add=Remplazar,Agregar

!if $job=addallexo
  !read oef/es/intronames
!endif
