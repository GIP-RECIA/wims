/**** toggle_select_option ***
  Automatically display a single DOM element next to selectObject
  when the selected value is "openValue",
  and close it for other values.
*/
function toggle_select_option(selectObject, openValue) {
  var selected = selectObject.value;
  if (selected == openValue) {
    if (jQuery) {
      jQuery(selectObject).next().slideDown();
    } else {
      selectObject.nextSibling.style.display = "block";
    }
  } else {
    if (jQuery) {
      jQuery(selectObject).next().slideUp();
    } else {
      selectObject.nextSibling.style.display = "none";
    }
  }
}


/**** toggle_select_options ***
  Automatically display defined DOM elements according to matching_dict
  matching_dict is an associative array like this :
  {
    "value1" : "#DOM_ID_element1",
    "value2" : ".DOM_class_elements",
    ...
  }

*/
function toggle_select_options(selectElem, matching_dict = {}) {
  var selected = selectElem.value;
  for (var key in matching_dict) {
    if (selected == key) {
      if (jQuery) {
        jQuery(matching_dict[key]).slideDown();
      } else {
        document.querySelector(matching_dict[key]).style.display = "block";
      }
    } else {
      if (jQuery) {
        jQuery(matching_dict[key]).slideUp();
      } else {
        document.querySelector(matching_dict[key]).style.display = "none";
      }
    }
  }
}

/* Since the allowtype selectbox not works yet well without reloading the page,
it reloads the page when "techvars" are selected */
function toggle_allowtype(selectElem, matching_dict = {}) {
  var selected = selectElem.value;
  if (selected == "techvar") {
    selectElem.form.submit();
  } else {
    toggle_select_options(selectElem, matching_dict);
  }
}