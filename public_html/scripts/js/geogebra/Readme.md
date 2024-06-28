# [WIMS USER] Updating GeogebraWeb Library :

If you want tu use the latest ggb library adaptated to your WIMS version, just update your Geogebraweb-WIMS:

	./compile --geogebra

# Test your GeogebraWeb Installation
There are several WIMS modules using GegebraWeb.
You can test for example one of these:

* [H1/geometry/OEFtriang5.fr](http://localhost/wims/wims.cgi?module=H1/geometry/OEFtriang5.fr&cmd=new&exo=constr1)
* [H3/geometry/oefprogpythag.fr](http://localhost/wims/wims.cgi?module=H3/geometry/oefprogpythag.fr&cmd=new&exo=experim)
* [U1/geometry/docisometriesplan.fr](http://localhost/wims/wims.cgi?module=U1%2Fgeometry%2Fdocisometriesplan.fr&+cmd=new&+job=read&+doc=1&+block=mainS2S1S1)
* [H5/geometry/vecteurs.fr](http://localhost/wims/wims.cgi?module=H5%2Fgeometry%2Fvecteurs.fr&cmd=new&job=read&doc=1&block=mainS1S1)

---
# [WIMS DEV] Upgrading GeogebraWeb Library :
[](https://wiki.geogebra.org/en/Reference:GeoGebra_Apps_Embedding#Offline_and_Self-Hosted_Solution)

## Download new version

* Download the latest GGB bundle at [dev.geogebra.org/download/web](http://dev.geogebra.org/download/web/)
    * Usually, it is the [geogebra-math-apps-bundle-5-xxx.zip](https://dev.geogebra.org/download/web/geogebra-math-apps-bundle-5-0-700-0.zip)

* unzip it and use its content to replace the geogebraweb folder

## Modify "deployggb.js"
replace your deployggb.js by the one included in the zip you just downloaded

## Adapt GGB code for WIMS

### Hack WIMS 1 :
GGB use it's own hosted library. To use WIMS included GGB version, replace the original *getTubeURL()* geogebra function in *deployggb.js* by this:

    var getTubeURL = function() {
        return "scripts/js/geogebra/geogebraweb/";
     };
nb : the original `getTubeURL` function finish by `return tubeurl};`

### Hack WIMS 2 :
Then, replace in "deployggb.js" `codebase="https://cdn.geogebra.org/apps/"+latestVersion+"/"`
 by `codebase = getTubeURL();`

### Hack WIMS 3 :
Since WIMS 4.x still use ISO-xxx charsets (not UTF-8), you must add this to each geogebra "####.cache.js" files (web/ & web3d/):

	d.charset='utf-8';

just before something like this:

	d.src=e+'js/properties_keys_'

Don't forget to clean your browser cache, and then

## Test the new version on existing modules
samples of exercices to be tested :
* [H2/geometry/oefevalwimssym.fr](//localhost/wims/?cmd=new&module=H2/geometry/oefevalwimssym.fr&exo=conservation2)
* [H4/geometry/anglesCercleTrigo.fr](//localhost/wims/?cmd=new&module=H4%2Fgeometry%2FanglesCercleTrigo.fr)

## Publish new GGBWeb version into WIMS
* duplicate your geogebraweb folder
* rename it "GeoGebraWeb-WIMS-5.X.YYY.0", so it contains the new version number
* zip it
* If you'r on MacOS X :
	* `for file in *.zip; do zip "$file" -qd "__MACOSX/*"; done`
* send it to wims.univ-cotedazur.fr/download server (ask his administrator [bado@unice.fr](mailto:bado@unice.fr))
* Update the variable vGeogebra in the ./compile file at WIMS root, so it contains the new Geogebra number version
* remove the duplicated folder and the zip archive

## See More...
Nb : if you're curious to see non-obfuscated geogebra code, you have to follow these explanations :
[dev.geogebra.org/trac/wiki/SetUp](https://dev.geogebra.org/trac/wiki/SetUp)
