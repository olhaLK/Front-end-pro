let peopleUrl = 'https://swapi.dev/api/people/';
const parent = document.querySelector('.container ul');
const loadMoreBtn = document.querySelector('.loadMore');

// limit (amount of products in reponse)
// offset (amount of products that are in the beginning)

// TotalProductsAmount = 100;
// offset=65
// limit=15

function loadPeople() {
  fetch(peopleUrl)
    .then(res => res.json())
    .then(result => {
      // console.log(result);
      showPeople(result.results);
      
      // curent URL that we used
      console.log(peopleUrl)
      // URL to load next portion
      console.log(result.next)


      peopleUrl = result.next;
      if (result.next) {
        loadMoreBtn.classList.remove('hidden');
      } else {
        loadMoreBtn.classList.add('hidden');
      }
    });
}


function showPeople(people) {
  people.forEach(person => {
    const element = document.createElement('li');
    element.textContent = person.name;
    parent.appendChild(element);
  })
}

document.querySelector('.download').addEventListener('click', () => {
  loadPeople();
});

document.querySelector('.loadMore').addEventListener('click', () => {
  loadPeople();
});