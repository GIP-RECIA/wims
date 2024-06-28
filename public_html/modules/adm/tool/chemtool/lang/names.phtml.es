!set lang_exists=yes

!set name_intro=<span class="wims_emph">$module_title</span>\
 proporciona una forma de crear archivos relacionados con moléculas (archivos de descripción de estructuras o imágenes de moléculas).\
Esto se puede lograr\
gracias a\
<a target="wims_external" href="http://cactus.nci.nih.gov/"> <i>National Cancer Institute</i> online service</a>\
 o \
<a target="wims_external" href="http://openbabel.org">Openbabel</a>\
 a partir de:<br>\
- un archivo de descripción de estructura (formatos usuales permitidos: mol, pdb, xyz, sdf, ...)<br>\
- un código (SMILES, InChI o IUPAC)<br>\
- un nombre común (en inglés).<br>\
El resultado puede ser un archivo de estructura o una imagen (png o svg).\
Estos archivos se pueden almacenar directamente en el directorio <span class="tt wims_fname">data</span>\
de uno\
de sus módulos en desarrollo.<br>\
El propósito de esta herramienta es hacer más fácil el desarrollo\
 de módulos de química.

!set name_warning_obabel=Tendrías más posibilidades si Openbabel estuviera instalado.\

!set name_database=Usar la base de datos de <i>National Cancer Institute</i>.

!distribute lines en el módulo (directorio <span class="tt wims_fname">data</span>)\
  Opciones\
  entrar los datos (parejas <i><span class="tt">código</span>, <span class="tt">nombre</span></i>)\
  Formato de salida\
  Dimensión\
  Nombre de archivo genérico\
  Opciones relativas a las salidas svg\
  Formato de entrada\
  Desde un archivo de estructura de molécula\
  Desde SMILES\
  Opciones de formato de salida \
  Opciones de salida\
  Altura del gráfico\
  Ingrese el código IUPAC o SMILES\
 into name_savemodule, name_option,name_data,name_format,name_option_dim,\
 name_file, name_option_svg,name_method,name_conversion1,\
 name_conversion_smile,name_format_out,name_output,name_height,name_database_help

!set name_savefile=!nosubst Los archivos se han almacenado correctamente en\
  el directorio <span class="tt wims_fname">data</span> del módulo <span class="tt wims_fname">$smod</span>.

!set name_promptoptionsvg=dibujar todos los átomos de carbono, sin terminal de carbono explícito,\
   no colorear el átomo del elemento específico, no mostrar el nombre de la molécula
