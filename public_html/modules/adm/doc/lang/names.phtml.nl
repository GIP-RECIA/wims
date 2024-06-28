!set lang_exists=yes
!if $wims_read_parm=$empty
 !exit
!endif

!goto $wims_read_parm

:file

<div>
  Aanwezige bestanden in dit document:
  <ul class="inline">
  !for f in $flist
    <li>
      !set wims_getfile_fname=$f
      !set wims_ref_class=text_icon file
      !getfile doc/$f $f
    </li>
  !next f
  </ul>
</div>

!form reply
<input type="hidden" name="job2" value="erase">
<fieldset>
  <legend>Verwijder een bestand:</legend>
  !formselect job2 list $flist
  <input type="submit" class="wims_warning" value="$wims_name_erase">
  </fieldset>
!formend

<p>
  Bestanden kunnen worden opgeroepen in een document door de variabele
  <span class="tt wims_code_variable">\filedir</span>.
  Bijvoorbeeld,
</p><p class="wimscenter">
  <code class="wims_address">&lt;a href="\filedir/$f1" download="$f1"&gt;$f1&lt;/a&gt;</code>
</p><p>
  geeft de link naar het bestand <a href="$m_filedir/$f1">$f1</a>.
  Er kan ook worden geschreven:
</p><p class="wimscenter">
  <span class="tt wims_address">&lt;img src="\filedir/myfile.jpg" alt="myfile"&gt;</span>
</p>
om het plaatje <span class="tt wims_fname">myfile.jpg</span> te verwerken in de pagina.
De bestanden zijn alleen beschikbaar voor dit document.
</p>
<div>
  Een nieuw commando <span class="tt wims_code_words">\href{}{}</span> is ge&iuml;ntroduceerd.
  Om een link naar een bestand aan te maken, is de onderstaande syntax afdoende:
  <p class="wimscenter">
    <span class="tt wims_code_words">\href{$f1}</span> of <span class="tt wims_code_words">\href{$f1}{lien}</span>.
  </p>
</div>
!exit

:readauth
Er moet toestemming van de
 !mailurl $wims_site_manager systeem beheerder
 van deze server zijn om document $doc openbaar te maken.
!exit

:erase1
 Alleen sitemanagers kunnen publieke documenten verwijderen.
 <p>
 Vraag
 !mailurl $wims_site_manager de sitemanager
 dit document te verwijderen.
 </p>
!exit

:erase2
<span class="wims_warning">WAARSCHUWING !!</span> Er is hier geen "undelete",
dus weg is weg&nbsp;!
<p>
Weet u zeker dat het document<span class="tt wims_fname">$tit</span>&nbsp; moet worden verwijderd ?
</p>
!exit

:public
 <b>Opmerking</b>. U moet wel toestemming vragen aan de
 !mailurl $wims_site_manager systeembeheerder/sitemanager\
 om dit WIMS
 document $doc publiek te maken.
!exit
