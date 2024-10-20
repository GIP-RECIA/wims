!!set backup_delete=$(wims_read_parm[2])
!!set sitemanager=$(wims_read_parm[1])
!!set size=$(wims_read_parm[4])
!!set protocol=$(wims_read_parm[5])
!! cookies = $(wims_read_parm[6])
<h2 class="wims_subtitle">Informatie over de AVG</h2>

!!!<h3>Data Manager</h3>
!!!
!!!Here show the administrator of the site / class / portal if applicable
!!!<strong>$(wims_read_parm[1])</strong>
!!!
!!!specify legal responsible (director / president in the case of an establishment server)


<h3>Objectives</h3>
<p class="wimscenter">
  <strong>Educate learners by practicing online exercises.</strong>
</p>
<p>
  WIMS (Web Interactive Multipurpose Server) is an online learning platform
  that provides learning resources for all (interactive exercises, interactive documents, computing tools)
  and gives teachers a protected space where they can organize teaching resources in work sessions,
  create and monitor learners' activities.
</p>

<h3>Nature of the recorded data</h3>
<ul>
  <li>In the case of unregistered users,
   the only data recorded are the users' IPs in unused log files
   on the server that are temporarily stored for proper server operation.
  </li><li>Case of a person creating a class.<br>
    The recorded data are:
    <ul>
      <li>the last name, first name and e-mail given when creating the class;</li>
      <li>the connection IP numbers visible only to this person and the server administrator.</li>
    </ul>
  </li><li>Cases of users enrolled in a virtual classroom.<br>
    Using the virtual classes of a WIMS server involves saving
    some connection data in order to calculate scores and ratings.

    The following personal information is accessible to the connected teacher
     in his WIMS class, as well as to the learner in raw form or in analyzed form:
    <ul>
      <li>first name and last name;</li>
      <li>email and photo (optional);</li>
      <li>the exercises visualized and / or solved;</li>
      <li>all the scores obtained;</li>
      <li>the days, hours and IP of the learner's connection when performing a job (worksheets)
       in the WIMS class (raw data).</li>
    </ul>
  </li>
</ul>

!if $(wims_read_parm[6])=yes
  <p>
    Cookies are used to help the unregistered visitor to keep their preferences.
  </p>
!endif

<h3>Data retention period</h3>
<p>
  The log files of the out-of-class server containing
   connection data are erased regularly.
</p>
   <ul><li>
    no data more than $(wims_read_parm[3]) days older is kept;
  </li><li>
    only the last $(wims_read_parm[4]) bytes are retained.
  </li></ul>
<p>
The teacher creates a class for a maximum of one year.
The teacher has the opportunity to make a backup containing
 the data of the participants of his class on his computer,
  to prolong the duration of his class and to erase the data of the participants of his class.
</p><p>
  Participant data in a class is stored on the server no more
  than $(wims_read_parm[2]) days after the class expiration date.
</p>

!!<h3>Legitimacy</h3>
!!In the case of public education, it will in principle be
!! "the execution of a mission of public interest",
!! but a WIMS class could also be used for the performance of a contract,
!! or private, with the consent of the participants (acceptance of the T.O.S.).
!! The list of possible legitimacy could be proposed during the creation of the class for example
!!

<h3>Recipients of the data</h3>
<ul>
  <li>The site manager can access all the data (no interest for him).</li>
  <li>Classroom teachers, each with access only to class information.</li>
</ul>
<p>Note that registrants (called participants) in a class and their data
 are not visible to other participants.
 Only teachers in a class see the list of participants and their data.</p>

<h3>Securing</h3>
!if $(wims_read_parm[5])=https
  <p>The website may use the $(wims_read_parm[5]) protocol.</p>
!endif

<p>
The site manager must enter a password to access the server data.
</p><p>
Teachers must enter a password to enter their WIMS class.
Connection logging is performed on the server.
</p>

<h3>Rights Information</h3>
<p>In accordance with the European Data Protection laws,
   you have the right to gain access and modify your personal data.
   You can exercise this right by contacting
   !mailurl $(wims_read_parm[1]) Data Manager
  <br>
   !mailurl $wims_site_manager Data Manager\
Creaci� de classes virtuals
.</p>
<p>
  You may also, for legitimate reasons, oppose the processing of data concerning you.
</p>
