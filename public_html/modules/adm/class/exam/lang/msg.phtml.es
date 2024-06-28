!set wims_module_log=error: $error

!if bad_maxexams=$error
  El número de exámenes está limitado a $max_exams.
  !exit
!endif

!if not_supervisor=$error
  Lo lamentamos, pero la operación de preparación / modificación de una hoja de ejercicios
  está reservada a los profesores registrados de una clase.
  !exit
!endif

!if $error=no_sheet
  <p>
  El contenido de un examen se debe construir a partir de las hojas activadas
  (activas o expiradas).
  </p><p>
  Su clase aún no tiene hojas activadas.
  Comience entonces por crear y activar una hoja.
  </p>
  !exit
!endif

!if bad_exam=$error
  Su número de examen no es válido. ¿error de software?
  !exit
!endif

!if $error=simuchange
  Este examen acaba de cambiar de estado. Por favor
  !href cmd=reply&job=scorereg haga clic aquí
  para terminar su ensayo.
  !exit
!endif

!if already_registered=$error
  Su nota ya está registrada.
  !exit
!endif

!if no_more_registration=$error
  Tiene la posibilidad de realizar esta examen a lo más $stries veces.
  Ya no puede realizar más ensayos en este examen.
  !exit
!endif

!if bad_source=$error
  El artículo número $bad_source en el código fuente que acaba de enviar no es válido.
  !href cmd=reply&job=prep_putsource&source=$source Corrija el código fuente
  .
  !exit
!endif

!if no_title=$error
  Quizo registrar un examen sin título, lo cual no es
  aconsejable. ¿Error de manipulación?
  !exit
!endif

!if prep_activate=$error
  Usted ha solicitado activar el examen $exam, es decir hacerlo accesible
  a los participantes de la clase.
  <div class="wims_warning">
  Tenga en cuenta que una vez que el examen sea activado, ya no podrá modificarlo.
  ¿Desea continuar?
  </div>
  <div class="wimscenter">
    !set wims_ref_class=wims_button wims_warning
    !href cmd=reply&job=activate $wims_name_yes ; $(wims_name_actionlist[1])
    &nbsp;
    !set wims_ref_class=wims_button wims_secondary_button
    !href cmd=resume $wims_name_no ; $wims_name_giveup
  </div>
  !exit
!endif

!if prep_erase=$error
  ¿Desea realmente borrar el examen número $exam ($title)?
   <div class="wimscenter">
  !set wims_ref_class=wims_button wims_warning
  !href cmd=reply&job=erase $wims_name_yes; $wims_name_erase
  !set wims_ref_class=wims_button
  !href cmd=resume $wims_name_no; $wims_name_giveup
  </div>
  !exit
!endif

!if prep_expire=$error
  El examen número $exam ($title) expirará el $expday
  !item $expmon of $months
  $expyear. ¿Desea hacerlo expirar ahora?
  <div class="wimscenter">
  !href cmd=reply&job=expire $wims_name_yes; $(wims_name_actionlist[2])
  $ $
  !href cmd=resume $wims_name_no; $wims_name_giveup
  </div><b>Observación.</b> Sus estudiantes no pueden trabajar
   en un examen expirado. Sin embargo, las notas ya registradas
   se conservan, siguen visibles y se toman en cuenta en las estadísticas.
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
      usted comparte sus exámenes con otra clase!
    !endif
  !endif
  !exit
!endif

!if active_exam=$error
  Lo sentimos, este examen está activo, por lo tanto su contenido ya no se puede modificar.
  !exit
!endif

!if $error=prep_noexercise
  El contenido del ejercicio $exo del examen está vacío. Comience de nuevo.
  !exit
!endif

!if $error=addexook
  El ejercicio se ha añadido correctamente.
  !exit
!endif

!if exam_hidden iswordof $error
  Este examen no es accesible para usted. ¡No se meta con la barra de direcciones!
  !exit
!endif

!if badtechvarname iswordof $error
  !let code=!word 2 to -1 of $error
  !if $code=_
    una de las condiciones <span class="wims_code_words">Condición para ocultar la hoja a los participantes</span> no tiene nombre de variable
  !else
    Uno de los nombres de variable (
    !let code=!listcomplement _ in $code
    $code
    ) no es un nombre de variable técnica válido. Se eliminaron los nombres de variables técnicas incorrectos
    del campo <span class="wims_code_words">Condición para ocultar el examen a los participantes</span>.
  !endif
  !exit
!endif

!if $error=badallowshare
  La variable técnica que desea utilizar no está disponible en todas las clases que comparten recursos con su clase.
  Por lo tanto, no puede propagar esta configuración a otras clases compartidas.
  !exit
!endif

!if $error=noclass
  No estás conectado a una clase. Esta situación puede ocurrir si estabas trabajando en un examen y tu profesor cerró tu sesión. 
  Necesitas volver a conectarte a la clase.
  !exit
!endif

!if other_exam isin $error
  Ya has comenzado otro examen (el número
  !word 2 of $error
  ). No puedes empezar otro hasta que lo termines.
  !exit
!endif

!if $error=hiddenbadtechvar
  Atención, la <span class="wims_code_words">condición para ocultar el examen a los participantes</span> usando una variable técnica es incorrecta. Debes arreglarlo.
  !exit
!endif

!msg $error
