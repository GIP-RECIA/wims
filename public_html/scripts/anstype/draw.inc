!for u=1 to $r_cnt
  !for v=1 to $g_cnt1
    v_=$(glist[$v;1])
    l_tmp=$(glist[$v;2..-1])
    !if $type iswordof curvedarrows curvedarrows2
      !!l_tmp=$(l_tmp[1,2,5,6,3,4])
    !endif
    !!check the first point
    !if $type iswordof $listtype1 $listtype3
      ecart1= $[sqrt(($(l_tmp[1]) - ($(rlist[$u;1])))^2 + ($(l_tmp[2]) - ($(rlist[$u;2])))^2)]
      ecart2=0
      !if $type_cnt2>=4
        !!check the second point
        !ifval $ecart1 != 0 and $type iswordof $listtype3
          ecart1 = $[sqrt(($(l_tmp[1]) - ($(rlist[$u;3])))^2 + ($(l_tmp[2]) - ($(rlist[$u;4])))^2)]
          ecart2 = $[sqrt(($(l_tmp[3]) - ($(rlist[$u;1])))^2 + ($(l_tmp[4]) - ($(rlist[$u;2])))^2)]
        !else
          ecart2 = $[sqrt(($(l_tmp[3]) - ($(rlist[$u;3])))^2 + ($(l_tmp[4]) - ($(rlist[$u;4])))^2)]
        !endif
      !endif
      !if $type_cnt2=3
        ecart2 = $[abs($(rlist[$u;3]) - ($(l_tmp[3])))]
      !endif
      !if $type_cnt2=2
        ecart2=0
      !endif
      mean=$[max($ecart1,$ecart2)]
    !else (type is lines demilines)
      vectg=$[$(l_tmp[3])-($(l_tmp[1]))],$[$(l_tmp[4])-($(l_tmp[2]))]
      vectr=$[$(rlist[$u;3])-($(rlist[$u;1]))],$[$(rlist[$u;4])-($(rlist[$u;2]))]
      normg=!exec pari sqrt(norml2([$vectg]))
      mean=$[abs((($(vectg[1]))*$(vectr[2]) - ($(vectg[2]))*$(vectr[1]))/($normg))]
      sens=$[$(vectg[1])*($(vectr[1])) + ($(vectg[2]))*($(vectr[2]))]
      !! so far, mean only checks for parallelism of vectg and vectr
      !! need to verify the point (rlist_1,rlist_2) is on the line glist
      !! (compute distance between point (rlist_1,rlist_2) and line glist)
      vectk=$[$(rlist[$u;1])-($(l_tmp[1]))],$[$(rlist[$u;2])-($(l_tmp[2]))]
      sameline=$[abs((($(vectg[1]))*$(vectk[2]) - ($(vectg[2]))*$(vectk[1]))/($normg))]
      mean=$[$mean+$sameline]
    !endif
    !if NaN isin $mean or Inf isin $mean
      !!debug $mean
      !!goto badrep
    !endif
    !if $type iswordof demilines and $sens<=0
      !break
    !endif
    !if $mean<1/$precision
      goodrg=!append item $v_ to $goodrg
      goodrr=!append item $u to $goodrr
      !set parm3=!append line strokecolor green to $parm3
      !if $type iswordof curvedarrows curvedarrows2
        parm3=!append line $type green, $option$(rlist[$u;1,2,5,6,3,4]) to $parm3
      !else
        !if $type iswordof images math
          !set parm3=!append line centered to $parm3
          !set image=!replace internal $(type)_ by in $(rlist[$u;3])
          !if $type=images
             parm3=!append line copy $(rlist[$u;1,2]),-1,-1,-1,-1,$(images_list[$image]) to $parm3
          !else
            !set parm3=!append line strokecolor green\
              $type $(rlist[$u;1,2]),$(math_list[$image]) to $parm3
          !endif
        !else
          !if $type iswordof curvedarrows curvedarrows2
            parm3=!append line strokecolor green\
            $type $option$(l_tmp[1,2]),$($(type)_list[$(l_tmp[3])]) to $parm3
          !else
            parm3=!append line $type green, $option$(l_tmp[1..$type_cnt2]) to $parm3
          !endif
        !endif
      !endif
      !break
    !endif
  !next v
:next
!next u
