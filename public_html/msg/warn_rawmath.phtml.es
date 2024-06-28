
!set wims_warn_header=<p><span class="wims_warning">$wims_name_warning.</span>

!if ambiguous iswordof $wims_warn_rawmath
 $wims_warn_header
 Ha introducido una fórmula ambigua, cuya interpretación
 por WIMS puede diferir de lo que quiere decir. Por favor,
 compruebe la fórmula.
 <p>
 !set wims_warn_rmremark=yes
!endif

!if unknown iswordof $wims_warn_rawmath
 $wims_warn_header
 WIMS ha detectado un nombre de función o variable no reconocible
 <span class="bold tt wims_warning">$wims_warn_rawmath_parm</span>
 en su fórmula. ¿Un error de escritura?
 </p>
 !set wims_warn_rmremark=yes
!endif

!if flatpower iswordof $wims_warn_rawmath
 <p><span class="wims_warning">Anotación.</span>
 Si quiere introducir
 <span class="wims_emph">x<sup>2</sup></span>?
 Escriba
 <span class="tt">x^2</span> ou <span class="tt">x**2</span>.
 </p>
!endif

!if badprec iswordof $wims_warn_rawmath
 $wims_warn_header
 ¡
 ``<span class="tt">x^1/2</span>''
 significa
 <span class="wims_emph">x/2</span>!
 Por favor, escriba
 ``<span class="tt">x^(1/2)</span>'' pour <span class="wims_emph">x<sup>1/2</sup></span>.
 </p>
!endif

!if unmatched_parentheses iswordof $wims_warn_rawmath
 $wims_warn_header
 hemos detectado paréntesis no balanceados en su fórmula. Por favor,
 verifíquelo.
 </p>
!endif

!if $wims_warn_rmremark=yes
<p>
 Use siempre ``<span class="tt">*</span>'' para la multiplicación, y
 encierre siempre los argumentos de las funciones entre
 paréntesis.
 <span class="small">Para expertos. Si no quiere que WIMS interprete su expresión,
  comiéncela con la cadena
``<span class="tt">1-1+</span>''.</span>
 </p>
!endif
