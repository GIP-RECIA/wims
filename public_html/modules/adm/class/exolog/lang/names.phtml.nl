!set lang_exists=yes

!set name_noexercise=Er zijn geen oefeningen om te registreren.
!set name_listexercise=!nosubst Oefeningen van werkblad $logsheet kunnen worden geregistreerd
!set name_noexercise2=Er zijn geen geregistreerde oefeningen door
!set name_click= !nosubst Hier zijn de geregistreerde oefeningen van $(names[1]) $(names[2]).\
Klik op de datum om ze te bekijken.

!distribute items Stap,Nummer \
into name_Step,name_number

!set name_source=broncode
!set name_sendmail=Bug?
!set name_bug=Als je denkt dat er een foutje in deze oefening zit, stuur dan een email \
<span class="wims_button disabled">$name_sendmail</span> en voeg dit bestand \
<span class="wims_button disabled">$name_source</span> toe.

!! TODO_lang
!set name_ssendmail=Prévenir l'enseignant de la classe ? (vous pouvez également saisir un message à destination de votre enseignant)
!set name_msg=!nosubst L'élève $ufirst $ulast a sauvegardé le $unow un exercice dans la classe $uclass de $ueta sous la référence $uref.
!set name_comment=Il a ajouté le commentaire suivant :
!set name_exolog=Enregistrer les détails d'un exercice
!set wims_name_SE_mod=Message pour l'élève
