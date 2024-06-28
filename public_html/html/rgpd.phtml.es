!!set backup_delete=$(wims_read_parm[2])
!!set sitemanager=$(wims_read_parm[1])
!!set size=$(wims_read_parm[3])
!!set day=$(wims_read_parm[4])
!!set protocol=$(wims_read_parm[5])
!!set cookies = $(wims_read_parm[6])
<h2 class="wims_subtitle">Informaci�n sobre el proceso y la protecci�n de datos</h2>

!!!<h3>Administrador de datos</h3>
!!!
!!!Ici afficher l'administrateur du site / de la classe / du portail le cas �ch�ant
!!!<strong>$(wims_read_parm[1])</strong>
!!!
!!!pr�ciser responsable l�gal (directeur/pr�sident dans le cas d'un serveur d'�tablissement)


<h3>Objetivos</h3>
<p class="wimscenter">
  <strong>Educar a los alumnos practicando ejercicios en l�nea.</strong>
</p>
<p>
  WIMS (Web Interactive Multipurpose Server) es una plataforma de aprendizaje en
 l�nea que pone a disposici�n de todos recursos
 pedag�gicos (ejercicios interactivos, documentos interactivos, herramientas de c�lculo) y
  permite a los profesores tener un �rea protegida donde pueden organizar
  los recursos educativos en sesiones de trabajo, crear y monitorear la actividad
  de los alumnos.
</p>

<h3>Naturaleza de los datos grabados</h3>
<ul>
  <li>En el caso de usuarios no registrados, los �nicos datos grabados
     son las direcciones IP de los usuarios en los archivos de registro en el servidor
     no explotados y almacenados temporalmente para un funcionamiento correcto
     del servidor.
  </li><li>Caso de una persona que crea una clase.<br>
    Los datos grabados son:
    <ul>
      <li>los apellidos, el nombre y el correo electr�nico que di� al crear la clase;</li>
      <li>las direcciones IP de conexi�n a las que solo puede acceder �l
       y el administrador del servidor.</li>
    </ul>
  </li><li>Caso de usuarios registrados en un clase virtual.<br>
     Usar las clases virtuales de un servidor WIMS implica
     registrar los datos de conexi�n siguientes
     para calcular notas y calificaciones.
     La siguiente informaci�n personal est� disponible para el profesor conectado a
     su clase WIMS, as� como para el alumno en forma detallada o en forma procesada:
    <ul>
      <li>su nombre y apellido</li>
      <li>su correo electr�nico y foto (opcional)</li>
      <li>los ejercicios visualizados y / o resueltos</li>
      <li>todas las notas obtenidas</li>
      <li>los d�as, las horas y la IP de la conexi�n del alumno al realizar
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

<h3>Duraci�n de la conservaci�n de los datos</h3>
<p>
   Los archivos de registro del servidor fuera de clase que contienen datos de conexi�n
   se borran regularmente
</p>
   <ul><li>
    no se guardan datos de m�s de $(wims_read_parm[3]) d�as de antiguedad;
  </li><li>
    solo se guardan los �ltimos $(wims_read_parm[4]) bytes.
  </li></ul>
<p>
   El profesor crea una clase de un a�o de duraci�n m�xima.
   El profesor tiene la posibilidad de hacer una copia de seguridad
   que contiene los datos de los alumnos de su clase en su
   ordenador, prolongar la duraci�n de su clase y borrar
   los datos de los participantes de su clase.
</p><p>
  Los datos de los participantes en una clase se almacenan en el servidor un
  m�ximo de $(wims_read_parm[2]) d�as despu�s de la fecha de expiraci�n de la clase.
</p>

!!<h3>Legitimidad</h3>
!!Dans le cas d'un enseignement public, il s'agira  � priori de
!!� l'ex�cution d'une mission d'int�ret public",
!!mais une classe WIMS pourrait �galement servir � titre d'"Ex�cution d'un contrat �,
!!ou � titre priv� avec le consentement des participants (acceptation des CGU).
!!La liste des l�gitimit�s possibles pourrait etre propos�e lors de la cr�ation de la classe
!!par exemple (voir liste plus bas)
!!

<h3>Destinatarios de los datos</h3>
!! Inutile de pr�ciser que le gestionnaire/admin a acces au donn�e : c'est intrins�que � la fonction.
!! Le gestionnaire du site peut avoir acc�s � toutes les donn�es (sans int�r�t pour lui).
<p>Los profesores tienen acceso a la informaci�n
   disponible solo de las clases de las que son responsables.</p>

<p>Tenga en cuenta que los inscritos (llamados alumnos) en una clase y sus datos no son visibles
   para los otros alumnos. Solo los profesores de una clase ven la lista de alumnos
   y sus datos.</p>

<h3>Seguridad</h3>
!if $(wims_read_parm[5])=https
  <p>El sitio web puede usar el protocolo $(wims_read_parm[5]).</p>
!endif
<p>El control de acceso de los usuarios se configura a trav�s de contrase�as personales.</p>
<p>El registro de conexi�n se realiza en el servidor.</p>


<h3>Informaci�n sobre los derechos</h3>
<p>En virtud del <b>R</b>eglamento <b>G</b>eneral de <b>P</b>roteci�n de <b>D</b>atos (RGPD) EU 2016/679,
   usted tiene el derecho de acceso (Art�culo 15),
   de rectificaci�n (art�culo 16), de supresi�n (art�culo 17),
   y de oposici�n (Art�culo 21) por razones leg�timas
   a sus datos personales. <br>
   Puede ejercer este derecho contactando con el profesor de su clase,
   as� como con el administrador del servidor $(wims_read_parm[1]).</p>
<p>
  Tambi�n, en Francia, tiene la posibilidad, en la aplicaci�n
   del art�culo 40-1 de la ley n� 78-17 del 6 de enero de 1978
   relativa a la inform�tica, a los archivos y a las libertades para definir
   directrices sobre el destino de sus datos personales
   despu�s de su muerte.
</p>
