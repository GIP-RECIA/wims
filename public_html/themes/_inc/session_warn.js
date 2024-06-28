/* Display a warning to the connected user when his session is about to close */

/**  var swarn_sessionAlive = must be set to the actual session delay */
var swarn_notifyBefore = 60; // Give client these seconds to choose.
var swarn_rtick=swarn_notifyBefore;
var swarn_enterDate=null;

$(function() {
  // console.log("session close in "+swarn_sessionAlive+"s...");
  setTimeout(function() {
    console.log("session close in "+swarn_notifyBefore+"s...");
    $("#sess_dialog1").dialog({
      autoOpen: true,
      hide: "fold",
      show: "fade",
      modal: true,
      open: function(event, ui) {
        // On décompte les swarn_notifyBefore secondes restantes
        Timer= setTimeout("swarn_clock(1000)",1000);
      },
    });
  }, (swarn_sessionAlive - swarn_notifyBefore) * 1000);
});

/** Compte le nombre de secondes écoulées depuis startDate **/
function swarn_tempo(startDate) {
  now=new Date();
  return Math.ceil((now.getTime()-startDate.getTime())/1000);
}

/** Affiche un décompte depuis la valeur "swarn_notifyBefore" jusqu'à 0,
    en rafraichissant tous les "interval"
    le texte de l'élément "#js_session_timer" **/
function swarn_clock() {
  if (swarn_enterDate==null){
    swarn_enterDate=new Date()
  }
  document.getElementById("js_session_timer").innerHTML=swarn_rtick;
  swarn_rtick=swarn_notifyBefore-swarn_tempo(swarn_enterDate);
  if(swarn_rtick<0){
    swarn_rtick=0;
    $("#sess_dialog1").dialog("close")
    $("#sess_dialog2").dialog({
      autoOpen: true,
      modal: true,
      show: {effect: "bounce", duration: 350, /* SPECIF ARGUMENT */ times: 3}
    });

  }else{
    Timer= setTimeout("swarn_clock(1000)",1000);
  }
}