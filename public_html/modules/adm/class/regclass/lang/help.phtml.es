!set lang_exists=yes
!goto $wims_read_parm

:1
<ul> <li> Se proporciona una <b> clase individual </b> 
para la gestión de un grupo de estudiantes por parte de un profesor.
  </li>
  <li> Una <b> agrupación de clases </b> permite a 
  los profesores intercambiar o compartir materiales 
  didácticos y a los estudiantes pasar de una clase a otra sin volver a introducir la contraseña.
  </li> <li>
  Una estructura de <b> establecimiento </b> es
  una agupación multinivel de aulas virtuales, 
  capaz de gestionar las necesidades 
  de todo un establ baecimiento educativo:
   bases de datos de alumnos y profesores, 
   docencia de diferentes niveles,
    programas, asignaturas y clases de alumnos, responsabilidades de profesores, etc.
  </li> </ul>
  Para grupos y establecimientos, 
  el enlace de arriba le permite crear su <b> portal </b>. 
  Luego tendrás que crear las clases que contienen.
 !exit
:2
  La creación
 !if $Cltype<2
   de una <span class="wims_emph">clase</span>
   es una operación reservada a los <span class="wims_emph">profesores</span>.
 !else
de <span class="wims_emph"> $name_classe </span>
  es una operación reservada para un <span class="wims_emph"> administrador </span>
(quién puede ser maestro).
 !endif
 Necesitará una dirección de correo activa para poder hacerlo.
 Después de crear su  $name_classe,
 ha de asumir la responsabilidad de su mantenimiento.
!exit

:2_1
 Para crear su $name_classe, por favor, rellene la siguiente información.
!exit
:step1
 ¡Bienvenido/a, $supervisor!<p>
 Está creando
 !if $Cltype<2
  la
 !else
  el
 !endif
 $name_classe $classname en el sitio WIMS en la dirección
  $httpd_HTTP_HOST,
 !if $Cltype iswordof 0 1
 !let tmp=!positionof item $ilevel in $wims_listlevel
  de nivel <span class="wims_emph">$(name_wims_listlevel[$tmp])</span>,
 !endif
 que expirará el $exp_day/$exp_month/$exp_year. 
 <p>El número máximo de participantes es de <strong>$ilimit</strong>.</p>
 <p>
 la inscripción está
 !if $pword!=$empty
  protegida por la contraseña $name_classesss.
 !else
  abierta a todo el mundo en internet (¿Está usted seguro? Sepa que
  el administrador del sitio puede rechazarlas y eliminarlas).
 !endif
 </p><p>
 Si encuentra un error en la información anterior, por favor
 !href module=$module&cmd=reply&step=0 corríjala.
 </p><p>En caso contrario, para poder verificar la exactitud de sus contraseñas,
  escríbalas de nuevo.
</p>
 !exit

:step2

 ¡Bienvenido/a, $supervisor!<p>
 Ahora necesita una clave para terminar la operación de creación de
 su $name_classe bajo WIMS en el sitio $httpd_HTTP_HOST. </p><p>
 Esta clave acaba de ser enviada a su dirección de correo
 <span class="tt wims_address">$email</span>. Por favor, compruebe su buzón de correo electrónico (espere
 un poco si no llega), y lea el mensaje que se le ha enviado. Copie la clave del
 mensaje a continuación.
</p>
!exit

:step3

¡Bienvenido/a, $supervisor!<p>
 Su $name_classe $classname ya ha sido creada. ¡Felicidades,
 y que se divierta!</p><p>
 El número de participantes está limitado a $ilimit (incluido usted).
</p>
!exit
