document.addEventListener('DOMContentLoaded', () => {
    const pokemonDetailsElement = document.getElementById('pokemon-details');
    const showMoreButton = document.getElementById('show-more-button');
    const pokemonInputElement = document.getElementById('pokemon-input');

    showMoreButton.addEventListener('click', () => {
        const pokemonInput = pokemonInputElement.value.trim();

        if (pokemonInput) {
            fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonInput.toLowerCase()}`)
                .then(response => response.json())
                .then(pokemonData => {
                    displayPokemonDetails(pokemonData);
                })
                .catch(error => {
                    console.error('Error al obtener datos del Pokémon', error);
                    alert('No se pudo obtener información del Pokémon. Asegúrate de ingresar un nombre o número válido.');
                });
        } else {
            alert('Ingresa un nombre o número de Pokémon válido.');
        }
    });

    function displayPokemonDetails(pokemonData) {
        pokemonDetailsElement.innerHTML = '';

        const pokemonImage = document.createElement('img');
        pokemonImage.src = pokemonData.sprites.front_default;
        pokemonImage.alt = `Imagen de ${pokemonData.name}`;
        pokemonDetailsElement.appendChild(pokemonImage);

        const pokemonName = document.createElement('p');
        pokemonName.textContent = `Nombre: ${pokemonData.name}`;
        pokemonDetailsElement.appendChild(pokemonName);

        // Hacer la segunda solicitud para obtener la cadena evolutiva
        fetch(pokemonData.species.url)
            .then(response => response.json())
            .then(speciesData => {
                const evolutionChainUrl = speciesData.evolution_chain.url;
                return fetch(evolutionChainUrl);
            })
            .then(response => response.json())
            .then(evolutionChainData => {
                // Mostrar la cadena evolutiva
                displayEvolutionChain(evolutionChainData);
            })
            .catch(error => {
                console.error('Error al obtener datos de la cadena evolutiva', error);
            });
    }

    function displayEvolutionChain(evolutionChainData) {
        const evolutionChain = document.createElement('p');
        evolutionChain.textContent = 'Cadena Evolutiva:';
        pokemonDetailsElement.appendChild(evolutionChain);

        // Mostrar las etapas de evolución
        displayEvolutionStages(evolutionChainData.chain);
    }

    function displayEvolutionStages(evolutionStage) {
        const stageName = document.createElement('span');
        stageName.textContent = evolutionStage.species.name;
        pokemonDetailsElement.appendChild(stageName);

        if (evolutionStage.evolves_to.length > 0) {
            const arrow = document.createElement('span');
            arrow.textContent = ' -> ';
            pokemonDetailsElement.appendChild(arrow);

            // Recursivamente mostrar las siguientes etapas de evolución
            displayEvolutionStages(evolutionStage.evolves_to[0]);
        }
    }
});
