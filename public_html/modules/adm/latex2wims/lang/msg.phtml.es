<b>$wims_name_Error</b>.

!if fichier iswordof $error
 Debe cargar al menos un archivo de látex.
 !reset error
!endif

!if document iswordof $error
 Debe dar el nombre de un documento existente en
  su cuenta de Modtool.
 !reset error
!endif

!if principal iswordof $error
 Seleccione el archivo principal (debe ser un archivo .tex
  válido).
 !reset error
!endif

!if documentempty iswordof $error
  Primero debe crear un módulo de tipo documento en Modtool.
 !reset error
!endif

!msg $error
!reset error
