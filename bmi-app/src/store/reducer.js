import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  heightCm: 0,
  weightKg: 0,
  heightFt: 0,
  heightIn: 0,
  weightSt: 0,
  weightLbs: 0,
};

const bmiReducer = createSlice({
  name: "bmiCalc",
  initialState,
  reducers: {
    updateHeightCm: (state, action) => {
      state.heightCm = action.payload;
    },
    updateWeightKg: (state, action) => {
      state.weightKg = action.payload;
    },
    updateHeightFt: (state, action) => {
      state.heightFt = action.payload;
    },
    updateHeightIn: (state, action) => {
      state.heightIn = action.payload;
    },
    updateWeightSt: (state, action) => {
      state.weightSt = action.payload;
    },
    updateWeightLbs: (state, action) => {
      state.weightLbs = action.payload;
    },
  },
});

export const {
  updateHeightCm,
  updateWeightKg,
  updateHeightFt,
  updateHeightIn,
  updateWeightSt,
  updateWeightLbs,
} = bmiReducer.actions;

export default bmiReducer.reducer;

const store = configureStore(bmiReducer);
