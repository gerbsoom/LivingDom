/**
 * This file is part of LivingDom - A DOM Manipulation Framework.
 * Please check the file LICENSE.md for information about the license.
 *
 * @copyright Markus Riegert 2015
 * @author Markus Riegert <desmodul@drow-land.de>
 */

/**
 * ClickHandler allows to register an HtmlEntity with its unique ID for fast retrieving referenced data from it.
 *
 * @constructor
 */
function ClickHandler()
{
    var registeredElements = [];

    /**
     * Registers the unique element ID with an HtmlEntity reference to further handle click events.
     *
     * @param _elementId The unique ID of the element that register at the ClickHandler.
     * @param _htmlEntity The HtmlEntity/element that gets registered at the ClickHandler.
     */
    this.registerElement = function(_elementId, _htmlEntity)
    {
        // toDo: Check why there come functions in inszted of elemnt IDs
        registeredElements[_elementId] = _htmlEntity;
    };

    /**
     * Handles click events from the given element ID of the corresponding HtmlEntity.
     *
     * @param _elementId The element ID of the HtmlEntity where the click event was created..
     */
    this.handleClick = function(_elementId)
    {
        console.log("Fetched clicked for element with ID " + _elementId);
        var htmlStructure = registeredElements[_elementId].getHtmlStructure();
        var parentDomNode = htmlStructure.getStructuredDomNode().getParentDomNode();

        // parentDomNode.getHtmlStructure().removeAllEntities();
        // all HtmlStructures do NOT contain any HtmlEntities...?
        getNextStructuredDomNode().addHtmlStructure(htmlStructure);
    }
}
