!if $wims_read_parm!=$empty
  !goto $wims_read_parm
!endif

!distribute lines M�todo de prueba. Escribir� solamente en el directorio prueba. \
La actualizaci�n del sistema Wims est� en curso. Ah� tienes el resumen de la escritura de salida actual. \
Es la versi�n p�blica m�s reciente del programa inform�tico. No necesitan actualizaci�n. �\
La versi�n p�blica m�s reciente es \
Ustedes son m�s reciente que la versi�n p�blica!  Ninguna actualizaci�n pendiente. \
Salida de la �ltima actualizaci�n \
resumen \
Pulsan aqu� \

into name_test,name_warning, name_mostrecent,name_mostrecent2,name_morerecent,\
  name_output,name_summary,name_click

!set name_sorry=!nosubst Afligido, la carga a distancia de la nueva versi�n de Wims a partir de <span class="tt"> $download</span> ha fallado. Intente m�s tarde, por favor.
!set name_summary=!nosubst Resumen de la �ltima actualizaci�n: (Enviar lo a $wims_maintainer en caso de error.)
!set name_detailed=!nosubst Salida detallada de la �ltima actualizaci�n: (Enviar lo a $wims_maintainer en caso de error.)
!set name_sorry2=!nosubst Afligido, el lugar de carga a distancia <span class="tt"> $download</span> es  inaccesible.
!set name_version=!nosubst Este sitio WIms est� actualmente en versi�n $wims_version.

!exit
:update
para cargar a distencia WIMS $pubversion de <span class="tt">$download</span> y poner al dia
el servidor. <span class="wims_warning">$wims_name_warning</span> Eso crear�
indisponibilidades moment�neas del servidor.
<em>No ponen al d�a si el servidor est� ocupado.</em>
<p>
<b>Note</b>. La actualizaci�n del servidor no modificar� sus recursos locales
(clases, ejercicios, documentos, m�dulos en desarrollo).
</p><p>
<span class="wims_warning">IMPORTANTE</span>. �Deben comprobar
los derechos sobre los ficheros despu�s de las actualizaciones!
</p>
