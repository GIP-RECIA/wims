!set wims_module_log=error: $error

!if not_supervisor=$error
  Lo sentimos, pero la operación de preparación / modificación de una hoja de trabajo está reservada a los profesores registrados de la clase.
  !exit
!endif

!if bad_series=$error
 Es extraño, pero no encuentro la serie de ejercicios a modificar.
  !exit
!endif

!if bad_source=$error
  El elemento número $bad_source del fichero fuente que acaba de enviar no es válido.
  Debe haber un título (línea 5), un peso no nulo (línea 3) y un número de puntos (múltiplo de 10)
  (línea 4).

  !href cmd=reply&job=prep_putsource $name_correctsource
.
  !exit
!endif

!if active_sheet=$error
  Esta hoja está activa. Su contenido no puede ser modificado.
  !exit
!endif

!if bad_sheet=$error
  Su número de hoja de trabajo no es válida. ¿Error del software?
  !exit
!endif

!if bad_maxsheet=$error
  El número de hojas está limitado a $max_sheets. No puede entonces crear más.
  !exit
!endif

!if no_title=$error
  Ha intentado grabar una hoja de trabajo sin título, lo cual no es aconsejable. ¿Error de manipulación?
  !exit
!endif

!if $error=not_secure
  Esta operación sólo puede ser realizada desde una estación de trabajo segura.
  !if $sec=$empty
    No ha definido estaciones de trabajo seguras. Acceso prohibido. Puede
    solicitar al administrador del sitio que lo haga por usted.
  !else
    Acceso prohibido.
  !endif
  !exit
!endif

!if $error=sharing_sheet
  <span class="wims_warning">¡¡¡Peligro!!!</span>.  ¡Sus hojas están siendo compartidas por otras clases!
  !if $wims_ismanager<2
    Deberá pedir al administrador del sitio que desactive la hoja
    por usted.
    !exit
  !endif
  Se arriesga a poner las clases vecinas en un desorden total si desactiva
  esta hoja. Por consiguiente esta operación está <b>fuertemente desaconsejada</b>.
  <p>¿De verdad quiere desactivar la hoja?</p>
  <p class="wimscenter">
  !set wims_ref_class=wims_button
  !href cmd=reply&job=deactivate&confirm=yes $wims_name_yes; $(wims_name_actionlist[3])
$ $
  !set wims_ref_class=wims_button wims_secondary_button
  !href cmd=resume $wims_name_no, $wims_name_giveup
  </p><p>
    <b>¡Antes de continuar, pida al menos a los profesores de las clases vecinas que
    hagan copias de seguridad de sus clases!</b> Cuando los problemas aparezcan, aunque sea
    después de varios meses, estará obligado a volver al estado ANTERIOR a la
    desactivación, y perderá todo lo ocurrido DESPUÉS, ¡y esto para todas las clases
    que comparten la hoja! Esperamos haberle avisado suficientemente.
  </p>
  !exit
!endif

!if sheet_in_exam iswordof $error
  !set exa=!word 2 of $error
  Imposible desactivar esta hoja, porque tiene exámenes
  basados en su contenido (examen $exa).
  !exit
!endif

!if $error=non_empty_activities
  <p class="wims_msg warning">¡Quiere desactivar la hoja $sheet cuando los participantes ya han empezado
  a trabajar en ella!</p>

  !if share iswordof $confirmed
   <p>Además la hoja la comparten otras clases, que pueden estar trabajando en ella
   y tener puntuaciones también. Por tanto está prohibido desactivarla.</p>
   !exit
  !endif
  <p>Todas las puntuaciones obtenidas en el trabajo en esta hoja quedarán borradas
  si la desactiva. ¿Está usted seguro de querer hacerlo?</p>
   <p class="wimscenter">
  !set wims_ref_class=wims_button
  !href cmd=reply&job=deactivate&confirm=yes $wims_name_yes; $(wims_name_actionlist[3])
&nbsp;&nbsp;
 !set wims_ref_class=wims_button wims_secondary_button
 !href cmd=resume $wims_name_no; $wims_name_giveup
</p>
 Lista de cuentas que ya han trabajado en esta hoja:

 <p class="tt">$worktest</p>

 <div class="wims_msg info"><b>Nota</b>. Esta acción no debe realizarse salvo si se trata de una clase de
 pruebas. ¡No siga adelante si los participantes son sus verdaderos alumnos!</div>
 !exit
!endif

!if prep_activate=$error
  Ha solicitado activar la hoja de trabajo $sheet, es decir, hacerla accesible a los participantes de la clase. <br>
  Por favor tenga en cuenta que, una vez activada una hoja de trabajo, no puede ser modificada sin previamente desactivarla, y la desactivación de
  la hoja conlleva la pérdida de las puntuaciones que se han conseguido en el trabajo en la misma, si dicha desactivación no está prohibida por la situación.
  !if $test_expire!=$empty
    <div class="wims_warning">
     la fecha de expiración de la hoja es previa al día de hoy, será
     actualizada a la fecha de expiración de su clase.
    </div>
  !endif
  <p>
  ¿Desea continuar?
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
  ¿Realmente quiere borrar la hoja de trabajo $sheet ($title)?
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
  Esta hoja número $sheet ($title) expira normalmente el $expday
  !item $expmon of $months
  $expyear. ¿Quiere hacerla expirar ahora?
  <p class="wimscenter">
  !set wims_ref_class=wims_button wims_warning
  !href cmd=reply&job=expire $wims_name_yes ; $(wims_name_actionlist[2])
$ $
  !set wims_ref_class=wims_button
  !href cmd=resume $wims_name_no ; $wims_name_giveup
  </p>
  <p><b>Nota.</b> Sus estudiantes no pueden continuar trabajando en una hoja
  que ha expirado. Pero las puntuaciones anteriores se conservarán (y se tomarán en
  cuenta en las estadísticas),
   y puede seguir consultándolas.
  </p>
  !exit
!endif

!if prep_putsource=$error
  <p>
  Si tiene el fichero fuente de una hoja de trabajo guardada anteriormente, puede insertarlo directamente
  en la hoja actual, copiando estos fuentes en la ventana siguiente, y pulsando después el botón
  <span class="wims_button disabled">$wims_name_send</span>Enviar</span>.
  </p><p>
  También puede utilizar este formulario para insertar los fuentes de una hoja pública por el proceso de copiar y pegar.
  </p>
  !set wims_menu_items=!append line sheetadmin,1,cmd=resume \
to $wims_menu_items

  !set wims_form_method=post
  !form reply
  <input type="hidden" name="job" value="putsource"><p class="wimscenter">
  <textarea cols="55" rows="10" name="source">$ssource</textarea></p>
  <p class="wimscenter"><input type="submit" value="$wims_name_send"></p>

  !formend
  <span class="wims_warning">Atención</span>.
  ¡No inserte un fichero fuente modificado! Se arriesga a
  inutilizar su hoja de trabajo.
  !exit
!endif

!if prep_modify=$error
  !set cnt=!recordcnt wimshome/log/classes/$wims_class/sheets/.sheet$sheet
  !if $modif>$cnt or $modif<1
    Ha enviado una solicitud no válida. Ignorada.
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
 Esta hoja no contiene ningún ejercicio, su código fuente es vacío.<br>
 !href cmd=resume retorno a la página de preparación
 !exit
!endif

!if $error=depindiv
  <div class="wims_msg alert">
    <strong>$wims_name_Error:</strong>
    No es posible definir dependencias de puntuación al mismo tiempo que se
    habilita la individualización de hojas de trabajo con una variable técnica.
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
      ont été supprimés du champs <span class="wims_code_words">Condition pour cacher la feuille aux participants</span>.
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
    Le nombre d'exercices dans une feuille est limité à $max_exos. Vous devez supprimer des exercices avant de pouvoir
    l'activer.
  </div>
  !exit
!endif

!if $error=badallowshare
  <div class="wims_msg alert">
    <strong>$wims_name_Error:</strong>
  La variable technique que vous souhaitez utiliser n'est pas disponible dans toutes les classes en partage de ressources avec votre
  classe.
  Vous ne pouvez donc pas propager ces réglages aux autres classes en partage.
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
