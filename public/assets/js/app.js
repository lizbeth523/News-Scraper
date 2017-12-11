$(document).ready( function() {

  // $("#btn-scrape").on("click", function(event) {
  //   event.preventDefault();

  //   // Make a request call to grab the HTML body from the site of your choice
  //   $.getJSON("http://www.dailymail.co.uk/ushome/index.html", function(response) {
  //     // An empty array to save the data that we'll scrape
  //     var results = [];

  //     // Select each element in the HTML body from which you want information.
  //     // NOTE: Cheerio selectors function similarly to jQuery's selectors,
  //     // but be sure to visit the package's npm page to see how it works
  //     $("h2.linkro-darkred").each(function(i, element) {

  //       var link = $(element).children().attr("href");
  //       var title = $(element).children().text();

  //       // Save these results in an object that we'll push into the results array we defined earlier
  //       results.push({
  //         title: title,
  //         link: link
  //       });
  //     });

  //   // Log the results once you've looped through each of the elements found with cheerio
  //   console.log(results);
  //   });
  // });

});