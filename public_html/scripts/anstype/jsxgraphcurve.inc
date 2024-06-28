!distribute item $wims_read_parm into input_type,jsx_reply,jsx_xsize,jsx_ysize,jsx_imgurl,jsx_nb
!default showinfobox=false

!set wims_bound=200
!set name_alert=La taille des requetes sur le serveur ne peut exceder $wims_bound points. Realiser le tracé plus rapidement pour que la requete soit plus petite.
!set script$jsx_nb=$(script$jsx_nb)\
JXG.Options.point.showInfobox = $showinfobox;\
var img$jsx_nb;\
var brd$jsx_nb = init_jsx_brd$jsx_nb();\
function init_jsx_brd$jsx_nb() {\
  var jsx_brd = JXG.JSXGraph.initBoard('jsxbox$jsx_nb',\
    {axis:false,\
    boundingbox: [0, 0, $jsx_xsize, $jsx_ysize],\
    showNavigation: false,\
    showCopyright:  false,\
    grid: false });\
    img$jsx_nb=jsx_brd.create('image',['$jsx_imgurl', [0,$jsx_ysize], [$jsx_xsize,-$jsx_ysize]], {fixed: true, highlight: false,frozen:true});\
  return jsx_brd;\
}\
/** UNCOMMENT THIS TO ENABLE DEBUG PRINT. ** var debug_field = document.getElementById("jsx_debug");\
function print_debug(chaine){debug_field.insertAdjacentHTML('beforeEnd', chaine+"\n");}*/\
var jsxbox_free$jsx_nb=[];\
var p$jsx_nb=[];\
// Niveau de zoom\
var zoom_level$jsx_nb = 1.0;\
// Agrandit la zone de travail\
function zoom_in_jsx$jsx_nb() {\
  img$jsx_nb.setAttribute({frozen:false});\
  zoom_level$jsx_nb = Math.min(zoom_level$jsx_nb + 0.1, 3.0);\
  var new_width = $jsx_xsize * zoom_level$jsx_nb;\
  var new_height = $jsx_ysize * zoom_level$jsx_nb;\
  brd$jsx_nb.resizeContainer(new_width, new_height);\
  img$jsx_nb.setAttribute({frozen:true});\
}\
// Réduit la zone de travail\
function zoom_out_jsx$jsx_nb() {\
  img$jsx_nb.setAttribute({frozen:false});\
  zoom_level$jsx_nb = Math.max(zoom_level$jsx_nb - 0.1, 0.5);\
  var new_width = $jsx_xsize * zoom_level$jsx_nb;\
  var new_height = $jsx_ysize * zoom_level$jsx_nb;\
  brd$jsx_nb.resizeContainer(new_width, new_height);\
  img$jsx_nb.setAttribute({frozen:true});\
}\
// Réinitialise la taille de la zone de travail\
function zoom_reset_jsx$jsx_nb() {\
  img$jsx_nb.setAttribute({frozen:false});\
  zoom_level$jsx_nb = 1.0;\
  brd$jsx_nb.resizeContainer($jsx_xsize,$jsx_ysize);\
  img$jsx_nb.setAttribute({frozen:true});\
}

!if $input_type iswordof points bound
  !set script$jsx_nb=$(script$jsx_nb)\
    var getMouseCoords$jsx_nb = function(e, i) {\
      var cPos =  brd$jsx_nb.getCoordsTopLeftCorner(e, i);\
      var absPos = JXG.getPosition(e, i);\
      var dx = absPos[0]-cPos[0];\
      var dy = absPos[1]-cPos[1];\
    return new JXG.Coords(JXG.COORDS_BY_SCREEN, [dx, dy], brd$jsx_nb);};\
    brd$jsx_nb.on('down', function(e) {\
      var canCreate = true, i, coords, el;\
      if (e[JXG.touchProperty]) {/* index of the finger that is used to extract the coordinates*/i = 0;}\
      coords = getMouseCoords$jsx_nb(e, i);\
      for (el in  brd$jsx_nb.objects) {\
        if(JXG.isPoint( brd$jsx_nb.objects[el]) &&  brd$jsx_nb.objects[el].hasPoint(coords.scrCoords[1], coords.scrCoords[2])) {\
          canCreate = false;\
          break;}\
      }\
      if (canCreate) {p$jsx_nb.push(brd$jsx_nb.create('point', [coords.usrCoords[1], coords.usrCoords[2]],{face:'+', size:'8',name:'',strokeColor:'black'}));}\
    });\
    function efface$jsx_nb() {\
      brd$jsx_nb.suspendUpdate();\
      brd$jsx_nb.removeObject(p$jsx_nb[p$jsx_nb.length-1]);\
      p$jsx_nb.pop();\
      brd$jsx_nb.unsuspendUpdate();\
    }
!endif

!if $input_type iswordof line sline segment vector circle
  !if $input_type iswordof line sline segment vector
    !set trace='line'
    !default ooo={straightFirst:true}
    !if $input_type issametext sline
      !set ooo={straightFirst:false}
    !endif
    !if $input_type issametext segment
      !set ooo={straightFirst:false, straightLast:false}
    !endif
    !if $input_type issametext vector
      !set ooo={straightFirst:false, straightLast:false,lastArrow:true}
    !endif
  !endif
  !if $input_type issametext circle
    !set trace='circle'
    !set ooo={}
  !endif
  !set script$jsx_nb=$(script$jsx_nb)\
    var re$jsx_nb=0;\
    var getMouseCoords$jsx_nb = function(e, i) {\
      var cPos =  brd$jsx_nb.getCoordsTopLeftCorner(e, i);\
      var absPos = JXG.getPosition(e, i);\
      var dx = absPos[0]-cPos[0];\
      var dy = absPos[1]-cPos[1];\
    return new JXG.Coords(JXG.COORDS_BY_SCREEN, [dx, dy], brd$jsx_nb);};\
    brd$jsx_nb.on('down', function(e) {\
      var canCreate = true, i, coords, el;\
      if (e[JXG.touchProperty]) {/* index of the finger that is used to extract the coordinates*/i = 0;}\
      coords = getMouseCoords$jsx_nb(e, i);\
      for (el in  brd$jsx_nb.objects) {\
        if(JXG.isPoint(( brd$jsx_nb.objects[el]) &&  brd$jsx_nb.objects[el].hasPoint(coords.scrCoords[1], coords.scrCoords[2]))) {\
          canCreate = false;\
          break;}\
      }\
      if (canCreate) {if(re$jsx_nb==0){p$jsx_nb[re$jsx_nb] = brd$jsx_nb.create('point', coords.usrCoords.slice(1),{face:'+', size:'8',name:'',fixed:false,strokeColor:'black'});}\
        re$jsx_nb=re$jsx_nb+1;}\
    });\
    brd$jsx_nb.on('move', function(e) {\
      var i, coords, el;\
      if (e[JXG.touchProperty]) {/* index of the finger that is used to extract the coordinates*/i = 0;}\
      coords = getMouseCoords$jsx_nb(e, i);\
      if(re$jsx_nb==1){p$jsx_nb[1] = brd$jsx_nb.create('point', coords.usrCoords.slice(1),{face:'+', size:'8',name:'',fixed:false,strokeColor:'black'});\
      louis$jsx_nb = brd$jsx_nb.create($trace,[p$jsx_nb[0],p$jsx_nb[1]], $ooo);\
      re$jsx_nb=re$jsx_nb+1;}\
      if(re$jsx_nb==2){p$jsx_nb[1].moveTo(coords.usrCoords.slice(1));}});\
    function efface$jsx_nb() {\
      brd$jsx_nb.removeObject(p$jsx_nb[0]);\
      brd$jsx_nb.removeObject(p$jsx_nb[1]);\
      brd$jsx_nb.removeObject(louis$jsx_nb);\
      return re$jsx_nb=0;\
    }
!endif

!if $input_type = rectangle
  !set ooo={straightFirst:false, straightLast:false}
  !set trace='line'
  !set script$jsx_nb=$(script$jsx_nb)\
    var re$jsx_nb=0;\
    var getMouseCoords$jsx_nb= function(e, i) {\
      var cPos =  brd$jsx_nb.getCoordsTopLeftCorner(e, i);\
      var absPos = JXG.getPosition(e, i);\
      var dx = absPos[0]-cPos[0];\
      var dy = absPos[1]-cPos[1];\
    return new JXG.Coords(JXG.COORDS_BY_SCREEN, [dx, dy], brd$jsx_nb);};\
    brd$jsx_nb.on('down',function(e) {\
      var canCreate = true, i, coords, el;\
      if (e[JXG.touchProperty]) {/* index of the finger that is used to extract the coordinates*/i = 0;}\
      coords = getMouseCoords$jsx_nb(e, i);\
        if(re$jsx_nb==0){p$jsx_nb[0] = brd$jsx_nb.create('point', coords.usrCoords.slice(1),{face:'+', size:'8',name:'',fixed:false,strokeColor:'b    lack'});\
        p$jsx_nb[1] = brd$jsx_nb.create('point', coords.usrCoords.slice(1),{face:'+', size:'8',name:'',fixed:false,strokeColor:'black'});\
        li1 = brd$jsx_nb.create('line',[[function(){ return p$jsx_nb[0].X();},function(){ return p$jsx_nb[0].Y();}],[function(){ return p$jsx_nb[0    ].X();},function(){ return p$jsx_nb[1].Y();}]], $ooo );\
        li2 = brd$jsx_nb.create('line',[[function(){ return p$jsx_nb[0].X();},function(){ return p$jsx_nb[1].Y();}],[function(){ return p$jsx_nb[1    ].X();},function(){ return p$jsx_nb[1].Y();}]],$ooo);\
      li3 = brd$jsx_nb.create('line',[[function(){ return p$jsx_nb[1].X();},function(){ return p$jsx_nb[1].Y();}],[function(){ return p$jsx_nb[1    ].X();},function(){ return p$jsx_nb[0].Y();}]],$ooo);\
      li4 = brd$jsx_nb.create('line',[[function(){ return p$jsx_nb[1].X();},function(){ return p$jsx_nb[0].Y();}],[function(){ return p$jsx_nb[0    ].X();},function(){ return p$jsx_nb[0].Y();}]],$ooo );}\
    re$jsx_nb=re$jsx_nb+1;\
    });\
    brd$jsx_nb.on('move',function(e){\
      var canCreate = true, i, coords, el;\
      if (e[JXG.touchProperty]) {/* index of the finger that is used to extract the coordinates*/i = 0;}\
      coords = getMouseCoords$jsx_nb(e, i);\
      if(re$jsx_nb==1){p$jsx_nb[1].moveTo(coords.usrCoords.slice(1));}\
    });\
    function efface$jsx_nb() {\
      brd$jsx_nb.removeObject(p$jsx_nb);\
      brd$jsx_nb.removeObject(li1);\
      brd$jsx_nb.removeObject(li2);\
      brd$jsx_nb.removeObject(li3);\
      brd$jsx_nb.removeObject(li4);\
    return re$jsx_nb=0;}
!endif

!if $input_type = polygon
  !set script$jsx_nb=$(script$jsx_nb)\
    var re$jsx_nb=0;\
    var jsxbox$jsx_nb = document.getElementById('jsxbox$jsx_nb');\
    var point_tmp$jsx_nb;\
    var seg_tmp$jsx_nb;\
    var segg_tmp$jsx_nb;\
    var getMouseCoords$jsx_nb = function(e, i) {\
      var cPos =  brd$jsx_nb.getCoordsTopLeftCorner(e, i);\
      var absPos = JXG.getPosition(e, i);\
      var dx = absPos[0]-cPos[0];\
      var dy = absPos[1]-cPos[1];\
    return new JXG.Coords(JXG.COORDS_BY_SCREEN, [dx, dy], brd$jsx_nb);};\
    var down$jsx_nb=function(e) {\
      var canCreate = true, i, coords, el;\
      if (e[JXG.touchProperty]) {/* index of the finger that is used to extract the coordinates*/i = 0;}\
      coords = getMouseCoords$jsx_nb(e, i);\
      for (el in  brd$jsx_nb.objects) {\
        if(JXG.isPoint(( brd$jsx_nb.objects[el]) &&  brd$jsx_nb.objects[el].hasPoint(coords.scrCoords[1], coords.scrCoords[2]))) {\
          canCreate = false;\
          break;}\
      }\
      if (canCreate) {\
        if(re$jsx_nb==0){p$jsx_nb[re$jsx_nb] = brd$jsx_nb.create('point', coords.usrCoords.slice(1),{face:'+', size:'8',name:'',fixed:false,strokeColor:'black'});\
          point_tmp$jsx_nb= brd$jsx_nb.create('point', coords.usrCoords.slice(1),{face:'+', size:'8',name:'',fixed:false,strokeColor:'black',visible:true});\
          seg_tmp$jsx_nb=brd$jsx_nb.create('segment',[p$jsx_nb[0],point_tmp$jsx_nb]);\
        }\
        if(re$jsx_nb>0){p$jsx_nb[re$jsx_nb] = brd$jsx_nb.create('point', coords.usrCoords.slice(1),{face:'+', size:'8',name:'',fixed:false,strokeColor:'black'});\
          brd$jsx_nb.create('segment',[p$jsx_nb[re$jsx_nb-1],p$jsx_nb[re$jsx_nb]]);\
          brd$jsx_nb.removeObject(segg_tmp$jsx_nb);\
          segg_tmp$jsx_nb=brd$jsx_nb.create('segment',[p$jsx_nb[re$jsx_nb],point_tmp$jsx_nb]);\
        }\
      }\
      re$jsx_nb=re$jsx_nb+1;\
    }\
    var move$jsx_nb= function(e) {\
      var i, coords, el;\
      if (e[JXG.touchProperty]) {/* index of the finger that is used to extract the coordinates*/i = 0;}\
      coords = getMouseCoords$jsx_nb(e, i);\
      if(re$jsx_nb>0){point_tmp$jsx_nb.moveTo(coords.usrCoords.slice(1));}\
    }\
    brd$jsx_nb.on('down',down$jsx_nb);\
    brd$jsx_nb.on('move',move$jsx_nb);\
    JXG.addEvent(jsxbox$jsx_nb,'mouseleave',function(e) {\
      brd$jsx_nb.removeObject(seg_tmp$jsx_nb);\
      brd$jsx_nb.removeObject(segg_tmp$jsx_nb);\
      brd$jsx_nb.create('segment',[p$jsx_nb[re$jsx_nb-1],p$jsx_nb[0]]);\
      brd$jsx_nb.off('down',down$jsx_nb);\
      brd$jsx_nb.off('move',move$jsx_nb);\
      point_tmp$jsx_nb.setAttribute({visible:false});\
      }\
    ,this);\
  function efface$jsx_nb() {\
    brd$jsx_nb.clearTraces();\
    brd$jsx_nb = init_jsx_brd$jsx_nb();\
    re$jsx_nb=0;\
    brd$jsx_nb.on('down',down$jsx_nb);\
    brd$jsx_nb.on('move',move$jsx_nb);\
  }
!endif

!! Broken Line
!if $input_type = brokenline
  !set script$jsx_nb=$(script$jsx_nb)\
    var re$jsx_nb=0;\
    var jsxbox$jsx_nb = document.getElementById('jsxbox$jsx_nb');\
    var point_tmp$jsx_nb;\
    var seg_tmp$jsx_nb;\
    var segg_tmp$jsx_nb;\
    var getMouseCoords$jsx_nb = function(e, i) {\
      var cPos =  brd$jsx_nb.getCoordsTopLeftCorner(e, i);\
      var absPos = JXG.getPosition(e, i);\
      var dx = absPos[0]-cPos[0];\
      var dy = absPos[1]-cPos[1];\
    return new JXG.Coords(JXG.COORDS_BY_SCREEN, [dx, dy], brd$jsx_nb);};\
    var down$jsx_nb=function(e) {\
      var canCreate = true, i, coords, el;\
      if (e[JXG.touchProperty]) {/* index of the finger that is used to extract the coordinates*/i = 0;}\
        coords = getMouseCoords$jsx_nb(e, i);\
        for (el in  brd$jsx_nb.objects) {\
        if(JXG.isPoint(( brd$jsx_nb.objects[el]) &&  brd$jsx_nb.objects[el].hasPoint(coords.scrCoords[1], coords.scrCoords[2]))) {\
          canCreate = false;\
          break;}\
        }\
        if (canCreate) {\
          if(re$jsx_nb==0){p$jsx_nb[re$jsx_nb] = brd$jsx_nb.create('point', coords.usrCoords.slice(1),{face:'+', size:'8',name:'',fixed:false,strokeColor:'black'});\
            point_tmp$jsx_nb= brd$jsx_nb.create('point', coords.usrCoords.slice(1),{face:'+', size:'8',name:'',fixed:false,strokeColor:'black',visible:true});\
            seg_tmp$jsx_nb=brd$jsx_nb.create('segment',[p$jsx_nb[0],point_tmp$jsx_nb]);\
          }\
          if(re$jsx_nb>0){if(re$jsx_nb==1){brd$jsx_nb.removeObject(seg_tmp$jsx_nb);}\
            p$jsx_nb[re$jsx_nb] = brd$jsx_nb.create('point', coords.usrCoords.slice(1),{face:'+', size:'8',name:'',fixed:false,strokeColor:'black'});\
            brd$jsx_nb.create('segment',[p$jsx_nb[re$jsx_nb-1],p$jsx_nb[re$jsx_nb]]);\
            brd$jsx_nb.removeObject(segg_tmp$jsx_nb);\
            segg_tmp$jsx_nb=brd$jsx_nb.create('segment',[p$jsx_nb[re$jsx_nb],point_tmp$jsx_nb]);\
          }\
        }\
        re$jsx_nb=re$jsx_nb+1;\
      }\
      var move$jsx_nb= function(e) {\
        var i, coords, el;\
        if (e[JXG.touchProperty]) {/* index of the finger that is used to extract the coordinates*/i = 0;}\
        coords = getMouseCoords$jsx_nb(e, i);\
        if(re$jsx_nb>0){point_tmp$jsx_nb.moveTo(coords.usrCoords.slice(1));}\
      }\
      brd$jsx_nb.on('down',down$jsx_nb);\
      brd$jsx_nb.on('move',move$jsx_nb);\
      JXG.addEvent(jsxbox$jsx_nb,'mouseleave',function(e) {\
        brd$jsx_nb.removeObject(segg_tmp$jsx_nb);\
        brd$jsx_nb.off('down',down$jsx_nb);\
        brd$jsx_nb.off('move',move$jsx_nb);\
        point_tmp$jsx_nb.setAttribute({visible:false});\
        }\
      ,this);\
    function efface$jsx_nb() {\
      brd$jsx_nb.clearTraces();\
      brd$jsx_nb = init_jsx_brd$jsx_nb();\
      re$jsx_nb=0;\
      brd$jsx_nb.on('down',down$jsx_nb);\
      brd$jsx_nb.on('move',move$jsx_nb);\
    }
!endif

!if $input_type = curve
  !set script$jsx_nb=$(script$jsx_nb)\
    var pp=[];\
    var re$jsx_nb=0;\
    var ree=0;\
    var rrr$jsx_nb=0;\
    var aa$jsx_nb='';\
    var tt=0;\
    var jj$jsx_nb=0;\
    JXG.addEvent(document.getElementById('jsxbox$jsx_nb'),'click', function (e) {\
    var coords = new JXG.Coords(JXG.COORDS_BY_SCREEN, brd$jsx_nb.getMousePosition(e), brd$jsx_nb);\
    p$jsx_nb[re$jsx_nb+tt] = brd$jsx_nb.create('point', coords.usrCoords.slice(1),{face:'+', size:'8',fixed:true,strokeColor:'black', name:''});\
    c = [Math.round(p$jsx_nb[re$jsx_nb+tt].X()),Math.round(p$jsx_nb[re$jsx_nb+tt].Y())];\
    aa$jsx_nb=aa$jsx_nb+c+',';\
    re$jsx_nb=re$jsx_nb+1;\
    JXG.addEvent(document.getElementById('jsxbox$jsx_nb'),'mousemove', function (z) {\
      var coor = new JXG.Coords(JXG.COORDS_BY_SCREEN, brd$jsx_nb.getMousePosition(z), brd$jsx_nb);\
        pp[rrr$jsx_nb+jj$jsx_nb] = brd$jsx_nb.create('point', coor.usrCoords.slice(1),{face:'+',size:'1',Color:'blue',name:''});\
        d = [Math.round(pp[rrr$jsx_nb+jj$jsx_nb].X()),Math.round(pp[rrr$jsx_nb+jj$jsx_nb].Y())];\
        aa$jsx_nb=aa$jsx_nb+d+',';\
        /*brd$jsx_nb.create('segment',[p$jsx_nb[0],pp[0]],{Color:'red'});*/\
        if(rrr$jsx_nb>0){brd$jsx_nb.create('segment',[pp[rrr$jsx_nb-1+jj$jsx_nb],pp[rrr$jsx_nb+jj$jsx_nb]],{Color:'yellow'});}\
        rrr$jsx_nb=rrr$jsx_nb+1;\
        if(rrr$jsx_nb>$wims_bound || jj$jsx_nb+rrr$jsx_nb>$wims_bound){JXG.removeAllEvents (document.getElementById ('jsxbox$jsx_nb'), 'mousemove', this);\
        alert('$name_alert');\
        efface$jsx_nb();}\
    },this);\
    if(re$jsx_nb%2==0){JXG.removeAllEvents (document.getElementById ('jsxbox$jsx_nb'), 'mousemove', this);\
      aa$jsx_nb=aa$jsx_nb.substr(0,aa$jsx_nb.length-1);\
      aa$jsx_nb=aa$jsx_nb+';';\
      tt=tt+re$jsx_nb;\
      jj$jsx_nb=jj$jsx_nb+rrr$jsx_nb;\
      /*alert('re$jsx_nb='+re$jsx_nb+'tt='+tt);\
      alert(aa$jsx_nb);*/\
      re$jsx_nb=0;\
      rrr$jsx_nb=0;}\
    }, this);\
    function efface$jsx_nb() {\
      brd$jsx_nb.removeObject(p$jsx_nb);\
      brd$jsx_nb.removeObject(pp);\
      JXG.removeAllEvents (document.getElementById ('jsxbox$jsx_nb'), 'mousemove', this);\
      aa$jsx_nb='';\
      re$jsx_nb=0;\
      rrr$jsx_nb=0;\
      jj$jsx_nb=0;\
    }
!endif

!readproc slib/geo2D/jsxgraph jsxbox$jsx_nb,$jsx_xsize x $jsx_ysize,$(script$jsx_nb)

$slib_out
<script>
/*<![CDATA[*/
!if $input_type iswordof points bound
  var capture$jsx_nb = function(){\
    p$jsx_nb.forEach(function(element,index,arr){jsxbox_free$jsx_nb.push([Math.round(arr[index].X()),Math.round(arr[index].Y())]);});\
    document.getElementById('$jsx_reply').value='free='+jsxbox_free$jsx_nb +'';}
!endif
!if $input_type iswordof line sline segment vector rectangle
  var capture$jsx_nb = function(){\
    p$jsx_nb.forEach(function(element,index,arr){jsxbox_free$jsx_nb.push([Math.round(arr[index].X()),Math.round(arr[index].Y())]);});\
    document.getElementById('$jsx_reply').value='free='+jsxbox_free$jsx_nb +'';}
!endif
!if $input_type iswordof circle
  var capture$jsx_nb = function(){\
    p$jsx_nb.forEach(function(element,index,arr){jsxbox_free$jsx_nb.push([Math.round(arr[index].X()),Math.round(arr[index].Y())]);});\
    document.getElementById('$jsx_reply').value='free=' + [Math.round(p$jsx_nb[0].X()),Math.round(p$jsx_nb[0].Y()),Math.round(p$jsx_nb[0].Dist(p$jsx_nb[1]))] +'';}
!endif
!if $input_type iswordof polygon brokenline
  var capture$jsx_nb = function(){\
    p$jsx_nb.forEach(function(element,index,arr){jsxbox_free$jsx_nb.push([Math.round(arr[index].X())+","+Math.round(arr[index].Y())+";"]);});\
    jsss$jsx_nb=jsxbox_free$jsx_nb.join("");\
    document.getElementById('$jsx_reply').value='free=' + jsss$jsx_nb +'';}
!endif
!if $input_type iswordof curve
  var capture$jsx_nb = function(){document.getElementById('$jsx_reply').value='free=' + aa$jsx_nb;}
!endif
/*]]>*/
</script>
