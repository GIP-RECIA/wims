!set wims_module_log=error: $error $wims_class

<b>$wims_name_Error</b>:

!if not_secure iswordof $error
  !if $code!=$empty
    Código secreto incorrecto.
  !else
    A este módulo sólo se puede acceder desde una estación de trabajo segura.
  !endif
  Acceso denegado.
  !exit
!endif

!if checkhost iswordof $error
 Su conexión actual no forma parte de las definidas como estaciones de
 trabajo seguras. Se trata probablemente de un error que puede hacerle perder
 el control de la clase. En consecuencia no se ha modificado la definición de
 estaciones de trabajo seguras.
 !exit
!endif

!if bad_file iswordof $error
 Lo sentimos pero no reconocemos <em>$wims_deposit</em>
 como copia de seguridad de una clase. Es posible que haya enviado un fichero
 incorrecto o que haya sido dañado.
 !exit
!endif

!if empty_file iswordof $error
 No encontramos recursos de clase en su copia de seguridad.
 <span class="tt wims_fname">$wims_deposit</span>.
 !exit
!endif

!if no_upload iswordof $error
 Los datos enviados han expirado. Acción fallida, por favor reinténtela.
 !exit
!endif

!if remote_sharing iswordof $error
 Una clase vecina comparte sus recursos. Mientras ella no deje de compartirlos,
 usted no puede negar a que siga compartiéndolos ni puede eliminarla de
 su lista de vecinas.
 !exit
!endif

!if share_dep iswordof $error
  Al compartir recursos es necesario respetar las dependencias: debe primero compartir
  !if sheet iswordof $error
    los ejercicios antes de compartir sus hojas de trabajo.
  !else
    !if exam iswordof $error
      los ejercicios y las hojas de trabajo antes de compartir los exámenes.
    !else
      !if livret iswordof $error
        los ejercicios y las hojas de trabajo antes de compartir el informe de competencias.
      !else
        !if userphoto iswordof $error
        las cuentas de los participantes antes de compartir las fotos individuales.
        !endif
      !endif
    !endif
  !endif
  !exit
!endif

!if stopshare_dep iswordof $error
  Al compartir recursos es necesario respetar las dependencias: debe dejar de compartir
  !if sheet iswordof $error
    los exámenes y el informe de competencias antes de las hojas de trabajo.
  !else
    !if exo iswordof $error
      las hojas de trabajo antes que los ejercicios.
    !else
      !if user iswordof $error
        las fotos individuales antes que las cuentas de los participantes.
      !endif
    !endif
  !endif
  !exit
!endif

!if not_neighbor iswordof $error
  Ha intentado realizar una operación con una clase que no es su vecina
  efectiva.
  <br>
  Recuerde que una clase es su vecina efectiva únicamente si se han declarado
  las vecindades mutuas A LA VEZ por usted y por la otra clase.
  !exit
!endif

!if localmirror iswordof $error
  No tiene sentido hacer una réplica de una clase en el mismo servidor.
  !exit
!endif

!if toobigfile iswordof $error
  El tamaño de su fichero es demasiado grande: el límite es de 12Kb.
  !exit
!endif

!if file_too_large iswordof $error
  <p>No ha sido posible archivar esta clase debido a su tamaño.
   Los archivos están limitados a <strong>$max_arch_size Kb</strong>.</p>
  <p>Le invitamos a realizar una copia de seguridad selectiva escogiendo solo algunos datos.</p>
  !if $format!=zip
    <p>NB: incluso si el navegador permite descargar el archivo generado, puede ser inutilizable.</p>
  !endif
  !exit
!endif

!if emptycloningpwd iswordof $error
  You must put a password with at least $passwd_min characters and at most
  $passwd_max characters amongs the characters <span class="tt">$char_passwd</span>
  !exit
!endif

!if expdate_sharing iswordof $error
 !let date=!word 2 of $error
 vous ne pouvez pas définir une date d'expiration après la date d'expiration d'une classe avec laquelle vous partagez des ressources.
 La date d'expiration de votre classe doit être située avant le
 !read date.phtml $date,notime
 !exit
!endif

!if sharing_expdate iswordof $error
 !let date=!word 2 of $error
 vous ne pouvez pas partager des ressources avec une classe dont la date d'expiration est inférieure à la date d'expiration de votre classe.
 Si vous voulez partager les ressources de cette classe, la date d'expiration de votre classe doit être située avant le
 !read date.phtml $date,notime
 !exit
!endif

!if expdate_sharable iswordof $error
 !let date=!word 2 of $error
 vous ne pouvez pas définir une date d'expiration précédent la date d'expiration d'une classe que vous autorisez à partager vos ressources.
 La date d'expiration de votre classe doit être située après le
 !read date.phtml $date,notime
 !exit
!endif

!if sharable_expdate iswordof $error
 !let date=!word 2 of $error
 vous ne pouvez pas proposer un partage de ressources avec une classe dont la date d'expiration est supérieure à la date d'expiration de votre classe.
 Si vous voulez proposer de partager vos ressources à cette classe, la date d'expiration de votre classe doit être située après le
 !read date.phtml $date,notime
 !exit
!endif

!msg $error
