!set lang_exists=yes

!if $wims_read_parm!=
  !goto $wims_read_parm
!endif

!if $job=list
!distribute lines Locatie (stad, land)\
Door het invullen gaat u ermee akkoord dat we aangegeven dat WIMS wordt gebruikt in uw stad (met geen andere referentie)\
Coordonn�es GPS\
into name_location,name_location_help,name_geoloc
  !set name_config_hideaverage=Cacher les moyennes g�n�rales aux participants
  !set name_config_mexolog=Autoriser les participants � signaler l'enregistrement d'exercices � l'enseignant
  !set name_config_utime=Longueur des intervalles de temps de connexion (en min)
  !set name_utime_help=Dur�e de chaque zone de temps dans les statistiques de temps de connexion des participants
!endif

!distribute items zones,studenten,oefeningen,documenten,docenten,werkbladen\
into wims_name_zones,wims_name_participants,wims_name_exercises,wims_name_docs,wims_name_teachers,\
name_sheets

!distribute item bericht van de dag,oefeningen,werkbladen,proefwerken,documenten,\
  studenten,pedagogische volgorde,huiswerkagenda,huiswerk,vragenlijsten,\
  rapportboekje,docenten account,discussieforum,Geavanceerd,Publiek document\
into name_motd,name_exo,name_sheet,name_exam,name_doc,\
  name_user,name_seq,name_livret,name_competence,name_vote,\
  name_cdt,name_sup,name_forum,name_forum_mesg,name_advanced,name_pdoc

!distribute item bericht van de dag,\
oefeningen,werkbladen,proefwerken,documenten,studenten\
into name_motds,name_exos,name_sheets,name_exams,name_docs,name_users

!if $job=grestrict
 !set name_allowedsites=Toegestane adressen
 !set name_excepted=Uitgezonderd
!endif
!if $job=connectlink
  !set title=Verbindingen
!endif
!if $job=arch
  !set title=Backup en Herstel
  !set name_title_save=Backup van de klas
  !set name_title_restore=Herstel van een klas via een backup
  !set name_intro1=Kies het backup archief voor de herstel procedure
  !set name_intro=Er kan een backup archief van uw klas worden aangemaakt, in het volgende formaat
  !set name_tosend=Om de klas te herstellen via een backup archief; geef de backup archief naam
  !set name_namefile=Geef de naam van het backup archief
  !set name_help=Er wordt gevraagd naar de specifiek te herstellen onderdelen van uw klas.

  !set name_deposit=!nosubst Het backup archief <span class="tt wims_fname">$wims_deposit</span> bevat de volgend onderdelen.\
 Geef aan welke items moeten worden gebruikt voor het herstel van uw klas.

  !set name_no_restore=De herstelprocedure wordt afgebroken: er is gedeeld materiaal van een andere klas aanwezig.\
 Herstel kan alleen worden uitgevoerd op het originele materiaal van af de uitlenende klas.
  !set name_check_dependency=Include dependencies
  !set name_desc_dependency=Warning: Your backup may not work if you don't include required dependencies.
  !set name_limit_exceed=Importation impossible car le nombre de ressources d�passe la capacit� maximale
  !set name_dependance=d�pendance d'une ressource d�passant la capacit� maximale

  !distribute lines toggle all\
Er is niets geselecteerd voor het herstel.\
Herstel alles behalve de klas configuratie en het supervisor account.\
<span class="wims_warning">Opgelet !</span> <span class="small">Zie opmerkingen hieronder.</span>\
Klas configuratie\
Supervisor account (inclusief uw wachtwoord)\
Studenten accounts\
Aanwezige accounts\
documenten\
Aanwezige documenten\
oefeningen\
Aanwezige oefeningen\
werkbladen\
Impliceerd herstel van alle oefeningen uit de klas\
Aanwezige werkbladen\
proefwerken\
Impliceerd herstel van alle werkbladen en oefeningen\
Aanwezige proefwerken\
forum berichten\
Aanwezige berichten\
Studenten activiteit registratie en server cijfers. Impliceerd herstel van studenten accounts.\
Handmatig ingevoerde cijfers\
Aanwezige cijfers\
de klasse agenda\
De aanwezige klasse agenda\
Rapportboekje\
Huidige rapportboekje\
Pedagogische werkvolgorde\
Impliceerd het herstel van werkbladen, oefeningen, proefwerken en documenten\
Aanwezige werkvolgorde\
Resource types\
Herstel methode\
Vervanging\
Verwijdert bestaande bronnen en vervangt deze door de geselecteerde bronnen\
Samenvoegen\
vervang al het aanwezige materiaal, behalve de studenten accounts en de klasse oefeningen; bij deze klasse oefeningen worden alles met een gelijke naam overschreven.\
Vervang en herstel het aangegeven materiaal\
Aanwezige bericht van de dag\
Fotos\
Aanwezige fotos\
tools\
bestaande tools\
Devoir libre\
Implique la restauration des exercices\
Devoirs libres existants\
 into name_toggle_all,name_noselect,name_all,name_danger,name_config,name_teacher,name_user,name_user1,name_doc,\
   name_doc1,name_exo,name_exo1,name_sheet,name_sheet0,name_sheet1,name_exam,name_exam0,name_exam1,name_forum,\
   name_forum1,name_activity,name_manual,name_manual1,name_cdt,name_cdt1,name_livret,name_livret1,name_seq,\
   name_seq0,name_seq1,name_res_type,name_method,name_replace,name_replace1,name_merge,name_merge1,\
   name_selectrestore,name_motd1,name_userphoto,name_userphoto1,name_tool,name_tool1,name_freework,name_freework0,name_freework1

!!set name_cnil_warning=ALLEEN VOOR FR : Nous vous rappelons que conform�ment aux d�clarations faites � la CNIL, \
  vous ne devez pas garder de donn�es relatives � vos �l�ves plus d'un an. Vous devrez alors d�truire\
  toutes les sauvegardes contenant les donn�es des �l�ves.\
  Faites une sauvegarde s�lective si vous d�sirez garder les ressources que vous\
  avez cr��es (feuilles, examens, documents) ou utilisez la possibilit� de duplication.

!distribute lines Backup archief herstel klas\
Herstel van studenten accounts (en alle geregistreerde studenten activiteit) gaat niet door : er is niet genoeg ruimte meer over.\
De klaseinddatum is veranderd na de herstelprocedure, omdat de upload datum \
 Deelnemer accounts zijn in gebruik in deze groep klassen (herstel gaat nioet door)\
 herstel is niet toegestaan ivm gedeelde bronnen\
 Backup en/of herstel is niet noodzakelijk op deze plek van het instituut\
 into name_restore1,name_restore2,name_restore3,name_restore4,name_forbiddenrestore,name_restore5

 !distribute items onherkenbaar is, te vroeg is, te laat is into ebad,eearly,elate

 !distribute lines Helaas, het maken van een backup archief is mislukt. Een interne fout.\
 Hier is het backup archief van uw klas\
 Klik hier voor het downloaden\
 Er kan ook een selectieve backup worden aangemaakt. \
 Klik op\
 Selectieve backup\
 Verander en bewaar het backup archief.\
 Probeer eens een ander formaat\
 into name_download1,name_download2,name_download3,name_download4,\
   name_selective1,name_selective2,name_selective3,name_try_other_format

 !set name_download5=Het backup archief is misschien te groot om naar deze server te sturen.\
 Om (meerdere) kleinere archieven aan te leggen kunt u gebruik maken van een selectieve backup.


 !goto commun
!endif

!if $job=clean
 !set title=Opschonen van een klas
 !set name_lines=Studenten activiteiten
 !set name_cdtdates=Werkboek.
 !set name_livretcomp=Raport boekje
 !set name_userphoto=leerling fotos
 !set name_empty=Deze klas is leeg!<br>\
 Er staat dus ook niets in dat opgeschoond kan worden.
 !set name_no_erase=Kan niet worden opgeschoond omdat er materiaal wordt gedeeld met een andere klas.

 !distribute lines Opschonen\
   Dit verwijdert ook de activiteiten registratie\
   Dit verwijdert ook de proefwerken\
   Maak een backup van de klas\
   Aanwezig materiaal in de klas\
 into name_cleanall,name_erase1,name_warning_exam,name_saveclass,name_ressource
  !set name_warning_clean=Let op:\
  er is geen undelete op dit systeem !
 !goto commun
!endif

!if $job=neighbor
 !set title=Buurklassen
 !set name_noclass=Er kunnen geen buurklassen worden gedefinieerd \
 omdat er er geen andere klasses zijn.
 !set name_toomany=Er zijn te veel klassen op deze server geinstalleerd. \
 Geef een zoekterm om naar een klas te zoeken.
 !set name_toomany2=Er zijn te veel klassen gevonden .\
 Geef een betere zoekterm in.

 !distribute lines Zoek naar een klas\
 Er zijn geen klassen gevonden. Probeer opnieuw.\
 Bekijk de demonstratie klassen op deze server\
 Het aanmaken van buurklassen geeft de mogelijkheid om gemeenschappelijk materiaal te gebruiken.\
 Klik op een klas om de procedure te starten.\
 Klassen met een zelfde taal\
 Klassen met een andere taal\
 Voorbeelden\
into name_research,name_noclass,name_exampleclass,name_help,name_changeneigh,\
  name_samelanguage,name_otherlanguage,name_example

 !distribute lines Buurklassen definieren\
   Delen van materiaal\
   door u\
   door een ander\
   Wederzijds gedeeld.\
   U deelt.\
   U leent.\
   Wederzijds goedkeuring.\
   Geeft U permissie om te lenen.\
   U heeft permissie om te lenen.\
   Stop de deling\
   Delen\
   Importeer alle studenten\
   Lesmateriaal\
   Importeer ander materiaal\
   Klassen die uw materiaal mogen lenen\
   Materiaal met toestemming\
   actief\
   Lijst van andere klassen\
   Gedeeld materiaal info\
   Demonstratie klassen op deze server\
   materiaal importeren\
   U kunt\
   van de klas\
   Accepteren\
   fotoos\
   Importation de ressources\
 into name_declaration,name_sharing,name_byyou,name_other,name_actif,name_share1,name_share2,\
 name_permit1,name_permit2,name_permit3,name_stopsharing,name_share,name_everybodyimport,name_teaching,\
 name_otherone,name_classsharing,name_ressourceallowed,name_active,name_listclass,name_infoshare,name_exampleclass,\
 name_import_resource,name_youcan,name_fromtheclass,name_click_ok,name_userphoto,name_importres

 !set name_nonewres=!nosubst Er is geen (nieuw) materiaal in de klas\
 <span class="wims_emph">$nei_description</span> dat gedeeld kan worden.

 !set name_newres=!nosubst De klas <span class="wims_emph">\
  $nei_description</span> geeft  <b>toestemming</b> voor het delen van

 !set name_chooseres=!nosubst Kies het materiaal uit klas <span class="wims_emph">\
 $nei_description</span>&nbsp; (<i>Om te selecteren, klik op <span class="wims_button disabled">$wims_name_tosave</span></i>)

 !set name_warning_authorized=!nosubst De klas <span class="wims_emph">$nei_description</span>\
 geeft toestemming bepaald materiaal te delen. U hebt geen toestemming dit zelfde materiaal verder uit te lenen.\
 Ga alleen door als zeker weet dat die niet van toepassing is.


 !distribute lines Buurklassen\
    heeft uw klas nog nioet geaccepteerd als buur\
    accepteerd u als buur voor\
    met \
    U deelt het onderstaande materiaal afkomstig uit klas\
    heeft geen uitleenbaar metariaal\
    heeft het onderstaande materiaal om uit te lenen\
    De zelfde naam in uw klas\
    Leeg\
    niet klaar voor gebruik\
    Vervang\
    Deze loginnaam bestaat al in uw klas\
    Verwijderde student bestaat in uw klas\
    Importeren uit klas\
    Met succes overgezet\
    Studenten accounts uit de buurklas\
    Controleer het resultaat\
 into name_neighbor_relation,name_text1,name_text2,name_with,name_sharealready,\
   name_no_ressource,name_importable,name_same_title,name_empty,name_inpreparation,\
   name_replace,name_existinglogin,name_part_erased,name_import,name_transfered,\
   name_neigh_account,name_verify

 !set name_inactif=!nosubst Het ge&iuml;mporteerde materiaal $(name_$itype) is op inactief gezet, \
 zodat u het naar uw eigen wensen kunt aanpassen.

 !set name_accept=!nosubst Accepteert u de klas <span class="wims_emph">$nei_description</span> als buurklas ?

 !if $job2=stopshare
  !set title=Stop de deling
  !set name_warning=Uw klas heeft een aciteve cijfer \
  registratie en de gedeelde bronnen zijn niet leeg.\
  Als u nu stopt met lenen kan hier later niet meer op worden teruggekomen.\
  <br>Definitef stoppen met delen ?

 !set name_stop=stoppen.
 !endif
 !if $job2=sharelist
  !set title= Informatie over gedeeld materiaal.
  !set name_sharelist=!nosubst Uw klas deelt $(name_$rec) afkomstig uit
  !distribute lines U deelt geen materiaal uit andere klassen.\
   U deelt materiaal uit andere klassen\
  into name_noresource,name_resource
  !endif

  !if $job2=addshare
    !set title=Delen van lesmateriaal met andere klassen
    !set name_class_share=De klas <span class="wims_emph">$nei_description</span>\
    heeft het onderstaande materiaal voor uitlening beschikbaar.
  !distribute lines beschikbaar\
    Uw klas deelt dit materiaal daadwerkelijk.\
    Dit materiaal kan niet worden gedeeld omdat dit materiaal uit een andere klas afkomstig is.\
    Opschonen van uw materiaal\
    mits mogelijk\
    Het supervisor account delen is niet verstandig ! \
  into name_available,name_actually_sharing,name_nosharing,name_cleanup,name_ifpossible,\
    name_dangerous

  !set name_warning1=Dit materiaal kan niet worden uitgeleend: omdat uw klas het materiaal leent uit een andere klas.\



  !set name_warning2=!nosubst U kunt dit materiaal niet delen om dat uw eigen $(name_$r) niet leeg zijn.\
  Voor dat met een deling kan worden begonnen moet u eerst
  !set name_warning_erase=!nosubst Dit verwijdert dus al uw bestaande $(name_$r)! \
  En zonder backup is dit definitef weg.

  !endif

  !distribute items ---,<span class="small">supervisor</span>,\
  <span class="small">student</span>,\
  <span class="small">iedereen</span>\
  into n_n0, n_n1, n_n2, n_n3
  !if $job2=import
    !set code1=Geen
    !set code2=$wims_name_yes maar anders
    !set code3=$wims_name_yes, actief en anders
  !endif
 !goto commun
!endif

!if $job=connect
 !set title=Verbinding met andere servers / platformen
 !set name_listserver=Lijst met bestaande server verbindingen

 !distribute lines Test de server verbinding\
   Test de netwerkverbinding met een klas\
   Voeg een netwerkverbinding met een klas toe\
   Onderhoud van de klas op een netwerkverbonden server\
   lokale klas, klas op een netwerkverbonden server\
   klas configuratie, lijst met studenten, gemiddelde cijfers, cijfer details, alles behalve klas configuratie\
   Synchroniseren\
   (met de andere klas) van\
   Klas op de netwerkverbonden server\
   Netwerkverbonden server\
   Onderhoud\
   Verwijder de klas op de verbonden server\
   De verbinding met de verbonden server werkt.\
   De verbinding is toegevoegd aan uw klas, maar helaas geeft de verbonden server een foutmelding\
   De andere server reageert niet. Rapporteer dit aan de\
   De verbinding met de verbonden server is geweigerd. Foutmelding\
   Controleer de andere klas \
   De verbinding werkt. Data ontvangen van de verbonden server\
   Voor het maken van een verbinding met bovenstaande server, specificeer \
   Identificeer de netwerk verbonden klas\
   Als de klas op de verbonden server leeg is, zal deze server een nieuwe klas aanmaken. De instellingen van die klas worden gebaseerd op deze klas\
   Voer veranderingen aan deze klas automatisch door aan de klas op de verbonden server\
   Sta de klas op de verbonden server toe deze klas te wijzigen\
   Deze klas heeft geen connecties met andere servers.\
   U hebt de volgende verbindingen gedeclareerd met andere servers.\
   Server\
   Op dit moment herkend deze WIMS server de volgende servers.\
   Acties bij deze verbinding.\
   Acties bij deze klas.\
 into wims_name_connecttest,wims_name_classtest,wims_name_addconnection,wims_name_connectmanage,name_prompt1,\
   name_prompt2,name_synchronize,name_withotherone,name_remoteclass,name_remoteserver,wims_name_Manage,\
   wims_name_destroy,name_working,name_error1,name_errornoreply,name_errorreject,name_check,name_data,\
   name_toconnect,name_identifier,name_help,name_automatically,name_allow,name_noconnection,name_declaration,\
   wims_name_server,name_listserver1,name_connexion_action,name_class_action

 !goto commun
!endif

!if $job=access
 !set title=Configuratie toegangsbeleid
 !goto commun
!endif

!if $job=grestrict
 !set title=Score restricties
 !goto commun
!endif

!if $job=present
 !set title=Configuratie klas opmaak
 !set name_helpcolor=The first color is for unfinished exercises
 !goto commun
!endif

!if $job=oefdefault
 !set title=Configuratie voor OEF modules<br>[Online Exercise Format]
 !distribute lines een serie oefeningen heeft\
 Moeilijkheidsgraad\
 Tijd limiet\
 seconden\
 Aantal items voor een meerkeuze vraag\
 Toon de uitgewerkte oplossing (mits aanwezig) ?\
 nooit,als de score niet maximaal is,altijd\
 Altijd het correcte antwoord tonen\
 Strafpunten voor foute antwoorden in meerkeuze vragen.\
 Toon het correcte antwoord.\
 Geef een hint (mits aanwezig).\
 into name_series,name_severity,name_chrono,name_secondes,name_qcm,\
 name_solution,name_prompt,name_prompt1,name_prompt2,name_prompt3,name_prompt4

 !set name_warning=!getdef name_remarkintro3 in oef/$lang/names.proc
 !goto commun
!endif

!if $job=security
 !set title=Beschikbare beveiligings instellingen
 !set name_see_activity2=Deze veranderingen mogen alleen van af uw adres worden doorgevoerd.\
 Zo niet controleer of uw supervisor wachtwoord is misbruikt.
 !set name_see_activity1=Bekijk de logfile van uw klas naar eventuele aanwijzingen.
 !distribute lines Configureer het toegangsbeleid\
  tot het score systeem van deze klas.\
  Andere beveiligings instellingen bij de \
  klas configuratie\
 into name_restriction1,name_restriction2,name_otherrestriction1,name_otherrestriction2
 !goto commun
!endif

!if $job=authtype
 !set title=External authentificatie
 !set name_intro_authtype=Kies de gewenste authentificatie en identificatie methode \
 en vul de bijhorende invulvelden in.
 !set name_method_list= authentificatie door wims, authentificatie via CAS, \
 authentificatie via CAS en identificatie door ldap,\
 authentificatie en identificatie door ldap,\
 authentificatie via CAS en identificatie via php,\
 authentificatie en identificatie via php
 !goto commun
!endif

!if $job=propagate
  !if $wims_supertype=2
   !set name_thisclass=van het portaal
   !set name_subclasses=subklas
  !else
   !set name_thisclass=van deze actuele zone
   !set name_subclasses=onafhankelijke zones
  !endif

 !distribute lines De configuratie is met succes geinstalleerd in  $name_subclasses\
 De volgende configuraties  van $name_thisclass kunnen worden geinstalleerd in alle $name_subclasses\
 into name_propagate_succes,name_propagate_choose

 !set name_warning=Opmerking: de configuratie instellingen \
 van $name_subclasses worden niet automatisch\
 bijgewerkt als de instellingen voor $name_thisclass worden veranderd.

!endif

!if $job=log
  !set name_warning_log=Hier is de logfile met onderhoudsactiviteiten van deze klas.\
  Aan de hand van dit bestand kan worden nagetrokken of het onderhoud wel door supervisor zelf is uitgevoerd.
!endif

!if $job=index
  !set title=!nosubst Actualiseer de index van $tit
  !set name_done=Klaar
  !set name_result=Resultaat

  !if $job2=structure
   !set tit=de zones
  !endif
  !if $job2=userlist
   !set tit=Studenten
  !endif
  !if $job2=teacherlist
   !set tit=Docenten
  !endif
  !if $job2=oef
   !set tit=Oefeningen
  !endif
  !if $job2=doc
    !set tit=Documenten
   !endif
!endif

!if $job iswordof list new auth or $job=
  !distribute line Naam van het instituut\
    Naam van de klas\
    Klas number\
    Opties \
    Modtool Account\
    Beveiliging\
    Hoogste score, number, anonymity \
    Aantal studenten limiet\
    Einddatum\
    Registratie van oefeningen\
    Registratie van toetsen\
    zichtbaar voor studenten\
    Andere configuraties\
    Persoonlijke instellingen\
    Configuratie onafhankelijke zones\
    Definieer buurklassen\
    verbinding met andere servers\
    Gebruik authentificatie\
    voor studenten met ldap\
    Actualiseer de indexen\
    waarvan verandering\
    Backup en herstel \
    Restricties mbt lesmateriaal\
    Andere restricties \
    voor welke scores zijn opgenomen\
    Selectieve opruiming\
    Configureer de\
    Mix\
    Opschorten scoreregistratie door studenten\
    Generieke naam voor de titel van OEF oefeningen\
    Deelnemers zien wanneer een docent is ingelogd\
    Extra velden voor  bij de aanmelding\
    Een eventuele verandering van ip-adres tijdens een examen is toegstaan\
    werkbladen, examens etc.\
    Laat docenten email zien\
 into name_name_institution,name_name_class,name_name_number,name_optionword,name_devaccount,name_lock_level,\
    name_bestscore,name_limit,name_expirationdate,name_register_exo,name_register_exam,\
    name_visible,name_apparence,name_pref,name_dependant_zone,name_neigh,name_link,name_useauth,name_ldap,name_index,\
    name_change,name_load,name_restriction1,name_restriction2,name_score,name_clean,\
    name_config,name_mix_auth,name_config_authscoresuspend,\
    name_config_exotitleform,name_config_supconnectshowed,name_regvars,\
    name_examscore_withoutip,name_param,name_sendmailteacher

 !set name_config_exotitleformoption=Geen,Naam van de oefening,Werkblad nummer,Naam van het werkblad en oefening,Naam van het werkblad en naam van de oefening in dit werkblad
 !set name_allowcloning=Kloneren toegestaan
 !set name_cloningpwd=Wachtwoord voor kloneren
!endif

:commun
!distribute lines Algemene configuratie\
Authentificatie\
Persoonlijke instellingen\
Toegangsbeleid\
OEF configuratie\
Buurklassen\
Security management\
Selectieve opschoning\
Actualiseer de index\
Netwerkverbonden servers\
Wachtwoorden\
Andere zones\
Uiterlijk\
Score instellingen\
Netwerkverbonden server adressen\
of\
Externe authentificatie en identificatie\
into wims_name_config_list,wims_name_config_auth,wims_name_config_pref,wims_name_config_restr,wims_name_config_oef,\
wims_name_config_neigh,wims_name_config_secure,wims_name_config_clean,wims_config_refresh,\
wims_name_config_otherserver,wims_name_config_passwd,wims_name_config_propagate,wims_name_config_present,\
wims_name_config_score,wims_name_config_ent,name_of,wims_name_external_auth

!let wims_name_exploresave=Restauration s�lective

!distribute lines Toegestane adressen\
Style sheet\
Logo van de klas\
Positie van het logo\
links boven, rechts boven\
Style thema (CSS) van de klas\
Iconen\
Leerniveau\
Toegangsbeleid voor registeren van cijfers\
Inschrijvings wachtwoord (klasse wachtwoord)\
Wachtwoord docent\
Configureer de opslag van toetsresultaten\
Links naar andere leerplatformen of webpagina's\
Pagina achtergrond kleur\
Menu achtergrond kleur\
Menu linkkleur\
Achtergrond plaatje\
download een css style bestand\
Cijfer kleurindicatie (van 0 tot 10) \
Achtergrondkleur van een knop\
Tekstkleur van een knop\
Helpknop achtergrond kleur\
Helpknop tekst kleur\
Verbindingslink\
Tekst kleur\
Kleuren voor presentatie van activiteiten\
Adressen van gekoppelde klassen:\
Default configuratie voor OEF type oefeningen\
Soort authentificatie\
Colors\
Teacher's email visible\
into name_secure,name_css,name_logo,name_position_logo,name_logo_side,name_theme,\
   name_theme_icon,name_level,name_security,name_password,name_supass,name_exolog,name_ent,\
   name_background_color,name_menu_color,name_refmenu_color,name_image,name_css_transfer,\
   name_colorscore,name_button_bgcolor,name_button_color,name_button_help_bgcolor,\
   name_button_help_color,name_connectlink,name_act_color,name_coloract,\
   name_connectlinkhelp,name_oefdefault,name_auth,name_colors,\
   name_sendmailteacher

!set name_content_style = U kunt een algemeen stylesheet definieren<br>(als <span class="tt wims_code_words">$name_css</span> op <span class="tt wims_code_words">klas</span> is gezet)&nbsp;:

!set name_content_style2=Kopieer hier een css-stylesheet

!distribute lines Informatie over links\
u kunt deze configuratie ook elders uitvoeren\
de configuratie kan ook op een andere plek worden uitgevoerd\
algemene instellingen voor het invoegen van oefeningen in een werkblad\
Toegang tot materiaal en cijfer registratie\
Relatie met andere wims-klassen of andere servers\
Met de onderstaande links kunt u enkele instellingen wijzigen.\
Backup en onderhoud van uw klas\
into name_newrem1,name_newrem2,name_seqrem,name_oefrem,\
  name_title_access,name_title_other,name_configrem,name_title_saveman
!exit
:arch

U hebt een backup archief van een andere klas opgestuurd.
Als er conflicten zijn,
wordt uw klas mogelijk onherstelbaar beschadigd.
 !href cmd=help&special_parm=dependencies Waarom&nbsp;?
 <br>
 !href cmd=reply&job=list Stop
 als u er niet zeker van bent van de gevolgen.
 (In elk geval bewaar een backup van de huidige situatie voor dat u verder gaat)
!exit

:arch_end
 <span class="wims_warning">BELANGRIJK</span>. <ul><li>
 De integriteit van de opgestuurde data wordt niet gecontroleerd.
 Een handmatige bijwerking van een backup archief
 wordt door het systeem niet toegestaan.

<li> Indien mogelijk vermijdt herstel van
<span class="wims_warning">klas configuratie</span> en
<span class="wims_warning">supervisor account</span>.
Fouten in deze bestanden
 maken uw klas stuurloos.
<li> U kunt een backup archief gebruiken voor
 het snel installeren van een nieuwe klas.
In dit geval vermijdt gebruik van scores en
cijferregistratie (server of handmatig)
Deze twee kunnen -ivm bewaking van de cijfers-
niet meer worden gewist uit een werkende klas.
</ul>
!exit

:clean
 <p>U kunt geen lesmateriaal verwijderen waar
 leerlingen op dit moment nog aan werken.
 </p><p>
 Bedenk de volgende zaken:
 </p><p>
 Ten eerste, stel een slimme leerling steelt het supervisor wachtwoord.
 wanneer deze leerling de gehele klas kan verwijderen, hebben
 de goede leerlingen daar toch behoorlijk veel last van (...)
 </p><p>
 Ten tweede, alle bronnen die tezamen de virtuele klas vormen, zijn uiteraard van
 elkaar afhankelijk, gedeeltelijk verwijderen
 verbreekt waarschijnlijk een hoop dwarsverbanden
 in de digitale werk/leer omgeving.
 !href cmd=help&special_parm=dependencies Voorbeelden.
 </p><p>
 In elk geval, wanneer U werkelijk deze klas wilt opschonen, kan beter
 de verloopdatum van de klas op "vandaag" zetten.
 Deze klas is dan morgen gewoon verdwenen.
 Of <a href="mailto:$wims_site_manager?subject=Verwijder mijn klas"</a>
 vraag de site-manager om je klas te verwijderen.
 </p>
 !exit

:clean2
<p><b>Opmerking</b>. </p>
<ul><li>Deze pagina is alleen beschikbaar tijdens het opzetten
van een digitale klas. Wanneer er leerlingen aan het werk zijn, is dit wissen niet meer mogelijk.
</li><li>
Gedeelde bronnen kunnen alleen van uit de oorspronkelijke klas worden gewist,
Deze klas moet dan wel eerst
!href cmd=reply&job=neighbor&job2=sharelist stop de deling
 van lesmateriaal voor dat er gewist kan worden.
</li></ul>
!exit

:connect_first_info
<p>De server / platform verbinding geeft een klas de mogelijkheid om rechtstreeks
met een andere WIMS server of een andere ELO te communiceren.<br>
De leerlingen kunnen zonder problemen door de klassen op beide servers navigeren.
</p><p>
In het bijzonder, kunt kan een klas worden "gespiegeld" op een andere WIMS server,
zodat er continuiteit kan onstaan in het aanbod van lesmateriaal.<br>
Lesmateriaal, studenten en de behaalde cijfers kunnen worden gesynchroniseerd.
</p>
!exit

:connect_first

Deze WIMS server heeft geen netwerkverbonden servers gedeclareerd.
Om deze mogelijkheid te gebruiken, schrijf naar de
<a href="mailto:$wims_site_manager?subject=server connection">sitemanager</a>
om een dergelijke voorziening te treffen.<br>
En deze andere server moet uw server wel erkennen.
De site manager kan hier leren hoe het <span class="tt wims_fname">$basedir/log/classes/.connections/myself</span> administratief geregeld moet worden)

!exit

:import2

Het te importeren werkblad bevat mogelijk oefeningen die alleen bestaan in de buurklas.
   <br>
Als deze oefeningen niet aanwezig zijn in uw klas, zal het geimporteerde werkblad niet naar behoren functioneren/
Kontroleer nauwkeurig of alle oefeningen uit de andere klas zijn gekopieerd naar uw eigen klas.

!exit
:import3
Proefwerken zijn gebaseerd op werkbladen.
Het importeren van proefwerken is alleen zinvol als alle werkbladen precies synchroon zijn met de andere klas.
<br>
Als dit niet het geval is zal het proefwerk niet kunnen functioneren.
!exit
:import4
U bent van plan een bestaande $(name_$itype) in uw eigen klas te vervangen door een geimporteerde versie.
Er is geen herstel mogelijk na deze operatie
!exit

:import5
Er kon geen student of deelnemer aan uw klas worden toegevoegd.
Mogelijk is uw klas of instituut vol en is er geen ruimte meer beschikbaar
!exit

:auth1
Deze configuratie stap is alleen bereikbaar vanaf een toegestaan veilig  adres.
<br>
Er zijn geen veilige adressen gedefinieerd voor uw klas.
We controleren nu uw identiteit door een code te sturen naar uw email adres.
Voer de toegestuurde code hieronder in.

!exit
:auth2

<b>Opmerking</b>.
Deze maatregel is noodzakelijk om te verhinderen dat het weklekken van een supervisor wachtwoord
grotere gevolgen heeft voor uw klas.
Het is veel betere een beveiligde verbinding [ip adres] te definieren voor deze configuratie stap.
!exit

:download
<b>Opmerking</b>.
Normaal zijn de opgeslagen oefeningen en proefwerken van studenten, forumberichten en documenten in een klas de grootste bestanden.
U kunt overwegen diverse kleinere  selectieve backup archieven aan te maken voor deze data.

!exit

:import_livret
Na importeren kan de oorspronkelijke situatie niet meer worden hersteld.
Links naar werkbladen worden niet geimporteerd.
!exit
