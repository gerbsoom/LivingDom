/**
 * This file is part of LivingDom - A DOM Manipulation Framework.
 * Please check the file LICENSE.md for information about the license.
 *
 * @copyright Markus Riegert 2015
 * @author Markus Riegert <desmodul@drow-land.de>
 */

function addElementToComponent(_component, _element)
{
    console.log("[LIBRARY] addElementToComponent()", _component, _element);
    _component.appendChild(_element);
}

function removeElementFromComponent(_component, _element)
{
    console.log("[LIBRARY] removeElementFromComponent()", _component, _element);
    _component.removeChild(_element);
}

function setChildForComponent(_component, _element)
{
    console.log("[LIBRARY] setChildForComponent()", _component, _element);
    _component.setChildren(_element);
}

function generateDiv(_class, _tagId, _innerText, _style)
{
    var newDiv = document.createElement('div');
    if (_class) newDiv.setAttribute('class', _class);
    if (_tagId) newDiv.setAttribute('id', _tagId);
    if (_innerText != null) newDiv.innerHTML = _innerText;
    if (_style != null) newDiv.setAttribute('style', _style);
    return newDiv;
}
