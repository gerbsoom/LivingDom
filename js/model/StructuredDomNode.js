/**
 * This file is part of LivingDom - A DOM Manipulation Framework.
 * Please check the file LICENSE.md for information about the license.
 *
 * @copyright Markus Riegert 2015
 * @author Markus Riegert <desmodul@drow-land.de>
 */

/**
 * Constructs a StructuredDomNode from the provided input parameters.
 *
 * @param _domNodeId Unique ID to identify the HTMLElement.
 * @param _parentDomNode The parent DomNode which holds the reference of this node and spawned it into the DOM.
 * @constructor
 */
function StructuredDomNode(_domNodeId, _parentDomNode)
{
    /** @var Unique ID to identify the DOM node */
    var domNodeId = _domNodeId;

    /** @var StructuredDomNode */
    var parentDomNode = _parentDomNode;

    /** @var DomNode[] domNodeChildren */
    var domNodeChildren = [];

    var isRootNode = false;
    if (!(parentDomNode instanceof StructuredDomNode))
    {// no parent DomNode means we are a root node
        isRootNode = true;
    }

    /** @var HTMLStructure */
    var domNodeHtmlStructure = new HtmlStructure(domNodeId + "_" + getNextDomId("nextHtmlStructure"), parentDomNode);

    this.isRootNode = function()
    {
        return isRootNode;
    };

    this.getDomId = function()
    {
        return domNodeId;
    };

    this.getParentDomNode = function()
    {
        if (isRootNode)
        {
            return null;
        }
        else return parentDomNode;
    };

    this.getParentAppendNode = function()
    {
        if (isRootNode)
        {
            return document.body;
        }
        else return parentDomNode.getHtmlStructure().getLastHtmlEntity().getAppendNode();
    };

    /**
     * Returns the configured HTMLElement of this DomNode.
     *
     * @returns {*} The configured HTMLElement of this DomNode.
     */
    this.getHtmlStructure = function()
    {
        if (matchesDebugMode("debug"))
        {
            console.log("[DOM-NODE] getDomNodeContent()", domNodeHtmlStructure);
        }
        return domNodeHtmlStructure;
    };

    /**
     * Adds the provided HtmlStructure (HtmlEntity by HtmlEntity) into the StructuredDomNode.
     *
     * @param _htmlStructure The HtmlStructure that gets added into the StructuredDomNode.
     */
    this.addHtmlStructure = function(_htmlStructure)
    {
        for (var i=0; i < _htmlStructure.length; i++)
        {
            this.addHtmlEntity(_htmlStructure[i]);
        }
    };

     /**
     * Adds the provided _htmlEntity into the HtmlStructure of the StructuredDomNode.
     *
     * @param _htmlEntity The _htmlEntity that gets added into the HtmlStructure of the StructuredDomNode..
     */
    this.addHtmlEntity = function(_htmlEntity)
    {
        domNodeHtmlStructure.addHtmlEntity(_htmlEntity);
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
            console.log("[STRUCTURED-DOM-NODE] addDomNodeChildren()", _domNodeChildren);
        }
        domNodeChildren.push(_domNodeChildren);

        var providedDomNodeHtmlStructure = _domNodeChildren.getHtmlStructure();
        for (var i=0; i < providedDomNodeHtmlStructure.length; i++)
        {
            this.addHtmlEntity(providedDomNodeHtmlStructure.getEntityAtPos(i));
        }
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

}
