!set help_option=$wims_read_parm
!default help_option=single,atom,funct_gr,double,erasor,charge,drag,stereo,template
!set lang_=$lang
!if $lang_ notwordof fr en nl ca
  !set lang_=en
!endif
!set nb_help_=!itemcnt $help_option
!if $nb_help_==1
  !set ch_=!lookup $help_option in lang/chemdraw.$lang_
!else
  !set ch_=<ul>
  !for t_ in $help_option
    !set c_=!lookup $t_ in lang/chemdraw.$lang_
    !set ch_=$ch_\
    <li>$c_</li>
  !next
  !set ch_=$ch_</ul>
!endif

!read oef/special/tooltip.phtml $wims_name_help, class="bottom" style="width:400px;font-size:smaller",$ch_
