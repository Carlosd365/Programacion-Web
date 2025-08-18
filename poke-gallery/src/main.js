import './style.css';

const statusText = document.getElementById('status');
const cardsGrid = document.getElementById('grid');

const POKEMON_API_URL = 'https://pokeapi.co/api/v2/pokemon?limit=50';

async function fetchData(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  return response.json();
}

function createPokemonCard(pokemon) {
  const card = document.createElement('div');
  card.className = 'pokemon-card';

  // Imagen
  const img = document.createElement('img');
  img.src =
    pokemon.sprites?.other?.['official-artwork']?.front_default ||
    pokemon.sprites?.front_default;
  img.alt = pokemon.name;

  // Nombre
  const title = document.createElement('h2');
  title.textContent = `#${pokemon.id} ${pokemon.name}`;

  // Altura / peso
  const info = document.createElement('div');
  info.className = 'card-info';
  info.textContent = `Height: ${pokemon.height} | Weight: ${pokemon.weight}`;

  // Tipos
  const typesBox = document.createElement('div');
  typesBox.className = 'types';
  pokemon.types.forEach(t => {
    const span = document.createElement('span');
    span.className = 'type';
    span.textContent = t.type.name;
    typesBox.appendChild(span);
  });

  // Habilidades
  const abilities = document.createElement('div');
  abilities.className = 'extra-info';
  abilities.textContent =
    'Abilities: ' + pokemon.abilities.map(a => a.ability.name).join(', ');

  // Movimientos (máx 3)
  const moves = document.createElement('div');
  moves.className = 'extra-info';
  moves.textContent =
    'Moves: ' + pokemon.moves.slice(0, 3).map(m => m.move.name).join(', ');


  card.appendChild(img);
  card.appendChild(title);
  card.appendChild(info);
  card.appendChild(typesBox);
  card.appendChild(abilities);
  card.appendChild(moves);

  return card;
}

async function loadPokemons() {
  try {
    statusText.textContent = 'Loading…';

    const list = await fetchData(POKEMON_API_URL);
    const details = await Promise.all(list.results.map(i => fetchData(i.url)));

    cardsGrid.replaceChildren(...details.map(createPokemonCard));
    statusText.textContent = `Showing ${details.length} Pokémon`;
  } catch (e) {
    console.error(e);
    statusText.textContent = 'Failed to load data';
  }
}

loadPokemons();
