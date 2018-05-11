window.onload = function() {
    document.getElementById("searchInput").focus();
   };

function Random() {
    window.location= "https://en.wikipedia.org/wiki/Special:Random";
    }

function Search(keyword) { //AJAX request
	let theText = (searchInput).value;
	
	//function to regex input
		let textReplaceSpaces = theText.replace(/ /g, "%20");
		var url ="https://en.wikipedia.org/w/api.php?action=opensearch&search="+textReplaceSpaces+"&format=json&callback=?"

		$.ajax({
			type:"GET",
			url: url,
			async: false,
			dataType: "json",
			success: function(data){
			  $("#content").html("");
			  for (var i=0; i<data[1].length; i++){
			  html = '<div id="results" class="well"><a href= "https://en.wikipedia.org/wiki/' + data[1][i] + '"target="blank">'+ '<h4>'+ data[1][i]+'</h4><br>'+'<p>'+ data[2][i]+ '</p></a></div>';
			  $("#content").append(html);};
			},
			error: function(errorMessage){
			  alert("Error");
			}}
		)}