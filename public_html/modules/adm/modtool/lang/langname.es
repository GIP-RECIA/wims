
l_en=Inglés
l_fr=Francés
l_es=Español
l_it=Italiano
l_cn=Chino simplificado
l_tw=Chino traditional (big5)
l_de=Alemán
l_nl=Holandés
l_si=Eslovenio
l_ca=Catalán
l_pt=Portugués

langname=
!for l in $langlist
  !if $(l_$l)!=$empty
    l=$(l_$l)
  !endif
  langname=!append item $l to $langname
!next l
