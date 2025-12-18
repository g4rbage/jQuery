$(document).ready(function () {
    // jQuery methods go here...


    // Toggle FAQ answer depending on which question is clicked on.

    $("div").click(function() {
        $(this).children("p").toggle(); // Toggle the child paragraph of this div. The one we clicked on.
    });

});