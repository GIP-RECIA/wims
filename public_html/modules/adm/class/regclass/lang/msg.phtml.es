!set lang_exists=yes

!default wims_name_passsup=$wims_name_Password ($name_sup)
!default wims_name_password=$wims_name_Password ($name_classesss)
!default wims_name_institution=$name_Name_portal
!default wims_name_description=$wims_name_name $name_classesss

!set cname=!item $cltype+1 of una clase virtual,,un grupo de clases,,\
  un portal de centro educativo

!if noagreecgu iswordof $error
  $noagreecgu_msg
  !exit
!endif

!if no_subclass iswordof $error
  No está autorizado para crear subclases en la
  situación actual.
  !set restart=no
  !exit
!endif

!if no_right iswordof $error
  Lo sentimos, no está autorizado a crear clases virtuales en este sitio.
  Por favor
  !mailurl $wims_site_manager contacte con el administrador del sitio\
Creación de una clase virtual
  para recibir más información.
  !set restart=no
  !exit
!endif

!if not_manager iswordof $error
 Lo sentimos, sólo el administador del sitio está autorizado para crear $cname.
  !exit
!endif

!if getpass iswordof $error
  <div class="wims_msg warning">
    Le mot de passe de création qui vous a été transmis par l'administrateur
    ne doit pas être communiqué.
    !if $cltype=2
      De même, vous vous engagez à ne diffuser le mot de passe d'inscription des enseignants
      à votre groupement qu'aux enseignants dont vous souhaitez l'inscription
      dans votre groupement. En aucun cas ce mot de passe n'aura une diffusion publique.
      L'administrateur du serveur se réserve le droit de fermer votre groupement
      en cas de manquement à cette règle.
    !endif
  </div>
  !if $sendmail!=$empty
    La contraseña se envió a la dirección electrónica $sendmail.
    <br class="spacer">
  !endif
  !if $regpass!=$empty
    <div class="wims_msg warning">
      Lo sentimos, su contraseña no es correcta. Vuelva a intentarlo.
    </div>
  !else
    !if $sendmail=$empty
      Crear $cname en este sitio está protegida por una contraseña.
    !endif
  !endif
  !form reply
  <input type="hidden" name="step" value="$step">
  <input type="hidden" name="job" value="$job">
  <label for="regpass">
    Introduzca la contraseña:
  </label>
  <input size="16" name="regpass" type="password" id="regpass" required>
  <input type="submit" value="$wims_name_send">
  !formend
  </div>
  <div class="wims_msg info">
    La contraseña requerida para crear clases virtuales.
     se puede obtener del
    !mailurl $wims_site_manager administrador\
Contraseña para la creación de clases virtuales
    de este sitio WIMS.
    !if $regpassmail!=$empty and $sendmail=$empty
      !form reply
       Si tiene una dirección de correo electrónico cuyo dominio es reconocido por el servidor,
         también puede recibir la contraseña por correo electrónico
         escribiendo <label for="adresse1">su correo electrónico </label> aquí:
        <div class="wimscenter">
          <input type="text" id="adresse1" name="adresse1" value="$adresse1" size="20">
          <input type="hidden" name="step" value="0">
          !let nbaddr=!itemcnt $regpassmail
          !if $nbaddr=1
            @$regpassmail
            <input type="hidden" name="adresse2" value="$regpassmail">
          !else
            @
            !formselect adresse2 list $regpassmail
          !endif
          <input type="submit" value="$wims_name_send">
        </div>
      !formend
    !else
      !reset sendmail
    !endif
  </div>
  !set restart=no
  !exit
!endif

!if getid iswordof $error
  !if $regpass$regid!=$empty
    Lo sentimos, su contraseña no es correcta. Vuelva a intentarlo.
  !else
    La creación de clases virtuales en este sitio está protegida por un
    sistema de autentificación. Identifíquese por favor.
  !endif
  </div>
  !form reply
    <fieldset class="property_fields halfwidth blockcenter">
      <div class="field box">
        <label for="regid">
          Introduzca el nombre de su cuenta:
        </label>
        <input size="20" name="regid" id="regid" required>
      </div>
      <div class="field box">
        <label for="regpass">
          Y la contraseña:
        </label>
        <input size="16" name="regpass" id="regpass" type="password"  required>
      </div>
      <div class="wimscenter">
        <input type="submit" value="$wims_name_send">
      </div>
    </fieldset>
  !formend
  <p>
    Nota. Por favor escriba al
    !mailurl $wims_site_manager administrador\
Contraseña para la creación de clases virtuales
    de este sitio si desea una cuenta con permisos para la creación de clases virtuales.
  </p>
  !set restart=no
  !exit
!endif

!if class_quota=$error
  Está autorizado a instalar hasta un total de $r_quota1 clases. Ha llegado
  al total; ya no puede añadir más.
  !set restart=no
  !exit
!endif

!if bad_secure=$error
   ¡Su puesto actual no forma parte de su definición de acceso
  asegurado (<span class="tt wims_code_words">$secure</span>)! Es un error probablemente
  que tendría la consecuencia de prohibirles el acceso de control de su clase.
  <p>
  Lea atentamente la documentación siguiente. Si no comprenden todavía,
  dejan este campo vacío (se les enviarán códigos secretos temporales
  para las operaciones sensibles), o ponen la palabra <tt class="wims_code_words">all< /tt>
  para desactivar esta medida de seguridad.
  </p><hr>
  !read help/hosts.phtml
  !reset secure
  !exit
!endif

!if has_empty=$error
  No ha proporcionado todas las informaciones necesarias para la creación
  de una clase. Por favor complete sus datos antes de enviarlos.<br>
  <span class="tt wims_code_words">$(wims_name_$error_subject) required.</span>
  !exit
!endif

!if too_short=$error
  El campo de datos <span class="tt wims_code_words">$(wims_name_$(error_subject))</span> parece demasiado corto.
  !exit
!endif

!if bad_date=$error
  La fecha de expiración no es correcta.
  !exit
!endif

!if anti_date=$error
  Su clase tiene una fecha de expiración anterior a la de hoy. ¡Habría
  expirado antes de ser creada!
  !exit
!endif

!if bad_level=$error
  Valor de nivel incorrecto.
  !exit
!endif

!if bad_email=$error
  Su dirección de correo electrónico es visiblemente inválida.
  <p>
  La creación de clases sólo puede tener éxito si
  proporciona SU VERDADERA dirección de correo.
  </p>
  !exit
!endif

!if existing=$error
  La clase $classname parece que ya existe. No puede volver a crear la
  misma clase.
  !exit
!endif

!if pass_discord isin $error
  La contraseña (
  !if sup isin $error
    profesor
    !if class isin $error
      y clase
    !endif
  !else
    !if class isin $error
      clase
    !endif
  !endif
  ) que ha vuelto a teclear no se corresponde con la primera.
   En consecuencia no se ha realizado la creación de la clase; puede volver a
   intentarlo.
  !exit
!endif

!if bad_pass=$error
  Su <strong>$(wims_name_$(error_subject))</strong>
   contiene caracteres ilegales.
  Por favor utilice una contraseña que contenga únicamente cifras o letras
  sin acentos y sin espacios entre ellas.
  !exit
!endif

!if bad_code=$error
  No ha tecleado la clave correcta para la clase. ¿Es correcta la dirección
  electrónica que nos ha proporcionado?
  <p>
  Este fallo ha quedado registrado.
  </p>
  !exit
!endif

!if define_fail=$error or abuse=$error
  El servidor no ha podido añadir su clase a la base de datos.
  Se trata de un error interno del programa.
  <p>
  Por favor informe del problema al
  !mailurl $wims_site_manager administrador de este sitio\
user registration failure
. ¡Gracias!
  </p>
  !exit
!endif

!if duplicate=$error
  Ha intentado volver a crear una clase ya creada. ¿Quizás ha hecho click
  en el botón <span class="tt">actualizar</span>? En todo caso ya existe su clase
  $classname y esta segunda tentativa de creación
  se ha ignorado.
  <div>
  !read adm/lang/links.phtml.$modu_lang
  </div>
  !exit
!endif

!if classdontexists=$error
  Esta clase no existe
  !exit
!endif

!if notexempleclass=$error
  Esta clase no es una clase de ejemplo: no se puede copiar.
  !exit
!endif

!if badcpmethod=$error
  Método de copia no identificable. Repita la operación. Si el error persiste, comuníquese con el administrador del servidor.
  !exit
!endif

!if cloningnotallow=$error
  La duplicación de esta clase no está autorizada por su administrador.
  !exit
!endif

!if badcloningpwd=$error
  Contraseña de duplicación incorrecta.
  !exit
!endif

!if disallowcloning=$error
  No se puede realizar ninguna duplicación de esta clase.
  !exit
!endif

!if subclasslimit=$error
  Vous avez atteint le nombre maximum de sous-classes ($max_subclasses). Il n'est pas possible d'en créer d'autres.
  !exit
!endif

!if bad_file iswordof $error
  Lo sentimos pero no reconocemos <em>$wims_deposit</em>
  como copia de seguridad de una clase. Es posible que haya enviado un fichero
  incorrecto o que haya sido dañado.
  !exit
!endif

!msg $error
