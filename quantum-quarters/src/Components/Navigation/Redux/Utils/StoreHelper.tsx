import { configureStore } from "@reduxjs/toolkit";
import type { StoreProps } from "../Types/Store";
import { createLogger } from "redux-logger";

export const setupStore = (props: StoreProps) => {
  const logger = createLogger({});
  const store = configureStore({
    reducer: props.reducers,
    middleware: (getDefaultMiddleware) =>
      process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test"
        ? getDefaultMiddleware().concat(logger)
        : getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== "production",
  });

  return store;
};
