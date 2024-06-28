!set wims_module_log=error: $error

!if bad_maxexams=$error
  El n�mero de ex�menes est� limitado a $max_exams.
  !exit
!endif

!if not_supervisor=$error
  Lo lamentamos, pero la operaci�n de preparaci�n / modificaci�n de una hoja de ejercicios
  est� reservada a los profesores registrados de una clase.
  !exit
!endif

!if $error=no_sheet
  <p>
  El contenido de un examen se debe construir a partir de las hojas activadas
  (activas o expiradas).
  </p><p>
  Su clase a�n no tiene hojas activadas.
  Comience entonces por crear y activar una hoja.
  </p>
  !exit
!endif

!if bad_exam=$error
  Su n�mero de examen no es v�lido. �error de software?
  !exit
!endif

!if $error=simuchange
  Este examen acaba de cambiar de estado. Por favor
  !href cmd=reply&job=scorereg haga clic aqu�
  para terminar su ensayo.
  !exit
!endif

!if already_registered=$error
  Su nota ya est� registrada.
  !exit
!endif

!if no_more_registration=$error
  Tiene la posibilidad de realizar esta examen a lo m�s $stries veces.
  Ya no puede realizar m�s ensayos en este examen.
  !exit
!endif

!if bad_source=$error
  El art�culo n�mero $bad_source en el c�digo fuente que acaba de enviar no es v�lido.
  !href cmd=reply&job=prep_putsource&source=$source Corrija el c�digo fuente
  .
  !exit
!endif

!if no_title=$error
  Quizo registrar un examen sin t�tulo, lo cual no es
  aconsejable. �Error de manipulaci�n?
  !exit
!endif

!if prep_activate=$error
  Usted ha solicitado activar el examen $exam, es decir hacerlo accesible
  a los participantes de la clase.
  <div class="wims_warning">
  Tenga en cuenta que una vez que el examen sea activado, ya no podr� modificarlo.
  �Desea continuar?
  </div>
  <div class="wimscenter">
    !set wims_ref_class=wims_button wims_warning
    !href cmd=reply&job=activate $wims_name_yes�; $(wims_name_actionlist[1])
    &nbsp;
    !set wims_ref_class=wims_button wims_secondary_button
    !href cmd=resume $wims_name_no�; $wims_name_giveup
  </div>
  !exit
!endif

!if prep_erase=$error
  �Desea realmente borrar el examen n�mero $exam ($title)?
   <div class="wimscenter">
  !set wims_ref_class=wims_button wims_warning
  !href cmd=reply&job=erase $wims_name_yes; $wims_name_erase
  !set wims_ref_class=wims_button
  !href cmd=resume $wims_name_no; $wims_name_giveup
  </div>
  !exit
!endif

!if prep_expire=$error
  El examen n�mero $exam ($title) expirar� el $expday
  !item $expmon of $months
  $expyear. �Desea hacerlo expirar ahora?
  <div class="wimscenter">
  !href cmd=reply&job=expire $wims_name_yes; $(wims_name_actionlist[2])
  $ $
  !href cmd=resume $wims_name_no; $wims_name_giveup
  </div><b>Observaci�n.</b> Sus estudiantes no pueden trabajar
   en un examen expirado. Sin embargo, las notas ya registradas
   se conservan, siguen visibles y se toman en cuenta en las estad�sticas.
  !exit
!endif

!if nodeactivate=$error
  El examen no puede ser desactivado porque
  !if badstructure isin $deactivate
    la estructura de su clase no lo permite.
  !else
    !if score isin $deactivate
      algunos participantes ya han comenzado a trabajar en este examen!
    !else
      usted comparte sus ex�menes con otra clase!
    !endif
  !endif
  !exit
!endif

!if active_exam=$error
  Lo sentimos, este examen est� activo, por lo tanto su contenido ya no se puede modificar.
  !exit
!endif

!if $error=prep_noexercise
  El contenido del ejercicio $exo del examen est� vac�o. Comience de nuevo.
  !exit
!endif

!if $error=addexook
  El ejercicio se ha a�adido correctamente.
  !exit
!endif

!if exam_hidden iswordof $error
  Este examen no es accesible para usted. �No se meta con la barra de direcciones!
  !exit
!endif

!if badtechvarname iswordof $error
  !let code=!word 2 to -1 of $error
  !if $code=_
    una de las condiciones <span class="wims_code_words">Condici�n para ocultar la hoja a los participantes</span> no tiene nombre de variable
  !else
    Uno de los nombres de variable (
    !let code=!listcomplement _ in $code
    $code
    ) no es un nombre de variable t�cnica v�lido. Se eliminaron los nombres de variables t�cnicas incorrectos
    del campo <span class="wims_code_words">Condici�n para ocultar el examen a los participantes</span>.
  !endif
  !exit
!endif

!if $error=badallowshare
  La variable t�cnica que desea utilizar no est� disponible en todas las clases que comparten recursos con su clase.
  Por lo tanto, no puede propagar esta configuraci�n a otras clases compartidas.
  !exit
!endif

!if $error=noclass
  No est�s conectado a una clase. Esta situaci�n puede ocurrir si estabas trabajando en un examen y tu profesor cerr� tu sesi�n. 
  Necesitas volver a conectarte a la clase.
  !exit
!endif

!if other_exam isin $error
  Ya has comenzado otro examen (el n�mero
  !word 2 of $error
  ). No puedes empezar otro hasta que lo termines.
  !exit
!endif

!if $error=hiddenbadtechvar
  Atenci�n, la <span class="wims_code_words">condici�n para ocultar el examen a los participantes</span> usando una variable t�cnica es incorrecta. Debes arreglarlo.
  !exit
!endif

!msg $error
