
!set errorhead=<b>Error.</b>

!if forum_not_exist = $error
  $errorhead Ha solicitado un foro que no existe.
  Por favor, compruebe su solicitud.
  !set fatal=yes
  !exit
!endif

!if no_register = $error
  $errorhead Este foro no permite la inscripci�n de usuarios
  en l�nea. Por favor,
  !mailurl $mb_email pida a su propietario\
$mb_title
  que le d� de alta, si quiere participar.
  !exit
!endif

!msg $error
