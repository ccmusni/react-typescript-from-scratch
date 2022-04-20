import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IPokemon } from 'Pokemon';

export const fetchPokemonByName = createAsyncThunk<
    // Return type of the payload creator
    IPokemon,
    // Argument to the payload creator
    string,
    // Types for ThunkAPI
    { rejectValue: string }
>('pokemon/fetchPokemonByName', async (name, thunkApi) => {
    const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${name}`
    );

    if (!response.ok) {
        const errorMessage = await response.text();
        return thunkApi.rejectWithValue(errorMessage);
    }

    return await response.json();
});
