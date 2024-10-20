CHEMEQ
######

:author: Georges Khaznadar <georgesk@debian.org>
:copyright: (c)2000-2020
:licence: GPL V2+

Purpose
=======

chemeq is a basic standalone filter written in C language,
flex and bison. It inputs strings like:

`2H2 + O2 ---> 2 H2O`

and can outputs LaTeX code and messages about the equilibrium of a
chemical reaction.

.. code-block::

   example:~/src$ echo "2H2 + O2 ---> 2 H2O" | chemeq -lc
   2\,H_{2}\,+\,O_{2}\,\rightarrow\,2\,H_{2}O
   OK
   example:~/src$

   
which means : 2 molecules of dihydrogen react with one molecule of
dioxygen, yelding two water molecules.
The first line, ``"2\,H_{2}\,+\,O_{2}\,\rightarrow\,2\,H_{2}O"`` is a
translation of the equation in LaTeX language.

The second line `"OK"` means that the equation is well equilibrated.

When the input is not successfully parsed, the filter fails with
the exit code `1`.

.. code-block::

   example:~/src$ echo "2H^2 + O2 ---> 2 H2O" | chemeq -lc
   ERROR parse error at 4
   example:~/src$

   
NOTE : syntax of ions
---------------------

allthough in some cases, shorter expressions are sucessfully parsed,
it is safer to consider that an "up arrow" (^) must be put before the
charge symbols of an ion.

Examples : `H3O^+, Fe(CN)6^4-, OH^-`

NOTE : square brackets
----------------------

Square brackets are allowed outside of a simple chemical notation, as in
`[Fe(CN)6]4-`, and only there.

NOTE : Chemical equilibrium constants
-------------------------------------

For chemical equilibriums, the constant for the Gulder-Waage equation or
the potential for the Nernst equation can be written at the end of the
equation, surrounded by parentheses. See some examples in ``src/test.1``, and
get them rendered by LaTeX with the command ``src/chemreport``

This filter can be embedded in educational test systems, in order to
analyze a student's answer to a problem of physics or chemistry.

Feedback is welcome.

Chemeq options
==============

You can choose chemeq's output by specifying some options.
Valid options are the following :

.. code-block::

  -h	outputs a *H*elp message.
  -m	outputs a *M*inimal output. It allows chemeq to be idempotent,
	i.e. the command 'chemeq | chemeq' is equivalent to 'chemeq'.
  -l	outputs a *L*aTeX string representing the chemical equation.
  -c	outputs a message giving informations about the *C*onservation of
	elements and charges in the equation. 'OK' means that both elements
	and electric charges are balanced.
  -w	outputs the LaTeX string representing the Gulder-*W*aage equation
	related to the input chemical equation, or the Nernst equation,
	if the input equation is a redox semi-equation.
  -n	outputs a *N*ormalized string accounting for the input equation.
	Two chemical equations having the same normalized string are chemically
	equivalent, even if the molecules are scrambled around and the 
	coefficient are not equal but proportionnal.


``chemeq`` defaults to ``chemeq -mlcwn``.

CHEMICAL DATA
=============

Chemeq comes with a buil-in data set. The molar mass of elements come
from  https://webbook.nist.gov/

INSTALLATION
============

To build chemeq, run '``make``' in the main chemeq directory, to install it 
with its man page, run '``make install``' in the main directory.


TEST MODE and DEMO
==================

If you modifiy the source code, it is possible to test its conformance
to previous versions by running '``make test``' in the main directory.

If '``make test``' replies 'OK' for all items, and if you have latex
and xdvi installed, you can run '``make demo``' to see some examples
of typesetting.
