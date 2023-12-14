async function searchPokemon() {
    const input = document.getElementById('pokemon-input') as HTMLInputElement;
    const name = input.value.toLowerCase();

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const data = await response.json();

        displayPokemonInfo(data);
    } catch (error) {
        displayError();
    }
}

function displayPokemonInfo(pokemon) {
    const image = document.getElementById('pokemon-image') as HTMLImageElement;
    image.src = pokemon.sprites.front_default;
    image.alt = `Imagen de ${pokemon.name}`;

    const name = document.getElementById('pokemon-name');
    name.textContent = `Nombre: ${pokemon.name}`;

    const type = document.getElementById('pokemon-type');
    type.textContent = `Tipo: ${pokemon.types.map((t) => t.type.name).join(', ')}`;

    const statsList = document.getElementById('pokemon-stats-list');
    statsList.innerHTML = '';
    pokemon.stats.forEach((stat) => {
        const statItem = document.createElement('li');
        statItem.textContent = `${traducirStat(stat.stat.name)}: ${stat.base_stat}`;
        statsList.appendChild(statItem);
    });

    const movesSelect = document.getElementById('pokemon-moves-select') as HTMLSelectElement;
    movesSelect.innerHTML = '';
    pokemon.moves.slice(0, 5).forEach((move) => {
        const moveOption = document.createElement('option');
        moveOption.value = move.move.name;
        moveOption.textContent = move.move.name;
        movesSelect.appendChild(moveOption);
    });
}

function displayError() {
    // Aquí puedes agregar la lógica para mostrar un mensaje de error en la interfaz de usuario
}

function traducirStat(statName) {
    switch (statName) {
        case 'hp':
            return 'PS';
        case 'attack':
            return 'Ataque';
        case 'defense':
            return 'Defensa';
        case 'special-attack':
            return 'Ataque Especial';
        case 'special-defense':
            return 'Defensa Especial';
        case 'speed':
            return 'Velocidad';
        default:
            return statName;
    }
}