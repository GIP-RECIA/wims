!set ans_appletdir=java/jmol

!set applet_option=star depict
!set applet_option=$applet_option nouseOclidcode noexportinchi noexportinchikey noexportinchiauxinfo nosearchinchiKey nouseopenchemlib nocontext

!if $ans_show_valence iswordof 0 no
  !set applet_option=$applet_option noValenceState
!else
  !set applet_option=$applet_option ValenceState
!endif
!if $ans_show_hydrogen=yes
  !set applet_option=$applet_option hydrogens
!else
  !set applet_option=$applet_option nohydrogens
!endif
!if $ans_keep_hydrogen=hetero
  !set applet_option=$applet_option removehsc
!else
  !if $ans_keep_hydrogen=no
    !set applet_option=$applet_option removehs
  !else
    !set applet_option=$applet_option keephs
  !endif
!endif
!if $ans_reaction=yes
  !set applet_option=$applet_option reaction
!else
  !set applet_option=$applet_option noreaction
!endif
!set oef_indgood=#bdefa9
!set oef_indbad=#ffcecc
!set oef_indforget=#b5e0ee
!set oef_indneutral=#d3d3d3
!set palette=["$oef_indgood","$oef_indbad","$oef_indforget","$oef_indneutral"]

!if $presentgood=1
  !for x in $ans_atoms_test1
    ans_atoms_colors=!append item $x,3 to $ans_atoms_colors
    !!oubli
  !next
  !for x in $ans_atoms_test2
    ans_atoms_colors=!append item $x,2 to $ans_atoms_colors
    !!mauvais
  !next
  !for x in $ans_atoms_test3
    ans_atoms_colors=!append item $x,1 to $ans_atoms_colors
    !! bon
  !next
  !for x in $ans_bonds_test1
    ans_bonds_colors=!append item $x,3 to $ans_bonds_colors
  !next
  !for x in $ans_bonds_test2
    ans_bonds_colors=!append item $x,2 to $ans_bonds_colors
  !next
  !for x in $ans_bonds_test3
    ans_bonds_colors=!append item $x,1 to $ans_bonds_colors
  !next
!else
  ans_atoms_test=!append item $ans_atoms_test3 to $ans_atoms_test2
  !set ans_atoms_test=!nonempty items $ans_atoms_test
  !for x in $ans_atoms_test
    ans_atoms_colors=!append item $x,4 to $ans_atoms_colors
  !next
  ans_bonds_test=!append item $ans_bonds_test3 to $ans_bonds_test2
  !set ans_bonds_test=!nonempty items $ans_bonds_test
  !for x in $ans_bonds_test
    ans_bonds_colors=!append item $x,4 to $ans_bonds_colors
  !next
!endif

!set temp=!replace internal $\
$ by \n in $ans_molecule
!set File=var mol_rep ="$temp";jsmeApplet$i.readMolFile(mol_rep);

!! prevent jsme for being loaded twice
!if $jsme_inserted!=yes
  !set rep$i=<script src="$ans_appletdir/jsme/jsme/jsme.nocache.js"></script>
  !set jsme_inserted=yes
!endif

!! override jsmeOnLoad to load all jsmeApplets
!reset jsmeOnLoad
!for j=1 to $i
  !set jsmeOnLoad = $jsmeOnLoad jsmeOnLoad_$j();
!next

!set rep$i=$(rep$i)\
  <script>\
  /*<![CDATA[*/\
  //this function will be called after the JavaScriptApplet code has been loaded.\
  function jsmeOnLoad_$i(){\
    jsmeApplet$i = new JSApplet.JSME("jsme_container$i", "$(xsize)px", "$(ysize)px",\
    {"options" : "$applet_option",\
    "atombgsize":"0.5","bondbgsize":"0.4"});\
    $File\
    jsmeApplet$i.resetAtomColors(0);\
    jsmeApplet$i.resetBondColors(0);\
    jsmeApplet$i.setBackGroundColorPalette($palette);\
    jsmeApplet$i.setBondBackgroundColors(0, "$ans_bonds_colors");\
    jsmeApplet$i.setAtomBackgroundColors(0, "$ans_atoms_colors");\
    jsmeApplet$i.setMolecularAreaScale(1.5);\
    jsmeApplet$i.setAtomMolecularAreaFontSize(11);\
  };\
  function jsmeOnLoad(){$jsmeOnLoad};\
  /*]]>*/\
  </script>\
  <div id="jsme_container$i"></div>
