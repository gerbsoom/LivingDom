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
 * @param _debugMode Defines the initial debug mode, possible values are 'verbose', 'silent' and 'default'
 * @param _logBackend Optional remote logging backend for persistent logging on a server.
 * @constructor
 */
function Logger(_debugMode, _logBackend)
{
    var debugMode = _debugMode;
    var logBackend = _logBackend;

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
    this.setDebugMode = function(_newDebugMode)
    {
        if (debugMode != "silent" && debugMode != _newDebugMode)
        {
            console.log("Changing debug mode from ", debugMode, " to ", _newDebugMode);
        }
        debugMode = _newDebugMode;
    };

    /**
     * Checks if the provided debug level is contained in the configured mode.
     *
     * @param _debugLevel The debug level for which the check is done.
     * @returns bool True if the debug level is contained in the mode.
     */
    this.matchesDebugMode = function(_debugLevel)
    {
        if (debugMode != "silent")
        {
            if (debugMode == "verbose")
            {
                return true;
            }
            else if (debugMode == "info" && _debugLevel == "debug")
            {
                return false;
            }
            else return true;
        }
        return false;
    };

    /**
     * Logs the message and an optional object with the debugLevel 'debug'.
     *
     * @param _message The message that gets logged.
     * @param _object The object that gets logged.
     */
    this.debug = function(_message, _object)
    {
        if (this.matchesDebugMode("debug"))
        {
            this.logMessage(_message, _object);
        }
    };

    /**
     * Logs the message and an optional object with the debugLevel 'info'.
     *
     * @param _message The message that gets logged.
     * @param _object The object that gets logged.
     */
    this.info = function(_message, _object)
    {
        if (this.matchesDebugMode("info"))
        {
            this.logMessage(_message, _object);
        }
    };

    /**
     * Logs the message and an optional object to console.
     *
     * @param _message The message that gets logged.
     * @param _object The object that gets logged.
     */
    this.logMessage = function(_message, _object)
    {
        if (_object != undefined)
        {
            console.log(_message, _object);
        }
        else console.log(_message);
        // toDo: Determine if remote logging is configured and send message to remote server
    }

}
