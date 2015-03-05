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
 * @param _parentNode The parental StructuredDomNode which holds our own reference spawns us into the DOM.
 *        parentNode can be any HTMLElement implementing the node interface, if omitted it fall backs to document.body.
 * @constructor
 */
function StructuredDomNode(_domNodeId, _parentNode)
{
    /** @var Logger */
    var logger = new Logger("verbose", null);

    /** @var Builder */
    var builder = new Builder();

    /** @var Unique ID to identify the DOM node */
    var domNodeId = _domNodeId;

    var parentNode = _parentNode;

    /** @var DomNode[] domNodeChildren */
    var domNodeChildren = [];

    /** @var HTMLStructure */
    var htmlStructure = new HtmlStructure(domNodeId + "_" + getNextDomId("htmlStructure"), this);
    var rootHtmlEntity = builder.createRandomHtmlEntity(htmlStructure);

    if (parentNode instanceof StructuredDomNode)
    {
        addElementToComponent(parentNode.getHtmlStructure().getLastHtmlEntity(), rootHtmlEntity.getHtmlElement());
    }
    else if (parentNode instanceof HTMLElement || parentNode instanceof Element)
    {// better check was to assert that parentNode implements the node interface
        parentNode.appendChild(rootHtmlEntity.getHtmlElement());
    }
    else
    {// we are a root node and have to append the initial DIV to document.body
        document.body.appendChild(rootHtmlEntity.getHtmlElement());
    }

    htmlStructure.setLastHtmlEntity(rootHtmlEntity.getHtmlElement());

    /**
     * Returns if this is a root node which means that there is no parent.
     *
     * @returns {boolean} True means that this is a root node.
     */
    this.isRootNode = function()
    {
        return (parentNode instanceof StructuredDomNode);
    };

    /**
     * Returns the unique ID of this StructuredDomNode.
     *
     * @returns The unique ID of this StructuredDomNode.
     */
    this.getDomNodeId = function()
    {
        return domNodeId;
    };

    /**
     * Returns the parentDomNode.
     *
     * @returns {*} The returned parentDomNode.
     */
    this.getParentDomNode = function()
    {
        var result;
        if (this.isRootNode()) result = null;
        else
        {
            result = parentNode;
        }
        logger.debug("[StructuredDomNode] getParentDomNode()", result);

        return result;
    };

    /**
     * Sets the parentNode.
     *
     * @param _parentNode The set parentNode.
     */
    this.setParentDomNode = function(_parentNode)
    {
        parentNode = _parentNode;
        // toDo: Trigger re-calc?
    };

     /**
     * Returns the HtmlStructure of this StructuredDomNode.
     *
     * @returns {*} The HtmlStructure of this StructuredDomNode.
     */
    this.getHtmlStructure = function()
    {
        return htmlStructure;
    };

    /**
     * Adds the provided HtmlStructure (HtmlEntity by HtmlEntity) into the StructuredDomNode.
     *
     * @param _htmlStructure The HtmlStructure that gets added into the StructuredDomNode.
     */
    this.addHtmlStructure = function(_htmlStructure)
    {
        logger.debug("[StructuredDomNode] addHtmlStructure()", htmlStructure);

        for (var i=0; i < _htmlStructure.length; i++)
        {
            this.addHtmlEntity(_htmlStructure.getEntityAtPos(i));
        }
    };

     /**
     * Adds the provided _htmlEntity into the HtmlStructure of the StructuredDomNode.
     *
     * @param _htmlEntity The _htmlEntity that gets added into the HtmlStructure of the StructuredDomNode..
     */
    this.addHtmlEntity = function(_htmlEntity)
    {
        logger.debug("[StructuredDomNode] addHtmlEntity()", _htmlEntity);

        htmlStructure.addHtmlEntity(_htmlEntity);
    };

    /**
     * Adds the provided DomElement into the list of children.
     *
     * @param _domNodeChildren The DomElement that gets added into the list of children.
     */
    this.addDomNodeChildren = function(_domNodeChildren)
    {
        logger.debug("[StructuredDomNode] addDomNodeChildren()", _domNodeChildren);

        domNodeChildren.push(_domNodeChildren);

        this.addHtmlStructure(_domNodeChildren.getHtmlStructure());
    };

    /**
     * Returns all DomNode objects from the list of children.
     *
     * @returns DomNode[] Contains all DomNode objects from the list of children.
     */
    this.getDomNodeChildren = function()
    {
        return domNodeChildren;
    };

}
