/**
 * This file is part of LivingDom - A DOM Manipulation Framework.
 * Please check the file LICENSE.md for information about the license.
 *
 * @copyright Markus Riegert 2015
 * @author Markus Riegert <desmodul@drow-land.de>
 */

var divId = 0;
var rootNode;
var interval;
var domNodes = [];

function generateRandomDiv()
{
    var color = "#";
    var backgroundColor = "#";
    var randomStileSheet = "";

    for (var i=1; i<=6; i++)
    {
        color += parseInt(Math.random()*16).toString(16);

        backgroundColor += parseInt(Math.random()*16).toString(16);
    }
    console.log("[APPLICATION] Debug generated random color: ", color);
    randomStileSheet = "background-color: " + backgroundColor + "; color: " + color;
    randomStileSheet += "; width: " + (parseInt(Math.random()*25)+15) + "px";
    randomStileSheet += "; height: " + (parseInt(Math.random()*25)+25) + "px";

    if (parseInt(Math.random()*10) >= 5)
    {
        randomStileSheet += "; float: left";
    }
    else randomStileSheet += "; float: right";

    return generateDiv("randomDiv", "randomDiv" + divId, "[X]", randomStileSheet);
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
    if (divId == 0)
    {
        console.log("[APPLICATION] Generate and add DomNode for body...", divId);
        rootNode = new DomNode(randomDiv, null);
    }
    else
    {
        console.log("[APPLICATION] Generate and add DomNode for dom...", divId);
        var nextDomNode = getNextDomNode();
        if (nextDomNode instanceof DomNode)
        {
            newDomNode = new DomNode(randomDiv, nextDomNode);
            nextDomNode.addDomNodeChildren(newDomNode);
        }
        else
        {
            newDomNode = new DomNode(randomDiv, rootNode);
            rootNode.addDomNodeChildren(newDomNode);
        }
        domNodes.push(newDomNode);
        domNodes.push(nextDomNode);
    }

    divId++;
    if (divId >= 100)
    {
        stopDomManipulation();
        console.log("[APPLICATION] domNodes: ", domNodes);
    }
}
