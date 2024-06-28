!if $wims_read_parm!=$empty
  !goto $wims_read_parm
!endif
$wims_read_parm
:type
<h2>Mogelijke huiswerkopdracht types</h2>
Er zijn drie verschillende types beschikbaar :
<ul>
  <li><b>$(name_type_list[1])</b>:
    Verdeel een huiswerkopdracht (bestand) onder de leerlingen.
    Vervolgens verdeel een uitgewerkte correctie.
  </li>
  <li><b>$(name_type_list[2])</b>:
!if $conf_nofile=yes
  <span style="color:grey">(gedeactiveerd op deze server)</span>
!endif
    Verdeel een huiswerkopdracht (bestand) onder de leerlingen.
    Vervolgens verdeel een uitgewerkte correctie.
    De leraar kan 
    <ul>
     <li>corrigeren en verspreiden van individueel gecorrigeerd huiswerk naar elke leerling</li>
     <li>verspreiden van een algemene correctie</li>
     <li>een handmatig cijfer voor de opdracht geven</li>
    </ul>
    Dit type vereist vaak veel opslagruimte op de server.
  </li>
  <li><b>$(name_type_list[3])</b>:
  Hiermee kunt u een verzameling responszones bouwen met tekst of applets (voorlopig alleen Geogebra).
  Elke deelnemer levert zijn uitgewerkte huiswerk in.
  De leraar kan 
     <ul>
      <li> het werk van elke deelnemer beoordelen</li>
      <li> verspreiden van een algemeen correctie model</li>
      <li> een handmatig cijfer voor de opdracht geven</li>
     </ul>
  </li>
</ul>
!exit

:sizelimitfile
<h2> Bestandsgrootte beperken </h2>
De totale grootte van de bestanden die de deelnemer kan uploaden is beperkt (in MB).
De maximale grootte vermenigvuldigd met het aantal deelnemers moet kleiner zijn als
het beschikbare klasquotum
<div class="wims_msg warning">
Waarschuwing: een leerling kan zelfs geen kleinere bestanden uploaden wanneer de totale capaciteit van de klas is bereikt.
</div>
Bijvoorbeeld: als je 30 MB hebt in een klas met 35 leerlingen
en je stelt de capaciteit per leerling in op 0,75 MB, dan kan de huiswerkopdracht geactiveerd worden
(aangezien je theoretisch 26,25 MB verbruikt). 
Echter, als je in de tussentijd zet bestanden neer in de klas of laat leerlingen oefeningen opnemen
of examens, de beschikbare ruimte kan afnemen en sommige studenten niet in staat zijn om hun huiswerk in te dienen. <br>
In het geval van huiswerk type 3 is dit van toepassing op alle bestandstypes.


:datedeadline
<h2> Datum waarop de deelnemer zijn huiswerk moet hebben ingeleverd. </h2>
<ul>
<li> Als het huiswerk van type <span class="wims_code_words"> $(name_type_list[2])</span> of 
<span class="wims_code_words"> $(name_type_list[3])</span> is,
wordt  de interface voor uploaden van bestanden geactiveerd en wordt de status <span class="wims_code_words"> Actief </span></li>
<li> Zodra deze datum is bereikts is, kan de docent de leerling bestanden downloaden voor inzage en correctie</li>
<li> Leerlingen hebben pas toegang tot hun gecorrigeerde exemplaar als de leraar deze heeft geupload</li>
</ul>
!exit

:datetimesoldate
<h2> Datum vanaf wanneer huiswerk correcties beschikbaar zullen zijn voor download door leerlingen. </h2>
<ul>
<li> De algemene oplossings bestanden kunnen op elk moment worden toegevoegd / gewijzigd / verwijderd. </li>
<li> Deelnemers kunnen na deze datum ook hun gecorrigeerde exemplaar downloaden zolang de status van het huiswerk actief blijft. </li>
<li> Wanneer de status is verlopen, kunnen leerlingen niets meer downloaden</li>
<li>in het geval van <span class="wims_code_words"> $(name_type_list[2]) </span> typen of
<span class="wims_code_words"> $(name_type_list[3]) </span> kunnen leerlingen zo snel mogelijk toegang tot algemene correctiebestanden krijgen, zelfs als niet alle kopieën zijn gecorrigeerd
</li>
</ul>
!exit

:scoring
<h2> Scoring </h2>
Het is mogelijk om voor elke leerling in de klas een handmatig cijfer toe te voegen.
<br>
Via de interface kunt u direct het cijfer van elke student invoeren tegelijk met het indienen van het gecorrigeerde huiswerk. <br>
Wanneer deze optie is geactiveerd, een kolom (met een algemene titel en een coëfficiënt 1) wordt automatisch toegevoegd aan de tabel met handmatige cijfer wanneer het huiswerk is geactiveerd.
<br>
Cette option n'est pas disponible dans un portail.
!exit

:typezone
<h2> Type zones </h2>
Een opdracht bestaat uit twee delen:
<ul>
<li> het constructiegedeelte van de opdracht (zichtbaar voor leerlingen)</li>
<li> het constructiegedeelte van de student. Dit deel is bedoeld voor het invoeren van het antwoord </li>
</ul>
Elk onderdeel is onderverdeeld in een aantal zones. Er zijn drie soorten
zone (zowel voor de correctie/uitleg als ook voor de leerling antwoorden):
<ul>
<li> <b> geogebra </b> Geeft een interactieve geogebra-applet weer. </li>
<li> <b> tekst </b> een tekst invoergebied. HTML-tags worden geaccepteerd.
Het is mogelijk om wiskundige formules te schrijven door ze tussen \(en) te plaatsen. <br>
\(\sqrt{2}) wordt bijvoorbeeld weergegeven
!insmath \sqrt{2}
.
</li>
<li> <b> bestand </b>
!if $conf_nofile = ja
  <span style="color:grey"> (uitgeschakeld op deze server) </span>
!endif 
als een file drop zone. U kunt meerdere bestanden en bestandstypen plaatsen.</li>
<li> <b>RandFile</b>
!if $conf_nofile = ja
  <span style="color:grey"> (uitgeschakeld op deze server) </span>
!endif 
als een file drop zone. U kunt meerdere bestanden en bestandstypen plaatsen, one of these files will be randomly picked and shown to the student.</li>
</ul>
!exit

:zonegeogebra
Le descriptif des champs à remplir pour ce type de zone :
<ul>
<li><b>Titre :</b> le titre de la zone. Si ce champ reste vide un titre automatique sera généré.</li>
<li><b>Description :</b> une description de la zone pouvant contenir des consignes
  spécifiques (il sera affiché avec le style css
  <span class="wims_code_words">freeworkdesczone</span>).</li>
<li><b>Option de paramétrage de l'applet :</b> cette zone permet de définir les options
  de paramétrages de l'applet (voir le site de geogebra pour plus de détails).
  Il faut écrire une option par ligne. Par exemple :
<pre>
showToolBar=true
customToolBar="0|40|||1|2|5@10"
width=800
height=500
number=1
</pre></li>
<li><b>Faire apparaître cette zone pour les élèves</b> (option disponible seulement
  dans la partie énoncé) : cette option permet de faire apparaître ou non cette zone
  dans la page d'énoncé pour l'élève (à combiner avec l'option suivante,
  elle permet de mettre à disposition des participants une zone géogébra avec un contenu).
  Si cette zone est affichée sur la page participant, elle ne sera pas modifiable
  par ces derniers.</li>
<li><b>Copier le contenu de la zone enseignante numéro</b> (option disponible
  seulement dans la partie réponse de l'élève) : cette option permet de précharger
  l'applet avec le contenu de l'un des applets geogebra de la zone enseignant
  (par exemple pour contenir une figure de départ).</li>
<li><b>Contenu de la zone</b> (seulement dans la partie énoncé) une fenêtre d'applet
  permet de réaliser la figure.</li>
</ul>
!exit

:zonetexte
Le descriptif des champs à remplir pour ce type de zone :
<ul>
<li><b>Titre :</b> le titre de la zone. Si ce champ reste vide un titre automatique sera généré.</li>
<li><b>Description :</b> une description de la zone pouvant contenir des
  consignes spécifiques (il sera affiché avec le style css
    <span class="wims_code_words">freeworkdesczone</span>).</li>
<li><b>Contenu de la zone</b> (seulement dans la partie énoncé) une zone de
  texte permet de saisir le texte de l'énoncé.</li>
</ul>
!exit

:zonefile
Le descriptif des champs à remplir pour ce type de zone :
<ul>
<li><b>Titre :</b> le titre de la zone. Si ce champ reste vide un titre automatique sera généré.</li>
<li><b>Description :</b> une description de la zone pouvant contenir
  des consignes spécifiques (il sera affiché avec le style css
  <span class="wims_code_words">freeworkdesczone</span>).</li>
  <li><b>Nombre maximum de fichiers </b>(seulement dans la partie réponse):
 permet de limiter le nombre de fichiers déposables par les participants.</li>
<li><b>Contenu de la zone</b> (seulement dans la partie énoncé):
  elle permet de déposer des fichiers pour l'énoncé
  (l'interface de dépôt se trouve en bas de page).</li>
</ul>
!exit

:zonerandfile
Le descriptif des champs à remplir pour ce type de zone :
<ul>
<li><b>Titre :</b> le titre de la zone. Si ce champ reste vide un titre automatique sera généré.</li>
<li><b>Description :</b> une description de la zone pouvant contenir
  des consignes spécifiques (il sera affiché avec le style css
  <span class="wims_code_words">freeworkdesczone</span>).</li>
<li><b>Contenu de la zone</b> (seulement dans la partie énoncé):
  elle permet de déposer des fichiers pour l'énoncé
  (l'interface de dépôt se trouve en bas de page).
  Only one of these file, chosen randomly, will be shown to the students.</li>
</ul>
!exit

:zonewimsexo
Le descriptif des champs à remplir pour ce type de zone :
<ul>
<li><b>Titre :</b> le titre de la zone. Si ce champ reste vide un titre automatique sera généré.</li>
<li><b>Description :</b> une description de la zone pouvant contenir des
  consignes spécifiques (il sera affiché avec le style css
    <span class="wims_code_words">freeworkdesczone</span>).</li>
<li><b>Contenu de la zone</b> un tableau présente la liste des exercices à traiter. Le rajout d'exercices s'effectue par la 
même méthode que pour les feuilles d'exercices (en utilisant le moteur de recherche de ressources).
</li></ul>
!exit

:allowtype
!! check adm/class/sheet/lang/help.phtml.nl and change accordingly
!exit