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
  No est� autorizado para crear subclases en la
  situaci�n actual.
  !set restart=no
  !exit
!endif

!if no_right iswordof $error
  Lo sentimos, no est� autorizado a crear clases virtuales en este sitio.
  Por favor
  !mailurl $wims_site_manager contacte con el administrador del sitio\
Creaci�n de una clase virtual
  para recibir m�s informaci�n.
  !set restart=no
  !exit
!endif

!if not_manager iswordof $error
 Lo sentimos, s�lo el administador del sitio est� autorizado para crear $cname.
  !exit
!endif

!if getpass iswordof $error
  <div class="wims_msg warning">
    Le mot de passe de cr�ation qui vous a �t� transmis par l'administrateur
    ne doit pas �tre communiqu�.
    !if $cltype=2
      De m�me, vous vous engagez � ne diffuser le mot de passe d'inscription des enseignants
      � votre groupement qu'aux enseignants dont vous souhaitez l'inscription
      dans votre groupement. En aucun cas ce mot de passe n'aura une diffusion publique.
      L'administrateur du serveur se r�serve le droit de fermer votre groupement
      en cas de manquement � cette r�gle.
    !endif
  </div>
  !if $sendmail!=$empty
    La contrase�a se envi� a la direcci�n electr�nica $sendmail.
    <br class="spacer">
  !endif
  !if $regpass!=$empty
    <div class="wims_msg warning">
      Lo sentimos, su contrase�a no es correcta. Vuelva a intentarlo.
    </div>
  !else
    !if $sendmail=$empty
      Crear $cname en este sitio est� protegida por una contrase�a.
    !endif
  !endif
  !form reply
  <input type="hidden" name="step" value="$step">
  <input type="hidden" name="job" value="$job">
  <label for="regpass">
    Introduzca la contrase�a:
  </label>
  <input size="16" name="regpass" type="password" id="regpass" required>
  <input type="submit" value="$wims_name_send">
  !formend
  </div>
  <div class="wims_msg info">
    La contrase�a requerida para crear clases virtuales.
     se puede obtener del
    !mailurl $wims_site_manager administrador\
Contrase�a para la creaci�n de clases virtuales
    de este sitio WIMS.
    !if $regpassmail!=$empty and $sendmail=$empty
      !form reply
       Si tiene una direcci�n de correo electr�nico cuyo dominio es reconocido por el servidor,
         tambi�n puede recibir la contrase�a por correo electr�nico
         escribiendo <label for="adresse1">su correo electr�nico </label> aqu�:
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
    Lo sentimos, su contrase�a no es correcta. Vuelva a intentarlo.
  !else
    La creaci�n de clases virtuales en este sitio est� protegida por un
    sistema de autentificaci�n. Identif�quese por favor.
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
          Y la contrase�a:
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
Contrase�a para la creaci�n de clases virtuales
    de este sitio si desea una cuenta con permisos para la creaci�n de clases virtuales.
  </p>
  !set restart=no
  !exit
!endif

!if class_quota=$error
  Est� autorizado a instalar hasta un total de $r_quota1 clases. Ha llegado
  al total; ya no puede a�adir m�s.
  !set restart=no
  !exit
!endif

!if bad_secure=$error
   �Su puesto actual no forma parte de su definici�n de acceso
  asegurado (<span class="tt wims_code_words">$secure</span>)! Es un error probablemente
  que tendr�a la consecuencia de prohibirles el acceso de control de su clase.
  <p>
  Lea atentamente la documentaci�n siguiente. Si no comprenden todav�a,
  dejan este campo vac�o (se les enviar�n c�digos secretos temporales
  para las operaciones sensibles), o ponen la palabra <tt class="wims_code_words">all< /tt>
  para desactivar esta medida de seguridad.
  </p><hr>
  !read help/hosts.phtml
  !reset secure
  !exit
!endif

!if has_empty=$error
  No ha proporcionado todas las informaciones necesarias para la creaci�n
  de una clase. Por favor complete sus datos antes de enviarlos.<br>
  <span class="tt wims_code_words">$(wims_name_$error_subject) required.</span>
  !exit
!endif

!if too_short=$error
  El campo de datos <span class="tt wims_code_words">$(wims_name_$(error_subject))</span> parece demasiado corto.
  !exit
!endif

!if bad_date=$error
  La fecha de expiraci�n no es correcta.
  !exit
!endif

!if anti_date=$error
  Su clase tiene una fecha de expiraci�n anterior a la de hoy. �Habr�a
  expirado antes de ser creada!
  !exit
!endif

!if bad_level=$error
  Valor de nivel incorrecto.
  !exit
!endif

!if bad_email=$error
  Su direcci�n de correo electr�nico es visiblemente inv�lida.
  <p>
  La creaci�n de clases s�lo puede tener �xito si
  proporciona SU VERDADERA direcci�n de correo.
  </p>
  !exit
!endif

!if existing=$error
  La clase $classname parece que ya existe. No puede volver a crear la
  misma clase.
  !exit
!endif

!if pass_discord isin $error
  La contrase�a (
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
   En consecuencia no se ha realizado la creaci�n de la clase; puede volver a
   intentarlo.
  !exit
!endif

!if bad_pass=$error
  Su <strong>$(wims_name_$(error_subject))</strong>
   contiene caracteres ilegales.
  Por favor utilice una contrase�a que contenga �nicamente cifras o letras
  sin acentos y sin espacios entre ellas.
  !exit
!endif

!if bad_code=$error
  No ha tecleado la clave correcta para la clase. �Es correcta la direcci�n
  electr�nica que nos ha proporcionado?
  <p>
  Este fallo ha quedado registrado.
  </p>
  !exit
!endif

!if define_fail=$error or abuse=$error
  El servidor no ha podido a�adir su clase a la base de datos.
  Se trata de un error interno del programa.
  <p>
  Por favor informe del problema al
  !mailurl $wims_site_manager administrador de este sitio\
user registration failure
. �Gracias!
  </p>
  !exit
!endif

!if duplicate=$error
  Ha intentado volver a crear una clase ya creada. �Quiz�s ha hecho click
  en el bot�n <span class="tt">actualizar</span>? En todo caso ya existe su clase
  $classname y esta segunda tentativa de creaci�n
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
  M�todo de copia no identificable. Repita la operaci�n. Si el error persiste, comun�quese con el administrador del servidor.
  !exit
!endif

!if cloningnotallow=$error
  La duplicaci�n de esta clase no est� autorizada por su administrador.
  !exit
!endif

!if badcloningpwd=$error
  Contrase�a de duplicaci�n incorrecta.
  !exit
!endif

!if disallowcloning=$error
  No se puede realizar ninguna duplicaci�n de esta clase.
  !exit
!endif

!if subclasslimit=$error
  Vous avez atteint le nombre maximum de sous-classes ($max_subclasses). Il n'est pas possible d'en cr�er d'autres.
  !exit
!endif

!if bad_file iswordof $error
  Lo sentimos pero no reconocemos <em>$wims_deposit</em>
  como copia de seguridad de una clase. Es posible que haya enviado un fichero
  incorrecto o que haya sido da�ado.
  !exit
!endif

!msg $error
