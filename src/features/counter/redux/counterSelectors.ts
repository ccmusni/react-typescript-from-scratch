import { createDraftSafeSelector } from '@reduxjs/toolkit';
import { ICounter } from 'Counter';
import { IPokemon } from 'Pokemon';
import { RootState } from '../../../store';

export const getCounterState = (state: RootState): ICounter =>
    state.counter;

export const getCounterPokemonData = createDraftSafeSelector(
    getCounterState,
    (state: ICounter): IPokemon => state.pokemonData
);

export const getCounterStatus = createDraftSafeSelector(
    getCounterState,
    (state: ICounter): string => state.status
);

export const getCounterError = createDraftSafeSelector(
    getCounterState,
    (state: ICounter): string => state.error
);
