#! /bin/sh

outdir=$w_wims_home/log/classes/$w_wims_class/sheets
if [ ! -d $outdir ]; then exit; fi
cd $outdir

n=$(($w_sheet+1))
rm -f .sheet$w_sheet sheet$w_sheet.src sheet$w_sheet.def >/dev/null
while [ $n -le $w_scnt ]; do
 mv .sheet$n .sheet$(($n-1)) >/dev/null
 mv sheet$n.src sheet$(($n-1)).src >/dev/null
 mv sheet$n.def sheet$(($n-1)).def >/dev/null

 n=$(($n+1))
done
