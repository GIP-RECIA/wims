!set lang_exists=yes
!!!set name_title=Actividades individuales globales
!set name_noparticipant=Esta clase no tiene participante todavía.
!set name_lastconnexion=Última conexión
!set name_total=tiempo total
!set name_click=Pulse un nombre para ver el detalle de su trabajo.
!set name_nbsessions=Número de sesiones
!set name_exo=ejercicios
!set name_time=Tiempo
!set name_cnt_exo=Nb. exos

!set name_showsheet=Seleccione las hojas de cuales desea ver la actividad.

!set name_ylabel=# ej.

!set name_expert0=Si desean seleccionar a algunos participantes, se proponen varios métodos. \
Marque el método deseado.

!distribute items  Menú experto,Por lista de logins,Por selección,\
  Por participante,días,Mostrar las gráficas, Todos los participantes\
into name_menu,name_loginlist,name_select,name_shiftpart,name_days,\
 name_graphics, name_allpart

!distribute lines A continuación, puede  hacer desfilar a los participantes (método predeterminado si se solicitan gráficos). \
El número de participantes seleccionados está limitado a $limitpart, solo se mostrarán los primeros $limitpart \
En caso de que se muestren gráficos, la cantidad de participantes mostrados se limita a $limitpart \
Solo si no se solicitan los gráficos.\
en caso de que se soliciten gráficos.\
into name_help1,name_help2,name_help3,name_help0,name_help00

!set name_min=min
!set name_listdays=Lundi,Mardi,Mercredi,Jeudi,Vendredi,Samedi,Dimanche
!set name_workingtime=Evaluation du temps de connexion
!set name_lgword=jusqu'à,entre,et,plus de,Pas d'activité
!set name_studentname=!nosubst $lastname $firstname
!set name_choose=Choisir le participant
!set name_activityof=Activité de
!set name_notsingleclass=!nosubst Cette classe fait partie d'une structure. Le temps d'activité présenté avant la date du $slib_out\
  est celui de l'activité dans l'ensemble de la structure. Après cette date, il s'agit de l'activité dans la classe.

!if $job=cfwtime
  !set name_titlecfwtime=Configuration de l'affichage du temps de connexion
  !set name_config=Autoriser l'affichage du temps de connexion,\
Nombre de subdivisions,\
Durée d'une subdivision,\
Coloration
  !set name_desc_config=,\
Nombre de couleurs différentes utilisées dans le tableau,\
Longueur d'une subdivision en minutes,\
Vous pouvez choisir la couleur de chaque subdivision

!endif
