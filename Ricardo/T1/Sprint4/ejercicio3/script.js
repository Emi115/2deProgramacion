document.addEventListener("DOMContentLoaded", () => {
    const pokemonDetailsElement = document.getElementById("pokemon-details");
    const showMoreButton = document.getElementById("show-more-button");
    const pokemonInputElement = document.getElementById("pokemon-input");
    const evolutionImagesElement = document.getElementById("evolution-images");
  
    showMoreButton.addEventListener("click", () => {
      const pokemonInput = pokemonInputElement.value.trim();
  
      if (pokemonInput) {
        fetchPokemonData(pokemonInput)
          .then((pokemonData) => {
            displayPokemonDetails(pokemonData);
            return fetch(evolutionChainUrl(pokemonData.species.url));
          })
          .then((response) => response.json())
          .then((evolutionChainData) => {
            displayEvolutionChain(evolutionChainData);
          })
          .catch((error) => {
            console.error("Error:", error);
            showAlert("No se pudo obtener información del Pokémon. Asegúrate de ingresar un nombre o número válido.");
          });
      } else {
        showAlert("Ingresa un nombre o número de Pokémon válido.");
      }
    });
  
    function fetchPokemonData(pokemonInput) {
      return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonInput.toLowerCase()}`)
        .then((response) => response.json());
    }
  
    function evolutionChainUrl(speciesUrl) {
      const speciesId = speciesUrl.split("/").reverse()[1];
      return `https://pokeapi.co/api/v2/evolution-chain/${speciesId}`;
    }
  
    function displayPokemonDetails(pokemonData) {
      pokemonDetailsElement.innerHTML = "";
      evolutionImagesElement.innerHTML = ""; // Limpiar el contenido anterior
  
      const pokemonImage = createImageElement(pokemonData.sprites.front_default, `Imagen de ${pokemonData.name}`);
      pokemonDetailsElement.appendChild(pokemonImage);
  
      const pokemonName = document.createElement("p");
      pokemonName.textContent = `Nombre: ${pokemonData.name}`;
      pokemonDetailsElement.appendChild(pokemonName);
  
      // Mostrar botones para cada habilidad
      pokemonData.abilities.forEach((ability) => {
        const abilityButton = createButtonElement(ability.ability.name, () => showAbilityDetails(ability.ability.name));
        pokemonDetailsElement.appendChild(abilityButton);
      });
    }
  
    function createImageElement(src, alt) {
      const image = document.createElement("img");
      image.src = src;
      image.alt = alt;
      return image;
    }
  
    function createButtonElement(text, clickHandler) {
      const button = document.createElement("button");
      button.textContent = text;
      button.addEventListener("click", clickHandler);
      return button;
    }
  
    function displayEvolutionChain(evolutionChainData) {
      const evolutionChain = document.createElement("p");
      evolutionChain.textContent = "Cadena Evolutiva:";
      evolutionImagesElement.appendChild(evolutionChain);
  
      // Mostrar las etapas de evolución
      displayEvolutionStages(evolutionChainData.chain, evolutionImagesElement);
    }
  
    function displayEvolutionStages(evolutionStage, parentElement) {
      const stageName = document.createElement("span");
      stageName.textContent = evolutionStage.species.name;
  
      // Mostrar la imagen de la forma evolutiva
      const stageImage = createImageElement(evolutionStage.species.url, `Imagen de ${evolutionStage.species.name}`);
      parentElement.appendChild(stageImage);
      parentElement.appendChild(stageName);
  
      if (evolutionStage.evolves_to.length > 0) {
        const arrow = document.createElement("span");
        arrow.textContent = " -> ";
        parentElement.appendChild(arrow);
  
        // Recursivamente mostrar las siguientes etapas de evolución
        displayEvolutionStages(evolutionStage.evolves_to[0], parentElement);
      }
    }
  
    function showAlert(message) {
      alert(message);
    }

  // Modal para mostrar detalles de habilidades
  const modal = document.getElementById("modal");
  const closeBtn = document.getElementsByClassName("close")[0];
  const abilityDetails = document.getElementById("ability-details");

  closeBtn.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };

  function showAbilityDetails(abilityName) {
    // Aquí deberías realizar una solicitud adicional para obtener detalles de la habilidad,
    // ya sea desde la misma PokeAPI o cualquier otra fuente de datos.
    // Por ahora, simplemente mostraremos el nombre de la habilidad en el modal.
    abilityDetails.textContent = `Detalles de la habilidad: ${abilityName}`;
    modal.style.display = "block";
  }
});
