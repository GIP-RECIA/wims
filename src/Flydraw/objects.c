/*    Copyright (C) 1998-2003 XIAO, Gang of Universite de Nice - Sophia Antipolis
 *
 *  This program is free software; you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation; either version 2 of the License, or
 *  (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with this program; if not, write to the Free Software
 *  Foundation, Inc., 675 Mass Ave, Cambridge, MA 02139, USA.
 */

#include <errno.h>
#include "flydraw.h"

/* Tikz things */

static char *tikz_color (int the_color)
{
  static char buf[50];
  int r=gdImageRed(image,the_color);
  int g=gdImageGreen(image,the_color);
  int b=gdImageBlue(image,the_color);
  sprintf(buf, "{rgb,255:red,%i;green,%i;blue,%i}",r,g,b);
  return buf;
}

static char *tikz_options (int the_color, int the_fill)
{
  static char buf[100];
  if (the_color == gdBrushed)
    the_color = tikz_brushColor;
  sprintf (buf, "draw=%s,cap=round",tikz_color(the_color));
  if (the_color != tikz_brushColor) strcat(buf, ",thin");
  if (the_fill == -1) strcat(buf, ",dashed");
  if (the_fill == 1)
    sprintf(buf+strlen(buf), ",fill=%s", tikz_color(the_color));
  return buf;
}

#define flip(y) (sizey-1-(y))

/* bug in gdImageFillToBorder */

void patchgdImageFillToBorder (gdImagePtr im, int x, int y, int border, int color)
{
  if(x>=im->sx || x<0 || y>=im->sy || y<0) return;
  gdImageFillToBorder(im,x,y,border,color);
}

void patchgdImageFill (gdImagePtr im, int x, int y, int color)
{
  if(x>=im->sx || x<0 || y>=im->sy || y<0) return;
  gdImageFill(im,x,y,color);
}

#define DASHPIXELS 8

void myDashedLine(gdImagePtr im, int x1, int y1, int x2, int y2, int color){
  /**
   * emulates gdImageDashedLine with gdImageSetStyle and gdImageLine
   * GK: As gdImageDashedLine is slightly broken in latest libgd libraries,
   * GK: I implemented an emulation named "myDashedLine"
   **/

  int styleDashed[DASHPIXELS],i;
  for (i=0; i< DASHPIXELS/2; i++) styleDashed[i]=color;
  for (; i< DASHPIXELS; i++) styleDashed[i]=gdTransparent;
  gdImageSetStyle(im, styleDashed, DASHPIXELS);
  gdImageLine(im, x1, y1, x2, y2, gdStyled);
}


/* File opening: with security */
FILE *open4read(char *n)
{
  char *p, *p1, *p2, namebuf[2048];
  int t;
  FILE *f;
  n=find_word_start(n);
  if(*n==0) return NULL;
  p=getenv("flydraw_filebase");
  p1=n+strlen(n)-4;if(p1<n || strcasecmp(p1,".gif")!=0) t=1; else t=0;
  if(p!=NULL && *p!=0) {
    char pbuf[MAX_LINELEN+1];
    snprintf(pbuf,sizeof(pbuf),"%s",p);
    p=find_word_start(pbuf); if(strstr(p,"..")!=NULL) return NULL;
    if(*n=='/' || strstr(n,"..")!=NULL) return NULL;
    /* prohibit unusual file/dir names */
    for(p1=p;*p1;p1++)
      if(!isalnum(*p1) && !isspace(*p1) && strchr("~_-/.",*p1)==NULL)
        return NULL;
    for(p1=n;*p1;p1++)
      if(!isalnum(*p1) && !isspace(*p1) && strchr("~_-/.",*p1)==NULL)
        return NULL;
    f=NULL;
    for(p1=p; *p1; p1=find_word_start(p2)) {
      p2=find_word_end(p1);
      if(*p2) *p2++=0;
      snprintf(namebuf,sizeof(namebuf),"%s/%s",p1,n);
      f=fopen(namebuf,"r"); if(f!=NULL) goto imgtype;
    }
    p1=getenv("w_wims_session");
    if(p1!=NULL && strncmp(n,"insert",6)==0) {
      snprintf(namebuf,sizeof(namebuf),"../s2/%s/%s",p1,n);
      f=fopen(namebuf,"r");
    }
  }
  else {
    snprintf(namebuf,sizeof(namebuf),"%s",n);
    f=fopen(namebuf,"r");
  }
  imgtype:
  if(t && f!=NULL) {
    char tbuf[1024],sbuf[4096];
    fclose(f); f=NULL;
    p1=getenv("TMPDIR"); if(p1==NULL || *p1==0) p1=".";
    snprintf(tbuf,sizeof(tbuf),"%s/drawfile_.gif",p1);
    snprintf(sbuf,sizeof(sbuf),"convert %s %s",namebuf,tbuf);
    if (system(sbuf)) fly_error("system_failed");
      f=fopen(tbuf,"r");
  }
  return f;
}

/* Does nothing; just a comment. */
void obj_comment(objparm *pm)
{
  return;
}

/* define image size */
void obj_size(objparm *pm)
{
  sizex=rint(pm->pd[0]); sizey=rint(pm->pd[1]);
  if(sizex<0 || sizey<0 || sizex>MAX_SIZE || sizey>MAX_SIZE) {
    fly_error("bad_size"); return;
  }
  if(image!=NULL) {
    fly_error("size_already_defined"); return;
  }
  image=gdImageCreate(sizex,sizey);
  if(tikz_file) fprintf(tikz_file,"\\clip (0,0) rectangle (%i, %i);\n", sizex, sizey);
  if(image==NULL) fly_error("image_creation_failure");
  else {
    color_white=gdImageColorAllocate(image,255,255,255);
    color_black=gdImageColorAllocate(image,0,0,0);
    color_bounder=gdImageColorAllocate(image,1,2,3);
    color_frame=gdImageColorAllocate(image,254,254,254);
  }
}

/* new image */
void obj_new(objparm *pm)
{
  if(image) {
    gdImageDestroy(image);image=NULL;
  }
  if(pm->pcnt>=2) { obj_size(pm); gdImageRectangle(image,0,0,sizex-1,sizey-1,color_frame);}
  else sizex=sizey=0;
  saved=0;
}

/* new image */
void obj_existing(objparm *pm)
{
  FILE *inf;
  char *pp;

  if(image) {
    gdImageDestroy(image);image=NULL;
  }
  pp=find_word_start(pm->str);*find_word_end(pp)=0;
  inf=open4read(pp);
  if(inf==NULL) {
    fly_error("file_not_exist"); return;
  }
  image=gdImageCreateFromGif(inf); fclose(inf);
  if(image==NULL) {
    fly_error("bad_gif"); return;
  }
  sizex=image->sx; sizey=image->sy;
  saved=0;
}

/* solid line */
void obj_line(objparm *pm)
{
  scale(pm->pd,pm->p,2);
  gdImageLine(image,pm->p[0],pm->p[1],pm->p[2],pm->p[3],pm->color[0]);
  if (tikz_file)
    fprintf(tikz_file, "\\draw\[%s] (%i, %i) -- (%i, %i);\n",
      tikz_options(pm->color[0],pm->fill),pm->p[0],flip(pm->p[1]),pm->p[2],flip(pm->p[3]));
  if(vimg_enable) vimg_line(scale_buf[0],scale_buf[1],scale_buf[2],scale_buf[3]);
}

void _obj_arrow(objparm *pm, int twoside)
{
  int l,xx,yy;
  gdPoint ii[3];
  double dx,dy,length,dd[6];
  scale(pm->pd,pm->p,2);
  xx=ii[0].x=pm->p[2];yy=ii[0].y=pm->p[3];
  l=pm->pd[4];if(l<0) l=0; if(l>200) l=200;
  scale2(pm->pd[0]-pm->pd[2],pm->pd[1]-pm->pd[3],&dx,&dy);
  length=sqrt(dx*dx+dy*dy);
  if(length<3 || l<5) goto stem;
  dd[0]=l*dx/length; dd[1]=l*dy/length;
  #define fat 0.27
  dd[2]=dd[0]+dd[1]*fat; dd[3]=dd[1]-dd[0]*fat;
  dd[4]=dd[0]-dd[1]*fat; dd[5]=dd[1]+dd[0]*fat;
  ii[1].x=rint(dd[2])+ii[0].x; ii[1].y=rint(dd[3])+ii[0].y;
  ii[2].x=rint(dd[4])+ii[0].x; ii[2].y=rint(dd[5])+ii[0].y;
  gdImageFilledPolygon(image, ii,3,pm->color[0]);
  if(tikz_file)
    fprintf(tikz_file, "\\draw\[%s] (%i, %i) -- (%i, %i) -- (%i, %i) -- cycle;\n",
      tikz_options(pm->color[0],1),ii[0].x,flip(ii[0].y),ii[1].x,flip(ii[1].y),ii[2].x,flip(ii[2].y));
  if(vimg_enable) vimg_polyline(scale_buf,3,1);
  xx=rint(dd[0])+ii[0].x;yy=rint(dd[1])+ii[0].y;
  if(twoside) {
    ii[0].x=pm->p[0]; ii[0].y=pm->p[1];
    ii[1].x=-rint(dd[2])+ii[0].x; ii[1].y=-rint(dd[3])+ii[0].y;
    ii[2].x=-rint(dd[4])+ii[0].x; ii[2].y=-rint(dd[5])+ii[0].y;
    gdImageFilledPolygon(image, ii,3,pm->color[0]);
  if(tikz_file)
    fprintf(tikz_file, "\\draw\[%s] (%i, %i) -- (%i, %i) -- (%i, %i) -- cycle;\n",
      tikz_options(pm->color[0],1),ii[0].x,flip(ii[0].y),ii[1].x,flip(ii[1].y),ii[2].x,flip(ii[2].y));
  }
  stem: if(pm->fill)
    myDashedLine(image,pm->p[0],pm->p[1],xx,yy,pm->color[0]);
  else
    gdImageLine(image,pm->p[0],pm->p[1],xx,yy,pm->color[0]);
  if(tikz_file)
    fprintf(tikz_file, "\\draw\[%s] (%i, %i) -- (%i, %i);\n",
      tikz_options(pm->color[0],pm->fill),pm->p[0],flip(pm->p[1]),xx,flip(yy));
  if(vimg_enable) vimg_line(scale_buf[0],scale_buf[1],scale_buf[2],scale_buf[3]);
}

/* Arrow */
void obj_arrow(objparm *pm)
{
  _obj_arrow(pm,0);
}

/* 2-sided arrow */
void obj_arrow2(objparm *pm)
{
   _obj_arrow(pm,1);
}

/* horizontal line */
void obj_hline(objparm *pm)
{
  scale(pm->pd,pm->p,1);
  if(pm->fill)
    myDashedLine(image,0,pm->p[1],sizex,pm->p[1],pm->color[0]);
  else
    gdImageLine(image,0,pm->p[1],sizex,pm->p[1],pm->color[0]);
  if (tikz_file)
    fprintf(tikz_file, "\\draw\[%s] (%i, %i) -- (%i, %i);\n",
      tikz_options(pm->color[0],pm->fill),0,flip(pm->p[1]),sizex,flip(pm->p[1]));
}

/* tikzfile */
void obj_tikzfile(objparm *pm)
{
  char *p;
  if(tikz_file){
    fprintf(tikz_file,"\\end{tikzpicture}\n");
    fclose(tikz_file);
  }
  p=find_word_start(pm->str); *find_word_end(p)=0;
  snprintf(tikzfilename,sizeof(tikzfilename),"%s",p);
  tikz_file=fopen(tikzfilename,"w");
  if(!tikz_file)
    fly_error("tikz_nopen");
  fprintf(tikz_file,"\\begin{tikzpicture}\[scale=0.01]\n");
}

/* vertical line */
void obj_vline(objparm *pm)
{
  scale(pm->pd,pm->p,1);
  if(pm->fill)
    myDashedLine(image,pm->p[0],0,pm->p[0],sizey,pm->color[0]);
  else
    gdImageLine(image,pm->p[0],0,pm->p[0],sizey,pm->color[0]);
  if (tikz_file)
    fprintf(tikz_file, "\\draw\[%s] (%i, %i) -- (%i, %i);\n",
      tikz_options(pm->color[0],pm->fill),pm->p[0],0,pm->p[0],sizey);
}

/* dashed line */
void obj_dline(objparm *pm)
{
  scale(pm->pd,pm->p,2);
  myDashedLine(image,pm->p[0],pm->p[1],pm->p[2],pm->p[3], pm->color[0]);
  if (tikz_file)
    fprintf(tikz_file, "\\draw\[%s] (%i, %i) -- (%i, %i);\n",
      tikz_options(pm->color[0],-1),
      pm->p[0],flip(pm->p[1]),pm->p[2],flip(pm->p[3]));
}

/* parallel lines.
 * x1,y1,x2,y2,xv,yv,n,color */
void obj_parallel(objparm *pm)
{
  int i, n, xi,yi;
  double xv,yv;
  n=pm->pd[6]; if(n<0) return; if(n>256) n=256;
  scale(pm->pd,pm->p,3);
  scale2(pm->pd[4],pm->pd[5],&xv,&yv);
  for(i=0;i<n;i++) {
    xi=rint(i*xv); yi=rint(i*yv);
    gdImageLine(image,pm->p[0]+xi,pm->p[1]+yi,pm->p[2]+xi,pm->p[3]+yi,
              pm->color[0]);
    if (tikz_file)
      fprintf(tikz_file, "\\draw\[%s] (%i, %i) -- (%i, %i);\n",
        tikz_options(pm->color[0],pm->fill),
        pm->p[0]+xi,flip(pm->p[1]+yi),pm->p[2]+xi,flip(pm->p[3]+yi));
    if(vimg_enable) vimg_line(scale_buf[0]+i*(scale_buf[4]-transx),
        scale_buf[1]+i*(scale_buf[5]-transy),
        scale_buf[2]+i*(scale_buf[4]-transx),
        scale_buf[3]+i*(scale_buf[5]-transy));
  }
}

/* rectangle */
void obj_rect(objparm *pm)
{
  int x1,y1,x2,y2;
  scale(pm->pd,pm->p,2);
  x1=min(pm->p[0],pm->p[2]); x2=max(pm->p[0],pm->p[2]);
  y1=min(pm->p[1],pm->p[3]); y2=max(pm->p[1],pm->p[3]);
  if(pm->fill)
    gdImageFilledRectangle(image,x1,y1,x2,y2,pm->color[0]);
  else
    gdImageRectangle(image,x1,y1,x2,y2,pm->color[0]);
  if(tikz_file)
    fprintf(tikz_file,
      "\\draw\[%s] (%i,%i) rectangle (%i,%i);\n",
      tikz_options(pm->color[0],pm->fill),x1,flip(y1),x2,flip(y2));
  if(vimg_enable) vimg_rect(scale_buf[0],scale_buf[1],scale_buf[2],scale_buf[3]);
}

/* square */
void obj_square(objparm *pm)
{
  int w,h;
  scale(pm->pd,pm->p,1);
  w=rint(pm->pd[2]); h=rint(pm->pd[2]);
  if(pm->fill)
    gdImageFilledRectangle(image,pm->p[0],pm->p[1],
               pm->p[0]+w,pm->p[1]+h,pm->color[0]);
  else
    gdImageRectangle(image,pm->p[0],pm->p[1],
               pm->p[0]+w,pm->p[1]+h,pm->color[0]);
  if(tikz_file){
    fprintf(tikz_file,
      "\\draw\[%s] (%i,%i) rectangle (%i,%i);\n",
      tikz_options(pm->color[0],pm->fill),pm->p[0],flip(pm->p[1]),
      pm->p[0]+w,flip(pm->p[1]+h));
  }
  if(vimg_enable) vimg_rect(scale_buf[0],scale_buf[1],
                      scale_buf[0]+pm->pd[2],scale_buf[1]+pm->pd[2]);
}

/* triangle */
void obj_triangle(objparm *pm)
{
  scale(pm->pd,pm->p,3);
  if(pm->fill)
    gdImageFilledPolygon(image,(gdPointPtr) pm->p,3,pm->color[0]);
  else
    gdImagePolygon(image,(gdPointPtr) pm->p,3,pm->color[0]);
  if (tikz_file)
    fprintf(tikz_file, "\\draw\[%s] (%i, %i) -- (%i, %i) -- (%i, %i) -- cycle;\n",
      tikz_options(pm->color[0],pm->fill),pm->p[0],flip(pm->p[1]),pm->p[2],flip(pm->p[3]),pm->p[4],flip(pm->p[5]));
  if(vimg_enable) vimg_polyline(scale_buf,3,1);
}

/* polygon */
void obj_poly(objparm *pm)
{
  int cnt,i;
  cnt=(pm->pcnt)/2;
  scale(pm->pd,pm->p,cnt);
  if(pm->fill)
    gdImageFilledPolygon(image,(gdPointPtr) pm->p,cnt,pm->color[0]);
  else
    gdImagePolygon(image,(gdPointPtr) pm->p,cnt,pm->color[0]);
  if(tikz_file){
    fprintf(tikz_file,"\\draw\[%s] (%i,%i) --",tikz_options(pm->color[0],pm->fill),pm->p[0],flip(pm->p[1]));
    for (i= 1; i<cnt; i++)
        fprintf(tikz_file,"(%i,%i)--", pm->p[2*i],flip(pm->p[2*i+1]));
    fprintf(tikz_file," cycle;\n");
  }
  if(vimg_enable) vimg_polyline(scale_buf,cnt,1);
}

/* rays */
void obj_rays(objparm *pm)
{
  int i, n;
  n=(pm->pcnt)/2;
  scale(pm->pd,pm->p,n);
  for(i=2;i<2*n;i+=2) {
    gdImageLine(image,pm->p[0],pm->p[1],pm->p[i],pm->p[i+1],pm->color[0]);
    if (tikz_file)
      fprintf(tikz_file, "\\draw\[%s] (%i, %i) -- (%i, %i);\n",
        tikz_options(pm->color[0],pm->fill),pm->p[0],flip(pm->p[1]),pm->p[i],flip(pm->p[i+1]));
    if(vimg_enable) vimg_line(scale_buf[0],scale_buf[1],
                        scale_buf[i],scale_buf[i+1]);
  }
}
/* crosshair */
void obj_crosshair(objparm *pm)
{
  scale(pm->pd,pm->p,2);
  gdImageLine(image,pm->p[0]+width2,pm->p[1]+width2,pm->p[0]-width2,pm->p[1]-width2,pm->color[0]);
  gdImageLine(image,pm->p[0]-width2,pm->p[1]+width2,pm->p[0]+width2,pm->p[1]-width2,pm->color[0]);
  if (tikz_file){
    fprintf(tikz_file, "\\draw\[%s] (%i, %i) -- (%i, %i);\n",
      tikz_options(pm->color[0],pm->fill),pm->p[0]+width2,flip(pm->p[1]+width2),pm->p[0]-width2,flip(pm->p[1]-width2));
    fprintf(tikz_file, "\\draw\[%s] (%i, %i) -- (%i, %i);\n",
      tikz_options(pm->color[0],pm->fill),pm->p[0]-width2,flip(pm->p[1]+width2),pm->p[0]+width2,flip(pm->p[1]-width2));
  }
}
/* crosshairs */

void obj_crosshairs(objparm *pm)
{
  int i, n;
  n=(pm->pcnt)/2;
  scale(pm->pd,pm->p,n);
  for(i=0;i<2*n;i+=2) {
    gdImageLine(image,pm->p[i]+width2,pm->p[i+1]+width2,pm->p[i]-width2,pm->p[i+1]-width2,pm->color[0]);
    gdImageLine(image,pm->p[i]-width2,pm->p[i+1]+width2,pm->p[i]+width2,pm->p[i+1]-width2,pm->color[0]);
    if (tikz_file){
      fprintf(tikz_file, "\\draw\[%s] (%i, %i) -- (%i, %i);\n",
        tikz_options(pm->color[0],pm->fill),pm->p[i]+width2,flip(pm->p[i+1]+width2),pm->p[i]-width2,flip(pm->p[i+1]-width2));
      fprintf(tikz_file, "\\draw\[%s] (%i, %i) -- (%i, %i);\n",
        tikz_options(pm->color[0],pm->fill),pm->p[i]-width2,flip(pm->p[i+1]+width2),pm->p[i]+width2,flip(pm->p[i+1]-width2));
    }
  }
}


/* segments */
void obj_lines(objparm *pm)
{
  int i, n;
  n=(pm->pcnt)/2;
  scale(pm->pd,pm->p,n);
  for(i=2;i<2*n;i+=2){
    gdImageLine(image,pm->p[i-2],pm->p[i-1],pm->p[i],pm->p[i+1],pm->color[0]);
    if (tikz_file){
      fprintf(tikz_file, "\\draw\[%s] (%i, %i) -- (%i, %i);\n",
        tikz_options(pm->color[0],pm->fill),pm->p[i-2],flip(pm->p[i-1]),pm->p[i],flip(pm->p[i+1]));
    }
    if(vimg_enable) vimg_polyline(scale_buf,n,0);
  }
}
/*segments from x1,y1 to x2,y2, x3,y3 to x4,y4, etc */
void obj_segments(objparm *pm)
{
  int i, n;
  n=(pm->pcnt)/4;
  scale(pm->pd,pm->p,2*n);
  for(i=0;i<4*n;i+=4){
    gdImageLine(image,pm->p[i],pm->p[i+1],pm->p[i+2],pm->p[i+3],pm->color[0]);
    if (tikz_file){
      fprintf(tikz_file, "\\draw\[%s] (%i, %i) -- (%i, %i);\n",
        tikz_options(pm->color[0],pm->fill),pm->p[i],flip(pm->p[i+1]),pm->p[i+2],flip(pm->p[i+3]));
    }
  }
}
/* segments */
void obj_dlines(objparm *pm)
{
  int i, n;
  n=(pm->pcnt)/2;
  scale(pm->pd,pm->p,n);
  for(i=2;i<2*n;i+=2)
    myDashedLine(image,pm->p[i-2],pm->p[i-1],pm->p[i],pm->p[i+1],pm->color[0]);
    if (tikz_file){
      fprintf(tikz_file, "\\draw\[%s] (%i, %i) -- (%i, %i);\n",
        tikz_options(pm->color[0],pm->fill),pm->p[i-2],flip(pm->p[i-1]),pm->p[i],flip(pm->p[i+1]));
    }
  if(vimg_enable) vimg_polyline(scale_buf,n,0);
}

/* points */
void obj_points(objparm *pm)
{
  int i, n;
  n=(pm->pcnt)/2;
  scale(pm->pd,pm->p,n);
  for(i=0;i<2*n;i+=2){
    gdImageSetPixel(image,pm->p[i],pm->p[i+1],pm->color[0]);
    if(tikz_file) fprintf(tikz_file, "\\draw\[%s] (%i, %i) circle (0pt);\n",
      tikz_options(pm->color[0],pm->fill),pm->p[i],flip(pm->p[i+1]));
  }
}

/* lattice.
 * x0,y0,xv1,yv1,xv2,yv2,n1,n2,color */
void obj_lattice(objparm *pm)
{
  int n1,n2,i1,i2,xi1,yi1,xi2,yi2;
  double xv1,xv2,yv1,yv2;
  n1=pm->pd[6];n2=pm->pd[7]; if(n1<0 || n2<0) return;
  if(n1>256) n1=256;
  if(n2>256) n2=256;
  scale(pm->pd,pm->p,1);
  scale2(pm->pd[2],pm->pd[3],&xv1,&yv1);
  scale2(pm->pd[4],pm->pd[5],&xv2,&yv2);
  for(i1=0;i1<n1;i1++) {
    xi1=rint(i1*xv1)+pm->p[0]; yi1=rint(i1*yv1)+pm->p[1];
    for(i2=0;i2<n2;i2++) {
      xi2=i2*xv2+xi1;yi2=i2*yv2+yi1;
      gdImageSetPixel(image,xi2,yi2,pm->color[0]);
      if(tikz_file) fprintf(tikz_file,"\\draw[%s] (%i,%i) circle (0pt);\n",
        tikz_options(pm->color[0],0),xi2,flip(yi2));
    }
  }
}

/* arc */
void obj_arc(objparm *pm)
{
  scale(pm->pd,pm->p,1);
  pm->p[2]=rint(pm->pd[2]*xscale); pm->p[3]=rint(pm->pd[3]*yscale);
  gdImageArc(image,pm->p[0],pm->p[1],pm->p[2],pm->p[3],
           pm->pd[4],pm->pd[5],pm->color[0]);
  if(tikz_file) {
      fprintf(tikz_file,
    "\\draw\[%s, domain=%f:%f] plot ({%i+%f*cos(\\x)}, {%i+%f*sin(\\x)});\n",
    tikz_options(pm->color[0],pm->fill),
      pm->pd[4],pm->pd[5],pm->p[0],pm->p[2]*0.5,flip(pm->p[1]),pm->p[3]*(-0.5));
  }
  /*FIXME echelle mauvaise*/
  if(vimg_enable) vimg_arc(scale_buf[0],scale_buf[1],
                     0.5*pm->pd[2],0.5*pm->pd[3],pm->pd[4],pm->pd[5]);
}

void obj_angle(objparm *pm)
{
  const double DEG=M_PI/180;
  double dpts[6];
  int pts[6], wx=rint(2*pm->pd[2]*xscale), wy=rint(2*pm->pd[2]*yscale);
  dpts[0]=pm->pd[0];
  dpts[1]=pm->pd[1];
  dpts[2]=pm->pd[0]+pm->pd[2]*cos(DEG*pm->pd[3]);
  dpts[3]=pm->pd[1]+pm->pd[2]*sin(DEG*pm->pd[3]);
  dpts[4]=pm->pd[0]+pm->pd[2]*cos(DEG*pm->pd[4]);
  dpts[5]=pm->pd[1]+pm->pd[2]*sin(DEG*pm->pd[4]);
  scale(dpts, pts, 3);
  gdImageLine(image,pts[0],pts[1],pts[2],pts[3],pm->color[0]);
  gdImageLine(image,pts[0],pts[1],pts[4],pts[5],pm->color[0]);
  gdImageArc(image,pts[0],pts[1],wx,wy,pm->pd[3],pm->pd[4],pm->color[0]);
  if(tikz_file) {
    fprintf(tikz_file, "\\draw\[%s, domain=%f:%f] plot ({%i+%f*cos(\\x)}, {%i+%f*sin(\\x)});\n",
      tikz_options(pm->color[0],pm->fill),pm->pd[3],pm->pd[4],pts[0],wx*0.5,flip(pts[1]),wy*(-0.5));
    fprintf(tikz_file, "\\draw\[%s] (%i, %i) -- (%i, %i);\n",
        tikz_options(pm->color[0],pm->fill),pts[0],flip(pts[1]),pts[2],flip(pts[3]));
    fprintf(tikz_file, "\\draw\[%s] (%i, %i) -- (%i, %i);\n",
        tikz_options(pm->color[0],pm->fill),pts[0],flip(pts[1]),pts[4],flip(pts[5]));
  }
}
/* Ellipse: centre 0,1, width 2, hight 3, color 4,5,6 */
void obj_ellipse(objparm *pm)
{
  scale(pm->pd,pm->p,1);
  pm->p[2]=pm->pd[2]*xscale; pm->p[3]=pm->pd[3]*yscale;
  if(pm->fill) {
    gdImageArc(image,pm->p[0],pm->p[1],pm->p[2],pm->p[3],0,360,
             color_bounder);
    patchgdImageFillToBorder(image,pm->p[0],pm->p[1],
                    color_bounder,pm->color[0]);
  }
  gdImageArc(image,pm->p[0],pm->p[1],rint(pm->p[2]),rint(pm->p[3]),0,360,pm->color[0]);
  if(tikz_file) fprintf(tikz_file,"\\draw\[%s] (%i,%i) ellipse (%i and %i);\n\n",
    tikz_options(pm->color[0],pm->fill),pm->p[0],flip(pm->p[1]),(int) rint(0.5*pm->p[2]),(int) rint(0.5*pm->p[2]));
  if(vimg_enable) vimg_ellipse(scale_buf[0],scale_buf[1],0.5*pm->pd[2],0.5*pm->pd[3]);
}

/* Circle radius in pixels*/
void obj_circle(objparm *pm)
{
  scale(pm->pd,pm->p,1);
  pm->p[2]=rint(pm->pd[2]); pm->p[3]=rint(pm->pd[2]);
  if(pm->fill) {
    gdImageArc(image,pm->p[0],pm->p[1],pm->p[2],pm->p[3],0,360,
             color_bounder);
    patchgdImageFillToBorder(image,pm->p[0],pm->p[1],
                    color_bounder,pm->color[0]);
  }
  gdImageArc(image,pm->p[0],pm->p[1],pm->p[2],pm->p[3],0,360,pm->color[0]);
  if(tikz_file) fprintf(tikz_file, "\\draw\[%s] (%i, %i) circle (%i);\n",
      tikz_options(pm->color[0],pm->fill),pm->p[0],flip(pm->p[1]),(int) rint(pm->pd[2]/2.));
}
/* Circle, radius in xrange */
void obj_circles(objparm *pm)
{
  int i, n;
  n=(pm->pcnt)/3;
  for (i=0; i<n; ++i) scale(pm->pd+3*i, pm->p+3*i, 1);
  for(i=0;i<3*n;i+=3){
    gdImageArc(image,pm->p[i],pm->p[i+1],
      rint(2*pm->pd[i+2]*xscale),rint(2*pm->pd[i+2]*xscale),0,360,pm->color[0]);
    if (tikz_file){
      fprintf(tikz_file, "\\draw\[%s] (%i, %i) circle (%i and %i);\n",
        tikz_options(pm->color[0],pm->fill),pm->p[i],flip(pm->p[i+1]),(int) rint(pm->pd[i+2]*xscale),(int) rint(pm->pd[i+2]*yscale));
    }
  }
}
/* ellipse, width in xrange,height in yrange */
void obj_ellipses(objparm *pm)
{
  int i, n;
  n=(pm->pcnt)/4;
  for (i=0; i<n; ++i) scale(pm->pd+4*i, pm->p+4*i, 1);
  for(i=0;i<4*n;i+=4){
    gdImageArc(image,pm->p[i],pm->p[i+1],rint(pm->pd[i+2]*xscale),rint(pm->pd[i+3]*yscale),0,360,pm->color[0]);
    if (tikz_file){
      fprintf(tikz_file, "\\draw\[%s] (%i, %i) circle (%i and %i);\n",
        tikz_options(pm->color[0],pm->fill),pm->p[i],flip(pm->p[i+1]),(int) rint(pm->pd[i+2]*xscale/2),(int) rint(pm->pd[i+3]*yscale/2));
    }
  }
}
typedef enum tikz_fill_options {grille, points, hatch, dhatch} tfo;
int compar(const void *a, const void *b) {return *(int *)b - *(int *)a;}

static void tikz_fill(int x, int y, int nx, int ny, int wall, int the_color, tfo opt)
{
  char *to = tikz_options(the_color,1);
  int numpix=sizex*sizey, top = 0, a, c, cy, lx=0, rx=0, seed, nt,ct=0;
  int *stack = xmalloc(numpix*sizeof(int));
  int *stack2 = xmalloc(numpix*sizeof(int));
  if (nx==0) nx=1; if (ny==0) ny=1; nt = abs(nx*ny);
  seed = gdImageGetPixel(image,x,y);
  char *check = xmalloc(numpix);
  while (numpix--) check[numpix]=0;
  a=x+y*sizex;
  check[a]=1;
  stack[top++]=a;
  while(top)
    {
      a = stack[--top];
      x = a%sizex; y = a/sizex;
      c = gdImageGetPixel(image,x,y);
      if ((wall && (c == wall))||(!wall && c!=seed))
        continue;
      if (x>0 && !check[a-1]) {check[a-1]=1; stack[top++]=a-1;}
      if (x+1<sizex && !check[a+1]) {check[a+1]=1; stack[top++]=a+1;}
      if (y>0 && !check[a-sizex]) {check[a-sizex]=1; stack[top++]=a-sizex;}
      if (y+1<sizey && !check[a+sizex]) {check[a+sizex]=1; stack[top++]=a+sizex;}
      switch(opt)
  {
  case grille: if(((x%nx)!=(nx/2))&&((y%ny)!=(ny/2))) continue; break;
  case points: if(x%nx!=nx/2||y%ny!=ny/2) continue; break;
  case hatch: if(abs((ny*x-nx*y)%nt)!=nt/2) continue; break;
  case dhatch: if((ny*x+nx*y)%nt!=nt/2 && abs((ny*x-nx*y)%nt)!=nt/2) continue; break;
  default: break;
  }
      stack2[ct++]=a;
    }
  free(stack);
  free(check);
  if (ct==0) return;
  qsort(stack2, ct, sizeof(int), compar);
  cy=-1;
  while (ct--)
    {
      a = stack2[ct];
      x = a%sizex; y = a/sizex;
      if (y != cy || x != rx+1)
      {
  if (cy >= 0)
    fprintf(tikz_file,
      "\\draw\[%s] (%.2f,%.2f) rectangle (%.2f,%.2f);\n",
      to, lx-0.0,flip(cy-0.0),rx+0.0,flip(cy+0.0));
  cy = y;
  lx = rx = x;
      }
      else
  rx++;
    }
  fprintf(tikz_file,
    "\\draw\[%s] (%.2f,%.2f) rectangle (%.2f,%.2f);\n",
    to, lx-0.0,flip(cy-0.0),rx+0.0,flip(cy+0.0));
  free(stack2);
}

/* flood fill */
void obj_fill(objparm *pm)
{
  scale(pm->pd,pm->p,1);
  if (tikz_file) tikz_fill(pm->p[0],pm->p[1],1,1,0,pm->color[0],grille);
  patchgdImageFill(image,pm->p[0],pm->p[1],pm->color[0]);
}

/* flood fill to border*/
void obj_fillb(objparm *pm)
{
  scale(pm->pd,pm->p,1);
  if (tikz_file) tikz_fill(pm->p[0],pm->p[1],1,1,pm->color[0],pm->color[1],grille);
  patchgdImageFillToBorder(image,pm->p[0],pm->p[1],pm->color[0],pm->color[1]);
}

gdImagePtr himg;

int makehatchimage(int x, int y, int px, int py, int col)
{
  int c1,c2,r,g,b;
  gdImagePtr saveimg;
  himg=gdImageCreate(x,y);
  c1=gdImageGetPixel(image,px,py);
  r=gdImageRed(image,c1); g=gdImageGreen(image,c1); b=gdImageBlue(image,c1);
  if(r>=255) r--; else r++; if(g>=255) g--; else g++; if(b>=255) b--; else b++;
  c1=gdImageColorAllocate(himg,r,g,b);
  r=gdImageRed(image,col); g=gdImageGreen(image,col); b=gdImageBlue(image,col);
  c2=gdImageColorAllocate(himg,r,g,b);
  if(width>1) {
    savew=-1; saveimg=image;
    image=himg; c2=widthcolor(width,c2); image=saveimg;
    c2=gdBrushed; savew=-1;
  }
  return c2;
}

/* flood fill with hatching */
void obj_hatchfill(objparm *pm)
{
  int nx,ny,ax,ay, dir, c;
  scale(pm->pd,pm->p,1);
  nx=pm->pd[2]; ny=pm->pd[3]; ax=abs(nx); ay=abs(ny);
  if(nx==0 && ny==0) {fly_error("bad displacement vector"); return;}
  if((nx>0 && ny>0) || (nx<0 && ny<0)) dir=1; else dir=-1;
  if(ax==0) {ax=100; dir=2;}
  if(ay==0) {ay=100; dir=3;}
  c=makehatchimage(ax,ay,pm->p[0],pm->p[1],pm->color[0]);
  switch(dir) {
    case -1: {
      gdImageLine(himg,0,ay-1,ax-1,0,c);
      if(width>1) {
        gdImageLine(himg,-ax,ay-1,-1,0,c);
        gdImageLine(himg,ax,ay-1,2*ax-1,0,c);
        gdImageLine(himg,0,-1,ax-1,-ay,c);
        gdImageLine(himg,0,2*ay-1,ax-1,ay,c);
      }
      break;
    }
    case 1: {
      gdImageLine(himg,0,0,ax-1,ay-1,c);
      if(width>1) {
        gdImageLine(himg,-ax,0,-1,ay-1,c);
        gdImageLine(himg,ax,0,2*ax-1,ay-1,c);
        gdImageLine(himg,0,-ay,ax-1,-1,c);
        gdImageLine(himg,0,ay,ax-1,2*ay-1,c);
      }
      break;
    }
    case 2: gdImageLine(himg,0,ay/2,ax-1,ay/2,c); break;
    case 3: gdImageLine(himg,ax/2,0,ax/2,ay-1,c); break;
  }
  if (tikz_file) tikz_fill(pm->p[0],pm->p[1],nx,ny,0,pm->color[0],hatch);
  gdImageSetTile(image,himg);
  patchgdImageFill(image,pm->p[0],pm->p[1],gdTiled);
  gdImageDestroy(himg);
  if(tiled) gdImageSetTile(image,tileimg);
}

/* flood fill with grid */
void obj_gridfill(objparm *pm)
{
  int nx,ny, c;
  scale(pm->pd,pm->p,1);
  nx=pm->pd[2]; ny=pm->pd[3]; nx=abs(nx); ny=abs(ny);
  if(nx==0 && ny==0) {fly_error("bad grid size"); return;}
  c=makehatchimage(nx,ny,pm->p[0],pm->p[1],pm->color[0]);
  if (tikz_file) tikz_fill(pm->p[0],pm->p[1],nx,ny,0,pm->color[0],grille);
  gdImageLine(himg,0,ny/2,nx-1,ny/2,c); gdImageLine(himg,nx/2,0,nx/2,ny-1,c);
  gdImageSetTile(image,himg);
  patchgdImageFill(image,pm->p[0],pm->p[1],gdTiled);
  gdImageDestroy(himg);
  if(tiled) gdImageSetTile(image,tileimg);
}

/* flood fill with double hatching */
void obj_diafill(objparm *pm)
{
  int nx,ny, c;
  scale(pm->pd,pm->p,1);
  nx=pm->pd[2]; ny=pm->pd[3]; nx=abs(nx); ny=abs(ny);
  if(nx==0 && ny==0) {fly_error("bad grid size"); return;}
  c=makehatchimage(nx,ny,pm->p[0],pm->p[1],pm->color[0]);
  if (tikz_file) tikz_fill(pm->p[0],pm->p[1],nx,ny,0,pm->color[0],dhatch);
  gdImageLine(himg,0,0,nx-1,ny-1,c); gdImageLine(himg,0,ny-1,nx-1,0,c);
  gdImageSetTile(image,himg);
  patchgdImageFill(image,pm->p[0],pm->p[1],gdTiled);
  gdImageDestroy(himg);
  if(tiled) gdImageSetTile(image,tileimg);
}

/* flood fill with dots */
void obj_dotfill(objparm *pm)
{
  int nx,ny, c;
  scale(pm->pd,pm->p,1);
  nx=pm->pd[2]; ny=pm->pd[3]; nx=abs(nx); ny=abs(ny);
  if(nx==0 && ny==0) {fly_error("bad grid size"); return;}
  c=makehatchimage(nx,ny,pm->p[0],pm->p[1],pm->color[0]);
  if (tikz_file) tikz_fill(pm->p[0],pm->p[1],nx,ny,0,pm->color[0],points);
  gdImageSetPixel(himg,nx/2,ny/2,c);
  gdImageSetTile(image,himg);
  patchgdImageFill(image,pm->p[0],pm->p[1],gdTiled);
  gdImageDestroy(himg);
  if(tiled) gdImageSetTile(image,tileimg);
}

struct {
  char *name;
  gdFontPtr *fpt;
} fonttab[]={
  {"tiny",      &gdFontTiny},
  {"small",      &gdFontSmall},
  {"medium",&gdFontMediumBold},
  {"large",      &gdFontLarge},
  {"giant",      &gdFontGiant},
  {"huge",      &gdFontGiant}
};

#define fonttab_no (sizeof(fonttab)/sizeof(fonttab[0]))

/* string */
void obj_string(objparm *pm)
{
  char *pp, *pe, *p2;
  int i;
  pp=pm->str; pe=strchr(pp,','); if(pe==NULL) {
    fly_error("too_few_parms"); return;
  }
  *pe++=0; pp=find_word_start(pp); *find_word_end(pp)=0;
  pe=find_word_start(pe); strip_trailing_spaces(pe);
  if(*pp) {
    for(i=0;i<fonttab_no && strcmp(pp,fonttab[i].name)!=0; i++);
    if(i>=fonttab_no) i=1;
  }
  else i=1;
  scale(pm->pd,pm->p,1);
  if(*pe=='"') {
    p2=strchr(pe+1,'"');
    if(p2 && *(p2+1)==0) {*p2=0; pe++;}
  }
  if(pm->fill){
    gdImageStringUp(image,*(fonttab[i].fpt),pm->p[0],pm->p[1], (unsigned char*) pe,
        pm->color[0]);
    if(tikz_file) fprintf(tikz_file,"\\draw (%i,%i) node[font=\\%s,rotate=90,color=%s,anchor=north west,inner sep=0pt] {%s};\n",
      pm->p[0],flip(pm->p[1]),fonttab[i].name,tikz_color(pm->color[0]),(unsigned char*) pe);
  }
  else {
    gdImageString(image,*(fonttab[i].fpt),pm->p[0],pm->p[1], (unsigned char*) pe,
        pm->color[0]);
    if(tikz_file) fprintf(tikz_file,"\\draw (%i,%i) node[font=\\%s,color=%s,anchor=north west,inner sep=0pt] {%s};\n",
      pm->p[0],flip(pm->p[1]),fonttab[i].name,tikz_color(pm->color[0]),(unsigned char*) pe);
  }
}
/*FIXME; giant does not exist in tikz and ... samething as huge */
/* point */
void obj_point(objparm *pm)
{
  scale(pm->pd,pm->p,1);
  gdImageSetPixel(image,pm->p[0],pm->p[1],pm->color[0]);
  if(tikz_file) fprintf(tikz_file,"\\draw[%s] (%i,%i) circle (0pt);\n",
    tikz_options(pm->color[0],0),pm->p[0],flip(pm->p[1]));
}

/* copy an image file */
void obj_copy(objparm *pm)
{
  char *pp;
  FILE *inf;
  gdImagePtr insimg;

  pp=find_word_start(pm->str);*find_word_end(pp)=0;
  inf=open4read(pp);
  if(inf==NULL) {
    fly_error("file_does_not_exist"); return;
  }
  insimg=gdImageCreateFromGif(inf); fclose(inf);
  if(insimg==NULL) {
    fly_error("bad_gif"); return;
  }
  scale(pm->pd,pm->p,1);
  if(pm->pd[2]<0 && pm->pd[3]<0 && pm->pd[4]<0 && pm->pd[5]<0)
    gdImageCopy(image,insimg,pm->p[0],pm->p[1],0,0,
            insimg->sx,insimg->sy);
  else
    gdImageCopy(image,insimg,pm->p[0],pm->p[1],pm->pd[2],pm->pd[3],
            pm->pd[4]-pm->pd[2],pm->pd[5]-pm->pd[3]);
  if(tikz_file) fprintf(tikz_file,
    "\\node[anchor=north west,inner sep=0pt] at (%i,%i) {\\includegraphics\[width=.05\\linewidth]{%s}};\n",
      pm->p[0],flip(pm->p[1]),pm->str);
    gdImageDestroy(insimg);
/*FIXME position non correcte; on ne peut pas utiliser une image gif */
}

/* copy an image file, with resizing */
void obj_copyresize(objparm *pm)
{
  char *pp;
  FILE *inf;
  gdImagePtr insimg;

  pp=find_word_start(pm->str);*find_word_end(pp)=0;
  inf=open4read(pp);
  if(inf==NULL) {
    fly_error("file_not_found"); return;
  }
  insimg=gdImageCreateFromGif(inf); fclose(inf);
  if(insimg==NULL) {
    fly_error("bad_gif"); return;
  }
  scale(pm->pd+4,pm->p+4,2);
  if(pm->pd[0]<0 && pm->pd[1]<0 && pm->pd[2]<0 && pm->pd[3]<0)
    gdImageCopyResized(image,insimg,pm->p[4],pm->p[5],0,0,
                 pm->p[6]-pm->p[4]+1,pm->p[7]-pm->p[5]+1,
                 insimg->sx,insimg->sy);
  else
    gdImageCopyResized(image,insimg,pm->p[4],pm->p[5],pm->pd[0],pm->pd[1],
                 pm->p[6]-pm->p[4]+1,pm->p[7]-pm->p[5]+1,
                 pm->pd[2]-pm->pd[0]+1,pm->pd[3]-pm->pd[1]+1);
  gdImageDestroy(insimg);
}

/* set brush or tile */
void obj_setbrush(objparm *pm)
{
  char *pp;
  FILE *inf;
  gdImagePtr insimg;

  pp=find_word_start(pm->str); *find_word_end(pp)=0;
  inf=open4read(pp); if(inf==NULL) {
    fly_error("file_not_found"); return;
  }
  insimg=gdImageCreateFromGif(inf); fclose(inf);
  if(insimg==NULL) {
    fly_error("bad_gif"); return;
  }
  if(pm->fill) {
    gdImageSetTile(image,insimg); tiled=1; tileimg=insimg;
  }
  else {
    gdImageSetBrush(image,insimg);brushed=1; brushimg=insimg;
  }
}

/* kill brush */
void obj_killbrush(objparm *pm)
{
  if(brushimg) gdImageDestroy(brushimg);
  brushed=0; brushimg=NULL;
}

/* kill tile */
void obj_killtile(objparm *pm)
{
  if(tileimg) gdImageDestroy(tileimg);
  tiled=0; tileimg=NULL;
}

/* set style */
void obj_setstyle(objparm *pm)
{
  int i,t;
  t=pm->pcnt/3; if(t<=0) {
    fly_error("too_few_parms"); return;
  }
  for(i=0;i<t;i++) {
    if(pm->pd[3*i]<0 || pm->pd[3*i+1]<0 || pm->pd[3*i+2]<0)
      pm->p[i]=gdTransparent;
    else
      pm->p[i]=getcolor(pm->pd[3*i],pm->pd[3*i+1],pm->pd[3*i+2]);
  }
  gdImageSetStyle(image,pm->p,t); styled=1;
}

/* kill style */
void obj_killstyle(objparm *pm)
{
  styled=0;
}

/* set transparent */
void obj_transp(objparm *pm)
{
  gdImageColorTransparent(image,pm->color[0]);
}

/* set interlace */
void obj_interlace(objparm *pm)
{
  gdImageInterlace(image,1);
}

/* set linewidth */
void obj_linewidth(objparm *pm)
{
  if(pm->pd[0]<1 || pm->pd[0]>255) fly_error("bad_parms");
  width=pm->pd[0];
  if(tikz_file) fprintf(tikz_file,"\\pgfsetlinewidth{%fpt}\n",width*0.7);
}

/* set crosshairsize */
void obj_crosshairsize(objparm *pm)
{
  if(pm->pd[0]<1 || pm->pd[0]>255) fly_error("bad_parms");
  else width2=pm->pd[0];
}

/* set x range */
void obj_xrange(objparm *pm)
{
  double dd;
  dd=pm->pd[1]-pm->pd[0];
  xstart=pm->pd[0]; xscale=sizex/dd;
}

/* set y range */
void obj_yrange(objparm *pm)
{
  double dd;
  dd=pm->pd[1]-pm->pd[0];
  ystart=pm->pd[1]; yscale=-sizey/dd;
}

/* set x et y range */
void obj_range(objparm *pm)
{
  double d1,d2;
  d1=pm->pd[1]-pm->pd[0]; d2=pm->pd[3]-pm->pd[2];
  xstart=pm->pd[0]; xscale=(sizex-1)/d1;
  ystart=pm->pd[3]; yscale=-(sizey-1)/d2;
}

/* set t range */
void obj_trange(objparm *pm)
{
  /*double dd;
  dd=pm->pd[1]-pm->pd[0];*/
  tstart=pm->pd[0]; tend=pm->pd[1];
  tranged=1;
}

/* set tstep (plotting step) */
void obj_tstep(objparm *pm)
{
  int dd;
  dd=pm->pd[0];
  if(dd<3) {
    fly_error("bad_step"); return;
  }
  if(dd>2000) dd=2000;
  tstep=dd;
}

/* set plotjump (plot jump break threashold) */
void obj_plotjump(objparm *pm)
{
  int dd;
  dd=pm->pd[0];
  if(dd<3) dd=3;
  if(dd>MAX_SIZE) dd=MAX_SIZE;
  plotjump=dd;
}

/* plot a curve, either parametric or explicit */
void _obj_plot(objparm *pm,int dash)
{
  int i,j,n,dist,xx,yy,varpos;
  char p1[MAX_LINELEN+1], p2[MAX_LINELEN+1];
  char *varn, *pp;
  double dc[2],t,v;
  int ic[2],oc[2];

  n=itemnum(pm->str);
  if(n<1) {
    fly_error("bad_parms"); return;
  }
  if (tikz_file) fprintf(tikz_file,"\%\%begin plot\n");
  fnd_item(pm->str,1,p1); fnd_item(pm->str,2,p2);
  if(n==1 && !tranged) v=sizex/xscale/tstep;
  else v=(tend-tstart)/tstep;
  if(n==1) varn="x"; else varn="t";
  for(pp=varchr(p1,varn); pp; pp=varchr(pp,varn)) {
    string_modify(p1,pp,pp+strlen(varn),EV_T);
    pp+=strlen(EV_T);
  }
  for(pp=varchr(p2,varn); pp; pp=varchr(pp,varn)) {
    string_modify(p2,pp,pp+strlen(varn),EV_T);
      pp+=strlen(EV_T);
  }
  varpos=eval_getpos(EV_T);
  if(varpos<0) return; /* unknown error */
  evalue_compile(p1); evalue_compile(p2);
  if(vimg_enable) vimg_plotstart();
  for(i=j=0;i<=tstep;i++) {
    if(n==1) {
      if(tranged) t=tstart+i*v; else t=xstart+i*v;
      eval_setval(varpos,t); dc[0]=t; dc[1]=strevalue(p1);
    }
    else {
      t=tstart+i*v; eval_setval(varpos,t);
      dc[0]=strevalue(p1); dc[1]=strevalue(p2);
    }
    if(!isfinite(dc[0]) || !isfinite(dc[1])) ic[0]=ic[1]=-BOUND;
    else scale(dc,ic,1);
    if(vimg_enable) vimg_plot1 (scale_buf[0],scale_buf[1]);
    if(ic[1]<sizey && ic[1]>0){
      if(j==0) {
        gdImageSetPixel(image,ic[0],ic[1],pm->color[0]); j++;
        if (tikz_file)
          fprintf(tikz_file,"\\draw\[%s] (%i,%i) rectangle (%i,%i);\n",
            tikz_options(pm->color[0],1),ic[0],flip(ic[1]),ic[0]+1,flip(ic[1]+1));
      }
      else {
        xx=ic[0]-oc[0]; yy=ic[1]-oc[1];
        dist=sqrt(xx*xx+yy*yy);
        if(dist>0){
          if(dist>plotjump || dist==1) {
            gdImageSetPixel(image,ic[0],ic[1],pm->color[0]);
            if (tikz_file)
              fprintf(tikz_file,"\\draw\[%s] (%i,%i) rectangle (%i,%i);\n",
                tikz_options(pm->color[0],1),ic[0],flip(ic[1]),ic[0]+1,flip(ic[1]+1));
          }
          else {
            if ( dash==1)
              gdImageDashedLine(image,oc[0],oc[1],ic[0],ic[1],pm->color[0]);
            else
              gdImageLine(image,oc[0],oc[1],ic[0],ic[1],pm->color[0]);
            if (tikz_file)
              fprintf(tikz_file, "\\draw\[%s] (%i,%i) -- (%i,%i);\n",
                tikz_options(pm->color[0],dash),oc[0],flip(oc[1]),ic[0],flip(ic[1]));
          }
        }
      }
    }
    memmove(oc,ic,sizeof(oc));
  }
  if (tikz_file) fprintf(tikz_file,"\%\%end plot\n");
  if(vimg_enable) vimg_plotend();
}

void obj_plot(objparm *pm) { _obj_plot( pm,0) ;}
void obj_dplot(objparm *pm) { _obj_plot( pm,1) ; }

/* set levelcurve granularity */
void obj_levelstep(objparm *pm)
{
  int dd;
  dd=pm->pd[0];
  if(dd<1) return;
  if(dd>16) dd=16;
  lstep=dd;
}

/* level curve */
void obj_levelcurve(objparm *pm)
{
  char fn[MAX_LINELEN+1],tc[MAX_LINELEN+1];
  int n,i;
  double d;
  leveldata *ld;

  ld=xmalloc(sizeof(leveldata)+16);
  ld->xname="x"; ld->yname="y";
  ld->xsize=sizex; ld->ysize=sizey; ld->datacnt=0;
  ld->xrange[0]=xstart; ld->xrange[1]=sizex/xscale+xstart;
  ld->yrange[0]=sizey/yscale+ystart; ld->yrange[1]=ystart;
  ld->grain=lstep;
  fnd_item(pm->str,1,fn); ld->fn=fn;
  n=itemnum(pm->str);
  if(n<=1) {ld->levelcnt=1; ld->levels[0]=0;}
  else {
    if(n>LEVEL_LIM+1) n=LEVEL_LIM+1;
    for(i=0;i<n-1;i++) {
      fnd_item(pm->str,i+2,tc);
      d=strevalue(tc);
      if(isfinite(d)) ld->levels[i]=d; else ld->levels[i]=0;
    }
    ld->levelcnt=n-1;
  }
  levelcurve(ld);
  if (tikz_file) fprintf(tikz_file,"\%\%begin levelcurve\n");
  for(i=0;i<ld->datacnt;i++) {
    gdImageSetPixel(image,ld->xdata[i],ld->ydata[i],pm->color[0]);
    if (tikz_file)
      fprintf(tikz_file,
        "\\draw\[%s] (%i,%i) rectangle (%i,%i);\n",
        tikz_options(pm->color[0],1),ld->xdata[i],flip(ld->ydata[i]),ld->xdata[i]+1,flip(ld->ydata[i]+1));
  }
  if (tikz_file) fprintf(tikz_file,"\%\%end levelcurve\n");
  free(ld);
}

/* set animation step */
void obj_animstep(objparm *pm)
{
  animstep=pm->pd[0];
  setvar("animstep",pm->pd[0]);
}

/* Starts a line counting */
void obj_linecount(objparm *pm)
{
  linecnt=pm->pd[0];
}

/* marks end of execution */
void obj_end(objparm *pm)
{
  fly_error("successful_end_of_execution");
}

/* output */
void obj_output(objparm *pm)
{
  char *p, namebuf[1024];
  p=find_word_start(pm->str); *find_word_end(p)=0;
  snprintf(namebuf,sizeof(namebuf),"%s",imagefilename);
  snprintf(imagefilename,sizeof(imagefilename),"%s",p);
  output();
  snprintf(imagefilename,sizeof(imagefilename),"%s",namebuf);
}

/* vimgfile */
void obj_vimgfile(objparm *pm)
{
  char *p;
  p=find_word_start(pm->str); *find_word_end(p)=0;
  snprintf(vimgfilename,sizeof(vimgfilename),"%s",p);
  if(vimg_ready) vimg_close();
}

/* vimg enable/disable */
void obj_vimg(objparm *pm)
{
  vimg_enable=pm->pd[0];
  if(vimg_enable>0 && vimg_ready==0) vimg_init();
}

/* Set affine transformation */
void obj_affine(objparm *pm)
{
  int i;
  for(i=0;i<4;i++) matrix[i]=pm->pd[i];
  transx=pm->pd[4]; transy=pm->pd[5];
  transform=1;
}

/* Set affine transformation */
void obj_rotation(objparm *pm)
{
  double r;
  r=M_PI*pm->pd[0]/180;
  matrix[0]=matrix[3]=cos(r);
  matrix[1]=-sin(r); matrix[2]=sin(r);
  transform=1;
}

/* Set linear transformation */
void obj_linear(objparm *pm)
{
  int i;
  for(i=0;i<4;i++) matrix[i]=pm->pd[i];
  transform=1;
}

/* Set translation transformation */
void obj_translation(objparm *pm)
{
  transx=pm->pd[0]; transy=pm->pd[1];
}

/* kill affine transformation */
void obj_killaffine(objparm *pm)
{
  matrix[0]=matrix[3]=1;
  matrix[1]=matrix[2]=transx=transy=0;
  transform=0;
}

/* kill affine transformation */
void obj_killlinear(objparm *pm)
{
  matrix[0]=matrix[3]=1;
  matrix[1]=matrix[2]=0;
  transform=0;
}

/* kill affine transformation */
void obj_killtranslation(objparm *pm)
{
  transx=transy=0;
}

/***** Les modifs de Jean-Christophe Leger Fev 2006 *****/

/* arguments: un numero de matrice entre 1 et JC_NB_MATRICES, une liste de 4 nombres reels pour la matrice */
void obj_setmatrix(objparm *pm)
{
  int nummatrix = (int) (pm->pd[0]);
  if((nummatrix < 1) ||(nummatrix>JC_NB_MATRICES)) {
    fly_error("bad_matrix_number");
    return;
  }
  matrices_pavage[nummatrix][0] = pm->pd[1];
  matrices_pavage[nummatrix][1] = pm->pd[2];
  matrices_pavage[nummatrix][2] = pm->pd[3];
  matrices_pavage[nummatrix][3] = pm->pd[4];
}

/* arguments: un numero de matrice entre 1 et JC_NB_MATRICES */
void obj_resetmatrix(objparm *pm)
{
  int nummatrix = (int) (pm->pd[0]);
  if((nummatrix < 1) ||(nummatrix>JC_NB_MATRICES)) {
    fly_error("bad_matrix_number");
    return;
  }
  matrices_pavage[nummatrix][0] = 1;
  matrices_pavage[nummatrix][1] = 0;
  matrices_pavage[nummatrix][2] = 0;
  matrices_pavage[nummatrix][3] = 1;

}
/* arguments: un numero de vecteur entre 1 et JC_NB_MATRICES, une liste de 2 nombres reels pour le vecteur */
void obj_setvector(objparm *pm)
{
  int nummatrix = (int) (pm->pd[0]);
  if((nummatrix < 1) ||(nummatrix>JC_NB_MATRICES)) {
    fly_error("bad_vector_number");
    return;
  }
  vecteurs_pavage[nummatrix][0] = pm->pd[1];
  vecteurs_pavage[nummatrix][1] = pm->pd[2];
}

/* arguments: un numero de matrice entre 1 et JC_NB_MATRICES */
void obj_resetvector(objparm *pm)
{
  int nummatrix = (int) (pm->pd[0]);
  if((nummatrix < 1) ||(nummatrix>JC_NB_MATRICES)) {
    fly_error("bad_vector_number");
    return;
  }
  vecteurs_pavage[nummatrix][0] = 0;
  vecteurs_pavage[nummatrix][1] = 0;
}

/* arguments: un numero de vecteur entre 1 et JC_NB_MATRICES, une liste de 6 nombres reels pour la matrice et le vecteur */
void obj_settransform(objparm *pm)
{
  int nummatrix = (int) (pm->pd[0]);
  if((nummatrix < 1) ||(nummatrix>JC_NB_MATRICES)) {
    fly_error("bad_vector_number");
    return;
  }
  matrices_pavage[nummatrix][0] = pm->pd[1];
  matrices_pavage[nummatrix][1] = pm->pd[2];
  matrices_pavage[nummatrix][2] = pm->pd[3];
  matrices_pavage[nummatrix][3] = pm->pd[4];
  vecteurs_pavage[nummatrix][0] = pm->pd[5];
  vecteurs_pavage[nummatrix][1] = pm->pd[6];
}


/* arguments: un numero de matrice entre 1 et JC_NB_MATRICES */
void obj_resettransform(objparm *pm)
{
  int nummatrix = (int) (pm->pd[0]);
  if((nummatrix < 1) ||(nummatrix>JC_NB_MATRICES)) {
    fly_error("bad_vector_number");
    return;
  }
  vecteurs_pavage[nummatrix][0] = 0;
  vecteurs_pavage[nummatrix][1] = 0;
  matrices_pavage[nummatrix][0] = 1;
  matrices_pavage[nummatrix][1] = 0;
  matrices_pavage[nummatrix][2] = 0;
  matrices_pavage[nummatrix][3] = 1;
}

/* arguments: une liste de 6 nombres reels pour les coordonnees de l'origine et des vecteurs de base */
void obj_setparallelogram(objparm *pm)
{
  int i;
  for(i=0;i<6;i++)  parallogram_fonda[i]=pm->pd[i];
}

/* arguments :aucun */
void obj_resetparallelogram(objparm *pm)
{
  parallogram_fonda[0]=0;
  parallogram_fonda[1]=0;
  parallogram_fonda[2]=100;
  parallogram_fonda[3]=0;
  parallogram_fonda[4]=0;
  parallogram_fonda[5]=100;
}

/* argument : la liste des numeros des matrices a faire agir, le nom du fichier de l'image a inclure */
void obj_multicopy(objparm *pm)
{
  char *pp,*pe,*cptr;
  FILE *inf;
  gdImagePtr insimg;
  int i,j;
  int imax,jmax;
  int c; /* la couleur reperee */
  int mat;
  int nummatrices[JC_NB_MATRICES];
  double pt[2]; /* les coordonnees math. du point repere dans le parallelogramme */
  double ptr[2]; /* les coordonnees math. du point transforme */
  int pti[2]; /* les coordonnees img du point a placer sur le canevas */
  int t;
  /* gestion palette de couleur de l'image a inserer */
  int colorMap[gdMaxColors];
  int comptmat=0; /* combien de matrices en tout ? */

  for (i=0; (i<gdMaxColors); i++) {
    colorMap[i] = (-1);
  }

  /* Gestion des parametres la liste est censee finir avec le nom du fichier */
  t=pm->pcnt-1; /* il faut enlever le nom de fichier ! c'est le nombre de parametres en plus */
  pp=find_word_start(pm->str);
  /* visiblement find_word_start n'arrive pas a trouver le dernier mot dans un contexte ou le nombre de parameters est variable
     * on cherche donc l'emplacement de la derniere virgule:
     * il y en a une car t>0, on retrouve ensuite le debut de mot
     */
  for(pe=pp;*pe!=0;pe++);/* trouve la fin de la chaine */
  if(t>0){
    for(cptr = pe; cptr > pp && *cptr != ','; cptr--);
    pp=find_word_start(cptr+1);
  }
  pe=find_word_end(pp);*pe=0; /* strip junk final */
  //      printf("pp contient %s\n",pp);


  inf=open4read(pp);
  if(inf==NULL) {
    fly_error("file_not_exist"); return;
  }
  insimg=gdImageCreateFromGif(inf); fclose(inf);
  if(insimg==NULL) {
    fly_error("bad_gif"); return;
  }

  /* On recupere les numeros des matrices/vecteurs a faire agir,
    * s'il n'y en a pas, on les fait toutes agir
  */
  for(i=0;i<t && i< JC_NB_MATRICES;i++) {
    if(pm->pd[i]>=1 && pm->pd[i]<=JC_NB_MATRICES){
      nummatrices[comptmat] = pm->pd[i];
      comptmat++;
    }
  }
  if(t<=0){
    for(i=0;i<JC_NB_MATRICES;i++) {
      nummatrices[i] = i+1;
    }
    comptmat=JC_NB_MATRICES;
  }


  imax = gdImageSX(insimg);
  jmax = gdImageSY(insimg);

  for(i=0;i<imax;i++){
    for(j=0;j<jmax;j++){
      int nc;
      c=gdImageGetPixel(insimg,i,j);
      /* Le code suivant est une copie du code dans gdImageCopy  Added 7/24/95: support transparent copies */
      if (gdImageGetTransparent(insimg) != c) {
        /* Have we established a mapping for this color? */
        if (colorMap[c] == (-1)) {
          /* If it's the same image, mapping is trivial, dans notre cas ca n'arrive jamais... */
          if (image == insimg) {
            nc = c;
          } else {
            /* First look for an exact match */
            nc = gdImageColorExact(image,
                   insimg->red[c], insimg->green[c],
                           insimg->blue[c]);
          }
          if (nc == (-1)) {
          /* No, so try to allocate it */
            nc = gdImageColorAllocate(image,
                             insimg->red[c], insimg->green[c],
                             insimg->blue[c]);
             /* If we're out of colors, go for the closest color */
            if (nc == (-1)) {
              nc = gdImageColorClosest(image,
                              insimg->red[c], insimg->green[c],
                              insimg->blue[c]);
            }
          }
          colorMap[c] = nc;
        }

        pt[0]= i*(parallogram_fonda[2])/(imax-1)+(jmax-j)*(parallogram_fonda[4])/(jmax-1)+parallogram_fonda[0];
        pt[1]= i*(parallogram_fonda[3])/(imax-1)+(jmax-j)*(parallogram_fonda[5])/(jmax-1)+parallogram_fonda[1];
        for(mat=0;mat<comptmat;mat++){
          double *matricecourante = matrices_pavage[nummatrices[mat]];
          double *vecteurcourant = vecteurs_pavage[nummatrices[mat]];
          ptr[0] = matricecourante[0]*pt[0]+matricecourante[1]*pt[1]+vecteurcourant[0];
          ptr[1] = matricecourante[2]*pt[0]+matricecourante[3]*pt[1]+vecteurcourant[1];
          scale(ptr,pti,1);
          gdImageSetPixel(image,pti[0],pti[1],colorMap[c]);
        }
      }
    }
  }
  gdImageDestroy(insimg);
}

/**** Fin modifs JC Fev 06 ******/

/* get color from value */
int calc_color(char *p, struct objtab *o)
{
  int k, cc[3];
  char buf[MAX_LINELEN+1];
  for(k=0;k<3;k++) {
    fnd_item(p,k+1,buf);
    cc[k]=strevalue(buf);
  }
  collapse_item(p,3);
  if(cc[0]==-1 && cc[1]==-1 && cc[2]==-255) {

    if(brushed && o->subst&1) return gdBrushed;
    else return color_black;
  }
  if(cc[0]==-1 && cc[1]==-255 && cc[2]==-1) {
    if(styled && o->subst&2)  return gdStyled;
    else return color_black;
  }
  if(cc[0]==-255 && cc[1]==-1 && cc[2]==-1) {
    if(tiled && o->fill_tag==1)  return gdTiled;
    else return color_black;
  }
  return getcolor(cc[0],cc[1],cc[2]);
}

/* Routine to parse parameters */
int parse_parms(char *p,objparm *pm,struct objtab *o)
{
  char buf[MAX_LINELEN+1];
  char *p1, *p2;
  int j,t,c,c1,c2;

  c=o->color_pos;c1=c2=0;
  pm->color[0]=pm->color[1]=0;
  if(c>0) c1=c;
  if(c<0) c2=-c;
  c=c1+c2;
  t=itemnum(p);if(t<o->required_parms+3*c) return -1;
  if(c1>0 && t>o->required_parms+3*c) t=o->required_parms+3*c;
  pm->pcnt=t-3*c;
  if(pm->pcnt>MAX_PARMS) pm->pcnt=MAX_PARMS;
  if(c2>0) {
    for(j=0;j<2 && j<c2; j++) pm->color[j]=calc_color(p,o);
  }
  snprintf(buf,sizeof(buf),"%s",p);
  for(j=0, p1=buf; j<pm->pcnt; j++, p1=p2) {
    p2=find_item_end(p1); if(*p2) *p2++=0;
    p1=find_word_start(p1);
    if(*p1) pm->pd[j]=strevalue(p1); else pm->pd[j]=0;
    if(!isfinite(pm->pd[j])) {
        if(j<o->required_parms) return -1;
        else {pm->pd[j]=0;break;}
    }
  }
  collapse_item(p,o->required_parms);
  if(c1>0) {
    for(j=0;j<c1 && j<2; j++) pm->color[j]=calc_color(p,o);
  }
  if(width>1 && o->subst&1 && pm->color[0]!=gdBrushed
      && pm->color[0]!=gdStyled && pm->color[0]!=gdTiled) {
    pm->color[1]=pm->color[0];
    pm->color[0]=widthcolor(width,pm->color[0]);
  }
  pm->fill=o->fill_tag;
  ovlstrcpy(pm->str,p); return 0;
}

/* Create the struct objparm pm corresponding to the objparm p
 * Execute a command. Returns 0 if OK.
 */
int obj_main(char *p)
{
  int i;
  char *pp,*name,*pt;
  char tbuf2[MAX_LINELEN+1];
  struct objparm pm;

  p=find_word_start(p);
  if(*p==exec_prefix_char || *p==0) return 0; /* comment */
  name=p;
  pp=find_name_end(p);
  pt=find_word_start(pp); if(*pt=='=') *pt=' ';
  if(*pt==':' && *(pt+1)=='=') *pt=*(pt+1)=' ';
  pp=find_word_end(p);
  if(*pp!=0) {
    *(pp++)=0; pp=find_word_start(pp);
  }
  if(strlen(p)==1 || (strlen(p)==2 && isdigit(*(p+1)))) {
    setvar(p,strevalue(pp)); return 0;
  }
  /* search the number of the object */
  i=search_list(objtab,obj_no,sizeof(objtab[0]),name);
  if(i<0) {
    fly_error("bad_cmd"); return 1;
  }
  if(image==NULL && (objtab[i].color_pos || objtab[i].required_parms>2)) {
    fly_error("image_not_defined"); return 1;
  }
  ovlstrcpy(tbuf2,pp);
  if(objtab[i].color_pos || objtab[i].routine==obj_setstyle) {
    substit(tbuf2);
  }
  if(parse_parms(tbuf2,&pm,objtab+i)!=0) fly_error("bad_parms");
  else objtab[i].routine(&pm);
  return 0;
}
