#! /bin/sh

rm -fR $w_wims_home/$w_wims_sesdir/pubprep
mkdir -p $w_wims_home/$w_wims_sesdir/pubprep
cp -pPR $w_devdir/$w_mod $w_wims_home/$w_wims_sesdir/pubprep/$w_mname
cd $w_wims_home/$w_wims_sesdir/pubprep
tar -czf ../module.tgz $w_mname

curl -X POST "$w_centralhost/$w_centralcgi?form-data"\
  -A "WIMS-webget"\
  -F "module=$w_collector" -F "job=submit"\
  -F "author=$w_submitauth" -F "pass=$w_submitpass"\
  -F "mname=$w_mdir/$w_mname" -F "wver=$w_cheatversion"\
  -F "submittype=$w_submittype" -F "istranslate=$w_istranslate"\
  -F "modifiers=$w_modifiers" -F "comment=$w_comment"\
  -F "wims_deposit=@$w_wims_home/$w_wims_sesdir/module.tgz"
