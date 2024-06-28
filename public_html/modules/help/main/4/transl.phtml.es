!set lang_exists=yes

<p>WIMS est� preparado para su utilizaci�n en varios idiomas. En la actualidad
est� disponible en ingl�s, franc�s, chino, y otros.
</p><p>
Se ha puesto esfuerzo en facilitar el proceso de traducci�n incluso a
personas con escasos conocimientos de programaci�n. No obstante, dados
la inmensa cantidad de contenidos incluidos en el sistema y su desarrollo
constante, la traducci�n de WIMS a un nuevo idioma conlleva gran cantidad
de trabajo.
</p><p>
Por otro lado, a causa de la vocaci�n educativa de WIMS, la traducci�n a
su lengua materna puede representar un importante servicio a las j�venes
generaciones de su pa�s.
</p><p>
Si est� interesado en traducir WIMS a su lengua materna, p�ngase por
favor en <a href="mailto:translation@wimsedu.info">contacto conmigo</a>.</p>

El siguiente es un breve extracto de mi respuesta al traductor `virtual' al holand�s:
<pre>
En primer lugar tengo que declarar el idioma del n�cleo de WIMS.
�Qu� extensi�n debe llevar? (como 'en' para el ingl�s, 'fr' para el
franc�s, 'it' para el italiano, etc. �'nl' para el holand�s?). Tambi�n
necesito una imagen peque�a con la bandera nacional para representar el
idioma.

Para averiguar qu� ficheros hay que traducir, disponemos de una regla muy
simple. Siempre que haya ficheros y directorios con el mismo nombre pero
con distintas extensiones (por ejemplo .en y .fr), deberemos a�adir el
correspondiente fichero o directorio con la extensi�n .nl.

Y para ver qu� l�neas hay que traducir, podemos hacer (con diff) una
comparaci�n entre las versiones inglesa y francesa.

A veces la versi�n francesa contiene ficheros que son meros enlaces
a la correspondiente inglesa. En este caso lo �nico que hay que hacer es
copiar el enlace a la versi�n holandesa.

Todo lo que hay que traducir est� en el directorio public_html. Los
archivos de sistema est� principalmente en los siguientes subdirectorios:

modules/adm, modules/home, modules/help, modules/template,
modules/classes, bases/sys, html, msg.

Tambi�n hay una peque�a cantidad de ficheros multi-lenguaje que deber�an
modificarse, a�adiendo la parte holandesa (aunque esto no es absolutamente
necesario):

html/module_about
modules/home/languages
modules/home/askcookie.phtml
scripts/about.phtml
scripts/related.phtml
scripts/tool.phtml

Aparte del sistema, se pueden traducir los m�dulos de recursos que
resulten interesantes.
------------------------

Para empezar, copie TODOS los ficheros en franc�s (o en ingl�s) y p�ngales
la extensi�n del holand�s, y despu�s vaya traduci�ndolos. Por ejemplo, la
p�gina de inicio depende exclusivamente de lo que conste en modules/home.
</pre>
