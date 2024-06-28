#!/bin/sh

test=`obabel -V`
if [ -z "$test" ] ; then echo "-1"; else
  obabel -:"$wims_exec_parm" -osdf --gen3D
fi
