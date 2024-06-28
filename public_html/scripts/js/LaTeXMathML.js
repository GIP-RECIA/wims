/*
LaTeXMathML.js
==============

This file, in this form, is due to Douglas Woodall, June 2006.
It contains JavaScript functions to convert (most simple) LaTeX
math notation to Presentation MathML.  It was obtained by
downloading the file ASCIIMathML.js from
	http://www1.chapman.edu/~jipsen/mathml/asciimathdownload/
and modifying it so that it carries out ONLY those conversions
that would be carried out in LaTeX.  A description of the original
file, with examples, can be found at
	www1.chapman.edu/~jipsen/mathml/asciimath.html
	ASCIIMathML: Math on the web for everyone

Here is the header notice from the original file:

ASCIIMathML.js
==============
This file contains JavaScript functions to convert ASCII math notation
to Presentation MathML. The conversion is done while the (X)HTML page
loads, and should work with Firefox/Mozilla/Netscape 7+ and Internet
Explorer 6+MathPlayer (http://www.dessci.com/en/products/mathplayer/).
Just add the next line to your (X)HTML page with this file in the same folder:
<script type="text/javascript" src="ASCIIMathML.js"></script>
This is a convenient and inexpensive solution for authoring MathML.

Version 1.4.7 Dec 15, 2005, (c) Peter Jipsen http://www.chapman.edu/~jipsen
Latest version at http://www.chapman.edu/~jipsen/mathml/ASCIIMathML.js
For changes see http://www.chapman.edu/~jipsen/mathml/asciimathchanges.txt
If you use it on a webpage, please send the URL to jipsen@chapman.edu

This program is free software; you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation; either version 2 of the License, or (at
your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
General Public License (at http://www.gnu.org/copyleft/gpl.html)
for more details.

LaTeXMathML.js (ctd)
==============

The instructions for use are the same as for the original
ASCIIMathML.js, except that of course the line you add to your
file should be
<script type="text/javascript" src="LaTeXMathML.js"></script>
Or use absolute path names if the file is not in the same folder
as your (X)HTML page.
*/
!function(){var checkForMathML=!0,notifyIfNoMathML=!0,alertIfNoMathML=!1,mathcolor="",mathfontfamily="",showasciiformulaonhover=!0,isIE=null==document.createElementNS;function LMcreateElementXHTML(t){return isIE?document.createElement(t):document.createElementNS("http://www.w3.org/1999/xhtml",t)}function LMnoMathMLNote(){var nd=LMcreateElementXHTML("h3");nd.setAttribute("align","center"),nd.appendChild(LMcreateElementXHTML("p")),nd.appendChild(document.createTextNode("To view the "));var an=LMcreateElementXHTML("a");return an.appendChild(document.createTextNode("LaTeXMathML")),an.setAttribute("href","http://www.maths.nott.ac.uk/personal/drw/lm.html"),nd.appendChild(an),nd.appendChild(document.createTextNode(" notation use Internet Explorer 6+")),(an=LMcreateElementXHTML("a")).appendChild(document.createTextNode("MathPlayer")),an.setAttribute("href","http://www.dessci.com/en/products/mathplayer/download.htm"),nd.appendChild(an),nd.appendChild(document.createTextNode(" or Netscape/Mozilla/Firefox")),nd.appendChild(LMcreateElementXHTML("p")),nd}null==document.getElementById&&alert("This webpage requires a recent browser such as\nMozilla/Netscape 7+ or Internet Explorer 6+MathPlayer");var CONST=0,UNARY=1,BINARY=2,INFIX=3,LEFTBRACKET=4,RIGHTBRACKET=5,SPACE=6,UNDEROVER=7,DEFINITION=8,TEXT=9,BIG=10,LONG=11,STRETCHY=12,MATRIX=13,LMsymbols=[{input:"\\alpha",tag:"mi",output:"α",ttype:CONST},{input:"\\beta",tag:"mi",output:"β",ttype:CONST},{input:"\\gamma",tag:"mi",output:"γ",ttype:CONST},{input:"\\delta",tag:"mi",output:"δ",ttype:CONST},{input:"\\epsilon",tag:"mi",output:"ε",ttype:CONST},{input:"\\varepsilon",tag:"mi",output:"ɛ",ttype:CONST},{input:"\\zeta",tag:"mi",output:"ζ",ttype:CONST},{input:"\\eta",tag:"mi",output:"η",ttype:CONST},{input:"\\theta",tag:"mi",output:"θ",ttype:CONST},{input:"\\vartheta",tag:"mi",output:"ϑ",ttype:CONST},{input:"\\iota",tag:"mi",output:"ι",ttype:CONST},{input:"\\kappa",tag:"mi",output:"κ",ttype:CONST},{input:"\\lambda",tag:"mi",output:"λ",ttype:CONST},{input:"\\mu",tag:"mi",output:"μ",ttype:CONST},{input:"\\nu",tag:"mi",output:"ν",ttype:CONST},{input:"\\xi",tag:"mi",output:"ξ",ttype:CONST},{input:"\\pi",tag:"mi",output:"π",ttype:CONST},{input:"\\varpi",tag:"mi",output:"ϖ",ttype:CONST},{input:"\\rho",tag:"mi",output:"ρ",ttype:CONST},{input:"\\varrho",tag:"mi",output:"ϱ",ttype:CONST},{input:"\\varsigma",tag:"mi",output:"ς",ttype:CONST},{input:"\\sigma",tag:"mi",output:"σ",ttype:CONST},{input:"\\tau",tag:"mi",output:"τ",ttype:CONST},{input:"\\upsilon",tag:"mi",output:"υ",ttype:CONST},{input:"\\phi",tag:"mi",output:"φ",ttype:CONST},{input:"\\varphi",tag:"mi",output:"ϕ",ttype:CONST},{input:"\\chi",tag:"mi",output:"χ",ttype:CONST},{input:"\\psi",tag:"mi",output:"ψ",ttype:CONST},{input:"\\omega",tag:"mi",output:"ω",ttype:CONST},{input:"\\Gamma",tag:"mo",output:"Γ",ttype:CONST},{input:"\\Delta",tag:"mo",output:"Δ",ttype:CONST},{input:"\\Theta",tag:"mo",output:"Θ",ttype:CONST},{input:"\\Lambda",tag:"mo",output:"Λ",ttype:CONST},{input:"\\Xi",tag:"mo",output:"Ξ",ttype:CONST},{input:"\\Pi",tag:"mo",output:"Π",ttype:CONST},{input:"\\Sigma",tag:"mo",output:"Σ",ttype:CONST},{input:"\\Upsilon",tag:"mo",output:"Υ",ttype:CONST},{input:"\\Phi",tag:"mo",output:"Φ",ttype:CONST},{input:"\\Psi",tag:"mo",output:"Ψ",ttype:CONST},{input:"\\Omega",tag:"mo",output:"Ω",ttype:CONST},{input:"\\frac12",tag:"mo",output:"½",ttype:CONST},{input:"\\frac14",tag:"mo",output:"¼",ttype:CONST},{input:"\\frac34",tag:"mo",output:"¾",ttype:CONST},{input:"\\frac13",tag:"mo",output:"⅓",ttype:CONST},{input:"\\frac23",tag:"mo",output:"⅔",ttype:CONST},{input:"\\frac15",tag:"mo",output:"⅕",ttype:CONST},{input:"\\frac25",tag:"mo",output:"⅖",ttype:CONST},{input:"\\frac35",tag:"mo",output:"⅗",ttype:CONST},{input:"\\frac45",tag:"mo",output:"⅘",ttype:CONST},{input:"\\frac16",tag:"mo",output:"⅙",ttype:CONST},{input:"\\frac56",tag:"mo",output:"⅚",ttype:CONST},{input:"\\frac18",tag:"mo",output:"⅛",ttype:CONST},{input:"\\frac38",tag:"mo",output:"⅜",ttype:CONST},{input:"\\frac58",tag:"mo",output:"⅝",ttype:CONST},{input:"\\frac78",tag:"mo",output:"⅞",ttype:CONST},{input:"\\pm",tag:"mo",output:"±",ttype:CONST},{input:"\\mp",tag:"mo",output:"∓",ttype:CONST},{input:"\\triangleleft",tag:"mo",output:"⊲",ttype:CONST},{input:"\\triangleright",tag:"mo",output:"⊳",ttype:CONST},{input:"\\cdot",tag:"mo",output:"⋅",ttype:CONST},{input:"\\star",tag:"mo",output:"⋆",ttype:CONST},{input:"\\ast",tag:"mo",output:"*",ttype:CONST},{input:"\\times",tag:"mo",output:"×",ttype:CONST},{input:"\\div",tag:"mo",output:"÷",ttype:CONST},{input:"\\circ",tag:"mo",output:"∘",ttype:CONST},{input:"\\bullet",tag:"mo",output:"•",ttype:CONST},{input:"\\oplus",tag:"mo",output:"⊕",ttype:CONST},{input:"\\ominus",tag:"mo",output:"⊖",ttype:CONST},{input:"\\otimes",tag:"mo",output:"⊗",ttype:CONST},{input:"\\bigcirc",tag:"mo",output:"○",ttype:CONST},{input:"\\oslash",tag:"mo",output:"⊘",ttype:CONST},{input:"\\odot",tag:"mo",output:"⊙",ttype:CONST},{input:"\\land",tag:"mo",output:"∧",ttype:CONST},{input:"\\wedge",tag:"mo",output:"∧",ttype:CONST},{input:"\\lor",tag:"mo",output:"∨",ttype:CONST},{input:"\\vee",tag:"mo",output:"∨",ttype:CONST},{input:"\\cap",tag:"mo",output:"∩",ttype:CONST},{input:"\\cup",tag:"mo",output:"∪",ttype:CONST},{input:"\\sqcap",tag:"mo",output:"⊓",ttype:CONST},{input:"\\sqcup",tag:"mo",output:"⊔",ttype:CONST},{input:"\\uplus",tag:"mo",output:"⊎",ttype:CONST},{input:"\\amalg",tag:"mo",output:"∐",ttype:CONST},{input:"\\bigtriangleup",tag:"mo",output:"△",ttype:CONST},{input:"\\bigtriangledown",tag:"mo",output:"▽",ttype:CONST},{input:"\\dag",tag:"mo",output:"†",ttype:CONST},{input:"\\dagger",tag:"mo",output:"†",ttype:CONST},{input:"\\ddag",tag:"mo",output:"‡",ttype:CONST},{input:"\\ddagger",tag:"mo",output:"‡",ttype:CONST},{input:"\\lhd",tag:"mo",output:"⊲",ttype:CONST},{input:"\\rhd",tag:"mo",output:"⊳",ttype:CONST},{input:"\\unlhd",tag:"mo",output:"⊴",ttype:CONST},{input:"\\unrhd",tag:"mo",output:"⊵",ttype:CONST},{input:"\\sum",tag:"mo",output:"∑",ttype:UNDEROVER},{input:"\\prod",tag:"mo",output:"∏",ttype:UNDEROVER},{input:"\\bigcap",tag:"mo",output:"⋂",ttype:UNDEROVER},{input:"\\bigcup",tag:"mo",output:"⋃",ttype:UNDEROVER},{input:"\\bigwedge",tag:"mo",output:"⋀",ttype:UNDEROVER},{input:"\\bigvee",tag:"mo",output:"⋁",ttype:UNDEROVER},{input:"\\bigsqcap",tag:"mo",output:"⨅",ttype:UNDEROVER},{input:"\\bigsqcup",tag:"mo",output:"⨆",ttype:UNDEROVER},{input:"\\coprod",tag:"mo",output:"∐",ttype:UNDEROVER},{input:"\\bigoplus",tag:"mo",output:"⨁",ttype:UNDEROVER},{input:"\\bigotimes",tag:"mo",output:"⨂",ttype:UNDEROVER},{input:"\\bigodot",tag:"mo",output:"⨀",ttype:UNDEROVER},{input:"\\biguplus",tag:"mo",output:"⨄",ttype:UNDEROVER},{input:"\\int",tag:"mo",output:"∫",ttype:CONST},{input:"\\oint",tag:"mo",output:"∮",ttype:CONST},{input:":=",tag:"mo",output:":=",ttype:CONST},{input:"\\lt",tag:"mo",output:"<",ttype:CONST},{input:"\\gt",tag:"mo",output:">",ttype:CONST},{input:"\\ne",tag:"mo",output:"≠",ttype:CONST},{input:"\\neq",tag:"mo",output:"≠",ttype:CONST},{input:"\\le",tag:"mo",output:"≤",ttype:CONST},{input:"\\leq",tag:"mo",output:"≤",ttype:CONST},{input:"\\leqslant",tag:"mo",output:"≤",ttype:CONST},{input:"\\ge",tag:"mo",output:"≥",ttype:CONST},{input:"\\geq",tag:"mo",output:"≥",ttype:CONST},{input:"\\geqslant",tag:"mo",output:"≥",ttype:CONST},{input:"\\equiv",tag:"mo",output:"≡",ttype:CONST},{input:"\\ll",tag:"mo",output:"≪",ttype:CONST},{input:"\\gg",tag:"mo",output:"≫",ttype:CONST},{input:"\\doteq",tag:"mo",output:"≐",ttype:CONST},{input:"\\prec",tag:"mo",output:"≺",ttype:CONST},{input:"\\succ",tag:"mo",output:"≻",ttype:CONST},{input:"\\preceq",tag:"mo",output:"≼",ttype:CONST},{input:"\\succeq",tag:"mo",output:"≽",ttype:CONST},{input:"\\subset",tag:"mo",output:"⊂",ttype:CONST},{input:"\\supset",tag:"mo",output:"⊃",ttype:CONST},{input:"\\subseteq",tag:"mo",output:"⊆",ttype:CONST},{input:"\\supseteq",tag:"mo",output:"⊇",ttype:CONST},{input:"\\sqsubset",tag:"mo",output:"⊏",ttype:CONST},{input:"\\sqsupset",tag:"mo",output:"⊐",ttype:CONST},{input:"\\sqsubseteq",tag:"mo",output:"⊑",ttype:CONST},{input:"\\sqsupseteq",tag:"mo",output:"⊒",ttype:CONST},{input:"\\sim",tag:"mo",output:"∼",ttype:CONST},{input:"\\simeq",tag:"mo",output:"≃",ttype:CONST},{input:"\\approx",tag:"mo",output:"≈",ttype:CONST},{input:"\\cong",tag:"mo",output:"≅",ttype:CONST},{input:"\\Join",tag:"mo",output:"⋈",ttype:CONST},{input:"\\bowtie",tag:"mo",output:"⋈",ttype:CONST},{input:"\\in",tag:"mo",output:"∈",ttype:CONST},{input:"\\ni",tag:"mo",output:"∋",ttype:CONST},{input:"\\owns",tag:"mo",output:"∋",ttype:CONST},{input:"\\propto",tag:"mo",output:"∝",ttype:CONST},{input:"\\vdash",tag:"mo",output:"⊢",ttype:CONST},{input:"\\dashv",tag:"mo",output:"⊣",ttype:CONST},{input:"\\models",tag:"mo",output:"⊨",ttype:CONST},{input:"\\perp",tag:"mo",output:"⊥",ttype:CONST},{input:"\\smile",tag:"mo",output:"⌣",ttype:CONST},{input:"\\frown",tag:"mo",output:"⌢",ttype:CONST},{input:"\\asymp",tag:"mo",output:"≍",ttype:CONST},{input:"\\notin",tag:"mo",output:"∉",ttype:CONST},{input:"\\begin{eqnarray}",output:"X",ttype:MATRIX,invisible:!0},{input:"\\begin{array}",output:"X",ttype:MATRIX,invisible:!0},{input:"\\\\",output:"}&{",ttype:DEFINITION},{input:"\\end{eqnarray}",output:"}}",ttype:DEFINITION},{input:"\\end{array}",output:"}}",ttype:DEFINITION},{input:"\\big",tag:"mo",output:"X",atval:"1.2",ieval:"2.2",ttype:BIG},{input:"\\Big",tag:"mo",output:"X",atval:"1.6",ieval:"2.6",ttype:BIG},{input:"\\bigg",tag:"mo",output:"X",atval:"2.2",ieval:"3.2",ttype:BIG},{input:"\\Bigg",tag:"mo",output:"X",atval:"2.9",ieval:"3.9",ttype:BIG},{input:"\\left",tag:"mo",output:"X",ttype:LEFTBRACKET},{input:"\\right",tag:"mo",output:"X",ttype:RIGHTBRACKET},{input:"{",output:"{",ttype:LEFTBRACKET,invisible:!0},{input:"}",output:"}",ttype:RIGHTBRACKET,invisible:!0},{input:"(",tag:"mo",output:"(",atval:"1",ttype:STRETCHY},{input:"[",tag:"mo",output:"[",atval:"1",ttype:STRETCHY},{input:"\\lbrack",tag:"mo",output:"[",atval:"1",ttype:STRETCHY},{input:"\\{",tag:"mo",output:"{",atval:"1",ttype:STRETCHY},{input:"\\lbrace",tag:"mo",output:"{",atval:"1",ttype:STRETCHY},{input:"\\langle",tag:"mo",output:"〈",atval:"1",ttype:STRETCHY},{input:"\\lfloor",tag:"mo",output:"⌊",atval:"1",ttype:STRETCHY},{input:"\\lceil",tag:"mo",output:"⌈",atval:"1",ttype:STRETCHY},{input:")",tag:"mo",output:")",rtag:"mi",atval:"1",ttype:STRETCHY},{input:"]",tag:"mo",output:"]",rtag:"mi",atval:"1",ttype:STRETCHY},{input:"\\rbrack",tag:"mo",output:"]",rtag:"mi",atval:"1",ttype:STRETCHY},{input:"\\}",tag:"mo",output:"}",rtag:"mi",atval:"1",ttype:STRETCHY},{input:"\\rbrace",tag:"mo",output:"}",rtag:"mi",atval:"1",ttype:STRETCHY},{input:"\\rangle",tag:"mo",output:"〉",rtag:"mi",atval:"1",ttype:STRETCHY},{input:"\\rfloor",tag:"mo",output:"⌋",rtag:"mi",atval:"1",ttype:STRETCHY},{input:"\\rceil",tag:"mo",output:"⌉",rtag:"mi",atval:"1",ttype:STRETCHY},{input:"|",tag:"mo",output:"∣",atval:"1",ttype:STRETCHY},{input:"\\|",tag:"mo",output:"∥",atval:"1",ttype:STRETCHY},{input:"\\vert",tag:"mo",output:"∣",atval:"1",ttype:STRETCHY},{input:"\\Vert",tag:"mo",output:"∥",atval:"1",ttype:STRETCHY},{input:"\\mid",tag:"mo",output:"∣",atval:"1",ttype:STRETCHY},{input:"\\parallel",tag:"mo",output:"∥",atval:"1",ttype:STRETCHY},{input:"/",tag:"mo",output:"/",atval:"1.01",ttype:STRETCHY},{input:"\\backslash",tag:"mo",output:"∖",atval:"1",ttype:STRETCHY},{input:"\\setminus",tag:"mo",output:"\\",ttype:CONST},{input:"\\!",tag:"mspace",atname:"width",atval:"-0.167em",ttype:SPACE},{input:"\\,",tag:"mspace",atname:"width",atval:"0.167em",ttype:SPACE},{input:"\\>",tag:"mspace",atname:"width",atval:"0.222em",ttype:SPACE},{input:"\\:",tag:"mspace",atname:"width",atval:"0.222em",ttype:SPACE},{input:"\\;",tag:"mspace",atname:"width",atval:"0.278em",ttype:SPACE},{input:"~",tag:"mspace",atname:"width",atval:"0.333em",ttype:SPACE},{input:"\\quad",tag:"mspace",atname:"width",atval:"1em",ttype:SPACE},{input:"\\qquad",tag:"mspace",atname:"width",atval:"2em",ttype:SPACE},{input:"\\prime",tag:"mo",output:"′",ttype:CONST},{input:"'",tag:"mo",output:"ʹ",ttype:CONST},{input:"''",tag:"mo",output:"ʺ",ttype:CONST},{input:"'''",tag:"mo",output:"‴",ttype:CONST},{input:"''''",tag:"mo",output:"⁗",ttype:CONST},{input:"\\ldots",tag:"mo",output:"…",ttype:CONST},{input:"\\cdots",tag:"mo",output:"⋯",ttype:CONST},{input:"\\vdots",tag:"mo",output:"⋮",ttype:CONST},{input:"\\ddots",tag:"mo",output:"⋱",ttype:CONST},{input:"\\forall",tag:"mo",output:"∀",ttype:CONST},{input:"\\exists",tag:"mo",output:"∃",ttype:CONST},{input:"\\Re",tag:"mo",output:"ℜ",ttype:CONST},{input:"\\Im",tag:"mo",output:"ℑ",ttype:CONST},{input:"\\aleph",tag:"mo",output:"ℵ",ttype:CONST},{input:"\\hbar",tag:"mo",output:"ℏ",ttype:CONST},{input:"\\ell",tag:"mo",output:"ℓ",ttype:CONST},{input:"\\wp",tag:"mo",output:"℘",ttype:CONST},{input:"\\emptyset",tag:"mo",output:"∅",ttype:CONST},{input:"\\infty",tag:"mo",output:"∞",ttype:CONST},{input:"\\surd",tag:"mo",output:"\\sqrt{}",ttype:DEFINITION},{input:"\\partial",tag:"mo",output:"∂",ttype:CONST},{input:"\\nabla",tag:"mo",output:"∇",ttype:CONST},{input:"\\triangle",tag:"mo",output:"△",ttype:CONST},{input:"\\therefore",tag:"mo",output:"∴",ttype:CONST},{input:"\\angle",tag:"mo",output:"∠",ttype:CONST},{input:"\\diamond",tag:"mo",output:"⋄",ttype:CONST},{input:"\\Diamond",tag:"mo",output:"◇",ttype:CONST},{input:"\\neg",tag:"mo",output:"¬",ttype:CONST},{input:"\\lnot",tag:"mo",output:"¬",ttype:CONST},{input:"\\bot",tag:"mo",output:"⊥",ttype:CONST},{input:"\\top",tag:"mo",output:"⊤",ttype:CONST},{input:"\\square",tag:"mo",output:"▫",ttype:CONST},{input:"\\Box",tag:"mo",output:"□",ttype:CONST},{input:"\\wr",tag:"mo",output:"≀",ttype:CONST},{input:"\\arccos",tag:"mi",output:"arccos",ttype:UNARY,func:!0},{input:"\\arcsin",tag:"mi",output:"arcsin",ttype:UNARY,func:!0},{input:"\\arctan",tag:"mi",output:"arctan",ttype:UNARY,func:!0},{input:"\\arg",tag:"mi",output:"arg",ttype:UNARY,func:!0},{input:"\\cos",tag:"mi",output:"cos",ttype:UNARY,func:!0},{input:"\\cosh",tag:"mi",output:"cosh",ttype:UNARY,func:!0},{input:"\\cot",tag:"mi",output:"cot",ttype:UNARY,func:!0},{input:"\\coth",tag:"mi",output:"coth",ttype:UNARY,func:!0},{input:"\\csc",tag:"mi",output:"csc",ttype:UNARY,func:!0},{input:"\\deg",tag:"mi",output:"deg",ttype:UNARY,func:!0},{input:"\\det",tag:"mi",output:"det",ttype:UNARY,func:!0},{input:"\\dim",tag:"mi",output:"dim",ttype:UNARY,func:!0},{input:"\\exp",tag:"mi",output:"exp",ttype:UNARY,func:!0},{input:"\\gcd",tag:"mi",output:"gcd",ttype:UNARY,func:!0},{input:"\\hom",tag:"mi",output:"hom",ttype:UNARY,func:!0},{input:"\\inf",tag:"mo",output:"inf",ttype:UNDEROVER},{input:"\\ker",tag:"mi",output:"ker",ttype:UNARY,func:!0},{input:"\\lg",tag:"mi",output:"lg",ttype:UNARY,func:!0},{input:"\\lim",tag:"mo",output:"lim",ttype:UNDEROVER},{input:"\\liminf",tag:"mo",output:"liminf",ttype:UNDEROVER},{input:"\\limsup",tag:"mo",output:"limsup",ttype:UNDEROVER},{input:"\\ln",tag:"mi",output:"ln",ttype:UNARY,func:!0},{input:"\\log",tag:"mi",output:"log",ttype:UNARY,func:!0},{input:"\\max",tag:"mo",output:"max",ttype:UNDEROVER},{input:"\\min",tag:"mo",output:"min",ttype:UNDEROVER},{input:"\\Pr",tag:"mi",output:"Pr",ttype:UNARY,func:!0},{input:"\\sec",tag:"mi",output:"sec",ttype:UNARY,func:!0},{input:"\\sin",tag:"mi",output:"sin",ttype:UNARY,func:!0},{input:"\\sinh",tag:"mi",output:"sinh",ttype:UNARY,func:!0},{input:"\\sup",tag:"mo",output:"sup",ttype:UNDEROVER},{input:"\\tan",tag:"mi",output:"tan",ttype:UNARY,func:!0},{input:"\\tanh",tag:"mi",output:"tanh",ttype:UNARY,func:!0},{input:"\\gets",tag:"mo",output:"←",ttype:CONST},{input:"\\leftarrow",tag:"mo",output:"←",ttype:CONST},{input:"\\to",tag:"mo",output:"→",ttype:CONST},{input:"\\rightarrow",tag:"mo",output:"→",ttype:CONST},{input:"\\leftrightarrow",tag:"mo",output:"↔",ttype:CONST},{input:"\\uparrow",tag:"mo",output:"↑",ttype:CONST},{input:"\\downarrow",tag:"mo",output:"↓",ttype:CONST},{input:"\\updownarrow",tag:"mo",output:"↕",ttype:CONST},{input:"\\Leftarrow",tag:"mo",output:"⇐",ttype:CONST},{input:"\\Rightarrow",tag:"mo",output:"⇒",ttype:CONST},{input:"\\Leftrightarrow",tag:"mo",output:"⇔",ttype:CONST},{input:"\\iff",tag:"mo",output:"~\\Longleftrightarrow~",ttype:DEFINITION},{input:"\\Uparrow",tag:"mo",output:"⇑",ttype:CONST},{input:"\\Downarrow",tag:"mo",output:"⇓",ttype:CONST},{input:"\\Updownarrow",tag:"mo",output:"⇕",ttype:CONST},{input:"\\mapsto",tag:"mo",output:"↦",ttype:CONST},{input:"\\longleftarrow",tag:"mo",output:"←",ttype:LONG},{input:"\\longrightarrow",tag:"mo",output:"→",ttype:LONG},{input:"\\longleftrightarrow",tag:"mo",output:"↔",ttype:LONG},{input:"\\Longleftarrow",tag:"mo",output:"⇐",ttype:LONG},{input:"\\Longrightarrow",tag:"mo",output:"⇒",ttype:LONG},{input:"\\Longleftrightarrow",tag:"mo",output:"⇔",ttype:LONG},{input:"\\longmapsto",tag:"mo",output:"↦",ttype:CONST},{input:"\\sqrt",tag:"msqrt",output:"sqrt",ttype:UNARY},{input:"\\root",tag:"mroot",output:"root",ttype:BINARY},{input:"\\frac",tag:"mfrac",output:"/",ttype:BINARY},{input:"\\stackrel",tag:"mover",output:"stackrel",ttype:BINARY},{input:"_",tag:"msub",output:"_",ttype:INFIX},{input:"^",tag:"msup",output:"^",ttype:INFIX},{input:"\\mathrm",tag:"mtext",output:"text",ttype:TEXT},{input:"\\mbox",tag:"mtext",output:"mbox",ttype:TEXT},{input:"\\atop",tag:"mfrac",output:"",ttype:INFIX},{input:"\\choose",tag:"mfrac",output:"",ttype:INFIX},{input:"\\acute",tag:"mover",output:"´",ttype:UNARY,acc:!0},{input:"\\grave",tag:"mover",output:"`",ttype:UNARY,acc:!0},{input:"\\breve",tag:"mover",output:"˘",ttype:UNARY,acc:!0},{input:"\\check",tag:"mover",output:"ˇ",ttype:UNARY,acc:!0},{input:"\\dot",tag:"mover",output:".",ttype:UNARY,acc:!0},{input:"\\ddot",tag:"mover",output:"..",ttype:UNARY,acc:!0},{input:"\\mathring",tag:"mover",output:"°",ttype:UNARY,acc:!0},{input:"\\vec",tag:"mover",output:"⃗",ttype:UNARY,acc:!0},{input:"\\overrightarrow",tag:"mover",output:"⃗",ttype:UNARY,acc:!0},{input:"\\overleftarrow",tag:"mover",output:"⃖",ttype:UNARY,acc:!0},{input:"\\hat",tag:"mover",output:"^",ttype:UNARY,acc:!0},{input:"\\widehat",tag:"mover",output:"̂",ttype:UNARY,acc:!0},{input:"\\tilde",tag:"mover",output:"~",ttype:UNARY,acc:!0},{input:"\\widetilde",tag:"mover",output:"˜",ttype:UNARY,acc:!0},{input:"\\bar",tag:"mover",output:"‾",ttype:UNARY,acc:!0},{input:"\\overbrace",tag:"mover",output:"⎴",ttype:UNARY,acc:!0},{input:"\\overline",tag:"mover",output:"¯",ttype:UNARY,acc:!0},{input:"\\underbrace",tag:"munder",output:"⎵",ttype:UNARY,acc:!0},{input:"\\underline",tag:"munder",output:"¯",ttype:UNARY,acc:!0},{input:"\\displaystyle",tag:"mstyle",atname:"displaystyle",atval:"true",ttype:UNARY},{input:"\\textstyle",tag:"mstyle",atname:"displaystyle",atval:"false",ttype:UNARY},{input:"\\scriptstyle",tag:"mstyle",atname:"scriptlevel",atval:"1",ttype:UNARY},{input:"\\scriptscriptstyle",tag:"mstyle",atname:"scriptlevel",atval:"2",ttype:UNARY},{input:"\\textrm",tag:"mstyle",output:"\\mathrm",ttype:DEFINITION},{input:"\\mathbf",tag:"mstyle",atname:"mathvariant",atval:"bold",ttype:UNARY},{input:"\\textbf",tag:"mstyle",atname:"mathvariant",atval:"bold",ttype:UNARY},{input:"\\mathit",tag:"mstyle",atname:"mathvariant",atval:"italic",ttype:UNARY},{input:"\\textit",tag:"mstyle",atname:"mathvariant",atval:"italic",ttype:UNARY},{input:"\\mathtt",tag:"mstyle",atname:"mathvariant",atval:"monospace",ttype:UNARY},{input:"\\texttt",tag:"mstyle",atname:"mathvariant",atval:"monospace",ttype:UNARY},{input:"\\mathsf",tag:"mstyle",atname:"mathvariant",atval:"sans-serif",ttype:UNARY},{input:"\\mathbb",tag:"mstyle",atname:"mathvariant",atval:"double-struck",ttype:UNARY,codes:["𝔸","𝔹","ℂ","𝔻","𝔼","𝔽","𝔾","ℍ","𝕀","𝕁","𝕂","𝕃","𝕄","ℕ","𝕆","ℙ","ℚ","ℝ","𝕊","𝕋","𝕌","𝕍","𝕎","𝕏","𝕐","ℤ","𝕒","𝕓","𝕔","𝕕","𝕖","𝕗","𝕘","𝕙","𝕚","𝕛","𝕜","𝕝","𝕞","𝕟","𝕠","𝕡","𝕢","𝕣","𝕤","𝕥","𝕦","𝕧","𝕨","𝕩","𝕪","𝕫"]},{input:"\\mathcal",tag:"mstyle",atname:"mathvariant",atval:"script",ttype:UNARY,codes:["𝒜","ℬ","𝒞","𝒟","ℰ","ℱ","𝒢","ℋ","ℐ","𝒥","𝒦","ℒ","ℳ","𝒩","𝒪","𝒫","𝒬","ℛ","𝒮","𝒯","𝒰","𝒱","𝒲","𝒳","𝒴","𝒵","𝒶","𝒷","𝒸","𝒹","ℯ","𝒻","ℊ","𝒽","𝒾","𝒿","𝓀","𝓁","𝓂","𝓃","ℴ","𝓅","𝓆","𝓇","𝓈","𝓉","𝓊","𝓋","𝓌","𝓍","𝓎","𝓏"]},{input:"\\mathfrak",tag:"mstyle",atname:"mathvariant",atval:"fraktur",ttype:UNARY,codes:["𝔄","𝔅","ℭ","𝔇","𝔈","𝔉","𝔊","ℌ","ℑ","𝔍","𝔎","𝔏","𝔐","𝔑","𝔒","𝔓","𝔔","ℜ","𝔖","𝔗","𝔘","𝔙","𝔚","𝔛","𝔜","ℨ","𝔞","𝔟","𝔠","𝔡","𝔢","𝔣","𝔤","𝔥","𝔦","𝔧","𝔨","𝔩","𝔪","𝔫","𝔬","𝔭","𝔮","𝔯","𝔰","𝔱","𝔲","𝔳","𝔴","𝔵","𝔶","𝔷"]}];function compareNames(s1,s2){return s1.input>s2.input?1:-1}var LMnames=[];function LMinitSymbols(){for(LMsymbols.sort(compareNames),i=0;i<LMsymbols.length;i++)LMnames[i]=LMsymbols[i].input}var LMcurrentSymbol,LMbody,LMmathml="http://www.w3.org/1998/Math/MathML";function LMcreateElementMathML(t){return isIE?document.createElement("m:"+t):document.createElementNS(LMmathml,t)}function LMcreateMmlNode(t,frag){if(isIE)var node=document.createElement("m:"+t);else node=document.createElementNS(LMmathml,t);return node.appendChild(frag),node}function LMremoveCharsAndBlanks(str,n){var st;st=str.slice(n);for(var i=0;i<st.length&&st.charCodeAt(i)<=32;i+=1);return st.slice(i)}function LMposition(arr,str,n){if(0==n){var h,m;for(n=-1,h=arr.length;n+1<h;)arr[m=n+h>>1]<str?n=m:h=m;return h}for(var i=n;i<arr.length&&arr[i]<str;i++);return i}function LMgetSymbol(str){for(var mk,st,k=0,match="",more=!0,i=1;i<=str.length&&more;i++)st=str.slice(0,i),(k=LMposition(LMnames,st,k))<LMnames.length&&str.slice(0,LMnames[k].length)==LMnames[k]&&(i=(match=LMnames[mk=k]).length),more=k<LMnames.length&&str.slice(0,LMnames[k].length)>=LMnames[k];return LMcurrentSymbol,""!=match?(LMcurrentSymbol=LMsymbols[mk].ttype,LMsymbols[mk]):(LMcurrentSymbol=CONST,k=1,{input:st=str.slice(0,1),tag:"0"<=st&&st<="9"?"mn":(st<"A"||"Z"<st)&&(st<"a"||"z"<st)?"mo":"mi",output:st,ttype:CONST})}function LMparseSexpr(str){var symbol,node,result,result2,i,st,newFrag=document.createDocumentFragment();if(null==(symbol=LMgetSymbol(str=LMremoveCharsAndBlanks(str,0)))||symbol.ttype==RIGHTBRACKET)return[null,str,null];if(symbol.ttype==DEFINITION&&(null==(symbol=LMgetSymbol(str=symbol.output+LMremoveCharsAndBlanks(str,symbol.input.length)))||symbol.ttype==RIGHTBRACKET))return[null,str,null];switch(str=LMremoveCharsAndBlanks(str,symbol.input.length),symbol.ttype){case SPACE:return(node=LMcreateElementMathML(symbol.tag)).setAttribute(symbol.atname,symbol.atval),[node,str,symbol.tag];case UNDEROVER:return isIE&&"\\big"==symbol.input.substr(0,4)&&((symbol=LMgetSymbol(str="\\"+symbol.input.substr(4)+str)).ttype=UNDEROVER,str=LMremoveCharsAndBlanks(str,symbol.input.length)),[LMcreateMmlNode(symbol.tag,document.createTextNode(symbol.output)),str,symbol.tag];case CONST:var output=symbol.output;if(isIE)if("'"==symbol.input)output="′";else if("''"==symbol.input)output="″";else if("'''"==symbol.input)output="″′";else if("''''"==symbol.input)output="″″";else if("\\square"==symbol.input)output="□";else if("\\frac"==symbol.input.substr(0,5)){var denom=symbol.input.substr(6,1);if("5"==denom||"6"==denom)return[node,str=symbol.input.replace(/\\frac/,"\\frac ")+str,symbol.tag]}return[node=LMcreateMmlNode(symbol.tag,document.createTextNode(output)),str,symbol.tag];case LONG:return(node=LMcreateMmlNode(symbol.tag,document.createTextNode(symbol.output))).setAttribute("minsize","1.5"),node.setAttribute("maxsize","1.5"),(node=LMcreateMmlNode("mover",node)).appendChild(LMcreateElementMathML("mspace")),[node,str,symbol.tag];case STRETCHY:return isIE&&"\\backslash"==symbol.input&&(symbol.output="\\"),node=LMcreateMmlNode(symbol.tag,document.createTextNode(symbol.output)),"|"!=symbol.input&&"\\vert"!=symbol.input&&"\\|"!=symbol.input&&"\\Vert"!=symbol.input||(node.setAttribute("lspace","0em"),node.setAttribute("rspace","0em")),node.setAttribute("maxsize",symbol.atval),null!=symbol.rtag?[node,str,symbol.rtag]:[node,str,symbol.tag];case BIG:var atval=symbol.atval;if(isIE&&(atval=symbol.ieval),null==(symbol=LMgetSymbol(str)))return[null,str,null];if(str=LMremoveCharsAndBlanks(str,symbol.input.length),node=LMcreateMmlNode(symbol.tag,document.createTextNode(symbol.output)),isIE)(space=LMcreateElementMathML("mspace")).setAttribute("height",atval+"ex"),(node=LMcreateMmlNode("mrow",node)).appendChild(space);else node.setAttribute("minsize",atval),node.setAttribute("maxsize",atval);return[node,str,symbol.tag];case LEFTBRACKET:return"\\left"==symbol.input&&null!=(symbol=LMgetSymbol(str))&&("."==symbol.input&&(symbol.invisible=!0),str=LMremoveCharsAndBlanks(str,symbol.input.length)),result=LMparseExpr(str,!0,!1),null==symbol||"boolean"==typeof symbol.invisible&&symbol.invisible?node=LMcreateMmlNode("mrow",result[0]):(node=LMcreateMmlNode("mrow",node=LMcreateMmlNode("mo",document.createTextNode(symbol.output)))).appendChild(result[0]),[node,result[1],result[2]];case MATRIX:if("\\begin{array}"!=symbol.input)return node=LMcreateMmlNode("mtable",(result=LMparseExpr("{"+str,!0,!0))[0]),isIE?node.setAttribute("columnspacing","0.25em"):node.setAttribute("columnspacing","0.167em"),node.setAttribute("columnalign","right center left"),node.setAttribute("displaystyle","true"),[node=LMcreateMmlNode("mrow",node),result[1],null];var mask="";if(symbol=LMgetSymbol(str),str=LMremoveCharsAndBlanks(str,0),null==symbol)mask="l";else if(str=LMremoveCharsAndBlanks(str,symbol.input.length),"{"!=symbol.input)mask="l";else for(;null!=(symbol=LMgetSymbol(str))&&(str=LMremoveCharsAndBlanks(str,symbol.input.length),"}"!=symbol.input&&(mask+=symbol.input)),null!=symbol&&""!=symbol.input&&"}"!=symbol.input;);if(node=LMcreateMmlNode("mtable",(result=LMparseExpr("{"+str,!0,!0))[0]),mask=(mask=(mask=mask.replace(/l/g,"left ")).replace(/r/g,"right ")).replace(/c/g,"center "),node.setAttribute("columnalign",mask),node.setAttribute("displaystyle","false"),isIE)return[node,result[1],null];var lspace=LMcreateElementMathML("mspace");lspace.setAttribute("width","0.167em");var rspace=LMcreateElementMathML("mspace");return rspace.setAttribute("width","0.167em"),(node1=LMcreateMmlNode("mrow",lspace)).appendChild(node),node1.appendChild(rspace),[node1,result[1],null];case TEXT:return-1==(i="{"==str.charAt(0)?str.indexOf("}"):0)&&(i=str.length)," "==(st=str.slice(1,i)).charAt(0)&&((node=LMcreateElementMathML("mspace")).setAttribute("width","0.33em"),newFrag.appendChild(node)),newFrag.appendChild(LMcreateMmlNode(symbol.tag,document.createTextNode(st)))," "==st.charAt(st.length-1)&&((node=LMcreateElementMathML("mspace")).setAttribute("width","0.33em"),newFrag.appendChild(node)),str=LMremoveCharsAndBlanks(str,i+1),[LMcreateMmlNode("mrow",newFrag),str,null];case UNARY:if(null==(result=LMparseSexpr(str))[0])return[LMcreateMmlNode(symbol.tag,document.createTextNode(symbol.output)),str];var space;if("boolean"==typeof symbol.func&&symbol.func)return"^"==(st=str.charAt(0))||"_"==st||","==st?[LMcreateMmlNode(symbol.tag,document.createTextNode(symbol.output)),str,symbol.tag]:(node=LMcreateMmlNode("mrow",LMcreateMmlNode(symbol.tag,document.createTextNode(symbol.output))),isIE&&((space=LMcreateElementMathML("mspace")).setAttribute("width","0.167em"),node.appendChild(space)),node.appendChild(result[0]),[node,result[1],symbol.tag]);if("\\sqrt"==symbol.input)return isIE?((space=LMcreateElementMathML("mspace")).setAttribute("height","1.2ex"),space.setAttribute("width","0em"),(node=LMcreateMmlNode(symbol.tag,result[0])).appendChild(space),[node,result[1],symbol.tag]):[LMcreateMmlNode(symbol.tag,result[0]),result[1],symbol.tag];if("boolean"==typeof symbol.acc&&symbol.acc){node=LMcreateMmlNode(symbol.tag,result[0]);output=symbol.output;isIE&&("\\hat"==symbol.input?output="̂":"\\widehat"==symbol.input?output="^":"\\bar"==symbol.input?output="¯":"\\grave"==symbol.input?output="̀":"\\tilde"==symbol.input&&(output="̃"));var node1=LMcreateMmlNode("mo",document.createTextNode(output));return"\\vec"!=symbol.input&&"\\check"!=symbol.input||node1.setAttribute("maxsize","1.2"),isIE&&"\\bar"==symbol.input&&node1.setAttribute("maxsize","0.5"),"\\underbrace"==symbol.input||"\\underline"==symbol.input?node1.setAttribute("accentunder","true"):node1.setAttribute("accent","true"),node.appendChild(node1),"\\overbrace"!=symbol.input&&"\\underbrace"!=symbol.input||(node.ttype=UNDEROVER),[node,result[1],symbol.tag]}if(!isIE&&void 0!==symbol.codes)for(i=0;i<result[0].childNodes.length;i++)if("mi"==result[0].childNodes[i].nodeName||"mi"==result[0].nodeName){st="mi"==result[0].nodeName?result[0].firstChild.nodeValue:result[0].childNodes[i].firstChild.nodeValue;for(var newst=[],j=0;j<st.length;j++)64<st.charCodeAt(j)&&st.charCodeAt(j)<91?newst+=symbol.codes[st.charCodeAt(j)-65]:96<st.charCodeAt(j)&&st.charCodeAt(j)<123?newst+=symbol.codes[st.charCodeAt(j)-71]:newst+=st.charAt(j);"mi"==result[0].nodeName?result[0]=LMcreateElementMathML("mo").appendChild(document.createTextNode(newst)):result[0].replaceChild(LMcreateElementMathML("mo").appendChild(document.createTextNode(newst)),result[0].childNodes[i])}return(node=LMcreateMmlNode(symbol.tag,result[0])).setAttribute(symbol.atname,symbol.atval),"\\scriptstyle"!=symbol.input&&"\\scriptscriptstyle"!=symbol.input||node.setAttribute("displaystyle","false"),[node,result[1],symbol.tag];case BINARY:return null==(result=LMparseSexpr(str))[0]?[LMcreateMmlNode("mo",document.createTextNode(symbol.input)),str,null]:null==(result2=LMparseSexpr(result[1]))[0]?[LMcreateMmlNode("mo",document.createTextNode(symbol.input)),str,null]:("\\root"!=symbol.input&&"\\stackrel"!=symbol.input||newFrag.appendChild(result2[0]),newFrag.appendChild(result[0]),"\\frac"==symbol.input&&newFrag.appendChild(result2[0]),[LMcreateMmlNode(symbol.tag,newFrag),result2[1],symbol.tag]);case INFIX:return str=LMremoveCharsAndBlanks(str,symbol.input.length),[LMcreateMmlNode("mo",document.createTextNode(symbol.output)),str,symbol.tag];default:return[LMcreateMmlNode(symbol.tag,document.createTextNode(symbol.output)),str,symbol.tag]}}function LMparseIexpr(str){var symbol,sym1,sym2,node,result,tag,underover;if(sym1=LMgetSymbol(str=LMremoveCharsAndBlanks(str,0)),node=(result=LMparseSexpr(str))[0],str=result[1],tag=result[2],(symbol=LMgetSymbol(str)).ttype==INFIX)if(null==(result=LMparseSexpr(str=LMremoveCharsAndBlanks(str,symbol.input.length)))[0]&&(result[0]=LMcreateMmlNode("mo",document.createTextNode("□"))),str=result[1],tag=result[2],"_"==symbol.input||"^"==symbol.input){if(sym2=LMgetSymbol(str),tag=null,underover=sym1.ttype==UNDEROVER||node.ttype==UNDEROVER,"_"==symbol.input&&"^"==sym2.input){var res2=LMparseSexpr(str=LMremoveCharsAndBlanks(str,sym2.input.length));str=res2[1],tag=res2[2],(node=LMcreateMmlNode(underover?"munderover":"msubsup",node)).appendChild(result[0]),node.appendChild(res2[0])}else"_"==symbol.input?(node=LMcreateMmlNode(underover?"munder":"msub",node)).appendChild(result[0]):(node=LMcreateMmlNode(underover?"mover":"msup",node)).appendChild(result[0]);node=LMcreateMmlNode("mrow",node)}else node=LMcreateMmlNode(symbol.tag,node),"\\atop"!=symbol.input&&"\\choose"!=symbol.input||node.setAttribute("linethickness","0ex"),node.appendChild(result[0]),"\\choose"==symbol.input&&(node=LMcreateMmlNode("mfenced",node));return[node,str,tag]}function LMparseExpr(str,rightbracket,matrix){var symbol,node,result,i,tag,newFrag=document.createDocumentFragment();do{if(node=(result=LMparseIexpr(str=LMremoveCharsAndBlanks(str,0)))[0],str=result[1],tag=result[2],symbol=LMgetSymbol(str),null!=node){if(("mn"==tag||"mi"==tag)&&null!=symbol&&"boolean"==typeof symbol.func&&symbol.func){var space=LMcreateElementMathML("mspace");space.setAttribute("width","0.167em"),(node=LMcreateMmlNode("mrow",node)).appendChild(space)}newFrag.appendChild(node)}}while(symbol.ttype!=RIGHTBRACKET&&null!=symbol&&""!=symbol.output);if(tag=null,symbol.ttype==RIGHTBRACKET){"\\right"==symbol.input&&(null!=(symbol=LMgetSymbol(str=LMremoveCharsAndBlanks(str,symbol.input.length)))&&"."==symbol.input&&(symbol.invisible=!0),null!=symbol&&(tag=symbol.rtag)),null!=symbol&&(str=LMremoveCharsAndBlanks(str,symbol.input.length));var len=newFrag.childNodes.length;if(matrix&&0<len&&"mrow"==newFrag.childNodes[len-1].nodeName&&1<len&&"mo"==newFrag.childNodes[len-2].nodeName&&"&"==newFrag.childNodes[len-2].firstChild.nodeValue){var pos=[],m=newFrag.childNodes.length;for(i=0;matrix&&i<m;i+=2){pos[i]=[],node=newFrag.childNodes[i];for(var j=0;j<node.childNodes.length;j++)"&"==node.childNodes[j].firstChild.nodeValue&&(pos[i][pos[i].length]=j)}var row,frag,n,k,table=document.createDocumentFragment();for(i=0;i<m;i+=2){for(row=document.createDocumentFragment(),frag=document.createDocumentFragment(),n=(node=newFrag.firstChild).childNodes.length,j=k=0;j<n;j++)void 0!==pos[i][k]&&j==pos[i][k]?(node.removeChild(node.firstChild),row.appendChild(LMcreateMmlNode("mtd",frag)),k++):frag.appendChild(node.firstChild);row.appendChild(LMcreateMmlNode("mtd",frag)),2<newFrag.childNodes.length&&(newFrag.removeChild(newFrag.firstChild),newFrag.removeChild(newFrag.firstChild)),table.appendChild(LMcreateMmlNode("mtr",row))}return[table,str]}"boolean"==typeof symbol.invisible&&symbol.invisible||(node=LMcreateMmlNode("mo",document.createTextNode(symbol.output)),newFrag.appendChild(node))}return[newFrag,str,tag]}function LMparseMath(str){var node=LMcreateElementMathML("mstyle");if(""!=mathcolor&&node.setAttribute("mathcolor",mathcolor),""!=mathfontfamily&&node.setAttribute("fontfamily",mathfontfamily),node.appendChild(LMparseExpr(str.replace(/^\s+/g,""),0,!1)[0]),node=LMcreateMmlNode("math",node),showasciiformulaonhover&&node.setAttribute("title",str.replace(/\s+/g," ")),""==mathfontfamily||!isIE&&"serif"==mathfontfamily)return node;var fnode=LMcreateElementXHTML("font");return fnode.setAttribute("face",mathfontfamily),fnode.appendChild(node),fnode}function LMprocessNodeR(n,linebreaks){var mtch,str,arr,frg,i;if(0==n.childNodes.length){if(8==n.nodeType&&!linebreaks||"form"==n.parentNode.nodeName||"FORM"==n.parentNode.nodeName||"textarea"==n.parentNode.nodeName||"TEXTAREA"==n.parentNode.nodeName||"pre"==n.parentNode.nodeName||"PRE"==n.parentNode.nodeName)return 0;if(null!=(str=n.nodeValue)){for(mtch=-1!=(str=(str=(str=str.replace(/\r\n\r\n/g,"\n\n")).replace(/\x20+/g," ")).replace(/\s*\r\n/g," ")).indexOf("$"),arr=(str=(str=str.replace(/([^\\])\$/g,"$1 $")).replace(/^\$/," $")).split(" $"),i=0;i<arr.length;i++)arr[i]=arr[i].replace(/\\\$/g,"$");if(1<arr.length||mtch){if(checkForMathML){checkForMathML=!1;var nd=function(){if("Netscape"==navigator.appName.slice(0,8))return"5"<=navigator.appVersion.slice(0,1)?null:LMnoMathMLNote();if("Microsoft"!=navigator.appName.slice(0,9))return LMnoMathMLNote();try{return new ActiveXObject("MathPlayer.Factory.1"),null}catch(e){return LMnoMathMLNote()}}();(LMnoMathML=null!=nd)&&notifyIfNoMathML&&(alertIfNoMathML?alert("To view the ASCIIMathML notation use Internet Explorer 6 +\nMathPlayer (free from www.dessci.com)\n                or Firefox/Mozilla/Netscape"):LMbody.insertBefore(nd,LMbody.childNodes[0]))}if(LMnoMathML)return 0;var len=(frg=function(arr,linebreaks){for(var newFrag=document.createDocumentFragment(),expr=!1,i=0;i<arr.length;i++){if(expr)newFrag.appendChild(LMparseMath(arr[i]));else{var arri=linebreaks?arr[i].split("\n\n"):[arr[i]];newFrag.appendChild(LMcreateElementXHTML("span").appendChild(document.createTextNode(arri[0])));for(var j=1;j<arri.length;j++)newFrag.appendChild(LMcreateElementXHTML("p")),newFrag.appendChild(LMcreateElementXHTML("span").appendChild(document.createTextNode(arri[j])))}expr=!expr}return newFrag}(arr,8==n.nodeType)).childNodes.length;return n.parentNode.replaceChild(frg,n),len-1}}}else if("math"!=n.nodeName)for(i=0;i<n.childNodes.length;i++)i+=LMprocessNodeR(n.childNodes[i],linebreaks);return 0}function LMprocessNode(n,linebreaks,spanclassLM){var frag,st;if(null!=spanclassLM){frag=document.getElementsByTagName("span");for(var i=0;i<frag.length;i++)"LM"==frag[i].className&&LMprocessNodeR(frag[i],linebreaks)}else{try{st=n.innerHTML}catch(err){}null!=st&&-1==st.indexOf("$")||LMprocessNodeR(n,linebreaks)}if(isIE){frag=document.getElementsByTagName("math");for(i=0;i<frag.length;i++)frag[i].update()}}var LMnoMathML=!1,LMtranslated=!1;function generic(){var spanclassLM;LMtranslated||(LMtranslated=!0,LMinitSymbols(),LMprocessNode(LMbody=document.getElementsByTagName("body")[0],!1,spanclassLM))}if(isIE&&(document.write('<object id="mathplayer"  classid="clsid:32F66A20-7614-11D4-BD11-00104BD3F987"></object>'),document.write('<?import namespace="m" implementation="#mathplayer"?>')),void 0!==window.addEventListener)window.addEventListener("load",generic,!1);else if(void 0!==document.addEventListener)document.addEventListener("load",generic,!1);else if(void 0!==window.attachEvent)window.attachEvent("onload",generic);else if("function"==typeof window.onload){var existing=onload;window.onload=function(){existing(),generic()}}else window.onload=generic;window.LatexToMathML=function(LatexStr){LMtranslated||LMinitSymbols();var span=document.createElement("span");return span.innerText="$"+LatexStr.replace(/\\/g,"\\")+"$",LMprocessNode(span,!1),span.innerHTML}}();