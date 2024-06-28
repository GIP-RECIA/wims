!set lang_exists=yes

!set name_intro=<span class="wims_emph">$module_title</span>\
 proporciona una forma de crear archivos relacionados con mol�culas (archivos de descripci�n de estructuras o im�genes de mol�culas).\
Esto se puede lograr\
gracias a\
<a target="wims_external" href="http://cactus.nci.nih.gov/"> <i>National Cancer Institute</i> online service</a>\
 o \
<a target="wims_external" href="http://openbabel.org">Openbabel</a>\
 a partir de:<br>\
- un archivo de descripci�n de estructura (formatos usuales permitidos: mol, pdb, xyz, sdf, ...)<br>\
- un c�digo (SMILES, InChI o IUPAC)<br>\
- un nombre com�n (en ingl�s).<br>\
El resultado puede ser un archivo de estructura o una imagen (png o svg).\
Estos archivos se pueden almacenar directamente en el directorio <span class="tt wims_fname">data</span>\
de uno\
de sus m�dulos en desarrollo.<br>\
El prop�sito de esta herramienta es hacer m�s f�cil el desarrollo\
 de m�dulos de qu�mica.

!set name_warning_obabel=Tendr�as m�s posibilidades si Openbabel estuviera instalado.\

!set name_database=Usar la base de datos de <i>National Cancer Institute</i>.

!distribute lines en el m�dulo (directorio <span class="tt wims_fname">data</span>)\
  Opciones\
  entrar los datos (parejas <i><span class="tt">c�digo</span>, <span class="tt">nombre</span></i>)\
  Formato de salida\
  Dimensi�n\
  Nombre de archivo gen�rico\
  Opciones relativas a las salidas svg\
  Formato de entrada\
  Desde un archivo de estructura de mol�cula\
  Desde SMILES\
  Opciones de formato de salida \
  Opciones de salida\
  Altura del gr�fico\
  Ingrese el c�digo IUPAC o SMILES\
 into name_savemodule, name_option,name_data,name_format,name_option_dim,\
 name_file, name_option_svg,name_method,name_conversion1,\
 name_conversion_smile,name_format_out,name_output,name_height,name_database_help

!set name_savefile=!nosubst Los archivos se han almacenado correctamente en\
  el directorio <span class="tt wims_fname">data</span> del m�dulo <span class="tt wims_fname">$smod</span>.

!set name_promptoptionsvg=dibujar todos los �tomos de carbono, sin terminal de carbono expl�cito,\
   no colorear el �tomo del elemento espec�fico, no mostrar el nombre de la mol�cula
