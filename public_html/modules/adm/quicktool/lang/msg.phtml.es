!!@# translate between !!@# et !!#@
!if nom_fichier iswordof $error
  <span class="wims_warning">
!!@#
Su nombre de archivo no es válido, no debe haber ningún
  <span class="tt">..</span> ni <span class="tt"> / </span> en los nombres del archivo.
!!#@
</span>
  !exit
!endif
!if bad_data iswordof $error
!!@#
<span class="wims_warning">$wims_name_warning</span>.
No pude evaluar los valores que envió. ¿Error tipográfico?
!!#@
  !exit
!endif

!if $error!=$empty
  !if target iswordof error
    <span class="wims_warning">
!!@#
Elija el módulo.
!!#@
</span>
    !exit
  !endif
<span class="wims_warning">
!!@#
No olvide completar los campos obligatorios marcados con *.
!!#@
</span>
!endif
!if type_exo iswordof $error or file iswordof $error
!!@#
En particular:
!!#@
<dl>
!if type_exo iswordof $error
 <dt>
!!@#
Debe elegir el tipo de QCM.
!!#@
 </dt>
!endif

!if file iswordof $error
  <dt>
!!@#
Este ejercicio depende de los datos que debes poner en un archivo en el formato indicado
en la ayuda. De lo contrario, no funcionará. En este paso, debes indicar el
 nombre que le vas a dar a este archivo.
!!#@
</dt>
!endif
</dl>
!endif
!if oefempty iswordof $error and $transfert=yes
!!@#
Primero debe crear un módulo de ejercicio OEF en su cuenta de Modtool
!!#@
!endif
!exit


!msg $error
