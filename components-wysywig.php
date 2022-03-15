<?php

 
# get correct id for plugin
$thisfile=basename(__FILE__, ".php");
 
# register plugin
register_plugin(
	$thisfile, //Plugin id
	'Components Wysywig', 	//Plugin name
	'1.2', 		//Plugin version
	'Mateusz Skrzypczak',  //Plugin author
	'https://www.multicolor.stargard.pl/', //author website
	'Replaces components textarea to CKEDITOR now with file', //Plugin description
	'plugins', //page type - on which admin tab to display
	'compo_wysywig'  //main function (administration)
);
 
# activate filter 
add_action('footer','compo_wysywig'); 
 

register_script('componentsCke', $SITEURL.'admin/template/js/ckeditor/ckeditor.js', '1.1', TRUE);
queue_script('componentsCke',GSBACK); 

register_script('componentsWysywig', $SITEURL.'plugins/components-wysywig/js/components-wysywig.js', '1.2', TRUE);
queue_script('componentsWysywig',GSBACK); 

# functions
function compo_wysywig() {

}

?>