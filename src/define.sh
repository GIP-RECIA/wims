#! /bin/sh

echo "##generated by src/define.sh"
grep "#define MAX_SHEETS" wimsdef.h | awk -F'#define MAX_SHEETS' ' {print "MAX_SHEETS="$2 ; exit}'
grep "#define MAX_EXOS" wimsdef.h | awk -F'#define MAX_EXOS' ' {print "MAX_EXOS="$2 ; exit}'
grep "#define MAX_REQUIRE" wimsdef.h | awk -F'#define MAX_REQUIRE' ' {print "MAX_REQUIRE="$2 ; exit}'
grep "#define MAX_EXAMS" wimsdef.h | awk -F'#define MAX_EXAMS' ' {print "MAX_EXAMS="$2 ; exit}'
grep "#define MAX_VOTES" wimsdef.h | awk -F'#define MAX_VOTES' ' {print "MAX_VOTES="$2 ; exit}'
grep "#define MAX_OEFCHOICES" wimsdef.h | awk -F'#define MAX_OEFCHOICES' ' {print "MAX_OEFCHOICES="$2 ; exit}'
grep "#define MAX_OEFREPLIES" wimsdef.h | awk -F'#define MAX_OEFREPLIES' ' {print "MAX_OEFREPLIES="$2 ; exit}'
grep "#define MAX_TECHVARVAL" wimsdef.h | awk -F'#define MAX_TECHVARVAL' ' {print "MAX_TECHVARVAL="$2 ; exit}'
grep "#define MAX_LTECHVAR" wimsdef.h | awk -F'#define MAX_LTECHVAR' ' {print "MAX_LTECHVAR="$2 ; exit}'
grep "#define MAX_SEEDSCORE" wimsdef.h | awk -F'#define MAX_SEEDSCORE' ' {print "MAX_SEEDSCORE="$2 ; exit}'
grep "#define MAX_SCORESEED" wimsdef.h | awk -F'#define MAX_SCORESEED' ' {print "MAX_SCORESEED="$2 ; exit}'
grep "#define MAX_REGVARS" wimsdef.h | awk -F'#define MAX_REGVARS' ' {print "MAX_REGVARS="$2 ; exit}'
grep "#define MAX_PROMPTLEN" OefMsg2wims/oef2wims.h | awk -F'#define MAX_PROMPTLEN' ' {print "MAX_PROMPTLEN="$2 ; exit}'
grep "#define MAX_FREEWORKS" wimsdef.h | awk -F'#define MAX_FREEWORKS' ' {print "MAX_FREEWORKS="$2 ; exit}'
grep "#define MAX_USERFORGRADES" wimsdef.h | awk -F'#define MAX_USERFORGRADES' ' {print "MAX_USERFORGRADES="$2 ; exit}'
grep "#define MAX_SUBCLASSES" wimsdef.h | awk -F'#define MAX_SUBCLASSES' ' {print "MAX_SUBCLASSES="$2 ; exit}'
echo "DEBUG_MODULE=qualite@wimsedu.info"
echo "DF_SEVERITY=1 2 1"
echo "MAX_WEIGHT=10000"
echo "MIN_WEIGHT=0"
# list of directories potentially containing user files (in addition to ".users/")
# (used in deluser, usermanage/recover.proc, adm/raw...)
echo "USER_DIR_LIST=examlog,exolog,noscore,score,photoboard"
echo "backup_delete=2000"
