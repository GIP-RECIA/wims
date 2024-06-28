!set appletdir=java/jmol
!set applet_option=depict depictAction star $mark
!set applet_option=$applet_option nouseOclidcode noexportinchi noexportinchikey noexportinchiauxinfo nosearchinchiKey nouseopenchemlib nocontext

!if $show_hydrogen=yes
  !set applet_option=$applet_option hydrogens
!else
  !set applet_option=$applet_option nohydrogens
!endif
!if $keep_hydrogen=hetero
  !set applet_option=$applet_option removehsc
!else
  !if $keep_hydrogen=no
    !set applet_option=$applet_option removehs
  !else
    !set applet_option=$applet_option keephs
  !endif
!endif
!! prevent jsme for being loaded twice
!if $jsme_inserted!=yes
  <script src="$appletdir/jsme/jsme/jsme.nocache.js"></script>
  !set jsme_inserted=yes
!endif
<div id="jsme_container$i"></div>
<script>
  /*<![CDATA[*/
    var WIMSchemreply_$i;

    function jsmeOnLoad_$i(){
      jsmeApplet$i = new JSApplet.JSME("jsme_container$i", "$(xsize)px", "$(ysize)px",
      {"options" : "$applet_option",
      "atombgsize" : "0.5","bondbgsize" : "0.4"});
      $File
      //atom clicked will be highlighted
      jsmeApplet$i.setAtomMolecularAreaFontSize(11);
      jsmeApplet$i.setMolecularAreaScale(1.5);
      jsmeApplet$i.setMarkerMenuBackGroundColorPalette([{label:"",color:"#d3d3d3"}]);
      jsmeApplet$i.activateMarkerColor(1);
      jsmeApplet$i.setAction(105);
      jsmeApplet$i.setCallBack("AfterStructureModified", showEvent_$i);
      WIMSchemreply_$i = document.getElementById('WIMSchemreply$i');
    };
    function showEvent_$i(event) {
        WIMSchemreply_$i.value =  WIMSchemreply_$i.value + event.action + "," + event.atom + "," + event.bond + "," + event.molecule + ";";
    }
    function getMolfile$i() {
      !! jme cuts the smiles if it is too long so bad parenthesis
      var data = jsmeApplet$i.molFile();
		  data=data.split('\n');
		  data[0]=" ";
		  data=data.join('\n');
      WIMSchemreply_$i.value= WIMSchemreply_$i.value + "\n" + data;
    }
    // override jsmeOnLoad to load all jsmeApplets
    function jsmeOnLoad(){
      !for j=1 to $i
        jsmeOnLoad_$j();
      !next
    };
/*]]>*/
</script>
