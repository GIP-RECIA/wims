!goto $wims_read_parm

:dellevel

<div class="wims_msg warning">
<span class="wims_warning">$wims_name_warning</span>. ¡Esta operación es irreversible!
¡<span class="wims_warning">TODO</span>
lo que hay en este nivel será borrado <span class="wims_warning">DEFINITIVAMENTE</span>:
clases, programas, cursos, cuentas de alumnos, actividades, notas!
</div><p>
¿Está seguro de querer borrar este nivel?
</p>

!exit

:delclass

<div class="wims_msg warning"><span class="wims_warning">$wims_name_warning</span>. ¡Esta operación es irreversible!
¡y <span class="wims_warning">TODO</span>
lo que hay en esta clase será borrado <span class="wims_warning">DEFINITIVAMENTE</span>:
cursos, cuentas de alumnos, actividades, notas!
</div><p>
¿Está seguro de querer borrar esta clase?
</p>
!exit

:delprog
<div class="wims_msg warning"><span class="wims_warning">AVISO</span>. ¡Esta operación es irreversible!
¡<span class="wims_warning">TODO</span>
lo que hay en este programa será borrado <span class="wims_warning">DEFINITIVAMENTE</span>:
cursos, actividades, notas!
</div><p>
¿Está seguro de que quiere borrar este programa?
</p>
!exit

:delcourse
<div class="wims_msg warning"><span class="wims_warning">AVISO</span>. ¡Esta operación es irreversible!
¡<span class="wims_warning">TODO</span>
lo que hay en este curso será borrado <span class="wims_warning">DEFINITIVAMENTE</span>:
cuentas de alumnos, actividades, notas!
</div><p>
¿Está seguro de querer borrar este curso?
</p>
!exit

:delteacher
<div class="wims_msg warning"><span class="wims_warning">AVISO</span>.
¡Esta operación es irreversible!
</div><p>
¿Está usted seguro de que queire borrar la cuenta de profesor <span class="tt">$del</span>
($user_firstname $user_lastname)?
</p>
!exit

:deltest
<div class="wims_msg warning">
<span class="wims_warning">AVISO</span>. ¡Esta operación es irreversible!
¡<span class="wims_warning">TODO</span>
lo que hay en esta zona de pruebas será borrado <span class="wims_warning">DEFINITIVAMENTE</span>!
</div><p>
¿Está seguro de que quiere borrar la zona de pruebas?
</p>
!exit

:progshare
Compartir recursos de otro programa

Su programa compartirá el conjunto de recursos educativos
(ejercicios, hojas, exámenes, documentos, cuestionarios) con el programa
<em>$other_description</em> del nivel <em>$other_level</em>. Eso significa
que cualquier cambio en los recursos de uno de los dos programas repercute
automáticamente en el otro programa.

<div class="wims_msg warning"><span class="wims_warning"> $wims_name_warning</span>. Esta operación experimental borrará los recursos
existente en su programa y es <span class="wims_warning">IRREVERSIBLE</span>!
No podrá dejar de compartir y compartir programas
¡Los recursos no deben borrarse!
</div>
<p> ¿Está seguro de que desea continuar?</p>
!exit
