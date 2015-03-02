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
 * @param _parentDomNode The parent DomNode which holds our reference and spawned us into the DOM.
 * @constructor
 */
function HtmlEntity(_type, _subElementId, _classId, _styleSetConfig, _parentDomNode)
{
    var type = _type;
    var subElementId = _subElementId;

    /** @var StructuredDomNode parentNode */
    var parentDomNode = _parentDomNode;

    var element = document.createElement(_type);
    if (_classId) element.setAttribute('class', _classId);
    if (subElementId) element.setAttribute('id', subElementId);
    if (_styleSetConfig != null) element.setAttribute('style', _styleSetConfig);

    this.setStyleAttribut = function(_styleAttribut)
    {
        element.setAttribute('style', _styleAttribut);
    };

    /**
     * Returns the underlying element as node for appending.
     *
     * @returns {*} The underlying element as node for appending..
     */
    this.getAppendNode = function()
    {
        return element;
    };

    this.getParentDomNode = function()
    {
        return parentDomNode;
    };

    this.getType = function()
    {
        return type;
    };

    /**
     * Returns the unique ID of this HtmlEntity.
     *
     * @returns The unique ID of this HtmlEntity.
     */
    this.getSubElementId = function()
    {
        return subElementId;
    };

    this.generateBasicRandomStyleSheet = function()
    {
        var color = "#";
        var bgColor = "#";
        var randomStileSheet;

        for (var i=1; i<=6; i++)
        {
            color += parseInt(Math.random()*16).toString(16);

            bgColor += parseInt(Math.random()*16).toString(16);
        }
        console.log("[HTML-ENTITY] Debug generated random color: ", color);
        randomStileSheet = "background-color: " + bgColor + "; color: " + color;
        randomStileSheet += "; width: " + (parseInt(Math.random()*25)+15) + "px";
        randomStileSheet += "; height: " + (parseInt(Math.random()*25)+25) + "px";

        if (parseInt(Math.random()*10) >= 5)
        {
            randomStileSheet += "; float: left";
        }
        else randomStileSheet += "; float: right";

        return randomStileSheet;
    }

}
