import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook,
} from "react-redux";
import { setupStore } from "./Utils/StoreHelper";
import BaseSlice from "./BaseSlice";

export const store = setupStore({
  reducers: {
    base: BaseSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
