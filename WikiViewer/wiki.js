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
		var url ="https://www.wikidata.org/w/api.php?action=query&list=search&origin=*&format=json&prop=pageimages%7Cpageterms&formatversion=2&titles="+textReplaceSpaces;

		return fetch(url)
		.then(function(response) {
			 return response.json();
			})
			.then(function(myJson) {
				var searchResults = myJson;
				console.log(myJson)
				if (searchResults.query.search == []){
					//error script
				}
				else{
					topTen(pages);
				}
			}); 
	}

//show top 10 results
function topTen(pages) {
	for (const result of pages) {

		pageTitle = result.title;
		console.log(pageTitle);

		pageID = result.pageid
		console.log(pageID);
		urls = 'http://en.wikipedia.org/?curid='+pageID
		document.getElementById('results').innerHTML = urls
	/* const getWikiPageUrl = id => 'http://en.wikipedia.org/?curid=${id}'
	const urls = pages.map(result => getWikiPageUrl(result));
	document.getElementById('results').innerHTML = urls */
};

	//const getWikiPageUrl = id => 'http://en.wikipedia.org/?curid=${id}'
	//const urls = pages.map(result => getWikiPageUrl(result));
	document.getElementById('results').innerHTML = urls

	/* //idea 2
	var i = array.length;

while (i--) {
	//do something
} */
//idea 1
	/* for(i = 0; i < 10; i++) {
	//get the title 
		pageTitle = searchResults.query.search[i].title;
		console.log(pageTitle);
	//get the pageid
		pageID = searchResults.query.search[i].pageid;
		console.log(pageID); */
	
		//document.getElementById('results').innerHTML = searchResults.query.search;
	//break
	/*};*/
;}