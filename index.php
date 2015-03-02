<!--
/**
* This file is part of LivingDom - A DOM Manipulation Framework.
* Please check the file LICENSE.md for information about the license.
*
* @copyright Markus Riegert 2015
* @author Markus Riegert <desmodul@drow-land.de>
*/-->

<html>
    <head>
        <title>[LivingDom] A DOM Manipulation Framework</title>
        <meta http-equiv="content-type" content="text/html; charset=UTF-8"/>

        <link rel="stylesheet" type="text/css" href="css/style.css"/>

        <script type="text/javascript" src="js/lib.js"></script>
        <script type="text/javascript" src="js/model/DomNode.js"></script>
        <script type="text/javascript" src="js/model/StructuredDomNode.js"></script>
        <script type="text/javascript" src="js/app.js"></script>
        <script type="text/javascript" src="js/model/HtmlEntity.js"></script>
        <script type="text/javascript" src="js/model/HtmlStructure.js"></script>

    </head>
    <body onload="startDomManipulation();">

    <?PHP
        require_once("php/view/gen-dom-header.php");
        require_once("php/view/gen-dom-background.php");
    ?>

    </body>
</html>
