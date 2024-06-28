!!INDEX
!let module_translator=
!let module_translator_address=
!let module_title=Voorkeursinstellingen voor WIMS
!let module_description=instellingen voor wims
!let module_language=nl
!!INDEXEND

!set tip=Firefox/Safari ondersteunen zonder problemen wiskunde typesetting d.m.v. Mathml.<br>\
  Voor alle andere browsers wordt hiervoor automatisch de  javascript MathJaX bibliotheek geladen.<br>\
  Gebruik bij problemen met wiskunde typesetting altijd Firefox.

!read proc/useropts.proc

!header

<p>Hier kun je enkele instellingen voor WIMS vastzetten

<div id="widget_useropts">
  <ul>
    <li><a href="#formula">Wiskunde formules</a></li>
    !if $wims_user=$empty
      <li><a href="#language_selector">Taal</a></li>
    !endif
    <li><a href="#accessibility">Toegankelijkheid</a></li>
  </ul>

  !if $wims_user=$empty
    <div id="language_selector">
      <h2>Taal</h2>
      <p>
        Kies een taal :
        !read themes/_widgets/language_selector.phtml
      </p>
    </div>
  !endif

  <div id="formula">
    <h2>Wiskunde formules</h2>
    <p>
      Er kan worden gekozen tussen 2 types: plaatjes of MathML.
    </p>
    !if $texalign=2
      <p>De server is nu ingesteld voor MathML. </p>
    !endif
    Enkele voorbeelden:
    <ul>
      <li>
        Griekse letters:
        <pre>
          !insmath alpha != pi
        </pre>
      </li>
      <li>
        Wiskundige formules
        !let ins_align=middle
        !! we need to force dynamic insertion
        !set pw=2
        <pre>
          !insmath x_{1,2} = \frac{-b \pm \sqrt{b^{$pw} - 4a c}}{2a}
        </pre>
      </li>
      <li>:
        <pre>
          !insmath | a + b | <= epsilon + 123.45
        </pre>
      </li>
    </ul>

    !if $texalign=2
      <p>
        Als de formules niet correct worden getoond, stap dan over
        op een andere browser (zoals Firefox) of gebruik -in het uiterste geval- "wiskunde met plaatjes".
      </p>
      <h3>Weergavemodus</h3>
      <p>
        Op dit moment MathML
        !set wims_ref_class=wims_button
        !href cmd=resume&useropts=$(arg)0$font gebruik wiskunde met plaatjes
      </p>
      <h3 id="formula_options">Opties voor MathML :</h3>
      <p>Inzoomen d.m.v. muisklik op een formule</p>
      !set wims_ref_class=wims_button
      !if $useropts!=$texsize$(texalign)1$font
        Inzoomen is  <span class="disabled">gedeactiveerd</span>.
        !href cmd=resume&useropts=$texsize$(texalign)1$font#formula_options activeren
        <span class="wims_button disabled">deactiveren</span>
      !else
        Le zoom est <span class="oef_indgood success">activeren</span>.
        <span class="wims_button disabled">activeren</span>
        !href cmd=resume&useropts=$texsize$(texalign)0$font#formula_options deactiveren
      !endif

      <h3>Browsers met ingebouwde MathML ondersteuning</h3>
      $tip
    !else
      <p>
        Op dit moment <strong>wiskunde met plaatjes</strong>.<br>
        Met een geschikte browser kan ook MathML worden gebruikt.
      </p>
      <h3>Weergavemodus</h3>
      <p>
        Op dit moment "wiskunde met plaatjes"
        !set arg=!nospace $texsize 2
        !set wims_ref_class=wims_button
        !href cmd=resume&useropts=$(arg)0$font Gebruik MathML
      </p>
      <h3>Opties voor "wiskunde met plaatjes"</h3>
      <ul><li>
        Grootte van de wiskundige symbolen en formules.
        !let ts1=!eval $texsize-1
        !let ts2=!eval $texsize+1
        !if $ts1<1
          !let ts1=1
        !endif
        !if $ts2>9
          !let ts2=9
        !endif
        !set wims_ref_class=wims_button
        !href cmd=resume&useropts=$ts1$texalign$zoom$font#formula <img src="gifs/doc/dgauche.gif" style="width:1em">
        !set wims_ref_class=wims_button
        !href cmd=resume&useropts=$[$wims_texbasesize-1]$texalign$zoom$font#formula Normal
        !set wims_ref_class=wims_button
        !href cmd=resume&useropts=$ts2$texalign$zoom$font#formula <img src="gifs/doc/ddroite.gif" style="width:1em">
      </li><li>
        Positie van de formules. Als de uitdrukking
        !insmath (x+y)/(x^$pw + y^2)
        !if $texalign=1
          te hoog is ten opzichte van de tekst,
          !set wims_ref_class=wims_button
          !href cmd=resume&useropts=$(texsize)0$zoom$font klik hier om te verlagen.
        !else
          te laag is ten opzichte van de tekst,
          !set wims_ref_class=wims_button
          !href cmd=resume&useropts=$(texsize)1$zoom$font klik hier om te verhogen.
        !endif
      </li></ul>
    !endif
  </div>

  <div id="accessibility">
    <h2>Toegankelijkheid</h2>

    <p>De ruimte tussen de letters kan worden veranderd.
      !if $useropts=$(texsize)$texalign$(zoom)1
        !set secondary1=wims_button disabled
        !set secondary2=wims_button
      !else
        !set secondary2=wims_button disabled
        !set secondary1=wims_button
      !endif
      !set wims_ref_class=$secondary2
      !href cmd=resume&useropts=$(texsize)$texalign$(zoom)0 Normal

      !set wims_ref_class=$secondary1
      !href cmd=resume&useropts=$(texsize)$texalign$(zoom)1 Vergroot
    </p>
    <p>Meer ruimte tussen de letters kan -in sommige gevallen- beter leesbare tekst opleveren</p>
  </div>
</div>
!if $jquery_defined=yes
  !read adm/tabscript useropts
!endif

<p class="spacer">
  !if $wims_user=$empty
    Als alles naar wens is ingesteld, maak dan van
    !set wims_ref_class=wims_button
    <a href="$wims_ref_name?lang=$lang&+useropts=$texsize$texalign$zoom$font" title="WIMS">
      deze link</a>
     een bookmark, zodat de instellingen worden bewaard.
  !else
   Deze instellingen worden bewaard voor een volgend bezoek aan de klassen.
  !endif
</p>

!tail
