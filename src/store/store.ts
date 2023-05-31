import { configureStore, combineReducers } from "@reduxjs/toolkit";
import favoritesReducer from "./slices/favorites-cityes";
import weatherReducer from "./slices/weather";
import { useDispatch } from "react-redux";
import statisticsReducer from "./slices/statistics";

const rootReducer = combineReducers({
  favorites: favoritesReducer,
  weather: weatherReducer,
  stats: statisticsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
