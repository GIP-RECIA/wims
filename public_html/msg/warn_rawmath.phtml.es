
!set wims_warn_header=<p><span class="wims_warning">$wims_name_warning.</span>

!if ambiguous iswordof $wims_warn_rawmath
 $wims_warn_header
 Ha introducido una f�rmula ambigua, cuya interpretaci�n
 por WIMS puede diferir de lo que quiere decir. Por favor,
 compruebe la f�rmula.
 <p>
 !set wims_warn_rmremark=yes
!endif

!if unknown iswordof $wims_warn_rawmath
 $wims_warn_header
 WIMS ha detectado un nombre de funci�n o variable no reconocible
 <span class="bold tt wims_warning">$wims_warn_rawmath_parm</span>
 en su f�rmula. �Un error de escritura?
 </p>
 !set wims_warn_rmremark=yes
!endif

!if flatpower iswordof $wims_warn_rawmath
 <p><span class="wims_warning">Anotaci�n.</span>
 Si quiere introducir
 <span class="wims_emph">x<sup>2</sup></span>?
 Escriba
 <span class="tt">x^2</span> ou <span class="tt">x**2</span>.
 </p>
!endif

!if badprec iswordof $wims_warn_rawmath
 $wims_warn_header
 �
 ``<span class="tt">x^1/2</span>''
 significa
 <span class="wims_emph">x/2</span>!
 Por favor, escriba
 ``<span class="tt">x^(1/2)</span>'' pour <span class="wims_emph">x<sup>1/2</sup></span>.
 </p>
!endif

!if unmatched_parentheses iswordof $wims_warn_rawmath
 $wims_warn_header
 hemos detectado par�ntesis no balanceados en su f�rmula. Por favor,
 verif�quelo.
 </p>
!endif

!if $wims_warn_rmremark=yes
<p>
 Use siempre ``<span class="tt">*</span>'' para la multiplicaci�n, y
 encierre siempre los argumentos de las funciones entre
 par�ntesis.
 <span class="small">Para expertos. Si no quiere que WIMS interprete su expresi�n,
  comi�ncela con la cadena
``<span class="tt">1-1+</span>''.</span>
 </p>
!endif
