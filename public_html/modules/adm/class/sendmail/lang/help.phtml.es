!if $special_parm!=$empty
 !goto $special_parm
!endif

:general
<p>
Pueden utilizar el m�todo de selecci�n y entrar al mismo tiempo nombres de logins.
El correo electr�nico se env�a al conjunto de los nombres seleccionados.
Si al mismo tiempo seleccionaron al filtro, el filtro se aplica a la lista
de los nombres seleccionados. Si no entran ninguna clave de acceso,
la lista de los logins utilizada es la lista de los participantes a la clase.
</p>

:filter
!read help/es/filter.phtml
