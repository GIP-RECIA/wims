!!!!WARNING If you have to put "into" in the translation, write into$  ...

!if $wims_name_home!=$empty
  !exit
!endif

!set lang_exists=yes

!! punctuation rules
!set wims_punct_colon=:

!! **** Default Names ***
!distribute items Nieuwe vrije opdracht,Vrije opdrachten,Vrije opdracht,vrije opdracht,vrije opdrachten \
  into wims_name_add_freework,wims_name_Freeworks,wims_name_Freework,wims_name_freework,wims_name_freeworks

!distribute items Zoeken,\
Werk,Terug naar het werk,\
WIMS hoofdpagina,Intro/Configuratie,Help,Over deze module,Over WIMS,\
Introductie,Sluiten,\
Sluit dit venster,Terug,Startpagina,\
huidige,\
Site manager,Schrijver van deze pagina,Schrijvers van deze pagina,\
Vertaald door,Exit,\
WIMS Help,Referenties,\
Message board,Forum,\
Werkblad,Hulpmiddelen,Hulpmiddel,\
kopieer naar Modtool,\
Printen,\
Importeren in klas,\
Printbare Versie,\
Nog een keer,\
Opslaan,\
Verversen,\
Bewaren,\
ja ,\
nee ,\
Downloaden,\
Versturen,\
Start,\
Details,\
details van het proefwerk,\
Laat zien,\
Bewerken,\
Attentie,\
Gefeliciteerd,\
of,\
Uitleg,\
Oefening,\
Werkbladen,Werkbladen,\
Account,\
Inloggen,\
Cijfer,\
Mijn cijfers,\
Examen,Examens,\
Browse,\
Terug naar het menu,\
Eind datum,\
Fout,\
Volgende serie,Vorige serie,\
Voorbeeld,\
Stem,Stemmen,\
Hulp nodig?,\
Bravo!,\
CAS uitloggen,\
Met dank aan,\
Nieuwste,\
Geef het antwoord,\
Leerling management,\
Terug naar de module,\
Legenda,\
Kloon werkblad,\
Kloon proefwerk,\
Duplicate freework,\
Manage technische variabelen,\
Oude technische variabelen,\
Globale resultaten,\
Serie,\
Woordenlijst,Woordenlijsten,\
Mijn aktiviteiten,\
Meld een bug of andere fout,\
Opsturen,\
Hint,\
laat meer zien,\
laatste keer,\
Suggestion de travail \
 into wims_name_search,\
   wims_name_work,wims_name_resume,\
   wims_name_home,wims_name_intro,wims_name_help,wims_name_about,wims_name_aboutw,\
   wims_name_titleintro,wims_name_Close,\
   wims_name_back,wims_name_back2,wims_name_top_page,\
   wims_name_current,\
   wims_name_manager,wims_name_author,wims_name_authors,\
   wims_name_translatedby,wims_name_exit,\
   wims_name_whelp,wims_name_reference,wims_name_forum,wims_name_forums,\
   wims_name_sheet,wims_name_tools,wims_name_Tool,\
   wims_name_modify,wims_name_print,wims_name_import,\
   wims_name_printable,wims_name_renew,wims_name_testgo,\
   wims_name_refresh,wims_name_tosave,\
   wims_name_yes,wims_name_no,wims_name_download,wims_name_send,wims_name_start,wims_name_detail,wims_name_examdetail,\
   wims_name_Show,wims_name_Edit,wims_name_warning,wims_name_Congratulations,wims_name_or,\
   wims_name_Explanations,wims_name_Exercise,wims_name_Sheet,wims_name_Sheets,wims_name_account,wims_name_Enter,\
   wims_name_Score1,wims_name_myscore,wims_name_Examen,wims_name_Examens,wims_name_browse,wims_name_menuback,\
   wims_name_expiration,wims_name_Error,wims_name_nextseries,wims_name_previousseries,\
   wims_name_Example,wims_name_Vote,wims_name_Votes,wims_name_feedbackexo,wims_name_feedbackplus,\
   wims_name_cas_logout,wims_name_credits,wims_name_mod_new,wims_name_answer,wims_name_usermanage,\
   wims_name_moduback,wims_name_legend,wims_name_duplicatesheet,wims_name_duplicateexam,wims_name_duplicatefw,wims_name_techvar,wims_name_oldvar,\
   wims_name_Evaluation,wims_name_Serie,wims_name_Glossary,wims_name_Glossaries,wims_name_myactivity,wims_name_sendbug,wims_name_submit\
   wims_name_Hint,wims_name_seemore,wims_name_lastconnect,wims_name_swork

!! Legal notice names
!distribute items Legal Notice,Algemene voorwaarden, Privacy beleid,\
Privacy beleid (alhier),\
  into wims_name_legal,wims_name_cgu,wims_name_privacy,wims_name_local_privacy

!! **** Menuprof Names ***
!distribute items Klassen, Zoeken,\
Aanmaken, Voorbeelden,\
Oefeningen, Help,\
FAQ, Help documenten,\
Informatie,\
Andere methoden,\
Site,\
  into wims_name_Classes, wims_name_Searching,\
    wims_name_Creation, wims_name_Samples,\
    wims_name_Exercices, wims_name_Aid,\
    wims_name_faq, wims_name_dochelp,\
    wims_name_Infos, wims_name_othermethods,\
    wims_name_Site

!! **** Permalink Names ***
!distribute items deze module, deze oefening,\
Installeer,op uw site,\
Verberg deze opties,\
Permanente link, embed,\
knip &amp; plak, deze link, deze code, of, in een email,\
voor, enkel,\
deze configuratie,\
  into wims_name_this_module, wims_name_this_exercice,\
  wims_name_display,wims_name_on_your_site,\
  wims_name_mask_this,\
  wims_name_permalink,wims_name_embeddable,\
  wims_name_copy_and_paste,wims_name_the_link,wims_name_the_code,wims_name_or,wims_name_in_a_mail,\
  wims_name_for,wims_name_only,\
  wims_name_this_config

!set wims_name_Share =delen
!set wims_name_to_embed_it =opnemen
!set wims_name_permalink_desc =Gebruik &eacute;&eacute;n van deze links voor email of bookmark naar de oefening.
!set wims_name_hide=Verbergen
!set wims_name_showall=Tonen

!! the following sentences can be changed according to language if needed
!set wims_name_display1=!nosubst $wims_name_this_module $wims_name_Share
!set wims_name_display2=!nosubst $wims_name_copy_and_paste $wims_name_the_link $wims_name_on_your_site $wims_name_or $wims_name_in_a_mail
!set wims_name_display3=!nosubst $wims_name_copy_and_paste $wims_name_the_code $wims_name_on_your_site
!set wims_name_permalink1=!nosubst $wims_name_permalink $wims_name_for $wims_name_this_module

!! **** Module About Names ***
!distribute items Naam,\
Info over iconen,\
Module Informatie,\
Informatie over deze oefening,\
Adres,\
Link voor bookmark,\
Omschrijving,\
Versie,\
Vereiste WIMS versie,\
Taal,\
Schrijver,\
Administrator,\
Vertaler,\
Algemeen,\
Dit is een module van,\
WWW Interactive Multipurpose Server,\
Copyright,\
Zoektermen,\
Emailadres vertaler,\
Emailadres auteur,\
Emailadres maintainer,\
Onderwerp,\
Soort,\
Niveau(s),\
Scorings mechanisme,\
oefening / ontspanning,\
Hulp software vereist,\
Servertijd,\
Datamodule,\
Ontwikkeld op WIMS,\
Publicatie centrum,\
Download locatie,\
Syntax,\
Uitleg,\
Indexatie,\
Instellingen,\
Instelling,\
WIMS wordt uitgegeven onder een <a href="COPYING">GNU GPL</a> Licentie.\
  into wims_name_name,\
    wims_name_iconabout,\
    wims_name_module_infos,\
    wims_name_exo_infos,\
    wims_name_Address,\
    wims_name_Link_for_bookmark,\
    wims_name_Description,\
    wims_name_Version,\
    wims_name_Required_WIMS_version,\
    wims_name_Language,\
    wims_name_Author,\
    wims_name_Maintainer,\
    wims_name_Translator,\
    wims_name_General,\
    wims_name_This_is_a_module,\
    wims_name_WIMS_subtitle,\
    wims_name_Copyright,wims_name_Keywords,\
    wims_name_tr_email,wims_name_auth_email,wims_name_maint_email,\
    wims_name_Domain,wims_name_Type,wims_name_Levels,\
    wims_name_Scoring,wims_name_Scoringhelp,\
    wims_name_require,wims_name_server_time,wims_name_datamodule,\
    wims_name_devwims,wims_name_publish_center,wims_name_download_center,\
    wims_name_Syntax,wims_name_Meaning,wims_name_Indexation,\
    wims_name_pref,wims_name_setup,name_wims_licence
!! Titles of menus
!distribute items Activiteiten,Configuratie,\
   Hulpmiddelen,Externe hyperlinks,\
   Navigatie,Persoonlijke info\
into wims_name_classactivity,wims_name_configuration,\
  wims_name_classtools,wims_name_otherclasses,\
   wims_name_navigation,wims_name_myinfo

!! **** Class Relative Names ***
!if $wims_class!=$empty
 !distribute items Homepagina van je klas,Toevoegen aan werkblad,Voeg hulp toe aan werkblad,\
 Schrijf naar je docent,Uitloggen,\
 De antwoorden zijn reeds verwerkt en de cijfers berekend,\
 Je hebt het behalen van cijfers opgeschort,\
 Open cijfer registratie,Sluit cijfer registratie,\
 U bent docent van deze klas,\
 Bewaar resultaten van deze oefening,\
 Werkblad startpagina,\
 Lesmateriaal in werkvolgorde,\
 Gezien,\
 Details van ingeleverde oefeningen,\
 Voeg alle oefeningen toe aan het werkblad,\
 Zo zien studenten deze pagina,\
 Toevoegen aan een woordenlijst,\
 Kontroleer woordenlijst,\
 Woordenlijst toevoegen,\
 Positie\
 Cette session d'examen sera automatiquement fermée le\
 into wims_name_class_home,wims_name_add,wims_name_addh,\
  wims_name_wsup,wims_name_visitor,\
  wims_name_scoreclose,\
  wims_name_scoresuspend,\
  wims_name_scorereopen,wims_name_scoreclose2,\
  wims_name_syou,\
  wims_name_exolog,\
  wims_name_sheetmanagement,\
  wims_name_add_sequence,\
  wims_name_readen,\
  wims_name_save_ex,wims_name_addallexo,\
  wims_name_participantview,\
  wims_name_addglossary,wims_name_glossarycheck,wims_name_newglose,\
  wims_name_Position,\
  wims_name_exam_ending

!!!set wims_name_score=!nosubst Je hebt voor deze opdracht $[$wims_homeref_got] punten gehaald uit maximaal\
  !!$[$wims_homeref_req] punten. <br>Gemiddelde score $[$wims_homeref_mean]/10.
 !set wims_name_thsheet=No,Titel,Vereist,Weging,Punten verkregen,%,Kwaliteit,Moeilijkheidsgraad,Cijfer,\
 &nbsp;Hoogste scores&nbsp;,&nbsp;Aantal pogingen&nbsp;,&nbsp;Laatste resultaat&nbsp;,&nbsp;Verkregen&nbsp;,Tries,Unfinished
 !set wims_name_you=jij bent <b>$wims_firstname $wims_lastname</b> en hoort bij
 !if _exam isin $session
  !distribute items Andere opgaven uit deze overhoring,\
  resterende tijd voor deze overhoring&nbsp;:,\
  Dit proefwerk wordt automatisch afgesloten op:,\
  zo gauw deze pagina is geladen\
  into wims_name_back,wims_name_examremain,wims_name_exam_ending,wims_name_whenloaded
!endif
 !if _check isin $session
  !let wims_page_name=Pagina's
 !endif
 !default wims_name_sequence=Werkvolgorde
 !set wims_name_sequences=werkvolgorde

 !set wims_name_exceeded=Uw klas is groter dan de ingestelde limiet op deze server.<br>\
 Klasse management is hierdoor niet meer bereikbaar.\
 We adviseren de website manager te vragen de limiet voor deze klas te verhogen.

  !set wims_name_reaching_limit=De grootte van deze klas nadert de ingestelde limiet.\
 Bij overschrijding wordt het klasse management geblokkeerd !

  !set wims_name_chseries=!nosubst Sla de veranderingen aan serie oefeningen $(special_parm4[2]) werkblad $(special_parm4[1]) op
!endif

!! exit this file when in userscore export function to avoid a 'variable_name_buffer_overflow' error.
!if $module=adm/class/userscore and $job=csv
  !exit
!endif

!if $wims_user!= and $wims_class!= and $exotrymax!=$empty
  !distribute lines opgave\
  Dit is opgave nummer \
  De cijfers tellen niet meer mee.\
  Het aantal opgaves in deze serie is \
  De cijfers voor deze opgave tellen mee, omdat je de cijferregistratie hebt aan staan. \
  De cijfers voor deze opgave tellen niet mee, omdat je de cijferregistratie hebt opgeschort. \
  into wims_name_try,wims_name_maxexotry0,wims_name_maxexotry1,wims_name_maxexotry2,\
  wims_name_maxexotry_warning1, wims_name_maxexotry_warning2
!endif

!!!if adm/class isin $module or adm/manage isin $module
 !distribute line Docenten \
  Studenten \
  Demonstratie klassen\
  Inloggen voor docenten\
  Inloggen voor studenten\
  Inloggen\
  Wachtwoord vergeten\
  lagere school\
  middelbare school\
  universiteit\
  klassenlijst\
  Lijst met klassen en/of instituten\
  Individuele klassen\
  Groep klassen\
  Instituut\
  Verwijderde studenten\
van\
tot\
IP\
bij\
Andere url\
  into wims_name_n_supervisor,wims_name_n_participant,wims_name_n_example,\
    wims_name_n_authsupervisor,wims_name_n_authparticipant,wims_name_connexion,\
    wims_name_n_forgetpwd,wims_name_n_E,wims_name_n_H,wims_name_n_U,\
    wims_name_classlist,wims_name_portal_list,\
    wims_name_create_class,wims_name_create_superclass,wims_name_create_portal,wims_name_recover,\
    wims_name_from,wims_name_to,wims_name_IP,wims_name_at,wims_name_otherurl
!!!endif

!set wims_name_corrected_date=Please note: this date was prior to the class creation date and has been corrected.

!if adm/new isin $module
  !distribute line Nieuwe modules\
  Verbeterde modules\
  Laatste systeem veranderingen\
  RSS nieuwe modules\
  RSS verbeterde modules\
  New features\
  into wims_name_mod_new,wims_name_mod_modif,wims_name_mod_sys,\
    wims_name_rss_new,wims_name_rss_modif,wims_name_mod_resume
!endif

  !distribute line Oprichten van een klas\
  into wims_name_classcreate

!if adm/modtool isin $module or adm/createxo isin $module or $wims_user!=$empty or $module!=
  !distribute line Test de module\
   Document manager\
   Inhoud module\
   Andere bestanden\
   Eigenschappen\
   Opslaan\
   Verschillen\
   Publiceren\
   Nieuwe module\
   Lijst van modules\
   Bestanden\
   Backup van de module\
   Eigenschappen van account\
   Script tester\
   OEF Documentatie \
   Documentatie\
   Script bibiliotheek\
   Mogelijke antwoord modellen\
   Doc technisch\
   Terug naar de bestanden lijst\
   Bewerken het bestand\
   Veranderen\
   Terug\
   Down\
   Wissen \
   Actie\
   Gebruikt Java.\
   Datum\
   Toevoegen\
   Verwijderen\
   Broncode\
   Uitloggen\
 into wims_name_test,wims_name_docgestion,wims_name_modcontent,wims_name_otherfiles,\
wims_name_properties,wims_name_modsave,wims_name_checkdiff,wims_name_publish,wims_name_createnew,\
wims_name_modlist,wims_name_binfile,wims_name_restore,\
wims_name_account_property,\
wims_name_scripttest,wims_name_docoef,wims_name_docu,wims_name_docslib,wims_name_docanswer,wims_name_doctec,\
wims_name_back3,wims_name_edfile,wims_name_change,wims_name_up,wims_name_down,wims_name_erase,wims_name_action,\
wims_name_nojava,wims_name_date,wims_name_add0,wims_name_delete,wims_name_source,\
wims_name_visitor

!distribute line Terug naar Createxo\
   Lijst met voorbeelden\
   Uitgewerkte voorbeelden\
into wims_name_backcreatexo,wims_name_modellist,wims_name_model

!distribute line Test de oefening\
Terug naar confia2qcm\
Terug naar createqcm\
Verander de broncode\
Bewaar deze testmodule\
Bewaar in uw klas\
Bewaar als een nieuwe oefening\
Stuur een bestand (plaatje, geluid, ...)\
Vervang de bestaande\
Verwijder de oefening\
  into wims_name_testexo,wims_name_backconfia2qcm,wims_name_backcreateqcm,wims_name_exomodify,\
wims_name_putmodtool,wims_name_putclass,wims_name_newversion,\
wims_name_downloadbinary,wims_name_replace,wims_name_exoerase

!endif

!distribute line Nieuw document\
Nieuw werkblad\
Nieuwe proefwerk\
Nieuwe klas\
Nieuwe enquete\
Mijn enquetes\
Nieuwe oefening\
Oefeningen van deze klas\
Werkblad oefeningen\
Volgende oefening\
Vorige oefening\
  into wims_name_add_doc,wims_name_add_sheet,wims_name_add_exam,wims_name_add_class,wims_name_add_vote,wims_name_myvote,\
wims_name_add_exo,wims_name_classexo,wims_name_sheet_exos,wims_name_next,wims_name_prev

!distribute items niet doorgaan,ongedaan maken,klaar,gefeliciteerd,klaar \
  into wims_name_exo_untry,wims_name_exo_undone,wims_name_exo_done,wims_name_exo_congratulation,wims_name_exo_tried

!!! for documents...

!distribute item WIMS,Klas,Docs,Up,\
Vorige,Volgende,Hist.,Vernieuwen,\
Interactieve versie,Printbare versie,\
Terug naar doc,Help,Info,\
Bestand opsturen,\
Terug naar de bestanden lijst,\
Hoofdpagina van dit document,\
Verplaatsen,\
Vorige hoofdstuk,\
Volgende hoofdstuk,\
Hoofdstuk,\
  into wims_name_doch_wims,wims_name_doch_class,wims_name_doch_docs,wims_name_doch_up,\
  wims_name_doch_prev,wims_name_doch_next,wims_name_doch_hist,wims_name_doch_reload,\
  wims_name_doch_interactive,wims_name_doch_printable,\
  wims_name_doch_back,wims_name_doch_help,wims_name_doch_about,\
  wims_name_doch_upload,wims_name_doch_filelist,wims_name_doch_main,wims_name_doch_transfer,\
  wims_name_doch_prev_chapt,wims_name_doch_next_chapt,wims_name_doch_Chapter

!! for sequence and document

!distribute line Document\
Document\
Onzichtbaar,Zichtbaar\
Titel\
Reorganiseren\
Toevoegen aan klas\
Maak een nieuw document\
Bewerk een document\
Status\
Toevoegen\
Nog niet klaar voor gebruik, Actief, Verlopen, Verlopen&amp;Onzichtbaar\
niet lezen &amp; schrijven,alleen lezen,lezen en schrijven\
Nummer\
Aantal oefeningen\
 into wims_name_doc,wims_name_Docs,wims_name_status,wims_name_title,wims_name_reorder,wims_name_adddoc,\
wims_name_createdoc,wims_name_doctry,wims_name_Status,wims_name_Insert,wims_name_shstatus,\
wims_name_Docstatus,wims_name_number,wims_name_cnt_exo

 !distribute line Een datum toegvoegen\
   Een bestand toevoegen\
   Bewerk de ToDo lijst\
   Configureren\
   Annuleren\
   Agenda\
  into wims_name_adddate,wims_name_addfile,wims_name_addtodo,wims_name_config,wims_name_giveup,\
  wims_name_cdt

!set wims_name_supervisor=administrator
!set wims_name_Supervisor=Administrator
!set wims_name_namestudent=Student
!set wims_name_nameteacher=Docent
!set wims_name_teacher=Docenten accounts
!set wims_name_addteacher=Nieuwe docent
!set wims_name_addparticipant=Voeg een deelnemer toe
!set wims_name_modteacher=Docent eigenschappen
!set wims_name_delteacher=Verwijder een docent
!set wims_name_student=Studenten account
!set wims_name_addstudent=Nieuwe student
!set wims_name_modstudent=Studenten informatie
!set wims_name_delstudent=Verwijder een student
!set wims_name_delstudent1=Verwijder een deelnemer
!set wims_name_group=Instituut
!set wims_name_portal=Instituut
!set wims_name_level=Leerniveau
!set wims_name_class=Klas
!set wims_name_program=Programma
!set wims_name_course=Cursus
!set wims_name_icourse=Interklas cursus
!set wims_name_backstruct=Backup van de gehele structuur
!set wims_name_tchat=Chatroom
!set wims_name_tchatclose=Chatroom sluiten
!set wims_name_open=openen
!set wims_name_close=sluiten

!if config isin $module or $module=home or $module=adm/class/userscore or $module=adm/class/livret
 !distribute line $wims_name_config\
 Hoofdpagina klassen onderhoud\
 Instituut administratie\
Management\
into wims_name_configb,wims_name_config,wims_name_struct,wims_name_manage
!endif

!set wims_name_save=Backup en herstel
!set wims_name_backgateway=Beheer van

!distribute line Een cursus toevoegen\
Een interklas cursus toevoegen\
Een klas toevoegen\
Een programma toevoegen\
Een studieniveau toevoegen\
Inloggen beheerder \
Verander van zone\
into wims_name_addcourse,wims_name_addicourse,wims_name_addclass,wims_name_addprog,wims_name_addlevel,\
wims_name_login,wims_name_chzone,wims_name_addcsvclass

!distribute line Statistisch overzicht van de activiteiten\
Globale activiteiten\
Verander de moeilijkheidsgraad\
Handmatig ingevoerde cijfers\
Spreadsheet data\
Activiteiten\
Klassen toevoegen (csv)\
into wims_name_class_stat,wims_name_activity,wims_name_formula,wims_name_grades,\
wims_name_csv,wims_name_activity1

!if adm/class isin $module or reguser isin $module or $wims_class!=$empty
!distribute line Lijst van alle studenten \
Lijst van alle docenten\
Cijfers\
Beeindig deze proefwerksessie\
Details van het werk\
Schors deze student\
Ruwe gegevens\
Verander het wachtwoord\
Verwerkte data\
Overzicht vaardigheden \
Volgende\
Vorige\
Filters\
Technische variabele toevoegen\
 into wims_name_part_list,wims_name_teacherlist,wims_name_scores,wims_name_partexamclose,wims_name_workdetail,\
wims_name_delprep,wims_name_rawdata,wims_name_passwd,wims_name_getraw,wims_name_livret,\
 wims_name_next_participant,wims_name_prev_participant,wims_name_filter,\
 wims_name_livret1,wims_name_add_techvar
!endif

!if adm/manage isin $module
  !distribute line Ander onderhoud\
  into wims_name_sitegestion
!endif

!if $wims_user=supervisor
  !distribute line Terug naar de supervisor pagina\
  into wims_name_backteacher
  !set wims_name_attribut=Icon
  !set wims_name_attribut_help=Geef een pictogram weer voor de oefening (optioneel)
!endif

!distribute lines Modtool\
   Createxo\
   Quicktool\
   Latex2wims\
   Imageclick\
   Andere hulpmiddelen\
   into wims_name_modtool,wims_name_createxo,wims_name_quicktool,wims_name_latex2wims,\
    wims_name_coordclick,wims_name_othertools

!distribute line activeer de html-editor\
deactiveer de html-editor\
Let op: veranderingen worden niet opgeslagen als deze optie tijdens het schrijven wordt veranderd\
into wims_name_active, wims_name_desactive,wims_name_speck_warning

!distribute items Achternaam,Voornaam,Wachtwoord,email,Loginnaam,Herhaal het wachtwoord,Opmerkingen\
into wims_name_lastname, wims_name_firstname,wims_name_Password,wims_name_email,\
wims_name_Login,wims_name_repeat_pass,wims_name_comment

!distribute line Foto album\
Verstuur email\
into wims_name_photoboard,wims_name_sendmail

!distribute items Docent,Administrator,Student\
into wims_name_nameteacher,wims_name_Supervisor,wims_name_namestudent

!!if $module isitemof home,adm/class/sheet,adm/class/exam,adm/class/sequence,adm/class/freework
  !set wims_name_actionlist=Activeren,Verlopen,Deactiveren,Verbergen,Tonen,$wims_name_erase,Archief
!!endif

!if $module isitemof adm/class/sheet,adm/class/exam
 !set wims_name_end=einde
 !set wims_name_moveafter=Verplaats naar...
!endif
!if $module=adm/class/usermanage
  !set wims_name_regmanage=Toegangsbeheer
!endif
!set wims_name_cloneclass =Kloneer een bestaande klas
!set wims_name_clonethisclass  =Clone this class
!set SU_partconnected     =Deze deelnemer is op dit moment ingelogd
!set wims_name_SE_config =Configuratie&amp;Onderhoud

!! Site links
!set wims_name_mirror = mirror websites
!set wims_name_ref = Bezoekers
!set wims_name_stat = Serverstatistieken

!! ending session warnings
!set swarn_dialog_title1=Sessie timeout Info
!set swarn_dialog_title2=U bent uitgelogd

!set swarn_dialog_common=Deze sessie was te lang inaktief.
!set swarn_dialog_1=Bij inaktiviteit wordt deze sessie be&euml;indigd in
!set swarn_dialog_2=Deze sessie is be&euml;indigd. Opnieuw inloggen om door te gaan.
!set swarn_dialog_button=Inloggen

!! name for freework type=3
!if $wims_class!=$empty and $wims_fwnumber!=$empty
!! be careful each line is a different msg
  !set wims_name_freework_intro=!nosubst Vous avez obtenu une note suffisante. L'exercice a été automatiquement enregistré. Vous pouvez maintenant passer à la phase de rédaction de cet exercice ou à un autre exercice du devoir\
Vous devez obtenir une note minimale de $absscore à l'exercice avant de rédiger sur feuille les détails de votre résolution.\
Vous avez obtenu une note suffisante pour valider cet exercice. Vous pouvez :\
Sélectionner cet exercice pour passer à la phase de rédaction. Attention, vous ne pourrez plus en changer ensuite.\
Attention, il faudra à nouveau avoir une note minimale de $absscore.\
Vous n'avez pas résolu cet exercice correctement, il vous faut recommencer.

  !set wims_name_exorenew=Renouveler l'exercice
  !set wims_name_freework_selexo=Sélectionner l'exercice
  !set wims_name_bc2fw=Retour au devoir libre
!endif
!set wims_name_addfw=Insérer dans un devoir libre

!if adm/class/activity isin $module
  !set wims_name_workingtime=Temps de connexion
!endif

!set wims_name_noteacherclass=Vous n'êtes pas connecté en tant qu'enseignant de cette classe mais en tant que gestionnaire du groupement/portail.\
Vous n'êtes pas connecté en tant qu'enseignant de cette classe mais en tant qu'administrateur du serveur.
