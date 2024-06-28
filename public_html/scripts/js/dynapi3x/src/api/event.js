/*
	DynAPI Distribution
	DynEvent, EventObject, DynElement Classes

	The DynAPI Distribution is distributed under the terms of the GNU LGPL license.
*/

function DynEvent(type,src) {
	this.type = type;
	this.src = src;
	this.origin = src;
	this.propagate = true;
	this.bubble = false;
	this.bubbleChild = null;
	this.defaultValue = true;
};
var protoEvent = DynEvent.prototype;
protoEvent.getType = function() {return this.type};
protoEvent.getSource = function() {return this.src};
protoEvent.getOrigin=function() {return this.origin};
protoEvent.stopPropagation = function() {this.propagate = false};
protoEvent.preventBubble = function() {this.bubble = false};
protoEvent.preventDefault = function() {this.defaultValue = false};
protoEvent.getBubbleChild = function() {return this.bubbleChild};

function EventObject() {
	this.DynObject = DynObject;
	this.DynObject();
	this._listeners = [];
};
EventObject._SubClass={};

protoEvent = dynapi.setPrototype('EventObject','DynObject');
protoEvent.addEventListener = function(el) {
	if (el) {
		for (var i=0;i<this._listeners.length;i++) if (this._listeners[i]==el) return;
		this._listeners[this._listeners.length] = el;
		// Use onCreate() and onPrecreate() function for create events
		this._hasContentEvents=(el['oncontentchange'])? true:this._hasContentEvents;
		this._hasLocationEvents=(el['onlocationchange'])? true:this._hasLocationEvents;
		this._hasResizeEvents=(el['onresize'])? true:this._hasResizeEvents;
		this._hasDragEvents=(el['ondragstart']||el['ondragmove']||
							el['ondragend']||el['ondragdrop']||
							el['ondragover']||el['ondragout'])? true:this._hasDragEvents;

		if (this.captureMouseEvents) {
			this._hasMouseEvents = this._hasMouseEvents||(el.onmousedown || el.onmouseup || el.onmouseover || el.onmouseout || el.onclick || el.ondblclick);
			if (this._created && !this._hasMouseEvents) this.captureMouseEvents();
		}
		if (this.captureKeyEvents)
			if (this._created && !this._hasKeyEvents && (el.onkeydown || el.onkeyup || el.onkeypress)) this.captureKeyEvents();
	}
};
protoEvent.removeEventListener = function(el) {
	if (el) {
		DynAPI.functions.removeFromArray(this._listeners, el, false);
		if (!this._listeners.length && this.releaseMouseEvents && this.getClassName()!='DynDocument') this.releaseMouseEvents();
		if (!this._listeners.length && this.releaseKeyEvents && this.getClassName()!='DynDocument') this.releaseKeyEvents();
	}
};
protoEvent.removeAllEventListeners = function() {
	this._listeners = [];
};
protoEvent.invokeEvent = function(type,e,args) {
	if (!e) e = new DynEvent(type,this);
	e.src = this;
	e.type = type;

	// Check for subclassing
	var clsFn=EventObject._SubClass[this+'_'+type];
	if(clsFn) {
		if (clsFn(e,args)==false) return;
	};

	if (this._listeners.length) for (var i=0;i<this._listeners.length;i++) {
		if (this._listeners[i]["on"+type]) this._listeners[i]["on"+type](e,args);
		if (!e.propagate) break;
	}
	if (this["on"+type]) this["on"+type](e,args);
	if (e.bubble && this.parent) {
		//if ((type=="mouseover" || type=="mouseout") && e._relative==this.parent) return;
		e.x += this.x;
		e.y += this.y;
		e.bubbleChild = this;
		this.parent.invokeEvent(type,e,args);
	}
};

// Add subClassEvent() function to dynapi.functions
dynapi.functions.subClassEvent = function(type,eobj,fn){
	var ek=eobj+'_'+type;
	var cls=EventObject._SubClass;
	if(typeof(fn)=='function') cls[ek]=fn;
	else if(!fn && cls[ek]) delete cls[ek];
};

function DynElement() {
	this.EventObject = EventObject;
	this.EventObject();
	this.isChild = false;
	this._created = false;
	this.parent = null;
	this._dyndoc = null;
	this.children = [];
	this._childAnchors = [];
};
DynElement._flagCreate = function(c){ // much faster than using DynElemnt._flagEvent
	var ch=c.children;
	c._created = true;
	if (c._hasCreateFn) c._flagCreateEvent('create');
	for (var i=0; i<ch.length; i++) this._flagCreate(ch[i]);
};
DynElement._flagPreCreate = function(c){
	var ch=c.children;
	if (c._hasPCreateFn) c._flagCreateEvent('precreate');
	for (var i=0; i<ch.length; i++) this._flagPreCreate(ch[i]);
};
DynElement._flagEvent = function(c,type) {
	var ch=c.children;
	c.invokeEvent(type);
	for (var i=0; i<ch.length; i++) this._flagEvent(ch[i],type);
};

protoEvent = dynapi.setPrototype('DynElement','EventObject');
protoEvent.addChild = function(c,alias,inlineID) {
	if (!c) return dynapi.debug.print("Error: no object sent to [DynLayer].addChild()");
	if (c.isChild) c.removeFromParent();
	c.isChild = true;
	c.parent = this;
	if (c._saveAnchor) {
		c.setAnchor(c._saveAnchor);
		c._saveAnchor = null;
		delete c._saveAnchor;
	}
	if(alias) this[alias]=c;
	if(inlineID) c.setID(inlineID,true);
	if (this._created)	{
		if (c.isInline) c._createInline();
		else c._create();
	}
	this.children[this.children.length] = c;
	return c;
};
protoEvent.removeChild = function(c) {
	var l = this.children.length;
	for (var i=0;i<l && this.children[i]!=c;i++);
	if (i!=l) {
		c._remove();
		c._created = false;
		c.isChild = false;
		c.parent = null;
		c.dyndoc = null;
		this.children[i] = this.children[l-1];
		this.children[l-1] = null;
		this.children.length--;
	}
};
protoEvent.deleteChild = function(c) {
	c.removeFromParent();
	c._delete();
};
protoEvent.deleteAllChildren = function() {
	var l = this.children.length;
	for(var i=0;i<l;i++) {
		this.children[i].deleteFromParent();
		delete this.children[i];
	}
	this.children = [];
};
protoEvent.deleteFromParent = function () {
	if (this.parent) this.parent.deleteChild(this);
};
protoEvent.removeFromParent = function () {
	if (this.parent) this.parent.removeChild(this);
};
protoEvent._create = protoEvent._createInLine = protoEvent._createInserted = protoEvent._remove = protoEvent._delete = protoEvent._destroy = dynapi.functions.Null;

protoEvent.getChildren = function() {return this.children};
protoEvent.getAllChildren = function() {
	var ret = [];
	var temp;
	var l = this.children.length;
	for(var i=0;i<l;i++) {
		ret[this.children[i].id] = this.children[i];
		temp = this.children[i].getAll();
		for(var j in temp) ret[j] = temp[j];
	}
	return ret;
};
protoEvent.getParents = function(l) {
	if (l==null) l = [];
	if (this.parent) {
		l[l.length] = this.parent;
		l = this.parent.getParents(l);
	}
	return l;
};
protoEvent.isParentOf = function(c) {
	if (c) {
		var p = c.getParents();
		for (var i=0;i<p.length;i++) {
			if (p[i]==this) return true;
		}
	}
	return false;
};
protoEvent.isChildOf = function(p) {
	if (!p) return false;
	return p.isParentOf(this);
};
// New onPreCreate() and onCreate() callback functions
protoEvent.onCreate = function(fn){
	if(!fn) return;
	if(!this._cfn){this._fn=0;this._cfn=[];}
	var s='create'+this._fn++;
	this._cfn[s]='create';
	this._hasCreateFn=true;
	this[s]=fn;
};
protoEvent.onPreCreate = function(fn){
	if(!fn) return;
	if(!this._cfn){this._fn=0;this._cfn=[];}
	var s='precreate'+this._fn++;
	this._cfn[s]='precreate';
	this._hasPCreateFn=true;
	this[s]=fn;
};
protoEvent._flagCreateEvent = function(t){
	for(var i in this._cfn){
		if(this._cfn[i]==t) this[i]();
	};
};

protoEvent.updateAnchor = function() {
	this.parent._updateAnchor(this.id);
};
protoEvent._updateAnchor = function(id) {
	if (!id) return;
	var dlyr = DynObject.all[id];
	var a = this._childAnchors[id];
	var tw = this.w;
	var th = this.h;
	if (a==null || (tw==null && th==null)) return;

	// anchoring/docking
	var fn=dynapi.functions;
	var padX=0,padY=0;
	if(a.topA) {
		anc=fn.getAnchorLocation(a.topA,this);
		if(anc){padY=anc.y; th=th-padY;}
	}
	if(a.leftA) {
		anc=(a.leftA==a.topA && anc)? anc:fn.getAnchorLocation(a.leftA,this);
		if(anc) {padX=anc.x; tw=tw-padX;}
	}
	if(a.bottomA) {
		anc=fn.getAnchorLocation(a.bottomA,this);
		th=th-(this.h-anc.y);
	}
	if(a.rightA) {
		anc=(a.bottomA==a.rightA && anc)? anc:fn.getAnchorLocation(a.rightA,this);
		if(anc) tw=tw-(this.w-anc.x);
	}

	var aleft=(tw>0 && a.left && typeof(a.left)=='string')? tw*(parseInt(a.left)/100):a.left;
	var aright=(tw>0 && a.right && typeof(a.right)=='string')? tw*(parseInt(a.right)/100):a.right;
	var atop=(th>0 && a.top && typeof(a.top)=='string')? th*(parseInt(a.top)/100):a.top;
	var abottom=(th>0 && a.bottom && typeof(a.bottom)=='string')? th*(parseInt(a.bottom)/100):a.bottom;
	var x = aleft;
	var y = atop;
	var w = null;
	var h = null;
	var dlyrWidth=dlyr.getWidth();
	var dlyrHeight=dlyr.getHeight();
	if (a.stretchH!=null) {
		if(typeof(a.stretchH)!='string') w=a.stretchH;
		else {
			if(a.stretchH=='*') w = tw - ((aleft!=null)? aleft:0);
			else w = tw*(parseInt(a.stretchH)/100);
		}
		dlyrWidth=w;
	}
	if (a.centerH!=null) {
		x = Math.ceil(tw/2 - dlyrWidth/2 + a.centerH);
	}else if (aright!=null) {
		if (aleft!=null) w = (tw - aright) - aleft;
		else x = (tw - dlyrWidth) - aright;
		if(tw<=0 && x<0) x=null; // ns4 needs x>=0
	}
	if (a.stretchV!=null) {
		if(typeof(a.stretchV)!='string') h=a.stretchV;
		else {
			if(a.stretchV=='*') h = th - ((atop!=null)? atop:0);
			else h = th*(parseInt(a.stretchV)/100);
		}
		dlyrHeight=h;
	}
	if (a.centerV!=null) {
		y = Math.ceil(th/2 - dlyrHeight/2 + a.centerV);
	}else if (abottom!=null) {
		if (atop!=null) h = (th - abottom) - atop;
		else y = (th - dlyrHeight) - abottom;
		if(th<=0 && y<0) y=null; // ns4 needs y>=0
	}
	if(padX) {x=(x)? x:0;x+=padX}
	if(padY) {y=(y)? y:0;y+=padY}

	var tmp=dlyr._hasAnchor;
	dlyr._hasAnchor=false; // ignore anchor updates of this layer
	if(x!=null||y!=null) dlyr.setLocation(x,y);
	if(w!=null||h!=null) dlyr.setSize(w,h);
	dlyr._hasAnchor = tmp; // useful for preventing stack overflow
};
protoEvent._updateAnchors = function() {
	var tw = this.w;
	var th = this.h;
	if (tw==null && th==null) return;
	//console.log("[dynapi3x] _updateAnchor | THIS is a "+ this.getClassName());
	// 'this' doit etre un sous-type de DynObject a priori

	var anchors_ids = Object.keys(this._childAnchors);
	for (i = 0; i < anchors_ids.length; i++) {
		id = anchors_ids[i];
		this._updateAnchor(id);
	}

};

// Bandwidth timer stop
var ua=dynapi.ua; ua._bwe=new Date;
ua.broadband=((ua._bwe-ua._bws)<=1500)? true:false;
