!if $backdays>7
  !if $backdays>100
    <div class="wims_msg info">Su clase no ha sido respaldada por más de 100 días.</div>
  !else
    <p>Última copia de seguridad de su clase: hace $backdays días.</p>
  !endif
  !if backup iswordof $warn
    <div class="wims_msg warning"><strong class="wims_warning">$wims_name_warning</strong>.
      <br>
      ¡Es responsabilidad de los profesores hacer copias de seguridad de sus recursos
      pédagógicos&nbsp;! No se fíe de la copia de seguridad del servidor para
      recuperar su trabajo perdido. Además, las clases virtuales que no se
      respaldan regularmente serán consideradas por el software como
      inactivas y sin importancia, y pueden borrarse en cualquier
      momento para dejar espacio a otras.
  !else
    <div class="wims_msg info">¡Protéjase contra los incidentes del servidor&nbsp;!
  !endif
  !href cmd=reply&job=arch Haga una copia de seguridad de la clase
  regularmente.
  </div>
!endif

!if creation iswordof $warn
 <div class="wims_msg warning"><strong class="wims_warning">$wims_name_warning</strong>. ¡Su clase virtual es demasiado antigua&nbsp;! Ya
 tiene $creatdays días.
 </div><p>
 Se recomienda encarecidamente reconstruir una nueva estructura de clase virtual
a principios de cada nuevo año escolar. Continuar utilizando una clase virtual antigua
durante años conducirá inexorablemente a un desbordamiento de los ficheros
de registro y la cuota de espacio disco, lo que corre el riesgo de bloquear
el acceso a su clase en un momento crucial.
 </p>
 !if $class_type notin 13
  <p>
  Aquí tiene cómo reconstruir su clase virtual sin rehacer sus recursos
  pedagógicos.
  </p>
  <ol>
  <li>
  !href cmd=reply&job=arch Hacer una copia de seguridad
  de su clase al final de año escolar.
  </li><li>
  <a href="$wims_ref_name?lang=$lang&module=adm/class/regclass">Crear</a>
  una nueva clase virtual (o grupo de clase o pórtico de
  establecimiento) a principios del año escolar siguiente.
  </li><li>Restaurar los recursos pedagógicos (ejercicios, hojas, exámenes,
documentos) que usted guardó en la nueva clase.
  (Sin restaurar las cuentas de estudiantes y las actividades expiradas.)
  </li></ol>
 !else
  <p>
  Por favor informe al administrador del grupo de clases a cual
su clase pertenece.
  </p><p>
  Usted puede
  !href cmd=reply&job=arch hacer una copia de seguridad de
  los recursos pedagógicos de su clase actual y luego restaurarlos
  en la nueva.
  </p>
 !endif
!endif

!exit

!!if $warn=$empty
 !set job=list
 !changeto list.phtml
!!else
  <div class="wimscenter">
 !href cmd=reply&job=list Continuar con el mantenimiento de la clase.
 </div>
!endif



