window.onload = function() {
    document.getElementById("wiki-search-input").focus();
   };

function Random() {
    window.location= "https://en.wikipedia.org/wiki/Special:Random";
    }

function Search(term){
    function ajax (keyword) {
        var title = callback.query.search[m].title;
        var url = title.replace(/ /g, "_");
        $(".title-" + m).html("<a href=’https://en.wikipedia.org/wiki/" + url + "' target='_blank'>" + callback.query.search[m].title + "</a>");

        $.ajax({ 
          url: "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=" + keyword + "&prop=info&inprop=url&utf8=&format=json",
       
         dataType: "jsonp",
         success: function(response) {
             console.log(response.query);
             if (response.query.searchinfo.totalhits === 0) {
               showError(keyword);
             }
             else {
               showResults(response);
             }
        },
         error: function () {
          alert("Error retrieving search results, please refresh the page");
         }
       
       });
      }
    
}