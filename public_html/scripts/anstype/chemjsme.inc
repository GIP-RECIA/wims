!set ans_appletdir=java/jmol

!set applet_option=norbutton noquery noxbutton depict star
!set applet_option=$applet_option nouseOclidcode noexportinchi noexportinchikey noexportinchiauxinfo nosearchinchiKey nouseopenchemlib nocontext

!if $ans_tool_template iswordof 0 no
  !set applet_option=$applet_option nofgmenu
!endif
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

!set temp=!replace internal $\
$ by \n in $ans_molecule
!set File=$File var mol_rep ="$temp";jsmeApplet$i.readMolFile(mol_rep);
!set rep$i=<script src="$ans_appletdir/jsme/jsme/jsme.nocache.js"></script>\
  <script>\
  /*<![CDATA[*/\
  //this function will be called after the JavaScriptApplet code has been loaded.\
  function jsmeOnLoad() {\
    jsmeApplet$i = new JSApplet.JSME("jsme_container$i", "$(xsize)px", "$(ysize)px",\
    {"options" : "$applet_option"});$File\
    jsmeApplet$i.setMolecularAreaScale(1.5);\
    jsmeApplet$i.setAtomMolecularAreaFontSize(11);\
  };\
  /*]]>*/\
  </script>\
  <div id="jsme_container$i"></div>
