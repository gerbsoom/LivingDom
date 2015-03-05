/**
 * This file is part of LivingDom - A DOM Manipulation Framework.
 * Please check the file LICENSE.md for information about the license.
 *
 * @copyright Markus Riegert 2015
 * @author Markus Riegert <desmodul@drow-land.de>
 */

/**
 * Constructs an HtmlEntity from the provided input parameters.
 *
 * @param _type The type of the HtmlEntity.
 * @param _subElementId The unique ID to identify the HtmlEntity.
 * @param _classId The css class which is completely written on this HtmlEntity.
 * @param _styleSetConfig A styleSetConfig which gets written (last) on this HtmlEntity.
 * @param _htmlStructure The htmlStructure where the underlying HtmlEntity is contained in.
 * @constructor
 */
function HtmlEntity(_type, _subElementId, _classId, _styleSetConfig, _htmlStructure)
{
    var type = _type;
    var classId = _classId;
    var subElementId = _subElementId;
    var htmlStructure = _htmlStructure;
    var htmlElement = document.createElement(_type);

    htmlElement.setAttribute('id', subElementId);
    if (_classId) htmlElement.setAttribute('class', _classId);
    if (_styleSetConfig != null) htmlElement.setAttribute('style', _styleSetConfig);

    /**
     * Returns the unique ID of this HtmlEntity.
     *
     * @returns The unique ID of this HtmlEntity.
     */
    this.getSubElementId = function()
    {
        return subElementId;
    };

    /**
     * Returns the class ID of this HtmlEntity.
     *
     * @returns The class ID of this HtmlEntity.
     */
    this.getClassId = function()
    {
        return classId;
    };

    /**
     * Return the type of the underlying HtmlElement.
     *
     * @returns {*}
     */
    this.getType = function()
    {
        return type;
    };

    /**
     * Returns the underlying element as node for appending.
     *
     * @returns HTMLElement The underlying element as node for appending.
     */
    this.getHtmlElement = function()
    {
        return htmlElement;
    };

    /**
     * Returns the HtmlStructure where the HtmlEntity is contained in.
     *
     * @returns HtmlStructure The HtmlStructure where the HtmlEntity is contained in.
     */
    this.getHtmlStructure = function()
    {
        return htmlStructure;
    };

    /**
     * Sets the HtmlStructure where the HtmlEntity is contained in.
     *
     * @param _htmlStructure Sets the HtmlStructure where the HtmlEntity is contained in.
     */
    this.setHtmlStructure = function(_htmlStructure)
    {
        htmlStructure = _htmlStructure;
    };

    /**
     * Sets the style attribute for the underlying Entity.
     *
     * @param _styleAttribute The set style attribute.
     */
    this.setStyleAttribute = function(_styleAttribute)
    {
        htmlElement.setAttribute('style', _styleAttribute);
    };

}
