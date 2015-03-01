/**
 * This file is part of LivingDom - A DOM Manipulation Framework.
 * Please check the file LICENSE.md for information about the license.
 *
 * @copyright Markus Riegert 2015
 * @author Markus Riegert <desmodul@drow-land.de>
 */

var debugMode = "normal";

/**
 * Sets the debugmode with which the application logs about modifying the DomNodes.
 * Possible values are:
 * - silent:  Suppressing output completely to gain maximum render performance
 * - normal:  Noticeable Events (INFO), warnings and errors will be reported
 * - verbose: All log possibilities will be executed and reported in detail
 *
 * @param string _newDebugMode The new debug mode.
 */
function setDebugLevel(_newDebugMode)
{
    debugMode = _newDebugMode
}

function DomNode(_domNodeContent, _parentDomNode)
{
    var domNodeContent = _domNodeContent;
    var parentDomNode = _parentDomNode;
    var domNodeChildren = [];
    var isRootNode = false;

    if (parentDomNode instanceof DomNode)
    {
        addElementToComponent(parentDomNode.getDomNodeContent(), domNodeContent);
    }
    else
    {
        isRootNode = true;
        document.body.appendChild(domNodeContent);
    }
    domNodeChildren.push(domNodeContent);

    /**
     * Sets the provided DomElement overwriting existing ones.
     *
     * Unreferenced children would leak in the Browser and should be rescued somewhere before overwriting.
     *
     * @param _domNodeChildren The DomElement which replaces all children.
     */
    this.setDomNodeChildren = function(_domNodeChildren)
    {
        console.log("[DOM-NODE] setDomNodeChildren()", _domNodeChildren);
        domNodeChildren = _domNodeChildren;
    };

    /**
     * Adds the provided DomElement into the list of children.
     *
     * @param _domNodeChildren The DomElement that gets added into the list of children.
     */
    this.addDomNodeChildren = function(_domNodeChildren)
    {
        console.log("[DOM-NODE] addDomNodeChildren()", _domNodeChildren);
        domNodeChildren.push(_domNodeChildren);
        addElementToComponent(domNodeContent, _domNodeChildren.getDomNodeContent());
    };

    this.getDomNodeChildren = function()
    {
        console.log("[DOM-NODE] getDomNodeChildren()", domNodeChildren);
        return domNodeChildren;
    };

    this.getParentDomNode = function()
    {
        console.log("[DOM-NODE] getParentDomNode()", parentDomNode);
        return parentDomNode;
    };

    this.setParentDomNode = function(_parentDomNode)
    {
        console.log("[DOM-NODE] setParentDomNode()", _parentDomNode);
        removeElementFromComponent(parentDomNode.getDomNodeContent(), domNodeContent);
        addElementToComponent(_parentDomNode.getDomNodeContent(), domNodeContent);
        parentDomNode = _parentDomNode;
    };

    this.getDomNodeContent = function()
    {
        console.log("[DOM-NODE] getDomNodeContent()", domNodeContent);
        return domNodeContent;
    };

    this.setDomNodeContent = function(_domNodeContent)
    {
        console.log("[DOM-NODE] setDomNodeContent()", _domNodeContent);
        domNodeContent = _domNodeContent;
        domNodeChildren = [];
        setChildForComponent(parentDomNode.getDomNodeContent(), domNodeContent);
        this.setDomNodeChildren(domNodeContent.getDomNodeChildren());
    };

    this.isRoot = function()
    {
        console.log("[DOM-NODE] isRootNode()", isRootNode);
        return isRootNode;
    };

}
