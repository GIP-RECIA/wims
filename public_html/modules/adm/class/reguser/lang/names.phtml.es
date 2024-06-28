!set lang_exists=yes

!set levelE=educaci�n primaria
!set levelH=educaci�n secundaria
!set levelU=universidad

!set lang_fr=fran�ais
!set lang_en=English
!set lang_es=espa�ol
!set lang_nl=nederlands
!set lang_it=Italiano
!set lang_cn=����
!set lang_ca=Catal�
!set lang_tw=����(Big5)



!if $cltype iswordof 2 4
   !if $cltype=2
    !set name_classe=agrupaci�n de clases
    !set name_sup=del profesor-administrador
    !set name_classes= el $name_classe
    !set name_classess= un $name_classe
    !set name_classesss= del $name_classe
    !set name_classessss= El $name_classe
   !else
    !set name_classe=centro educativo
    !set name_sup=del administrador
    !set name_classes= el $name_classe
    !set name_classess= un $name_classe
    !set name_classesss= del $name_classe
    !set name_classessss= El $name_classe
    !endif
 !else
   !set name_classe=clase
   !set name_classes=la clase
   !set name_classess=una clase
   !set name_classesss= de la $name_classe
   !set name_classessss= La $name_classe
   !set name_sup=del profesor
 !endif

!distribute lines el portal\
  El portal\
  como <b>profesor</b>\
  como <b>participante</b>\
  Si es usted alumno, por favor inscr�base\
  en la clase que le corresponda\
  est� protegida por una contrase�a.\
  entrar en la clase\
into name_portal,name_Portal,name_asateacher,name_asaparticipant,\
 name_inscription_student,name_inyourclass,name_isprotected,name_gotowork


!distribute lines plazas<br>disponibles\
  a�o\
  abierta,protegida\
  Inscripci�n a $name_classess\
  reservada a los profesores\
  Ninguna clase le permite inscribirse o se ha abierto a�n. �Lo sentimos, int�ntelo m�s adelante! \
  Por favor escoja la clase a la que desea inscribirse (pulse sobre su nombre).\
  est� protegida por una contrase�a y la inscripci�n directa est� reservada a los <b>profesores</b>.\
  Pulse sobre un nombre para inscribirle en la clase.\
  Ser� el nombre que $utilisera para entrar en $$classname posteriormente\
  Por favor escoja una palabra de entre 4 y 16 caracteres alfanum�ricos sin acentos �nicamente.\
  Para verificar la exactitud de su contrase�a, por favor vuelva a teclearla\
  No ha proporcionado una direcci�n de correo v�lida.\
  ransferir sus actividades a esta clase.\
  Quiz�s este participante haya realizado ya actividades en otra clase.\
  Escribir al administrador\
  opcional\
  Tipo de cuenta\
  Piense tambi�n en guardar este enlace entre sus favoritos).\
  Ahora puede \
  Introduzca la contrase�a para poder inscribirse\
  le proporcionar� esta contrase�a.\
  �Bienvenido/a\
  El login debe contener entre 4 y 16 caaracteres (d�gitos o letras, no caracteres especiales, ni espacio).\
into name_remainig, name_year,name_statut,name_title,name_reserved,name_warning1,name_inscription,\
name_warning_protected,name_clickname,name_warning_login,name_passwd_warning,name_passwd_exact,name_emptyemail,\
name_transfer1,name_otheractivities,name_write_adm,name_optional,name_accounttype,name_bookmark,name_youcan,\
name_writepasswd,name_obtainpasswd,name_hello,name_warning_login2

!set name_remark1=Puede inscribirse libremente en las clases abiertas. Por el contrario\
  una clase protegida necesita una contrase�a que debe ser proporcionada por el profesor de la clase.

!set name_access1=!nosubst  Si el administrador ($supervisor) le autoriza a acceder,
!set name_access2=!nosubst  Si el profesor ($supervisor) le autoriza a acceder,
!set name_research=>Para buscar a un participante ya inscrito en $name_classes, escriba una de las partes de su nombre completo o del login
!set name_nofound=!nosubst con la b�squeda <span class="tt wims_code_words">$search</span> en los nombres o login no se ha hallado ninguna cuenta de participante

!set name_student=!nosubst $firstn $lastn!
!set name_studentadded=!nosubst El participante <span class="tt wims_login">$firstn $lastn</span> ha sido a�adido a su $name_classe con el identificador de usuario
!set name_welcome=!nosubst Ya est� inscrito(a), con el identificador de usuario
!set name_newparticipant=!nosubst Por favor proporcione las siguientes informaciones relativas al nuevo participante en $classname
!set name_inscription2=!nosubst Para inscribirse como participante en $name_classes $classname, por favor proporcione las informaciones siguientes
!set name_inscription3=!nosubst Se est� inscribiendo como participante $name_classesss $classname, con el identificador de usuario
!set name_inscription4= Para validar su registro, debe aceptar las condiciones de uso despu�s de haberlas le�do
!set name_inscription21=!nosubst Para inscribirse como participante en $name_classes $classname, por favor proporcione las informaciones siguientes
!set name_inscription31=!nosubst Se est� inscribiendo como participante $name_classesss $classname, con el identificador de usuario

!set name_warning_direct=La inscripci�n directa a $name_classess se reserva a\
  profesores. Si eres alumno, favor de inscribirse
!set name_cgu=Acepto las condiciones generales de uso
!set name_seecgu=Ver CGU

!set name_title_participant=Student registration
!set name_title_supervisor=Teacher registration
