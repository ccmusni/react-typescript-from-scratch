import { IPokemon } from 'Pokemon';

declare module 'Counter' {
    interface ICounter {
        value: number;
        pokemonData: IPokemon;
    }
}
