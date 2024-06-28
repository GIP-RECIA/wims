!set wims_module_log=error: $error

<span class="wims_warning">$wims_name_Error</span>.

!if empty_data iswordof $error
  !distribute items $wims_name_title,$wims_name_Description,$wims_name_Type into tmp_title, tmp_description, tmp_category

  Quiere llenar el campo <span class="tt wims_warning">$(tmp_$(empty_data)</span>
  y verificar los otros campos.
  !exit
!endif

!if bad_case iswordof $error
  Ya existe un archivo cuyo nombre difiere solo en may�sculas y min�sculas.
  Cambie el nombre del archivo que desea cargar.
  !exit
!endif

!if bad_fname iswordof $error
  Nombre de fichero ilegal. Quiere elegir otro nombre para su fichero.
  !exit
!endif

!if binary_file iswordof $error
  Fichero binario prohibido.
  !exit
!endif

!if illegal_filedesc iswordof $error
  No pueden poner sino definiciones directas en
  <span class="tt wims_fname">filedesc</span>.
  !exit
!endif

!if badoriginal iswordof $error
  Este m�dulo no puede copiarse.
  !exit
!endif

!if clash iswordof $error
  El m�dulo de destino ya existe.
  !exit
!endif

!if fname_already iswordof $error
  Ya existe un archivo de nombre <span class="tt wims_fname">$fnewname</span>.
  Escoja otro nombre.
  !exit
!endif

!if badtarget iswordof $error
  La direcci�n de destino <span class="tt wims_address">$target</span> no es buena:
  demasiado larga, demasiado corta, incompleta o caracteres no admitidos.
  Detalle de los errores:
  <ul>
  !if incorrect_t1 iswordof $error
    <li>Zona incorrecta</li>
  !endif
  !if incorrect_t2 iswordof $error
    <li>Categor�a incorrecta</li>
  !endif
  !if incorrect_t3 iswordof $error
    <li>Nombre incorrecto</li>
  !endif
  !if incorrect_t4 iswordof $error
    <li>Idioma incorrecto</li>
  !endif
  !if incorrect_tlen iswordof $error
      <li>longitud incorrecta</li>
  !endif
  </ul>
  !exit
!endif

!if symlink iswordof $error
  Imposible de copiar el m�dulo fuente, ya que contiene v�nculos simb�licos.
  !exit
!endif

!if file_too_large iswordof $error
  No fue posible archivar el m�dulo debido a su tama�o.
  !exit
!endif

!msg $error
