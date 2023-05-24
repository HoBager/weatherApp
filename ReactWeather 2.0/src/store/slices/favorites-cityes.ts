import { createSlice } from "@reduxjs/toolkit";
import storage from "../../helpers/storage";

interface IinitialState {
  favoriteCities: string[];
}

const initialState: IinitialState = {
  favoriteCities: storage.getFavoriteCities(),
};

const favoriteCitiesSlice = createSlice({
  name: "favoriteCities",
  initialState,
  reducers: {
    toggleFavorities: (state, action) => {
      const isFavorite = state.favoriteCities.some(
        (city: string) => city === action.payload
      );
      if (isFavorite) {
        state.favoriteCities = state.favoriteCities.filter(
          (city: string) => city !== action.payload
        );
      } else {
        state.favoriteCities.push(action.payload);
      }
      storage.setFavoriteCities(state.favoriteCities);
    },
  },
});

export const { toggleFavorities } = favoriteCitiesSlice.actions;
const favoritesReducer = favoriteCitiesSlice.reducer;
export default favoritesReducer;
