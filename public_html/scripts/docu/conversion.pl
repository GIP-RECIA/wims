#!/usr/bin/perl

use strict "subs";
use locale;
use warnings;
$/ = undef;
### most of these "mistakes" has been done by Msg2wims
### should be better to correct it but more difficult !
### introduction of \n can break the inline folds ...
my $file=$ARGV[0];
my $fileout=$file;
open (IN ,$file) ;
my $text = <IN>;
##multiple <p>
$text =~ s:(<p>\s*){2,}:<p>:g;
## close br and hr
$text =~ s:<(b|h)r\s*>:<$1r>:g;
## delete multiple <br>
$text =~ s:(<br\s*/>\s*){2,}:<br>:g;
$text =~ s:(<p>\s*){1,}(<li>|</?ul>|</?ol>):$2:g;
## delete <br> before <li></?ul></?ol>
$text =~ s:(<br\s*/?>\s*){1,}(<h[1-5].*>|<li|</h[1-5]>|</?ul>|</?ol>):$2:g;
## delete <li> empty
$text =~ s:(<li>\s*){1,}</(u|o)l>:</$2l>:g;
## transform some hr
$text =~ s|<hr\s+width="(\d+)%"\s*/?/?>|<hr style="width:$1%">|g;
## delete <br> before table ?
$text =~ s|(<br\s*/?>\s*){1,}</table>|</table>|g;
$text =~ s:</div>\s+</div>:</div>\n</div>:g;
$text =~ s:</div>\s*(<br\s*/?>\s*){1,}</div>:</div>\n</div>:g;
## delete <br> before div
$text =~ s:(<br\s*/?>\s*){1,}<div:<div:g;
$text =~ s:<br\s*/?> *!:<br>\n!:g;
$text =~ s:\n{3,}:\n\n:g;
close(IN);

open (OUT, ">$fileout");
print OUT $text ; close OUT;
