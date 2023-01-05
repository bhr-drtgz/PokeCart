const searcInput = document.querySelector('#poke-input')
const searcBtn = document.querySelector('.btn-searc')
const pokeComteiner = document.querySelector('.poke-conteiner')

const poceCount = 151;

const colors = {
    fire: "#FDDFDF",
    grass: "#DEFDE0",
    electric: "#FCF7DE",
    water: "#DEF3FD",
    graund: "#f4e7da",
    rock: "#d5d5d4",
    fairy: "#fceaff",
    poison: "#d6b3ff",
    bug: "#f8d5a3",
    dragon: "#97b3e6",
    psychic: "#eaeda1",
    flying: "#F5F5F5",
    fighting: "#E6E0D4",
    normal: "#F5F5F5",
    ice: "#e0f5ff ",
};

const initPokemon = async () => {
    for (let i = 1; i <= poceCount; i++) {
        await getPokemon(i);
    }
}

const getPokemon = async (id) => {
    let url = `https://pokeapi.co/api/v2/pokemon/${id}`
    let res = await fetch(url);
    let data = await res.json();
    createPokemonBox(data);
}

const createPokemonBox = (Pokemon) => {
    const name = Pokemon.name[0].toUpperCase() + Pokemon.name.slice(1);
    const id = Pokemon.id.toString().padStart(3, '0');
    const weigth = Pokemon.weight;
    const type = Pokemon.types[0].type.name;
    const color = colors[type];
    console.log(color);


    const pokemonEl = document.createElement('div');
    pokemonEl.classList.add('poke-box');

    pokemonEl.innerHTML = `
    <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png" alt="">
   <h4 class="poke-name">${name}</h4>
   <p class="poke-id">#${id}</p>
   <p class="poke-weight">${weigth} kg</p>
   <p class="poke-Type">${type}</p>
   `
    pokeComteiner.appendChild(pokemonEl)
};

initPokemon()

searcInput.addEventListener('input', function () {
    const pokeNames = document.querySelectorAll('.poke-name');
    const search = searcInput.value.toLowerCase();

    pokeNames.forEach(pokeName => {
        pokeName.parentElement.style.display = 'block';

        if (!pokeName.innerHTML.toLowerCase().includes(search)) {
            pokeName.parentElement.style.display = 'none';

        }
    });

})