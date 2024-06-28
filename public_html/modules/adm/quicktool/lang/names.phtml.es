!set lang_exists=yes
! set name_identifier=Identifícate.
! set name_help_general=ayuda general
! set name_creation=Creación de ejercicio
! set name_Example=Ejemplos
! set name_data=datos
! set name_change=cambiar de tipo
! set name_all=todo (limitado a 10)
! set name_all2=todas las preguntas del archivo
! set name_position=junto a las palabras, fuera del texto, entre líneas
! set name_position2=al interior del texto, al exterior del texto
! set name_e=Permitir escribir e 'en lugar de é ...
! set name_format=Formato de respuesta
! set name_listhelp=sin ayuda, número de letras, algunas letras, audio, ayuda individual, respuesta mostrada
! set name_prompt=Preguntar
! set name_quifaitquoi=Quién hace qué, Qué hace quién, aleatoriamente uno u otro
! set name_expert=Menú experto
! set name_format_text=texto ajustado al tamaño de la ventana (recomendado), texto en su formato original
! set name_click=haga clic en la palabra
! set name_name_data=Archivo de datos
! set name_name_file=Archivo fuente
! set name_sup_file=Verifique o cargue archivos adicionales.
! set name_newmodule=Primero crea un nuevo módulo
! set name_choice=elegir
! set name_transfer=transferir
! set name_reading=leer archivo
! set name_image=imagen
! set name_audio=audio
! set name_backlist=Otros archivos si es necesario
! set name_format_data=Formato del archivo de datos
! establecer name_write_manager=escribiendo al administrador del sitio
! set wims_name_remark=Nota
! set name_commun=Recordatorios de características comunes
! set name_gen_data=El ejercicio se construirá a partir del contenido (datos) que usted \
va a poner este archivo con la siguiente sintaxis específica:

!set name_list_exo=QCM,Falso-verdadero, Seleccionar, Seleccionar para, Completar, Ordenar, Redactar, Coincidir, Quién hace qué, Tónico
!distribute item $name_list_exo into wims_name_quick_QCM,wims_name_quick_TRUEFALSE,wims_name_quick_SELECTWORD,wims_name_quick_SELECTWORDA,\
wims_name_quick_GAP,wims_name_quick_ORDONNE,wims_name_quick_COMPOSE,wims_name_quick_CORRESP,\
wims_name_quick_QUIFAITQUOI,wims_name_quick_TONIC

!distribute item $name_list_exo into wims_name_help_QCM,wims_name_help_TRUEFALSE,wims_name_help_SELECTWORD,wims_name_help_SELECTWORDA,\
wims_name_help_GAP,wims_name_help_ORDONNE,wims_name_help_COMPOSE,wims_name_help_CORRESP,\
wims_name_help_QUIFAITQUOI,wims_name_help_TONIC

!distribute item Intento 1&nbsp;,Intento 2&nbsp;, Intento 3&nbsp;, Intento 4&nbsp;,Número de intentos\
into name_trial1,name_trial2,name_trial3,name_trial4,name_trialcnt

!set name_setup= Parametraje
