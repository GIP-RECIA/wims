!if $wims_read_parm!=$empty
  !goto $wims_read_parm
!endif
!if $job=student
  !goto student
  !exit
!endif
!if $wims_read_parm=$empty
  !goto general
!endif

:student
Een proefwerk / examen bestaat uit WIMS oefeningen en is in tijd, ruimte, ip-adres en aantal bepaald door een docent.
<p>
In tegenstelling met werkbladen,</p>
<ul><li>
Het is niet mogelijk een opdracht/opgave uit een proefwerk te vernieuwen of het behalen van cijfers op te schorten
</li><li>
Een opdracht/opgave uit een proefwerk wordt getoond in een nieuw browser venster.
</li><li>
Een opdracht/opgave hoeft niet onmiddelijk te worden ingeleverd.
Er kan gerust een andere worden opgevraagd.
De inhoud van eenmaal opgevraagde opdrachten/opgaven veranderd echter niet.
</li></ul>
<p>
De docent kan bepalen hoevaak een proefwerk mag worden overgedaan.
De score voor een proefwerk is het hoogste cijfer van alle pogingen.
De tijdsduur voor een proefwerk is de maximale tijd dat aan het proefwerk mag worden gewerkt.
</p><p>
Een docent kan bepalen wanneer en vanwaar en door wie een proefwerk mag worden gemaakt.
</p><p>
Antwoorden op een opdracht moeten binnen de tijdslimiet worden opgestuurd naar de server.
Ingeleverde antwoorden buiten deze limiet worden niet meer meegeteld.
</p>
!if $tryremain>0 and $stries >1
  <p>
  Bijvoorbeeld :
  </p>
  !set h_min=$[rint(9*60+$stries*($sdure) - $sdure/2)]
  !set h_fin= $[rint($h_min/60)] h $[$h_min%60] min
  !set h_d2=$[rint($sdure - $sdure/3)]
  !set h_min2=$[min($sdure,$h_d2)]
  !set d_1=$[rint(min(10,$sdure/2))]
  !set h_min3=$[9*60+$d_1]
  !set h_3=$[rint($h_min3/60)] h $[$h_min3%60] min
  <pre>
  $name_exam2
  $name_exam6
  $name_exam9
  $name_exam7
  </pre>
  et que l'enseignant a ouvert l'enregistrement des notes entre 9h et $h_fin.
  Cela signifie que vous pourrez commencer l'examen � partir de 9h et il
  faudra avoir termin� les $stries sessions avant $h_fin :
  <ul><li>
  Si vous avez pris $d_1 min pour faire la 1�re session et que vous commencez
  votre seconde session � $h_3, vous disposerez de $sdure min pour faire la seconde session
  de l'examen.
  </li><li>
  Si vous commencez votre derni�re session d'examen $h_d2 min avant $h_fin, vous n'aurez que
  $h_min2 min pour faire cette derni�re session d'examen.
  </li></ul>
  <p>
  Pour commencer une autre session d'examen, cliquez sur
  <span class="tt wims_code_words">$wims_name_endexam</span>.
  Vous serez alors d�connect�. Il suffira de vous reconnecter pour recommencer.
  Vous pouvez voir le r�sultat des sessions pr�c�dentes
   en cliquant sur
  <span class="tt wims_code_words">$wims_name_myscore</span>.
  Une fois dans l'examen, il est conseill� de cliquer sur
  <span class="tt wims_code_words">$wims_name_refresh</span>
   pour que les notes s'affichent.
  </p>
!endif
!if $class_examscore_withoutip!=yes
  Si vous changez d'adresse IP en cours d'examen, les exercices que vous aurez effectu�s � partir d'une
  autre adresse IP que celle du d�marrage de la session seront enregistr�s mais les notes obtenues ne compteront
  pas dans le calcul de la note finale de l'examen.<br>
  Cependant, votre enseignant peut, � tout moment, d�cider de ne plus tenir compte des changements
  d'adresse IP. Dans ce cas, les scores seront recalcul�s r�troactivement (un d�lai de 24H est parfois n�cessaire
  pour que les nouveaux scores s'affichent correctement).
!endif
!if $wims_read_parm!=$empty or $job=student
  !exit
!endif

:general
<h2 id="general">Introduction</h2>

<p>
Een examen bestaat uit een reeks oefeningen uit de werkbladen
(actief of inactief).
</p><p>
Wanneer de leerling een examen begint, heeft hij een
beperkte tijd om alle examenoefeningen te doen
(<span class="wims_emph"> duur van een examensessie </span>).
Een leerling heeft niet de mogelijkheid om een oefening van het proefwerk te herhalen of te deactiveren og anderszins te be&iuml;nvloeden.
</p><p>
Een docent kan bepalen dat het gehele examen meerdere keren mag worden gemaakt.
&Eacute;&eacute;n proefwerk cijfer is het gewogen gemiddelde van alle opgenomen opdrachten.
Het eind cijfer voor een proefwerk is altijd het maximum van alle poginen.
</p><p>
Alle antwoorden en eindresultaten worden vastgelegd en zijn ter inzage voor docent en leerling.
</p><p>
Het is ook mogelijk om een examen aan te bieden in simulatiemode: leerlingen
mogen dan het examen proberen, maar de scores worden niet opgeslagen en toetsen worden daarom niet meegeteld.
</p><p>
Net als bij een papieren toets kan de docent de start- en einddatums instellen, de tijdsduur instellen ,de toegang tot het proefwerk beperken door
IP adres of door middel van 'technische variablen'.
</p><p>
Andere help pagina's beschrijven de verschillende mogelijkheden.
</p>
!if $wims_read_parm!=$empty
  !exit
!endif

:statut
<h2 id="statut">Statut d'un examen</h2>
Un examen peut avoir quatre statuts :
<span class="wims_emph">
!replace internal , by ,$ $ in $(wims_name_shstatus).
</span>
<p>
<span class="wims_emph">$(wims_name_shstatus[1]) :</span>
c'est le statut initial d'un examen. Dans ce statut, l'examen n'est pas
visible des �l�ves.
</p><p>
<span class="wims_emph">$(wims_name_shstatus[2]) :</span>
lorsqu'on clique sur
<span class="tt wims_code_words">$(wims_name_actionlist[1])</span>,
l'examen devient visible par les �l�ves (ils pourront travailler
sur les exercices de l'examen si aucun param�tre dans le champ
<span class="tt wims_code_words">$(name_shinfo[4])</span>
ne l'emp�che), son contenu
n'est plus modifiable except� le titre, le texte d'explication et
le champ
<span class="tt wims_code_words">$(name_shinfo[6])</span>
</p><p>
Du statut
<span class="tt wims_code_words">$(wims_name_shstatus[2])</span>,
la feuile d'examen peut passer au statut
<span class="tt wims_code_words">$(wims_name_shstatus[3])</span>
 en cliquant sur le bouton
 <span class="tt wims_code_words">$(wims_name_actionlist[2])</span>.
On ne peut pas revenir au statut
<span class="tt wims_code_words">$(wims_name_shstatus[1])</span>.
</p><p>
<span class="wims_emph">$(wims_name_shstatus[3]) :</span>
l'�l�ve voit l'examen, mais n'a acc�s qu'au titre des exercices,
il ne peut plus travailler dessus.
</p><p>
Une fois l'examen p�rim�, on peut le rendre invisible aux �l�ves en cliquant sur
<span class="tt wims_code_words">$(wims_name_actionlist[4])</span>,
mais aussi le remettre dans le statut
<span class="tt wims_code_words">$(wims_name_shstatus[2])</span>.
</p>
!if $wims_read_parm!=$empty
  !exit
!endif

:session

<h2 id="duration">Aantal sessies van het examen en duur van de sessies</h2>
<p>
Tijdens een examen heeft de deelnemer niet de mogelijkheid om een oefening van het examen
te herhalen of de registratie van cijfers te deactiveren.
De docent kan de gelegenheid geven om een examen meerdere keren te herhalen.
Dit aantal is het aantal geautoriseerde tests dat door de docent wordt ingesteld.
De duur van een examensessie is de tijd die de student heeft om het examen eenmaal te maken.
Wanneer de student aan het examen begint, start WIMS de stopwatch.
Elke keer dat de student een nieuwe examensessie start, begint de stopwatch vanaf nul.
Zodra de stopwatch de duur van de examensessie overschrijdt, kan de student niet meer aan deze examensessie werken.
De duur van een examensessie kan worden ingesteld tussen 2 minuten en 600 minuten.
Waarschuwing: op deze server wordt een sessie die langer dan 30 minuten inactief is, automatisch verwijderd.
Bijvoorbeeld : als het examen eem maximale duur heeft van 120 minuten (2 uur) en de leraar stelt de parameter
van een examensessie in op 90 min en het aantal examen pogingen op 3 (dit zijn de default waarden ),
en de student zijn eerste poging na 50 minuten afrondt, heeft hij nog 120 - 50 = 70 minuten en twee proberen het cijfer te verbeteren.
Als de tweede poging  opnieuw 50 minuten duurt, kan er slechts 20 minuten worden gewerkt aan de derde sessie.
Een examencijfer is het maximum cijfer van alle pogingen.
</p>
!if $wims_read_parm!=$empty
  !exit
!endif

:exammode
!! lang_TODO
!changeto lang/help.phtml.fr $wims_read_parm

!if $wims_read_parm!=$empty
  !exit
!endif

:allowtype
<h2 id="allowtype">Tuning the score registration</h2>
<p>
In the selective open mode, you can make time
restrictions for score registrations, by adding words <span class="tt wims_code_words">
&gt;yyyymmdd.hh:mm</span>
 (starting time) and/or
 <span class="tt wims_code_words">
&lt;yyyymmdd.hh:mm</span>
 (ending time). These must be in the
 SERVER's local time, and must be separated from other words by white spaces.
 <br>
 Cut times are used to let people take the exam in different sessions. A
 participant having worked on the exam before a cut time will have no access
 after the cut time.
 <br>
 Format of cut times: <span class="tt wims_code_words">yyyymmdd.hh:mm</span> (separate several cut times
 by white spaces).
</p>
!if $wims_read_parm!=$empty
  !exit
!endif


:cutt
<p>
Les <span class="wims_emph">heures de coupure</span>
permettent de faire passer l'examen dans
des s�ances diff�r�es. Un participant ayant commenc� l'examen avant une
heure de coupure ne peut pas travailler sur une nouvelle session d'examen
apr�s l'heure de coupure m�me s'il n'a pas utilis� tous les essais
autoris�s par l'enseignant.
</p><p>
Format des heures de coupure :
<span class="tt wims_code_words">aaaammjj.hh:mm</span>
(s�parez plusieurs heures de coupure par des espaces).
</p>

Exemple : un premier groupe A de la classe passe l'examen
entre 9h et 10h le 10/02/2015 et un autre groupe B de la m�me classe de 10h
� 11h le m�me jour.
<ul><li>
Mettez <span class="tt">20150210.10:00</span> dans le champ
<span class="tt wims_code_words">$name_shinfo_cutt</span>
</li><li>
Mettez dans le champ
<span class="tt wims_code_words">$(name_shinfo[6])</span> :
$wims_name_from <span class="tt wims_code_words">20150210</span> $wims_name_at <span class="tt wims_code_words">9:00</span> $wims_name_to <span class="tt wims_code_words">20150210</span> $wims_name_at <span class="tt wims_code_words">11:00</span>.
</li></ul>
Dans ce cas, le nombre et le titre des diff�rents exercices de l'examen
sont visibles par tous les �l�ves de la classe � partir de 9h, un �l�ve qui
clique sur un exercice de l'examen entre 9h et 10h ne pourra pas ouvrir
une nouvelle session d'examen apr�s 10h.

!if $wims_read_parm!=$empty
  !exit
!endif

:variable
<p id="variable">
Afin d'individualiser les restrictions d'acc�s, il est possible de mettre
le nom d'une <span class="wims_emph">variable technique</span> dans
le champ <span class="tt wims_code_words">$(name_shinfo[6]). </span>
Cette variable doit alors �tre d�finie pour chaque participant selon les
r�gles pr�c�dentes soit manuellement dans les propri�t�s du compte d'un
participant ou par liaison tableur (variable technique). Si la
restriction est un choix du participant (inscription selon certaines
dates par exemple), il est possible de cr�er et utiliser un
questionnaire en mode guid� (voir l'aide correspondante).
</p>

!if $wims_read_parm!=$empty
  !exit
!endif

:contenu

<h2 id="contenu">Contenu d'un exercice d'examen</h2>
<p>
This exercise can be (randomly) taken from a list of existing exercises in
  worksheets. Please mark the worksheet exercises in the list, which
  you want to be candidate of this exam exercise.
</p><p>
Apr�s avoir cliqu� sur le lien <span class="tt wims_code_words">$wims_name_addexo</span>
vous voyez appara�tre une liste d'exercices ; d�placez dans le cadre de droite,
ceux qui constitueront cet exercice d'examen, puis cliquez sur le bouton
<span class="tt wims_code_words">Enregistrer.</span>
</p><p>
<span class="wims_emph">Titre</span> : le titre que l'on met � un exercice sera visible par les �l�ves lorsque l'examen
est dans le statut
<span class="wims_emph">$(wims_name_shstatus[2])</span>
ou
<span class="wims_emph">$(wims_name_shstatus[3]). </span>
Par d�faut, le titre d'un exercice est <span class="wims_emph">Ex.</span>
</p><p>
<span class="wims_emph">Poids</span> : la note d'une session d'examen est une moyenne
pond�r�e par les poids d�finis pour chaque s�rie d'exercices de l'examen.
Par d�faut, le poids est 1.
</p><p>
Vous pouvez aussi utiliser le lien
<span class="tt wims_code_words">$wims_name_addsexo</span>
pour mettre tous les exercices d'une feuille (chaque exercice de la feuille
 sera alors un exercice de l'examen).
</p><p>
Vous avez la possibilit� de modifier le contenu de l'examen tant que celui-ci a
 le statut
<span class="wims_emph"> $(wims_name_shstatus[1]).</span></p>
<strong>Remarque. </strong> Dans un examen, un exercice fonctionnera de la m�me fa�on que dans la feuille d'o� il est issu � l'exception des param�trages concernant :
<ul><li>
l'affichage des aides  (les boutons <span class="wims_button_help disabled inline">Aide</span>
et <span class="wims_button_help disabled inline">Indication</span>  apparaissent comme des
liens non cliquables dans un examen) ;
</li><li>
l'affichage de la bonne r�ponse, des feedbacks et de la solution (il faut avoir s�lectionn� le choix
<span class="tt wims_code_words">jamais</span> pour qu'ils ne s'affichent pas) ;
</li><li>
le nombre maximal d'essais comptabilis�s et le nombre d'essais avec la m�me
version de l'exercice (ces 2 param�trages ne sont pas pris en compte dans un examen ;
de plus, m�me si certaines variables sont les m�mes dans plusieurs exercices d'une s�rie
ordonn�e d'exercices, leurs valeurs pourront changer d'un exercice � l'autre).
</li>
</ul>


!if $wims_read_parm!=$empty
  !exit
!endif

:dependency
<h2 id="score_dependency">Score dependencies</h2>
<p>Score dependencies refers to a certain number of points (or percentages) that must be obtained before
the student is allowed to move on to the next exercise.
For example, <span class="tt wims_code_words">1:50,2:30,3+4+5:60</span>
 means that the participant must have 50% of the points required on exercise 1, 30% on exercise 2,
 and an average of 60% on exercises 3,4,5.
</p>
!if $wims_read_parm!=$empty
  !exit
!endif

:options
<h2 id="options">Options</h2>
<p>
At this moment just a single option is available.
</p>
<ul>
 <li><em>autogen</em> means that the exercise is automatically generated
 even if the user does not click on it. Therefore, he/she can consult the registered
 exercise even when the session is closed. Not recommended except for
 manually scored exercises.
</li></ul>

!if $wims_read_parm!=$empty
  !exit
!endif

:globalparam
<h2 id="globalparam">Autres param�trages possibles</h2>
D'autres param�tres sont configurables pour tous les examens d'une classe en allant dans la page de <span class=text_icon SE_config>Config/Maintenance</span> :
<ul><li>
Par d�faut, si le num�ro IP d'un �l�ve change pendant une session d'examen, la note obtenue �
 cette session d'examen n'est pas prise en compte. Dans ce cas, la note obtenue � cette session
 d'examen sera calcul�e � partir des scores des exercices faits avant le changement d'IP
 et non � la fin de la session de l'examen.
<span class="wims_emph">Tenir compte du changement �ventuel d'IP lors d'un examen</span>
a la valeur <span class="tt wims_code_words">oui</span>. Vous devez la mettre sur
la valeur <span class="tt wims_code_words">non</span> si vous ne d�sirez pas tenir
compte du changement d'IP (modifiable dans
<span class=text_icon SE_config_list>Configuration globale</span>).
</li><li>
Par d�faut, un �l�ve peut aller voir les enregistrements de ses sessions d'examen :
<span class="wims_emph">visible par les �l�ves</span> a la valeur
<span class="tt wims_code_words">oui</span> (modifiable dans
<span class="text_icon config_list">Configuration globale)</span>.
</li><li>Il est possible d'emp�cher les �l�ves d'acc�der � certaines ressources de la classe
comme les outils, les documents ... (voir la rubrique <span class="text_icon config_restr"> Restriction d'acc�s</span>).
</li></ul>
<strong>Remarque.</strong>
Le nombre de sessions d'examens qui peuvent �tre conserv�es en m�me temps est limit� � $wims_examlog_limit
(les enregistrements les plus anciens sont effac�s quand ce nombre est d�pass�).

!if $wims_read_parm!=$empty
  !exit
!endif


