/* global $ */
var heroRightHeight = $('#dynamic-runtime').innerHeight();
var heroLeftHeight = $('.hero-left').innerHeight();
var newRightHeight;
var newLeftHeight;
/*
* heightCheck tracks the inner height of the hero left and right sections
* after information is dynamically added, we check the height of the sections again
* if the new height is more, we add an icon to show the user to scroll down
*/

/*
* This was sort of annoying so I am removing it from use but leaving it here for posterity

var heightCheck = function() {
  newRightHeight =  $('.hero-right')[0].scrollHeight;
  newLeftHeight =  $('.hero-left')[0].scrollHeight;
  //check for the right side
  if (newRightHeight > heroRightHeight || newLeftHeight > heroLeftHeight) {
     $( "#dialog" ).dialog();
     $('#dialog-html').html("Overflow Detected, remember to scroll down in each section!");
  }
}
*/

var main = function() {
	//when enter is pressed, kick off the function
 	$(document).keypress(function(e) {
    		if(e.which == 13) {

            //store the value in the terminal input
        		var longValue = $('#code-input').val();
        		if (longValue === "go to home" || longValue === "go to Home") {
        		  window.location.href = "index.html";
        		}
        		//$("#cursor").before("</br>" + "<p id='terminalCode'>" + longValue + "</p>");
        		var value = longValue.split(" ")[1]
        		//hide whatever code block is in the left side
        		$("pre").hide();
        		//slide up selected code block
        		$("#"+value).slideUp('fast');
        		//show the block from its currently hidden state
        		$("#"+value).show();
        		//load the selected report from content.html
        		$('#dynamic-runtime').load("content.html ."+value);
        		//clear the terminal
        		$("#code-input").val("");
        	  heightCheck();
			}
		});
};

$(document).ready(main);
//make the terminal draggable and resizeable


  $( function() {
    var availableTags = [
      "run binarySearchDeluxe",
      "run euclideanEdgeGraph",
      "run euclideanEdgeGraphMST",
      "run kdTrees",
      "run seamCarver"
    ];
    $( "#code-input" ).autocomplete({
      source: availableTags
    });
  } );
