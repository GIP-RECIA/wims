#!/bin/sh

exec perl <<'EOF'

use strict "vars";
use warnings;

push (@ARGV,split(' ', $ENV{'wims_exec_parm'})) if ($ENV{'wims_exec_parm'});
my ($file)=shift @ARGV;

my @valence1=('Li','Na','K','F','Cl','Br','I','At');
my @valence2=('Be','Mg','Ca','Sr','Ba','O','Se','Te','Mn','Hg','Zn','Cu','S');
my @valence3=('B','Al','N','P','As','Fe');
my @valence4=('C','Si','Ge','Sn','A','Q');
my @other=('H');
my ($nbatom, $nbbond);
my $cnt=1; my $nH=0;
my %hash = ();
my $hash = \%hash;
my %bond=();
my $bond = \%bond;
my %atom = ();
my $atom = \%atom;
my $cntmax=10000;
my @a=();
open(IN, "$file");
while(<IN>) {
  @a=split(" ", $_);
  if($cnt==4){
    $nbatom=$a[0]; $nbbond=$a[1];$cntmax=4+$nbatom;
  };
  if($cnt>4 && $cnt <= $cntmax) {
    $hash->{$cnt-4}{name}=$a[3];
    if(!$atom->{$a[3]}) { $atom->{$a[3]}=1} else { $atom->{$a[3]} ++}
    if ( grep { $_ eq $a[3] } @valence4 ){ $hash->{$cnt-4}{hydrogen}=4}
    elsif ( grep { $_ eq $a[3] } @valence1 ){ $hash->{$cnt-4}{hydrogen}=1}
    elsif ( grep { $_ eq $a[3] } @valence2 ){ $hash->{$cnt-4}{hydrogen}=2}
    elsif ( grep { $_ eq $a[3] } @valence3 ){ $hash->{$cnt-4}{hydrogen}=3}
    elsif ( grep { $_ eq $a[3] } @other) {}
    else {
      #die( "$a[3]")
    }
  }
  my $tt;
  if ($cnt > $cntmax && $cnt <= $cntmax + $nbbond) {
    if (!($hash->{$a[0]}{name} =~ /H\b/) && !($hash->{$a[1]}{name} =~ /H\b/)) {
      $hash->{$a[0]}{'hydrogen'}-= $a[2];
      $hash->{$a[1]}{'hydrogen'}-= $a[2];
      $bond->{$cnt}=$a[0] . ',' . $a[1];
      $tt=$cnt<= $cntmax ? $cnt: $cnt-$cntmax;
      $bond->{$a[0]}=!$bond->{$a[0]} ? $tt: $bond->{$a[0]}.','. $tt;
      $bond->{$a[1]}=!$bond->{$a[1]} ? $tt: $bond->{$a[1]}.','. $tt;
    }
    if (!($hash->{$a[0]}{name} =~ /H\b/) && ($hash->{$a[1]}{name} =~ /H\b/)) {
      $hash->{$a[0]}{'hydrogenfichier'}++;
    }
    if (!($hash->{$a[1]}{name} =~ /H\b/) && ($hash->{$a[0]}{name} =~ /H\b/)) {
      $hash->{$a[1]}{'hydrogenfichier'}++;
    }
  }
  if ($_ =~s /M  CHG//) {
    @a=split(" ", $_);
    my $cc=1;
    for my $ion (@a) {
      if ($cc%2==0) {
        $hash->{$ion}{'hydrogen'} += $a[$cc];
      }
      $cc++;
    }
  };
  $cnt ++;
}
close IN;
my $nbhydrogen='';
for my $at (sort {$a<=>$b} keys %hash){
  $hash{$at}{'hydrogen'}=0 if (!(defined $hash{$at}{'hydrogen'}) || $hash{$at}{'hydrogen'}<0);
  $nH = $nH+ $hash{$at}{'hydrogen'};
  $nbhydrogen .= "$at,$hash->{$at}{name},$hash->{$at}{'hydrogen'}\n";
}
my $nbhydrogenfichier='';
for my $at (sort {$a<=>$b} keys %hash){
  if(!($hash->{$at}{name} =~ /H\b/)){
    $hash{$at}{'hydrogenfichier'}=0 if (!(defined $hash{$at}{'hydrogenfichier'})
      || $hash{$at}{'hydrogenfichier'}<0);
    $nbhydrogenfichier .= "$at,$hash->{$at}{name},$hash->{$at}{'hydrogenfichier'}\n";
  }
}

$atom{'H'}=$nH;
my $formula=$atom{'C'} > 0 ? 'C' : '' ;
$formula .= $atom{'C'} if $atom{'C'} > 1;
$formula .= 'H' if $atom{'H'} > 0;
$formula .= $atom{'H'} if $atom{'H'} > 1;

for my $at (sort keys %atom){
  next if (!(defined ($atom{$at})) || $atom{$at}==0 );
  next if ($at=~'C\b' || $at=~'H\b');
  $formula .= $atom{$at}==1? $at : $at . $atom{$at};
}
my $bondprint="";
for my $bd (sort {$a<=>$b} keys %bond){
  next if (!(defined ($bond{$bd})));
  if($bd <= $nbatom){
    $bondprint .= "atom $bd,$bond{$bd}\n";
  } else {
    my $bd1=$bd-$nbatom-4; $bondprint .= "bond $bd1,$bond{$bd}\n";
  }
}
print "$formula,[$nbhydrogen],[$nbhydrogenfichier],[$bondprint]";

EOF
