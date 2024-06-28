!set lang_exists=yes

<h1 class="wims_title">Helaas</h1>
<p>
Het aantal klassen op deze WIMS-server <span class="wims_warning">$httpd_HTTP_HOST</span>
heeft zijn maximum reeds bereikt.
<br>
Hierdoor is het aanmaken van een nieuwe virtuele ruimte geweigerd.
</p>

<p>
  We invite you to try one of the other public WIMS servers
  some of which you will find here:
  <span class="menuitem">
    !set wims_ref_class=mirror
    !href module=adm%2Flight&+phtml=mirror.phtml.fr $wims_name_mirror
  </span>
</p>

<p>
U kunt een email sturen naar de
!mailurl $wims_site_manager site manager\
WIMS@$httpd_HTTP_HOST aanmaken van klassen en deze vragen om handmatig een klas voor U te maken.
</p>

U kunt natuurlijk op elke andere WIMS server, die U als docent accepteerd, een klas aanmaken.
<br>
Verder kun U de
<a target="wims_external" href="http://sourcesup.renater.fr/frs/?group_id=379">
WIMS software</a> downloaden en gewoon zelf een server installeren.
