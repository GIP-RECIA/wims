!set lang_exists=yes

<p>
WIMS is designed with multi-language support. Several languages are currently
available, including English, French, Chinese, Dutch and others.
</p><p>
Efforts have been made in order to make translation possible even by people
not knowing much of computer programming. But due to the huge amount of
content in the system as well as its constant development, translating WIMS
into a new language means a big amount of work.
</p><p>
On the other hand, because of the educational vocation of WIMS, translating
it to your native language may represent an important service for the younger
generation of your country.
</p><p>
If you are interested in translating WIMS into your native language,
please
!mailurl translation@wimsedu.info contact us
.</p>
The following is a brief extract of a reply to a 'virtual' translator for <b>German</b>:

<pre>
First of all, I have to declare the language in the wims kernel. What
should be the extension? (Like 'en' for English, 'fr' for French, 'it' for
Italian, etc. <b>'de'</b> for <b>German</b>?) I also need a small national flag image
to represent it.

To find out what are the files to translate, there is a very simple
rule. Everywhere there is files or directories with the same name base
but with both name extensions .en and .fr, a corresponding file or
directory with extension <b>.de</b> should be added.

And in order to see what are the lines to translate, you can make a
comparison of the English and French versions (using diff).

Sometimes, the French version contains files which are merely links to
the English counterpart. In this case, you need only to copy the link to
the <b>German</b> version.

Things to translate are all within the directory public_html. Files for
the system are mainly within the following subdirectories:

modules/adm, modules/home, modules/help, modules/template,
modules/classes, bases/sys, html, msg.

There are also a small number of multi-language files that should be
modified, adding <b>German</b> part (but it is not absolutely necessary):

html/module_about
modules/home/languages
modules/home/askcookie.phtml
scripts/about.phtml
scripts/related.phtml
scripts/tool.phtml

And apart from the system, you can translate some resource modules that
interest you.

------------------------

To begin with, you can just copy ALL the French (or English) files to a
<b>German</b> counterpart, then translate them gradually. As an example, the
starting page is affected only by things within modules/home.
</pre>
