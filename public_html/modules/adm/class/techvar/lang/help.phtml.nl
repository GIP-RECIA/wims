!if $wims_read_parm!=$empty
 !goto $wims_read_parm
!else
 Geen help-pagina aanwezig.
 !exit
!endif

:listvar
Met deze module kunnen technische variabelen worden gedeklareerd:
<ul>
 <li> aanmaken  van technische variabelen (maximaal $MAXtechvar) ;</li>
 <li> varanderen van de lijst met waarden voor deze variabelen ;</li>
 <li> inzien en veranderen van de technische variabelen voor elke deelnemer.</li>
</ul>
Deze variabelenn kunnen worden gebruikt om zaken voor een een groep studenten in een klas te regelen (bijvoorbeeld om de toegang tot werkbladen,toetsen etc te beperken)
<br>

Er zijn een tweetal types technische variabelen :
<ul>
 <li> Lokale variabelen : deze kan een docent aanmaken en veranderen (maixmumaal aantal $MAXtechvar).</li>
 <li> Globale variabelen : deze variabelen horen de hele school of instituut waar uw klas onderdeel van is. Deze variabelen zijn alleen veranderbaar door de supervisor van de school of instituut.Als docent kun u deze globale variabelen wel gebruiken (om te filteren etc)</li>
</ul>
<h3>
 De lokale technische variabele
</h3>
Gebruik het menu <span class="tt wims_code_words">$name_addvar</span>
voor het vastleggen van de naam van deze variabele en van zijn waarde.
(voor de naam zijn alleen klein geschreven letters toegestaan; hoofdletters worden automatisch omgezet.)
<h3>
Deklareren of modificeren van een lokale technische variabele voor een leerling
</h3>
Klik op de <span class="tt wims_code_words"> Lijst van deelnemers </span>
van de <span class = "tt wims_code_words"> Beheer van technische variabelen, </span>
klik dan op de naam van de student uit deze lijst
<p>
Het is ook mogelijk om de waarden  te bepalen voor alle deelnemers met behulp van een spreadsheet-bestand
(Voor toegestane bestandsformaten, zie de <span class="tt wims_code_words"> Link spreadsheet</span>)
</p>.

<h3>
Variable technique locale et individualisation d'une feuille de travail
</h3>
<p>Une variable technique locale peut-être utilisée pour individualiser une feuille de travail
en fonction de la valeur de la variable technique (voir le module de gestion des feuilles
de travail).
</p>
<p>
En cas d'utilisation de cette option, la modification de la valeur d'une variable technique
pour un élève va potentiellement entraîner le changement de la configuration des feuilles
de travail actives qu'elle pilote ainsi que des notes sur ces feuilles.
</p>
