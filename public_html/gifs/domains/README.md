To add an icon:

  * Vérifier la licence d'utilisation de l'icone (libre de droit, Creative Commons,...)
  * aller dans le répertoire `public_html/gifs/domains`
  * rajouter le fichier svg (par exemple, toto.svg) dans un des deux répertoires existants, par exemple dans general.
  * remplir le fichier `credits.md`, en précisant bien la licence vérifiée au premier point.
  * rajouter une ligne dans le fichier `icons.css` :

        .icon_toto { background-image:url("/wims/gifs/domains/general/toto.svg");}
  toto sera le nom qui s'affichera dans la liste proposée aux enseignants.
  (Pensez à remplacer le dossier "general" par le dossier ou vous avez placé l'image)
  * rajouter `toto` sur la première ligne (entre les /* */ )
  * lancer le script `mkindex` dans `public_html/gifs/themes`
