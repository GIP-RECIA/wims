#! /bin/sh

cd $w_wims_home/$w_wims_sesdir
sdir=`pwd`
cldir=$w_wims_home/log/classes/$w_wims_class

rm -Rf getfile/class 2>/dev/null
mkdir -p getfile/class
cd $cldir
dirs=`ls -d version $w_dirs 2>/dev/null`
if [ ! -z "$dirs" ]; then
  cp -pRL $dirs $sdir/getfile/class
fi
##if superclass exists
superdir=$w_wims_home/log/classes/$w_class_superclass
if [ -n "$w_class_superclass" ]; then
  cd $superdir/.users
  l=`grep user_participate=.*$w_tmpnum_class * | cut -d":" -f1 `;
  for special in .users photoboard; do
    lp=`echo "$w_dirs" | grep $special`;
    if [ "$lp" ]; then
      cd $superdir
      sdirs=`ls -d $special 2>/dev/null`
      if [ "$sdirs" = "$special" ] ; then
        mkdir -p $sdir/getfile/class/$special 2>/dev/null
        cd $superdir/$special;
        for f in $l; do
          if [ -e $f ]; then
            cp $f $sdir/getfile/class/$special/;
          fi
        done
      fi
    fi
  done
fi
# end superclass

cd $sdir/getfile
echo $w_wims_class >class/serial

if [ $w_format = zip ]; then
  rm -f class.zip 2>/dev/null
  zip -r class.zip class >/dev/null
  # when class.zip exceed filesystem limit, no zip is created
  # but it returns nothing on stderr
fi

if [ $w_format = tgz ] || [ $w_format = tar.gz ]; then
  tar -czf class.$w_format class >/dev/null
  # when class.tgz exceed filesystem limit, a truncated archive is created
  # and it returns "gzip: stdout: File too large" on stderr
fi

ls -l class.$w_format | awk '{print $5}'
mv class.$w_format $w_fname.$w_format
rm -R class
