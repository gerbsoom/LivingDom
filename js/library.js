/**
 * This file is part of LivingDom - A DOM Manipulation Framework.
 * Please check the file LICENSE.md for information about the license.
 *
 * @copyright Markus Riegert 2015
 * @author Markus Riegert <desmodul@drow-land.de>
 */

/**
 * Core library functions to manipulate the DOM and generate HTMLElements.
 */

/**
 * Adds the provided element to the requested component.
 *
 * @param _component The component where the provided element gets added.
 * @param _element The element that gets added to the component.
 */
function addElementToComponent(_component, _element)
{
    if (matchesDebugMode("debug"))
    {
        console.log("[LIBRARY] addElementToComponent()", _component, _element);
    }
    _component.appendChild(_element);
}

/**
 * Removes the provided element from the requested component.
 *
 * @param _component The component from where the provided element gets removed.
 * @param _element The element that gets deleted from the component.
 */
function removeElementFromComponent(_component, _element)
{
    if (matchesDebugMode("debug"))
    {
        console.log("[LIBRARY] removeElementFromComponent()", _component, _element);
    }
    _component.removeChild(_element);
}

/**
 * Sets the provided element as children to the requested component.
 *
 * @param _component The component where the provided element gets set as children.
 * @param _element The element that gets set as children to the component.
 */
function setChildForComponent(_component, _element)
{
    if (matchesDebugMode("debug"))
    {
        console.log("[LIBRARY] setChildForComponent()", _component, _element);
    }
    _component.setChildren(_element);
}

/**
 * Generates a DIV container for the provided parameters.
 *
 * @param _class Sets the class of the generated DIV container.
 * @param _tagId Sets the tagID of the generated DIV container.
 * @param _innerText Adds an inner text into the  DIV container.
 * @param _style Adds an stylesheet string into the  DIV container.
 * @returns {HTMLElement} The generated DIV container as HTMLElement.
 */
function generateDiv(_class, _tagId, _innerText, _style)
{
    var newDiv = document.createElement('div');
    if (_class) newDiv.setAttribute('class', _class);
    if (_tagId) newDiv.setAttribute('id', _tagId);
    if (_innerText != null) newDiv.innerHTML = _innerText;
    if (_style != null) newDiv.setAttribute('style', _style);
    return newDiv;
}
