#! /bin/sh

outdir=$w_wims_home/log/classes/$w_wims_class/seq
if [ ! -d $outdir ]; then exit; fi
cd $w_wims_home/log/classes/$w_wims_class

n=$(($w_seq+1))
rm -f seq/.sequence$w_seq >/dev/null
rm -f .S$w_seq >/dev/null
while [ $n -le $w_seq_cnt ]; do
 mv seq/.sequence$n seq/.sequence$(($n-1)) >/dev/null
 mv .S$n .S$(($n-1)) >/dev/null
 n=$(($n+1))
done
