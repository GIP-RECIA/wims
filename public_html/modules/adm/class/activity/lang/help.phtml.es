<div class="box_content">
  <div class="title_box">
      <h2 class="wims_title">Actividades individuales globales</h2>
  </div>
El cuadro muestra
<ul> <li>
 la fecha del último ejercicio realizado,
</li> <li>
 el número de sesiones diferentes,
</li> <li>
 la cantidad de ejercicios completados y la cantidad de ejercicios no terminados
 (todas las hojas combinadas),
</li> <li>
para cada hoja el número (contado con repetición) de ejercicios completados
(habiendo obtenido una nota), el número de ejercicios inconclusos y el tiempo dedicado.
</li> </ul>
<p>
Se tiene en cuenta <span class="bold"> todos los ejercicios </span>, ya sea que el alumno
haya desactivado la puntuación o no, al contrario de lo que aparece en el reporte
de evaluaciones por calificaciones.
</p> <p>
Los diferentes gráficos dan una representación de los
<span class = "wims_emph"> períodos de trabajo </span>
sobre un conjunto de hojas, y en cada una de estas hojas
o, si sólo se selecciona una hoja,
sobre esta hoja y en cada uno de sus ejercicios.
En el caso de que un período de más de 14 días esté sin actividad, una banda
en gris con 7 graduaciones recoge las semanas inactivas.
</p>
Para cada fecha,
<ul> <li>
un palo vertical tiene como altura el número de ejercicios
completados (con notas);
</li> <li>
las cruces indican la posición de los ejercicios exitosos:
por ejemplo, una cruz en la ordenada 10 del palo significa que
la décima vez que se hizo el ejercicio fue exitoso
(puntuación> 9);
</li> <li>
una barra naranja que representa el número de ejercicios inconclusos.
</li> </ul>
</div>

<div class="box_content">
  <div class="title_box">
      <h2 class="wims_title">Temps de connexion</h2>
  </div>
  Il s'agit du temps de connexion dans la classe quelle que soit l'activité : regarder ses notes, le cahier de texte,\
      faire des exercices, travailler sur un document, etc... Contrairement aux données présentées dans les tableaux d'activités
      individuelles qui elles concernent uniquement le travail sur des exercices d'une feuille ou d'un examen.
<ul>
  <li>Les données sont mises à jour une fois par nuit lors de la maintenance du serveur.</li>
  <li>La plage de date démarre à la création de la classe (ou au plus un an avant le jour courant) et se termine la veille du jour courant.</li>
  !if $class_type=1 or $class_type=3
    <li>Dans un groupement ou un portail d'établissement, les statistiques d'activités concernent l'activité globale dans la structure
    (toutes classes confondues).</li>
  !endif
  !if $wims_user=supervisor
    <li>L'unité de temps qui permet de régler l'échelle de couleur est modifiable dans le panneau de configuration de la classe.</li>
    !if $wims_show_stat!=yes
      <li>Les statistiques de connexion ont été désactivées par l'administrateur du serveur.</li>
    !endif
  !endif
</ul>
</div>  
