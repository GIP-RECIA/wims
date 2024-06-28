!set help_isread=yes

<h2 class="wims_subtitle">Condiciones Generales de Uso (CGU)</h2>

El uso de las clases virtuales de un servidor WIMS implica guardar algunos datos de conexión
para calcular notas y calificaciones.
La siguiente información está disponible para el profesor en forma detallada o en forma procesada:
<ul>
 <li>los ejercicios visualizados y / o resueltos;</li>
 <li>el conjunto de notas obtenidas;</li>
 <li>los días, horas y IP de conexión del alumno mientras está
trabajando (hojas de ejercicios) en la clase WIMS (datos detallados).</li>
</ul>
Permiten al profesor evaluar el progreso, las dificultades, el tiempo de trabajo, etc del alumno.
<p>
  Un alumno tiene acceso a las notas media, máxima y mínima de la clase, pero no tiene
  acceso a la información sobre otro alumno.
 También tiene acceso a los datos detallados que le conciernen.
</p><p>
Usando las herramientas de la clase (foro, mensaje del día, agenda, sistema de calificación)
están coloca bajo la responsabilidad del profesor de la clase, así como las copias de seguridad de datos
de la clase que él puede hacer.
</p><p>
  !if $save_logincgu!=$empty
La información completa de la clase se archivará automáticamente el
    !read date.phtml $class_expiration,notime
    (Sin embargo, esta fecha puede ser modificada por el profesor).
  !else
    Toda la información de la clase se archiva automáticamente cuando expire la clase.
  !endif
  Los archivos son borrados regularmente por los administradores del servidor.
</p>
!endif

<div class="wims_msg info">
  Al registrarse en una clase de este servidor,
   usted acepta estas condiciones generales de uso.
</div>
<div class="wims_msg info">
Al crear o administrar una clase virtual,
   usted acepta la (co)responsabilidad de procesar los datos de
   carácter personal de la clase que está creando.
   Usted es responsable de los recursos
   que cree y pone a disposición de los alumnos.
   Usted acepta cumplir con la normativa vigente
   sobre datos personales (por ejemplo,
   si está transfiriendo datos de la clase a su ordenador).
</div>
