!set basedir0=scripts/data/glossary

!if $gotcntG > 0
  !set gotcnt=$gotcntG
  !set gotm=$gotmG
  !set gotd=$gotdG
  !set gott=$gottG
!endif

!default gotcntG=0
!if $[$gotcntG + $gotcnt]=0
  <p>
  !href module=adm/tool/glossary $wims_name_Glossary
  </p>
!endif
!read adm/levelname.phtml
<ul class="wims_home_result_list wims_glossary">
!for i=1 to $gotcnt
  !set m_=!line $i of $gotm
  !set t_=!line $i of $gott
  !set d_=!line $i of $gotd
  !set i_=!line $i of $gotiG
  !set n_=!line $i of $gotm_
  !if $i_=$n_ or $i_ issametext
    !set i_=$d_
  !endif
  !if $i_=$empty
    !set i_=!lookup $n_ in wimshome/public_html/$basedir/information.$search_lang
  !endif
  !set gl_level=!defof gl_level in wimshome/public_html/$basedir0/$m_
  !set gl_lang=!replace internal / by , in $m_
  !set gl_lang=$(gl_lang[3])
  <li class="wims_home_result_list">
  !if  $gl_lang!=$search_lang
    <img src="gifs/$gl_lang.gif" alt="$gl_lang.gif">
  !endif
  !href module=adm/tool/glossary&job=main&cmd=new&special_parm=$m_ $t_
  !if $gl_level!= $empty
    !for lev in $gl_level
      !set lev0=!word 1 of $lev
      - $(name_wims_level_$lev0)
      !word 2 to -1 of $lev
    !next
    $i_
  !else
    !!.
  !endif
  </li>
!next i
</ul>
