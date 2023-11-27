
function showResults() {
    // Prevent the form from submitting (to avoid page refresh)
    event.preventDefault();

    // Show filter bar and search results
    document.getElementById('searchBar2').style.transform = 'translateY(-40vh)';
}