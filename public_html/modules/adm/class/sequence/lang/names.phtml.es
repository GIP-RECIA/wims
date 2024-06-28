!set lang_exists=yes

!set name_sequence=Secuencia
!set name_title=Añadir/modificar la secuencia
!set name_addseq= Ponga números que corresponden al orden de los recursos que desean insertar. \
Si desean borrar un número, escriba 0.

!set name_show1=Pueden crear una nueva secuencia pedagógica
!set name_show1c=. Entonces tendrá el estado "En preparación"\
 y, por lo tanto, no será visible para los participantes. Para que la presentación en secuencias sustituya a la presentación propuesta \
 por defecto por el servidor, deberá indicarlo mediante el menú Configurar. Luego, cada secuencia se puede hacer\
 visible u ocultar a un grupo de participantes durante un intervalo de tiempo elegido, independientemente del estado de las otras secuencias.

!set name_show2=!nosubst o modificar las secuencias ya creadas (pulsa el enlace <span class="wims_button disabled">$wims_name_add_sequence</span>).\
Para que sean visibles para los alumnos,\
Deben indicarlo pulsando el enlace <span class="wims_button disabled">$wims_name_config</span>, luego elegir las opciones correspondientes.\
Si retiran o cambian el orden de los recursos en la clase, deben comprobar las secuencias.

!set name_show3=Si vous ajoutez une ressource dans votre classe, vous devez l'ajouter dans une séquence pour qu'elle puisse être rendue visible aux participants.

!set name_config_reverse=Las secuencias son presentadas por omisión en orden cronológico,\
de la más antigua al la más reciente. Presentarlas en el orden inverso
!set name_config_generic=Palabra genérica para "$name_sequence"

!set name_config_status=Utilización de las secuencias en la página inicial de los participantes
!set wims_name_sequence=!defof sequence_Title in wimshome/log/classes/$wims_class/seq/.def
!set name_info=Información general
!set name_content=Contenido de la secuencia

!set name_desc_title=!nosubst limtado a $title_limit caracteres
!set name_desc_desc=!nosubst limitado a $desc_limit caracteres; se permiten etiquetas y enlaces html
!!set name_showdate=Fecha de activación automática de la secuencia
!!set name_hidedate=Fecha de cierre automático de la secuencia
!!set name_desc_showdate=En esta fecha, la secuencia se mostrará automáticamente.
!!set name_desc_hidedate=En esta fecha, la secuencia se ocultará automáticamente.

!set name_showhidetitle=Condition pour cacher la séquence aux participants
!let name_allowtype=visible pour tous,cachée pour tous,visible pour postes (et/ou heures) suivants,visibilité réglée par une variable technique
!set name_desc_allowtechvar=Choix de la variable technique
!set name_desctableval=Table de filtre en fonction de la valeur de la variable technique
!set name_value=Valeur
!set name_filtre=Filtre
!set name_EMPTY=(aucune valeur)
!set name_allowshare=para todas las clases compartiendo :
