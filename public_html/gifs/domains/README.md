To add an icon:

  * V�rifier la licence d'utilisation de l'icone (libre de droit, Creative Commons,...)
  * aller dans le r�pertoire `public_html/gifs/domains`
  * rajouter le fichier svg (par exemple, toto.svg) dans un des deux r�pertoires existants, par exemple dans general.
  * remplir le fichier `credits.md`, en pr�cisant bien la licence v�rifi�e au premier point.
  * rajouter une ligne dans le fichier `icons.css`�:

        .icon_toto { background-image:url("/wims/gifs/domains/general/toto.svg");}
  toto sera le nom qui s'affichera dans la liste propos�e aux enseignants.
  (Pensez � remplacer le dossier "general" par le dossier ou vous avez plac� l'image)
  * rajouter `toto` sur la premi�re ligne (entre les /* */ )
  * lancer le script `mkindex` dans `public_html/gifs/themes`
