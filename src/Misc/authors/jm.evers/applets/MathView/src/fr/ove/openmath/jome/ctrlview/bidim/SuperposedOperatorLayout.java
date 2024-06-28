/*
$Id: SuperposedOperatorLayout.java,v 1.3 2003/02/18 11:48:47 sander Exp $
*/


/*
Copyright (C) 2001-2002 Mainline Project (I3S - ESSI - CNRS -UNSA)

This library is free software; you can redistribute it and/or
modify it under the terms of the GNU Lesser General Public
License as published by the Free Software Foundation; either
version 2.1 of the License, or (at your option) any later version.

This library is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public
License along with this library; if not, write to the Free Software
Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA  02111-1307  USA

For further information on the GNU Lesser General Public License,
see: http://www.gnu.org/copyleft/lesser.html
For further information on this library, contact: mainline@essi.fr
*/


package fr.ove.openmath.jome.ctrlview.bidim;

import java.awt.*;
import fr.ove.openmath.jome.ctrlview.bidim.*;
import fr.ove.openmath.jome.ctrlview.bidim.selection.events.SelectionEvent;
import fr.ove.openmath.jome.model.*;
import fr.ove.utils.FontInfo;

/**
* Layout manager that lays the display of an operator whose symbol is superposed to its operand.
*
* @author © 1999 DIRAT Laurent
* @version 2.0 15/12/1999
*/
public abstract class SuperposedOperatorLayout extends VerticalCenteredLayout implements OperatorDisplayCreator {
    /**
    * Computes the size of the display according to its children size (if any),
    * and its different attributes.
    * @return the size of the display.
    */
    public Dimension computeAttributes() {
        // C'est strictement la même chose, sauf que VerticalCenteredLayout place l'ascent comme étant la moitié
        // de la hauteur du display. Or dans le cas qui nous occupe, l'ascent du display doit ce trouver sur celui
        // de l'opérande
        Dimension dim = super.computeAttributes();
    
        displayToLay.setAscent(((Display) displayToLay.getComponent(0)).getShiftY() +
                  ((Display) displayToLay.getComponent(0)).getHeight() + 
                  ((Display) displayToLay.getComponent(1)).getShiftY() +
                  ((Display) displayToLay.getComponent(1)).getAscent());
                  
        displayToLay.setDescent(displayToLay.getHeight() - displayToLay.getAscent());
    
        return dim;
    }
    
    /**
    * According to the operator, the layout manager has to add some components (e.g. brackets, ...)
    * or has to perform some "re-oganisation" before rendering.<BR>
    * As soon as the layout manager is set to the display, this mehtod MUST be called with the display laid out
    * as parameter. This method serves as well as a registering method. So all sub-classes of the instance MUST
    * call super.initDisplay(displayToLay).
    * @param displayToLay the display laid by the instance
    */
    public void initDisplay(Display displayToLay) {
        super.initDisplay(displayToLay);
        
        // On récupère le fts associé (listener) au display.
        FormulaTreeStructure fts = (FormulaTreeStructure) displayToLay.getListener();
        
        Display displayOperator = createOperatorDisplay();
        
        // On met un listener à l'opérateur.
        // En fait, il n'y en a pas besoin, dans le sens où il n'y a pas spécifiquement de fts qui
        // écoute le comportement de ce display. Néanmoins, il s'avère nécessaire qu'il en ait
        // un, par exemple lors de l'iconification, car c'est le display qui reçoit la demande
        // d'iconification qui envoie l'événement correspondant à la FTS. Or si ce display n'a pas
        // d'écouteur, alors pb. Par cohérence, l'écouteur du display d'opérateur, est le fts qui
        // représente cette opération. Par contre, la fts en question, n'écoute pas le display
        // d'opérateur.
        displayOperator.addControlListener(fts);
        
        // On ajoute le display d'opérateur en première position
        // A priori, display ne contient rien, donc un add(displayOperator) suffit.
        this.displayToLay.add(displayOperator);
        
        this.displayToLay.computeAncestorsAttributes();
    }
    
    /**
    * Checks the validity of the selection.
    */
    public void validateSelection() {
        SelectionEvent selEvt = new SelectionEvent(displayToLay);

        // La validité de la sélection est triviale.
        // Si l'opérateur est sléectionné, alors on sélectionne tout.
        Display displayOperator = (Display) displayToLay.getComponent(0);
        if (displayOperator.isSelected()) {
            // Sélectionne le display.
            displayToLay.select();
            // On purge la liste des éléments sélectionnés.
            selEvt.setAction(SelectionEvent.PURGE, null);
            displayToLay.fireSelectionEvent(selEvt);
            // On y ajoute os parenthèses
            selEvt.setAction(SelectionEvent.ADD, displayToLay);
            displayToLay.fireSelectionEvent(selEvt);
        }

        // On a vérifié la validité de la sélection de la puissance. On doit maitenant
        // la contrôler au niveau supérieur, au niveau du père.
        Display display = displayToLay;
        if (display.getParent() instanceof Display) {
            display = (Display) display.getParent();
            FormulaTreeStructure fts = (FormulaTreeStructure) display.getListener();
            if (fts.getFather() != null)
                ((DisplayLayout) display.getLayout()).validateSelection();
        }

        // On met à jour l'affichage.
        display.repaint();
    }
    
    /**
    * Checks the validity of the deselection.
    * @param display the display to deselect.
    */
    public void validateDeselection(Display display) {
        Display father = displayToLay;
        SelectionEvent selEvt = new SelectionEvent(father);
        
        // Si l'opérateur est sélectionné, alors il faut le déselectionner.
        if (father.isSelected()) {
            father.setNotSelected();
            // On enlève le display père de la liste des display sélectionnés.
            selEvt.setAction(SelectionEvent.REMOVE, father);
            father.fireSelectionEvent(selEvt);
            
            Display displayOperator = (Display) displayToLay.getComponent(0);
            Display argument = (Display) displayToLay.getComponent(1);
            
            if (display == displayOperator) {
                displayOperator.setNotSelected();
                selEvt.setAction(SelectionEvent.ADD, argument);
                father.fireSelectionEvent(selEvt);
            }
            else {
                displayOperator.setNotSelected();
                argument.deselect();
            }

            // Comme pour la sélection, on contrôle la validité de la désélection.
            if (father.getParent() instanceof Display) {
                father = (Display) father.getParent();
                FormulaTreeStructure fts = (FormulaTreeStructure) father.getListener();
                if (fts.getFather() != null)
                    ((DisplayLayout) father.getLayout()).validateDeselection(displayToLay);
            }
            
            // Hé oui, on contrôle la validité de la sélection... dans une désélection.
            // Toujours le même pb, est-ce que le nouvel état de la sélection (après
            // désélection donc) est syntaxiquement cohérent ?
            validateSelection();
            
            // On met à jour l'affichage.
            father.repaint();
        }        

    }
    
    /**
    * The display needs to be rebuilt. We do this.
    */
    public void rebuildDisplay() {
        // La taille des displays est probablement différente de ceux qui étaient
        // précédemment. On demande alors le recalcul des display ancêtres.
        displayToLay.computeAncestorsAttributes();
    }
}
