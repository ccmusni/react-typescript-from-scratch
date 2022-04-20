import {
    createSlice,
    isAnyOf,
    PayloadAction,
} from '@reduxjs/toolkit';
import { IPokemon } from 'Pokemon';
import type { RootState } from '../../../store';
import { fetchPokemonByName } from './counterActions';

// Define a type for the slice state
interface CounterState {
    value: number;
    pokemonData: IPokemon;
    status: string;
    error: string;
}

// Define the initial state using that type
const initialState: CounterState = {
    value: 0,
    pokemonData: null,
    status: 'idle',
    error: null,
} as CounterState;

export const counterSlice = createSlice({
    name: 'counter',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        // Use the PayloadAction type to declare the contents of `action.payload`
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPokemonByName.pending, (state) => {
                if (
                    state.status === 'idle' ||
                    state.status === 'error'
                ) {
                    state.status = 'pending';
                }
            })
            .addCase(
                fetchPokemonByName.fulfilled,
                (state, action) => {
                    if (state.status === 'pending') {
                        state.status = 'idle';
                        state.pokemonData = action.payload;
                        state.error = null;
                    }
                }
            )
            .addMatcher(
                isAnyOf(fetchPokemonByName.rejected),
                (state, action) => {
                    state.status = 'error';
                    state.pokemonData = null;
                    state.error = action.payload;
                }
            );
    },
});

export const { increment, decrement, incrementByAmount } =
    counterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value;

export default counterSlice.reducer;
