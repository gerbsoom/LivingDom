/**
 * This file is part of LivingDom - A DOM Manipulation Framework.
 * Please check the file LICENSE.md for information about the license.
 *
 * @copyright Markus Riegert 2015
 * @author Markus Riegert <desmodul@drow-land.de>
 */

/**
 * Constructs an HtmlStructure from the provided input parameters.
 *
 * @param _structureId The unique ID to identify the HtmlStructure.
 * @param _parentDomNode The parent DomNode which holds our reference and spawned us into the DOM.
 * @constructor
 */
function HtmlStructure(_structureId, _parentDomNode)
{
    var structureId = _structureId;

    /** @var HtmlEntity[] */
    var htmlEntities = [];

    /** @var HtmlEntity */
    var lastHtmlEntity;

    /** @var StructuredDomNode parentDomNode */
    var parentDomNode = _parentDomNode;

    /**
     * Returns a reference to the lastly added HtmlEntity for appending DOM nodes.
     *
     * @returns {*} The lastly added HtmlEntity.
     */
    this.getLastHtmlEntity = function()
    {
        return lastHtmlEntity;
    };

    /**
     * Returns the StructuredDomNode of the parentNode.
     *
     * @returns {*} The StructuredDomNode of the parentNode.
     */
    this.getParentDomNode = function()
    {
        return parentDomNode;
    };

    /**
     * Returns the underlying getAppendNode.
     *
     * @returns The underlying getAppendNode.
     */
    this.getEntityAtPos = function(_pos)
    {
        if (htmlEntities[_pos] != undefined)
        {
            return htmlEntities[_pos];
        }
        return null;
    };

    this.addHtmlEntity = function(_htmlEntity)
    {
        htmlEntities.push(_htmlEntity);
        if (lastHtmlEntity != undefined)
        {
            addElementToComponent(lastHtmlEntity.getAppendNode(), _htmlEntity.getAppendNode());
        }
        else if (parentDomNode instanceof StructuredDomNode)
        {
            addElementToComponent(parentDomNode.getHtmlStructure().getLastHtmlEntity().getAppendNode(), _htmlEntity.getAppendNode());
        }
        else addElementToComponent(document.body, _htmlEntity.getAppendNode());

        lastHtmlEntity = _htmlEntity;
    };

    this.addHtmlStructure = function(_htmlStructure)
    {
        for (var i=0; i<_htmlStructure.length; i++)
        {
            this.addHtmlEntity(_htmlStructure.getEntityAtPos(i));
        }
    };

    /**
     * Returns the ID of this HtmlStructure.
     *
     * @returns The ID of this HtmlStructure.
     */
    this.getStructureId = function()
    {
        return structureId;
    };

}
