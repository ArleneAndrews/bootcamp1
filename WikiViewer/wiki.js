window.onload = function() {
    document.getElementById("searchInput").focus();
   };

function Random() {
    window.location= "https://en.wikipedia.org/wiki/Special:Random";
    }

function Search(keyword) { //AJAX request
	let theText = (searchInput).value;
	
	//function to regex input
		let textReplaceSpaces = theText.replace(/ /g, "_");
		var url ="https://www.wikidata.org/w/api.php?action=query&origin=*&list=search&srsearch="+textReplaceSpaces+"&format=json&srprop=redirecttitle&srprop=redirectsnippet";

		return fetch(url)
		.then(function(response) {
			 return response.json();
			})
			.then(function(myJson) {
				var searchResults = myJson;
				if searchResults.len < 1{
					//error script
				}
				else{
				topTen();
				}
			}); 
	}

//show top 10 results
function topTen(data) {
	for (i = 0, i < 10, i++) {
//get the title 
//get the snippit
document.getElementById('results').innerHTML =searchResults.query.search;
//break
	};


}
