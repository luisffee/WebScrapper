
const baseEndpoint = "https://api.semanticscholar.org/graph/v1/paper/search?query=";

async function displayUser(input) {
    if (input.includes(' ')) {
        input = input.replace(/ /g, '+')
        console.log(input)
    }

    const response = await fetch(`${baseEndpoint}/${input}&openAccessPdf&fields=title,year,authors,abstract,fieldsOfStudy`);
    const data = await response.json();

    console.log(data);
}

function handleError(err) {
    console.log("OH NO!");
    console.log(err);
}