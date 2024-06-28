<div class="box_content">
  <div class="title_box">
      <h2 class="wims_title">Individuele activiteiten</h2>
  </div>
De tabel laat zien:
<ul>
<li>de datum van de laatst voltooide oefening</li>
<li> het aantal verschillende sessies</li>
<li>De tijd benodigd voor alle compleet afgemaakte werkbladen  </li>
<li>voor elk werkblad, the aantal afgeronde oefeningen voor een cijfer (inclusief herhalingen),het aantal onafgeronde oefenigen en de benodigde tijd hiervoor.</li>
</ul>
<p>
Alle oefeininge worden getoond en bewaard, met of zonder -door de leerling- geactiveerde score registratie.
</p><p>
De verschillende grafieken geven de  
<span class="wims_emph">gewerkte periodes</span> weer, voor een setje werkbladen
Als de periode meer is dan 2 weken zonder activiteit wordt een grijs gebied aangegeven.
</p>
Voor elke datum,
<ul><li>
een vertikale balk met als hoogte de afgeronde oefeningen (met een score).
</li><li>
de kruizen markeren de positie van de succesvol afgeronde oefeningen:
</li><li>
een oranje balk geeft een niet afgeronde oefening weer.
</li></ul>
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

