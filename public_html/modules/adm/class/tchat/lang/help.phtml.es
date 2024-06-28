!if $wims_read_parm!=$empty
  !goto $wims_read_parm
!endif

:general
El tchat le permite ingresar mensajes alfanum�ricos entre el maestro y un estudiante
o grupo de estudiantes en particular. Es posible
ingresar f�rmulas matem�ticas
en <code>&#8726;(...&#8726;)</code>. No se permiten etiquetas HTML ni enlaces de hipertexto.
!if $wims_user=supervisor
  <ul>
  <li> El chat se puede deshabilitar en el aula mediante el enlace de configuraci�n
    en el men� (est� deshabilitado de forma predeterminada cuando se crea la clase). </li>
   <li> Es posible crear salones que re�nan a ciertos estudiantes de la clase.
    utilizando el enlace de supervisi�n de la sala. </li>
   <li> La "clase" de la sala de estar que contiene a todos los estudiantes de la clase est� presente desde el origen
    y no se puede borrar, pero se puede inhabilitar. </li>
   <li> Cada alumno tiene una habitaci�n individual donde �l es el �nico (con el profesor)
    saber leer y escribir.
       Esta sala no se puede eliminar ni desactivar. </li>
   <li> Cuando un alumno abre su chat, el profesor puede ver las p�ginas de ejercicios
       que consulta para ayudarlo en conceptos espec�ficos. Luego aparece en
       chat individual una lista de botones para abrir una p�gina que contiene
       una captura de la p�gina del estudiante en el momento del clic.
   </li>
  </ul>
!else
  <ul><li>
  El chat puede contener varias salas. Si es as�, cuando se abra la ventana,
   tienes un enlace en el men� lateral para ir de un sal�n a otro. </li>
   <li> En cada uno de los salones, puede ver la lista de estudiantes de la clase
   que est�n registrados en el sal�n. Sin embargo, esta lista puede cambiar en cualquier
   momento ya que su maestro puede cambiar los registros. </li>
   <li> Cuando la ventana de chat est� abierta, puede continuar navegando usando
   la ventana principal.</li>
   <li> Es posible habilitar la pantalla compartida. Si lo enciende, el profesor puede ver capturas de pantalla
   del ejercicio que est� realizando.
   Entonces podr� ayudarte m�s f�cilmente. </li>
   <li> La recarga autom�tica activa o desactiva la funci�n de actualizaci�n de p�gina. Esta caracter�stica puede crear
      mal funcionamiento con la p�gina principal. Por tanto, es aconsejable no dejarlo activo cuando no est�
       sin esperar un mensaje.</li>
   <li> Para cerrar el chat, es esencial cerrar la ventana del chat al
      usando el enlace <span class="tt wims_code_words"> cerrar ventana </span> de wims
      y no los botones del navegador (de lo contrario, su chat permanece abierto).
   </li>
   !if $tchat_configfilesize>0
    <li>Puedes depositar un archivo temporal para que lo vea tu profesor. Este archivo no se conservar� despu�s
    de que cierre su sesi�n de trabajo.
    </li>
  !endif
!endif
!exit

:config
Las opciones son las siguientes:
<ul>
<li><b>$name_opentchat </b> Le permite abrir o cerrar el chat.
  Si el chat est� cerrado, los participantes no pueden acceder a �l,
  pero el maestro sigue pudiendo ver
      los mensajes que ya se han grabado.</li>
   <li><b>$name_timing </b> Este es el retraso en segundos despu�s del cual las p�ginas de chat
   (profesor y participante) se volver�n a cargar y, por lo tanto,
   aparecer�n nuevos mensajes.</li>
   <li><b>$name_onlynonempty</b> Si esta opci�n est� configurada en $wims_name_yes, solo
   se enumerar�n las salas que contengan al menos un estudiante conectado (y que tengan su chat abierto)
   o cuyo �ltimo mensaje no sea el del profesor
   en la mesa de seguimiento.
      Esta opci�n es �til para esperar a que aparezcan nuevos mensajes
      cuando se abren varias salas simult�neamente. </li>
   <li><b>$name_configfilesize</b> esta opci�n permite que los participantes
   publiquen un archivo temporal cuando est�n conectados a su sala personal.
       El tama�o del archivo est� limitado por el profesor de la clase (el profesor
       tambi�n puede desactivar esta opci�n). La publicaci�n de un nuevo archivo seguimientosegseguimientouimiento
       por parte del alumno borra el anterior. El archivo no se conserva despu�s de que el estudiante cierra la sesi�n.
       !if $conf_nofile=yes
      <i>El administrador del servidor ha desactivado esta opci�n.</i>
    !endif
   </li>
  </ul>
!exit

:listliving
 Este panel de control re�ne informaci�n sobre los diferentes salones. <br>
   Te permite listar los participantes a cada uno de ellos
   y gestionar su apertura y cierre as� como la modificaci�n de la lista de participantes. <br>
   Los salones individuales no aparecen en la lista.
!exit
