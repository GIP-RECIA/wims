# �tapes � suivre

- r�cup�rer une taxonomie avec des identifiants "logiques" du type

    ```
    titre de la taxonomie
    toto_01:titre 1
    toto_02:titre 2
    toto_01_02:titre 2 de 1
    ```

    Ici `01_02` est bien s�r un fils de `01`.

- la sauver sous les noms `ma_taxo.fr` et `ma_taxo.en` dans le r�pertoire
`wims/public_html/bases/sys/taxonomy`
(on peut bien s�r mettre d'autres langues mais c'est le minimum, m�me si tout est en francais).

- ajouter un fichier `wims/public_html/bases/classification/src/ma_taxo`
en y mettant le nom de module et les taxos qui leur correspondent.
(voir ceux existant)�: Par exemple

`H6/physics/OEFradioactivite.fr:toto_01_02`

- Executer `bin/mkindex`

- Si tout va bien, la taxonomie doit apparaitre dans la rubrique
    `Site-> Parcourir le site.`


--

Pour l'instant, quelque chose � changer dans `~/wims/public_html/modules/adm/tool/classification/var.def`
pour que l'outil de classification fonctionne (voir aussi pour les langues).
