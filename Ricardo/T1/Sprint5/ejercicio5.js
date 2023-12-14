function searchPokemon() {
    var pokemonInput = document.getElementById('pokemon-input');
    var pokemonName = pokemonInput.value;
    fetch("https://pokeapi.co/api/v2/pokemon/".concat(pokemonName))
        .then(function (response) { return response.json(); })
        .then(function (data) {
        var pokemonDisplay = document.getElementById('pokemon-display');
        var pokemonImage = document.getElementById('pokemon-image');
        var pokemonName = document.getElementById('pokemon-name');
        var pokemonType = document.getElementById('pokemon-type');
        var pokemonStats = document.getElementById('pokemon-stats');
        var pokemonMoves = document.getElementById('pokemon-moves');
        pokemonImage.src = data.sprites.front_default;
        pokemonName.textContent = data.name;
        pokemonType.textContent = 'Type: ' + data.types.map(function (type) { return type.type.name; }).join(', ');
        pokemonStats.textContent = 'Stats: ' + data.stats.map(function (stat) { return "".concat(stat.stat.name, ": ").concat(stat.base_stat); }).join(', ');
        pokemonMoves.textContent = 'Moves: ' + data.moves.slice(0, 5).map(function (move) { return move.move.name; }).join(', ');
        pokemonDisplay.style.display = 'block';
    })
        .catch(function (error) {
        alert('No se encontró el Pokémon. Por favor, intenta de nuevo.');
    });
}
