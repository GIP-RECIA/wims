<div class="wims_content">

Bienvenido/a a esta p�gina que le permite crear sus propios
!if $wims_user!=supervisor
 ejercicios interactivos,
!else
 ejercicios interactivos para la clase
  <span class="wims_emph">$wims_classname</span> de 
  <span class="wims_emph">$wims_institutionname</span>.
!endif

Tienen a su disposici�n varias herramientas de creaci�n en Createxo.
Permiten crear ejercicios de formato
!href cmd=help&special_parm=oef OEF
.
<ol>
<li>Distintos m�todos guiados para crear un ejercicio con ayuda de un formulario :
   <ul><li>
      ejercicios libres en
     !href cmd=reply&mode=normal&level=1 $name_normal
 ;
 </li><li>
    varios modelos de ejercicios esquel�ticos est�n disponibles en forma de
    !href cmd=reply&mode=model&level=1 $name_model
.
</li></ul>
</li><li>
 Un m�todo no guiado bajo dos versiones :
<ul><li>
!href cmd=reply&rawinp=yes&level=1 $name_raw
, para escribir el c�digo fuente de un ejercicio
directamente en l�nea;
</li><li>
!href cmd=reply&mode=file&level=1 $name_file
, para enviar un fichero fuente del ejercicio que previamente
crearon con el editor de texto de su ordenador.
</li></ul>
</li></ol>

Otras herramientas est�n disponibles.
<ul><li>
Herramientas como
  !href module=adm/auth/confia2qcm Confia2qcm
, 
!href module=adm/auth/createqcm Createqcm
 ayudan a la creaci�n de dos tipos de QCM (Cuestionarios elecciones m�ltiples) preformados.
</li><li>
!href module=adm/modtool $wims_name_modtool
 permite crear ejercicios muy libres y tambi�n organizar
sus ejercicios OEF o sus documentos (requiera una cuenta desarrollador).
 Esta herramienta es el medio de publicar m�s tarde sus ejercicios o sus
documentos para que sean utilizables fuera de su clase.
</li><li>
!href module=adm/quicktool $wims_name_quicktool
 se adapta especialmente a los idiomas y a las materias literarias. Permite concebir
en m�todo guiado ejercicios de tipo OEF de distintos formatos (GAP, QCM, SELECTWORD, ...) ;
autoriza ejercicios a etapa, ejercicios en que el alumno puede tener varias pruebas,  ayudas progresivas.
Permite utilizar a bancos de documentos audio del proyecto
<a target="wims_external" href="http://shtooka.net">Shtooka</a>.
La utilizaci�n de Quicktool requiere por el momento de tener una cuenta desarrollador.
</li><li>
!href module=adm/latex2wims $wims_name_latex2wims
 permite traducir al formato WIMS  los documentos escritos en l�tex. Toma cuenta
 de las partes interactivas formadas en un medio ambiente <span class="tt">wims</span>.
 Requiere una cuenta desarrollador.
</li></ul>
</div>
