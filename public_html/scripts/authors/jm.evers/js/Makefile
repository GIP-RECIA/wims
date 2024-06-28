####################################################################
# This Makefile is introduced to lower the delta between legacy wims
# source package and debian wims source package. In the legacy package,
# minimized Javascript files are not rebuilt; this Makefile allows one
# to rebuild those obfuscated files from sources with free-open-source
# tools.
####################################################################

all: jqmath.js geogebra2wims.js

jqmath.js: src/*.js
	# del previous version
	rm -f $@
	cat src/jquery-1.4.3.js src/jscurry-0.3.0.js src/jqmath-0.4.0.js > $@

geogebra2wims.js: src/geogebra2wims.js
	uglifyjs src/geogebra2wims.js --beautify indent-level=4,width=80 -o $@

clean:
	rm -f *~ jqmath.js geogebra2wims.js

.PHONY: clean
