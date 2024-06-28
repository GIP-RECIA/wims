!set wims_module_log=error: $error

!if not_supervisor=$error
  Lo sentimos, pero la operaci�n de preparaci�n / modificaci�n de una hoja de trabajo est� reservada a los profesores registrados de la clase.
  !exit
!endif

!if bad_series=$error
 Es extra�o, pero no encuentro la serie de ejercicios a modificar.
  !exit
!endif

!if bad_source=$error
  El elemento n�mero $bad_source del fichero fuente que acaba de enviar no es v�lido.
  Debe haber un t�tulo (l�nea 5), un peso no nulo (l�nea 3) y un n�mero de puntos (m�ltiplo de 10)
  (l�nea 4).

  !href cmd=reply&job=prep_putsource $name_correctsource
.
  !exit
!endif

!if active_sheet=$error
  Esta hoja est� activa. Su contenido no puede ser modificado.
  !exit
!endif

!if bad_sheet=$error
  Su n�mero de hoja de trabajo no es v�lida. �Error del software?
  !exit
!endif

!if bad_maxsheet=$error
  El n�mero de hojas est� limitado a $max_sheets. No puede entonces crear m�s.
  !exit
!endif

!if no_title=$error
  Ha intentado grabar una hoja de trabajo sin t�tulo, lo cual no es aconsejable. �Error de manipulaci�n?
  !exit
!endif

!if $error=not_secure
  Esta operaci�n s�lo puede ser realizada desde una estaci�n de trabajo segura.
  !if $sec=$empty
    No ha definido estaciones de trabajo seguras. Acceso prohibido. Puede
    solicitar al administrador del sitio que lo haga por usted.
  !else
    Acceso prohibido.
  !endif
  !exit
!endif

!if $error=sharing_sheet
  <span class="wims_warning">���Peligro!!!</span>.  �Sus hojas est�n siendo compartidas por otras clases!
  !if $wims_ismanager<2
    Deber� pedir al administrador del sitio que desactive la hoja
    por usted.
    !exit
  !endif
  Se arriesga a poner las clases vecinas en un desorden total si desactiva
  esta hoja. Por consiguiente esta operaci�n est� <b>fuertemente desaconsejada</b>.
  <p>�De verdad quiere desactivar la hoja?</p>
  <p class="wimscenter">
  !set wims_ref_class=wims_button
  !href cmd=reply&job=deactivate&confirm=yes $wims_name_yes; $(wims_name_actionlist[3])
$ $
  !set wims_ref_class=wims_button wims_secondary_button
  !href cmd=resume $wims_name_no, $wims_name_giveup
  </p><p>
    <b>�Antes de continuar, pida al menos a los profesores de las clases vecinas que
    hagan copias de seguridad de sus clases!</b> Cuando los problemas aparezcan, aunque sea
    despu�s de varios meses, estar� obligado a volver al estado ANTERIOR a la
    desactivaci�n, y perder� todo lo ocurrido DESPU�S, �y esto para todas las clases
    que comparten la hoja! Esperamos haberle avisado suficientemente.
  </p>
  !exit
!endif

!if sheet_in_exam iswordof $error
  !set exa=!word 2 of $error
  Imposible desactivar esta hoja, porque tiene ex�menes
  basados en su contenido (examen $exa).
  !exit
!endif

!if $error=non_empty_activities
  <p class="wims_msg warning">�Quiere desactivar la hoja $sheet cuando los participantes ya han empezado
  a trabajar en ella!</p>

  !if share iswordof $confirmed
   <p>Adem�s la hoja la comparten otras clases, que pueden estar trabajando en ella
   y tener puntuaciones tambi�n. Por tanto est� prohibido desactivarla.</p>
   !exit
  !endif
  <p>Todas las puntuaciones obtenidas en el trabajo en esta hoja quedar�n borradas
  si la desactiva. �Est� usted seguro de querer hacerlo?</p>
   <p class="wimscenter">
  !set wims_ref_class=wims_button
  !href cmd=reply&job=deactivate&confirm=yes $wims_name_yes; $(wims_name_actionlist[3])
&nbsp;&nbsp;
 !set wims_ref_class=wims_button wims_secondary_button
 !href cmd=resume $wims_name_no; $wims_name_giveup
</p>
 Lista de cuentas que ya han trabajado en esta hoja:

 <p class="tt">$worktest</p>

 <div class="wims_msg info"><b>Nota</b>. Esta acci�n no debe realizarse salvo si se trata de una clase de
 pruebas. �No siga adelante si los participantes son sus verdaderos alumnos!</div>
 !exit
!endif

!if prep_activate=$error
  Ha solicitado activar la hoja de trabajo $sheet, es decir, hacerla accesible a los participantes de la clase. <br>
  Por favor tenga en cuenta que, una vez activada una hoja de trabajo, no puede ser modificada sin previamente desactivarla, y la desactivaci�n de
  la hoja conlleva la p�rdida de las puntuaciones que se han conseguido en el trabajo en la misma, si dicha desactivaci�n no est� prohibida por la situaci�n.
  !if $test_expire!=$empty
    <div class="wims_warning">
     la fecha de expiraci�n de la hoja es previa al d�a de hoy, ser�
     actualizada a la fecha de expiraci�n de su clase.
    </div>
  !endif
  <p>
  �Desea continuar?
  </p>
  <p class="wimscenter">
  !set wims_ref_class=wims_button
  !href cmd=reply&save=$wims_name_tosave&job=activate $wims_name_yes, $(wims_name_actionlist[1])
$ $
  !set wims_ref_class=wims_button wims_secondary_button
  !href cmd=resume $wims_name_no, $wims_name_giveup
  </p>
  !exit
!endif

!if prep_erase=$error
  �Realmente quiere borrar la hoja de trabajo $sheet ($title)?
  <p class="wimscenter">
  !set wims_ref_class=wims_button wims_warning
  !href cmd=reply&job=erase $wims_name_yes, $wims_name_erase
$ $
  !set wims_ref_class=wims_button
  !href cmd=resume $wims_name_no, $wims_name_giveup
  </p>
  !exit
!endif

!if prep_expire=$error
  Esta hoja n�mero $sheet ($title) expira normalmente el $expday
  !item $expmon of $months
  $expyear. �Quiere hacerla expirar ahora?
  <p class="wimscenter">
  !set wims_ref_class=wims_button wims_warning
  !href cmd=reply&job=expire $wims_name_yes ; $(wims_name_actionlist[2])
$ $
  !set wims_ref_class=wims_button
  !href cmd=resume $wims_name_no ; $wims_name_giveup
  </p>
  <p><b>Nota.</b> Sus estudiantes no pueden continuar trabajando en una hoja
  que ha expirado. Pero las puntuaciones anteriores se conservar�n (y se tomar�n en
  cuenta en las estad�sticas),
   y puede seguir consult�ndolas.
  </p>
  !exit
!endif

!if prep_putsource=$error
  <p>
  Si tiene el fichero fuente de una hoja de trabajo guardada anteriormente, puede insertarlo directamente
  en la hoja actual, copiando estos fuentes en la ventana siguiente, y pulsando despu�s el bot�n
  <span class="wims_button disabled">$wims_name_send</span>Enviar</span>.
  </p><p>
  Tambi�n puede utilizar este formulario para insertar los fuentes de una hoja p�blica por el proceso de copiar y pegar.
  </p>
  !set wims_menu_items=!append line sheetadmin,1,cmd=resume \
to $wims_menu_items

  !set wims_form_method=post
  !form reply
  <input type="hidden" name="job" value="putsource"><p class="wimscenter">
  <textarea cols="55" rows="10" name="source">$ssource</textarea></p>
  <p class="wimscenter"><input type="submit" value="$wims_name_send"></p>

  !formend
  <span class="wims_warning">Atenci�n</span>.
  �No inserte un fichero fuente modificado! Se arriesga a
  inutilizar su hoja de trabajo.
  !exit
!endif

!if prep_modify=$error
  !set cnt=!recordcnt wimshome/log/classes/$wims_class/sheets/.sheet$sheet
  !if $modif>$cnt or $modif<1
    Ha enviado una solicitud no v�lida. Ignorada.
  !else
    !set exo=!record $modif of wimshome/log/classes/$wims_class/sheets/.sheet$sheet
    !read exomodify.phtml $exo
  !endif
  !exit
!endif

!if $error=toolate
  !read adm/lang/date.phtml.$moduclass_lang $class_expiration
  <p>$name_expiration1 ($l_date_out). $name_expiration2 </p>
  !set wims_ref_class=wims_button
  !href cmd=resume&save=$empty&job=$empty $wims_name_back2
  ($wims_name_sheetmanagement)
  !exit
!endif

!if $error=srcnoexo
 Esta hoja no contiene ning�n ejercicio, su c�digo fuente es vac�o.<br>
 !href cmd=resume retorno a la p�gina de preparaci�n
 !exit
!endif

!if $error=depindiv
  <div class="wims_msg alert">
    <strong>$wims_name_Error:</strong>
    No es posible definir dependencias de puntuaci�n al mismo tiempo que se
    habilita la individualizaci�n de hojas de trabajo con una variable t�cnica.
    <br>
    Debe elegir entre los dos antes de poder activar esta hoja.
    !reset error
  </div>
  <div class="wimscenter">
   !set wims_ref_class=wims_button
   !href cmd=resume Retour
  </div>
  !exit
!endif

!if badtechvarname iswordof $error
  <div class="wims_msg alert">
    <strong>$wims_name_Error:</strong>
    !let code=!word 2 to -1 of $error
    !if $code=_
      une des conditions <span class="wims_code_words">Condition pour cacher la feuille aux participants</span> n'a pas de nom de variable
    !else
      Un des noms de variable (
        !let code=!listcomplement _ in $code
        $code
      ) n'est pas un nom correct de variable technique. Les noms incorrects de variable technique
      ont �t� supprim�s du champs <span class="wims_code_words">Condition pour cacher la feuille aux participants</span>.
    !endif
  </div>
  <div class="wimscenter">
   !set wims_ref_class=wims_button
   !reset error
   !href cmd=resume Retour
  </div>
  !exit
!endif

!if toomanyexo=$error
  <div class="wims_msg alert">
    Le nombre d'exercices dans une feuille est limit� � $max_exos. Vous devez supprimer des exercices avant de pouvoir
    l'activer.
  </div>
  !exit
!endif

!if $error=badallowshare
  <div class="wims_msg alert">
    <strong>$wims_name_Error:</strong>
  La variable technique que vous souhaitez utiliser n'est pas disponible dans toutes les classes en partage de ressources avec votre
  classe.
  Vous ne pouvez donc pas propager ces r�glages aux autres classes en partage.
  </div>
  <div class="wimscenter">
   !set wims_ref_class=wims_button
   !reset error
   !href cmd=resume Retour
  </div>
  !exit
!endif

!if $error=hiddenbadtechvar
  Attention, la <span class="wims_code_words">condition pour cacher la feuille aux participants</span> en utilisant une variable technique est incorrecte. Vous devez la corriger.
  !exit
!endif

!if techvardiscord iswordof $error
  !! TODO_lang techvardiscord
  !changeto lang/msg.phtml.fr
!endif

!msg $error
