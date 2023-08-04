function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch("https://anapioficeandfire.com/api/books")
            .then((res) => res.json());
}

function renderBooks(books) {
  const main = document.querySelector("main");
  books.forEach((book) => {
    const h2 = document.createElement("h2");
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

//The Promise containing the js code
let returnedJSON = fetchBooks();

returnedJSON.then(data => renderBooks(data))
// returnedJSON.then(function(data){
//   renderBooks(data)
// })

// DOESN'T PASS TEST BUT RENDERS THE BOOK TITLES TO THE DOM