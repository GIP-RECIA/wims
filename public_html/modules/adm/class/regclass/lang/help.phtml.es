!set lang_exists=yes
!goto $wims_read_parm

:1
<ul> <li> Se proporciona una <b> clase individual </b> 
para la gesti�n de un grupo de estudiantes por parte de un profesor.
  </li>
  <li> Una <b> agrupaci�n de clases </b> permite a 
  los profesores intercambiar o compartir materiales 
  did�cticos y a los estudiantes pasar de una clase a otra sin volver a introducir la contrase�a.
  </li> <li>
  Una estructura de <b> establecimiento </b> es
  una agupaci�n multinivel de aulas virtuales, 
  capaz de gestionar las necesidades 
  de todo un establ baecimiento educativo:
   bases de datos de alumnos y profesores, 
   docencia de diferentes niveles,
    programas, asignaturas y clases de alumnos, responsabilidades de profesores, etc.
  </li> </ul>
  Para grupos y establecimientos, 
  el enlace de arriba le permite crear su <b> portal </b>. 
  Luego tendr�s que crear las clases que contienen.
 !exit
:2
  La creaci�n
 !if $Cltype<2
   de una <span class="wims_emph">clase</span>
   es una operaci�n reservada a los <span class="wims_emph">profesores</span>.
 !else
de <span class="wims_emph"> $name_classe </span>
  es una operaci�n reservada para un <span class="wims_emph"> administrador </span>
(qui�n puede ser maestro).
 !endif
 Necesitar� una direcci�n de correo activa para poder hacerlo.
 Despu�s de crear su  $name_classe,
 ha de asumir la responsabilidad de su mantenimiento.
!exit

:2_1
 Para crear su $name_classe, por favor, rellene la siguiente informaci�n.
!exit
:step1
 �Bienvenido/a, $supervisor!<p>
 Est� creando
 !if $Cltype<2
  la
 !else
  el
 !endif
 $name_classe $classname en el sitio WIMS en la direcci�n
  $httpd_HTTP_HOST,
 !if $Cltype iswordof 0 1
 !let tmp=!positionof item $ilevel in $wims_listlevel
  de nivel <span class="wims_emph">$(name_wims_listlevel[$tmp])</span>,
 !endif
 que expirar� el $exp_day/$exp_month/$exp_year. 
 <p>El n�mero m�ximo de participantes es de <strong>$ilimit</strong>.</p>
 <p>
 la inscripci�n est�
 !if $pword!=$empty
  protegida por la contrase�a $name_classesss.
 !else
  abierta a todo el mundo en internet (�Est� usted seguro? Sepa que
  el administrador del sitio puede rechazarlas y eliminarlas).
 !endif
 </p><p>
 Si encuentra un error en la informaci�n anterior, por favor
 !href module=$module&cmd=reply&step=0 corr�jala.
 </p><p>En caso contrario, para poder verificar la exactitud de sus contrase�as,
  escr�balas de nuevo.
</p>
 !exit

:step2

 �Bienvenido/a, $supervisor!<p>
 Ahora necesita una clave para terminar la operaci�n de creaci�n de
 su $name_classe bajo WIMS en el sitio $httpd_HTTP_HOST. </p><p>
 Esta clave acaba de ser enviada a su direcci�n de correo
 <span class="tt wims_address">$email</span>. Por favor, compruebe su buz�n de correo electr�nico (espere
 un poco si no llega), y lea el mensaje que se le ha enviado. Copie la clave del
 mensaje a continuaci�n.
</p>
!exit

:step3

�Bienvenido/a, $supervisor!<p>
 Su $name_classe $classname ya ha sido creada. �Felicidades,
 y que se divierta!</p><p>
 El n�mero de participantes est� limitado a $ilimit (incluido usted).
</p>
!exit
