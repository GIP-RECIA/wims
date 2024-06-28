#!/usr/bin/perl

use strict "vars";
use strict "subs";
use locale;
use warnings;

=comment css vars
my $wimsconf="../../log/wims.conf";
my $wimsdefault="../../public_html/bases/sys/defaults.conf";
my %listcolor;
open(IN, "$wimsconf");
while (<IN>) {
  chomp;
  for my $t ("ref_bgcolor","ref_button_bgcolor","ref_button_help_bgcolor" ) {
    if (/$t/) { $listcolor{$t}=$_; $listcolor{$t} =~ s/$t=//;}
  }
};
close(IN);
open(IN, "$wimsdefault");
while (<IN>) {
  for  my $t ("ref_bgcolor","ref_button_bgcolor","ref_button_help_bgcolor" ) {
    if (/$t/ && !$listcolor{$t}) {
      $listcolor{$t}=$_; $listcolor{$t} =~ s/DF_$t=//;}
  }
};
close(IN);
=cut

$/ = undef;
##{
##  last if (/^$/);
##  if  (/^(.*)$/)   { $dir=$1 }
##};

my $char="---";

for my $f (glob("*/*.css.template"), glob("*/*/*.css.template")) {
  print "\nGeneration de $f";
  my $f1= $f; $f1 =~ s/.template//; my $f2 = "$f1.tmp.css";
  my @f3=split("/",$f1);
  my $f3=$f3[0];
  my $TEXT ="/*! generated from $f - do not modify directly */\n";
  my %colors;
  open(IN,"$f");
  while (<IN> ) {
   my $line=$_;
   $line =~ s/#[^\n]+//g;
   $line =~ s/--- (.*) ---/treate($1)/ge;
   $TEXT .= $line;
 }
 close IN;
 $TEXT .= "\n";
 # lecture de oefcolors
 my $fc="$f3/oefcolors";
 if (!(-e $fc)) { $fc="oefcolors" };
 open(INN, "$fc");
 $/ = "\n";
 while(<INN>) {
  if( /!set (\w+)=(#*\w+)/) { $colors{$1}=$2;}
 }
 close INN;
 ## remplacement des couleurs oef
 my $colors=\%colors;
 for my $k (keys %{$colors}) {
   $TEXT =~ s/\*-\* *$k/$colors{$k}/g;
 }

 out("$f2" ,$TEXT);
 $/ = undef;
 system("java -jar yuicompressor $f2 -o $f1 -v; rm $f2");
}

sub t { my ($c1,$c2,$L)=@_; $L->{$c1}=$c2};

sub treate { my ($c)= @_;
  return if ((!$c) || ($c =~ /#/));
  # print "\ntraitement du fichier $c";
  open(INN, $c);
  my $text = <INN>;
  close(INN);

=comment css vars
  for my $a (keys %listcolor){
    $text=~ s/__wims_$a/$listcolor{$a}/g;
  }
=cut

  "\n/*! from $c */\n$text";
};

sub out { my ($bloc, $text) = @_;
  open  (OUT, ">$bloc") || warn "Creation du bloc $bloc impossible";
  print OUT $text; close OUT;
}
