/***  By now, foundation.util.triggers must be disabled
 * to avoid a conflict with the Dynapi lib.
 * ( it duplicates every item created by dynapi)
 * see here for sample : localhost/wims/?module=H1%2Falgebra%2Faddfig.fr&cmd=new
 * meanwhile, we define here at least some usefull functions
**/

document.addEventListener('DOMContentLoaded', function () {
  // Auto Close all data-closable items
  const wims_closables = document.querySelectorAll("div[data-closable]");
  // Wait 4s to let user read message
  window.setTimeout(() => {
    wims_closables.forEach((closableItem) => {
      alert_close(closableItem)
    });
  }, 4000);

  const wims_closebuttons = document.querySelectorAll("button.wims-closer");
  wims_closebuttons.forEach((closebtn) => {
    closebtn.addEventListener('click', function () {
      alert_close(closebtn.parentElement);
      closebtn.parentElement.removeChild(closebtn);
    });
  });

});


// Remove an item with smooth transition
function alert_close(closableItem) {
  if (!closableItem.classList.contains("alert_closing")) {
    closableItem.classList.add("alert_closing");
    // let transition run, then remove element
    window.setTimeout(() => {
      closableItem.parentElement.removeChild(closableItem);
    }, 3000);
  }
}
