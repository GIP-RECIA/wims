#! /bin/sh

cd ..
i=`id -un`
find $wims_exec_parm \! -user $i | head -60 | grep -v '^chroot/usr/bin/\[$'

## cherche dans les r�pertoires $wims_exec_parm les fichiers n'appartenant pas � l'utilisateur
##courant. Se restreindre aux 60 premiers et ne pas tenir compte  du fichier [ de chroot/usr/bin
