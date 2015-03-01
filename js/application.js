/**
 * This file is part of LivingDom - A DOM Manipulation Framework.
 * Please check the file LICENSE.md for information about the license.
 *
 * @copyright Markus Riegert 2015
 * @author Markus Riegert <desmodul@drow-land.de>
 */

var debugMode = "normal";

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

var rootNode;
var interval;
var domNodeId = 0;
var domNodes = [];

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
    randomStileSheet += "; width: " + (parseInt(Math.random()*25)+15) + "px";
    randomStileSheet += "; height: " + (parseInt(Math.random()*25)+25) + "px";

    if (parseInt(Math.random()*10) >= 5)
    {
        randomStileSheet += "; float: left";
    }
    else randomStileSheet += "; float: right";

    return generateDiv("randomDiv", "randomDiv" + domNodeId, "[X]", randomStileSheet);
}

function getNextDomNode()
{
    return domNodes.pop();
}

function startDomManipulation()
{
    interval = setInterval(manipulateDom, 200);
}

function stopDomManipulation()
{
    clearInterval(interval);
}

function manipulateDom()
{
    var newDomNode;
    var randomDiv = generateRandomDiv();
    if (domNodeId == 0)
    {
        console.log("[APPLICATION] Generate and add DomNode for body...", domNodeId);
        rootNode = new DomNode(domNodeId, randomDiv, null);
    }
    else
    {
        console.log("[APPLICATION] Generate and add DomNode for dom...", domNodeId);
        var nextDomNode = getNextDomNode();
        if (nextDomNode instanceof DomNode)
        {
            newDomNode = new DomNode(domNodeId, randomDiv, nextDomNode);
            nextDomNode.addDomNodeChildren(newDomNode);
        }
        else
        {
            newDomNode = new DomNode(domNodeId, randomDiv, rootNode);
            rootNode.addDomNodeChildren(newDomNode);
        }
        domNodes.push(newDomNode);
        domNodes.push(nextDomNode);
    }

    domNodeId++;
    if (domNodeId >= 100)
    {
        stopDomManipulation();
        console.log("[APPLICATION] domNodes: ", domNodes);
    }
}
