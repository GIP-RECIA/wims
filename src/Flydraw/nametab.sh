#! /bin/sh

tablist="prep color obj"
prepstruct="
	char *name;
	int typ;
"
colorstruct="
	char *name;
	char *def;
"
objstruct="
	char *name;
	int required_parms,color_pos,fill_tag,subst;
	void (*routine) (objparm *pm);
"
export prepstruct colorstruct objstruct

header="
	/* This file is automatically generated! Do not edit it. */
#include \"flydraw.h\"
"

names=`cat <<@
brush	t_color "-1,-1,-255"
brushed	t_color "-1,-1,-255"
style	t_color	"-1,-255,-1"
styled	t_color	"-1,-255,-1"
tile	t_color	"-255,-1,-1"
tiled	t_color	"-255,-1,-1"

color	t_prep	p_color
colour	t_prep	p_color
colors	t_prep	p_color
colours	t_prep	p_color

tiny	t_prep	p_font
small	t_prep	p_font
medium	t_prep	p_font
large	t_prep	p_font
huge	t_prep	p_font
giant	t_prep	p_font

affine		t_obj	6,0,0,0,	obj_affine
arrow		t_obj	5,1,0,1,	obj_arrow
arrow2		t_obj	5,1,0,1,	obj_arrow2
darrow		t_obj	5,1,-1,1,	obj_arrow
darrow2		t_obj	5,1,-1,1,	obj_arrow2
dasharrow	t_obj	5,1,-1,1,	obj_arrow
dasharrow2	t_obj	5,1,-1,1,	obj_arrow2
dashedarrow	t_obj	5,1,-1,1,	obj_arrow
dashedarrow2	t_obj	5,1,-1,1,	obj_arrow2
arc		t_obj	6,1,0,3, obj_arc
angle t_obj 5,1,0,3, obj_angle
ball		t_obj	3,1,1,0,	obj_circle
circle		t_obj	3,1,0,3,	obj_circle
circles		t_obj	3,-1,0,4,	obj_circles
comment		t_obj	0,0,0,0,	obj_comment
copy		t_obj	6,0,0,0,	obj_copy
copyresized	t_obj	8,0,0,0,	obj_copyresize
crosshair	t_obj	2,1,0,1,	obj_crosshair
crosshairs	t_obj	2,-1,0,1,	obj_crosshairs
crosshairsize	t_obj	1,0,0,0,	obj_crosshairsize
curve		t_obj	0,-1,0,1,	obj_plot
dashedline	t_obj	4,1,0,1,	obj_dline
dashedlines	t_obj	4,-1,0,1,	obj_dlines
dashline	t_obj	4,1,0,1,	obj_dline
dashlines	t_obj	4,-1,0,1,	obj_dlines
dashsegment	t_obj	4,1,0,1,	obj_dline
diafill		t_obj	4,1,1,0,	obj_diafill
diamondfill	t_obj	4,1,1,0,	obj_diafill
disk		t_obj	3,1,1,0,	obj_circle
diskfill	t_obj	4,1,1,0,	obj_dotfill
dline		t_obj	4,1,0,1,	obj_dline
dlines		t_obj	4,-1,0,1,	obj_dlines
dhline		t_obj	2,1,-1,1,	obj_hline
dpolyline	t_obj	4,-1,0,1,	obj_dlines
dotfill		t_obj	4,1,1,0,	obj_dotfill
dplot		t_obj	0,-1,0,1,	obj_dplot
dsegment	t_obj	4,1,0,1,	obj_dline
dvline		t_obj	2,1,-1,1,	obj_vline
ellipse		t_obj	4,1,0,3,	obj_ellipse
ellipses	t_obj	4,-1,0,3,	obj_ellipses
existing	t_obj	0,0,0,0,	obj_existing
fcircle		t_obj	3,1,1,0,	obj_circle
fellipse	t_obj	4,1,1,0,	obj_ellipse
fill		t_obj	2,1,1,0,	obj_fill
filledcircle	t_obj	3,1,1,0,	obj_circle
filledellipse	t_obj	4,1,1,0,	obj_ellipse
filledpoly	t_obj	4,-1,1,0,	obj_poly
filledpolygon	t_obj	4,-1,1,0,	obj_poly
filledrect	t_obj	4,1,1,0,	obj_rect
filledrectangle	t_obj	4,1,1,0,	obj_rect
filledsquare	t_obj	3,1,1,0,	obj_square
filledtriangle	t_obj	6,1,1,0,	obj_triangle
fillcircle	t_obj	3,1,1,0,	obj_circle
fillellipse	t_obj	4,1,1,0,	obj_ellipse
fillpoly	t_obj	4,-1,1,0,	obj_poly
fillpolygon	t_obj	4,-1,1,0,	obj_poly
fillrect	t_obj	4,1,1,0,	obj_rect
fillrectangle	t_obj	4,1,1,0,	obj_rect
fillsquare	t_obj	3,1,1,0,	obj_square
filltriangle	t_obj	6,1,1,0,	obj_triangle
filltoborder	t_obj	2,2,1,0,	obj_fillb
flood		t_obj	2,1,1,0,	obj_fill
floodfill	t_obj	2,1,1,0,	obj_fill
fpoly		t_obj	4,-1,1,0,	obj_poly
fpolygon	t_obj	4,-1,1,0,	obj_poly
frect		t_obj	4,1,1,0,	obj_rect
frectangle	t_obj	4,1,1,0,	obj_rect
fsquare		t_obj	3,1,1,0,	obj_square
ftriangle	t_obj	6,1,1,0,	obj_triangle
gridfill	t_obj	4,1,1,0,	obj_gridfill
hatchfill	t_obj	4,1,1,0,	obj_hatchfill
hline		t_obj	2,1,0,3,	obj_hline
hdline		t_obj	2,1,-1,1,	obj_hline
insert		t_obj	6,0,0,0,	obj_copy
interlace	t_obj	0,0,0,0,	obj_interlace
killaffine	t_obj	0,0,0,0,	obj_killaffine
killbrush	t_obj	0,0,0,0,	obj_killbrush
killlinear	t_obj	0,0,0,0,	obj_killlinear
killrotate	t_obj	0,0,0,0,	obj_killlinear
killrotation	t_obj	0,0,0,0,	obj_killlinear
killstyle	t_obj	0,0,0,0,	obj_killstyle
killtile	t_obj	0,0,0,0,	obj_killtile
killtranslate	t_obj	0,0,0,0,	obj_killtranslation
killtranslation	t_obj	0,0,0,0,	obj_killtranslation
lattice		t_obj	8,1,0,1,	obj_lattice
line		t_obj	4,1,0,3,	obj_line
linear		t_obj	4,0,0,0,	obj_linear
lines		t_obj	4,-1,0,3,	obj_lines
rays		t_obj	4,-1,0,3,	obj_rays
linewidth	t_obj	1,0,0,0,	obj_linewidth
new		t_obj	0,0,0,0,	obj_new
output		t_obj	0,0,0,0,	obj_output
parallel	t_obj	7,1,0,3,	obj_parallel
pixels		t_obj	2,-1,-1,0,	obj_points
point		t_obj	2,1,0,1,	obj_point
pointfill	t_obj	4,1,1,0,	obj_dotfill
points		t_obj	2,-1,0,1,	obj_points
poly		t_obj	4,-1,0,3,	obj_poly
polygon		t_obj	4,-1,0,3,	obj_poly
polyline	t_obj	4,-1,0,3,	obj_lines
brokenline		t_obj	4,-1,0,3,	obj_lines
print		t_obj	2,-1,0,0,	obj_string
range		t_obj	4,0,0,0,	obj_range
rangex		t_obj	2,0,0,0,	obj_xrange
rangey		t_obj	2,0,0,0,	obj_yrange
ranget		t_obj	2,0,0,0,	obj_trange
rect		t_obj	4,1,0,3,	obj_rect
rectangle	t_obj	4,1,0,3,	obj_rect
rotate		t_obj	1,0,0,0,	obj_rotation
rotation	t_obj	1,0,0,0,	obj_rotation
seg		t_obj	4,1,0,3,	obj_line
segment		t_obj	4,1,0,3,	obj_line
segments		t_obj	4,-1,0,3,	obj_segments
setbrush	t_obj	0,0,0,0,	obj_setbrush
setpixel	t_obj	2,1,-1,0,	obj_point
setstyle	t_obj	0,0,0,0,	obj_setstyle
settile		t_obj	0,0,-1,0,	obj_setbrush
size		t_obj	2,0,0,0,	obj_size
square		t_obj	3,1,0,3,	obj_square
string		t_obj	2,-1,0,0,	obj_string
stringup	t_obj	2,-1,-1,0,	obj_string
text		t_obj	2,-1,0,0,	obj_string
textup		t_obj	2,-1,-1,0,	obj_string
translate	t_obj	2,0,0,0,	obj_translation
translation	t_obj	2,0,0,0,	obj_translation
transparent	t_obj	0,-1,0,0,	obj_transp
triangle	t_obj	6,1,0,3,	obj_triangle
vline		t_obj	2,1,0,3,	obj_vline
vdline		t_obj	2,1,-1,1,	obj_vline
write		t_obj	2,-1,0,0,	obj_string
writeup		t_obj	2,-1,-1,0,	obj_string
xrange		t_obj	2,0,0,0,	obj_xrange
yrange		t_obj	2,0,0,0,	obj_yrange
trange		t_obj	2,0,0,0,	obj_trange
tstep		t_obj	1,0,0,0,	obj_tstep
tsteps		t_obj	1,0,0,0,	obj_tstep
plotstep	t_obj	1,0,0,0,	obj_tstep
plotsteps	t_obj	1,0,0,0,	obj_tstep
plot		t_obj	0,-1,0,1,	obj_plot
plotjump	t_obj	1,0,0,0,	obj_plotjump
levelcurve	t_obj	0,-1,0,1,	obj_levelcurve
levelstep	t_obj	1,0,0,0,	obj_levelstep
animstep	t_obj	1,0,0,0,	obj_animstep
wims_linecount	t_obj	1,0,0,0,	obj_linecount
wims_end	t_obj	0,0,0,0,	obj_end
setmatrix 	t_obj	5,0,0,0,	obj_setmatrix
resetmatrix 	t_obj	1,0,0,0,	obj_resetmatrix
setvector 	t_obj	3,0,0,0,	obj_setvector
resetvector 	t_obj	1,0,0,0,	obj_resetvector
settransform 	t_obj	7,0,0,0,	obj_settransform
resettransform 	t_obj	1,0,0,0,	obj_resettransform
setparallelogram	t_obj	6,0,0,0,	obj_setparallelogram
resetparallelogram 	t_obj	0,0,0,0,	obj_resetparallelogram
multicopy 	t_obj	0,0,0,0,	obj_multicopy
vimgfile	t_obj	0,0,0,0,	obj_vimgfile
vimg		t_obj	1,0,0,0,	obj_vimg
tikzfile		t_obj	0,0,0,0,	obj_tikzfile
@
`
namecolor=`awk 'NF==2 {print $1"	t_color \""$2"\""}' colors`
namelist=`sort -k 1,1 <<@ | uniq
$namecolor
$names
@
`

o_list=`echo "$namelist" | grep t_obj | awk '{print substr($4,5)}' | sort | uniq`

cd `dirname $0`
echo "$header" >nametab.c
for o in $o_list
do
 echo "void obj_$o(objparm *pm);" >>nametab.c
done

tab=tab
no=_no
for t in $tablist
do
 eval def='$'$t'struct'
 list=`echo "$namelist" | grep t_$t`
 ll=`echo "$list" | awk '
 	NF>1 {print "{\""$1"\",	"$3" "$4" "$5"},"}
	'`
 echo "$list" | awk '
	BEGIN {a=0};
	NF>1 {print "\""$1"\",	",$2",	"a; a=a+1;};
'>.nametab.$t
 echo "struct $t$tab $t$tab[]={
$ll
};

int $t$no=(sizeof($t$tab)/sizeof($t$tab[0]));
" >>nametab.c
done

list=`cat .nametab.* | sort -k 1,1 | awk '{print "{"$0"},"}'`
cat <<@ >>nametab.c
struct nametab nametab[]={
$list
};

int nametab_no=(sizeof(nametab)/sizeof(nametab[0]));

@

rm -f .nametab.* >/dev/null 2>&1
