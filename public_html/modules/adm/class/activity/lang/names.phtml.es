!set lang_exists=yes
!!!set name_title=Actividades individuales globales
!set name_noparticipant=Esta clase no tiene participante todav�a.
!set name_lastconnexion=�ltima conexi�n
!set name_total=tiempo total
!set name_click=Pulse un nombre para ver el detalle de su trabajo.
!set name_nbsessions=N�mero de sesiones
!set name_exo=ejercicios
!set name_time=Tiempo
!set name_cnt_exo=Nb. exos

!set name_showsheet=Seleccione las hojas de cuales desea ver la actividad.

!set name_ylabel=# ej.

!set name_expert0=Si desean seleccionar a algunos participantes, se proponen varios m�todos. \
Marque el m�todo deseado.

!distribute items  Men� experto,Por lista de logins,Por selecci�n,\
  Por participante,d�as,Mostrar las gr�ficas, Todos los participantes\
into name_menu,name_loginlist,name_select,name_shiftpart,name_days,\
 name_graphics, name_allpart

!distribute lines A continuaci�n, puede  hacer desfilar a los participantes (m�todo predeterminado si se solicitan gr�ficos). \
El n�mero de participantes seleccionados est� limitado a $limitpart, solo se mostrar�n los primeros $limitpart \
En caso de que se muestren gr�ficos, la cantidad de participantes mostrados se limita a $limitpart \
Solo si no se solicitan los gr�ficos.\
en caso de que se soliciten gr�ficos.\
into name_help1,name_help2,name_help3,name_help0,name_help00

!set name_min=min
!set name_listdays=Lundi,Mardi,Mercredi,Jeudi,Vendredi,Samedi,Dimanche
!set name_workingtime=Evaluation du temps de connexion
!set name_lgword=jusqu'�,entre,et,plus de,Pas d'activit�
!set name_studentname=!nosubst $lastname $firstname
!set name_choose=Choisir le participant
!set name_activityof=Activit� de
!set name_notsingleclass=!nosubst Cette classe fait partie d'une structure. Le temps d'activit� pr�sent� avant la date du $slib_out\
  est celui de l'activit� dans l'ensemble de la structure. Apr�s cette date, il s'agit de l'activit� dans la classe.

!if $job=cfwtime
  !set name_titlecfwtime=Configuration de l'affichage du temps de connexion
  !set name_config=Autoriser l'affichage du temps de connexion,\
Nombre de subdivisions,\
Dur�e d'une subdivision,\
Coloration
  !set name_desc_config=,\
Nombre de couleurs diff�rentes utilis�es dans le tableau,\
Longueur d'une subdivision en minutes,\
Vous pouvez choisir la couleur de chaque subdivision

!endif
