declare module 'Pokemon' {
    interface IPokemonSpecies {
        name: string;
    }

    interface IPokemonSprites {
        front_shiny: string;
    }

    interface IPokemonAbility {
        name: string;
    }

    interface IPokemonAbilities {
        ability: IPokemonAbility;
    }

    interface IPokemon {
        abilities: IPokemonAbilities[];
        base_experience: number;
        forms: [];
        game_indices: [];
        height: number;
        held_items: [];
        id: number;
        is_default: boolean;
        location_area_encounters: string;
        moves: [];
        name: string;
        order: number;
        past_types: [];
        species: IPokemonSpecies;
        sprites: IPokemonSprites;
        stats: [];
        types: [];
        weight: number;
    }
}
