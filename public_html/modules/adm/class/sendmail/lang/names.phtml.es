!set lang_exists=yes

name_title1=Env�o de correos electr�nicos agrupados
name_title2=Message
name_noemail2=Los participantes siguientes no tienen correo electr�nico

name_participant1=Se envi� el mensaje a
name_participant2=El mensaje no pudo enviarse a los participantes siguientes
name_intro=El env�o grupal le permite enviar un correo electr�nico a todos o algunos de los participantes

name_expert0=Si desean seleccionar a algunos participantes, se proponen varios m�todos. \
Marcar el m�todo deseado.

name_expert1=Con ayuda de las flechas, haga pasar en la ventana de derecha los participantes \
a los cuales desean que el correo electr�nico se env�e.

name_expert2=Introduzca la lista de los logins separados por comas.

name_expert3=Filtrar a los participantes seg�n los valores de las variables t�cnicas. \

name_warning=Va a enviar el mensaje siguiente.

!distribute items Destinatarios,Remitente,Destinatarios profesores,Lista de logins, Mensaje,Asunto,Selecci�n,\
Todos los participantes\
into name_recipients,name_sender,name_recip_teacher,name_loginlist,name_message,name_subject,name_select,name_allparticipants

name_user=enseignant,enseignants,participant,participants
name_without=n'a pas d�fini d'adresse �lectronique,n'ont pas d�fini d'adresse �lectronique
name_noemail_login=Les identifiants suivants correspondent aux crit�res de s�lection mais n'ont pas d'adresse �lectronique valide
name_noemail_filter=Les participants suivants correspondent aux crit�res de s�lection mais n'ont pas d'adresse �lectronique valide
name_and=et
name_sendotherteacher=Envoyer une copie du message aux autres enseignants de la classe
name_selfsend=m'envoyer une copie du message
name_recipient=Destinataire
name_success=Message envoy� avec succ�s
name_nosendermail=Vous n'avez pas d�fini d'adresse �lectronique : l'enseignant de la classe ne pourra pas vous r�pondre.
name_sendto=Envoy� � (participant),Envoy� � (enseignant)
name_noreply=!nosubst Ceci est un message automatique. Pour y r�pondre vous devez <a href="$httpd_REMOTE_ADDR/wims/wims.cgi?module=adm/class/classes&+type=$localtype&+class=$localclass">vous connecter � la classe</a>.
name_sendby=!nosubst Envoy� par $supervisorname
name_suptype=Enseignant principal,Enseignant de la classe,Administrateur,Enseignant
