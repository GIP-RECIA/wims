!set lang_exists=yes

wims_name_doch_transfer=$wims_name_doch_transfer<br/>
wims_name_doch_about=$wims_name_doch_about

<p>
Een virtuele klas is een ruimte (eigenlijk gewoon een directory structuur op een WIMS server) waar de leerling
onder begeleiding van een docent (ook wel genoemd supervisor,leraar) interactief
lesmateriaal kan bestuderen, werkbladen kan maken voor een cijfer of een proefwerk kan
maken.
</p><p>
Dit alles speelt zich af in het venster van een internet browser.
Afhankelijk van Uw netwerk, op het internet of op een lokaal intra-netwerk.
Voor sommige oefeningen/modules is javascript en/of java vereist.
Tegenwoordig wordt ook wel flash ingezet.
Dit kan voor problemen met Uw browser zorgen.
Neem in deze gevallen kontact op met uw systeembeheerder.
</p>
<p>
Wanneer een virtuele klas is
!href module=$module&chapter=$chapter&open=$open,$(chapter)_creat#creat opgericht
 door een docent, wordt deze automatisch de "supervisor" van deze klas, en kan nu lesmateriaal
 verwerken in de klas.
</p><p>
Het -interactieve- lesmateriaal kan van diverse oorsprong zijn, bijvoorbeeld
!href module=$module&chapter=1&open=$open,1_exo#exo de Createxo oefening
(in OEF ,het <b>O</b>nline <b>E</b>xercise <b>F</b>ormat) eventeel geheel
!href module=$module&chapter=4&open=$open,4_oef#oef zelfgemaakt
 om daarna in werkbladen en/of proefwerken te worden verwerkt.
</p><p>
WIMS kiest random uit het door U geselecteerde materiaal.
</p><p>
Een klas kan ook gebruik maken van een "discussie forum".
 Deze voorziening heeft ook de mogelijkheid tot het invoeren van correct getypsette wiskundige formules [TeX syntax]
 en heeft ook een zekere interactiviteit.
</p>
<p>
Planned for the future:
test sheets with sophisticated random exercise generation and work time
limitation will also be available. Software to analyze student performance
based on registered data on his/her work is under study.
</p>
