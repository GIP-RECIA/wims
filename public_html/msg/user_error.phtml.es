Status: 450 WIMS User Error
Server: WIMS $wims_version (WWW Interactive Multipurpose Server)
Content-type: text/html; charset=windows-1252
Cache-Control: no-cache
Pragma: no-cache

<!DOCTYPE html>
<html><head>
  <meta http-equiv=expires content="1 Jan 1990">
  <meta HTTP-EQUIV="Pragma" CONTENT="no-cache">
  <meta HTTP-EQUIV="Cache-Control" CONTENT="no-cache">
  <!-- Theme CSS style -->
  <link rel="stylesheet" href="html/themes/$wims_theme/css.css" type="text/css">
  <style>
   input[type="submit"],input[type="button"],.wims_button{ background-color:$wims_ref_button_bgcolor;color:$wims_ref_button_color;}
   .wims_button_help{ background-color:$wims_ref_button_help_bgcolor;color:$wims_ref_button_help_color;}
  </style>

  !if exam_ isin $wims_user_error
    <style><!--
    body {text-align: justify;
    padding-left: 3%; padding-right: 3%;}
    --></style>
    </head>
    <body onload="window.resizeTo(500,200);window.moveTo(250,300);" class="user_error">
      <h1 class="wimscenter">ERROR</h1>
    !goto examerr
  !endif

</head><body class="user_error">

!if threshold iswordof $wims_user_error
  <h1>Sobrecarga</h1>
  <hr style="width:50%">
  <p>
    Este servidor WIMS <font color="blue">$httpd_HTTP_HOST</font>
    está sobrecargado en este momento con un gran número de solicitudes,
    y no puede servir a más usuarios. Por favor, vuelva más tarde, o
    visite otro servidor WIMS.
  </p><p>
    Sentimos este inconveniente, y esperamos poder servirle pronto.
  </p>
  !read mirror.phtml.es
  !goto end_html
!endif

!if overload iswordof $wims_user_error
  <hr style="width:1px">
  <h1>Lo sentimos</h1>
  <p>
  Este servidor WIMS ha bloqueado su conexión: se ha superado la cuota de conexiones.
  </p>
  !goto end_html
!endif

!if ++++missing_ isin ++++$wims_user_error
  <hr width="1">
  <h1>Lo sentimos</h1>
  <hr style="width:50%">
  <p>
    WIMS necesita de la presencia de software
    !set miss=!upper $missing_software
    <span class="wims_warning">$miss</span>
    para procesar su petición, pero este software no está disponible
    (o no es visible para WIMS) en este servidor.
  </p><p>
    Puede
    <a href="mailto:$wims_site_manager?subject=$missing_software o disponible en WIMS">escribir
    al administrador del sitio</a> para informarle del problema, o seleccionar un
    espejo de la tabla de abajo.
  </p><p><a href="$refname">Página de inicio de WIMS</a>.</p>
  !read mirror.phtml.en
  !goto end_html
!endif

!if trapped iswordof $wims_user_error
  <h1>¡Alto!</h1>
  <hr>
  El contenido de
  <a href="http://$httpd_HTTP_HOST">$httpd_HTTP_HOST</a> no es
  compatible con los programas de almacenamiento de páginas ni
  los `aceleradores web'.
  <p>
    Para acceder a las actividades WIMS de este sitio, por favor, utilice
    un navegador web ordinario, sin programas de aceleración instalados.
  </p><p>
    Recuerde que las páginas de WIMS se generan dinámicamente. No pueden
    usarse desconectados.
  </p>
  !goto end_html
!endif

!if no_access notwordof $wims_user_error and no_access_class notwordof $wims_user_error
  <h1>Error de WIMS</h1>
  <p>
    Hay un error en su solicitud a este sitio WIMS.
  </p>
!endif
!if module_change iswordof $wims_user_error
  !if $wims_human_access=yes
    <p>
      Por favor, evite usar el botón `Atrás' de su navegador,
      porque está en un servidor interactivo.
      !if $wims_user!=$empty
         Evite trabajar en la clase en varias pestañas
          desde su navegador al mismo tiempo.
      !endif
    </p>
    <div class="wimscenter">
    !set tit=!module title $module
    !default tit=$module
    !href module=$module $tit
    &nbsp;
    !set wims_ref_class=wims_button
    !href $ Página principal de WIMS
    !if $httpd_HTTP_REFERER!=$empty
      &nbsp;<a href="$httpd_HTTP_REFERER">Salir de WIMS</a>
    !else
      <p class="small">
        Si quiere salir de este sitio, ignore este mensaje y siga
        pulsando el botón `Atrás'.
      </p>
    !endif
    </div>
    !goto end_html
  !endif
  <p>
    Ha solicitado un cambio ilegal de módulo.
    ¿Estás usando un programa automático para acceder a este sitio?
  </p>
  :unblock
  !form new
    <input type="hidden" name="module" value="home">
    <input type="hidden" name="deblockparm" value="$[randint(10000000)+1000000]">
    Si simplemente ha pulsado el botón `Atrás' de su navegador,
    por favor, escriba la palabra `wims' aquí:
    <input size="8" name="special_parm"> entonces
    <input type="submit" value="enviar al servidor">.
  !formend
  <p>
    Por favor, tenga en cuenta que las páginas de este sitio se generan
    dinámicamente. Así que sólo se pueden usar estando conectados, mediante
    un navegador normal. Es inútil almacenar estas páginas usando un
    robot.
  </p>
  !if robot_doubt iswordof $wims_user_error
    <p class="small">
      Y tenga en cuenta que la gente que intente hackear este sitio
      verá como se le niega definitivamente el acceso.</small>
    </p>
  !endif
  !goto end_html
!endif

!if robot_doubt iswordof $wims_user_error
  <p>
    Bloqueamos definitivamente su acceso a este sitio, porque se
    sospecha que está usando un programa automático para almacenar
    páginas.
  </p>
  !goto unblock
!endif

!if allow_violation iswordof $wims_user_error
  <p>
    No tiene derechos para definir la variable ``$wims_error_data''
    con el comando ``$cmd''.
  </p>
!endif

!if bad_command iswordof $wims_user_error
  <p>
    El comando ``$cmd'' no es válido.
  </p><p>
    Los comandos válidos son:
  </p>
  <pre>new, renew, reply, help, hint, config</pre>
!endif

!if bad_host iswordof $wims_user_error
  <p>
    La sesión ``$session'' ya está creada por otro ordenador. No puede
    acceder a ella.
  </p><p>
    Tenga en cuenta que, debido a razones de seguridad, WIMS no le permite
    cambiar de cliente en una sesión de trabajo. Desafortunadamente algunos
    proveedores de servicios de internet dan una dirección dinámica, la
    cual puede cambiar durante una conexión. Estamos trabajando sobre
    este problema.
  </p>
!endif

!if need_https iswordof $wims_user_error
  Debe conectarse a su clase mediante http seguro (https).
  !set refname=!replace http:// by https:// in $wims_ref_name
  <a href="$refname?session=$wims_session&module=home&cmd=new">Pruebe</a>.
  !goto end_html
!endif

!if bad_insnum iswordof $wims_user_error
  <p>
  !if $cmd=getfile
    El archivo que solicitó no existe.
  !else
    El nombre de archivo para inserción dinámica no es válido.
  !endif
  </p>
!endif

!if cmd_output_too_long iswordof $wims_user_error
  <p>
    El resultado intermedio de la computación ha excedido la longitud máxima.
    Probablemente ha hecho una solicitud que no es realista. Simplifique su
    petición, por favor.
  </p>
!endif

!if double_click iswordof $wims_user_error
  <p>
    Esta solicitud llega mientras tiene activos otros procesos.
  </p><p>
    Si ha pulsado dos veces espere, por favor,
    <span class="wims_warning">$wims_cpu_limit segundos</span>
    para que el proceso antiguo termine, y entonces
    !href cmd=resume pulse aquí
    para volver al trabajo. (Y por favor, sea más paciente la próxima vez
    que pida a WIMS que haga cálculos largos.)
  </p><p>
    Si está usando el botón ``Atrás'' de su navegador para salir de WIMS,
    ignore este mensaje y siga.
  </p>
  !goto end_html
!endif

!if invalid_char_in_query_string iswordof $wims_user_error
  <p>
    La sustitución  ``$wims_error_data'' en la cadena de parámetros es ilegal.
  </p>
!endif

!if name_conflict iswordof $wims_user_error
  <p>
  ``$wims_error_data'' es un nombre reservado de WIMS.
  </p>
!endif

!if no_command iswordof $wims_user_error
  <p>
    No hay comando.
  </p>
!endif

!if no_insnum iswordof $wims_user_error
  <p>
  !if $cmd=getfile
    Solicitud de archivo sin nombre.
  !else
    Solicitud de inserción dinámica sin número.
  !endif
  </p>
!endif

!if no_module_name iswordof $wims_user_error
  <p>
    Ha pedido una nueva sesión, sin nombre de módulo.
  </p>
!endif

!if no_session iswordof $wims_user_error
  <p>
    No hay número de sesión.
  </p>
!endif

!if parm_too_long iswordof $wims_user_error
  <p>
    Su cadena de parámetros ha excedido el límite. No se permite por
    razones de seguridad, lo siento.
  </p>
!endif

!if string_too_long iswordof $wims_user_error
  <p>
    La definición de variable tiene una longitud que excede el límite.
  </p>
!endif

!if too_many_variables iswordof $wims_user_error
  <p>
    El número de parámetros que transmitió excede el límite autorizado
    en este sitio WIMS.
  </p>
!endif

!if unmatched_parentheses iswordof $wims_user_error
  <p>
    Hemos detectado paréntesis sin correspondencia en su solicitud.
    Puede corregir el error aquí:
  </p>
  !form $cmd
  !for i in module,special_parm,worksheet
    !if $($i)!=$empty
      !set value=!translate " to $ $ in $($i)
      <input type="hidden" name="$i" value="$value">
    !endif
  !next i
  !for i=0 to $user_var_no-1
    !if $i!=$bad_parentheses
      !set value=!translate " to $ $ in $(value$i)
      <input type="hidden" name="$(name$i)" value="$value">
    !endif
  !next i
  !set value=!translate " to $ $ in $(value$bad_parentheses)
  !set len=!charcnt $value
  !if $len<55
    !set len=$[$len+3]
  !else
    !set len=59
  !endif
  !set input_id=$(name$bad_parentheses)
  <div class="field box">
    <label for="$input_id">$input_id =</label>
    !set n=!linecnt $value
    !if $n<=1
      <input size="$len" name="$input_id" id="$input_id" value="$value">
    !else
      <textarea rows="$n" name="$input_id" id="$input_id">$(value$bad_parentheses)</textarea>
    !endif
  </div>
  <p class="actions">
    Puis
    <input type="submit" value="envía la petición corregida.">
  </p>
  !formend
  <hr>
  <p class="wimscenter">
    !href cmd=resume Abandona la última solicitud
    |
    !href $ wims sommaire
  </p>
  !goto end_html
!endif

!if wrong_module iswordof $wims_user_error
  !set tmp=!translate "!/<>;': to $         $ in $module
  <p>
    El módulo <code>$tmp</code> que ha solicitado no existe en este servidor.
  </p>
!endif

!if wrong_session iswordof $wims_user_error
  <p>
    El número de sesión ``$session'' no es válido (o ha dejado de serlo).
    <a href="$refname">Crear una nueva sesión.</a>.
  </p>
!endif

!if rafale iswordof $wims_user_error
  <p>
    ¡Por favor no juegue con los ejercicios!
  </p><p>
    Debe tomarse su tiempo para pensar bien en cómo resolver los ejercicios,
    en lugar de solicitar unos nuevos una y otra vez.
  </p>
  !set wims_ref_class=wims_button
  !href cmd=resume Cancelar la última petición
  .
  !if $wims_user!=$empty and $wims_user!=supervisor
    <p>
      <span class="wims_warning">$wims_name_warning.</span>!No repita este error!
      Las actividades irregulares pueden darle malas calificaciones incluso cuando
      el registro de calificaciones está cerrado.
    </p>
  !endif
  !goto end2
!endif

:examerr

!if exam_dep iswordof $wims_user_error
  <p>
    Podrá hacer este ejercicio sólo cuando haya hecho suficientes progresos en
  !if , isin $dep_list
    ejercicios $dep_list.
  !else
    ejercicio $dep_list.
  !endif
  </p><p>
    Pruebe primero a hacer estos últimos.
  </p>
  !goto examend
!endif

!if bad_exam iswordof $wims_user_error
  <p>
    Ha solicitado una petición ilegal en una sesión de examen.
  </p>
  !goto examend
!endif

!if exam_exo_finished iswordof $wims_user_error
  <p>
    Ya ha realizado este ejercicio, con una puntuación de $wims_exo_lastscore.
  </p><p>
  No puede volver a hacerlo porque nos encontramos en un examen.
  </p>
  !goto examend
!endif

!if expired_exam iswordof $wims_user_error
  <p>
    No tiene más tiempo para trabajar en el examen.
  </p>
  :examend
  !set pses=!translate _ to , in $wims_session
  !set pses=!item 1 of $pses
  !set pser=!randint 1,999
  !set wims_opener=window.opener.location='$wims_ref_name?session=$pses.$pser&cmd=reply&job=student';
  <p class="wimscenter">
    <a href="#" onclick="window.close();$wims_opener">Cerrar esta ventana</a>.
  </p>
  !goto end_html
!endif

!if exam_closed iswordof $wims_user_error
  <p>
    Este examen no está accesible desde su conexión en este momento.
  </p><p>
    Por favor, verifíquelo con el supervisor de su clase.
  </p>
  !goto examend
!endif

!if bad_ident iswordof $wims_user_error
  <p>
    Su petición contiene un error de identificación de usuario.
  </p><p>
    ¿Está intentando conectarse a la sesión de algún otro?
  </p><p>
    Por favor
    <a href="$refname?special_parm=ignorecookie&special_parm2=$[randint(10^8)]">establezca una nueva conexión</a>.
  </p>
  !goto end_html
!endif

!if no_access iswordof $wims_user_error
  <div class="wims_msg warning">
    Su petición ha sido rechazada por las normas de acceso de este sitio. Lo sentimos.
  </div>
  !goto end2
!endif

!if no_access_class iswordof $wims_user_error
  !distribute items (ejercicios), (herramientas), (documentos) into name_exo,name_tool,name_doc
  !set tt=!word 2 of $wims_user_error
  <h2>Cierre de actividades de clase</h2>
  <div class="wims_msg warning">
    El acceso a las actividades de este aula virtual está temporalmente cerrado por el profesor.
     Vuelve mas tarde.
  </div>
  !goto end2
!endif

!if class_closed iswordof $wims_user_error
  <h2>Lo siento.</h2>
  <p>
   El acceso a esta clase virtual está temporalmente cerrado por su profesor.
     ¡Vuelve mas tarde!
  </p><p class="wimscenter">
    !href cmd=close&module=home WIMS
  </p>
  !goto end_html
!endif

!if other_exam_session iswordof $wims_user_error
  <p>Ya ha iniciado una sesión de examen. No puede iniciar otra.</p>
  <p>Si cerró el navegador por error durante su sesión de examen, regrese a la página de inicio de la clase y podrá recuperar su sesión.</p>
  <p class="wimscenter">
    <a href="#" onclick="window.close();$wims_opener">Cerrar esta ventana</a>.
  </p>
  !goto end_html
!endif

:end
<p>
  Si ve este mensaje después de seguir un enlace a otra página,
  probablemente es porque el enlace no esté bien preparado. En este caso,
  por favor, contacte con el autor de la página, e infórmele del error.
</p><p>
  También puede escribir al
  <a href="mailto:$wims_site_manager?subject=wims.cgi">administrador de este sitio</a>,
  con tantos detalles como sean posibles sobre las circunstancias bajo
  las cuales ocurrió el error.
</p>

:end2

<div class="wimscenter">
  !set wims_ref_class=wims_button home
  !href module=home&cmd=new Página principal de WIMS
</div>

:end_html
</body></html>
