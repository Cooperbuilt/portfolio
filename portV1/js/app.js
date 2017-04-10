/* global $ */
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
        	  
			}
		});
};

$(document).ready(main);
//make the terminal draggable and resizeable
$(document).ready(function() {
	$('#terminal').draggable({
    containment: "#parent",
    scroll: false
});
});

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