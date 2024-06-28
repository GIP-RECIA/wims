<div class="wims_content">

Welkom op de pagina waar
!if $wims_user!=supervisor
 interactieve oefeningen kunnen worden gemaakt.
!else
    interactieve oefeningen kunnen worden gemaakt voor klas <span class="wims_emph">$wims_classname</span> van <span class="wims_emph">$wims_institutionname</span>.
!endif

Createxo bevat verschillende hulpmiddelen voor
 het maken van oefeningen van het type
!href cmd=help&special_parm=oef OEF
.
<ol>
<li>Beginners mode voor het maken van:
   <ul><li>
      Open antwoord oefeningen
     !href cmd=reply&mode=normal&level=1 $name_normal
 ;</li><li>
    Verschillende demonstratie oefeningen die kunnen fungeren als
    !href cmd=reply&mode=model&level=1 $name_model
.</li>
   </ul>
<li> Expert mode voor het maken van oefeningen:
<ul><li>
!href cmd=reply&rawinp=yes&level=1 $name_raw
 voor het online schrijven 
 van oefeningen;
</li><li>
!href cmd=reply&mode=file&level=1 $name_file
 voor het opsturen van een broncode tekstbestand, 
 bijvoorbeeld geschreven op uw eigen ascii textbewerker.
</li>
</ul>
</ol>

Andere beschikbare hulpmiddelen:
<ul><li>
  !href module=adm/auth/confia2qcm Confia2qcm
, 
!href module=adm/auth/createqcm Createqcm
    voor het online aanmaken van verschillende meerkeuze oefeningen
<li>    
!href module=adm/modtool $wims_name_modtool 
    voor het online maken en organiseren van alle type OEF oefeningen en interactieve documenten.
    Hiervoor is een 'Modtool account' noodzakelijk.
    Het publiceren van uw interactieve materiaal verondersteld een Modtool account. 
<li>
!href module=adm/quicktool $wims_name_quicktool
 is een hulpmiddel voor het online aanmaken van interactieve oefeningen over taal en literatuur.
 Verschillende types OEF oefeningen kunnen worden gemaakt in begeleidde mode, zoals GAP,MCQ,SELECTWORD etc.
 Met quicktool kunnen oefeningen worden met speciale help paginas.
 Ook kan gebruik worden gemaakt van de audio databank van het <a target="wims_external" href="http://shtooka.net">Shtooka</a>
 Ook quicktool vereist een 'Modtool account'.

<li>     
!href module=adm/latex2wims $wims_name_latex2wims
    maakt mogelijk dat LaTeX documenten kunnen worden 
    omgezet naar interactieve <span class="tt">WIMS</span>  documenten.
    Ook dit hulpmiddel vereist een 'Modtool account'.
</li></ul>
</div>