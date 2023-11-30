
$(document).ready(function () {
    $('form').submit(function (event) {
        event.preventDefault();

        var $searchField = $('#search');
        var $submitButton = $('#submit');

        $searchField.prop("disabled", true);
        $submitButton.attr("disabled", true).val("searching ...");

        var flickerAPI = "https://api.semanticscholar.org/graph/v1/paper/search?";
        var animal = $searchField.val();
        var flickrOptions = {
            query: "Atom",
            format: "json",
            limit: 10
        };
        $.getJSON(flickerAPI, flickrOptions);
    })
})