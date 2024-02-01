const container = document.querySelector('main')
const searcher = document.querySelector('.input-container input')
const URLList = 'https://rickandmortyapi.com/api/character'


window.addEventListener('DOMContentLoaded', getApi(URLList))

searcher.addEventListener('keyup', getCharacterByName)

function getApi(URLList) {
  fetch(URLList)
  .then(response => response.json() )
  .then( data => {
    data.results.forEach(character => {
      createCard(character)
    });
  })
}

function getCharacterByName (){
    const searchCharger = searcher.value.toLowerCase();
    container.innerHTML = '';

    fetch(URLList)
  .then(response => response.json() )
  .then( data => {
    data.results.forEach(character => {
      const characterName = character.name.toLocaleLowerCase();
      if(characterName.includes(searchCharger)){
        createCard(character);
      }
    });
  })  

}

function createCard(character) {
  const card = document.createElement('div')
  card.classList.add('card')

  const imgCard = document.createElement('img')
  imgCard.src = character.image
  imgCard.alt = character.name

  const nameCharacter = document.createElement('h2')
  nameCharacter.textContent = character.name

  card.appendChild(imgCard)
  card.appendChild(nameCharacter)

  container.appendChild(card)
}