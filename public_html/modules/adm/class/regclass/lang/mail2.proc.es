!set lang_exists=yes
!bound adresse2 within $regpassmail default $empty
!if $adresse2=$empty or $adresse1=$empty
 wims_module_log=sendpwd error $adresse1@$adresse2
 !reset adresse1,adresse2
 !exit
!endif

sendmail=$adresse1@$adresse2
!reset adresse1,adresse2,regpass
wims_module_log=sendpwd $sendmail
!mailto $sendmail\
\
C�digo para la creaci�n de una clase en el servidor WIMS\
\
Ah� tienes el c�digo para creaci�n de una clase :\
\
		$regpasswd\
\
Quiere entrar este c�digo en la p�gina Internet de la creaci�n de su clase.\
\
\
Si no saben de que se trata: es que alguien de otro dio su direcci�n
electr�nica (err�neamente) a un programa inform�tico autom�tico. \
En ese caso pueden ignorar este mensaje.\

     




