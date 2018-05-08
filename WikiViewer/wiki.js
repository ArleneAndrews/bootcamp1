window.onload = function() {
    document.getElementById("wiki-search-input").focus();
   };

function Random() {
    window.location= "https://en.wikipedia.org/wiki/Special:Random";
    }

function Search(keyword) { //AJAX request
	//function to regex input
		let keyword =keyword.replace(/ /g, "%20");

	$.ajax( {
		url: remoteUrlWithOrigin,
		data: queryData,
		dataType: 'json',
		type: 'POST',
		success: function(data) {
		   // do something with data
		   console.log (data)
		}
	} );
}
/* function showResults (callback) {

	for (var i = 0; i <= 9; i++) {
		$(".display-results").append("<div class='result-list result-" + i + "'>" + "<span class='result-title title-" + i + "'></span>" + "<br>" +"<span class='result-snippet snippet-" + i + "'></span>" + "<br>" + "<span class='result-metadata metadata-" + i + "'></span>" + "</div>" );
	}

	for (var m = 0; m <= 9; m++) {
		var title = callback.query.search[m].title;
		var url = title.replace(/ /g, "_");
		var timestamp = callback.query.search[m].timestamp;
		timestamp = new Date(timestamp);
		//"Wed Aug 27 2014 00:27:15 GMT+0100 (WAT)";
		console.log(timestamp);
		$(".title-" + m).html("<a href='https://en.wikipedia.org/wiki/" + url + "' target='_blank'>" + callback.query.search[m].title + "</a>");
		$(".snippet-" + m).html(callback.query.search[m].snippet);
		$(".metadata-" + m).html((callback.query.search[m].size/1000).toFixed(0) + "kb (" + callback.query.search[m].wordcount + " words) - " + timestamp);
	}
} */

function showError(keyword) {
	$(".display-results").append( "<div class='error'> <p>Your search <span class='keyword'>" + keyword + "</span> did not match any documents.</p> <p>Suggestions:</p><li>Make sure that all words are spelled correctly.</li><li>Try different keywords.</li><li>Try more general keywords.</li></div> ");
}

/* $(".result-btn-wiki").click(function (event) {
	event.preventDefault();
	$(".display-results").html("");
	var keyword = $(".result-wiki-search-form-input").val();
	document.getElementById("result-wiki-search-form-input").blur();
	ajax(keyword);
});

$(".btn-wiki").click(function(event) {
	event.preventDefault();
	var keyword = $(".wiki-search-input").val();

	if (keyword !== "") {
		$(".result-wiki-search-form-input").val(keyword);
		$(".home").addClass('hidden');
   	 	$(".result").removeClass('hidden');
    	document.getElementById("wiki-search-input").blur();
   		$(".wiki-search-input").val("");
		document.getElementById("result-wiki-search-form-input").blur();	
		$(".display-results").html("");
		ajax(keyword);
	} 

	else {
		alert("Enter a keyword into the search box");
	}
	
}); */