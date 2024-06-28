# To add a theme:

1. Decide on the name of the theme. If the theme is not intended for
   publication, please put it under the subdirectory "local":
   `local/1`, `local/YourName`, etc.

   Say the name is `local/1`.

2. Copy the content of `public_html/themes/standard` to
   `public_html/themes/local/1`, and modify.

- un fichier css global est créé par le script mkcss.pl dans themes.
   Ce script concatene et minimise les fichiers css dont la liste est dans le fichier `css.css.template` (respecter la syntaxe ...).
   Vous pouvez ainsi utiliser des fichiers css communs dans `themes/_css` des fichiers d'autres thèmes (à manier avec précaution) ou dans le répertoire `local/1/_css` de votre thème.

- Si vous désirez garder certains fichiers sans changement,
  il est conseillé de faire plutôt un changement de fichiers.
  Par exemple, si vous désirez conserver sans modification le fichier supervisor.phtml
   créez-le en écrivant simplement par exemple
  `!changeto themes/standard/supervisor.phtml`

- Le fichier `local.phtml.template` une fois changé en `local_phtml.fr`
   permet d'inclure des modules administratifs locaux dans les menus

- vous pouvez changer le "vocabulaire" dans la version de langue xx
  (par exemple xx=fr) de la manière suivante :
  créez un répertoire lang.
  Si vous désirez changer la définition des noms
  définis dans html, faites-le dans un fichier
  `lang/home_names.xx`.
  Si les définitions sont faites dans un module administratif,
  par exemple dans `modules/adm/class/exam/lang/names.phtml.xx`, faites-le dans un fichier de nom
  `adm_class_exam_lang_names.phtml.xx`

- il est possible d'utiliser les "widgets" du répertoire `themes/_widgets`

  widget front.phtml:
  `!read themes/_widgets/frontmsg.phtml local/data/news.fr blocnews blocexamples`
  argument: `nom_du_module` `nom_du_bloc_news` `nom_du_bloc_exemple`
    (le module doit être dans `local/data`)
  css nécessaires (à rajouter dans `css.css.template`)
  `_css/news.css _css/foundation_button.css _css/foundation_animation.css`

À faire :

- nettoyer un peu plus les fichiers pour n'avoir qu'une succession
de widgets.
- bientôt un appel du type
  `!read themes/_widgets/visitormenubox.phtml`
  lira s'il existe `themes/local/1/_widgets/visitormenubox.phtml` dans `themes/local/1/_widgets` et sinon dans `themes/_widgets`.

* wims_homeref_n0 = renouveler, aide, wims_menu_items (liens venant des modules)
* wims_homeref_n1 : lien sur feuille, séquence, aide, about, resume, divers ! print
* wims_homeref_n2 :
* wims_homeref_n3 : était prévu pour des tabs, ne contient rien à supprimer
* wims_homeref_n4 : contrôle des scores par l'élève
* wims_homeref_n5 contient pour l'instant uniquement l'aide feedback des exos
* wims_hm : lien du menu supérieur (headmenu)
