/*
 * - HTTP-запити в браузері
 *  - Fetch API
 *  - Владка Network
 *  - HTTP-методи
 *  - Заголовки
 *  - MIME-типи
 *  - Параметри запиту
 * - Документація REST API
 * - Обрабобка 404 з fetch
 * - Аутентифікація
 * - Бібліотеки-обгортки
 * - https://pokeapi.co/
 */

import '../css/common.css';
import pokemonCardTpl from '../templates/pokemon-card.hbs';
// import API from './api-service';
// import getRefs from './get-refs';
const pokemonCard = document.querySelector('.js-card-container');
const searchForm = document.querySelector('.js-search-form');

const url = 'https://pokeapi.co/api/v2/pokemon/';

searchForm.addEventListener('submit', onSearch)

function onSearch(e) {
  e.preventDefault()
  const form = e.currentTarget;
  const searchQuery = form.elements.query.value;

getPokemon(searchQuery)
.then(renderPokemonCard)
.catch(errorMessage)
.finally(()=>form.reset())
}


function getPokemon(pokemonId) {
 return fetch(`${url}${pokemonId}`)
.then(response => response.json())
}

function renderPokemonCard(pokemon) {

  const markup = pokemonCardTpl(pokemon);
  pokemonCard.innerHTML = markup;
}

function errorMessage(error) {
  alert(error.message)
}

// const refs = getRefs();

// refs.searchForm.addEventListener('submit', onSearch);

// function onSearch(e) {
//   e.preventDefault();

//   const form = e.currentTarget;
//   const searchQuery = form.elements.query.value;

//   API.fetchPokemon(searchQuery)
//     .then(renderPokemonCard)
//     .catch(onFetchError)
//     .finally(() => form.reset());
// }

// function renderPokemonCard(pokemon) {
//   const markup = pokemonCardTpl(pokemon);
//   refs.cardContainer.innerHTML = markup;
// }

// function onFetchError(error) {
//   alert('Упс, ми не знайшли вашого покемона!');
// }

// // =========================================

// const url = 'https://newsapi.org/v2/everything?q=cars';
// const options = {
//   headers: {
//     Authorization: '4330ebfabc654a6992c2aa792f3173a3',
//   },
// };

// fetch(url, options)
//   .then(r => r.json())
//   .then(console.log);
