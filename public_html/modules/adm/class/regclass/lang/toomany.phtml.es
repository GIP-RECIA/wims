!set lang_exists=yes

<h1 class="wims_title">Lo sentimos</h1>
<p>
El n�mero de clases de este sitio <span class="wims_warning">$httpd_HTTP_HOST</span>
ha alcanzado el l�mite, y por tanto el acceso libre para la creaci�n de clases 
queda cerrado.</p>

<p>Te invitamos a probar uno de los otros servidores WIMS p�blicos algunos de los cuales encontrar� aqu�:
  <span class="menuitem">
    !set wims_ref_class=mirror
    !href module=adm%2Flight&+phtml=mirror.phtml.fr $wims_name_mirror
  </span>
</p>  
<p>
Si es realmente importante que pueda crear un clase, puede
!mailurl $wims_site_manager escribir al administrador del sitio\
WIMS@$httpd_HTTP_HOST creation of class
 pidi�ndole que cree manualmente una clase para usted.</p>

<p>
Tenga en cuenta que puede crear una clase en cualquier sitio WIMS
que lo acepte. Tambi�n tiene la posibilidad de
<a target="wims_external" href="http://ssourcesup.renater.fr/frs/?group_id=379">descargar el software WIMS</a>
e instalarlo en su sitio local.
</p>
