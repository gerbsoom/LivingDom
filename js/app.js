/**
 * This file is part of LivingDom - A DOM Manipulation Framework.
 * Please check the file LICENSE.md for information about the license.
 *
 * @copyright Markus Riegert 2015
 * @author Markus Riegert <desmodul@drow-land.de>
 */

var debugMode = "normal";
var interval;

var structuredRootNode;
var structuredDomNodeId = 0;
var structuredDomNodes = [];

function getNextStructuredDomNode()
{
    return structuredDomNodes.pop();
}

function startDomManipulation()
{
    interval = setInterval(executeModifyTask, 100);
}

function stopDomManipulation()
{
    clearInterval(interval);
}

function executeModifyTask()
{
    addStructuredElementToDom();
}

function addStructuredElementToDom()
{
    var randomHtmlStructure;

    if (seekNextDomId("structuredDomNode") == 0)
    {
        structuredRootNode = new StructuredDomNode(getNextDomId("structuredDomNode"), null);
        randomHtmlStructure = createRandomHtmlStructure(1, null);
        structuredRootNode.addHtmlStructure(randomHtmlStructure);

        var specificTableTdDiv = document.getElementById("thediv");
        console.log("specificTableTdDiv", specificTableTdDiv);
        //document.body.appendChild(structuredRootNode.getHtmlStructure().getLastHtmlEntity().getAppendNode());
        specificTableTdDiv.appendChild(randomHtmlStructure.getEntityAtPos(0).getAppendNode());
        structuredDomNodes.push(structuredRootNode);
    }
    else
    {
        console.log("[APPLICATION_STRUCTURED] Generate and add DomNode for dom...", seekNextDomId("structuredDomNode"));

        var nextStructuredDomNode = getNextStructuredDomNode();
        if (!(nextStructuredDomNode instanceof StructuredDomNode))
        {
            nextStructuredDomNode = structuredRootNode;
        }

        //var parentNodeForAppending = nextStructuredDomNode.getParentNodeForAppending();
        randomHtmlStructure = createRandomHtmlStructure(5, nextStructuredDomNode);
        var newStructuredDomNode = new StructuredDomNode(getNextDomId("structuredDomNode"), nextStructuredDomNode);
        newStructuredDomNode.addHtmlStructure(randomHtmlStructure);
        document.body.appendChild(structuredRootNode.getHtmlStructure().getLastHtmlEntity().getAppendNode());

        addElementToComponent(nextStructuredDomNode.getHtmlStructure().getLastHtmlEntity().getAppendNode(),
                              structuredRootNode.getHtmlStructure().getLastHtmlEntity().getAppendNode());

        nextStructuredDomNode.addDomNodeChildren(newStructuredDomNode);

        structuredDomNodes.push(newStructuredDomNode);
        structuredDomNodes.push(nextStructuredDomNode);
    }
    if (seekNextDomId("structuredDomNode") >= 500)
    {
        stopDomManipulation();
        console.log("[APPLICATION_STRUCTURED] domNodes: ", structuredDomNodes);
    }
}

function createRandomHtmlStructure(_numContent, _parentNode)
{
    var htmlStructure = new HtmlStructure(getNextDomId("nextHtmlStructure"), _parentNode);
    for (var i=1; i<=_numContent; i++)
    {
        htmlStructure.addHtmlEntity(createRandomHtmlEntity(_parentNode));
    }
    return htmlStructure;
}

function createRandomHtmlEntity(_parentNode)
{
    var htmlEntity;
    htmlEntity = new HtmlEntity("div", getNextDomId("nextSubElement"), "basicDiv", null,  _parentNode);
    return htmlEntity;
}

/**
 * Sets the debug mode with which the application logs when modifying the DomNodes.
 *
 * Possible values are:
 * - silent:  Suppressing output completely to gain maximum render performance
 * - normal:  Noticeable Events (INFO), warnings and errors will be reported
 * - verbose: All log possibilities will be executed and reported in detail
 *
 * @param _newDebugMode The new debug mode used for logging
 */
function setDebugMode(_newDebugMode)
{
    if (debugMode != "silent" && debugMode != _newDebugMode)
    {
        console.log("Changing debug mode from ", debugMode, " to ", _newDebugMode);
    }
    debugMode = _newDebugMode;
}

/**
 * Checks if the provided debug level is contained in the configured mode.
 *
 * @param _debugLevel The debug level for which the check is done.
 * @returns bool True if the debug level is contained in the mode.
 */
function matchesDebugMode(_debugLevel)
{
    if (debugMode != "silent")
    {
        if ((debugMode == "verbose") || (debugMode == "normal" && _debugLevel != "debug"))
        {
            return true;
        }
    }
    return false;
}

/**
 * Debugs the message if the level is contained in the mode.
 *
 * @param _debugLevel The debug level of the message.
 * @param _message The message that gets debugged.
 */
function debug(_debugLevel, _message)
{
    if (matchesDebugMode(_debugLevel))
    {
        console.log(_message);
    }
}



/**
function manipulateDom()
{
    var newDomNode;
    var randomDiv = generateRandomDiv();

    if (domNodeId == 0)
    {
        console.log("[APPLICATION] Generate and add DomNode for body...", domNodeId);
        rootNode = new DomNode(domNodeId, randomDiv, null);
        document.body.appendChild(rootNode.getDomNodeContent());
    }
    else
    {
        console.log("[APPLICATION] Generate and add DomNode for dom...", domNodeId);
        var nextDomNode = getNextDomNode();
        if (!(nextDomNode instanceof DomNode))
        {
            nextDomNode = rootNode;
        }
        newDomNode = new DomNode(domNodeId, randomDiv, nextDomNode);
        nextDomNode.addDomNodeChildren(newDomNode);
        domNodes.push(newDomNode);
        domNodes.push(nextDomNode);
    }

    domNodeId++;
    if (domNodeId >= 500)
    {
        stopDomManipulation();
        console.log("[APPLICATION] domNodes: ", domNodes);
    }
}

function generateRandomDiv()
{
    var color = "#";
    var bgColor = "#";
    var randomStileSheet;

    for (var i=1; i<=6; i++)
    {
     color += parseInt(Math.random()*16).toString(16);

     bgColor += parseInt(Math.random()*16).toString(16);
    }
    console.log("[APPLICATION] Debug generated random color: ", color);
    randomStileSheet = "background-color: " + bgColor + "; color: " + color;
    randomStileSheet += "; width: " + (parseInt(Math.random()*25)+25) + "px";
    randomStileSheet += "; height: " + (parseInt(Math.random()*25)+25) + "px";

    if (parseInt(Math.random()*10) >= 5)
    {
     randomStileSheet += "; float: left";
    }
    else randomStileSheet += "; float: right";

    return generateDiv("randomDiv", "randomDiv" + domNodeId, "[X]", randomStileSheet);
}

 */