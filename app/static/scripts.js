
$(document).ready(function () {
    $('form').submit(function (event) {
        event.preventDefault();

        var $searchField = $('#search');


        var API = "https://openlibrary.org/search.json?";
        var input = $searchField.val();
        console.log(input);
        var Options = {
            q: input,
            limit: 10

        };
        function displayResults(data) {
            var resultHTML = '<ul>'
            console.log(data.docs)
            $.each(data.docs, function (i, result) {
                resultHTML += '<li class="result">';
                resultHTML += '<img class="result-img" src="https://covers.openlibrary.org/b/olid/' + result.cover_edition_key + '.jpg">';
                resultHTML += '<h2 class="title">' + result.title + '</h2>';
                resultHTML += '<p class="authors">' + result.author_name[0] + '</p>';
                resultHTML += '<a class="link" + href="https://openlibrary.org' + result.key + '" >Link</a>';
                resultHTML += '</li>';
            });
            resultHTML += '</ul>';
            $('#search-results').html(resultHTML);

        };
        $.getJSON(API, Options, displayResults);
    })

})