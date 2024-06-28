#! /bin/sh
# It is the awk script which determines how the original message is quoted.
#
# Quoting is limited to $w_quote_lim.
LL="env LC_ALL=C LC_CTYPE=C LANG=C"
src=`awk 'BEGIN {a=0};
 $0=="!exit" {a=10000};
 a>1 && a<'$w_quote_lim'+2 {if(substr($0,1,4)!="> > ") {print "<br> " $0; a++} };
 a==1 && $0=="<pre>" {a=2};
 $0==":source" {a=1};
' $w_Forumdir/$w_c_prec | sed 's!<pre>!!g;s!</pre>!!g;s!&lt;!<!g;s!&gt;!>!g;s!<br>!!g;'`
$LL echo "$w_t_from $w_name_wroteon $w_t_date, $w_t_time:
<blockquote class=\"wims_forum_blockquote\">$src</blockquote>
"
