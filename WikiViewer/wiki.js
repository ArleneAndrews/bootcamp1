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
				console.log(searchResults.query.search)
				if (searchResults.query.search == []){
					//error script
				}
				else{
					topTen(searchResults.query.search);
				}
			}); 
	}

//show top 10 results
function topTen(data) {
	
	for(i = 0; i < 10; i++) {
		//const getWikiPageUrl = id => 'http://en.wikipedia.org/?curid=${id}'
//get the title 
		pageTitle = searchResults.query.search[i].title;
		console.log(pageTitle);
//get the pageid
		pageID = searchResults.query.search[i].pageid;
		console.log(pageID);
		//document.getElementById('results').innerHTML = searchResults.query.search;
//break
	};
}