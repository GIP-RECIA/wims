
/**
 * chooselist, inspired by qfamsHAndler HTML_QuickForm_advmultiselect

 * JavaScript functions to handle a multiselect element (Move elements between 2 select boxes)
 * @author     Laurent Laville <pear@laurent-laville.org>
 * @copyright  2007-2009 Laurent Laville
 * @license    http://www.opensource.org/licenses/bsd-license.php  New BSD License
 * @website    https://github.com/pear/HTML_QuickForm_advmultiselect
 */


/**
 * QFAMS.moveSelection
 * in double select box mode, to move current selection and update live counter
 *
 * @param      dom element   selectLeft     Data source list
 * @param      dom element   selectRight    Target data list
 * @param      dom element   selectHidden   Full data source (selected, unselected)
 *                                          private usage
 * @param      string        action         Action name (add, remove, all, none, toggle)
 */
function moveSelections(selectLeft, selectRight, selectHidden, action) {
  var isIE = /*@cc_on!@*/false; //IE detector
  var source = null;
  var target = null;
  var option;
  var c      = null;
  var s      = null;
  var i;
  var maxFrom, maxTo;

  if (action === 'add' || action === 'all' || action === 'toggle') {
    source = selectLeft;
    target = selectRight;
  } else {
    source = selectRight;
    target = selectLeft;
  }
  // Don't do anything if nothing selected. Otherwise we throw javascript errors.
  if (source.selectedIndex === -1 && (action === 'add' || action === 'remove')) {
    return;
  }
  maxFrom = source.options.length;
  maxTo   = target.options.length;

  // check if target list is empty and remove fake empty option (tip to be XHTML compliant)
  if (maxTo > 0 && target.options[0].value === "") {
    target.removeAttribute("disabled");
    target.options[0] = null;
  }

  // Add items to the 'TO' list.
  for (i = (maxFrom - 1); i >= 0; i--) {
    if (action === 'all' || action === 'none' || action === 'toggle' || source.options[i].selected === true) {
      if (source.options[i].disabled === false) {
        if (isIE) {
          option = source.options[i].removeNode(true);
          //option.selected = env.persistantSelection;
          target.appendChild(option);
        } else {
          option = source.options[i].cloneNode(true);
          //option.selected = env.persistantSelection;
          target.options[target.options.length] = option;
        }
      }
    }
  }

  // Remove items from the 'FROM' list.
  if (!isIE) {
    for (i = (maxFrom - 1); i >= 0; i--) {
      if (action === 'all' || action === 'none' || action === 'toggle' || source.options[i].selected === true) {
        if (source.options[i].disabled === false) {
          source.options[i] = null;
        }
      }
    }
  }

  // Add items to the 'FROM' list for toggle function
  if (action === 'toggle') {
    for (i = (maxTo - 1); i >= 0; i--) {
      if (target.options[i].disabled === false) {
        if (isIE) {
          option = target.options[i].removeNode(true);
          //option.selected = env.persistantSelection;
          source.appendChild(option);
        } else {
          option = target.options[i].cloneNode(true);
          //option.selected = env.persistantSelection;
          source.options[source.options.length] = option;
        }
      }
    }
    if (!isIE) {
      for (i = (maxTo - 1); i >= 0; i--) {
        if (target.options[i].disabled === false) {
          target.options[i] = null;
        }
      }
    }
  }

  // Set the appropriate items as 'selected in the hidden select.
  // These are the values that will actually be posted with the form.
  updateHidden(selectHidden, selectRight);
}

/*
 * QFAMS.updateHidden
 * updates the private list that handle selection of all elements (selected and unselected)
 * @param      dom element   h              hidden list (contains all elements)
 * @param      dom element   r              selection list (contains only elements selected)
 */
function updateHidden(h, r) {
  var i;

  for(i = h.options.length - 1 ; i >= 0 ; i--)
  {
    //h.options[i].selected = false;
    h.remove(i);
  }

  for (i = 0; i < r.length; i++) {
    h.options[h.length] = new Option(r.options[i].text, r.options[i].value);
    h.options[h.length - 1].selected = true;
  }
}

/**
 * QFAMS.moveUp
 * end-user may arrange and element up to the selection list
 *
 * @param      dom element   l              selection list (contains only elements selected)
 * @param      dom element   h              hidden list (contains all elements)
 *
 */
function moveUp(l, h) {
  var indice = l.selectedIndex;
  if (indice < 0) {
    return;
  }
  if (indice > 0) {
    moveSwap(l, indice, indice - 1);
    updateHidden(h, l);
  }
}

/**
 * QFAMS.moveDown
 * end-user may arrange and element down to the selection list
 *
 * @param      dom element   l              selection list (contains only elements selected)
 * @param      dom element   h              hidden list (contains all elements)
 *
 */
function moveDown(l, h) {
  var indice = l.selectedIndex;
  if (indice < 0) {
    return;
  }
  if (indice < l.options.length - 1) {
    moveSwap(l, indice, indice + 1);
    updateHidden(h, l);
  }
}

/**
 * QFAMS.moveSwap
 * end-user may invert two elements position in the selection list
 *
 * @param      dom element   l              selection list (contains only elements selected)
 * @param      integer       i              element source indice
 * @param      integer       j              element target indice
 *
 */
function moveSwap(l,i,j) {
  var valeur = l.options[i].value;
  var texte = l.options[i].text;
  l.options[i].value = l.options[j].value;
  l.options[i].text = l.options[j].text;
  l.options[j].value = valeur;
  l.options[j].text = texte;
  l.selectedIndex = j
}


/**
 * filterSelectExoSheet
 * Display only exo corresponding to specific sheet Id in a select box
 * The Sheet Id is the value selected by selectFilter (it can be a list like 1,2,3)
 *
 * @param      dom element   selectbox            selection list
 * @param      dom element   selectFilter         WIMS Sheet Id
 *
 */
function filterSelectExoSheet(selectTarget, selectFilter) {
  var i,current;
  // Converts selectFilter to an array
  var sheetIds = selectFilter.value.split(',');

  for(i = selectTarget.options.length - 1 ; i >= 0 ; i--){
    current = selectTarget.options[i]
    if (sheetIds.indexOf(current.dataset.sheetid) >= 0){
      selectTarget.options[i].style.display = "block";
    }
    else{
      selectTarget.options[i].style.display = "none";
      selectTarget.options[i].selected = false;
    }
  }
}


