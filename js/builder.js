/**
 * This file is part of LivingDom - A DOM Manipulation Framework.
 * Please check the file LICENSE.md for information about the license.
 *
 * @copyright Markus Riegert 2015
 * @author Markus Riegert <desmodul@drow-land.de>
 */

/**
 * Constructs a Builder to generate random DOM content.
 *
 * @constructor
 */
function Builder()
{
    /**
     * Creates a random HtmlStructure
     *
     * @param _numContent The amount of random HtmlEntities that will be added to the created HtmlStructure
     * @param _structuredDomNode The StructuredDomNode where the created HtmlStructure will be contained.
     * @returns {HtmlStructure} The created random HtmlStructure.
     */
    this.createRandomHtmlStructure = function(_numContent, _structuredDomNode)
    {
        var htmlStructure = new HtmlStructure(_structuredDomNode.getDomNodeId + "_" + getNextDomId("htmlStructure"), _structuredDomNode);
        for (var i=1; i<=_numContent; i++)
        {
            htmlStructure.addHtmlEntity(this.createRandomHtmlEntity(htmlStructure));
        }
        return htmlStructure;
    };

    /**
     * Creates a random HtmlEntity containing  for now hardcoded a DIV.
     *
     * @param _htmlStructure The HtmlStructure where the created HtmlEntity will be contained.
     * @returns {HtmlEntity} The created HtmlEntity.
     */
    this.createRandomHtmlEntity = function(_htmlStructure)
    {
        var htmlEntity;
        htmlEntity = new HtmlEntity("div", _htmlStructure.getStructureId() + "_" + getNextDomId("subElement"), "basicDiv", this.generateBasicRandomStyleSheet(),  _htmlStructure);
        return htmlEntity;
    };

    /**
     * Generates a random style attribute string.
     *
     * @returns {string} The generated random style attribute string.
     */
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

        randomStileSheet = "background-color: " + bgColor + "; color: " + color;
        randomStileSheet += "; width: " + (parseInt(Math.random()*100)+5) + "px";
        randomStileSheet += "; height: " + (parseInt(Math.random()*100)+5) + "px";

        if (parseInt(Math.random()*10) >= 5)
        {
            randomStileSheet += "; float: left";
        }
        else randomStileSheet += "; float: right";

        return randomStileSheet;
    };

}
