var apiKey = "1d6c7db74892417d9fe5d11411646606";

var numberOfResults;
var start;
var end;

var searchTerm;
var URLBase = "http://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=";

function search(){

	$.ajax({
	
		url: URLBase;
		method: "GET"; 

	}).done(function (results){
		$("").empty();

		for(var i = 0; i < numberOfResults.length(); i++){
			var articleSection = $("<div>");
			articleSection.addClass("section");
			articleSection.attr("id", "articleIndex: " + i);
			$("").append("articleSection");
		}
	}).fail(function(err) {
  	throw err;
});


} 

$("").on("click", function(event){

	event.preventDefault();

	searchTerm = $("").val().trim();

	var newURL = URLBase + "&q=" + searchTerm;


})









