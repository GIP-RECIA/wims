#! /bin/sh

## maybe this file can be mutualise with adm/class/freework/proc/getraw.sh

log_dir=$w_wims_home/log/classes/$w_wims_class;
cat $log_dir/score/$w_getraw $log_dir/noscore/$w_getraw 2>/dev/null | sort >$session_dir/user.getraw;

if [ ! -s "$session_dir/user.getraw" ]; then
  echo "No work has been done by this participant up to now."
  exit
fi
if [ "$w_test" = "no" ]; then
  echo "session	sheet exo Requete Seed Statut"
  echo "------------------------------------------------------------"
  cat $session_dir/user.getraw | cut -c19- > $session_dir/user.getraw_1
  cat $session_dir/user.getraw_1 | cut -d"	" -f1,3,4;
else
  if [ "$w_wims_user" = "supervisor" ]; then
    echo "    Date.Hour 	session	sheet exo Requete 	IP 	Seed	Statut"
    echo "------------------------------------------------------------"
    cat $session_dir/user.getraw | cut -d"	" -f1,2,3,4 ;
  else
   echo "    Date.Hour 	session	sheet exo Requete 	IP 	Statut"
    echo "------------------------------------------------------------"
    cat $session_dir/user.getraw | cut -d"	" -f1,2,4 ;
  fi;
fi;

## 2:IP, 3:seed, 4:status
