!!set backup_delete=$(wims_read_parm[2])
!!set sitemanager=$(wims_read_parm[1])
!!set size=$(wims_read_parm[3])
!!set day=$(wims_read_parm[4])
!!set protocol=$(wims_read_parm[5])
!!set cookies = $(wims_read_parm[6])
<h2 class="wims_subtitle">Información sobre el proceso y la protección de datos</h2>

!!!<h3>Administrador de datos</h3>
!!!
!!!Ici afficher l'administrateur du site / de la classe / du portail le cas échéant
!!!<strong>$(wims_read_parm[1])</strong>
!!!
!!!préciser responsable légal (directeur/président dans le cas d'un serveur d'établissement)


<h3>Objetivos</h3>
<p class="wimscenter">
  <strong>Educar a los alumnos practicando ejercicios en línea.</strong>
</p>
<p>
  WIMS (Web Interactive Multipurpose Server) es una plataforma de aprendizaje en
 línea que pone a disposición de todos recursos
 pedagógicos (ejercicios interactivos, documentos interactivos, herramientas de cálculo) y
  permite a los profesores tener un área protegida donde pueden organizar
  los recursos educativos en sesiones de trabajo, crear y monitorear la actividad
  de los alumnos.
</p>

<h3>Naturaleza de los datos grabados</h3>
<ul>
  <li>En el caso de usuarios no registrados, los únicos datos grabados
     son las direcciones IP de los usuarios en los archivos de registro en el servidor
     no explotados y almacenados temporalmente para un funcionamiento correcto
     del servidor.
  </li><li>Caso de una persona que crea una clase.<br>
    Los datos grabados son:
    <ul>
      <li>los apellidos, el nombre y el correo electrónico que dió al crear la clase;</li>
      <li>las direcciones IP de conexión a las que solo puede acceder él
       y el administrador del servidor.</li>
    </ul>
  </li><li>Caso de usuarios registrados en un clase virtual.<br>
     Usar las clases virtuales de un servidor WIMS implica
     registrar los datos de conexión siguientes
     para calcular notas y calificaciones.
     La siguiente información personal está disponible para el profesor conectado a
     su clase WIMS, así como para el alumno en forma detallada o en forma procesada:
    <ul>
      <li>su nombre y apellido</li>
      <li>su correo electrónico y foto (opcional)</li>
      <li>los ejercicios visualizados y / o resueltos</li>
      <li>todas las notas obtenidas</li>
      <li>los días, las horas y la IP de la conexión del alumno al realizar
        su trabajo (hojas de ejercicios) en la clase WIMS (datos detallados).</li>
    </ul>
  </li>
</ul>

!if $(wims_read_parm[6])=yes
  <p>
    Las cookies se utilizan para ayudar al visitante no registrado
     a mantener sus preferencias
  </p>
!endif

<h3>Duración de la conservación de los datos</h3>
<p>
   Los archivos de registro del servidor fuera de clase que contienen datos de conexión
   se borran regularmente
</p>
   <ul><li>
    no se guardan datos de más de $(wims_read_parm[3]) días de antiguedad;
  </li><li>
    solo se guardan los últimos $(wims_read_parm[4]) bytes.
  </li></ul>
<p>
   El profesor crea una clase de un año de duración máxima.
   El profesor tiene la posibilidad de hacer una copia de seguridad
   que contiene los datos de los alumnos de su clase en su
   ordenador, prolongar la duración de su clase y borrar
   los datos de los participantes de su clase.
</p><p>
  Los datos de los participantes en una clase se almacenan en el servidor un
  máximo de $(wims_read_parm[2]) días después de la fecha de expiración de la clase.
</p>

!!<h3>Legitimidad</h3>
!!Dans le cas d'un enseignement public, il s'agira  à priori de
!!« l'exécution d'une mission d'intéret public",
!!mais une classe WIMS pourrait également servir à titre d'"Exécution d'un contrat »,
!!ou à titre privé avec le consentement des participants (acceptation des CGU).
!!La liste des légitimités possibles pourrait etre proposée lors de la création de la classe
!!par exemple (voir liste plus bas)
!!

<h3>Destinatarios de los datos</h3>
!! Inutile de préciser que le gestionnaire/admin a acces au donnée : c'est intrinsèque à la fonction.
!! Le gestionnaire du site peut avoir accès à toutes les données (sans intérêt pour lui).
<p>Los profesores tienen acceso a la información
   disponible solo de las clases de las que son responsables.</p>

<p>Tenga en cuenta que los inscritos (llamados alumnos) en una clase y sus datos no son visibles
   para los otros alumnos. Solo los profesores de una clase ven la lista de alumnos
   y sus datos.</p>

<h3>Seguridad</h3>
!if $(wims_read_parm[5])=https
  <p>El sitio web puede usar el protocolo $(wims_read_parm[5]).</p>
!endif
<p>El control de acceso de los usuarios se configura a través de contraseñas personales.</p>
<p>El registro de conexión se realiza en el servidor.</p>


<h3>Información sobre los derechos</h3>
<p>En virtud del <b>R</b>eglamento <b>G</b>eneral de <b>P</b>roteción de <b>D</b>atos (RGPD) EU 2016/679,
   usted tiene el derecho de acceso (Artículo 15),
   de rectificación (artículo 16), de supresión (artículo 17),
   y de oposición (Artículo 21) por razones legítimas
   a sus datos personales. <br>
   Puede ejercer este derecho contactando con el profesor de su clase,
   así como con el administrador del servidor $(wims_read_parm[1]).</p>
<p>
  También, en Francia, tiene la posibilidad, en la aplicación
   del artículo 40-1 de la ley n° 78-17 del 6 de enero de 1978
   relativa a la informática, a los archivos y a las libertades para definir
   directrices sobre el destino de sus datos personales
   después de su muerte.
</p>
