
var nb_checked = 0;
var nb_tot = 0;
var checkboxes, check_all;

document.addEventListener("DOMContentLoaded", function(event) {

  checkboxes = document.getElementsByName('selection');
  check_all = document.getElementById('check_all_selection');

  for(var i=0, n=checkboxes.length;i<n;i++) {
    if (checkboxes[i].checked) {
      nb_checked++;
    }
    nb_tot++;
    checkboxes[i].addEventListener('change', function(event) {
      if (event.target.checked) {
        nb_checked++;
      } else {
        nb_checked--;
      }
      console.log("nb_checked="+nb_checked);
      check_all.indeterminate=false;
      check_toggle_state();
    })
  }
  check_toggle_state();
});

/* Check/uncheck all Checkboxes */
function toggle() {
  for(var i=0, n=checkboxes.length;i<n;i++) {
    checkboxes[i].checked = check_all.checked;
    if (check_all.checked){
      nb_checked = nb_tot;
    } else {
      nb_checked = 0;
    }
    console.log("nb_checked="+nb_checked);
  }
}

function check_toggle_state() {
  if (nb_checked<=0){
    check_all.checked=false;
  }
  else if (nb_checked>=nb_tot){
    check_all.checked=true;
  } else {
    check_all.indeterminate=true;
  }
}
