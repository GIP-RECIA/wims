!set lang_exists=yes

name_supervisor=administrator
name_teacher=Docenten accounts
name_addteacher=Nieuwe docent
name_modteacher=Docent eigenschappen
name_delteacher=Verwijder een docent
name_student=Studenten accounts
name_addstudent=Nieuwe student
name_modstudent=Student eigenschappen
name_delstudent=Verwijder een student
name_portal=portaal
name_level=leerniveau
name_class=klas
name_program=programma
name_course=cursus
name_icourse=interklas cursus
name_recsharable=Shared programs

name_dellevel0=Verwijder dit leerniveau
name_delclass0=Verwijder deze klas
name_delprogram0=Verwijder dit programe
name_delcourse0=Verwijder deze cursus
name_deltest0=Verwijder deze test zone
name_classproperties=Eigenschappen van deze klas
name_courseproperties=Eigenschappen van deze kursus
name_levelproperties=Eigenschappen van dit leerniveau
name_programproperties=Eigenschappen van dit programma
name_participant=Deelnemers
name_csv=Download spreadsheet : formaat
!!name_backstruct=Backup de gehele structuur
!set name_gestion=Toegangsbeleid
!set name_othergestion=Andere docent accounts
!set name_addgestion=Nieuw docent account aanmaken

this_level=dit leerniveau
this_class=deze klas
this_prog=dit programma
this_course=deze cursus
this_icourse=deze cursus

levellist=E1,E2,E3,E4,E5,E6,H1,H2,H3,H4,H5,H6,U1,U2,U3,U4,U5,G,R
levelnames=Lagere school leerjaar 1,\
	Lagere school leerjaar 2,\
	Lagere school leerjaar 3,\
	Lagere school leerjaar 4,\
	Lagere school leerjaar 5,\
	Lagere school leerjaar 6,\
	Middelbare school klas 1,\
	Middelbare school klas 2,\
	Middelbare school klas 3,\
	Middelbare school klas 4,\
	Middelbare school klas 5,\
	Middelbare school klas 6,\
	Universiteit jaargang 1,\
	Universiteit jaargang 2,\
	Universiteit jaargang 3,\
	Universiteit jaargang 4,\
	Universiteit jaargang 5,\
	Graduate study,\
	Research

!set name_hidepass=verberg wachtwoorden
!set name_showpass=toon wachtwoorden
!set name_IP=Toegestane IP adressen
!set name_nonavailable=Niet beschikbaar
!set name_code=Code
!set name_register=Aanmelden
!set name_supervisor2=Verantwoordelijk
!set name_Style=Styl van het programma
!set name_style=verplicht, vrijblijvend
!set name_installation=Automatische installatie van de cursussen\
 <br>in alle klassen van dit leerniveau
!set name_visit=Bezoek

!if $job=addcourse
   !set name_course1=Er is in deze klas geen programma waaraan cursussen kunnen worden toegevoegd.
   !set name_course2=Er is geen klas of programma waaraan deze cursus kan worden toegevoegd.
   !set name_course3=Hier staan de programma's in uw klas waaraan deze cursus kan worden toegevoegd.\
   Klik op de naam voor toevoegen.
   !set name_course4= Hier zijn de klassen waar de cursus aan toegevoegd kan worden. \
   Klik op de naam om de cursus te installeren
!endif

!if $job=class
  !set name_class1=Deze klas heeft nog geen cursussen
  !set name_class2=Aanwezige cursussen in deze klas
!endif

!if $job=first
  !set name_first1=Er zijn nog geen docenten
  !set name_first2=Er zijn nog geen studenten
  !set name_first3=Er zijn geen leerniveau's aangemaakt.
  !set name_first4=Beschikbare leerniveau's
!endif

!if $job=level
  !set name_level1=Dit leerniveau heeft nog geen klassen.
  !set name_level2= Dit leerniveau heeft geen lesprogramma's.
  !set name_level3=Lesprogramma's beschikbaar op dit leerniveau
  !set name_level4=Klassen op dit leerniveau
!endif

!if $job iswordof prog addtest deltest
 !set name_prog1=Test zone
 !set name_prog2=Dit lesprogramma heeft geen testzone
 !set name_prog3=Installeer een testzone
 !set name_prog4=Dit lesprograma heeft nog geen cursussen.
 !set name_prog5=Geinstalleerd cursussen in dit lesprogramma
 !set name_prog6=Deel materiaal met andere lesprogamma's (<b>exprimenteel</b>)
 !set name_prog7=Lesmateriaal uit dit lesprogramma wordt gedeeld met andere lesprogramma's.
 !set name_prog8=Dit programma deelt lesmateriaal uit programma
 !set name_prog9=Dit programma heeft geen interklas cusussen.
!endif

!if $job=backstruct
 !set name_backstruct1=Hier staat het backup bestand:
  !set name_backstruct2=Dit is een door komma's gescheiden databestand.Betekenis van de velden:\
  <p>type,code,titel,supervisor,klasse wachtwoord,supervisor wachtwoord,opties</p>

!endif

!set name_warning_share= Dit lesprogramma kan niet worden verwijderd omdat het gedeeld/geleend lesmateriaal bevat.
!if $job=addclass
!set form_titlename=Naam van de nieuwe klas.
!set form_titlename2=bij meerdere klassen in ��n keer aanmelden\
 de klasnamen dan door komma's scheiden
!exit
!endif

!if $job=addicourse
!set form_caption=Voeg een interklas cursus toe aan dit lesprogramma
!set form_titlename=Naam van de nieuwe cursus.
!set form_titlename2=bij meerdere cursussen in ��n keer toevoegen \
 de cursusnamen dan door komma's scheiden
!exit
!endif

!if $job=addprog
!set form_titlename=Naam van het nieuwe lesprogramma.
!set form_titlename2=bij meerdere lesprogramma's in ��n keer toevoegen \
 de lesprogramma namen dan door komma's scheiden
!exit
!endif
