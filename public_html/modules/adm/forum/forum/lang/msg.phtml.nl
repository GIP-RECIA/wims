
!set errorhead=<b>Fout.</b>

!if forum_not_exist = $error
  $errorhead Dit formum bestaat hier niet (meer).

  !set fatal=yes
  !exit
!endif

!if no_register = $error
  $errorhead Dit forum staat geen <em>online registratie</em> toe.
  Dus
  !mailurl $mb_email vraag de beheerder\
$mb_title
  als je wilt deelnemen.
  !exit
!endif

!msg $error
