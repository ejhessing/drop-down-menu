// Create a drop down menu for mobile devices

// Create a select and append to menu
// Cycle over menu links
	// Create an option
	// Option's Value is the href
	// Options Text is the text of link
	// Append option to select
//Create a button 
	// bind click to go to select's location
//Modify CSS to hide links on small width and show button and select 
	// Also hides select and button on larger width and shows links
// Deal with selected options depending on current page

var $select = $("<select></select>");
$(".menu").append($select);

$(".menu a").each(function(){
	var $anchor = $(this);
	var $option = $("<option></option>");

	$option.val($anchor.attr("href"));

	var anchorText = $anchor.text();
	$option.text(anchorText);

	$select.append($option);

});