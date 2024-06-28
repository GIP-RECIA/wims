
!if $wims_read_parm=$empty
 !exit
!endif

!goto $wims_read_parm

:data
Cada l�nea contiene un c�digo SMILES y el nombre del archivo sin extensi�n,
(alfanum�rico, sin espacio, sin acento).
Por ejemplo
<pre>
CCO,ethanol
CO,methanol
CCCO,toto
</pre>
Ir a 
<a target="wims_external" href="http://opensmiles.org">opensmiles.org
</a> para encontrar la sintaxis del c�digo SMILES.

!exit
:option_svg
<pre>
 u no colorear el �tomo del elemento espec�fico
     Use esta opci�n para producir un diagrama en blanco y negro.
 U no usar el color especificado internamente
     p.ej. color de �tomo le�do desde cml o generado por c�digo interno.
 b fondo negro
     El predeterminado es blanco. Los colores at�micos funcionan con ambos.
 C no dibujar el terminal C (y el H adjunto) expl�citamente
     El valor predeterminado es dibujar expl�citamente todos los hetero�tomos y la terminal C,
     junto con sus hidr�genos adjuntos.
 a dibujar todos los �tomos de carbono
     Entonces, el propano se mostrar�a como H3C-CH2-CH3
 d no mostrar el nombre de la mol�cula

</pre>
!exit
:option_dim
Especifique si desea que se creen coordenadas 3D (x, y, z) o solo coordenadas 2D (x, y).
!exit

:save
Si marca esta casilla, especifique un m�dulo de la lista, los archivos de salida se almacenar�n directamente
en el directorio <span class="tt fname">data</span> de ese m�dulo.
Luego, podr� utilizarlos en los ejercicios.
Los modelos preparados est�n en construcci�n.
No hay control en el nombre del archivo (si ya existe un archivo con un nombre id�ntico, se reemplazar� sin advertencia).
!exit
