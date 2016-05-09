// Create a drop down menu for mobile devices


// Create a select and append to menu
var $select = $("<select></select>");
$(".menu").append($select);

// Cycle over menu links
$(".menu a").each(function(){
	var $anchor = $(this);
	// Create an option	
	var $option = $("<option></option>");

// Deal with selected options depending on current page
	if($anchor.parent().hasClass("selected")){
		$option.prop("selected", true);
	}

	// Option's Value is the href
	$option.val($anchor.attr("href"));

	// Options Text is the text of link
	$option.text($anchor.text());

	// Append option to select
	$select.append($option);

});



$select.change(function(){
	window.location = $select.val();
})




//GO BUTTON

//Create a button 
	// bind click to go to select's location

// var $button = $("<button> Go </button>");
// $(".menu").append($button);

// $button.click(function(){
// 	window.location = $select.val();

// });