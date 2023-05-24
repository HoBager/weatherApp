import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import storage from "../../helpers/storage";
import { getCity } from "../../api/api";
import { IWeather } from "../../types/weather";

interface IinitialState {
  isLoading: boolean;
  error: any;
  weather: IWeather | null;
}

const initialState: IinitialState = {
  isLoading: true,
  error: null,
  weather: null,
};

export const getCurrentCity = createAsyncThunk(
  "getCity/by-name",
  async (cityName: string, thunkAPI) => {
    const weather = await getCity(cityName);
    if (!weather) {
      return thunkAPI.rejectWithValue({ message: "CityNotFound" });
    }
    return weather;
  }
);

const weatherSlice = createSlice({
  name: "currentCity",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCurrentCity.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getCurrentCity.fulfilled, (state, action) => {
      const weather = action.payload;
      state.weather = weather;
      state.isLoading = false;
      storage.setLastCity(weather!.details.name);
    });
    builder.addCase(getCurrentCity.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.weather = null;
    });
  },
});

const weatherReducer = weatherSlice.reducer;

export default weatherReducer;
