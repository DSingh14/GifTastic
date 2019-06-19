// $(function () {
//     console.log("best");
// });
var imageArray = ["roses", "cats", "ducks", "dogs", "hermit crab", "turtle", "parrot", "swan", "chicken", "rabbit", "goldfish"];

// function for displaying imageArray
function renderButtons() {
    // // Delete the content inside the search-Area div prior to adding new image search
    // (this is necessary otherwise you will have repeated buttons)
    $("#search-Area").empty();
    // looping through imageArray
    for (var i = 0; i < imageArray.length; i++) {
        // dynamically generate buttons for imageArray
        // with jquery generating buttons; defining a button class
        var a = $("<button>");
        // adding class to variable a
        a.addClass("images");
        // passing data attribute to imageArray with index i; looping with length of array
        a.attr("data-type", imageArray[i]);
        // capturing text value of imageArray
        a.text(imageArray[i]);
        // adding value of imageArray to HTML
        $("#search-Area").append(a);
    }
}
// trigger event when submit button is clicked
$("#submit").on("click", function (event) {
    // prevent imageArray elements to repaeat themself,when new button is created
    event.preventDefault();
    // grab text from the input box
    var searchImage = $("#search-input").val().trim();
    // The searched image from the textbox is then added to our array
    imageArray.push(searchImage);
    renderButtons();
});
// calling renderbuttons
renderButtons();

$(document).on("click", ".images", function () {

    var name = $(this).attr('data-type')

    var queryUrl = "https://api.giphy.com/v1/gifs/search?q=" + name + "&api_key=YkbUEwbBuCyi9DJ0fdLjBJ3uuPRbbLRV&limit=10"

    // making ajax GET method call // YkbUEwbBuCyi9DJ0fdLjBJ3uuPRbbLRV, api - key
    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function (response) {
        // printing the entire object
        console.log(response);
        var results = response.data;
        console.log(results);
        for (var i = 0; i < results.length; i++) {
            var imageDiv = $("<div>");
            var p = $("<p>");
            p.text("Rating: " + results[i].rating);
            imageDiv.prepend(p);

            var image = $("<img>");
            image.attr("src", results[i].images.fixed_height.url);
            imageDiv.prepend(image);
            $("#add-animals").prepend(imageDiv);
        }



    });




});
