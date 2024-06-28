
!if $wims_read_parm=$empty
 !exit
!endif

!goto $wims_read_parm

:data
Cada línea contiene un código SMILES y el nombre del archivo sin extensión,
(alfanumérico, sin espacio, sin acento).
Por ejemplo
<pre>
CCO,ethanol
CO,methanol
CCCO,toto
</pre>
Ir a 
<a target="wims_external" href="http://opensmiles.org">opensmiles.org
</a> para encontrar la sintaxis del código SMILES.

!exit
:option_svg
<pre>
 u no colorear el átomo del elemento específico
     Use esta opción para producir un diagrama en blanco y negro.
 U no usar el color especificado internamente
     p.ej. color de átomo leído desde cml o generado por código interno.
 b fondo negro
     El predeterminado es blanco. Los colores atómicos funcionan con ambos.
 C no dibujar el terminal C (y el H adjunto) explícitamente
     El valor predeterminado es dibujar explícitamente todos los heteroátomos y la terminal C,
     junto con sus hidrógenos adjuntos.
 a dibujar todos los átomos de carbono
     Entonces, el propano se mostraría como H3C-CH2-CH3
 d no mostrar el nombre de la molécula

</pre>
!exit
:option_dim
Especifique si desea que se creen coordenadas 3D (x, y, z) o solo coordenadas 2D (x, y).
!exit

:save
Si marca esta casilla, especifique un módulo de la lista, los archivos de salida se almacenarán directamente
en el directorio <span class="tt fname">data</span> de ese módulo.
Luego, podrá utilizarlos en los ejercicios.
Los modelos preparados están en construcción.
No hay control en el nombre del archivo (si ya existe un archivo con un nombre idéntico, se reemplazará sin advertencia).
!exit
