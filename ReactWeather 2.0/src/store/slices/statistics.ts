import { createSlice } from "@reduxjs/toolkit";
import storage from "../../helpers/storage";

export interface IStats {
  [index: string]: number;
}

interface IinintialState {
  stats: IStats;
}

const initialState: IinintialState = {
  stats: storage.getStatistics(),
};

const statisticsCitySlice = createSlice({
  name: "statistics",
  initialState,
  reducers: {
    updateStats: (state, action) => {
      if (state.stats[action.payload] >= 0) {
        state.stats[action.payload] += 1;
      } else {
        state.stats[action.payload] = 1;
      }
    },
  },
});

const statisticsReducer = statisticsCitySlice.reducer;
export const { updateStats } = statisticsCitySlice.actions;
export default statisticsReducer;
