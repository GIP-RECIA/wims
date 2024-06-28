#! /bin/sh
#
# Recense new resources on the neighbor class.
#
# this script is a light copy of modules/adm/class/config/neighbor/newrec.sh
# Output line: resource_type resource_name type
# type=1: new type=2: exist but different

mdir=`pwd`

classdir=$w_wims_home/log/classes
cd $w_wims_home/log/classes/$w_wims_class
cldir=`pwd`
cd $w_wims_home/sessions/$w_wims_session/upload/class
ndir=`pwd`
cd $cldir

if [ $w_sheetcnt -gt 0 ]; then
 cd $ndir/sheets
 test=`ls .sheet[0-9]*`
 cd $cldir
 this=`ls sheets/.sheet[0-9]* 2>/dev/null`
 for i in $test
 do
  t=1
  for k in $this
  do
   if diff -bBq $ndir/sheets/$i $k >/dev/null ; then t=0; fi
  done
  if [ $t = 1 ]; then
   j=`echo $i | tr -d '[\.sheet]'`
   echo "sheet $j 1"
  fi
 done
fi

if [ $w_doccnt -gt 0 ]; then
 cd $ndir/doc
 test=`echo c*`
 cd $cldir
 for i in $test
 do
  t=1
  this=`ls -d doc/c[0-9]* 2>/dev/null`
  for k in $this
  do
   if diff -bBqr $ndir/doc/$i $k >/dev/null; then t=0; fi
  done
  if [ $t = 1 ]; then
   j=`echo $i | tr -d '[c]'`
   echo "doc $j 1"
  fi
 done
fi

if [ $w_glossarycnt -gt 0 ]; then
 cd $ndir/tool
 test=`ls .glossary[0-9]*`
 cd $cldir
 for i in $test
 do
  t=1
  this=`ls tool/.glossary[0-9]* 2>/dev/null`
  for k in $this
  do
   if diff -bBq $ndir/tool/$i $k >/dev/null; then t=0; fi
  done
  if [ $t = 1 ]; then
   j=`echo $i | tr -d '[\.glossary]'`
   echo "glossary $j 1"
  fi
 done
fi

if [ $w_freeworkcnt -gt 0 ]; then
 cd $ndir/freeworks
 test=`echo *`
 cd $cldir
 for i in $test
 do
  t=1
  this=`ls -d freeworks/[0-9]* 2>/dev/null`
  for k in $this
  do
   if diff -bBqr $ndir/freeworks/$i $k >/dev/null; then t=0; fi
  done
  if [ $t = 1 ]; then
   j=`echo $i | tr -d '[\.freework]'`
   echo "freework $j 1"
  fi
 done
fi

