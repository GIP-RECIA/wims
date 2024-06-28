# Model for an slib
The first part (before :proc) is for the documentation.

You can also put the documentation part (everything except ``slib_author'')
in multiple files, one per ``lang'' in ``scripts/help/lang/slib/...''
if you want it to be translated.

:
!if $wims_read_parm!=slib_header
  !goto proc
!endif

slib_author=Firstname, Lastname
slib_parms=3\
default, explanation\
default, explanation\
default, explanation

slib_example=example1\
example2

slib_require=
slib_out= result of the slib
slib_comment= more explanation

!exit

:proc

!distribute items $wims_read_parm into slib_xx, slib_yy, slib_zz, and so on

...

calculation

slib_out=


:The result must be in the variable ``slib_out''.

Please prefix all the variables names by ``slib_''.
