#! /bin/sh

forumdir=$w_Forumdir
mkdir -p $forumdir/.threads
mkdir -p $forumdir/.users

today=`date '+%Y%m%d'`
cat <<@ >$forumdir/.def
!set mb_title=
!set mb_description=
!set mb_supervisor=$w_wims_supervisor
!set mb_email=$w_wims_supervisormail
!set mb_lang=$w_lang
!set mb_readpolicy=alluser
!set mb_sendpolicy=$w_cfm_send
!set mb_password=*
!set mb_creation=$today
!set mb_defined=yes
@

