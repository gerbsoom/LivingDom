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

/**
 * Returns the next ID for the given context and increments it.
 *
 * @param _context The context for which the next ID is returned.
 * @returns {String} The next ID for the given context.
 */
function getNextDomId(_context)
{
    if (_context == "structuredDomNode")
    {
        return "DOMNODE" + nextStructuredDomNodeId++;
    }
    if (_context == "htmlStructure")
    {
        return "STRUCTURE" + nextHtmlStructureId++;
    }
    if (_context == "subElement")
    {
        return "ENTITY" + nextSubElementId++;
    }
    return null;
}

/**
 * Seeks and returns the next ID for the given context without incrementing it.
 *
 * @param _context The context for which the next ID is returned.
 * @returns {String} The next ID for the given context.
 */
function seekNextDomId(_context)
{
    if (_context == "structuredDomNode") return nextStructuredDomNodeId;

    if (_context == "htmlStructure") return nextHtmlStructureId;

    if (_context == "subElement") return nextSubElementId;

    return null;
}

/**
 * Sets the provided getHtmlElement as children to the requested component.
 *
 * @param _component The component where the provided getHtmlElement gets set as children.
 * @param _element The getHtmlElement that gets set as children to the component.
 */
function setChildForComponent(_component, _element)
{
    _component.setChildren(_element);
}

/**
 * Adds the provided getHtmlElement to the requested component.
 *
 * @param _component The component where the provided getHtmlElement gets added.
 * @param _element The getHtmlElement that gets added to the component.
 */
function addElementToComponent(_component, _element)
{
    _component.appendChild(_element);
}

/**
 * Removes the provided getHtmlElement from the requested component.
 *
 * @param _component The component from where the provided getHtmlElement gets removed.
 * @param _element The getHtmlElement that gets deleted from the component.
 */
function removeElementFromComponent(_component, _element)
{
    _component.removeChild(_element);
}
