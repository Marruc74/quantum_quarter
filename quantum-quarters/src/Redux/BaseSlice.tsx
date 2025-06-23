import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { BaseState } from "./Types/Types";

const name = "base";

const initialTheme = localStorage.getItem("theme") || "grimdark";
const initialState: BaseState = { theme: initialTheme };

export const BaseSlice = createSlice({
  name,
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<string>) {
      state.theme = action.payload;
      localStorage.setItem("theme", action.payload);
    },
  },
});

// eslint-disable-next-line react-refresh/only-export-components
export const { setTheme } = BaseSlice.actions;
export default BaseSlice.reducer;
