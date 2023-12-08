// pokedex.ts
interface Pokemon {
    name: string;
    id: number;
    types: string[];
    stats: { name: string; base_stat: number }[];
    moves: { move: { name: string } }[];
    evolution_chain: { species: { name: string } }[];
}

const apiUrl = "https://pokeapi.co/api/v2/pokemon/";

async function buscarPokemon(nombreOId: string): Promise<void> {
    try {
        const response = await fetch(`${apiUrl}${nombreOId.toLowerCase()}`);
        const pokemon: Pokemon = await response.json();

        // Imprimir información del Pokémon
        console.log(`Nombre: ${pokemon.name}`);
        console.log(`ID: ${pokemon.id}`);
        console.log(`Tipos: ${pokemon.types.join(", ")}`);
        console.log(`Estadísticas:`);
        pokemon.stats.forEach(stat => console.log(`${stat.name}: ${stat.base_stat}`));
        console.log(`Movimientos: ${pokemon.moves.map(move => move.move.name).join(", ")}`);
        console.log(`Evolución: ${pokemon.evolution_chain[0].species.name}`);
    } catch (error) {
        console.error("Error al buscar el Pokémon:", error);
    }
}

// Prueba
const nombrePokemon = prompt("Ingrese el nombre o ID del Pokémon:");
buscarPokemon(nombrePokemon);
