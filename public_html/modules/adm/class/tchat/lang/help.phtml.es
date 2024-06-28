!if $wims_read_parm!=$empty
  !goto $wims_read_parm
!endif

:general
El tchat le permite ingresar mensajes alfanuméricos entre el maestro y un estudiante
o grupo de estudiantes en particular. Es posible
ingresar fórmulas matemáticas
en <code>&#8726;(...&#8726;)</code>. No se permiten etiquetas HTML ni enlaces de hipertexto.
!if $wims_user=supervisor
  <ul>
  <li> El chat se puede deshabilitar en el aula mediante el enlace de configuración
    en el menú (está deshabilitado de forma predeterminada cuando se crea la clase). </li>
   <li> Es posible crear salones que reúnan a ciertos estudiantes de la clase.
    utilizando el enlace de supervisión de la sala. </li>
   <li> La "clase" de la sala de estar que contiene a todos los estudiantes de la clase está presente desde el origen
    y no se puede borrar, pero se puede inhabilitar. </li>
   <li> Cada alumno tiene una habitación individual donde él es el único (con el profesor)
    saber leer y escribir.
       Esta sala no se puede eliminar ni desactivar. </li>
   <li> Cuando un alumno abre su chat, el profesor puede ver las páginas de ejercicios
       que consulta para ayudarlo en conceptos específicos. Luego aparece en
       chat individual una lista de botones para abrir una página que contiene
       una captura de la página del estudiante en el momento del clic.
   </li>
  </ul>
!else
  <ul><li>
  El chat puede contener varias salas. Si es así, cuando se abra la ventana,
   tienes un enlace en el menú lateral para ir de un salón a otro. </li>
   <li> En cada uno de los salones, puede ver la lista de estudiantes de la clase
   que están registrados en el salón. Sin embargo, esta lista puede cambiar en cualquier
   momento ya que su maestro puede cambiar los registros. </li>
   <li> Cuando la ventana de chat está abierta, puede continuar navegando usando
   la ventana principal.</li>
   <li> Es posible habilitar la pantalla compartida. Si lo enciende, el profesor puede ver capturas de pantalla
   del ejercicio que está realizando.
   Entonces podrá ayudarte más fácilmente. </li>
   <li> La recarga automática activa o desactiva la función de actualización de página. Esta característica puede crear
      mal funcionamiento con la página principal. Por tanto, es aconsejable no dejarlo activo cuando no esté
       sin esperar un mensaje.</li>
   <li> Para cerrar el chat, es esencial cerrar la ventana del chat al
      usando el enlace <span class="tt wims_code_words"> cerrar ventana </span> de wims
      y no los botones del navegador (de lo contrario, su chat permanece abierto).
   </li>
   !if $tchat_configfilesize>0
    <li>Puedes depositar un archivo temporal para que lo vea tu profesor. Este archivo no se conservará después
    de que cierre su sesión de trabajo.
    </li>
  !endif
!endif
!exit

:config
Las opciones son las siguientes:
<ul>
<li><b>$name_opentchat </b> Le permite abrir o cerrar el chat.
  Si el chat está cerrado, los participantes no pueden acceder a él,
  pero el maestro sigue pudiendo ver
      los mensajes que ya se han grabado.</li>
   <li><b>$name_timing </b> Este es el retraso en segundos después del cual las páginas de chat
   (profesor y participante) se volverán a cargar y, por lo tanto,
   aparecerán nuevos mensajes.</li>
   <li><b>$name_onlynonempty</b> Si esta opción está configurada en $wims_name_yes, solo
   se enumerarán las salas que contengan al menos un estudiante conectado (y que tengan su chat abierto)
   o cuyo último mensaje no sea el del profesor
   en la mesa de seguimiento.
      Esta opción es útil para esperar a que aparezcan nuevos mensajes
      cuando se abren varias salas simultáneamente. </li>
   <li><b>$name_configfilesize</b> esta opción permite que los participantes
   publiquen un archivo temporal cuando están conectados a su sala personal.
       El tamaño del archivo está limitado por el profesor de la clase (el profesor
       también puede desactivar esta opción). La publicación de un nuevo archivo seguimientosegseguimientouimiento
       por parte del alumno borra el anterior. El archivo no se conserva después de que el estudiante cierra la sesión.
       !if $conf_nofile=yes
      <i>El administrador del servidor ha desactivado esta opción.</i>
    !endif
   </li>
  </ul>
!exit

:listliving
 Este panel de control reúne información sobre los diferentes salones. <br>
   Te permite listar los participantes a cada uno de ellos
   y gestionar su apertura y cierre así como la modificación de la lista de participantes. <br>
   Los salones individuales no aparecen en la lista.
!exit
