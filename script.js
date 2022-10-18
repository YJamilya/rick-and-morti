'use strict'
let randomButton = document.querySelector('#random-button')
let characterImage = document.querySelector('#character-image');
let characterName = document.querySelector('#character-name');
let randomNumber = 1
const BASE_URL = 'https://rickandmortyapi.com/api/character/$[randomNumber';
const getCharacter = () => {
return fetch(BASE_URL, {
  method: 'GET',
})
.then((res) => res.json())
.then((parseData) => {
    characterImage.src = parseData.image;
    characterName.textContent += parseData.name;
});
 };