!set lang_exists=yes

!set wims_name_sheetcheck=Compruebe la hoja de trabajo

!set name_choose=Elija la hoja 
!!in file index
!!set name_title=Insertar en una hoja de trabajo

!set name_insert=Quiere insertar el elemento de trabajo del m�dulo
!set name_parm=con los par�metros de inicializaci�n
!set name_modifytitle=Tambi�n puede modificar el t�tulo y el texto de la descripci�n.

!set name_required=N�mero de puntos que los participantes deben obtener
!set name_repeat=cada respuesta correcta en el ejercicio da 10 puntos; ponga \
 m�s de 10 puntos aqu� si quiere que el participante repita el ejercicio.

!set name_weight=Peso de los puntos obtenidos en este trabajo
!set name_weight_hint=Se utiliza tanto para el c�lculo de los indicadores de trabajo\
 en la hoja como para el c�lculo del puntaje de calidad de la hoja.\
 Ponga el peso 0 si no desea que se cuenten las puntuaciones obtenidas en este ejercicio.
!set name_exotrymax=N�mero m�ximo de intentos contabilizados
!set name_exotrymax_hint=Par�metro que permite establecer un n�mero m�ximo <span class="tt">n</span>\
 de pruebas contadas en el c�lculo de las notas durante los per�odos en los que se abre el registro de las notas\
  en la hoja (el trabajo en el ejercicio siempre es a�n posible\
   una vez superado este n�mero).\
  Trabajar en una serie de ejercicios se considera una prueba, \
   si se ha dado o no una respuesta y\
   si se ha activado o no la grabaci�n de notas.\
   El c�lculo de las notas tiene en cuenta �nicamente las puntuaciones de las primeras <span class = "tt">n</span>\
   pruebas en las que se activ� el registro de las notas.\
    De forma predeterminada, se cuentan todas las pruebas con registro activado.\
    Verifique la compatibilidad con la cantidad de puntos requeridos si coloca un n�mero positivo.
!set name_end=!nosubst El recurso <span class="wims_mod_title">$title</span> se ha a�adido con �xito a la hoja de trabajo
!set name_endallexo=!nosubst se ha insertado con �xito una serie de ejercicios en \
  la hoja <span class = "wims_mod_title"> $title </span> con par�metros
!set name_endallexos=!nosubst $addexo series de ejecicios han sido a�adidas con �xito\
  en la hoja <span class="wims_mod_title">$title</span> con los par�metros
!set name_endallexo2s=!nosubst El siguiente $notadd material educativo no pudo ser a�adido porque ya exist�a:
!set name_endallexo2=!nosubst El siguiente recurso no pudo ser a�adido porque ya existe:

!set name_choose_exo=Este recurso se insertar� como un nueva serie de ejercicios de la hoja de trabajo.
!set name_choose_allexo=!nosubst Cada uno de los $exocnt ejercicios del m�dulo se insertar� como una nueva serie de ejercicios en la hoja.
!set name_choose_helpexo=Este recurso se insertar� como ayuda para una de las series \
 de ejercicios en la hoja cuando la calificaci�n est� entre,y
!set name_choose_series=Haga clic en el nombre de la serie de ejercicios a la que desea agregar la ayuda.
!set name_actualhelp=Ayuda actual
!set name_series=Series de ejercicios
!set name_exo_order=�rden de los ejercicios de la serie
!set name_replace_add=Remplazar,Agregar

!if $job=addallexo
  !read oef/es/intronames
!endif
