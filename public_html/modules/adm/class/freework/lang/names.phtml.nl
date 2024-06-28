!set lang_exists=yes
wims_name_freework=Vrije opdracht
name_info=Informatie
name_content=Inhoud van de opdracht
name_parametrage=Instellingen
name_listwork=Lijst van nagekeken huiswerk
name_ltsolution=Gecorrigeerd huiswerk (met inleverdatum)
name_ltannotation=Correctie datum
name_solutiondeposit=Antwoorden
name_correctedwork=Nagekeken huiswerk
name_studentglo=Naam en voornaam
name_givedate=Huiswerk (en inleverdatum)
name_mega=M
name_studentname=!nosubst $lastname $firstname
!let name_shinfo=!nosubst $wims_name_title,\
Type,\
$wims_name_Status,\
Verklarende tekst,\
$wims_name_comment,\
Verloopdatum,\
Inleverdatum,\
Correctiedatum,\
Scores,\
Een leraar kan het huiswerk van de student altijd inzien,\
Possibility of an early hand in of homework

name_type_list=Publicatie,Publicatie met correctis,Online reactie
name_desc_title=!nosubst Beperkt tot $title_limit karakters
name_desc_type=Zodra de opdracht is gemaakt, kunt u het type niet meer wijzigen.
name_desc_desc=!nosubst Beperkt $desc_limit karakters ; HTML-tags toegestaan
name_desc_comment=Alleen voor leraren zichtbaar.
name_desc_scoring=Hiermee kunt u aan elke deelnemer handmatig een cijfer toewijzen
name_desc_seealltime=Als dit vakje is aangevinkt, kan de docent vóór de deadline het huiswerk overleggen (het is echter niet mogelijk om het te corrigeren)
name_desc_studentclose=After handing in homework students can no longer modify their work.
name_mkfreework=Aanmaken van huiswerk
name_tmkfreework=!nosubst Aanmaken van huiswerk $freework
name_managefreework=!nosubst Beheer van huiswerk $freework
name_datasubject=Bijhorende bestanden
name_datasolution=Bijhorende correctie bestanden
name_desc_deadline=Uiterste datum waarop studenten het onderwerp moeten inleveren
name_desc_soldate=Datum vanaf wanneer de antwoorden beschikbaar zijn om te downloaden
name_nodeposit=Je kunt helaas geen bestanden meer uploaden omdat de ingestelde limiet voor deze klas is bereikt. Neem kontact op met je docent.
name_depos=Nieuw bestand&nbsp;
name_limitestudent=Maximale upload bestandsgrootte voor leerlingen 
name_available=Gedownloade bestanden
name_erase=Verwijder bestanden
name_badstatut=Dit huiswerk staat het toevoegen van bestanden niet toe.
name_subject=Onderwerp
name_solution=Correctie
name_copie=Huiswerk
name_solutiondate=Het gecorrigeerde huiswerk kan worden gedownload op
name_copie_type1=Je huiswerk moet rechtstreeks naar de leraar worden gestuurd voor
name_copie_type2=Je kunt hieronder je huiswerk indienen of wijzigen tot
name_copie_type2bis=!nosubst Je kunt maximaal $[0.25*$sizelimitfile] Mb opsturen
name_usedstorage=!nosubst Je hebt $[rint($used*100)/100] Mb in gebruik
name_copie_toolate=Het is te laat om je opdracht te maken of te wijzigen. Het moest worden ingeleverd op
name_copie_toolate2=Het is te laat om je opdracht te maken of te wijzigen
name_desc_sizelimitfile=Instellingen voor de maximale schijfruimte voor elke leerling
name_fortheclass=voor leerlingen
name_oldwork=Opgestuurde bestanden
name_the=de
name_userperimemessage=De gecorrigeerde opdracht (als je deze hebt ingediend...) is niet langer beschikbaar om te downloaden
name_userperimemessage3=Je huiswerk is niet meer zichtbaar.
name_desc_listwork2=Studenten hebben vanaf deze datum toegang tot de oplossing publicatie van de correcties
name_desc_listwork3=Studenten kunnen hun opdrachten indienen.
name_desc_listwork31=U kunt ze aan het einde van de inleverdatum ophalen
name_desc_listwork32=You can view them, but you can only correct them after the dead line
name_desc_listwork4=!nosubst Leerlingen kunnen hun opdracht tot $date inleveren of wijzigen
name_desc_listwork5=!nosubst Correctie is niet meer mogelijk na $date
name_allworkcorrected=Alle huiswerk is nagekeken.
name_worknotcorrecteds=!nosubst Er zijn nog $notcorrected opdrachten na te kijken.
name_worknotcorrected=!nosubst Er is nog $notcorrected opdracht na te kijken.
name_nbcopies=!nosubst $nbcopies leerlingen leverden hun huiswerk in.
name_nbcopie=!nosubst $nbcopies leerling leverde het huiswerk in.
name_datafile=Bestanden
name_noscoring=Geen cijfers
name_usedscoring=Gebruik een handmatig cijfer
name_none=Geen
name_score=Cijfer
name_workof=Huiswerk van
name_remark=Remarque en cours de travail 
name_desc_remark=Remarques éventuelles à destination de l'élève (elles seront visibles immédiatement par l'élève).
name_finalremark=Waardering / opmerking 
name_desc_finalremark=Schrijf in het onderstaande venster de beoordeling en eventuele opmerkingen voor de leerling. Elle ne sera visible qu'après la date de rendu du devoir.
name_app=Waardering

name_zone=Zone
name_titlezone=Naam van de zone
name_desczone=Beschrijving
name_zonepara_teacher=Het antwoordgedeelte van de opdracht
name_zonepara_student=Het antwoordgedeelte met leerlingantwoorden
name_zonetype=Type
name_zonecontent=Inhoud van de zone
name_answerzone=Antwoordzone 
name_nbzone=Aantal zones
name_ztype=Zone types
name_listofztype=Geogebra,Tekst,Bestand,Exercice Interactif,RandFile
name_applet_geogebra=Configuratie-opties voor de GeoGebra applet, kopieer de inhoud van het tekstgebied van de opdracht,Toon dit gebied aan studenten
name_noone=Geen
name_noparameters=Geen specifieke instellingen

name_badstatutsubject=Het is niet langer mogelijk om bestanden aan de opdracht toe te voegen of te wijzigen.
name_badstatutsolution=Het is niet langer mogelijk om antwoord bestanden toe te voegen of te wijzigen.
name_warningseealltime=Je docent kan je opdracht op elk moment inzien
name_warning_fullclass=De opslagruimte is vol, het is niet meer mogelijk om een bestand toe te voegen. Neem contact op met je leraar!
name_warning_fullzone=De opslagruimte is vol.
name_noscore=geen cijfer
name_nomorecodownload=Je gecorrigeerde huiswerk is niet langer beschikbaar om te downloaden
name_textarealimit=!nosubst De tekst is beperkt tot $textezone_tmplimit karakters
name_nofile=Geen bestanden
name_depositzone=Upload zone&nbsp;
name_filedeposit=Bestanden uploaded
name_archivefreework=Archivering huiswerk
name_desc_filearchive=Dit bestand bevat de gegevens van de klasdeelnemers (kopieën en eventuele individuele correcties)
name_warning_archive =!nosubst U staat op het punt het huiswerk nr. $freework te archiveren. \
 Hiermee worden ook gegevens voor deze huiswerkopdracht van de server verwijderd (individuele kopieën / correcties). \
 Let op: deze bewerking is onomkeerbaar. \
 <ul> <li> de informatie op de server is definitief verwijderd </li>. \
 <li> het is niet mogelijk om het gedownloade archief te gebruiken om de informatie op de server terug te zetten. </li> </ul> \
 Weet je zeker dat je door wilt gaan?
name_archivatedfreework=Deze opdracht is gearchiveerd en niet meer beschikbaar op de server.
name_msgstudenthavefile= Als je een bestand opnieuw opstuurd wordt het vorige bestand verwijderd.
name_toomany_users=!nosubst Uw klas bevat te veel leerlingen (meer dan $max_userforgrades), dus het is niet mogelijk huiswerkopdrachten etc. toe te voegen
name_modulegrades=handmatige cijfers
name_preview=Iekst preview
name_outpreview=Preview

name_exochoice=Keuze uit oefeningen
name_nodeposit=Geen upload
name_wimsexo=Oefeningen
name_nofiledeposit=Het opsturen van kopi&euml;ren is niet ingeschakeld voor deze vrije opdracht
name_insert=Toevoegen van materiaal aan een module
name_parm=met instellingen
name_choose_exo=Het materiaal wordt ingevoegd als een nieuwe vrije opdracht.
name_choose=Kies de vrije opdracht
name_freeworkcheck=Controleer de vrije opdracht
name_end=!nosubst Het materiaal <span class="wims_mod_title">$title</span> is met succes toegevoegd aan $pickfreework
name_listexo=Lijst van oefeningen
name_listexo_desc=Oefeningen kunnen op dezelfde manier worden toegevoegd als voor werkbladen
name_num=Nee
name_description=Omschrijving 
name_action=Actie
name_typequatre_desc=Voor de aangeboden oefeningen feldt dat voor elke oefening het maximale cijfer behaalt dient te worden. Anders moet de gehele oefening worden herhaald.Geef een kopie van de oefening aan je docent of upload deze -mits de site dit toestaat- naar WIMS.
name_done=Klaar
name_teacher_noreplyzone=De kopie moet rechtstreeks aan de leraar worden gegeven.Upload naar de WIMS server is uitgeschakeld.
name_maxnumberoffile=Maximaal aantal bestanden
name_maxfilelimit=Het upload maximum is bereikt. Als je nog een bestand wilt uploaden moet je eerst een bestand verwijderen. .
name_nowork=Lo studente non ha ancora iniziato il compito.
name_correctedfile=Gecorrigeerde bestand(en)
name_textlimitsize=Maximaal aantal karakters
name_textlimitsizedesc=!nosubst Het aantal moet zijn tussen de &eacute;&eacute;n en $textezone_limit
name_minscoretosave=Minimale score
name_desc_minscoretosave=Dit is de minimale score die een leerling moet behalen voor een oefening zodat deze automatisch of handmatig kan worden bijgehouden).
name_autoreg=Automatische registratie
name_remarkinwork=Opmerkingen over het werk
name_ltremark=Correctie datum
name_seeco=Correctie bekijken
name_closeco=Final hand in
name_co_para=Correctie eisen
name_solutiongiven=Oplossing
name_feedbackgiven=Feedback
name_co_desc=Deze elementen worden pas toegevoegd na de correctieperiode.
name_detailact=Details van het werk
name_close_alertpre1=You choose to hand in your work. Your reply will be saved as shown further down. Read carefully your reply and then click on 
name_close_alertpre2=at the bottom of the page.
name_close_alertpost=You are handing in your work. Once you confirm, you will not be able to modify your work any longer.
name_close_confirm=Confirm handing in
name_close_closed=You handed in your work,you cannot modify your work any longer
name_close_info=If you think you are finished, you can save and hand in your work.
name_close_doclose=Hand in now
name_reopen=Reopen

!set name_showhidetitle=Affichage du devoir aux participants
!let name_allowtype=visible pour tous,cachée pour tous,visible pour postes (et/ou heures) suivants,visibilité réglée par une variable technique
!set name_desc_allowtechvar=Choix de la variable technique
!set name_desctableval=Table de filtre en fonction de la valeur de la variable technique
!set name_value=Valeur
!set name_filtre=Filtre
!set name_EMPTY=(aucune valeur)

!set name_notyet=This freework will be available starting from 
!set name_at=at
!set name_notavailable=This freework is not available.

!set wims_name_studscores=Participant's scores
