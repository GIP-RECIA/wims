<h3>Software empleado internamente: $help_conf</h3>

!goto $help_conf

:pari
PARI/GP es un programa de c�lculo te�rico de precisi�n arbitraria. Debido a
su gran velocidad, es la herramienta de c�lculo  ideal para muchas de las necesidades
de c�lculo  de WIMS. Muchos m�dulos lo utilizan, incluidos numerosos ejercicios de
�lgebra lineal. Si este programa no est� disponible gran parte del servidor
funcionar� de forma deficiente.

!goto end

:maxima
Maxima es un paquete de fuente abierta de �lgebra simb�lica. Se usa
principalmente cuando deben calcularse derivadas y/o integrales.
<p>
Debemos se�alar que la versi�n 5.6 (con GCL 2.4) de Maxima tiene un fallo
que impide que se compile bajo RedHat 7.*. Si se encuentra con problemas
de este tipo, descargue una copia de una versi�n anterior (la 5.4) desde
<a target="wims_external"
href="https://wims.univ-cotedazur.fr/download/other-packages/">https://wims.univ-cotedazur.fr/download/other-packages/</a>.
</p><p>
Versi�n recomendada: 5.4. (otras versiones pueden presentar problemas de
compatibilidad).</p>
!goto end

:yacas
<p>Yacas (Yet Another Computer Algebra System)
es un nuevo paquete de fuente abierta de �lgebra simb�lica. Debido a su
r�pido desarrollo es un paquete muy prometedor. En consecuencia es probable
que se use cada vez m�s en WIMS.
</p>
!goto end

:octave
Octave es un paquete de fuente abierta de an�lisis num�rico. Todav�a no se
usa en WIMS. En consecuencia puede saltarse su instalaci�n por ahora.
!goto end

:m2
Macaulay 2 es una potente aplicaci�n especializada en �lgebra conmutativa.
Por ahora �nicamente se utiliza en una pocas herramientas de c�lculo que
utilizan ventanas emergentes. Si no lo instala, estas pocas calculadoras
emergentes no funcionar�n, pero el resto del servidor no se ver� afectado.
!goto end

:gap
GAP es un potente programa de c�lculo para la teor�a de los grupos, en la
actualidad usado por dos herramientas de WIMS que computan grupos finitos.
Necesitar� GAP si quiere que funcionen estas dos herramientas.
!goto end

:povray
Povray es una aplicaci�n gr�fica de traza de rayos. La utilizan las herramientas
gr�ficas para renderizar superficies de alta calidad. En la actualidad la
incluyen la mayor parte de las distribuciones de Linux. Si le da problemas,
antes de nada compruebe que est� instalado en su sistema Linux e inst�lelo si es
necesario.
<p>
Versi�n recomendada: 3.0*-3.1* (otras versiones pueden presentar problemas de
compatibilidad).</p>
!goto end

:end

<p>
Puede hacer una b�squeda del t�rmino <span class="tt">$help_conf</span> en la p�gina
principal de WIMS para obtener la lista de m�dulos que hacen uso de este software.
</p>
