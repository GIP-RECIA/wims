!goto $wims_read_parm

:dellevel

<div class="wims_msg warning">
<span class="wims_warning">$wims_name_warning</span>. �Esta operaci�n es irreversible!
�<span class="wims_warning">TODO</span>
lo que hay en este nivel ser� borrado <span class="wims_warning">DEFINITIVAMENTE</span>:
clases, programas, cursos, cuentas de alumnos, actividades, notas!
</div><p>
�Est� seguro de querer borrar este nivel?
</p>

!exit

:delclass

<div class="wims_msg warning"><span class="wims_warning">$wims_name_warning</span>. �Esta operaci�n es irreversible!
�y <span class="wims_warning">TODO</span>
lo que hay en esta clase ser� borrado <span class="wims_warning">DEFINITIVAMENTE</span>:
cursos, cuentas de alumnos, actividades, notas!
</div><p>
�Est� seguro de querer borrar esta clase?
</p>
!exit

:delprog
<div class="wims_msg warning"><span class="wims_warning">AVISO</span>. �Esta operaci�n es irreversible!
�<span class="wims_warning">TODO</span>
lo que hay en este programa ser� borrado <span class="wims_warning">DEFINITIVAMENTE</span>:
cursos, actividades, notas!
</div><p>
�Est� seguro de que quiere borrar este programa?
</p>
!exit

:delcourse
<div class="wims_msg warning"><span class="wims_warning">AVISO</span>. �Esta operaci�n es irreversible!
�<span class="wims_warning">TODO</span>
lo que hay en este curso ser� borrado <span class="wims_warning">DEFINITIVAMENTE</span>:
cuentas de alumnos, actividades, notas!
</div><p>
�Est� seguro de querer borrar este curso?
</p>
!exit

:delteacher
<div class="wims_msg warning"><span class="wims_warning">AVISO</span>.
�Esta operaci�n es irreversible!
</div><p>
�Est� usted seguro de que queire borrar la cuenta de profesor <span class="tt">$del</span>
($user_firstname $user_lastname)?
</p>
!exit

:deltest
<div class="wims_msg warning">
<span class="wims_warning">AVISO</span>. �Esta operaci�n es irreversible!
�<span class="wims_warning">TODO</span>
lo que hay en esta zona de pruebas ser� borrado <span class="wims_warning">DEFINITIVAMENTE</span>!
</div><p>
�Est� seguro de que quiere borrar la zona de pruebas?
</p>
!exit

:progshare
Compartir recursos de otro programa

Su programa compartir� el conjunto de recursos educativos
(ejercicios, hojas, ex�menes, documentos, cuestionarios) con el programa
<em>$other_description</em> del nivel <em>$other_level</em>. Eso significa
que cualquier cambio en los recursos de uno de los dos programas repercute
autom�ticamente en el otro programa.

<div class="wims_msg warning"><span class="wims_warning"> $wims_name_warning</span>. Esta operaci�n experimental borrar� los recursos
existente en su programa y es <span class="wims_warning">IRREVERSIBLE</span>!
No podr� dejar de compartir y compartir programas
�Los recursos no deben borrarse!
</div>
<p> �Est� seguro de que desea continuar?</p>
!exit
