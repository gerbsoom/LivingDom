<?php

error_reporting(E_ALL);

/**
 * livingdom - class.HtmlStructure.php
 *
 * $Id$
 *
 * This file is part of livingdom.
 *
 * Automatically generated on 02.03.2015, 07:20:19 with ArgoUML PHP module 
 * (last revised $Date: 2010-01-12 20:14:42 +0100 (Tue, 12 Jan 2010) $)
 *
 * @author firstname and lastname of author, <author@example.org>
 */

if (0 > version_compare(PHP_VERSION, '5')) {
    die('This file was generated for PHP 5');
}

/**
 * include
 *
 * @author firstname and lastname of author, <author@example.org>
 */
require_once('class..php');

/**
 * include HtmlEntity
 *
 * @author firstname and lastname of author, <author@example.org>
 */
require_once('class.HtmlEntity.php');

/**
 * include StructuredDomNode
 *
 * @author firstname and lastname of author, <author@example.org>
 */
require_once('class.StructuredDomNode.php');

/* user defined includes */
// section -64--88-1-21-5b789cdc:14bd83eafa1:-8000:0000000000000962-includes begin
// section -64--88-1-21-5b789cdc:14bd83eafa1:-8000:0000000000000962-includes end

/* user defined constants */
// section -64--88-1-21-5b789cdc:14bd83eafa1:-8000:0000000000000962-constants begin
// section -64--88-1-21-5b789cdc:14bd83eafa1:-8000:0000000000000962-constants end

/**
 * Short description of class HtmlStructure
 *
 * @access public
 * @author firstname and lastname of author, <author@example.org>
 */
class HtmlStructure
    extends 
{
    // --- ASSOCIATIONS ---
    // generateAssociationEnd :     // generateAssociationEnd :     // generateAssociationEnd : 

    // --- ATTRIBUTES ---

    /**
     * Short description of attribute structureId
     *
     * @access public
     * @var String
     */
    public $structureId = null;

    /**
     * Short description of attribute lastHtmlEntity
     *
     * @access public
     * @var HtmlEntity
     */
    public $lastHtmlEntity = null;

    /**
     * Short description of attribute parentDomNode
     *
     * @access public
     * @var StructuredDomNode
     */
    public $parentDomNode = null;

    /**
     * Short description of attribute htmlEntities
     *
     * @access public
     * @var HtmlEntity
     */
    public $htmlEntities = null;

    // --- OPERATIONS ---

    /**
     * Short description of method getLastHtmlItem
     *
     * @access public
     * @author firstname and lastname of author, <author@example.org>
     * @return HtmlEntity
     */
    public function getLastHtmlItem()
    {
        $returnValue = null;

        // section -64--88-1-21-5b789cdc:14bd83eafa1:-8000:0000000000000963 begin
        // section -64--88-1-21-5b789cdc:14bd83eafa1:-8000:0000000000000963 end

        return $returnValue;
    }

    /**
     * Short description of method getParentDomNode
     *
     * @access private
     * @author firstname and lastname of author, <author@example.org>
     * @return StructuredDomNode
     */
    private function getParentDomNode()
    {
        $returnValue = null;

        // section -64--88-1-21-5b789cdc:14bd83eafa1:-8000:0000000000000966 begin
        // section -64--88-1-21-5b789cdc:14bd83eafa1:-8000:0000000000000966 end

        return $returnValue;
    }

    /**
     * Short description of method getEntityAtPos
     *
     * @access public
     * @author firstname and lastname of author, <author@example.org>
     * @param  pos
     * @return HtmlEntity
     */
    public function getEntityAtPos($pos)
    {
        $returnValue = null;

        // section -64--88-1-21-5b789cdc:14bd83eafa1:-8000:00000000000009A7 begin
        // section -64--88-1-21-5b789cdc:14bd83eafa1:-8000:00000000000009A7 end

        return $returnValue;
    }

    /**
     * Short description of method addHtmlEntity
     *
     * @access public
     * @author firstname and lastname of author, <author@example.org>
     * @param  HtmlEntity htmlEntity
     * @return mixed
     */
    public function addHtmlEntity( HtmlEntity $htmlEntity)
    {
        // section -64--88-1-21-5b789cdc:14bd83eafa1:-8000:00000000000009AC begin
        // section -64--88-1-21-5b789cdc:14bd83eafa1:-8000:00000000000009AC end
    }

    /**
     * Short description of method addHtmlStructure
     *
     * @access public
     * @author firstname and lastname of author, <author@example.org>
     * @param  HtmlStructure structure
     * @return mixed
     */
    public function addHtmlStructure( HtmlStructure $structure)
    {
        // section -64--88-1-21-5b789cdc:14bd83eafa1:-8000:00000000000009B1 begin
        // section -64--88-1-21-5b789cdc:14bd83eafa1:-8000:00000000000009B1 end
    }

    /**
     * Short description of method getStructureId
     *
     * @access public
     * @author firstname and lastname of author, <author@example.org>
     * @return String
     */
    public function getStructureId()
    {
        $returnValue = null;

        // section -64--88-1-21-5b789cdc:14bd83eafa1:-8000:00000000000009B4 begin
        // section -64--88-1-21-5b789cdc:14bd83eafa1:-8000:00000000000009B4 end

        return $returnValue;
    }

    /**
     * Short description of method HtmlStructure
     *
     * @access public
     * @author firstname and lastname of author, <author@example.org>
     * @param  String _structureId
     * @param  StructureDomNode _parentDomNode
     * @return mixed
     */
    public function HtmlStructure( String $_structureId,  StructureDomNode $_parentDomNode)
    {
        // section -64--88-1-21-5b789cdc:14bd83eafa1:-8000:00000000000009B8 begin
        // section -64--88-1-21-5b789cdc:14bd83eafa1:-8000:00000000000009B8 end
    }

} /* end of class HtmlStructure */

?>