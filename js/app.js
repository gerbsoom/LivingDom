/**
 * This file is part of LivingDom - A DOM Manipulation Framework.
 * Please check the file LICENSE.md for information about the license.
 *
 * @copyright Markus Riegert 2015
 * @author Markus Riegert <desmodul@drow-land.de>
 */

/** @var Logger */
var logger;
/** @var Builder */
var builder;

var interval;

/** @var StructuredDomNode */
var rootNode;
/** @var StructuredDomNode[] */
var domNodes = [];

/**
 * Retrieves the next StructuredDomNode for modification.
 *
 * @returns {StructuredDomNode} The next StructuredDomNode.
 */
function getNextStructuredDomNode()
{
    return domNodes[parseInt(Math.random()*domNodes.length)];
}

/**
 * Starts the application and sets up the timer with the provided timeout.
 *
 * @param _timeout The timeout between DOM modifications.
 */
function startApp(_timeout)
{
    builder = new Builder();
    logger = new Logger("info", null);
    //addStructuredElementToDom();
    initializeRootNodes();
    interval = setInterval(modificateDom, _timeout);
}

/**
 * Clears the timer interval and stops the modification of the DOM.
 */
function stopDomManipulation()
{
    clearInterval(interval);
}

/**
 * Initialize all TD tags in the table as starting point for the operation.
 */
function initializeRootNodes()
{
    var rootElement;
    var nextRootNode;
    for (var i=1; i<=3; i++)
    {
        for (var i2=1; i2<=3; i2++)
        {
            rootElement = document.getElementById("dom-table-td_" + i + i2);
            nextRootNode = new StructuredDomNode(getNextDomId("structuredDomNode"), rootElement);
            domNodes.push(nextRootNode);
        }
    }
}

/**
 * Executes a random DOM manipulation task.
 */
function modificateDom()
{
    var randomOperation = parseInt(Math.random()*100);
    if (randomOperation % 2 == 1)
    {
        addStructuredElementToDom();
    }
    else if (randomOperation % 2 == 0)
    {
        addHtmlStructureToHtmlStructure();
    }
}

/**
 * Adds a random HtmlStructure to a random StructuredDomNode.
 */
function addHtmlStructureToHtmlStructure()
{
    logger.info("[APP] addHtmlStructureToHtmlStructure()");
    var nextStructuredDomNode = getNextStructuredDomNode();
    nextStructuredDomNode.addHtmlStructure(builder.createRandomHtmlStructure(parseInt(Math.random()*10), nextStructuredDomNode));
}

/**
 * Adds a new StructuredDomNode to a random StructuredDomNode.
 */
function addStructuredElementToDom()
{
    logger.info("[APP] addStructuredElementToDom()");

    var randomHtmlStructure;

    if (seekNextDomId("structuredDomNode") == 0)
    {
        var startElement = document.getElementById("dom-table-div-root");
        rootNode = new StructuredDomNode(getNextDomId("structuredDomNode"), startElement);
        domNodes.push(rootNode);
    }
    else
    {
        var nextStructuredDomNode = getNextStructuredDomNode();
        if (!(nextStructuredDomNode instanceof StructuredDomNode))
        {
            nextStructuredDomNode = rootNode;
        }

        randomHtmlStructure = builder.createRandomHtmlStructure(5, nextStructuredDomNode);
        var newStructuredDomNode = new StructuredDomNode(getNextDomId("structuredDomNode"), nextStructuredDomNode);
        newStructuredDomNode.addHtmlStructure(randomHtmlStructure);

        nextStructuredDomNode.addDomNodeChildren(newStructuredDomNode);

        domNodes.push(newStructuredDomNode);
    }
    if (seekNextDomId("structuredDomNode") >= 500)
    {
        stopDomManipulation();
    }

}
