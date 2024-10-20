:author: Georges Khaznadar <georgesk@debian.org>
:copyright: (c)2000-2020
:licence: GPL V2+

But de Chemeq
=============

chemeq est un filtre simple et autonome écrit en langage C,
flex et bison. Il accepte des entrées telles que :

`2H2 + O2 ---> 2 H2O`

et produit sur sa sortie standard du code LaTeX et des messages relatifs
À l'équilibre d'une équation de réaction chimique.

.. code-block::

   example:~/src$ echo "2H2 + O2 ---> 2 H2O" | chemeq -lc
   2\,H_{2}\,+\,O_{2}\,\rightarrow\,2\,H_{2}O
   OK
   example:~/src$

   
ce qui signifie : 2 molécules de dihydrogène réagissent avec une molécule de
dioxygène pour donner deux molécules d'eau.
La première ligne, ``"2\,H_{2}\,+\,O_{2}\,\rightarrow\,2\,H_{2}O"`` est une
réécriture de l'équation en langage LaTeX.

La deuxième ligne `"OK"` signifie que l'équation de réaction est équilibrée.


Quand la chaîne d'entrée n'est pas reconnue, le filtre échoue et 
renvoie un code `1`.

.. code-block::

   example:~/src$ echo "2H^2 + O2 ---> 2 H2O" | chemeq -lc
   ERROR parse error at 4
   example:~/src$

   
NOTE : syntaxe des ions
-----------------------

Bien que dans certains cas, une expression plus courte soit acceptée,
il est préférable de mettre une flèche haute (^) devant les symboles
de charge d'un ion.

Exemples : `H3O^+, Fe(CN)6^4-, OH^-`

NOTE : crochets
---------------

L'écriture de crochets est autorisée autour de la notation d'un corps simple,
comme pour `[Fe(CN)6]4-`, et seulement dans ce cas.

NOTE : constantes d'équilibre chimique
--------------------------------------

Pour les équilibres chimiques, la constante pour l'équation de Gulder-Waage
ou le potentiel pour l'équation de Nernst peut être écrite à la fin de
l'équation, entre parenthèses. Voir quelques exemples dans ``src/test.1``, et
typographiez-les grâce à LaTeX par la commande ``src/chemreport``

Ce filtre peut être utilisé au sein de systèmes d'examens éducatifs,
pour analyser la réponse d'un étudiant à un problème de physique ou
de chimie.

Les suggestions sont bienvenues.

Les options de chemeq
=====================

On peut choisir le format de sortie de chemeq en spécifiant quelques options.
Les options valides sont les suivantes :


.. code-block::

  -h	produit un message d'aide en anglais (*H*elp)
  -m	Produit une sortie *M*inimale. Ainsi chemeq est idempotent,
	c'est à dire que les commandes 'chemeq | chemeq' et 'chemeq' sont
	équivalentes.
  -l	Produit une chaîne *L*atex représentant l'équation chimique.
  -c	Produit un message donnant des indications sur la *C*onservation des
	éléments et des charges. 'OK' signifie que les éléments et les charges
	sont conservés.
  -w	Produit la chaîne LaTeX qui représente l'équation de Gulder-*W*aage
	relative à l'équation chimique, ou l'équation de Nernst, si l'équation
	de départ est une demi-réaction rédox.
  -n	Produit une chaîne *N*ormalisée représentant l'équation de départ.
	Deux équations chimiques ayant la même chaîne normalisée sont 
	chimiquement équivalentes, même si l'ordre des molécules est différent,
	et si les coefficients ne sont pas égaux mais proportionnels.

Par défaut, ``chemeq`` est équivalent à ``chemeq -mlcwn``.

INSTALLATION
============

Pour compiler chemeq, lancez '``make``' dans le répertoire principal chemeq.
Pour l'installer avec sa page de manuel, lancez '``make install``' dans ce
même répertoire.

TEST et DÉMONSTRATION
=====================


Si on modifie le code source, il est possible de tester sa conformité
aux versions précédentes en lançant '``make test``' dans le répertoire
principal.

Si '``make test``' répond 'OK' à chaque item, et que latex et xdvi
sont installés, on peut lancer '``make demo``' pour voir quelques
exemples de traitement typographique.
