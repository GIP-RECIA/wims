!set lang_exists=yes

<p>
Wanneer je met WIMS werkt, wordt je regelmatig verzocht een wiskundige formule in te typen.
</p><p>
Bij
!href module=H4/algebra/logaritme.nl&subject=11&taal=$lang&total_exos=3&usage=2 sommige modules
</a>&nbsp;kun je gebruik maken van een speciale wiskunde invoer java-applet [jove-inria].
</p>
Bij andere modules moet de wiskunde via het toetsenbord worden ingevoerd.<br/>
Wiskundige vergelijkingen worden op de normale Computer Algebra Systeem (CAS) manier ingevoerd:
zoals :
<ul>
  <li>
    <code>3*x+5</code> voor
    !insmath 3x+5
  </li><li>
    <code>sin(pi*x)</code> voor
    !insmath sin(pi*x)
  </li><li>
    <code>y^3+1</code> voor
    !insmath y^3+1
  </li><li>
    <code>(x+1)/(y-1)</code> voor
    !insmath {x+1 \over y-1}
  </li><li>etc...</li>
</ul>
<p>
Daarnaast beschikt WIMS over een syntax-checker, die veel gemaakte "fouten
en slordigheidjes" in wiskundige notaties kan corrigeren.<br/>
Bijvoorbeeld, <tt>3x+5</tt>
wordt intern gelezen als  <tt>3*x+5</tt>, <tt>sin x</tt> wordt gecorrigererd naar
<tt>sin(x)</tt>, etc.
We raden natuurlijk aan om gewoon "correcte" wiskunde in te voeren...
<p><p>
Hieronder staat een lijst van wiskundige functies en de schrijfwijze.
Deze functies worden door WIMS herkend wanneer ze in een zinvolle context staan.
(Sommige modules acepteren ook nog andere functies; raadpleeg de helppagina's van deze modules hiervoor.)
<p><p>
  !set x=<i class="wims_mathfont">x</i>
  !set y=<i class="wims_mathfont">y</i>
  U kunt $x vervangen door elke sub-uitdrukking in de volgende tabel.
<p>

!set table_th = Functie, Omschrijving, Hoe in te typen

!set table_descs=alom bekende constante\
basis van de natuurlijke logaritme\
absolute waarde van $x\
het teken van $x\
de vierkantswortel van $x\
integer het dichtst bij $x\
grootste integer\
kleinste integer\
exponentieel\
natuurlijke logaritme\
logaritme met grondgetal 10\
goniometrische sinus\
goniometrische cosinus\
goniometrische tangens\
goniometrische cotangens\
inverse goniometrische\
inverse goniometrische\
inverse goniometrische\
sinus hyperbolicus\
cosinus hyperbolicus\
tangens hyperbolicus\
inverse hyperbolische\
inverse hyperbolische\
inverse hyperbolische\
Grootste van $x en $y\
Kleinste van $x en $y\
Grootste gemene deler\
Least Common Multiple\

!read 1/math.phtml.common
