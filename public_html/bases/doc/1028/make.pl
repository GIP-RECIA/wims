#!/usr/bin/perl

$nomeprog="make.pl";

##if ( @ARGV != 1 ){
##    die("usage: \"$nomeprog _nomefile_\n");
##}

my ($filein,$fileout)=@ARGV;

$status=0;
$txtoutput="";
@comments=();

$setup="xrange -10,10 \nyrange -10,10 \nhline 0,0,black\nvline 0,0,black";
$dimsize="400";
$cellwidth="width:265px";

open (INPUT,"< $filein") || die("Cannot open in $filein: $!\n");
open (OUTPUT,"> $fileout") || die("Cannot open out $fileout: $!\n");

print OUTPUT "<h3>Setup</h3>\n";
print OUTPUT "<div><table><tr><td style=\"$cellwidth\"></td>\n<td style=\"$cellwidth\">\n";
print OUTPUT "canvasdraw\n<pre>canvasdraw{$dimsize,$dimsize}{\n$setup\n...\n}</pre>";
print OUTPUT "</td><td style=\"$cellwidth\">\n";
print OUTPUT "flydraw\n<pre>draw{$dimsize,$dimsize}{\n$setup\n...\n}</pre>";
print OUTPUT "</td>\n</tr>\n</table>\n</div>\n";
my @fileid=split("/",$filein);

print OUTPUT "<h3>Examples</h3>\n";
my $cnt=0;
while (<INPUT>){
  chop;
  if($cnt==0){ $cnt=1; next};
  my($riga)=$_;
  if ($riga =~ /^:/g){
    if($status == 1){
      my $name=$fileid[1] . "_" . $cnt;
      print OUTPUT '<h4>' . $comments[1];
      if($comments[2] ne ""){
        print OUTPUT "($comments[2])\n";
      }
      print OUTPUT "</h4>";
      print OUTPUT '<table class="wimsborder">
        <tr><td colspan="3" style="text-align:left"><pre>' . niceprint($txtoutput) . "</pre>";
      print OUTPUT "\n";

      print OUTPUT "</td></tr>\n";
      print OUTPUT "<tr><td style=\"$cellwidth\">\n";
      print OUTPUT "\\canvasdraw{$dimsize,$dimsize}{ \n$setup \n";
      print OUTPUT $txtoutput;
      print OUTPUT "}\n</td>\n<td style=\"$cellwidth\">\n";
      print OUTPUT "\\draw{$dimsize,$dimsize}{ \n$setup \n";
      print OUTPUT $txtoutput;
      print OUTPUT "}\n</td>\n<td style=\"$cellwidth\">";
      print OUTPUT "<object width=\"$dimsize\" height=\"$dimsize\" type=\"application/pdf\" data=\"\\filedir/tikz/$name.pdf\">
  <embed width=\"300\" height=\"300\" type=\"application/pdf\" src=\"\\filedir/tikz/$name.pdf\">
  </object>\n";
      print OUTPUT"\n</td>\n</tr>\n</table>\n";
      if ($filein =~ /object|transf/) {
      system("../../../../other/bin/flydraw <<@
tikzfile files/tikz/$name.tex
new $dimsize,$dimsize
$setup
$txtoutput
output files/tikz/$name.gif
@");
      }
      $txtoutput="";
      $cnt ++;
    }
    $status=1;
    @comments=split(":",$_);
  } else {
      $txtoutput=$txtoutput."$riga\n";
  }
}

sub niceprint {
    my($str) = @_ ;
    $str =~ s/\\filedir/\\\\filedir/g;
    $str =~ s/\$/&\#36;/g ;
    return $str;
}
