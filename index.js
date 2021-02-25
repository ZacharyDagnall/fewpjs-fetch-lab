function fetchBooks() {
  // fetch request
  return fetch('https://anapioficeandfire.com/api/books')
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      renderBooks(json)
    })

  // convert to JSON
  //call render books, passing in API's return json data 
  //return fetch()
}

function renderBooks(books) {
  const main = document.querySelector('main')
  books.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = book.name
    main.appendChild(h2)
  })
}

document.addEventListener('DOMContentLoaded', function () {
  fetchBooks()
})
