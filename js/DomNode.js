/**
 * This file is part of LivingDom - A DOM Manipulation Framework.
 * Please check the file LICENSE.md for information about the license.
 *
 * @copyright Markus Riegert 2015
 * @author Markus Riegert <desmodul@drow-land.de>
 */

/**
 * Constructs a DomNode from the provided input parameters.
 *
 * @param _domNodeId Unique ID to identify the HTMLElement.
 * @param _domNodeContent The raw HTML content of the DomNode.
 * @param _parentDomNode The parent DomNode which holds the reference of this node and spawned it into the DOM.
 * @constructor
 */
function DomNode(_domNodeId, _domNodeContent, _parentDomNode)
{
    /** @var Unique ID to identify the HTMLElement */
    var domNodeId = _domNodeId;

    /** @var HTMLElement domNodeContent */
    var domNodeContent = _domNodeContent;
    /** @var DomNode parentDomNode */
    var parentDomNode = _parentDomNode;

    /** @var DomNode[] domNodeChildren */
    var domNodeChildren = [];
    var isRootNode = false;

    if (!(parentDomNode instanceof DomNode))
    {// no parent DomNode means we are a root node
        isRootNode = true;
        document.body.appendChild(domNodeContent);
    }

    /**
     * Returns the unique ID of this DomNode.
     *
     * @returns The unique ID of this DomNode.
     */
    this.getDomNodeId = function()
    {
        return domNodeId;
    };

    /**
     * Sets the provided DomElement overwriting existing ones.
     *
     * Unreferenced children would leak in the Browser and should be rescued somewhere before overwriting.
     *
     * @param _domNodeChildren The DomElement which replaces all children.
     */
    this.setDomNodeChildren = function(_domNodeChildren)
    {
        if (matchesDebugMode("debug"))
        {
            console.log("[DOM-NODE] setDomNodeChildren()", _domNodeChildren);
        }
        domNodeChildren = _domNodeChildren;
    };

    /**
     * Adds the provided DomElement into the list of children.
     *
     * @param _domNodeChildren The DomElement that gets added into the list of children.
     */
    this.addDomNodeChildren = function(_domNodeChildren)
    {
        if (matchesDebugMode("debug"))
        {
            console.log("[DOM-NODE] addDomNodeChildren()", _domNodeChildren);
        }
        domNodeChildren.push(_domNodeChildren);
        addElementToComponent(domNodeContent, _domNodeChildren.getDomNodeContent());
    };

    /**
     * Returns all DomNode objects from the list of children.
     *
     * @returns DomNode[] Contains all DomNode objects from the list of children.
     */
    this.getDomNodeChildren = function()
    {
        if (matchesDebugMode("debug"))
        {
            console.log("[DOM-NODE] getDomNodeChildren()", domNodeChildren);
        }
        return domNodeChildren;
    };

    /**
     * Returns the parent DomNode which holds the reference to this DomNode.
     *
     * @returns DomNode The parent DomNode if it exist, otherwise null.
     */
    this.getParentDomNode = function()
    {
        if (matchesDebugMode("debug"))
        {
            console.log("[DOM-NODE] getParentDomNode()", parentDomNode);
        }
        return parentDomNode;
    };

    /**
     * Replaces the set parent DomNode with a new one and triggers all rendering events on the DOM.
     *
     * @param _parentDomNode The parent DomNode if it exist, otherwise null.
     */
    this.setParentDomNode = function(_parentDomNode)
    {
        if (matchesDebugMode("debug"))
        {
            console.log("[DOM-NODE] setParentDomNode()", _parentDomNode);
        }
        removeElementFromComponent(parentDomNode.getDomNodeContent(), domNodeContent);
        addElementToComponent(_parentDomNode.getDomNodeContent(), domNodeContent);
        parentDomNode = _parentDomNode;
    };

    /**
     * Returns the configured HTMLElement of this DomNode.
     *
     * @returns The configured HTMLElement of this DomNode.
     */
    this.getDomNodeContent = function()
    {
        if (matchesDebugMode("debug"))
        {
            console.log("[DOM-NODE] getDomNodeContent()", domNodeContent);
        }
        return domNodeContent;
    };

    /**
     * Replaces the set DomNode content with a new one and triggers all rendering events on the DOM.
     *
     * @param _domNodeContent The HTMLElement which replaces hte configured .
     */
    this.setDomNodeContent = function(_domNodeContent)
    {
        if (matchesDebugMode("debug"))
        {
            console.log("[DOM-NODE] setDomNodeContent()", _domNodeContent);
        }
        domNodeContent = _domNodeContent;
        domNodeChildren = [];
        setChildForComponent(parentDomNode.getDomNodeContent(), domNodeContent);
        this.setDomNodeChildren(domNodeContent.getDomNodeChildren());
    };

    /**
     * Returns if this DomNode is a root node.
     *
     * @returns bool True means that this DomNode is a root node.
     */
    this.isRoot = function()
    {
        if (matchesDebugMode("debug"))
        {
            console.log("[DOM-NODE] isRootNode()", isRootNode);
        }
        return isRootNode;
    };

    /**
     * Debugs detail informatioon about the state of this DomNode.
     */
    this.debugDomNode = function()
    {
        if (matchesDebugMode("debug"))
        {

        }
    }

}
