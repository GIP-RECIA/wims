/*
$Id: Selectable.java,v 1.3 2003/02/18 11:48:46 sander Exp $
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


package fr.ove.openmath.jome.behaviour;

/**
* The interface to implement if we want selection abilities.
*
* @author Â© 1999 DIRAT Laurent
* @version 2.0 29/06/1999
*/
public interface Selectable {
    /**
    * Selects the instance.<BR>
    * In the case of an instance composed by different elements (for example trees), this 
    * method is recursive, and then selects the different elements.
    */
    public void select();
    
    /**
    * Marks the instance as selected.
    */
    public void setSelected();
    
    /**
    * Deselects the instance.<BR>
    * In the case of an instance composed by different elements (for example trees), this 
    * method is recursive, and then deselects the different elements.
    */
    public void deselect();
    
    /**
    * Marks the instance as not selected.
    */
    public void setNotSelected();
    
    /**
    * Checks if the instance is selected.
    * @returns <CODE>true</CODE> if the instance is selected. <CODE>false</CODE>
    * otherwise.
    */
    public boolean isSelected();
    
    /**
    * In the case of an instance composed by different elements (for example trees), this 
    * method checks if there are some selected elements.
    * @returns <CODE>true</CODE> if the instance has selected elements. <CODE>false</CODE>
    * otherwise.
    */
    public boolean gotSelectedElements();
}