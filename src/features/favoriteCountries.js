import { createSlice } from "@reduxjs/toolkit";

export const favoriteCountrySlice = createSlice({
    name: "favoriteCountries",
    initialState: { countries: []},
    reducers: {
        addCountry: (state, action) => {
            state.countries = true;
        },
        removeCountry: (state, action) => {
            state.countries = false;
        }
    }
});

//armazena a informação para atualizar o estado
export const { addCountry, removeCountry } = favoriteCountrySlice.actions;
//função de atualizar o estado
export default favoriteCountrySlice.reducer;