import type { BaseState } from "./Types";

export interface StoreProps {
  reducers: Reducer<unknown, AnyAction> | ReducersMapObject<unknown, AnyAction>;
}

export type FullState = {
  base: BaseState;
};
