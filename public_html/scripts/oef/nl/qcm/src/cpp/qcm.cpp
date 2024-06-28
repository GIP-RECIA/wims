target=serial ordered shuffle stepserial stepordered stepshuffle

#include "xiao.inc"

\text{datafile=slib(oef/env datafile)}
\integer{datacnt=wims(recordcnt \datafile)}
\text{shuff=shuffle(\datacnt)}
#include "confparm.inc"

#if defined TARGET_serial
\title{questions dans la suite}
\integer{start=randint(0..\datacnt-\questions)}
\text{records=wims(values x+\start for x=1 to \questions)}
\text{steptype=all}
#endif

#if defined TARGET_ordered
\title{questions al�atoires dans l'ordre}
\text{shuff=shuffle(\datacnt)}
\text{records=wims(sort numeric items \shuff[1..\questions])}
\text{steptype=all}
#endif

#if defined TARGET_shuffle
\title{questions al�atoires dans le d�sordre}
\text{shuff=shuffle(\datacnt)}
\text{records=\shuff[1..\questions]}
\text{steptype=all}
#endif

#if defined TARGET_stepserial
\title{Une par une dans la suite}
\integer{start=randint(0..\datacnt-\questions)}
\text{records=wims(values x+\start for x=1 to \questions)}
\text{steptype=step}
#endif

#if defined TARGET_stepordered
\title{Une par une dans l'ordre}
\text{shuff=shuffle(\datacnt)}
\text{records=wims(sort numeric items \shuff[1..\questions])}
\text{steptype=step}
#endif

#if defined TARGET_stepshuffle
\title{Une par une dans le d�sordre}
\text{shuff=shuffle(\datacnt)}
\text{records=\shuff[1..\questions]}
\text{steptype=step}
#endif

\text{choicename=Choix}

#include "proc.inc"

