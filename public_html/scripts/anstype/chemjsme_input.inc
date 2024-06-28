!set appletdir=java/jmol

!if $tool_template iswordof 0 no
  !set applet_option=$applet_option nofgmenu
!endif
!if $show_valence iswordof 0 no
  !set applet_option=$applet_option noValenceState
!endif
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
!if $reaction=yes
  !set applet_option=$applet_option reaction
!else
  !set applet_option=$applet_option noreaction
!endif

!if $template notsametext
  !set templ=
  !set cnt_=0
  !set template=!words2items $template
  !set temp_cnt=!itemcnt $template
  !set template=!replace internal .mol by in $template
  !for s_=1 to $temp_cnt
    !if $(template[$s_]) notsametext cyclo
      !set temp_mol=!record 2 of data/$(template[$s_]).jme
      !if $temp_mol=
        !set temp_mol=!record 2 of data/chem/templ/$(template[$s_]).jme
      !endif
      !set temp_file=!replace internal / by _ in $(template[$s_])
      !!!readproc oef/togetfile.proc $temp_file new\
$temp_mol
      !increase cnt_
      !set templ=$templ\
        var jme_string_$cnt_ = "$temp_mol";
      !set temp_name=!replace internal / by , in $(template[$s_])

      !set temp_jsmetemplate=$temp_jsmetemplate\
        function jsmetemplate$cnt_() {\
          select_tpl("jsme_temp_$cnt_");\
          jsmeApplet$i.setTemplate(jme_string_$cnt_);\
        };\
        function showEvent_$cnt_(event) {\
          jme_string_$cnt_ =  jsme_temp_$cnt_.jmeFile();\
          jsmetemplate$cnt_();\
        }
      !set templ_button=$templ_button\
        <div class="inline jsme_tpl" id="jsme_temp_$cnt_" onclick="jsmetemplate$cnt_()"></div>
      !set templ_jsme=$templ_jsme\
        jsme_temp_$cnt_ = new JSApplet.JSME("jsme_temp_$cnt_", "100px", "100px", {\
		    "options":"depict depictAction star1",\
		    "atombgsize":"0.5", "bondbgsize":"0.4",\
		    "jme":jme_string_$cnt_});\
        jsme_temp_$cnt_.setAction(105);\
        jsme_temp_$cnt_.setCallBack("AfterStructureModified", showEvent_$cnt_);
    !endif
  !next
!endif
!if $mol!=$empty
  !set cnt=1
  !set temp=$mol
  !set temp=!replace internal ; by \n in $temp
    !set File=$File var mol$cnt ="$temp";jsmeApplet$i.readMolFile(mol$cnt);
  !goto end
!endif
!if $file!=
  !set File=
  !set file=!words2items $file
  !set cnt=1
  !for files in $file
    !set temp=!record 0 of $files
    !set file0=!replace internal / by , in $files
    !!!readproc oef/togetfile.proc $(file0[-1]) new\
$temp
    !set temp=!replace internal $\
$ by \n in $temp
    !set File=$File var mol$cnt ="$temp";jsmeApplet$i.readMolFile(mol$cnt);
    !increase cnt
  !next
!endif
:end
!!leave on one line !!
!set applet_option=$applet_option norbutton noquery zoom atommovebutton fullScreenIcon polarnitro nouseOclidcode noexportinchi noexportinchikey noexportinchiauxinfo nosearchinchiKey nouseopenchemlib noShowdragandDropIconindepictmode nocontext

<script src="$appletdir/jsme/jsme/jsme.nocache.js"></script>
<script>
/* Remove all visual css class indicating which template is selected */
function deselect_tpl(){
  var jsme_tpl_list = document.getElementsByClassName("jsme_tpl");
  var div_tpl;
  for(var i = 0; i < jsme_tpl_list.length; i++){
    div_tpl = jsme_tpl_list.item(i);
    if (div_tpl.classList.contains('tpl_selected')){
      div_tpl.classList.remove('tpl_selected')
    }
  }
}
/* Add a CSS class on tpl_id indicating it's the selected template */
function select_tpl(tpl_id){
  deselect_tpl();
  var div_tpl=document.getElementById(tpl_id);
  if (!div_tpl.classList.contains('tpl_selected')){
    div_tpl.classList.add('tpl_selected')
  }
}
</script>
<style>
  .jsme_tpl{
    border:2px solid #FFF;
    transition: border-color 0.5s ease-in-out;
    padding:2px;
  }
  .tpl_selected{
    border-color:$wims_ref_bgcolor;
  }
</style>
<div id="jsme_container$i"></div>
$templ_button
<script>
/*<![CDATA[*/
  //this function will be called after the JavaScriptApplet code has been loaded.
  $templ
  function jsmeOnLoad() {
    jsmeApplet$i = new JSApplet.JSME("jsme_container$i", "$(xsize)px", "$(ysize)px",
    {"options" : "$applet_option"});
    $File
    $templ_jsme
    jsmeApplet$i.setCallBack("AfterStructureModified", deselect_tpl);
    jsmeApplet$i.setMolecularAreaScale(1.5);
    jsmeApplet$i.setAtomMolecularAreaFontSize(11);
  };
  $temp_jsmetemplate
    function getMolfile$i() {
		var data = jsmeApplet$i.molFile();
		data=data.split('\n');
		data[0]=" ";
		data=data.join('\n');
!if svg iswordof $(replyoption$i)
    var rep_svg = jsmeApplet$i.getMolecularAreaGraphicsString();
    document.getElementById('WIMSchemreply$i').value = '[' + rep_svg + '],' + '\n' + 'formule brute\n' + data;
!else
  !!FIXME replace formule brute by the raw formula !
    document.getElementById("WIMSchemreply$i").value = 'formule brute\n' + data;
!endif
  }
/*]]>*/
</script>

!!FIXME desactiver le click droit ???
