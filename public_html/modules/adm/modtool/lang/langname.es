
l_en=Ingl�s
l_fr=Franc�s
l_es=Espa�ol
l_it=Italiano
l_cn=Chino simplificado
l_tw=Chino traditional (big5)
l_de=Alem�n
l_nl=Holand�s
l_si=Eslovenio
l_ca=Catal�n
l_pt=Portugu�s

langname=
!for l in $langlist
  !if $(l_$l)!=$empty
    l=$(l_$l)
  !endif
  langname=!append item $l to $langname
!next l
