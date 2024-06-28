/*
	DynAPI Distribution
	DynLayer Base/Common Class

	The DynAPI Distribution is distributed under the terms of the GNU LGPL license.

	requires: dynapi.api.DynDocument
*/

var DynLayerBase = {};	// used by library
function DynLayer(html,x,y,w,h,color,image) {
	this.DynElement = DynElement;
	this.DynElement();

	if (html && html.constructor==Object){
		var args=html; // dictionary input
		html=args.html;
		x = args.x;
		y = args.y;
		w = args.w;
		h = args.h;
		color = args.color;
		image = args.image;
		this.z = (args.zIndex||1);
		this._saveAnchor = args.anchor;
		this.visible = (args.visible==false)?false:true;
		this._textSelectable = (args.textSelectable==false)?false:true;
		if (args.id) this.setID(args.id,true);
	}
	else {
		this.visible = true;
		this.z = 1;
		this._saveAnchor = false;
		this._textSelectable = true;
	}

	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	this.bgColor = color;
	this.bgImage = image;
	this.html = (html!=null)? html+'':null; // convert html to string
	this.elm = null;
	this.doc = null;
	this.css = null;
};
var protoElement = dynapi.setPrototype('DynLayer','DynElement');
protoElement._destroy = function() {
	this._destroyAllChildren();
	this.removeAllEventListeners();
	if (this.elm) this._remove();
	DynObject.all[this.id] = null;
	this.children = null;
	this.frame = null;

	this.bgImage = null;
	this.bgColor = null;
	this.html = null;
	this.x = null;
	this.y = null;
	this.w = null;
	this.h = null;
	this.z = null;
	this.doc = null;
	this.css = null;
	this._dyndoc = null;
	this.parent = null;
};
protoElement._destroyAllChildren = function() {
	for (var i=0;i<this.children.length;i++) {
		this.children[i]._destroy();
		delete this.children[i];
	}
	this.children = [];
};
protoElement._remove = function() {	//! Overwritten by NS4
	var p=this.parent;
	if (this.elm) {
		//this.elm.style.visibility = "hidden";
		//this.elm.innerHTML = "";
		//this.elm.outerHTML = "";
		var pref=p.elm;
		if(document.getElementById && document.childNodes){
			if(this.elm.parentNode) pref = this.elm.parentNode;
			pref.removeChild(this.elm);
		} else if (pref && pref.children){
			this.elm.outerHTML='';
		}
		this.elm = null;

		if (this.releaseMouseEvents) this.releaseMouseEvents();
		if (this.releaseKeyEvents) this.releaseKeyEvents();
	}
	/*this.frame = null;
	this.bgImage = null;
	this.bgColor = null;
	this.html = null;
	this.z = null;
	this.w = null;
	this.h = null;
	this.elm = null;
	this.doc = null;
	this.css = null;*/
};
protoElement._createInserted = function(divs){
	DynLayer._assignElement(this,null,divs); //! NS4 will ignore divs
	DynElement._flagCreate(this);
};
protoElement.getOuterHTML=function() {	//! Overwritten by NS4
	if(this._noStyle) return '<div '+this._cssClass+' id="'+this.id+'">'+this.getInnerHTML()+'</div>';
	else {
		var s,clip='',bgimage=' background-image:none;';
		if(this.bgImage!=null) bgimage=' background-image:url('+this.bgImage+');';
		//else if (this.bgImage==null && this.html==null) bgimage=' background-image:none;';
		if (this.clip) clip=' clip:rect('+this.clip[0]+'px '+this.clip[1]+'px '+this.clip[2]+'px '+this.clip[3]+'px);';
		else if (this.w!=null && this.h!=null) clip=' clip:rect(0px '+this.w+'px '+this.h+'px 0px);';
		return [
			'\n<div '+this._cssClass+' id="'+this.id+'" style="',
			' left:',(this.x!=null? this.x : 0),'px;',
			' top:',(this.y!=null? this.y : 0),'px;',
			((this.w!=null)? ' width:'+this.w+'px;':''),
			((this.h!=null)? ' height:'+this.h+'px;':''),
			((this.z)? ' z-index:'+this.z+';':''),
			((this._cursor!=null)? ' cursor:'+this._cursor+';':''),
			((this.bgColor!=null)? ' background-color:'+this.bgColor+';':''),
			((this.visible==false)? ' visibility:hidden;':' visibility:inherit;'),
			bgimage,
			clip,
			this._cssOverflow,
			this._cssPosition,
			';">',
			this.getInnerHTML(),
			'</div>'
		].join('');
	}
};
protoElement.getInnerHTML=function() {	//! Overwritten by NS4
	var s = '';
	var i,ch=this.children;
	if (this.html!=null) s+=this.html;
	if (this._blkBoardElm) s=('<div id="'+this.id+'_blkboard">'+s+'</div>');
	if(ch.length<50) for (i=0;i<ch.length;i++) s+=ch[i].getOuterHTML();
	else if(ch.length){
		var ar=['']; // speed improvement for layers with nested children
		for (i=0;i<ch.length;i++) ar[i]=ch[i].getOuterHTML();
		s=s+ar.join('');
	}
	return s;
};

protoElement.getPageX = function() {return (this.isChild)? this.parent.getPageX()+(this.x||0) : this.x||0}; //! Overwritten by NS4
protoElement.getPageY = function() {return (this.isChild)? this.parent.getPageY()+(this.y||0) : this.y||0}; //! Overwritten by NS4

protoElement._cssClass = '';
protoElement.setClass = function(c,noInlineStyle){
	this._className=c;
	if(this.css) this.css.className=c;
	else {
		this._cssClass=(c)? 'class="'+c+'"':'';
		this._noStyle=noInlineStyle;
	}
};
protoElement.setCssClass = function(classes){
	this._cssClass = 'class="'+classes+'"';
};

protoElement.setVisible = function(b) { //! Overwritten by NS4
	//if (b!=this.visible) {
		this.visible = b;
		if (this.css) this.css.visibility = b? "inherit" : "hidden";
	//}
};
protoElement.setSize = function(w,h) { //! Overwritten by NS4
	if (this._useMinSize||this._useMaxSize){
		if (this._minW && w<this._minW) w=this._minW;
		if (this._minH && h<this._minH) h=this._minH;
		if (this._maxW && w>this._maxW) w=this._maxW;
		if (this._maxH && h>this._maxH) h=this._maxH;
	}
	var cw = (w!=null && w!=this.w);
	var ch = (h!=null && h!=this.h);
	if (cw) this.w = w<0? 0 : w;
	if (ch) this.h = h<0? 0 : h;
	if (cw||ch) {
		if (this._hasAnchor) this.updateAnchor(); // update this anchor
		if (this._hasChildAnchors) this._updateAnchors(); // update child anchors
		if (this.css) {
			if (cw) this.css.width = this.w||0;
			if (ch) this.css.height = this.h||0;
			if (cw || ch) this.css.clip = 'rect(0px '+(this.w||0)+'px '+(this.h||0)+'px 0px)';
			if (this.updateLayout) this.updateLayout();
		}
	}
	if(this._hasResizeEvents) this.invokeEvent('resize');
	return (cw||ch);
};
protoElement.setMaximumSize = function(w,h){
	this._maxW=w; this._maxH=h;
	this._useMaxSize=(w!=h!=null);
	w=(this.w>w)?w:this.w;
	h=(this.h>h)? h:this.h;
	this.setSize(this.w,this.h);
};
protoElement.setMinimumSize = function(w,h){
	this._minW=w; this._minH=h;
	this._useMinSize=(w!=h!=null);
	this.setSize(this.w,this.h);
};

protoElement._position  = 'absolute';
protoElement._cssPosition = ' position:absolute';
protoElement.setPosition = function(p){
	if(p!='relative' && p!='fixed' && p!='absolute') p='absolute';
	this._position=p;
	if (this.css) this.css.position=p;
	else this._cssPosition = ' position:'+p;
};

protoElement._overflow='hidden';
protoElement._cssOverflow =' overflow:hidden;';
protoElement.getOverflow = function(){return this._overflow};
protoElement.setOverflow = function(s){
	if(!s) s='default';
	this._overflow=s;
	if(this.css) this.css.overflow=s;
	else this._cssOverflow=' overflow:'+s+';';
};

protoElement.getAnchor = function(){
	if(!this.parent) return this._saveAnchors;
	else if (this.parent._childAnchors) {
		return this.parent._childAnchors[this.id];
	}
};
protoElement.setAnchor = function(anchor) {
	//console.log("[dynapi3x] dynlayer_base.js // setAnchor(" + anchor + ")");

	if (anchor == null) {
		delete this._saveAnchor;
		if (this.parent && this.parent._childAnchors && this.parent._childAnchors[this.id]){
			//console.log("[dynapi3x] dynlayer_base.js // setAnchor -- deleting _childAnchors["+this.id+"]");
			delete this.parent._childAnchors[this.id];
		}
		this._hasAnchor = false;
	}
	else if (this.parent) {
		if (!this.parent._childAnchors) this.parent._childAnchors = {};
		var parent_anchors = this.parent._childAnchors;
		parent_anchors[this.id] = anchor;
		this.parent._updateAnchor(this.id);
		this._hasAnchor = this.parent._hasChildAnchors = true;
	}
	else this._saveAnchor = anchor;
};
protoElement.setX=function(x) {this.setLocation(x,null)};
protoElement.setY=function(y) {this.setLocation(null,y)};
protoElement.getX=function() {return this.x||0};
protoElement.getY=function() {return this.y||0};
protoElement.setPageX = function(x) {this.setPageLocation(x,null)};
protoElement.setPageY = function(y) {this.setPageLocation(null,y)};
protoElement.getVisible=function() {return this.visible};
protoElement.getZIndex=function() {return this.z};
protoElement.setZIndex=function(z) {
	if (typeof(z)=="object") {
		if (z.above) this.z = z.above.z + 1;
		else if (z.below) this.z = z.below.z - 1;
		else if (z.topmost && this.parent) {
			var topZ=10000,ch=this.parent.children;
			for(var i=0;i<ch.length;i++) if (ch[i].z>topZ) topZ=ch[i].z;
			this.parent._topZ = topZ+2;
			this.z = this.parent._topZ;
		}
	}
	else this.z = z;
	if (this.css) this.css.zIndex = this.z;
};
protoElement.getHTML = function() {return this.html};
protoElement.setWidth=function(w) {this.setSize(w,null)};
protoElement.setHeight=function(h) {this.setSize(null,h)};
protoElement.getWidth=function() {return this.w||0};
protoElement.getHeight=function() {return this.h||0};
protoElement.getBgImage=function() {return this.bgImage};
protoElement.getBgColor=function() {return this.bgColor};
protoElement.setBgColor=function(c) {	//! Overwritten by NS4
	if (c==null) c = 'transparent';
	this.bgColor = c;
	if (this.css) this.css.backgroundColor = c;
};
protoElement.setBgImage=function(path) {	//! Overwritten by NS4
	this.bgImage=path;
	if (this.css) this.css.backgroundImage='url('+path+')';
};
protoElement.setClip=function(clip) {	//! Overwritten by NS4
	var cc=this.getClip();
	for (var i=0;i<clip.length;i++) if (clip[i]==null) clip[i]=cc[i];
	this.clip=clip;
	if (this.css==null) return;
	var c=this.css.clip;
	this.css.clip="rect("+clip[0]+"px "+clip[1]+"px "+clip[2]+"px "+clip[3]+"px)";
};
protoElement.getClip=function() {	//! Overwritten by NS4
	if (this.css==null || !this.css.clip) return [0,0,0,0];
	var c = this.css.clip;
	if (c) {
		if (c.indexOf("rect(")>-1) {
			c=c.split("rect(")[1].split(")")[0].split("px");
			for (var i=0;i<c.length;i++) c[i]=parseInt(c[i]);
			return [c[0],c[1],c[2],c[3]];
		}
		else return [0,this.w,this.h,0];
	}
};
/*
protoElement.getElmWidth = function(){
	var w = parseInt(this.css.width);
	if(isNaN(w)) w=this.getContentWidth();
	return w;
};
protoElement.getElmHeight = function(){
	var h = parseInt(this.css.height);
	alert(this.css.height)
	if(isNaN(h)) h=this.getContentWidth();
	return h;
};
*/
protoElement.slideTo = function(endx,endy,inc,speed) {
	if (!this._slideActive) {
		var x = this.x||0;
		var y = this.y||0;
		if (endx==null) endx = x;
		if (endy==null) endy = y;
		var distx = endx-x;
		var disty = endy-y;
		if (x==endx && y==endy) return;
		var num = Math.sqrt(Math.pow(distx,2) + Math.pow(disty,2))/(inc||10)-1;
		var dx = distx/num;
		var dy = disty/num;
		this._slideActive = true;
		this._slide(dx,dy,endx,endy,num,this.x,this.y,1,(speed||20));
	}
};
protoElement.slideStop = function() {
	this._slideActive = false;
	//this.invokeEvent('pathcancel');
};
protoElement._slide = function(dx,dy,endx,endy,num,x,y,i,speed) {
	if (!this._slideActive) this.slideStop();
	else if (i++ < num) {
		this.invokeEvent('pathrun');
		if (this._slideActive) {
			x += dx;
			y += dy;
			this.setLocation(Math.round(x),Math.round(y));
			setTimeout(this+'._slide('+dx+','+dy+','+endx+','+endy+','+num+','+x+','+y+','+i+','+speed+')',speed);
		}
		//else this.slideStop();
	}
	else {
		this._slideActive = false;
		this.invokeEvent('pathrun');
		this.setLocation(endx,endy);
		this.invokeEvent('pathfinish');
	}
};
