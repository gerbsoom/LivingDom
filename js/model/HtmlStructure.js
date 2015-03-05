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
 * @param _structureDomNode The DomNode which holds our reference and spawned us into the DOM.
 * @constructor
 */
function HtmlStructure(_structureId, _structureDomNode)
{
    var structureId = _structureId;

    /** @var HtmlEntity[] */
    var htmlEntities = [];

    /** @var HtmlEntity */
    var lastHtmlEntity;

    /** @var StructuredDomNode */
    var structureDomNode = _structureDomNode;

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
     * Sets a reference to the last added HtmlEntity for appending DOM nodes.
     *
     * @param _lastHtmlEntity Sets the last added HtmlEntity.
     */
    this.setLastHtmlEntity = function(_lastHtmlEntity)
    {
        lastHtmlEntity = _lastHtmlEntity;
    };

    /**
     * Returns the StructuredDomNode where we the structure is contained.
     *
     * @returns {*} The StructuredDomNode where we the structure is contained.
     */
    this.getStructuredDomNode = function()
    {
        return structureDomNode;
    };

    /**
     * Returns the HtmlEntity at index _pos.
     *
     * @returns HtmlEntity The HtmlEntity at index _pos.
     */
    this.getEntityAtPos = function(_pos)
    {
        if (htmlEntities[_pos] != undefined)
        {
            return htmlEntities[_pos];
        }
        return null;
    };

    /**
     * Adds all HtmlEntities contained in the provided HtmlStructure.
     *
     * @param _htmlStructure Contains all HtmlEntities that get added.
     */
    this.addFromStructure = function(_htmlStructure)
    {
        for (var i=0; i<_htmlStructure.length; i++)
        {
            this.addHtmlEntity(_htmlStructure.getEntityAtPos(i));
        }
    };

    /**
     * Adds an HtmlEntities.
     *
     * @param _htmlEntity The HtmlEntity that gets added.
     */
    this.addHtmlEntity = function(_htmlEntity)
    {
        htmlEntities.push(_htmlEntity);
        if (lastHtmlEntity != undefined)
        {
            addElementToComponent(lastHtmlEntity.getHtmlElement(), _htmlEntity.getHtmlElement());
        }
        lastHtmlEntity = _htmlEntity;
    };

    /*
    DOES NOT WORK AS INTENDED...
    ___________________________________
    this.removeAllEntities = function()
    {
        for (var i=0; i<htmlEntities.length; i++)
        {
            this.removeEntity(htmlEntities[i]);
        }
    };

    this.removeEntity = function(_htmlEntity)
    {
        _htmlEntity.getHtmlElement().parentNode.removeChild(_htmlEntity.getHtmlElement());
    };
    */

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
