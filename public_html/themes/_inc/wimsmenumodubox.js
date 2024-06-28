/* wimsmenumodubox.js : New slide-in / slide-out menu
(used in Nikaia theme)
*/

/* Redraw Dynapi layers after menu sliding */
var dynapi_redraw = function(){
  //console.log("dynapi_redraw called");
  if (typeof dynapi !== 'undefined') {
    var childs=dynapi.document.getChildren();
    var l = childs.length;
    for(var i=0;i<l;i++) {
      childs[i].updateAnchor();
    }
  }
}


document.addEventListener("DOMContentLoaded", function() {

  var wims_menu = document.getElementById("wimsmenumodubox");
  if (wims_menu){

    // Must be done after css transition
    setTimeout('dynapi_redraw()', 550);

    /* Extruder style */
    /*
    wims_menu.addClass("{title:'&#8593;&#8595;'}");

    wims_menu.buildMbExtruder({
        position:"left",
        width:250,
        extruderOpacity:0.8,
        textOrientation:"tb",
        onExtOpen:function(){},
        onExtContentLoad:function(){wims_menu.openPanel();},
        onExtClose:function(){}
    });
    */

    /* Slideout style*/

    var body = document.getElementsByTagName("BODY")[0];

    // Get in sessionStorage if menu was previously opened.
    var previous_state = sessionStorage.getItem("slide_menu_state");
    previous_state = previous_state === null ? "closed" : previous_state; //default state

    var menu_panel = document.getElementById('wimsmenumodubox');
    menu_panel.classList.add("slide-menu");

    if (previous_state == "closed"){
      body.classList.add("slide-menu-closed");
    }else{
      body.classList.add("slide-menu-opened");
    }
    // Add a toggle button on top of the main panel
    var container = document.createElement("div");
    container.className = "toggle-button";

    var button = document.createElement("a");
    button.className = "wims_button wims_secondary_button";

    var span1 = document.createElement("span");
    var textnode = document.createTextNode("\u21e6");
    span1.appendChild(textnode);
    button.appendChild(span1);

    var span2 = document.createElement("span");
    var textnode = document.createTextNode("\u21e8");
    span2.appendChild(textnode);
    button.appendChild(span2);

    container.appendChild(button);
    menu_panel.insertBefore(container, menu_panel.childNodes[0]);

    button.addEventListener('click', function() {
      //slideout.toggle();
      //console.log("toggle clicked !");
      body.classList.toggle("slide-menu-closed");
      body.classList.toggle("slide-menu-opened");

      // Must be done after css transition
      setTimeout('dynapi_redraw()', 550);

      previous_state = previous_state == "closed" ? "opened" : "closed"; //new state
      /*if (previous_state=="closed"){
        body.focus();
      }*/
      sessionStorage.setItem("slide_menu_state", previous_state);
    });

  }
});
