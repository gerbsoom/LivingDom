/**
 * This file is part of LivingDom - A DOM Manipulation Framework.
 * Please check the file LICENSE.md for information about the license.
 *
 * @copyright Markus Riegert 2015
 * @author Markus Riegert <desmodul@drow-land.de>
 */

/**
 * Core library functions to manipulate the DOM and generate HTMLElements and IDs.
 */

var nextStructuredDomNodeId = 0;
var nextHtmlStructureId = 0;
var nextSubElementId = 0;

function getNextDomId(_context)
{
    if (_context == "structuredDomNode")
    {
        return nextStructuredDomNodeId++;
    }
    if (_context == "nextHtmlStructure")
    {
        return nextHtmlStructureId++;
    }
    if (_context == "nextSubElement")
    {
        return nextSubElementId++;
    }
    return null;
}

function seekNextDomId(_context)
{
    if (_context == "structuredDomNode") return nextStructuredDomNodeId;

    if (_context == "nextHtmlStructure") return nextHtmlStructureId;

    if (_context == "nextSubElement") return nextSubElementId;

    return null;
}

/**
 * Adds the provided getAppendNode to the requested component.
 *
 * @param _component The component where the provided getAppendNode gets added.
 * @param _element The getAppendNode that gets added to the component.
 */
function addElementToComponent(_component, _element)
{
    if (matchesDebugMode("debug"))
    {
        console.log("[LIBRARY] addElementToComponent()", _component, _element);
    }
    _component.appendChild(_element);
}

/**
 * Removes the provided getAppendNode from the requested component.
 *
 * @param _component The component from where the provided getAppendNode gets removed.
 * @param _element The getAppendNode that gets deleted from the component.
 */
function removeElementFromComponent(_component, _element)
{
    if (matchesDebugMode("debug"))
    {
        console.log("[LIBRARY] removeElementFromComponent()", _component, _element);
    }
    _component.removeChild(_element);
}

/**
 * Sets the provided getAppendNode as children to the requested component.
 *
 * @param _component The component where the provided getAppendNode gets set as children.
 * @param _element The getAppendNode that gets set as children to the component.
 */
function setChildForComponent(_component, _element)
{
    if (matchesDebugMode("debug"))
    {
        console.log("[LIBRARY] setChildForComponent()", _component, _element);
    }
    _component.setChildren(_element);
}

/**
 * Generates a DIV container for the provided parameters.
 *
 * @param _class Sets the class of the generated DIV container.
 * @param _tagId Sets the tagID of the generated DIV container.
 * @param _innerText Adds an inner text into the  DIV container.
 * @param _style Adds an stylesheet string into the  DIV container.
 * @returns {HTMLElement} The generated DIV container as HTMLElement.
 */
function generateDiv(_class, _tagId, _innerText, _style)
{
    var newDiv = document.createElement('div');
    if (_class) newDiv.setAttribute('class', _class);
    if (_tagId) newDiv.setAttribute('id', _tagId);
    if (_innerText != null) newDiv.innerHTML = _innerText;
    if (_style != null) newDiv.setAttribute('style', _style);
    return newDiv;
}

/**
 * Returns an object which is derived from the provided object.
 *
 * @param _object The object from which the returned object inherits from.
 * @return The return object which is derived from the provided object.
 */
function inheritFrom(_object)
{
    function CONSTRUCTOR()
    {// Dummy constructor
    }
    // inherit from the provided object
    CONSTRUCTOR.prototype = _object;
    // return back derived object
    return new CONSTRUCTOR();
}
