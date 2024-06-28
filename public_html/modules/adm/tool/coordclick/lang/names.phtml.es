!set lang_exists=yes

!set name_intro=!nosubst La herramienta <span class="wims_mod_title">$module_title</span> est� destinada \
a crear r�pidamente ejercicios en los que se debe etiquetar una imagen o clicar en \
ciertas zonas de una imagen. Al principio, deber�s \
colocar en la imagen los puntos o flechas que indican los lugares a etiquetar. \
A continuaci�n, se propondr�n modelos de ejercicio en $wims_name_createxo,\
mira la lista en

!set name_help1=Primero cargue la imagen e indique si desea clicar en un punto o \
en dos puntos (trazar una flecha) para cada etiqueta. El nombre del archivo de imagen debe estar \
formado solo por caracteres alfanum�ricos sin acentos o espacios (extensiones habituales: \
<span class="tt">jpg</span>, <span class="tt">png</span>,<span class="tt">gif</span>). La imagen debe tener un tama�o razonable \
(m�ximo 500 p�xeles) y ocupar menos de 200K, de lo contrario, el ejercicio ser� muy lento.

!set name_help2=Indique el tama�o de la imagen haciendo clic en la esquina inferior derecha.
!set name_help01=Indique la leyenda del punto elegido y haga clic en este punto.
!set name_help11=Indique la leyenda del punto elegido y haga clic en el comienzo de la flecha.
!set name_help21=Indique la leyenda del punto elegido. Elija el tipo de zona a delimitar y luego haga clic en un punto en la zona que seleccionar� a continuaci�n.
!set name_help12=Haga clic en el final de la flecha.
!set name_help22=Delimite la zona con el mouse (el punto que acaba de seleccionar debe estar dentro).
!set name_help31=Escriba la leyenda
!set name_help32=Trace la l�nea quebrada.
!set name_legend= Leyenda
!set name_name_type=Tipo de trazas
!set name_noimage=No eligi� ninguna imagen.
!set name_nosize=No hizo clic en la esquina inferior derecha para indicar el tama�o de la imagen.
!set name_nolegend= Olvid� ingresar la leyenda.
!set name_noclick= Olvid� hacer clic en un punto de la imagen.
!set name_point11=Haga clic en el primer punto.
!set name_point12=Haga clic en el segundo punto.
!set name_point01=Haga clic en el punto.
!set name_point21=Haga clic en un punto en el centro de la zona que luego seleccionar�.
!set name_point22=Dibujar la zona con el mouse.
!set name_point32=Dibuja la l�nea quebrada.
!set name_empty=Empezar de nuevo
!set name_erase=eliminar la �ltima l�nea
!set name_limit=Has alcanzado el l�mite de la cantidad de puntos.
!set name_copy=Puede mantener las coordenadas de los puntos para usarlos en un ejercicio.
!set name_list_curve=c�rculo, rect�ngulo, l�nea poligonal, l�nea discontinua
!set wims_name_manager1=!lowercase $wims_name_manager

!set name_bad_image=El archivo especificado no ha sido reconocido como una imagen.

!set name_help=Estos son algunos modelos de ejercicios. Tenga cuidado, no todos los modelos ofrecidos son \
necesariamente adaptables a su imagen.

!set name_warning=Tendr� que volver a cargar la imagen en el ejercicio.
!set name_createxo=Puede poner el ejercicio en
!set name_createxo2=Tendr� la posibilidad de cambiar algunos par�metros, y luego  \
guardarlo en su clase.

!distribute item punto, flecha, zona, l�nea quebrada into name_0, name_1,name_2,name_3
!set name_already=o recuperar una imagen ya cargada
!set name_else=Tambi�n puede
!set name_end=o termine de usar el ejercicio

!!description of the exercises

!distribute items Consigna,Nombre del archivo de imagen, Datos principales, \
  N�mero de preguntas, Tama�o de las etiquetas, Color de las flechas, Color de relleno, \
  Ancho m�ximo de la imagen, N�mero m�ximo de perturbadores, \
  Liste d'intrus, Nombre maximum d'intrus\
into name_instruction,name_image,name_data,\
 name_qu_cnt,name_labelsize,name_color1,name_color2,\
 name_width,name_distractor,name_intrus,name_nbintrus

!set name_help_format1=Formato de tipo de respuesta \
Los tipos de respuestas posibles aqu� son <span class="tt">dragfill</span> o <span class="tt">clickfill</span>.

!set name_help_format2=Formato de tipo de respuesta \
Los tipos de respuestas posibles aqu� son <span class="tt">case</span> o <span class="tt">nocase</span>\
dependiendo de si desea que la respuesta sea aceptada de forma exacta o aproximada \
(sin interrupciones, los guiones son descuidados, ...)


!set name_help_data=La primera l�nea es el tama�o de la imagen en p�xeles.\
Las siguientes l�neas est�n formadas por la leyenda seguida de las coordenadas del punto donde hacer clic \
o de la flecha para dibujar en p�xeles de acuerdo con los ejercicios.

!!! put the title on the first line and the description on the following lines.

!set name_description01=Etiquetas en una imagen \
Las etiquetas se colocan (el centro de la etiqueta en el punto) y deben llenarse \
con las leyendas propuestos por arrastrar y soltar o por clic.

!set name_instruction01=Al hacer clic en las etiquetas, col�quelas en su lugar.

!set name_description02=Haga clic en un punto en una imagen \
Se le pide que haga clic en el punto correspondiente a la leyenda dada.

!set name_instruction02=Haga clic en

!set name_description03=!nosubst �rea coloreada (escribir) \
El �rea indicada por uno de los puntos se presenta coloreada y se le pide que escriba la leyenda \
asociado con esta �rea. \
<span class="wims_warning">Atenci�n</span>. Este modelo solo debe usarse si la zona est� \
muy bien delimitado por una l�nea continua (como por ejemplo en un mapa de geograf�a).

!set name_instruction03=Escribir el nombre del �rea coloreada

!set name_description04=!nosubst �rea coloreada (clickfill) \
El �rea indicada por uno de los puntos se muestra coloreada y se le pide que haga clic en la leyenda \
asociado con este punto entre varias etiquetas propuestas.\
<span class="wims_warning">Atenci�n</span>. Este modelo solo debe usarse si la zona est� \
muy bien delimitado por una l�nea continua (como por ejemplo en un mapa de geograf�a).

!set name_instruction04=Haga clic en el nombre del �rea coloreada

!set name_description05=!nosubst Haga clic en un �rea bien definida de la imagen \
Se solicita hacer clic en un �rea muy delimitada de la imagen.\
<span class="wims_warning">Atenci�n</span>. Este modelo solo debe usarse si la zona est� \
muy bien delimitado por una l�nea continua (como por ejemplo en un mapa de geograf�a).

!set name_instruction05=Haga clic en la zona ...

!set name_description06=!nosubst Haga clic en varias �reas bien definidas de la imagen \
Se solicita hacer clic en varias �reas muy delimitadas de la imagen.\
<span class="wims_warning">Atenci�n</span>. Este modelo solo debe usarse si la zona est� \
muy bien delimitado por una l�nea continua (como por ejemplo en un mapa de geograf�a).\
Las �reas a agrupar deben tener exactamente la misma leyenda.

!set name_instruction06=Haga clic en las zonas ...

!set name_description07=!nosubst Rellenar los cuadros de texto \

!set name_instruction07=Completar las casillas

!set name_description11=Etiquetas con flechas \
Las etiquetas se colocan (su extremo interno al comienzo de las flechas seg�n si est�n a la derecha \
o a la izquierda de la imagen) y debe completarse con las leyendas \
propuestas por arrastrar y soltar o por clic.

!set name_instruction11=Al hacer clic en las etiquetas, col�quelas en su lugar.

!set name_description12=Escribir el nombre del objeto indicado por una flecha \
Se dibuja una flecha en el dibujo y se le pide que escriba la leyenda correspondiente a esta flecha.

!set name_instruction12=Escribir el nombre indicado por la flecha.

!set name_description13=Rellenar los cuadros de texto (con flechas)
!set name_instruction13=Completar las casillas

!set name_description21=Haga clic dentro de un �rea no dibujada. \
Debe haber una imagen en la que se dibujar�n las �reas. \
Puede usar la herramienta $module_title con la opci�n $name_2.

!set name_instruction21=Haga clic en la zona

!set name_description22=Haga clic dentro de �reas no dibujadas. \
Se solicita hacer clic en varias �reas de la imagen.\
Las �reas a agrupar deben tener exactamente la misma leyenda o estar en la misma l�nea.\
Debe haber una imagen en la que se dibujar�n las �reas. \
Puedes usar la herramienta $module_title con la opci�n $name_2.

!set name_instruction22=Haga clic en las zonas

!set name_description31=L�nea quebrada \
Se pide conectar puntos numerados por una l�nea quebrada

!set name_instruction31=Conecte los puntos por una l�nea respetando el orden.
