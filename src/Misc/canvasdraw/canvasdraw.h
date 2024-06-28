#include <assert.h>
#include "../../Lib/libwims.h"
#define MAX_INT 128
#define MAX_BUFFER 		65536
#define MAX_DRAGSTUFF 		27
#define MAX_MULTI_PRIMITIVES	29
/* wims : MAX_FWRITE_SIZE 64*1024=65536 == 2*MAX_BUFFER */
#define MAX_COLOR_STRING	32
#define MAX_SLIDERS		16
/* the commmand / keyword name collection */
#define END 		-1
#define COMMENT 	-2
#define SIZE 		1
#define XRANGE 		2
#define YRANGE 		3
#define FONTFAMILY 	4
#define MATHML 		5
#define INPUT 		6
#define TEXTAREA 	7
#define LINEWIDTH 	8
#define POLYLINE 	9
#define POLY 		10
#define SEGMENT		15
#define LINE 		16
#define DLINE 		17
#define RECT 		18
#define ARC 		19
#define NEW 		20
#define STRING 		21
#define STRINGUP 	22
#define COPY	 	23
#define COPYRESIZED 	24
#define TRANSPARENT 	25
#define POINT 		26
#define CIRCLE 		27
#define GETPIXEL 	28
#define SQUARE 		29
#define ELLIPSE 	31
#define ROTATE 		32
#define TYPE 		33
#define QUALITY 	34
#define CSS 	35
#define POINTS 		36
#define TRIANGLE 	37
#define HLINE		38
#define VLINE		39
#define GRID		40
#define ZOOM		41
#define ARROW		42
#define DARROW		43
#define AXIS		44
#define FONTSIZE	46
#define	CURVE		50
#define PLOTSTEPS	51
#define TRANGE		53
#define MOUSE_PRECISION 54
#define FLY_TEXT	55
#define FLY_TEXTUP	56
#define BGIMAGE		57
#define DASHED		58
#define PARALLEL	59
#define LATTICE		60
#define OPACITY		61
#define AXIS_NUMBERING	62
#define RAYS		63
#define OUTPUT		64
#define CLOCK		65
#define STYLE		66
#define USERDRAW	67
#define MOUSE		68
#define AUDIO		69
#define AUDIOOBJECT	70
#define STOP		71
#define RESTART		72
#define FILLCOLOR	73
#define CUBE		74
#define CLEARBUTTON	75
#define ONCLICK		76
#define CROSSHAIR	77
#define CROSSHAIRS	78
#define BLINK		79
#define DASHTYPE	80
#define HTML		81
#define CROSSHAIRSIZE	82
#define ARROWHEAD	83
#define DRAG		84
#define HTTP		85
#define SLIDER		86
#define CLICKTILE	88
#define CLICKTILE_COLORS	89
#define TRANSLATION	90
#define KILLTRANSLATION	91
#define ARROW2		92
#define DARROW2		93
#define SVGCODE		95
#define ROUNDRECT	96
#define HATCHFILL	97
#define PATTERNFILL	98
#define DIAMONDFILL	99
#define DOTFILL		100
#define GRIDFILL	101
#define IMAGEFILL	102
#define FILL		103
#define FILLED		104
#define XYLOGSCALE	105
#define XLOGSCALE	106
#define YLOGSCALE	107
#define XLOGBASE	108
#define INTOOLTIP	109
#define REPLYFORMAT	110
#define VIDEO		111
#define BGCOLOR		112
#define FLOODFILL	113
#define FILLTOBORDER	114
#define SETPIXEL	117
#define PIXELS		118
#define PIXELSIZE	119
#define X_AXIS_STRINGS	121
#define Y_AXIS_STRINGS	122
#define FONTCOLOR	123
#define PIECHART	124
#define LEGEND		125
#define BARCHART	126
#define LINEGRAPH	127
#define STROKECOLOR	128
#define XLABEL		129
#define YLABEL		130
#define LEGENDCOLORS	131
#define ANIMATE		132
#define STATUS		133
#define SNAPTOGRID	134
#define XSNAPTOGRID	135
#define YSNAPTOGRID	136
#define USERINPUT_XY	137
#define SGRAPH		139
#define YLOGBASE	140
#define AFFINE		141
#define KILLAFFINE	142
#define LEVELCURVE	143
#define JSMATH		144
#define TRACE_JSCURVE	145
#define SETLIMITS	146
#define JSCURVE		147
#define CENTERSTRING	148
#define MOUSEX		149
#define MOUSEY		150
#define MOUSE_DEGREE	151
#define MOUSE_DISPLAY	152
#define XUNIT		153
#define YUNIT		154
#define KILLSLIDER	155
#define ANGLE		156
#define USERINPUT_FUNCTION 157
#define USERINPUT	158
#define HALFLINE	159
#define FUNCTION_LABEL	160
#define SEGMENTS	161
#define ARROWS		162
#define CIRCLES		163
#define ARROWS2		164
#define LINES		165
#define RECTS		166
#define HALFLINES	167
#define HLINES		168
#define VLINES		169
#define ROUNDRECTS	170
#define BEZIER		171
#define SNAPTOPOINTS	172
#define GROUP		173
#define SNAPTOFUNCTION  175
#define MULTIDRAW	176
#define MULTILINEWIDTH	177
#define MULTISTROKECOLORS	178
#define MULTISTROKEOPACITY	179
#define MULTIFILLCOLORS	180
#define MULTIFILLOPACITY	181
#define MULTIFILL	182
#define MULTILABEL	183
#define MULTIDASH	184
#define MULTISNAPTOGRID 185
#define MULTIUSERINPUT  186
#define PROTRACTOR	187
#define RULER		188
#define TRIANGLES 	189
#define POPUP		190
#define X_AXIS_STRINGS_UP 191
#define CURSOR		192
#define XERRORBARS	193
#define YERRORBARS	194
#define BOXPLOTDATA	196
#define USERBOXPLOT	197
#define USERBOXPLOTDATA	198
#define ROTATION_CENTER 199
#define KILLROTATE	200
#define CANVASTYPE	201
#define NOXAXIS		202
#define NOYAXIS		203
#define BOXPLOT		204
#define COLORPALETTE	205
#define FILLALL		206
#define XYOFFSET	207
#define XOFFSET		208
#define YOFFSET		209
#define CENTERED	210
#define RESETOFFSET	211
#define TEXTFILL	212
#define FILLPATTERN	213
#define NUMBERLINE	214
#define ELLIPSES	215
#define IMAGEPALETTE	216
#define CURVEDARROW2	217
#define CURVEDARROW	218
#define CURVEDARROWS	219
#define CURVEDARROWS2	220
#define LATEX		221
#define ALLOW_DUPLICATES	223
#define LINEAR		224
#define KILLLINEAR	225
#define OBABEL		226
#define CHEMTEX		227
#define NORESET		228
#define ARCARROW	229
#define KILL		230
#define RANGE		231
#define NEWRANGE	232
/* the js_function[] dcollection : js-code without configurable argumens see canvasutil.c  */
#define MAX_JS_FUNCTIONS 	52

#define DRAW_GRID	0
#define DRAW_CROSSHAIRS	1
#define DRAW_GRIDFILL	2
#define DRAW_XML	3
#define DRAW_ARCS	4
#define DRAW_LATTICE	5
#define DRAW_INPUTS	6
#define DRAW_TEXTAREAS	7
#define DRAW_HTTP	8
#define DRAW_AUDIO	9
#define DRAW_VIDEO	10
#define DRAW_DOTFILL	11
#define DRAW_HATCHFILL	12
#define DRAW_IMAGEFILL	13
#define DRAW_FLOODFILL	14
#define DRAW_FILLTOBORDER	15
#define DRAW_PIXELS	16
#define DRAW_LINES	17
#define DRAW_PIECHART	18
#define DRAW_CLOCK	19
#define DRAW_EXTERNAL_IMAGE	20
#define DRAW_DIAMONDFILL	21
#define DRAW_SGRAPH	22
#define DRAW_YLOGSCALE	23
#define DRAW_XLOGSCALE	24
#define DRAW_XYLOGSCALE	25
#define DRAW_CENTERSTRING	26
#define DRAW_JSFUNCTION	27
#define DRAW_BEZIER	28
#define DRAW_BOXPLOT	29
#define DRAW_JSBOXPLOT	30
#define DRAW_NUMBERLINE	31
#define JS_FIND_ANGLE	32
#define DRAW_TEXTFILL	33
#define INTERACTIVE	34
#define JS_ROTATE_MOUSE	35
#define JS_TRANSFORM_MOUSE	36
#define DRAW_FILL_PATTERN	37
#define JS_ZOOM	38
#define DRAG_AND_ZOOM	39
#define USERDRAW_AND_ZOOM	40
#define JS_RAWMATH	41
#define JS_LOAD_IMAGE	42
#define JS_SAFE_EVAL	43
#define JS_PLOT	44
#define JS_MATH	45
#define DRAW_TEXTS	46
#define DRAG_EXTERNAL_IMAGE	47
#define ADD_USER_INPUTS	48
#define JSPLOT_AND_ZOOM	49
#define JS_ARROWHEAD	50
#define DRAW_SUBSUP	51
/*  end js_function[]  */
/* default canvasses, eg png images xsize x ysize */
#define EXTERNAL_IMAGE_CANVAS 0 /* this is created first !!! in order to draw on it */
#define BG_CANVAS	1
#define STATIC_CANVAS	2
#define MOUSE_CANVAS	3
#define GRID_CANVAS	4
#define DRAG_CANVAS	5
#define DRAW_CANVAS	6
#define TEXT_CANVAS	7
#define CLOCK_CANVAS	8
#define ANIMATE_CANVAS	9
#define TRACE_CANVAS	10
#define JSPLOT_CANVAS	100 /* JSPLOT_canvas will be increased with every added inputfield...should not conflict with other images*/
#define FILL_CANVAS	200 /* will be increase with every fill */
#define USERDRAW_JSPLOT 300 /* USERDRAW_JSPLOT will be increased with every added inputfield...should not conflict with other images*/
#define CLICKFILL_CANVAS 400 /* will be increase with every click fill */
#define BOXPLOT_CANVAS	500 /* will increase with every new boxplot */
#define NUMBERLINE_CANVAS 600
#define MULTIDRAW_CANVAS	1000 /* + >25 draw types... 1001=points*/
#define ZOOM_CANVAS	1100
#define STATIC_IMAGE_CANVAS 700
#ifndef STD_H
#define STD_H

#ifndef bool
#define bool            char
#endif
#ifndef TRUE
#define TRUE            1
#endif
#ifndef FALSE
#define FALSE           0
#endif

#endif
void	add_to_buffer(char *tmp); /* add tmp_buffer to the buffer */
void	check_string_length(int length);
extern void *tmp_buffer;

void rotate(int num,double angle,double center[],int incr);
void transform(int num,int incr);
void add_read_canvas(int type_reply,int reply_precision);
void add_javascript_function();
void add_drag_code(int canvas_cnt,int use_dragstuff, int stuff[],int reply_format);
void add_trace_js_mouse(int canvas_cnt,char *stroke_color,char *jsmath,int font_size,double stroke_opacity,int line_width,int crosshair_size,char *css_class);
void add_setlimits(int font_size,char *css_class);
void add_safe_eval();
void add_calc_y(char *jsmath,int font_size,char *css_class);
void add_slider(int anim);
void add_slider_display(int precision,int font_size,char *font_color,double stroke_opacity);
void add_xyslider(double v1,double v2,int width,int height,char *use_slider,char *label,int slider_cnt,char *stroke_color,char *fill_color,int line_width,double opacity,char *font_family,char *font_color,int use_slider_display);
void *my_newmem(size_t size);
void canvas_error(char *msg);
char *eval(int xsize,int ysize,char *fun,double xmin,double xmax,double ymin,double ymax,int xsteps,int precision,double rotationcenter[]);
char *eval_parametric(int xsize,int ysize,char *fun1,char* fun2,double xmin,double xmax,double ymin,double ymax, double tmin,double tmax,int plotsteps,int precision,double rotationcenter[]);
char *eval_levelcurve(int xsize,int ysize,char *fun,double xmin,double xmax,double ymin,double ymax,int plotsteps,int precision,double level);
char *getMML(char *tex);
char *getSVGMOL(char *inputtype,char *keys);
char *data2js_array(int data[],int len);
char *double_xy2js_array(double xy[],int len,int decimals);
char *doubledata2js_array(double data[],int len, int decimals);
char *list2js_array(char *list,char *s);
int find_number_of_digits(int i);
int x2px(double x);
int y2px(double y);
char *str_replace(const char *str, const char *old, const char *new);
void add_clear_button(char *css_class,char *button_text);
void add_js_mouse(int canvas_cnt,int precision,char *stroke_color,int font_size,double stroke_opacity,int type);
void add_js_filltoborder(int canvas_type);
void add_js_multidraw(char *draw_types,char *button_style,int use_offset,int use_controls,int crosshair_size,int use_zoom);
extern void add_js_userdraw(char *draw_type,char *stroke_color,double stroke_opacity,int crosshair_size,int arrow_head,int use_offset, char *css_class,int use_snap,int canvas_type,int use_filled,char * fill_color,double fill_opacity,int line_width,char *font_family);
/* these should  be harmonized via switch key !!*/
void add_input_circle(int type,int num);
void add_input_segment(int num);
void add_input_demiline(int num);
void add_input_line(int num);
void add_input_polyline();
void add_input_crosshair(int num);
void add_input_arrow(int num);
void add_input_xy(int font_size,char *css_class);
void add_input_xyr(int font_size,char *css_class);
void add_input_x1y1x2y2(int font_size,char *css_class);
void add_textarea_xy(char *css_class);
void add_js_zoom_buttons(char *stroke_color,double stroke_opacity);
void add_js_tooltip(char *tooltip_text,char *bgcolor);
void add_js_popup(char *getfile_cmd);
void add_input_jsfunction(char *css_class,char *input_label,int input_cnt,char *stroke_color,float stroke_opacity,int line_width,int use_dashed,int dashtype0,int dashtype1,int font_size);
void add_js_protractor(int type,double xcenter,double ycenter,int size,char *font,char *stroke_color,double stroke_opacity,char *fill_color,double fill_opacity,int line_width,int use_scale,int dynamic,int use_snap);
void add_js_ruler(double x,double y,double sizex,double sizey,char *font,char *stroke_color,double stroke_opacity,char *fill_color,double fill_opacity,int line_width,int dynamic,int use_snap);
void add_color_palette(char *css_class);
void add_js_images(int use_offset,int snap);
int count_substring(char* string, char* substring);
extern int NUMBER_OF_COLORNAMES;
extern struct colors { char *hex; char *name; char *rgb; } colors[];
extern int js_function[MAX_JS_FUNCTIONS];
extern int reply_format;
extern int xsize;
extern int ysize;
extern unsigned int canvas_root_id;
extern int user_input_xy;
extern char *css_class;
extern int font_size;
extern char *draw_type;
extern char *function_label;
extern int input_cnt;
extern int use_dashed;
extern int dashtype[];
extern int jsplot_cnt;
extern int linegraph_cnt;
extern int barchart_cnt;
extern int legend_cnt;
extern int use_axis;
extern int use_axis_numbering;

extern FILE	*js_include_file;
/* used multidraw primitives : identifier in canvasmultidraw.c is index of this array
static char multidraw_primitives[MAX_MULTI_PRIMITIVES][32] = {"point","points","circle","circles",
"line","lines","segment","segments",
"arrow","arrows","triangle","triangles",
"closedpoly","text","rect","rects",
"poly","polys","parallelogram","parallelograms",
"images","curvedarrow","curvedarrows","curvedarrow2","curvedarrows2",
"crosshair","crosshairs"};
size of words "point","points",... == 6,7,..
static int multidraw_primitives_length[MAX_MULTI_PRIMITIVES] = {7,6,8,7,6,5,9,8,7,6,10,9,11,5,6,5,6,5,15,14,7,14,
13,13,12,10,11};
*/
