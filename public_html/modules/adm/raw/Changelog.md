adm/raw new features and modifications
--------------------------------------
**4.25a:**
 - r.      (2022-09-27) job=getinfoserver send site_manager information (FG)
 - r.15076 (2022-09-15) job=getmodulesstat no displaying line for of module without activity (FG)

**4.23c:**
 - r.16682 (2022-05-10) job=addclass : limit creation to individual class/groupement/class in a groupement (other structure don't work) (FG)
 - r.16591 (2022-04-20) add jobs "restoreclassbackups" and "listclassbackups" to handle class backups (OB)
 - r.16433 (2022-04-13) add job="getmodulesstat" to load module statistic (FG)
 - r.16433 (2022-03-11) job="getserverstat" add option=server to load server connexion/session/site statistics (FG)

**4.18c-r.16031 (2021-08-24) (OB):**

 - Now job addclass handle fields limits
 - Job "getclass" can return strings with '"' in correct json

**4.18b-r.15818 (2021-05-22):**
Add the job "getserverstat" to download server and class geoloc file and class and user number (FG)

**4.18-r.15428 (2020-10-06):**
Job authuser now check if user has changed his IP only if option `$class_examscore_withoutip` is active. (set by teacher in class params)

**4.17-r.14384 (2019-11-05):**

- add the job "changedates" (Repels the expiry date of `qclass` and all its sheets / exams)
- Jobs "listsheets" and "listexams" now display the list of expiration dates


**4.16b-r.14139 (2019-06-26):**

- add "last_detail" to getsheetscores (gives the last score for each exercice) + correct a bug on "requires"
- now getsheetscores job gives the sheet formula chosen by supervisor
- add "sheet_weight" in getsheetscores job + rename "weights" into "exo_weights"


**4.16a-r.13828 (2019-04-12):**

- add "allowcloning" and "cloningpwd" to class_defs showed in getclass and listclasses (only allowcloning is accessible by listclasses)
- remove debug informations displayed in case of identification failure, and connexion refused by requested class


**4.16-r.13460 (2018-12-04):**

- A bunch of bugfixes, issued by Q. Coumes (thx to him) :
	- **copyclass**: was not working as expected for a single class
	- **getclassmodif**: was not returning a valid json when several modified files
	- **getclasstgz**: HTML headers was merged with the tgz binary.
	- **putcsv**: this alpha draft job now clearly indicate to avaoid using it until it's finished, instead of returning "unauthorized"
	- **recuser**: more explicit message returned : "User successfully recovered"
	- **repairclass**: typo corrected ('action,')


**4.15-r.13228 (2018-07-20):**

- bugfix with the wims_sheet forbidden variable, replaced by sheet_id
- add missing addexam, addexo and putexo in the protocol doc
- reformat protocol doc in markdown


**4.14-r.12957 (2018-06-15):**

- Job "getclass" gives some more lists (subclasses in a group, and every sub-items in the portal)
- script "check.class" accepts class portals


**4.13-r.11380 (2018-01-11):**

- Job "deluser" removes also user related data (score, logs...)
- Job "recuser" recovers also user related data (score, logs...)
- Job "deluser" accepts new option "del_from_trash" to orce a real user deletion

**4.12a-r.11380 (2018-01-09):**
Job "lightpopup" now keep trace of http protocol (https)

**4.12-r.11380 (2017-06-14):**

- Add a new job "buildexos" : it compiles (src->def) all class exercices, and refresh indexes
- Jobs "delexo" and "addexo" now accept the option "no_build", that improves the speed when there is a lot of exercices to handle at the same time. (but don't forget to call the "buildexos" job when all the deletions are done !)
- better severity definition in addsheet

**4.11-r.11380 (2017-03-01):**
Bugfix in GetSheetScores : when there was more than 100 users in the class, a cmd_output_too_long error was raised. (now cuts user list every 50)

**4.10-r.11100 (2016-11-23):**
Adds 2 scripts used in modexosheet job (check.worksheet & clean.worksheet). They should have been already here since r.5665 :/

**4.09-r.11095 (2016-10-31):**

- corrects a bug introduced in r.10935 in addsheet and modsheet jobs. (!singlespace is replacing returns by simple spaces)
- introduces a new job in ALPHA state : "repairclass"
- corrects a small bug in getsheet
- getcsv & getclass now call "mkuserlist" script, just to be sure the userlist contains all the users.

**4.08-r.10935 (2016-08-29):**
removes unwanted spaces/tabs in sheet properties in addsheet, getsheet and modsheet jobs.

**4.07-r.10778 (2016-07-12):**
`./build-index` now is called on the superclass ID when present. (addclass, copyclass, delclass, modclass)

**4.06-r.9963 (2016-03-23):** "delsheet" and "delexam" jobs now can't delete a sheet/exam if there is at least one more recent active of same type. (jobs still in BETA) + adjust some WIMS limits (MAX_EXOS, MAX_EXAMS, MAX_SHEETS) : now you cant add more than MAX_SHEETS sheets and MAX_EXAMS exams.

**4.05-r.9912 (2016-02-08):** "getscores" job is only calling "getcsv". The only difference between this job and getcsv, is that this one returns a usual response formatted, not a directly downloadable file. No more duplicated code : this one will also directly benefits from updates in userscore module.

**4.04-r.9909 (2016-02-05):** "getcsv" job calls directly scripts from "adm/class/userscore", to avoid duplicated code. + delete job "download", which was only a duplicata of "getcsv"

**4.03-r.9896 (2016-01-27):** now "getscore" and "getsheetscores" jobs send also user's bests and levels

**4.02-r.9627 (2015-10-13):** now "getsheetscores" and "getexamscores" jobs send also user's full names

**4.01-r.6628 (2013-05-27):** now verify wims exam and sheet limits (64 exercices max)

**4.00-r.6514 (2013-04-19):** now cleanClass can clean a sublclass in a superclass

**r.6364 (2013-02-12):** getlog can now give log connexions for exams. (option = exams)

**r.6026 (2013-04-19):** optimizing getlog job, now it can render more than 500 lines of a user log

**r.5967 (2012-11-13):** 2 new jobs :

- copyclass
- and getsheetstats + multiple bugs corrections

**r.5802 (2012-10-18):** Correction d'un bug empechant l'ajout d'un exercice contenant des virgules dans une feuille.

**r.5678 (2012-09-21):** Adds new script "adm/urldecode" : exact opposite of "adm/codeurl" script. (converts an URI string into normal string) + Corrects a bug in adm/raw putexo : now module url is well converted if sended in URI format. nb : for urldecode/codeurl works, you have to install a perl libray (liburi-perl on debian // p5-uri on Mac)

**r.5672 (2012-09-19):** corrections on "getlog" job

**r.5591 (2012-07-11):** Corrects a bug causing malformed single class creation

**r.5305 (2012-05-25):** Udpate "Listmodules" job in json, adding translated titles for levels.   + small css update

**r.5303 (2012-05-16):** Corrects a bug causing variable `$wims_supertype` not set on user session + minor improvement on job "listmodules"

**r.5273 (2012-04-25):** bug correction on Json format

**r.5263 (2012-04-21):** loggin when users are created (like in the standard reguser)

**r.5174 (2012-03-20):** trying to get the "class connection with other servers" working

**r.5156 (2012-03-13):** let authuser accept external identification

**r.5142 (2012-03-13):** adding missing variables,needed for ipd_method=php

**r.5017 (2012-02-17):** Variable names changes: cas_host becomes cas_auth. Added

**r.4999 (2012-02):** adds  auth, cas_host param for class

**r.4998 (2012-02):** adds "external_auth" param for users

**r.4794 (2011-12):** correction bug sur addexam + ajout d'infos sur delclass

**r.4783 (2011-12):** correction bug divers (doubles quotes maintenant autorisées dans getsheet et getexam)

**r.4746 (2011-11):** correcting bug on "listmodules" export in json + html correction in oef/Main

**r.4687 (2011-10):** getclassesuser n'est plus lancé lorsque listclass a généré une erreur ==> messages d'erreurs plus clairs ainsi.

**r.4668 (2011-10):** correcting bug on "getclassesuser"

**r.4658 (2011-10):** allowing for class setup via adm/raw

**r.4653 (2011-10):** listclasses does not need the list of participants

**3.32-r.4641 (09/2011):** New Jobs :

- linksheet (adds all exercices from sheet $qsheet to exam $qexam)
- getsheetscores (gets all score from sheet $qsheet - JSON only)
- getexamscores (gets all score from exam $qexam - JSON only)

**3.31 (06/2011):**

- New jobs : getexosheet, modexosheet
- New script : update.exo
	GetSheet has also been modified. to get exercise list from this Job, now you have
	  to make a script in the response type.

**3.30 (05/2011):**

- New jobs : listexos, movexo, movexos, sharecontent
- New script : check.exoclass
- New output type : JSON
	GetClass has also been modified for optimization. It is no longer possible
	  to get exercise list from this job.
	Use "listexos" instead

**3.23 (06/2010):**

- New jobs : addexam, addexo, checkexam, delexam, delexo, download, getexam,
				getexamlog, getexo, getexofile, getmodule, getscores, linkexo,
				listmodules, modexam, modsheet, putexo, search
				(some jobs are currently in beta only)
- XML format improved (still needs work)

**3.22  (06/2009):**

- bugs in getcvs due to !hex in scoring
- New options for getclass (program, subcourse,. ..)
- New job : listclasses which gives listclasses with connection with some ident
   and rclass

**3.21  (03/2008):**

- All outputs can be formatted according to the desire of the querying software.
- few bugs corrected (i.e., a wrong expiration date on job addclass)
- File jobs (getcsv, getclassfile, getclasstgz) are not sending an "Ok status" anymore,
		they just send directly the file
- New jobs added : checksheet,addsheet,delsheet,getsheet,listsheets
