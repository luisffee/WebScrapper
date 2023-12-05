
$(document).ready(function () {
    $('form').submit(function (event) {
        event.preventDefault();

        var $searchField = $('#search');


        var API = "https://openlibrary.org/search.json?";
        var input = $searchField.val();
        console.log(input);
        var Options = {
            q: input,
            limit: 20

        };
        function displayResults(data) {
            var resultHTML = '<ul>'
            console.log(data.docs)
            $.each(data.docs, function (i, result) {
                var langs = "";

                if (result.language && Array.isArray(result.language)) {
                    $.each(result.language, function (i, lang) {
                        langs += lang + " ";
                    });
                }

                resultHTML += '<li class="result ' + langs + result.first_publish_year + ' ">';
                resultHTML += '<img class="result-img" src="https://covers.openlibrary.org/b/olid/' + result.cover_edition_key + '.jpg">';
                resultHTML += '<h2 class="title">' + result.title + '</h2>';
                resultHTML += '<p class="authors">' + result.author_name[0] + '</p>';
                resultHTML += '<a class="link" href="https://openlibrary.org' + result.key + '" >Link</a>';
                resultHTML += '</li>';
            });
            resultHTML += '</ul>';
            $('#search-results').html(resultHTML);
            updatePagination(data);

            // Show books for the first page by default
            showBooksForPage(1);

        };
        $.getJSON(API, Options, displayResults);
    })
    $('input:checkbox[name="English"]').change(function () {
        if ($(this).prop('checked')) {
            $('li[class*=eng]').hide();
        } else {
            $('li').show();
        }
    });
    $('input:checkbox[name="German"]').change(function () {
        if ($(this).prop('checked')) {
            $('li[class*=ger]').hide();
        } else {
            $('li').show();
        }
    });
    var booksPerPage = 5; // Adjust this as needed
    var totalPages;

    function updatePagination(data) {
        // Calculate total pages based on the number of books and booksPerPage
        totalPages = Math.ceil(data.docs.length / booksPerPage);

        // Remove previous pagination
        $('.pagination').remove();

        // Create pagination buttons
        var paginationHTML = '<div class="pagination">';
        for (var i = 1; i <= totalPages; i++) {
            paginationHTML += '<button class="page-number" data-page="' + i + '">' + i + '</button>';
        }
        paginationHTML += '</div>';

        // Append pagination to the page
        $('#search-results').after(paginationHTML);

        // Handle click events on pagination buttons
        $('.page-number').click(function () {
            var pageNum = $(this).data('page');
            showBooksForPage(pageNum);
        });
    }

    function showBooksForPage(pageNum) {
        // Hide all books
        $('li').hide();

        // Calculate the range of books to display for the selected page
        var startIndex = (pageNum - 1) * booksPerPage;
        var endIndex = startIndex + booksPerPage;

        // Show the books for the selected page
        $('li').slice(startIndex, endIndex).show();
    }
})
