!set lang_exists=yes

<p>
Bent U een docent en wilt U een virtuele klas oprichten
!href session=$prefix_session&+module=adm/class/regclass gebruik dan deze link.
.<br/>
U kunt ook
!href session=$prefix_session&+module=adm/class/classes&type=example een voorbeeld klas
 bezoeken (een open demonstratieklas wordt niet beveiligd door een wachtwoord)
 om te zien hoe alles werkt.
</p><p>
Elke WIMS server mag een eigen beleid bepalen t.a.v. het oprichten van
virtuele klaslokalen.
<br/>
Sommige sites accepteren alles; iedereen mag een klas beginnen...
anderen vragen voor het server onderhoud een vergoeding of hebben een restrictief aanname beleid.
<br/>Vraag bij de systeembeheerder [site-manager] naar deze condities.
</p><p>
U moet een geldig email-adres opgeven bij het oprichten van een virtuele klas.
Nadat de verplichte informatie is ingevuld op het aanmeldings formulier, wordt
er een random toegangscode gegenereerd door de server.
Deze eenmalige code wordt naar het opgegeven emailadres gestuurd.
Vervolgens vult U deze code in op het aanmeldingsformulier. Zo niet wordt Uw aanvraag ongedaan gemaakt.
</p><p>
Het opgegeven emailadres wordt ook gebruikt als het supervisor-emailadres voor uw klas; leerlingen
zullen dit emailadres te zien krijgen bij het inloggen, of wanneer ze U een email
willen sturen.
</p><p>
Nadat Uw klas is aangemaakt, wordt U dus de "supervisor" van deze klas, en kunt U inloggen
om lesmateriaal,werkbladen,oefeningen,toetsen e.d. te maken.
</p>
Leerlingen zich kunnen aanmelden bij Uw klas, door gebruik te maken van een aanmeldings wachtwoord [<em>`klasse wachtwoord'</em>]
welke U vastlegt tijdens het aanmaken van de virtuele klas:
<ul>
 <li>U maakt een "open klas" door een leeg "klasse wachtwoord".
 Dus iedereen kan zich nu als leerling aanmelden bij Uw klas.<br/>
 Deze methode is niet aan te raden, omdat U de controle over zo'n klas kwijt bent.
 <br/>Op sommige WIMS servers is dit dan ook niet toegestaan, behalve voor demo-klassen
 opgezet bij de systeembeheerder zelf.
 <li>
 U neemt een geheim aanmeldings "klasse wachtwoord".
 In dit geval bent U dus de enige die leerlingen accounts kan aanmaken.<br/>
 Dit is voor de normale lessituatie in een virtuele klas <em>de best optie</em>.<br/>
 U bepaald door zelf uw leerlingen aan te melden hoeveel leerlingen
 zich in de klas bevinden.<br/>
 Handig is ook de mogelijkheid om met een spreadsheet uitdraai [bijvoorbeeld een leerlingen lijst in csv formaat]
 een komplete klas in &eacute;&eacute;n keer te "bevolken".
 <li>U bepaald een "klasse wachtwoord" en geeft dit aan Uw leerlingen,
 zodat ze zichzelf aan kunnnen melden.
</ul>
