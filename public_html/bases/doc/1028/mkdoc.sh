#! /bin/sh

files="objects objects2 fillobjects transform canvasdraw comandi usercommand images \
  dataimages click button clock barchart userdraw userdrag protractor "
dirin=src_
dirout=src
rm *.def
rm src/*
cp $dirin/main.src $dirout/main
echo "!set titb=TOC" > $dirout/main.hd
for f in $files; do
	perl make.pl $dirin/$f $dirout/$f
	tit=`head -n 1 $dirin/$f`;
	echo "!set next=$f" >>"$dirout/$fold.hd"
	echo "!set titb=$tit" > "$dirout/$f.hd"
	echo "!set prev=$fold" >>"$dirout/$f.hd"
  fold=$f
done
../../../../other/bin/src2def

##cd files/tikz
##for i in *.tex ; do
##  echo "\documentclass[11pt,a5paper]{article}
##\\usepackage{tikz}\scrollmode
##\\usepackage{geometry}
##\\geometry{paperheight=320px,paperwidth=320px,top=10px, left=2px,bottom=2px,right=2px}
##\pagestyle{empty}
##\\\begin{document}" > "mod$i"
##  cat $i >> "mod$i";
##  echo "\\\end{document}" >> "mod$i";
##  mv "mod$i" $i;
##  pdflatex $i ;
##done
##rm *.log *.aux
##cd ../..
