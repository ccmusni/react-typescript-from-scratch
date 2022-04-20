import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { decrement, increment } from './redux/counterSlice';
import { fetchPokemonByName } from './redux/counterActions';
import {
    getCounterError,
    getCounterPokemonData,
    getCounterStatus,
} from './redux/counterSelectors';
import PokemonByName from '../pokemon/PokemonByName';

export default function Counter() {
    const count = useAppSelector((state) => state.counter.value);
    const dispatch = useAppDispatch();
    const pokemons = [
        { id: 1, name: 'pikachu' },
        { id: 2, name: 'charmander' },
        { id: 3, name: 'squirtle' },
        { id: 4, name: 'bulbasaur' },
    ];
    const pokemonData = useAppSelector(getCounterPokemonData);
    const counterStatus = useAppSelector(getCounterStatus);
    const counterError = useAppSelector(getCounterError);

    useEffect(() => {
        if (!!count) {
            const pokemon = pokemons.find(
                (pokemon) => pokemon.id === count
            );
            dispatch(
                fetchPokemonByName(pokemon ? pokemon.name : null)
            );
        }
    }, [count]);

    return (
        <div>
            <div>
                <h2>Implement Redux State: Select Each Pokemon</h2>
                <button
                    style={{ fontSize: 20 }}
                    aria-label="Previous"
                    onClick={() => dispatch(decrement())}
                >
                    Previous
                </button>
                <span style={{ fontSize: 20 }}>{` ${count} `}</span>

                <button
                    style={{ fontSize: 20 }}
                    aria-label="Next"
                    onClick={() => dispatch(increment())}
                >
                    Next
                </button>
            </div>

            <div>
                {counterStatus === 'loading' ? (
                    <p>Loading..</p>
                ) : counterStatus === 'error' && !!counterError ? (
                    <p>{counterError}</p>
                ) : (
                    !!pokemonData && (
                        <PokemonByName data={pokemonData} />
                    )
                )}
            </div>
        </div>
    );
}
