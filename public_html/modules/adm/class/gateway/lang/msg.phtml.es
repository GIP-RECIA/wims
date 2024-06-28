!if user_exists iswordof $error
!! see login_double in modules/adm/class/reguser/lang/msg.phtml.fr
  El identificador <span class="tt wims_login">
  !word 2 of $error
  </span> ya está en uso.
  !exit
!endif

!! see pass_error in modules/adm/class/reguser/lang/msg.phtml.fr
!if pass_discord=$error
 La contraseña reescrita no coincide con la primera. Registro
   por tanto, no se tiene en cuenta; Puedes intentarlo de nuevo.
 !exit
!endif
!! number limited to 99 (between x01 and x99 !)
!if $error iswordof class_full course_full level_full prog_full icourse_full
  !set tmp=!replace _full by in $error
  El número de
  !lowercase $(name_$tmp)
  está limitado a 99 en esta área.
  !reset tmp
  !exit
!endif

!if subclasslimit=$error
  !let n_=!char 4 to -1 of $job
  Ha alcanzado el número máximo de $(name_$n_) ($max_subclasses). No es posible crear más.
  !exit
!endif

!msg $error
!exit

en el módulo
jobs/addcourse.proc: error=illegal
jobs/backstruct.proc: error=empty
jobs/addcsvclass.proc : error=bad_filename (use message from csvdownload)
jobs/addcsvclass.proc : error=binary_upload (use message from csv download)
jobs/addcsvclass.proc : error=missing_key
jobs/addcsvclass.proc : error=baddata
jobs/modteacher.proc: error=bad_user
scripts/adduser.proc: error=bad_user
scripts/adduser.proc: error=user_deleted
scripts/adduser.proc: error=bad_definition
var.proc: error=bad_access
var.proc: error=unsecure
var.proc: error=bad_access

!! empty_data already in html/msg.phtml.$lang

jobs/class.proc: error=empty_data
jobs/course.proc: error=empty_data
jobs/icourse.proc: error=empty_data
jobs/level.proc: error=empty_data
jobs/addicourse.proc: error=empty_data
jobs/addlevel.proc: error=empty_data
jobs/addprog.proc: error=empty_data
scripts/adduser.proc: error=empty_data
jobs/prog.proc: error=empty_data

En scripts
gateway/addclass: error=bad_password
gateway/addcourse: error=bad_password
gateway/addicourse: error=bad_password
gateway/addicourse: error=bad_password
gateway/addlevel: error=bad_password
gateway/modclass: error=bad_password
gateway/modclass: error=bad_password
gateway/addprog: error=bad_password

gateway/addclass: error=not_supervisable
gateway/addcourse: error=not_supervisable

gateway/addcourse: error=addcourse_already

gateway/addicourse: error=not_supervisable
gateway/addlevel: error=not_supervisable
gateway/addprog: error=not_supervisable
gateway/modclass: error=not_supervisable
gateway/addcourse: error=not_supervisable

gateway/delclass: error=del_not_exist
gateway/delcourse: error=del_not_exist
gateway/dellevel: error=del_not_exist
gateway/delprog: error=del_not_exist
gateway/modclass: error=mod_not_exist

gateway/transfer: error=no_reccourse
